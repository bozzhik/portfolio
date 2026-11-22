import {after} from 'next/server'

const publication = {
  date: /^\d{4}-\d{2}-\d{2}(?:_v(?:[2-9]|[1-9]\d+))?$/,
  id: /^\d{4}-\d{2}-\d{2}-[a-f0-9]{12}$/,
  storageKey: /^public\/[a-zA-Z0-9_-]{1,160}$/,
  filename: /^[a-zA-Z0-9_][a-zA-Z0-9_. -]{0,174}\.pdf$/,
  maxBytes: 5 * 1024 * 1024,
}

const headers = {
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
}
const upstreamOptions = {cache: 'no-store', redirect: 'error'} as const

type Publication = {
  slug: string
  key: string
  filename: string
  bytes: number
}

function isPublication(value: unknown): value is Publication {
  if (!value || typeof value !== 'object') return false

  const {slug, key, filename, bytes} = value as Partial<Record<keyof Publication, unknown>>
  return (
    typeof slug === 'string' && publication.id.test(slug) &&
    typeof key === 'string' && publication.storageKey.test(key) &&
    typeof filename === 'string' && publication.filename.test(filename) &&
    typeof bytes === 'number' && Number.isInteger(bytes) && bytes > 0 && bytes <= publication.maxBytes
  )
}

function unavailable(primary: boolean, status = 404) {
  const fallback = process.env.CV_FALLBACK_URL
  if (primary && fallback && /^https?:\/\//i.test(fallback) && URL.canParse(fallback)) {
    return new Response(null, {status: 307, headers: {...headers, Location: fallback}})
  }

  return new Response(null, {status, headers})
}

function shouldCount(request: Request) {
  const purpose = request.headers.get('sec-purpose') ?? request.headers.get('purpose') ?? ''
  const userAgent = request.headers.get('user-agent') ?? ''
  return (
    request.method === 'GET' && !request.headers.has('range') &&
    !/prefetch|prerender/i.test(purpose) &&
    !/bot|crawler|preview|linkedin|slack|telegram|discord/i.test(userAgent)
  )
}

async function pdfResponse(request: Request, file: Publication, pdf: Response) {
  if (pdf.status === 404 || pdf.status === 416) {
    await pdf.body?.cancel()
    const errorHeaders = pdf.status === 416 ? {...headers, 'Content-Range': `bytes */${file.bytes}`} : headers
    return new Response(null, {status: pdf.status, headers: errorHeaders})
  }

  const partial = pdf.status === 206
  const length = pdf.headers.get('content-length')
  const contentRange = pdf.headers.get('content-range')
  if (
    (pdf.status !== 200 && !partial) ||
    pdf.headers.get('content-type')?.split(';')[0] !== 'application/pdf' ||
    (partial ? !contentRange : length !== null && Number(length) !== file.bytes)
  ) {
    await pdf.body?.cancel()
    return new Response(null, {status: 502, headers})
  }

  const download = new URL(request.url).searchParams.get('download') === '1'
  const responseHeaders = new Headers({
    ...headers,
    'Content-Type': 'application/pdf',
    'Content-Disposition': `${download ? 'attachment' : 'inline'}; filename="${file.filename}"`,
  })
  if (partial && length !== null) responseHeaders.set('Content-Length', length)
  if (!partial) responseHeaders.set('Content-Length', String(file.bytes))
  if (contentRange) responseHeaders.set('Content-Range', contentRange)
  const acceptRanges = pdf.headers.get('accept-ranges')
  if (acceptRanges) responseHeaders.set('Accept-Ranges', acceptRanges)

  if (request.method === 'HEAD') {
    await pdf.body?.cancel()
    return new Response(null, {status: pdf.status, headers: responseHeaders})
  }

  return new Response(pdf.body, {status: pdf.status, headers: responseHeaders})
}

async function recordClick(origin: string, authHeaders: HeadersInit, slug: string, primary: boolean) {
  try {
    const counter = new URL('/api/cv/click', origin)
    counter.search = new URLSearchParams({slug, source: primary ? 'stable' : 'share'}).toString()
    const result = await fetch(counter, {
      ...upstreamOptions,
      method: 'POST',
      headers: authHeaders,
      signal: AbortSignal.timeout(1200),
    })
    if (!result.ok) console.warn('CV counter returned', result.status)
  } catch {
    console.warn('CV counter unavailable')
  }
}

export async function GET(request: Request, {params}: RouteContext<'/cv/[[...slug]]'>) {
  const {slug: parts = []} = await params
  const [date] = parts
  if (parts.length > 1 || (date && !publication.date.test(date))) return unavailable(false)

  const primary = !date
  const origin = process.env.CV_LAKEBED_ORIGIN
  const token = process.env.CV_GATEWAY_TOKEN
  if (!origin || !token) return unavailable(primary, primary ? 503 : 404)

  const lakebedHeaders = {'x-cv-token': token}

  try {
    const resolve = new URL('/api/cv/resolve', origin)
    resolve.searchParams.set('slug', date ?? 'stable')
    const metadata = await fetch(resolve, {
      ...upstreamOptions,
      headers: lakebedHeaders,
      signal: AbortSignal.timeout(5000),
    })

    if (metadata.status === 404) return unavailable(primary)
    if (!metadata.ok) return new Response(null, {status: 502, headers})

    const file: unknown = await metadata.json()
    if (!isPublication(file)) return new Response(null, {status: 502, headers})

    // Lakebed can deliver the full file when it does not support the requested range.
    const range = request.headers.get('range')
    const pdf = await fetch(new URL(`/storage/${file.key}`, origin), {
      ...upstreamOptions,
      headers: range ? {Range: range} : undefined,
      signal: AbortSignal.timeout(10000),
    })
    const response = await pdfResponse(request, file, pdf)
    if (response.ok && shouldCount(request)) {
      after(() => recordClick(origin, lakebedHeaders, file.slug, primary))
    }

    return response
  } catch {
    return new Response(null, {status: 502, headers})
  }
}

export const HEAD = GET

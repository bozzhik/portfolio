import {isIP} from 'node:net'
import {after, type NextRequest} from 'next/server'

const publication = {
  shareSlug: /^\d{4}-\d{2}-\d{2}(?:_v(?:[2-9]|[1-9]\d+)|-(?:ru|md))?$/,
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
const retryableCounterStatuses = new Set([408, 500, 502, 503, 504])
const visitorCookie = 'cv_visitor'
const visitorMaxAge = 30 * 24 * 60 * 60
const visitorId = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
const domainName = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/
const browserFamilies = [
  ['edge', /\b(?:Edg|EdgA|EdgiOS|Edge)\//i],
  ['opera', /\b(?:OPR|OPiOS|Opera)\//i],
  ['samsung-internet', /\bSamsungBrowser\//i],
  ['yandex', /\bYaBrowser\//i],
  ['firefox', /\b(?:Firefox|FxiOS)\//i],
  ['chrome', /\b(?:Chrome|CriOS|Chromium)\//i],
  ['safari', /\bVersion\/.+\bSafari\//i],
] as const
const osFamilies = [
  ['windows', /\bWindows\b/i],
  ['ios', /\b(?:iPad|iPhone|iPod)\b/i],
  ['android', /\bAndroid\b/i],
  ['chromeos', /\bCrOS\b/i],
  ['macos', /\b(?:Macintosh|Mac OS X)\b/i],
  ['linux', /\bLinux\b/i],
] as const

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

function shouldCount(request: Request) {
  const purpose = request.headers.get('sec-purpose') ?? request.headers.get('purpose') ?? ''
  const userAgent = request.headers.get('user-agent') ?? ''
  return (
    request.method === 'GET' && !request.headers.has('range') &&
    !/prefetch|prerender/i.test(purpose) &&
    !/bot|crawler|preview|spider|facebookexternalhit|meta-(?:externalagent|externalfetcher|webindexer|externalads)/i.test(userAgent)
  )
}

function identifyVisitor(request: NextRequest, response: Response) {
  if (request.headers.get('sec-gpc') === '1') return

  const existing = request.cookies.get(visitorCookie)?.value
  if (existing && visitorId.test(existing)) return existing

  const visitor = crypto.randomUUID()
  response.headers.set(
    'Set-Cookie',
    `${visitorCookie}=${visitor}; Max-Age=${visitorMaxAge}; Path=/cv; HttpOnly; Secure; SameSite=Lax`,
  )
  return visitor
}

function referrerDomain(referer: string | null) {
  if (!referer) return

  try {
    const {protocol, hostname} = new URL(referer)
    if (protocol !== 'http:' && protocol !== 'https:') return

    const domain = hostname.replace(/\.$/, '')
    if (domain.length <= 253 && domainName.test(domain) && !isIP(domain)) return domain
  } catch {
    return
  }
}

function clientContext(headers: Headers) {
  const userAgent = headers.get('user-agent') ?? ''
  const browser = browserFamilies.find(([, pattern]) => pattern.test(userAgent))?.[0]
  const os = osFamilies.find(([, pattern]) => pattern.test(userAgent))?.[0]
  const country = headers.get('x-vercel-ip-country')
  const referrer = referrerDomain(headers.get('referer'))
  const context: Record<string, string> = {}
  if (browser) context.browser = browser
  if (os) context.os = os
  if (country && /^[a-z]{2}$/i.test(country)) context.country = country.toUpperCase()
  if (referrer) context.referrer = referrer

  if (/\b(?:iPad|Tablet)\b/i.test(userAgent)) {
    context.device = 'tablet'
  } else if (/\b(?:Mobile|iPhone|iPod|Windows Phone)\b/i.test(userAgent)) {
    context.device = 'mobile'
  } else if (os === 'android' && browser && !/\b(?:TV|SmartTV|GoogleTV|AFT\w+)\b/i.test(userAgent)) {
    // Android browsers generally omit the Mobile token in tablet mode.
    context.device = 'tablet'
  } else if (/\b(?:Windows NT|Macintosh|X11|CrOS)\b/i.test(userAgent) && (os !== 'android' && os !== 'ios')) {
    context.device = 'desktop'
  }

  return context
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

async function recordClick(origin: string, authHeaders: HeadersInit, query: URLSearchParams) {
  const counter = new URL('/api/cv/click', origin)
  counter.search = query.toString()

  for (let attempt = 0; attempt < 2; attempt++) {
    if (attempt > 0) await new Promise(resolve => setTimeout(resolve, 100))

    try {
      const result = await fetch(counter, {
        cache: 'no-store',
        redirect: 'manual',
        method: 'POST',
        headers: authHeaders,
        signal: AbortSignal.timeout(1200),
      })
      void result.body?.cancel().catch(() => undefined)
      if (result.ok) return
      if (attempt === 1 || !retryableCounterStatuses.has(result.status)) {
        console.warn('CV counter returned', result.status)
        return
      }
    } catch {
      if (attempt === 1) console.warn('CV counter unavailable')
    }
  }
}

export async function GET(request: NextRequest, {params}: RouteContext<'/cv/[[...slug]]'>) {
  const {slug: parts = []} = await params
  const [slug] = parts
  if (parts.length > 1 || (slug && !publication.shareSlug.test(slug))) return new Response(null, {status: 404, headers})

  const primary = !slug
  const origin = process.env.CV_LAKEBED_ORIGIN
  const token = process.env.CV_GATEWAY_TOKEN
  if (!origin || !token) return new Response(null, {status: primary ? 503 : 404, headers})

  const lakebedHeaders = {'x-cv-token': token}

  try {
    const resolve = new URL('/api/cv/resolve', origin)
    resolve.searchParams.set('slug', slug ?? 'stable')
    const metadata = await fetch(resolve, {
      ...upstreamOptions,
      headers: lakebedHeaders,
      signal: AbortSignal.timeout(5000),
    })

    if (metadata.status === 404) return new Response(null, {status: 404, headers})
    if (!primary && metadata.status === 410) {
      const destination = request.nextUrl.searchParams.get('download') === '1' ? '/cv?download=1' : '/cv'
      return new Response(null, {status: 307, headers: {...headers, Location: destination}})
    }
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
    if (response.status === 200 && shouldCount(request)) {
      try {
        const visitor = identifyVisitor(request, response)
        const context = visitor ? {visitor, ...clientContext(request.headers)} : {}
        const query = new URLSearchParams({
          slug: file.slug,
          source: primary ? 'stable' : 'share',
          event: crypto.randomUUID(),
          at: String(Date.now()),
          ...context,
        })
        after(() => recordClick(origin, lakebedHeaders, query))
      } catch {
        console.warn('CV counter could not be scheduled')
      }
    }

    return response
  } catch {
    return new Response(null, {status: 502, headers})
  }
}

export const HEAD = GET

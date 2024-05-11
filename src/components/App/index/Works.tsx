import {client} from '@/lib/sanity'
import {revalidateOnTime} from '@/lib/utils'

import Link from 'next/link'
import {Text} from '#/UI/Text'
import {WorkCard} from '#/UI/WorkCard'
import {ArrowLink} from '#/UI/ArrowLink'

export interface Work {
  name: string
  link: string
  id: number
  description: string
  image: Array<{asset: {url: string}}>
  variant: string
  stack: Array<{name: string; value: string}>
  in_development: boolean
  is_special: boolean
}

async function getData(): Promise<Work[]> {
  const data = await client.fetch<Work>(
    `*[_type == 'work'] {
        name,
        link,
        id,
        description,
        image,
        variant,
        stack[] -> { name, value },
        in_development,
        is_special,
    }`,
    {},
    {
      next: {
        revalidate: revalidateOnTime,
      },
    },
  )
  return Array.isArray(data) ? data : []
}

interface WorksProps {
  isIndex?: boolean
}

const Works: React.FC<WorksProps> = async ({isIndex = false}) => {
  const works: Work[] = await getData()

  if (!works) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  works.sort((a, b) => a.id - b.id)

  return (
    <section data-section="works" className="space-y-8">
      {isIndex ? (
        <div className="flex justify-between items-center">
          <Text type="heading">my works</Text>
          {/* <ArrowLink href="/works/" target={false} text="View all" className="text-neutral-500" svgClassName="fill-neutral-500" /> */}
        </div>
      ) : (
        <Text type="heading">my works</Text>
      )}

      {isIndex && <Text>Creating landing pages, multi-page websites, and web applications is my forte. I oversee the entire process from idea and design to coding and delivering the final product.</Text>}

      <div className="flex flex-col gap-5 sm:gap-3">
        {works.map((work, index) =>
          isIndex && work.is_special ? (
            <WorkCard work={work} index={index} key={index} /> // index page view
          ) : !isIndex ? (
            <WorkCard work={work} index={index} key={index} />
          ) : null,
        )}
        {isIndex && (
          <Link href="/works/" className="py-2 sm:py-2.5 text-center hover:text-white/60 duration-200 sm:text-sm from-neutral-900/50 to-neutral-900/50 bg-gradient-to-b rounded-xl border-[1px] border-neutral-800 border-b-0">
            View all
          </Link>
        )}
      </div>
    </section>
  )
}

export default Works

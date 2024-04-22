import {client} from '@/lib/sanity'
import {revalidateOnTime} from '@/lib/utils'

import Link from 'next/link'
import {Text} from '#/UI/Text'
import {WorkCard} from '#/UI/WorkCard'

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
        <div className="flex items-end justify-between">
          <Text type="heading">my works</Text>
          <Link href="/works" className="text-xl font-medium underline duration-300 underline-offset-2 text-neutral-600 opacity-70 hover:opacity-100">
            view all
          </Link>
        </div>
      ) : (
        <Text type="heading">my works</Text>
      )}

      {isIndex ? (
        <Text>Creating landing pages, multi-page websites, and web applications is my forte. I oversee the entire process from idea and design to coding and delivering the final product.</Text>
      ) : (
        <Text>I specialize in crafting landing pages, multi-page websites, and web applications. From conceptualization to design, coding, and website publication, I handle the entire process autonomously.</Text> // index page
      )}

      <div className="flex flex-col gap-5 sm:gap-3">
        {works.map((work, index) =>
          isIndex && work.is_special ? (
            <WorkCard work={work} index={index} key={index} /> // index page
          ) : !isIndex ? (
            <WorkCard work={work} index={index} key={index} />
          ) : null,
        )}
      </div>
    </section>
  )
}

export default Works

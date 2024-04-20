import {unstable_noStore as noStore} from 'next/cache'
import {client, urlForImage} from '@/lib/sanity'

import Link from 'next/link'
import Image from 'next/image'

import {Text} from '#/UI/Text'

interface Project {
  name: string
  link?: string
  id: number
  description: string
  image: Array<{asset: {url: string}}>
  in_development: boolean
}

const getData = async (): Promise<Project[]> => {
  noStore()

  const query = `
    *[_type == 'project'] {
        name,
        link,
        id,
        description,
        image,
        in_development,
    }`

  const data: Project[] = await client.fetch(query)
  return data
}

const Projects = async () => {
  const projects: Project[] = await getData()

  if (!projects) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  return (
    <section data-section="projects-index" className="mt-8">
      <Text type="heading">my projects</Text>

      {projects.map((slide, index) => (
        <article className="space-y-5 mt-5" key={index}>
          <div className="s-32">
            <Image quality={100} priority={true} className="object-cover w-full h-full" src={urlForImage(slide.image).url()} width={100} height={100} alt={slide.name} />
          </div>

          <div>
            <Text type="heading">{slide.name}</Text>
            <Text>{slide.description}</Text>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Projects

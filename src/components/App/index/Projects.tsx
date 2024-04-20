import {client, urlForImage} from '@/lib/sanity'

import Link from 'next/link'
import Image from 'next/image'

import {Text} from '#/UI/Text'
// import {Badge} from '#/UI/Badge'

interface Project {
  name: string
  link?: string
  id: number
  description: string
  image: Array<{asset: {url: string}}>
  in_development: boolean
}

async function getData(): Promise<Project[]> {
  const data = await client.fetch<Project>(
    `*[_type == 'project'] {
        name,
        link,
        id,
        description,
        image,
        in_development,
    }`,
    {},
    {
      next: {
        revalidate: 30,
      },
    },
  )
  return Array.isArray(data) ? data : []
}

const Projects = async () => {
  const projects: Project[] = await getData()

  if (!projects) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  projects.sort((a, b) => a.id - b.id)

  return (
    <section data-section="projects-index" className="mt-8">
      <Text type="heading">my projects</Text>

      <div className="flex flex-col gap-5 mt-5">
        {projects.map((project, index) => (
          <Link className={`group relative flex flex-col overflow-hidden h-[35vh] duration-500 rounded-2xl border-[1px] border-neutral-800 border-b-0 ${!project.link && 'pointer-events-none cursor-none'}`} href={`${project.link || ' '}`} key={index}>
            <Image quality={100} priority={true} className="ant object-cover object-top w-full h-full duration-500 -z-20 group-hover:scale-[102%]" src={urlForImage(project.image).url()} fill={true} sizes="70vw" alt={project.name} />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-custom-black/0 via-custom-black/30 to-custom-black -z-10"></div>

            <div className="flex flex-col pb-5 pl-8 mt-auto text-neutral-300">
              {/* {project.in_development && <Badge text="COMING SOON" className="mb-1 animate-pulse" />} */}
              <Text type="heading">{project.name}</Text>
              <Text className="leading-normal max-w-[35ch]">{project.description}</Text>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects

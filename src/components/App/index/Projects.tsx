import {client} from '@/lib/sanity'
import {revalidateOnTime} from '@/lib/utils'

import {Text} from '#/UI/Text'
import {ProjectCard} from '#/UI/ProjectCard'

export interface Project {
  name: string
  link?: string
  id: number
  description: string
  image: Array<{asset: {url: string}}>
  in_development: boolean
  is_special: boolean
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

interface ProjectsProps {
  isIndex?: boolean
}

const Projects: React.FC<ProjectsProps> = async ({isIndex = false}) => {
  const projects: Project[] = await getData()

  if (!projects) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  projects.sort((a, b) => a.id - b.id)

  return (
    <section id="PROJECTS" data-section="projects" className="mt-8 space-y-8">
      <Text type="heading">my products</Text>

      {isIndex && <Text>This section includes my university projects, in which we create ready-to-launch digital products, as well as interesting projects that I do for myself.</Text>}

      <div className="flex flex-col gap-5 sm:gap-3">
        {projects.map((project, index) =>
          isIndex && project.is_special ? (
            <ProjectCard project={project} index={index} key={index} /> // index page
          ) : !isIndex ? (
            <ProjectCard project={project} index={index} key={index} />
          ) : null,
        )}
      </div>
    </section>
  )
}

export default Projects

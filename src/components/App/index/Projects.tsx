import {client} from '@/lib/sanity'
import {Text} from '#/UI/Text'
import {ProjectCard} from '@/components/UI/ProjectCard'

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
        revalidate: 30,
      },
    },
  )
  return Array.isArray(data) ? data : []
}

interface ProjectsProps {
  filterSpecial?: boolean
}

const Projects: React.FC<ProjectsProps> = async ({filterSpecial = false}) => {
  const projects: Project[] = await getData()

  if (!projects) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  projects.sort((a, b) => a.id - b.id)

  return (
    <section data-section="projects-index" className="mt-8 space-y-8">
      <Text type="heading">my projects</Text>

      <div className="flex flex-col gap-5 sm:gap-3">
        {projects.map((project, index) =>
          filterSpecial && project.is_special ? (
            <ProjectCard project={project} index={index} key={index} /> // index page
          ) : !filterSpecial ? (
            <ProjectCard project={project} index={index} key={index} /> // projects page
          ) : null,
        )}
      </div>
    </section>
  )
}

export default Projects

import {client} from '@/lib/sanity'
import {Text} from '#/UI/Text'
import {Card} from '#/UI/Card'

export interface Project {
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

  const completeProjects = projects.filter((project) => !project.in_development)

  completeProjects.sort((a, b) => a.id - b.id)

  return (
    <section data-section="projects-index" className="mt-8 space-y-8">
      <Text type="heading">my projects</Text>

      <div className="flex flex-col gap-5 sm:gap-3">
        {completeProjects.map((project, index) => (
          <Card project={project} index={index} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects

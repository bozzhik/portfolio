import {client} from '@/lib/sanity'
import {revalidateTime} from '@/lib/utils'
import {Product} from '@/types/product'

import Block from '#/UI/Block'
import ProductCard from '#/UI/ProductCard'

export async function getProjects(): Promise<Product[]> {
  const data = await client.fetch<Product>(
    `*[_type == 'project'] {
        name,
        link,
        id,
        description,
        type,
        "slug": slug.current,
        image,
        "hover_color":color.rgb,
        is_best,
        in_development,
        is_draft,
    }`,
    {},
    {
      next: {
        revalidate: revalidateTime,
      },
    },
  )
  return Array.isArray(data) ? data : []
}

const projectsData = {
  heading: 'my products',
  text: "This section showcases my personal products that I create for practice in programming and design, and to solve my own problems and the needs of my friends', as well as my student projects, where we develop ready-to-launch digital products.",
}
const {heading, text} = projectsData

export default async function Projects() {
  const projects: Product[] = await getProjects()

  if (!projects) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  projects.sort((a, b) => a.id - b.id)

  return (
    <Block id="PROJECTS" token={'projects-index'} className="scroll-mt-8 sm:scroll-mt-5" heading={heading} text={text}>
      <div className="flex flex-col gap-5 sm:gap-4">
        {projects
          .filter((project) => project.is_best && !project.is_draft)
          .map((project, index) => (
            <ProductCard type="project" product={project} key={index} />
          ))}
      </div>
    </Block>
  )
}

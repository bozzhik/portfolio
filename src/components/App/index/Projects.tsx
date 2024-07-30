import {client} from '@/lib/sanity'
import {revalidateTime} from '@/lib/utils'
import {Product} from '@/types/product'

import Text from '#/UI/Text'
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

export default async function Projects() {
  const projects: Product[] = await getProjects()

  if (!projects) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  projects.sort((a, b) => a.id - b.id)

  return (
    <section id="PROJECTS" data-section="projects-index" className="scroll-mt-8 sm:scroll-mt-5 space-y-8">
      <div className="space-y-4 sm:space-y-3">
        <Text type="heading">my products</Text>
        <Text>This section includes my university projects, in which we create ready-to-launch digital products, as well as interesting projects that I do for myself.</Text>
      </div>

      <div className="flex flex-col gap-5 sm:gap-4">
        {projects
          .filter((project) => project.is_best)
          .map((project, index) => (
            <ProductCard type="project" product={project} key={index} />
          ))}
      </div>
    </section>
  )
}

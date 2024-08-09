import {client} from '@/lib/sanity'
import {revalidateTime} from '@/lib/utils'
import {Product} from '@/types/product'

import Block from '#/UI/Block'
import ProductCard from '#/UI/ProductCard'
import Button from '#/UI/Button'

export async function getWorks(): Promise<Product[]> {
  const data = await client.fetch<Product>(
    `*[_type == 'work'] {
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

const worksData = {
  heading: 'my works',
  text: 'Creating unique websites and designing interfaces is my passion. I oversee the entire process from idea and design to coding and delivering the final product.',
}
const {heading, text} = worksData

export default async function Works() {
  const works: Product[] = await getWorks()

  if (!works) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  works.sort((a, b) => a.id - b.id)

  return (
    <Block token={'works-index'} heading={heading} text={text}>
      <div className="flex flex-col gap-5 sm:gap-4">
        {works
          .filter((work) => work.is_best)
          .map((work, index) => (
            <ProductCard type="work" product={work} key={index} />
          ))}

        <Button href="/works" text="View All" />
      </div>
    </Block>
  )
}

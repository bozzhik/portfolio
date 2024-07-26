import {client} from '@/lib/sanity'
import {revalidateTime} from '@/lib/utils'
import {Product} from '@/types/product'

import Link from 'next/link'
import Text from '#/UI/Text'
import ProductCard from '#/UI/ProductCard'

export async function getWorks(): Promise<Product[]> {
  const data = await client.fetch<Product>(
    `*[_type == 'work'] {
        name,
        link,
        id,
        description,
        type,
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

export default async function Works() {
  const works: Product[] = await getWorks()

  if (!works) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  works.sort((a, b) => a.id - b.id)

  return (
    <section data-section="works-index" className="space-y-8 sm:space-y-6">
      <div className="space-y-4 sm:space-y-3">
        <Text type="heading">my works</Text>
        <Text className="sm:hidden">Creating unique websites and designing interfaces is my passion. I oversee the entire process from idea and design to coding and delivering the final product.</Text>
      </div>

      <div className="flex flex-col gap-5 sm:gap-4">
        {works
          .filter((work) => work.is_best)
          .map((work, index) => (
            <ProductCard type="work" product={work} key={index} />
          ))}

        <Link href="/works" className="w-full block py-2 font-book sm:font-normal text-center hover:text-white/60 duration-200 sm:text-base from-neutral-900/50 to-neutral-900/50 bg-gradient-to-b rounded-xl sm:rounded-lg border-[1px] border-neutral-800 border-b-0">
          View all
        </Link>
      </div>
    </section>
  )
}

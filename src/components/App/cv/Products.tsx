import {Product} from '@/types/product'
import {getWorks} from '##/index/Works'
import ProductCard from '#/UI/ProductCard'

import Block from '##/cv/Block'
import Text from '#/UI/Text'

export default async function Products() {
  const works: Product[] = await getWorks()

  const worksList = {
    1: 'graphite-house',
    2: 'udelnaya',
  }

  if (!works) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  const slugsInOrder = Object.values(worksList)
  const filteredAndSortedWorks = works.filter((work) => slugsInOrder.includes(work.slug)).sort((a, b) => slugsInOrder.indexOf(a.slug) - slugsInOrder.indexOf(b.slug))

  return (
    <Block index="projects" heading="projects">
      <Text>
        Explore some of the <span className="text-white">projects</span> I have worked on, showcasing my expertise and creativity in development and design. From sleek landing pages to complex multi-page websites and interactive web applications, here are a few examples.
      </Text>

      <div className="flex flex-col gap-5 sm:gap-4">
        {filteredAndSortedWorks.map((work, index) => (
          <ProductCard type="work" product={work} key={index} />
        ))}
      </div>
    </Block>
  )
}

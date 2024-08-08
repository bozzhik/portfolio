import {Product} from '@/types/product'
import {getWorks} from '##/index/Works'
import {getProjects} from '##/index/Projects'

import Block from '##/cv/Block'
import Text from '#/UI/Text'
import ProductCard from '#/UI/ProductCard'
import Button from '#/UI/Button'

export default async function Products() {
  const works: Product[] = await getWorks()
  const projects: Product[] = await getProjects()

  const productList = {
    1: 'murino-arena',
    2: 'udelnaya',
  }

  if (!works || !projects) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  const allProducts = [...works, ...projects]
  const slugsInOrder = Object.values(productList)

  const filteredAndSortedProducts = allProducts.filter((product) => slugsInOrder.includes(product.slug)).sort((a, b) => slugsInOrder.indexOf(a.slug) - slugsInOrder.indexOf(b.slug))

  return (
    <Block index="projects" heading="projects">
      <Text>
        Explore some of the <span className="text-white">projects</span> I have worked on, showcasing my expertise and creativity in development and design. From sleek landing pages to complex multi-page websites and interactive web applications, here are a few examples.
      </Text>

      <div className="flex flex-col gap-5 sm:gap-4">
        {filteredAndSortedProducts.map((product, index) => (
          <ProductCard type="work" product={product} key={index} />
        ))}
      </div>

      <Button href="/works" text="View All" />
    </Block>
  )
}

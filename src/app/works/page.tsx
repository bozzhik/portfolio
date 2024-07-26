import {Product} from '@/types/product'
import {getWorks} from '##/index/Works'

import Text from '#/UI/Text'
import ProductCard from '#/UI/ProductCard'

import Container from '#/Global/Container'

export default async function WorksPage() {
  const works: Product[] = await getWorks()

  if (!works) {
    return <mark>Произошла ошибка при получении данных!</mark>
  }

  works.sort((a, b) => a.id - b.id)

  return (
    <Container className="space-y-6">
      <div className="space-y-4 sm:space-y-3">
        <Text type="heading">my works</Text>
      </div>

      <div className="flex flex-col gap-5 sm:gap-4">
        {works.map((work, index) => (
          <ProductCard type="work" product={work} key={index} />
        ))}
      </div>
    </Container>
  )
}

import {Product} from '@/types/product'
import {getWorks} from '##/index/Works'

import Container from '#/Global/Container'
import Text from '#/UI/Text'
import WorkFilter from '@/app/works/WorkFilters'

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

      <WorkFilter works={works} />
    </Container>
  )
}

import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Works',
}

import Container from '~/Global/Container'
import Projects from '@/components/App/works/Projects'

export default function WorksPage() {
  return (
    <Container>
      <Projects view="works" delay={0.2} />
    </Container>
  )
}

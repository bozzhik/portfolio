import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Works',
}

import Container from '~/Global/Container'
import Projects from '@/components/App/works/Projects'

import NavigationButton from '~/UI/NavigationButton'

export default function WorksPage() {
  return (
    <Container className="sm:gap-7">
      <NavigationButton href="/" text="← Back home" />

      <Projects view="works" delay={0.2} />
    </Container>
  )
}

import Container from '#/Global/Container'
import Hero from '##/index/Hero'
import Projects from '@/components/App/index/Projects'

export default function Index() {
  return (
    <Container className="space-y-14">
      <Hero />
      <Projects />
    </Container>
  )
}

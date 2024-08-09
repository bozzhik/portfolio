import Container from '#/Global/Container'
import Hero from '##/index/Hero'
import Works from '##/index/Works'
import Projects from '##/index/Projects'

export default function IndexPage() {
  return (
    <Container className="space-y-10">
      <Hero />
      <Works />
      <Projects />
    </Container>
  )
}

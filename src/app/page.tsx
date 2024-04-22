import Container from '#/Global/Container'
import Hero from '##/index/Hero'
import Works from '##/index/Works'
import Projects from '##/index/Projects'

export default function IndexPage() {
  return (
    <Container className="space-y-14">
      <Hero />
      <Works isIndex={true} />
      <Projects isIndex={true} />
    </Container>
  )
}

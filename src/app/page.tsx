import Container from '~/Global/Container'
import About from '~~/home/About'
import Projects from '~~/home/Projects'

export default function Home() {
  return (
    <Container className="gap-8">
      <About />
      <Projects />
    </Container>
  )
}

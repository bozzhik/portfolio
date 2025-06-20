import Container from '~/Global/Container'
import About from '~~/home/About'
import Projects from '@/components/App/works/Projects'

export default function HomePage() {
  return (
    <Container>
      <About delay={0.2} />
      <Projects view="home" delay={0.4} />
    </Container>
  )
}

import Container from '#/Global/Container'
import Hero from '##/cv/Hero'
import ImageGrid from '##/cv/ImageGrid'

export default function CvPage() {
  return (
    <Container className="space-y-8">
      <Hero />
      <ImageGrid />
    </Container>
  )
}

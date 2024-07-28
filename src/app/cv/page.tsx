import Container from '#/Global/Container'
import Hero from '##/cv/Hero'
import ImageGrid from '##/cv/ImageGrid'

export default function CvPage() {
  return (
    <Container className="space-y-8 sm:space-y-6">
      <Hero />
      <ImageGrid />
    </Container>
  )
}

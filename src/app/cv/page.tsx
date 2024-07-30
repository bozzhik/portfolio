import Container from '#/Global/Container'

import Hero from '##/cv/Hero'
import ImageGrid from '##/cv/ImageGrid'
import Connect from '##/cv/Connect'

import Block from '##/cv/Block'
import Text from '#/UI/Text'

export default function CvPage() {
  return (
    <Container className="space-y-8 xl:space-y-6 sm:space-y-8">
      <Hero />
      <ImageGrid />

      <Block index="about" heading="about me">
        <Text>I am a student at HSE University, pursuing a Bachelor&#39;s degree in Computer Science. With a strong passion for technology, software, and design, I am always eager to expand my knowledge and skills in these fields. Additionally, my interests in 3D modeling and product promotion beautifully complement my technical studies.</Text>
      </Block>

      <Connect />
    </Container>
  )
}

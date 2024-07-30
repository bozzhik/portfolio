import Container from '#/Global/Container'
import Text from '#/UI/Text'
import Block from '##/cv/Block'

import Hero from '##/cv/Hero'
import Jobs from '##/cv/Jobs'
import Skills from '##/cv/Skills'
import GetMe from '##/cv/GetMe'

export default function CvPage() {
  return (
    <Container className="space-y-8">
      <Hero />

      <Block index="about" heading="about me">
        <Text>I am a student at HSE University, pursuing a Bachelor&#39;s degree in Computer Science. With a strong passion for technology, software, and design, I am always eager to expand my knowledge and skills in these fields. Additionally, my interests in 3D modeling and product promotion beautifully complement my technical studies.</Text>
      </Block>

      <Jobs />
      <Skills />
      <GetMe />
    </Container>
  )
}

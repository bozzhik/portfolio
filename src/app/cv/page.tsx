import Container from '#/Global/Container'

import Hero from '##/cv/Hero'
import About from '##/cv/About'
import Jobs from '##/cv/Jobs'
import Education from '##/cv/Education'
import Products from '##/cv/Products'
import Skills from '##/cv/Skills'
import GetMe from '##/cv/GetMe'
import Pdf from '##/cv/Pdf'

export default function CvPage() {
  return (
    <Container className="space-y-8">
      <Hero />
      <About />

      <Jobs />
      <Education />
      <Products />
      <Skills />
      <GetMe />

      <Pdf />
    </Container>
  )
}

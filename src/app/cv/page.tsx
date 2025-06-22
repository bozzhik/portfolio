import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'CV',
}

import Container from '~/Global/Container'
import About from '~~/home/About'

import NavigationButton from '~/UI/NavigationButton'

export default function CVPage() {
  return (
    <Container className="sm:gap-7">
      <div className="flex gap-1.25">
        <NavigationButton href="/" text="← Back home" className="w-fit px-6 text-nowrap" />
        <NavigationButton href="/cv-pdf" target="_blank" text="Download CV" />
      </div>

      <About view="cv" delay={0.2} />
    </Container>
  )
}

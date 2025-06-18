import {CONTENT} from '@/content'
import Block from '~/UI/Block'
import {P} from '~/UI/Typography'

export default function About({delay}: {delay?: number}) {
  const {text, badges} = CONTENT.homePage.about

  return (
    <Block section="about" delay={delay}>
      <P>
        {text.split(new RegExp(`(${badges.join('|')})`, 'g')).map((part, i) =>
          badges.includes(part) ? (
            <span key={i} className="text-foreground font-semibold">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </P>
    </Block>
  )
}

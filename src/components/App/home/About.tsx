import {CONTENT} from '@/content'
import Block from '~/UI/Block'
import {P} from '~/UI/Typography'

export default function About() {
  const {text, badges} = CONTENT.homePage.about

  return (
    <Block section="about">
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

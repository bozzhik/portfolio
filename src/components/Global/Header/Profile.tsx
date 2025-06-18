import {CONTENT} from '@/content'

import Image from 'next/image'
import {H1, SPAN} from '~/UI/Typography'

export default function Profile() {
  const {person} = CONTENT.global

  return (
    <div className="flex items-center gap-3.5">
      <Image quality={100} className="size-14 rounded-[10px]" src={person.picture} alt={`${person.name} — Frontend & Mobile Developer`} />

      <div>
        <H1>{person.name}</H1>
        <SPAN>{person.taglines[Math.floor(Math.random() * person.taglines.length)]}</SPAN>
      </div>
    </div>
  )
}

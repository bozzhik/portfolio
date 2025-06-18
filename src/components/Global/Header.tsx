import {WEBSITE_BOX} from '~/Global/Container'
import {CONTENT} from '@/content'

import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import {H1, SPAN} from '~/UI/Typography'

export default function Header() {
  const {person, socials} = CONTENT.global

  return (
    <header className={cn(WEBSITE_BOX, 'mt-20', 'flex items-center justify-between')}>
      <div className="flex items-center gap-3.5">
        <Image quality={100} className="size-14 rounded-[10px]" src={person.picture} alt={`${person.name} — Frontend & Mobile Developer`} />

        <div>
          <H1>{person.name}</H1>
          <SPAN>{person.taglines[Math.floor(Math.random() * person.taglines.length)]}</SPAN>
        </div>
      </div>

      <div className="flex gap-1.25">
        {Object.entries(socials).map(([key, item]) => (
          <Link className={cn('p-2 size-fit group grid place-items-center', 'group hover:bg-opacity-10 duration-200', 'rounded-[10px] border', item.contrast ? 'border-foreground/15' : 'border-foreground/7')} style={{backgroundColor: item.color || '#202020'}} href={item.link} target="_blank" rel="noopener noreferrer" key={key}>
            {typeof item.content === 'string' ? <SPAN className="px-1.5 text-foreground group-hover:scale-[1.04] duration-300">{item.content}</SPAN> : <Image className="size-5.5 group-hover:scale-[1.1] duration-300" src={item.content} alt={`bozzhik ${key} icon`} />}
          </Link>
        ))}
      </div>
    </header>
  )
}

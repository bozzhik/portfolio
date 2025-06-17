import {CONTENT} from '@/content'
import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const {person, socials} = CONTENT.global

  return (
    <header className={cn('max-w-2xl xl:max-w-[35rem] mx-auto sm:mx-4', 'mt-20', 'flex items-center justify-between')}>
      <div className="flex items-center gap-3.5">
        <Image quality={100} className="size-14 rounded-[10px]" src={person.picture} alt={`${person.name} — Frontend & Mobile Developer`} />

        <div>
          <h1 className="text-xl font-semibold text-foreground">{person.name}</h1>
          <p className="text-base text-gray">{person.taglines[Math.floor(Math.random() * person.taglines.length)]}</p>
        </div>
      </div>

      <div className="flex gap-1.5">
        {Object.entries(socials).map(([key, item]) => (
          <Link className={cn('p-2', 'grid place-items-center size-fit', 'bg-gray-dark rounded-[10px] border border-foreground/10')} href={item.link} target="_blank" rel="noopener noreferrer" key={key}>
            <Image className="size-5.5" src={item.icon} alt={`${key} icon`} />
          </Link>
        ))}
      </div>
    </header>
  )
}

import {CONTENT} from '@/content'
import {WEBSITE_BOX} from '~/Global/Container'

import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import {SPAN} from '~/UI/Typography'
import Profile from '~/Global/Header/Profile'

export default function Header() {
  const {socials} = CONTENT.global

  return (
    <header className={cn(WEBSITE_BOX, 'mt-20', 'flex items-center justify-between')}>
      <Profile />

      <div className="flex gap-1.25">
        {Object.entries(socials).map(([key, item]) => (
          <Link className={cn('p-2 size-fit group grid place-items-center', 'group hover:bg-opacity-10 duration-300', 'rounded-[10px] border border-foreground/15')} style={{backgroundColor: '#202020'}} href={item.link} target="_blank" rel="noopener noreferrer" key={key}>
            {typeof item.content === 'string' ? <SPAN className="px-1.5 text-foreground group-hover:scale-[1.04] duration-300">{item.content}</SPAN> : <Image className="size-5.5 group-hover:scale-[1.1] duration-300" src={item.content} alt={`bozzhik ${key} icon`} />}
          </Link>
        ))}
      </div>
    </header>
  )
}

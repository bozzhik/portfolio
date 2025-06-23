import {CONTENT} from '@/content'
import {WEBSITE_BOX} from '~/Global/Container'

import {cn} from '@/lib/utils'

import Image from 'next/image'
import {SPAN} from '~/UI/Typography'
import Button from '~/UI/Button'
import Profile from '~/Global/Header/Profile'

export default function Header() {
  const {navigation} = CONTENT.global

  return (
    <header className={cn(WEBSITE_BOX, 'mt-20 xl:mt-16 sm:mt-3', 'flex sm:flex-col items-center sm:items-start justify-between sm:gap-4.5')}>
      <Profile />

      <div className="flex gap-1.25 sm:w-full">
        {Object.entries(navigation).map(([key, item]) => (
          <Button
            as="link"
            href={item.link}
            variant="primary"
            className="sm:last:w-full"
            target="_blank"
            {...(key !== 'cv' && {
              rel: 'noopener noreferrer',
            })}
            key={key}
          >
            {typeof item.content === 'string' ? <SPAN className="px-1.5 sm:px-2.25 sm:py-[1.5px] text-foreground group-hover:scale-[1.04] duration-300">{item.content}</SPAN> : <Image className="size-5.5 sm:min-w-5.5 aspect-square group-hover:scale-[1.1] duration-300" src={item.content} alt={`bozzhik ${key} icon`} />}
          </Button>
        ))}
      </div>
    </header>
  )
}

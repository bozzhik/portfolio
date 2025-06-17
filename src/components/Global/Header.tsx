import BozzhikImage from '$/bozzhik.jpg'
import GithubIcon from '$/icons/github.svg'
import EmailIcon from '$/icons/email.svg'

import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'

const socials = {
  github: {
    link: 'https://github.com/bozzhik',
    icon: GithubIcon,
  },
  email: {
    link: 'mailto:bozzhik@yandex.com',
    icon: EmailIcon,
  },
}

export default function Header() {
  return (
    <header className={cn('max-w-2xl xl:max-w-[35rem] mx-auto sm:mx-4', 'mt-20', 'flex justify-between')}>
      <div className="flex items-center gap-3.5">
        <Image quality={100} className="size-14 rounded-[10px]" src={BozzhikImage} alt={`Maxim Bozhik — Frontend & Mobile Developer`} />

        <div>
          <h1 className="text-xl font-semibold text-foreground">Maxim Bozhik</h1>
          <p className="text-base text-gray">Turning caffeine into code.</p>
        </div>
      </div>

      <div className="flex gap-1.5">
        {Object.entries(socials).map(([key, item]) => (
          <Link className={cn('p-1.75', 'grid place-items-center size-fit', 'bg-gray-dark rounded-[10px] border border-foreground/10')} href={item.link} target="_blank" rel="noopener noreferrer" key={key}>
            <Image className="size-6" src={item.icon} alt={`${key} icon`} />
          </Link>
        ))}
      </div>
    </header>
  )
}

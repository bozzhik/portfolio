'use client'

import {usePathname} from 'next/navigation'
import {widthClasses} from './Container'
import {cn} from '@/lib/utils'

import Link from 'next/link'
import ArrowLink from '../UI/ArrowLink'

const headerData = {
  nav: {
    home: {name: 'home', href: '/'},
    works: {name: 'works', href: '/works'},
    // about: {name: 'about', href: '/about'},
  },

  cv: {name: 'CV', href: 'https://bozzhik.notion.site/Bozhik-Maxim-f6e1f61bd2454194b229e612e91f5180'},
}

export default function Header() {
  const currentRoute = usePathname()

  return (
    <header className={cn('mt-14 mb-16 xl:mb-12 sm:mt-2.5 sm:mb-10 mx-auto flex justify-between', widthClasses['1/2'])}>
      <nav className="flex flex-row space-x-0 -ml-[8px]">
        {Object.entries(headerData.nav).map(([key, {name, href}]) => {
          const isActive = currentRoute === href && href !== '/'
          return (
            <Link key={key} href={href} className={cn('flex px-2 py-1 duration-200 hover:text-neutral-400 sm:text-lg', isActive ? 'text-neutral-400' : 'text-white')}>
              {name}
            </Link>
          )
        })}
      </nav>

      {headerData.cv && <ArrowLink href={headerData.cv.href} text={headerData.cv.name} />}
    </header>
  )
}

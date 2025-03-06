'use client'

import {widthClasses} from '#/Global/Container'

import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'

import Link from 'next/link'
import ArrowLink from '#/UI/ArrowLink'

const headerData = {
  nav: {
    home: {name: 'home', href: '/'},
    works: {name: 'works', href: '/works'},
    // about: {name: 'about', href: '/about'},
  },

  cv: {name: 'CV', href: '/cv'},
}

export default function Header() {
  const currentRoute = usePathname()

  return (
    <header className={cn('mt-14 mb-16 xl:mb-12 sm:mt-2.5 sm:mb-10 mx-auto flex justify-between', widthClasses['1/2'])}>
      <nav className="flex flex-row space-x-0 -ml-[8px]">
        {Object.entries(headerData.nav).map(([key, {name, href}]) => {
          const isActive = currentRoute === href && href !== '/'
          return (
            <Link key={key} href={href} className={cn('flex px-2 sm:px-1.5 py-1 duration-200 hover:text-neutral-400 sm:text-lg xs:text-base', isActive ? 'text-neutral-400' : 'text-white')}>
              {name}
            </Link>
          )
        })}
      </nav>

      {headerData.cv && <ArrowLink active={currentRoute === headerData.cv.href && headerData.cv.href !== '/' && true} href={headerData.cv.href} text={headerData.cv.name} target={false} />}
    </header>
  )
}

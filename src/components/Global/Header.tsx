'use client'

import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'

import {widthClasses} from './Container'
import Link from 'next/link'

const headerData = {
  1: {name: 'home', href: '/'},
  2: {name: 'works', href: '/works'},
  // 3: {name: 'projects', href: '/projects/'},
  // 4: {name: 'about', href: '/about/'},
  // 5: {name: 'cv', href: '/cv/'},
}

export default function Header() {
  const currentRoute = usePathname()

  return (
    <header className={cn('mt-14 mb-16 xl:mb-12 sm:mt-2.5 sm:mb-10 mx-auto', widthClasses['1/2'])}>
      <nav className="flex flex-row space-x-0 -ml-[8px]">
        {Object.entries(headerData).map(([key, {name, href}]) => {
          const isActive = currentRoute === href && href !== '/'
          return (
            <Link key={key} href={href} className={cn('flex px-2 py-1 duration-200 hover:text-neutral-400 sm:text-lg', isActive ? 'text-neutral-400' : 'text-white')}>
              {name}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

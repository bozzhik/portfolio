'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'
import {usePathname} from 'next/navigation'
import {motion, useScroll, useMotionValueEvent} from 'framer-motion'

import Link from 'next/link'
import ArrowLink from '../UI/ArrowLink'
import {widthClasses} from './Container'

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

  const [headerAttached, setHeaderAttached] = useState(false)
  const {scrollY} = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined) {
      setHeaderAttached(latest > previous && latest > 50)
    }
  })

  return (
    <motion.header
      variants={{
        default: {top: '3.4375rem'},
        attached: {top: '.625rem'},
      }}
      animate={headerAttached ? 'attached' : 'default'}
      transition={{duration: 0.35, ease: 'easeInOut'}}
      className={cn('sticky z-[99] bg-custom-black top w-full mb-16 xl:mb-12 sm:mt-2.5 sm:mb-10 mx-auto flex justify-between', widthClasses['1/2'], headerAttached ? 'bg-black/20 rounded-sm backdrop-blur-md' : '')}
    >
      <nav className="flex flex-row space-x-0 -ml-[.5rem]">
        {Object.entries(headerData.nav).map(([key, {name, href}]) => {
          const isActive = currentRoute === href && href !== '/'
          return (
            <Link key={key} href={href} className={cn('flex px-2 sm:px-1.5 py-1 duration-200 hover:text-neutral-400 sm:text-lg xs:text-base', isActive ? 'text-neutral-400' : 'text-white')}>
              {name}
            </Link>
          )
        })}
      </nav>

      {/* <div className="w-full h-20 bg-black absolute inset-0 top-[-1.875rem]"></div> */}

      {headerData.cv && <ArrowLink active={currentRoute === headerData.cv.href && headerData.cv.href !== '/' && true} href={headerData.cv.href} text={headerData.cv.name} target={false} />}
    </motion.header>
  )
}

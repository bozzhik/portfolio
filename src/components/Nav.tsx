'use client'

import {isMobile} from '@/lib/utils'
console.log('🚀 ~ isMobile:', isMobile)
// let isMobile = true

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import React, {useState, useEffect, useRef} from 'react'
import {motion} from 'framer-motion'

import LogoImage from '../assets/images/logo.png'
import ExploreIcon from '../assets/images/icons/nav/explore.svg'
import WorksIcon from '../assets/images/icons/nav/works.svg'
import ProjectsIcon from '../assets/images/icons/nav/projects.svg'
import AboutIcon from '../assets/images/icons/nav/about.svg'
import MenuIcon from '../assets/images/icons/nav/menu.svg'

interface Nav {
  title: string
  caption: string

  pages: {
    [key: number]: {
      title: string
      link: string
      icon: string
      badge?: string
    }
  }
}

const navContent: Nav = {
  title: 'Maxim Bozhik',
  caption: 'Developer',

  pages: {
    1: {
      title: 'Explore',
      link: '/',
      icon: ExploreIcon,
    },
    2: {
      title: 'Freelance works',
      link: '/works',
      icon: WorksIcon,
    },
    3: {
      title: 'Student projects',
      link: '/projects',
      icon: ProjectsIcon,
      badge: 'New',
    },
    4: {
      title: 'About me',
      link: '/about',
      icon: AboutIcon,
    },
    5: {
      title: 'CV',
      link: '/cv',
      icon: AboutIcon,
    },
  },
}

export default function Nav() {
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setMenuOpen] = useState(!isMobile)
  const [bodyBgColor, setBodyBgColor] = useState('')

  useEffect(() => {
    if (isMobile) {
      const bodyClasses = ['!bg-custom-b-gray', 'text-custom-b-gray', 'duration-300']

      if (isMenuOpen) {
        bodyClasses.forEach((className) => {
          document.body.classList.add(className)
        })
        setBodyBgColor(bodyClasses.join(' '))
      } else {
        bodyClasses.forEach((className) => {
          document.body.classList.remove(className)
        })
        setBodyBgColor('')
      }

      return () => {
        bodyClasses.forEach((className) => {
          document.body.classList.remove(className)
        })
      }
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (isMobile) {
      const handleOutsideClick = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
          setMenuOpen(false)
        }
      }

      document.addEventListener('click', handleOutsideClick)

      return () => {
        document.removeEventListener('click', handleOutsideClick)
      }
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <header ref={navRef}>
      <motion.section
        initial={isMobile && {opacity: 0, x: -100}}
        animate={{opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -100}} // Animation on show/hide
        transition={{duration: 0.3}}
        data-section="desktop-nav"
        className={`sticky top-0 left-0 z-50 bg-custom-b-gray sm:block ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col fixed w-[17rem] h-screen bg-custom-b-gray py-8 sm:py-5 px-4 items-start justify-start gap-6 z-30 border-white/5 border-[0.5px]">
          <Link className="flex items-center justify-start w-full gap-4 shrink-0 group" href="/">
            <Image className="duration-500 rounded-lg bg-custom-b-gray2 group-hover:bg-custom-black" width="45" height="45" src={LogoImage} priority quality={100} alt="logo" />

            <div className="flex flex-col gap-0">
              <p className="text-white text-md">{navContent.title}</p>
              <p className="text-sm font-light text-custom-t-gray">{navContent.caption}</p>
            </div>
          </Link>

          <ul className="flex flex-col items-start w-full gap-0">
            {Object.values(navContent.pages).map((item, index) => (
              <li className="w-full py-1 rounded-lg h-fit text-custom-t-gray" key={index}>
                <Link className={`relative flex items-center justify-between w-full h-full px-4 py-2.5 rounded-lg group hover:bg-[#202020] duration-300 border-[1px] border-transparent ${pathname === item.link ? 'active-page' : ''}`} href={item.link}>
                  <div className="flex items-center w-full gap-3 text-xs duration-300 group-hover:text-white">
                    <Image className="fill-white" width="20" height="20" src={item.icon} quality={100} alt="logo" />

                    {item.title}
                  </div>
                  {item.badge && <mark className="px-1.5 py-1 uppercase bg-custom-b-gray2 text-custom-t-gray font-semibold text-[0.6rem] rounded-[.2rem]">New</mark>}{' '}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.section>

      <section data-section="mobile-nav" className="sticky top-0 left-0 z-20 hidden sm:block bg-custom-b-gray">
        <nav className="px-4 md:hidden md:px-6 py-5 lg max-w-[700px] mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-start gap-4" href="/">
            <Image className="duration-500 rounded-lg bg-custom-b-gray2 group-hover:bg-custom-black" width="45" height="45" src={LogoImage} quality={100} alt="logo" />

            <div className="flex flex-col gap-0">
              <p className="text-white text-md">{navContent.title}</p>
              <p className="text-sm font-light">{navContent.caption}</p>
            </div>
          </Link>

          <button data-button onClick={toggleMenu} className="fixed flex items-center justify-center px-2 rounded-lg cursor-pointer right-5 aspect-square text-custom-t-gray active-page" title="menu" type="button">
            <Image className="duration-500 rounded-lg bg-custom-b-gray2 group-hover:bg-custom-black" width="20" height="20" src={MenuIcon} quality={100} alt="logo" />
          </button>
        </nav>
      </section>
    </header>
  )
}

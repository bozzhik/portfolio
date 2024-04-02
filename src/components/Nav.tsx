'use client'

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '../assets/images/logo.png'
import ExploreIcon from '../assets/images/icons/nav/explore.svg'
import WorksIcon from '../assets/images/icons/nav/works.svg'
import ProjectsIcon from '../assets/images/icons/nav/projects.svg'
import AboutIcon from '../assets/images/icons/nav/about.svg'

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

  return (
    <section className="absolute flex w-full h-screen sm:hidden">
      <nav className="flex flex-col fixed w-[17rem] h-screen bg-custom-b-gray py-8 px-4 items-start justify-start gap-6 z-30 border-white/5 border-[0.5px]">
        <Link className="flex items-center justify-start w-full gap-4 shrink-0 group" href="/">
          <Image className="duration-500 rounded-lg bg-custom-b-gray2 group-hover:bg-custom-black" width="45" height="45" src={LogoImage} priority quality={100} alt="logo" />

          <div className="flex flex-col gap-0">
            <p className="text-white text-md">{navContent.title}</p>
            <p className="text-sm font-light">{navContent.caption}</p>
          </div>
        </Link>

        <ul className="flex flex-col items-start w-full gap-0">
          {Object.values(navContent.pages).map((item, index) => (
            <li className="w-full py-1 rounded-lg h-fit" key={index}>
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
    </section>
  )
}

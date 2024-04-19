import {cn} from '@/lib/utils'
import {widthClasses} from './Container'
import Link from 'next/link'

const headerData = {
  1: {name: 'home', href: '/'},
  2: {name: 'works', href: '/works/'},
  3: {name: 'projects', href: '/projects/'},
  4: {name: 'cv', href: '/cv/'},
}

export default function Header() {
  return (
    <header className={cn('mt-14 mx-auto', widthClasses['1/2'])}>
      <nav className="flex gap-3">
        {Object.entries(headerData).map(([key, {name, href}]) => (
          <Link key={key} href={href} className="duration-200 hover:text-custom-primary">
            {name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

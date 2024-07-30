import {cn} from '@/lib/utils'

import Link from 'next/link'
import {ArrowUpRight} from 'lucide-react'

interface Props {
  href: string
  text: string
  target?: boolean
  active?: boolean
  className?: string
  iconStyles?: string
}

export default function ArrowLink({href, text, target = true, active = false, className, iconStyles}: Props) {
  return (
    <Link href={href} className={cn('flex items-center gap-0.5 group', className)} {...(target && {target: '_blank'})}>
      <ArrowUpRight className={cn('duration-500 stroke-white s-5 group-hover:rotate-45 group-hover:stroke-neutral-400', active ? 'stroke-neutral-400' : '', iconStyles)} />
      <span className={cn('duration-500 group-hover:text-neutral-400', active ? 'text-neutral-400' : '')}>{text}</span>
    </Link>
  )
}

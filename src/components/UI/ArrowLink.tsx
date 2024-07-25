import {cn} from '@/lib/utils'
import Link from 'next/link'

interface Props {
  href: string
  text: string
  target?: boolean
  className?: string
  svgClassName?: string
}

export default function ArrowLink({href, text, target = true, className, svgClassName}: Props) {
  const ArrowIcon = (
    <svg className={cn('duration-500 fill-neutral-300 s-5 group-hover:rotate-45 group-hover:fill-neutral-400', svgClassName)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
    </svg>
  )

  return (
    <Link href={href} className={cn('flex items-center gap-1 group', className)} {...(target && {target: '_blank'})}>
      {ArrowIcon}
      <span className="duration-500 group-hover:text-neutral-400">{text}</span>
    </Link>
  )
}

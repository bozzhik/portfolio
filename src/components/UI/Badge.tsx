import {cn} from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  text: string
  href?: string
  icon?: string
  className?: string
}

export default function Badge({icon, href, text, className}: Props) {
  const badgeStyles = 'group w-fit inline-flex items-center rounded border px-1 py-[3px] text-sm leading-4 no-underline border-neutral-700 bg-custom-gray text-neutral-100'

  const BadgeContent = (
    <>
      {icon && <Image className="object-contain mr-1 s-3.5 group-hover:rotate-[-15deg] duration-300" src={icon} alt={`icon ${text}`} />}
      <span className="text-white" dangerouslySetInnerHTML={{__html: text || ''}} />
    </>
  )

  return href ? (
    <Link href={href} className={cn(badgeStyles, className)}>
      {BadgeContent}
    </Link>
  ) : (
    <div className={cn(badgeStyles, className)}>{BadgeContent}</div>
  )
}

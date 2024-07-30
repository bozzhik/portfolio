import {cn} from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  size?: 'small' | 'medium'
  text: string
  icon?: string
  href?: string
  className?: string
}

export default function Badge({size = 'small', text, icon, href, className}: Props) {
  const badgeSizes = {
    small: 'space-x-1 px-1 py-[3px] text-sm rounded',
    medium: 'space-x-2 px-2.5 py-2 text-base rounded-md',
  }
  const badgeStyles = `group w-fit inline-flex items-center ${!href ? 'cursor-default' : ''} ${badgeSizes[size] || badgeSizes['small']} border leading-4 no-underline border-neutral-700 bg-custom-gray text-neutral-100`

  const BadgeContent = (
    <>
      {icon && <Image className={`object-contain ${size == 'medium' ? 's-4' : 's-3.5'} group-hover:rotate-[-15deg] duration-300`} src={icon} alt={`icon ${text}`} />}
      <span className="ml-0.5" dangerouslySetInnerHTML={{__html: text || ''}} />
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

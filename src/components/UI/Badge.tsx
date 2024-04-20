import {cn} from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  text: string
  href?: string
  icon?: string
  className?: string
}

const Badge: React.FC<Props> = ({icon, href, text, className}) => {
  const badgeStyles = cn('group w-fit inline-flex items-center rounded border p-1 text-sm leading-4 no-underline border-neutral-700 bg-custom-gray text-neutral-100', className)
  const BadgeContent = (
    <>
      {icon && <Image className="object-contain mr-1 s-3.5 group-hover:rotate-[-15deg] duration-300" src={icon} alt={`icon ${text}`} />}
      <span className="text-white" dangerouslySetInnerHTML={{__html: text || ''}} />
    </>
  )

  return href ? (
    <Link href={href} className={badgeStyles}>
      {BadgeContent}
    </Link>
  ) : (
    <mark className={badgeStyles}>{BadgeContent}</mark>
  )
}
export {Badge}

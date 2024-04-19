import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'

interface Props {
  text: string
  href: string
  icon?: string
  className?: string
}

const Badge: React.FC<Props> = ({icon, href, text, className}) => {
  return (
    <Link href={href} className={cn('group inline-flex items-center rounded border p-1 text-sm leading-4 no-underline border-neutral-700 bg-neutral-800 text-neutral-100', className)}>
      {icon && <Image className="object-contain mr-1 s-3.5" src={icon} alt={`icon ${text}`} />}

      <span className="text-white" dangerouslySetInnerHTML={{__html: text || ''}} />
    </Link>
  )
}

export {Badge}

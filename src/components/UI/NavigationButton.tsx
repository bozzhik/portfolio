import {cn} from '@/lib/utils'

import Button from '~/UI/Button'
import {SPAN} from '~/UI/Typography'

type Props = {
  href: string
  target?: '_self' | '_blank'
  text: string
  className?: string
}

export default function NavigationButton({href, target = '_self', text, className}: Props) {
  return (
    <Button as="link" href={href} target={target} variant="secondary" className={cn('w-full rounded-[14px] sm:rounded-[10px] sm:py-2.5', className)}>
      <SPAN className="px-1.5 text-foreground group-hover:scale-[1.04] duration-300">{text}</SPAN>
    </Button>
  )
}

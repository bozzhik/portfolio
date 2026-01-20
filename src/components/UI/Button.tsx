import {cn} from '@/lib/utils'

import Link, {type LinkProps} from 'next/link'

type ButtonBaseProps = {
  variant: 'primary' | 'secondary' | 'light'
}

type ButtonAsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonBaseProps
type ButtonAsLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & ButtonBaseProps

type ButtonProps = ({as: 'button'} & ButtonAsButtonProps) | ({as: 'link'} & ButtonAsLinkProps)

export default function Button(props: ButtonProps) {
  const {as, variant, className, children, ...rest} = props

  const BUTTON_STYLES = {
    base: cn('p-2 size-fit grid place-items-center', 'border rounded-[10px]', 'group active:scale-90 duration-300'),
    variants: {
      primary: 'bg-gray-button border-foreground/10',
      secondary: 'bg-gray-button/50 border-foreground/7',
      light: 'bg-gray/20 border-foreground/10',
    },
  }

  if (as === 'link') {
    const linkProps = rest as ButtonAsLinkProps
    return (
      <Link {...linkProps} className={cn(BUTTON_STYLES.base, BUTTON_STYLES.variants[variant], className)}>
        {children}
      </Link>
    )
  }

  const buttonProps = rest as ButtonAsButtonProps
  return (
    <button {...buttonProps} className={cn(BUTTON_STYLES.base, BUTTON_STYLES.variants[variant], className)}>
      {children}
    </button>
  )
}

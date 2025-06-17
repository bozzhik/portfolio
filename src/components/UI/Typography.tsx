import {cn} from '@/lib/utils'

type Props = {
  type: TypoTypes
  className?: string
  children: React.ReactNode
}

export type TypoTypes = keyof typeof typoClasses

export const typoClasses = {
  h1: cn('text-xl font-semibold tracking-[0.01em]', 'text-foreground'),
  span: cn('text-base tracking-[0.01em]', 'text-gray'),
} as const

export const H1 = createTypography('h1')
export const SPAN = createTypography('span')

function Typography({type, className, children, ...props}: Props) {
  const Element = type

  return (
    <Element className={cn(typoClasses[type], className)} {...props}>
      {children}
    </Element>
  )
}

function createTypography(type: TypoTypes) {
  const Component = ({className, children, ...props}: Omit<Props, 'type'>) => (
    <Typography type={type} className={className} {...props}>
      {children}
    </Typography>
  )
  Component.displayName = `Typography(${type.toUpperCase()})`
  return Component
}

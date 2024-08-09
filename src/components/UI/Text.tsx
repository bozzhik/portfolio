import {cn} from '@/lib/utils'

interface Props {
  type?: 'heading' | 'text'
  className?: string
  children: React.ReactNode | string
}

export default function Text({type = 'text', children, className}: Props) {
  if (type === 'heading') {
    return <h1 className={cn('text-2xl xs:text-xl font-medium tracking-tight', className)}>{children}</h1>
  } else if (type === 'text') {
    // Function to check if text contains HTML
    const hasHTML = typeof children === 'string' && /<\/?[a-z][\s\S]*>/i.test(children)
    const textClasses = 'text-white text-neutral-300 xs:text-sm sm:leading-[1.7rem] xs:leading-[1.4rem] leading-[1.8rem]'

    if (hasHTML) {
      return <p className={cn(textClasses, className)} dangerouslySetInnerHTML={{__html: children}} />
    }
    return <p className={cn(textClasses, className)}>{children}</p>
  }
}

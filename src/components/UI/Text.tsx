import {cn} from '@/lib/utils'

interface Props {
  type?: 'heading' | 'text'
  className?: string
  children: React.ReactNode | string // Allow string for HTML content
}

const Text: React.FC<Props> = ({type = 'text', children, className}) => {
  if (type === 'heading') {
    return <h1 className={cn('text-2xl font-medium tracking-tight', className)}>{children}</h1>
  } else if (type === 'text') {
    const hasHTML = typeof children === 'string' && /<\/?[a-z][\s\S]*>/i.test(children)

    if (hasHTML) {
      return <p className={cn('text-neutral-300 leading-[1.8rem]', className)} dangerouslySetInnerHTML={{__html: children}} />
    }

    return <p className={cn('text-neutral-300 leading-[1.8rem]', className)}>{children}</p>
  }
}

export {Text}

import {cn} from '@/lib/utils'

interface Props {
  type?: 'heading' | 'text'
  className?: string
  children: React.ReactNode
}

const Text: React.FC<Props> = ({type = 'text', children, className}) => {
  if (type === 'heading') {
    return <h1 className={cn('text-2xl font-medium tracking-tight', className)}>{children}</h1>
  } else if (type === 'text') {
    return <p className={cn('text-neutral-300 leading-[1.8rem]', className)}>{children}</p>
  }
}

export {Text}

import {cn} from '@/lib/utils'

interface Props {
  type?: 'heading' | 'text'
  children: React.ReactNode
  className?: string
}

const Text: React.FC<Props> = ({type = 'text', children, className}) => {
  if (type === 'heading') {
    return <h1 className={cn('flex items-center text-2xl font-medium tracking-tight', className)}>{children}</h1>
  } else if (type === 'text') {
    return <p className={cn('flex items-center text-custom-gray-d4 leading-7', className)}>{children}</p>
  }
}

export {Text}

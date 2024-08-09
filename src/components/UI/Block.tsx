import {cn} from '@/lib/utils'
import Text from '#/UI/Text'

interface Props {
  children?: React.ReactNode
  token: string
  heading: string
  text?: string
  className?: string
  id?: string
}

export default function Block({children, token, heading, text, className, id}: Props) {
  return (
    <section id={id || undefined} data-section={token} className={cn('space-y-6', className)}>
      <div className="space-y-3 group w-fit">
        <Text type="heading" className="flex items-center">
          {heading}
        </Text>

        {text && <Text>{text}</Text>}
      </div>

      {children}
    </section>
  )
}

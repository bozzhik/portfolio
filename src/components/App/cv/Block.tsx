import {cn} from '@/lib/utils'
import Text from '#/UI/Text'

interface Props {
  children: React.ReactNode
  heading: string
  index: string
  className?: string
}

export default function Block({children, heading, index, className}: Props) {
  return (
    <section data-section={`${index}-cv`} className={cn('space-y-3', className)}>
      <div className="group w-fit">
        <Text type="heading" className="flex items-center">
          {heading}
        </Text>
      </div>

      {children}
    </section>
  )
}

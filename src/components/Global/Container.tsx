import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
  width?: '1/2' | '2/3'
  className?: string
}

export const widthClasses = {
  '1/2': 'max-w-2xl xl:max-w-lg sm:mx-4',
  '2/3': '',
}

export default function Container({children, width = '1/2', className}: Props) {
  return <main className={cn('mx-auto mb-40 flex flex-col antialiased', widthClasses[width], className)}>{children}</main>
}

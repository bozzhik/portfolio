import {cn} from '@/lib/utils'

type Props = {
  children: React.ReactNode
  width?: '1/2' | '2/3'
  className?: string
}

export const widthClasses = {
  '1/2': 'max-w-2xl xl:max-w-[35rem] sm:mx-4',
  '2/3': '',
}

export default function Container({children, width = '1/2', className}: Props) {
  return <main className={cn('mx-auto mb-28 xl:mb-20 sm:mb-10 flex flex-col antialiased', widthClasses[width], className)}>{children}</main>
}

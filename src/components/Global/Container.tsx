import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
  width?: '1/2' | '2/3'
  classes?: string
}

export const widthClasses = {
  '1/2': 'w-[35%]',
  '2/3': 'w-[55%]',
}

export default function Container({children, width = '1/2', classes}: Props) {
  return <main className={cn('mx-auto', widthClasses[width], classes)}>{children}</main>
}

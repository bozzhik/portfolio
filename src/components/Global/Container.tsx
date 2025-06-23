import {cn} from '@/lib/utils'

export const WEBSITE_BOX = 'max-w-[42rem] xl:max-w-[40rem] mx-auto sm:mx-2.5'

export default function Container({children, className}: {children: React.ReactNode; className?: string}) {
  return <main className={cn(WEBSITE_BOX, 'flex flex-col gap-8 sm:gap-9', 'mb-28 sm:mb-20', className)}>{children}</main>
}

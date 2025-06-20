import {cn} from '@/lib/utils'

export const WEBSITE_BOX = 'max-w-2xl xl:max-w-[35rem] mx-auto sm:mx-4'

export default function Container({children, className}: {children: React.ReactNode; className?: string}) {
  return <main className={cn(WEBSITE_BOX, 'flex flex-col gap-8', 'mb-28 xl:mb-20 sm:mb-10', className)}>{children}</main>
}

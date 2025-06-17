import {cn} from '@/lib/utils'

import {H1} from '~/UI/Typography'

export default function Block({section, className, children}: {section: string; className?: string; children: React.ReactNode}) {
  return (
    <section data-section={section} className={cn('flex flex-col gap-2', className)}>
      <H1 className="first-letter:uppercase">{section}</H1>

      <div>{children}</div>
    </section>
  )
}

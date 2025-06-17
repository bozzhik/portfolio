import {H1} from '~/UI/Typography'

export default function Block({section, children}: {section: string; children: React.ReactNode}) {
  return (
    <section data-section={section} className="flex flex-col gap-3.5">
      <H1 className="first-letter:uppercase">{section}</H1>

      <div>{children}</div>
    </section>
  )
}

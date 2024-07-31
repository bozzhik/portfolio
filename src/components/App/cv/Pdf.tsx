import {cn} from '@/lib/utils'
export const styledButton = 'rounded-lg from-neutral-800/50 to-neutral-800/30 bg-gradient-to-b border-[1px] border-neutral-800 border-b-0'

export default function Pdf() {
  return (
    <section data-section="download-cv" className="!mt-10 sm:!mt-7">
      <a href="cv.pdf" target="_blank" className={cn('block w-full xl:py-1.5 py-2 text-center hover:text-neutral-400 duration-200', styledButton)}>
        PDF version
      </a>
    </section>
  )
}

import Button from '#/UI/Button'

export default function Pdf() {
  return (
    <section data-section="download-cv" className="!mt-10 sm:!mt-7">
      <Button link="cv.pdf" text="PDF version" blank={true} />
    </section>
  )
}

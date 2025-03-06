import Button from '#/UI/Button'

export default function Pdf() {
  return (
    <section data-section="download-cv" className="mt-1">
      <Button link="cv-maxim-bojic.pdf" text="PDF version" blank={true} />
    </section>
  )
}

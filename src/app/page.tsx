import Hero from '@/components/index/Hero'

export default function Home() {
  return (
    <div className="relative max-w-[700px] mx-auto px-5 pt-16 pb-44">
      <div className="flex flex-col gap-24 sm:gap-16">
        <Hero />
      </div>
    </div>
  )
}

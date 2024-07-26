import Image from 'next/image'
import MeImage from '%/cv/me.jpg'

export default function ImageGrid() {
  return (
    <section data-section="hero-cv">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:grid-cols-2 sm:grid-rows-4">
        <div className="relative h-40">
          <Image quality={100} alt="Me speaking on stage at React Summit about the future of Next.js" src={MeImage} fill sizes="70vw" priority className="object-cover rounded-lg" />
        </div>
        <div className="relative row-span-2 sm:row-span-1">
          <Image quality={100} alt="Me standing on stage at Reactathon delivering the keynote" src={MeImage} fill sizes="70vw" priority className="object-cover object-top rounded-lg sm:object-center" />
        </div>
        <div className="relative">
          <Image quality={100} alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community" src={MeImage} fill sizes="70vw" priority className="object-cover rounded-lg" />
        </div>
        <div className="relative row-span-2">
          <Image quality={100} alt="Me, Lydia, and Delba filming the Next.js Conf keynote" src={MeImage} fill sizes="70vw" priority className="object-cover rounded-lg sm:object-center" />
        </div>
        <div className="relative row-span-2">
          <Image quality={100} alt="My badge on top of a pile of badges from a Vercel meetup we held" src={MeImage} fill sizes="70vw" priority className="object-cover rounded-lg" />
        </div>
        <div className="relative h-40">
          <Image quality={100} alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web" src={MeImage} fill sizes="70vw" priority className="object-cover rounded-lg" />
        </div>
      </div>
    </section>
  )
}

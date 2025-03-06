import MountainTurkeyImage from '%/cv/grid/mountain-turkey.jpg'
import RunningMarathonImage from '%/cv/grid/running-marathon.jpg'
import VkFestImage from '%/cv/grid/vk-fest.jpg'
import MoscowCityImage from '%/cv/grid/moskow-city.jpg'

import Image, {type StaticImageData} from 'next/image'

type GridItem = {
  src: string | StaticImageData
  video?: boolean
  classes: string
  alt: string
}

const gridImageHeight = 'h-44 xl:h-32 sm:h-40 xs:h-32'

const gridData: GridItem[] = [
  {
    src: 'videos/vkfest-concert.mp4',
    alt: 'Me at a concert at VK Fest 2024',
    classes: `${gridImageHeight} sm:col-span-2`,
    video: true,
  },
  {
    src: VkFestImage,
    alt: 'Me in the volunteer team at VK Fest 2024',
    classes: 'row-span-2 sm:row-span-1',
  },
  {
    src: RunningMarathonImage,
    alt: 'Me at a running marathon in Sochi at the World Youth Festival 2024',
    classes: gridImageHeight,
  },
  {
    src: MountainTurkeyImage,
    alt: 'Me on some mountain in Turkey',
    classes: 'row-span-2 sm:hidden',
  },
  {
    src: MoscowCityImage,
    alt: 'Me somewhere between the skyscrapers in Moscow City',
    classes: 'row-span-2 sm:row-span-1',
  },
  {
    src: 'videos/moskow-subway.mp4',
    alt: 'Me in the Moscow Metro',
    classes: gridImageHeight,
    video: true,
  },
]

export default function ImageGrid() {
  return (
    <section data-section="hero-cv">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 xl:gap-3 sm:gap-2.5 sm:grid-cols-2">
        {gridData.map(({src, alt, classes, video}, index) => (
          <div key={index} className={`relative rounded-lg overflow-hidden animate-skeleton ${classes}`}>
            {video ? (
              <video className="object-cover s-full" width="100%" height="100%" muted loop autoPlay playsInline preload="auto">
                <source src={src as string} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image quality={100} alt={alt} src={src} fill sizes="35vw" priority className="object-cover sm:object-center" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

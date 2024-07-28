import Image from 'next/image'

import MountainTurkeyImage from '%/cv/grid/mountain-turkey.jpg'
import RunningMarathonImage from '%/cv/grid/running-marathon.jpg'
import VkFestImage from '%/cv/grid/vk-fest.jpg'
import MoscowCityImage from '%/cv/grid/moskow-city.jpg'

type GridData = {
  main: Record<
    string,
    {
      src: any
      video?: boolean
      classes: string
      alt: string
    }
  >
}

const gridData: GridData = {
  main: {
    'vkfest-concert': {
      src: '/vkfest-concert.mp4',
      alt: 'Me at a concert at VK Fest 2024',
      classes: 'h-44',
      video: true,
    },
    'vk-fest': {
      src: VkFestImage,
      alt: 'Me in the volunteer team at VK Fest 2024',
      classes: 'row-span-2',
    },
    'running-marathon': {
      src: RunningMarathonImage,
      alt: 'Me at a running marathon in Sochi at the World Youth Festival 2024',
      classes: 'h-44',
    },
    'mountain-turkey': {
      src: MountainTurkeyImage,
      alt: 'Me on some mountain in Turkey',
      classes: 'row-span-2',
    },
    'moskow-city': {
      src: MoscowCityImage,
      alt: 'Me somewhere between the skyscrapers in Moscow City',
      classes: 'row-span-2',
    },
    'moskow-subway': {
      src: '/moskow-subway.mp4',
      alt: 'Me in the Moscow Metro',
      classes: 'h-44',
      video: true,
    },
  },
}

export default function ImageGrid() {
  return (
    <section data-section="hero-cv">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:grid-cols-2 sm:grid-rows-4">
        {Object.entries(gridData.main).map(([key, {src, alt, classes, video}]) => (
          <div key={key} className={`relative rounded-lg overflow-hidden ${classes}`}>
            {video ? (
              <video className="s-full object-cover" width="100%" height="100%" muted loop autoPlay playsInline preload="auto">
                <source src={src} type="video/mp4" />
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

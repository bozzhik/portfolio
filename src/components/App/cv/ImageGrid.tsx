import Image from 'next/image'

import VkFestConcertImage from '%/cv/grid/vkfest-concert.jpg'
import MountainTurkeyImage from '%/cv/grid/mountain-turkey.jpg'
import RunningMarathonImage from '%/cv/grid/running-marathon.jpg'
import VkFestImage from '%/cv/grid/vk-fest.jpg'
import MoscowSubwayImage from '%/cv/grid/moskow-subway.jpg'
import MoscowCityImage from '%/cv/grid/moskow-city.jpg'

const gridData = {
  main: {
    'vkfest-concert': {
      image: VkFestConcertImage,
      alt: 'Me at a concert at VK Fest 2024',
      class: 'h-44',
      video: true,
    },
    'vk-fest': {
      image: VkFestImage,
      alt: 'Me in the volunteer team at VK Fest 2024',
      class: 'row-span-2',
    },
    'running-marathon': {
      image: RunningMarathonImage,
      alt: 'Me at a running marathon in Sochi at the World Youth Festival 2024',
      class: 'h-44',
    },
    'mountain-turkey': {
      image: MountainTurkeyImage,
      alt: 'Me on some mountain in Turkey',
      class: 'row-span-2',
    },
    'moskow-city': {
      image: MoscowCityImage,
      alt: 'Me somewhere between the skyscrapers in Moscow City',
      class: 'row-span-2',
    },
    'moskow-subway': {
      image: MoscowSubwayImage,
      alt: 'Me in the Moscow Metro',
      class: 'h-44',
      video: true,
    },
  },
}

export default function ImageGrid() {
  return (
    <section data-section="hero-cv">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:grid-cols-2 sm:grid-rows-4">
        {Object.entries(gridData.main).map(([key, {image, alt, class: customClass}]) => (
          <div key={key} className={`relative ${customClass}`}>
            <Image quality={100} alt={alt} src={image} fill sizes="35vw" priority className="object-cover bg-purple-500 rounded-lg sm:object-center" />
          </div>
        ))}
      </div>
    </section>
  )
}

import Image from 'next/image'
import CursorImage from '%/icons/cursor.svg'

import ImageGrid from '##/cv/ImageGrid'
import Text from '#/UI/Text'

import '%%/stylesheets/animate-surfing.css'

export default function Hero() {
  return (
    <section data-section="hero-cv" className="space-y-4">
      <div className="space-y-3">
        <div className="group w-fit">
          <Text type="heading" className="flex items-center">
            Maxim Bozhik
            <Image className="w-5 ml-4 animate-surfing group-hover:scale-[115%] duration-300" src={CursorImage} alt="" />
          </Text>
        </div>

        <Text>I&#39;m a website developer and user interface designer. Currently, I work as a self-employed frontend developer, specializing in creating impressive websites that boost business.</Text>
      </div>

      <ImageGrid />
    </section>
  )
}

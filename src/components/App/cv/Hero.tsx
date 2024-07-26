import Image from 'next/image'
import CursorImage from '%/icons/cursor.svg'

import Text from '#/UI/Text'

import '%%/stylesheets/animate-surfing.css'

export default function Hero() {
  return (
    <section data-section="hero-index" className="space-y-7">
      <div className="space-y-5">
        <div className="group w-fit">
          <Text type="heading" className="flex items-center">
            hey, I&#39;m bozzhik
            <Image className="w-5 ml-4 animate-surfing group-hover:scale-[115%] duration-300" src={CursorImage} alt="" />
          </Text>
        </div>

        <Text>
          I&#39;m a website developer and user interface designer. I am studying at HSE to design and develop digital products.
          <br className="hidden sm:block" />
          <span className="hidden sm:block sm:s-3" /> Currently, I work as a self-employed frontend developer, specializing in creating impressive websites that boost business.
        </Text>
      </div>
    </section>
  )
}

import Image from 'next/image'
import CursorImage from '%/icons/cursor.svg'

import HeroLinks from '##/index/HeroLinks'
import {Text} from '#/UI/Text'
import {Badge} from '#/UI/Badge'

import '%%/stylesheets/animate-surfing.css'

export default function Hero() {
  return (
    <section data-section="hero-index" className="space-y-8 ">
      <div className="group">
        <Text type="heading" className="flex items-center">
          hey, I&#39;m bozzhik
          <Image className="w-5 ml-4 animate-surfing group-hover:scale-[115%] duration-300" src={CursorImage} alt="" />
        </Text>
      </div>
      <Text>
        I&#39;m a website developer and user interface designer. I am studying at the HSE to design and develop <Badge href="#" icon={CursorImage} text="digital products" />. <br className="hidden sm:block" /> I am currently working as a self-employed frontend developer, specializing in creating stunning <Badge href="#" icon={CursorImage} text="landing pages" /> and interactive <Badge href="#" className="mr-[0.5px]" icon={CursorImage} text="websites" />.
      </Text>

      <HeroLinks />
    </section>
  )
}

import Image from 'next/image'
import CursorImage from '%/icons/cursor.svg'

import {Text} from '#/UI/Text'

import '%%/stylesheets/animate-surfing.css'

export default function Hero() {
  return (
    <section data-section="hero-index" className="space-y-8 ">
      <div className="group">
        <Text type="heading">
          hey I&#39;m bozzhik
          <Image className="w-5 ml-4 animate-surfing group-hover:scale-[115%] duration-300" src={CursorImage} alt="" />
        </Text>
      </div>

      <Text>I&#39;m a website developer and UX/UI designer. I am studying at HSE to design and develop digital products. I am currently working as a self-employed frontend developer, I create beautiful landing pages and interactive multi-page websites.</Text>
    </section>
  )
}

import Image from 'next/image'
import CursorImage from '%/icons/cursor.svg'

import {Text} from '#/UI/Text'

export default function Hero() {
  return (
    <section data-section="hero-index" className="space-y-8">
      <Text type="heading">
        hey I&#39;m bozzhik <Image className="w-5 ml-4" src={CursorImage} alt="" />
      </Text>
      <Text>I&#39;m a website developer and UX/UI designer. I am studying at HSE to design and develop digital products. I am currently working as a self-employed frontend developer, I create beautiful landing pages and interactive multi-page websites.</Text>
    </section>
  )
}

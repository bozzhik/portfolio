import Image from 'next/image'
import CursorImage from '%/icons/cursor.svg'

import Text from '#/UI/Text'
import Badge from '#/UI/Badge'
import {ArrowLink} from '#/UI/ArrowLink'

import '%%/stylesheets/animate-surfing.css'

export default function Hero() {
  const links = [
    {text: 'E-mail', url: 'mailto:bozzhik@yandex.com'},
    {text: 'GitHub', url: 'https://github.com/bozzhik'},
    {text: 'Telegram', url: 'https://t.me/bozzhik'},
    {text: 'Instagram', url: 'https://instagram.com/bozzzzhik'},
  ]

  return (
    <section data-section="hero-index" className="space-y-8">
      <div className="group">
        <Text type="heading" className="flex items-center">
          hey, I&#39;m bozzhik
          <Image className="w-5 ml-4 animate-surfing group-hover:scale-[115%] duration-300" src={CursorImage} alt="" />
        </Text>
      </div>
      <Text>
        I&#39;m a website developer and user interface designer. I am studying at the HSE to design and develop <Badge href="#PROJECTS" icon={CursorImage} text="digital products" />. <br className="hidden sm:block" /> I am currently working as a self-employed frontend developer, specializing in creating stunning <Badge href="/works/" icon={CursorImage} text="landing pages" /> and interactive <Badge href="/works/" className="mr-[0.5px]" icon={CursorImage} text="websites" />.
      </Text>

      <div className="flex gap-5 xl:gap-3.5 sm:flex-wrap sm:gap-5 text-neutral-300">
        {links.map((link, index) => (
          <ArrowLink key={index} href={link.url} text={link.text} />
        ))}
      </div>
    </section>
  )
}

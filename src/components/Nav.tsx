import Image from 'next/image'

import LogoImage from '../assets/images/logo.png'

export const navSize = {
  w: 'w-[17rem]',
  pl: 'pl-[16.5rem]',
}

const navContent = {
  title: 'Maxim Bozhik',
  caption: 'Developer',
}

export default function Nav() {
  return (
    <section className="absolute flex w-full h-screen sm:hidden">
      <nav className={`flex flex-col fixed ${navSize.w} h-screen bg-custom-b-gray py-8 px-4 items-start justify-start gap-6 z-30 border-white/5 border-[0.5px]`}>
        <a className="flex items-center justify-start w-full gap-4 shrink-0 group" href="/">
          <Image className="duration-500 rounded-lg bg-custom-b-gray2 group-hover:bg-custom-black" width="45" height="45" src={LogoImage} priority quality={100} alt="logo" />

          <div className="flex flex-col gap-0">
            <p className="text-white text-md">{navContent.title}</p>
            <p className="text-sm font-light">{navContent.caption}</p>
          </div>
        </a>
      </nav>
    </section>
  )
}

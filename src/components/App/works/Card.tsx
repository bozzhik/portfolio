import {type StaticImageData} from 'next/image'

import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import {SPAN} from '~/UI/Typography'

type Props = {
  name: string
  descriptor: string
  image: StaticImageData
  link: string
  color: string
}

function Gradient({color, className}: {color?: string; className?: string}) {
  const dye = (color: string, opacity: number) => {
    if (!opacity) return color
    return color + opacity
  }

  const from = color || dye('#2A2A2A', 20)

  return (
    <div
      data-block="gradient"
      className={cn('absolute z-[-25] inset-0 size-full', className)}
      style={{
        background: `linear-gradient(to bottom, ${dye(from, 90)} 0%, ${dye(from, 25)} 15%, ${dye('#202020', 80)} 25%, ${dye('#101010', 50)} 100%)`,
      }}
    />
  )
}

export default function Card({name, descriptor, image, link, color}: Props) {
  return (
    <Link className={cn('relative overflow-hidden group', 'p-3 sm:p-1.25 flex flex-col', 'border border-gray/10 rounded-[14px] sm:rounded-[10px]', 'bg-gray-card/20')} href={link} target="_blank" rel="noopener noreferrer">
      <Image quality={100} src={image} alt={`${name} — ${descriptor}`} className={cn('w-full h-auto rounded-[8px] sm:rounded-[8px]', 'opacity-70 group-hover:opacity-90 duration-400', 'pointer-events-none')} />

      <div className={cn('p-3 sm:p-1.25 absolute z-20 bottom-0 left-0')}>
        <div className={cn('px-1.5 flex items-center gap-2 sm:gap-1.25', 'bg-gray/10 sm:bg-background/30 backdrop-blur-xs sm:backdrop-blur-sm rounded-xl')}>
          <div className={cn('size-2.5 sm:size-2.25 bg-gray rounded-full', 'scale-75 group-hover:scale-100 duration-400')} />
          <SPAN className="lowercase sm:text-sm pr-0.5">{descriptor}</SPAN>
        </div>
      </div>

      <Gradient className="opacity-0 group-hover:opacity-100 duration-500" color={color} />
    </Link>
  )
}

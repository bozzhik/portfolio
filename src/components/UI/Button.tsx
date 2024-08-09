'use client'

import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import Link from 'next/link'

type Props = {
  text: string
  href: string
  blank?: boolean
  className?: string
}

const MotionLink = motion(Link)

export default function Button({text, href, blank, className}: Props) {
  return (
    <MotionLink
      href={href}
      target={blank ? '_blank' : '_self'}
      className="inline-flex w-full overflow-hidden rounded-xl bg-[linear-gradient(120deg,#111_calc(var(--button-x)-25%),#333_var(--button-x),#111_calc(var(--button-x)+25%))] [--button-x:0%]"
      initial={
        {
          scale: 1,
          '--button-x': '-100%',
        } as any
      }
      animate={
        {
          '--button-x': '200%',
        } as any
      }
      transition={{
        stiffness: 500,
        damping: 20,
        type: 'spring',
        '--button-x': {
          duration: 3.5,
          repeat: Infinity,
          ease: [0.445, 0.05, 0.55, 0.95],
        },
      }}
    >
      <span className={cn('w-full px-4 py-1.5 text-lg sm:text-base text-center', 'duration-200 hover:text-neutral-400 sm:hover:text-white sm:active:text-neutral-400', 'bg-neutral-800/50 border-[1px] border-b-0 border-neutral-800', 'm-[0.25rem] rounded-[calc(0.7rem-0.125rem)] backdrop-blur-sm', className)}>{text}</span>
    </MotionLink>
  )
}

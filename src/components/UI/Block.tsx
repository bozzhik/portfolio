'use client'

import {cn} from '@/lib/utils'

import {motion} from 'motion/react'

import {H1} from '~/UI/Typography'

export default function Block({section, heading, className, delay = 0, children}: {section: string; heading?: string | null; className?: string; delay?: number; children: React.ReactNode}) {
  return (
    <motion.section
      data-section={section}
      className={cn('flex flex-col gap-2', className)}
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{
        duration: 0.7,
        delay,
        ease: 'backOut',
      }}
    >
      {heading !== null && <H1 className="capitalize">{heading || section}</H1>}

      <div>{children}</div>
    </motion.section>
  )
}

'use client'

import {CONTENT} from '@/content'
import {cn} from '@/lib/utils'

import {motion} from 'motion/react'

import Image, {type StaticImageData} from 'next/image'
import Block from '~/UI/Block'
import {P} from '~/UI/Typography'

function Badge({className, children, icon}: {className?: string; children: React.ReactNode; icon: StaticImageData}) {
  const generateRandomRotate = () => {
    const ranges = [
      [-10, -6],
      [-2, 2],
      [6, 10],
    ]

    const randomRange = ranges[Math.floor(Math.random() * ranges.length)]
    return Math.floor(Math.random() * (randomRange[1] - randomRange[0] + 1)) + randomRange[0]
  }

  const randomRotate = generateRandomRotate()

  return (
    <motion.span className={cn('relative inline-flex flex-col items-center group', className)} initial="initial" whileHover="hover">
      <motion.span
        className="absolute pointer-events-none z-10 top-0"
        initial={{opacity: 0, y: -10, scale: 0.5, rotate: 0}}
        variants={{
          initial: {opacity: 0, y: -10, scale: 0.5, rotate: 0},
          hover: {
            opacity: 1,
            y: -42.5,
            scale: 1,
            rotate: randomRotate,
          },
        }}
        transition={{
          duration: 0.4,
          ease: 'backOut',
        }}
      >
        <Image quality={100} src={icon} alt={`${children} icon`} className="size-9 rounded-lg" />
      </motion.span>
      <span>{children}</span>
    </motion.span>
  )
}

function TextWithBadges({text, badges}: {text: string; badges: typeof CONTENT.homePage.about.badges}) {
  const badgeTexts = badges.map((badge) => badge.text)

  return (
    <P>
      {text.split(new RegExp(`(${badgeTexts.join('|')})`, 'g')).map((part, i) => {
        const badge = badges.find((b) => b.text === part)

        return badge ? (
          <Badge className="text-foreground font-semibold" icon={badge.icon} key={i}>
            {badge.text}
          </Badge>
        ) : (
          part
        )
      })}
    </P>
  )
}

export default function About({view = 'home', delay}: {view?: 'home' | 'cv'; delay?: number}) {
  const {text, text2, badges} = CONTENT.homePage.about

  return (
    <Block section="about" delay={delay}>
      <div className="space-y-4">
        <TextWithBadges text={text} badges={badges} />
        {view === 'cv' && <TextWithBadges text={text2} badges={badges} />}
      </div>
    </Block>
  )
}

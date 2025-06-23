'use client'

import {CONTENT} from '@/content'
import {cn} from '@/lib/utils'

import {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'motion/react'

import Link from 'next/link'
import Image from 'next/image'
import {H1, SPAN} from '~/UI/Typography'

const TIMEOUTS = {
  autoplay: 10 * 1000,
  hover: 1 * 1000,
}

export default function Profile() {
  const {person} = CONTENT.global
  const picturesLength = person.pictures.length

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [randomTagline, setRandomTagline] = useState(person.taglines[0])
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    person.pictures.forEach((pic) => {
      const img = new window.Image()
      img.src = pic.src
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % picturesLength)
    }, TIMEOUTS.autoplay)

    return () => clearInterval(interval)
  }, [isHovered, picturesLength])

  useEffect(() => {
    if (!isHovered) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % picturesLength)
    }, TIMEOUTS.hover)

    return () => clearInterval(interval)
  }, [isHovered, picturesLength])

  useEffect(() => {
    setRandomTagline(person.taglines[Math.floor(Math.random() * person.taglines.length)])
  }, [person.taglines])

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  const handleHover = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 2500)
    }
  }

  return (
    <div data-block="profile-header" className="flex items-center gap-3.5">
      <motion.div className="relative size-14 sm:size-13 aspect-square" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
        <Link href="/">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{opacity: 0, scale: 0.9}}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {duration: 0.5},
              }}
              exit={{
                opacity: 0,
                scale: 1.1,
                transition: {duration: 0.5},
              }}
              className="absolute inset-0"
            >
              <Image quality={100} className="rounded-[10px]" src={person.pictures[currentImageIndex]} alt={`${person.name} — Frontend & Mobile Developer`} sizes="56px" fill priority />
            </motion.div>
          </AnimatePresence>
        </Link>
      </motion.div>

      <div className="sm:space-y-0.5" onMouseEnter={handleHover}>
        <div className="flex items-center gap-2">
          <H1>{person.name}</H1>

          <Image className={cn('size-6', isAnimating && 'animate-cursoring')} src={person.cursor} alt="bozzhik cursor" />
        </div>

        <SPAN className="sm:line-clamp-1">{randomTagline}</SPAN>
      </div>
    </div>
  )
}

'use client'

import {StarField} from '@/lib/starfield'
import {useRef, useEffect} from 'react'

export default function Bg() {
  const starsRef = useRef<StarField | null>(null)

  useEffect(() => {
    const sf = new StarField('stars', {
      followMouse: false,
      color: {r: 255, g: 255, b: 255},
      glow: false,
      minV: 1,
      maxV: 1,
      numStars: 100,
      trails: false,
    })

    sf.start()
    starsRef.current = sf

    return () => {
      sf.stop()
    }
  }, [])

  return <canvas className="absolute inset-0 w-screen" id="stars"></canvas>
}

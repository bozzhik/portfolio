import {AnimLoopEngine} from 'anim-loop-engine'
import {Star} from './Star'
import {defaultColor, StarColorObj} from './color'

type StarFieldOpts = {
  followMouse?: boolean
  followContext?: HTMLElement
  color?: StarColorObj
  glow?: boolean
  maxV?: number
  minV?: number
  numStars?: number
  trails?: boolean
}

export class StarField {
  private readonly defaultMaxV: number = 5
  private readonly defaultMinV: number = 2
  private readonly defaultNumStars: number = 400

  private initialized: boolean = false
  private canvas: HTMLCanvasElement
  private canvasRect: DOMRect
  private ctx: CanvasRenderingContext2D
  private engine: AnimLoopEngine
  private resizeTimeout: ReturnType<typeof setTimeout> | null = null
  private stars: Star[] = []
  private offsetX: number = 0
  private offsetY: number = 0
  private offsetTX: number = 0
  private offsetTY: number = 0

  // Declare properties here
  private color: StarColorObj = defaultColor
  private glow: boolean = false
  private minV: number = this.defaultMinV
  private maxV: number = this.defaultMaxV
  private numStars: number = this.defaultNumStars
  private trails: boolean = false
  private followContext: HTMLElement = document.documentElement

  constructor(canvasId: string, opts: StarFieldOpts = {}) {
    if (!canvasId) {
      throw new Error('First argument "id" is required')
    }

    const {color = defaultColor, glow = false, minV = this.defaultMinV, maxV = this.defaultMaxV, numStars = this.defaultNumStars, trails = false, followMouse = false, followContext = document.documentElement} = opts

    this.color = color
    this.glow = glow
    this.minV = minV
    this.maxV = maxV
    this.numStars = Math.abs(numStars)
    this.trails = trails

    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement
    this.ctx = this.canvas.getContext('2d')!
    this.canvasRect = this.canvas.getBoundingClientRect()

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.engine = new AnimLoopEngine()
    this.engine.addTask(this.draw.bind(this))

    window.addEventListener('blur', this.stop.bind(this))
    window.addEventListener('focus', this.start.bind(this))
    window.addEventListener('resize', this.handleResize.bind(this))

    this.setupCanvas()
    this.generateStars()
    this.initialized = true

    if (followMouse) {
      this.setFollowMouse(true)
    }
  }

  private generateStars() {
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push(
        new Star({
          ctx: this.ctx,
          W: this.canvas.width,
          H: this.canvas.height,
          hW: this.canvas.width / 2,
          hH: this.canvas.height / 2,
          minV: this.minV,
          maxV: this.maxV,
          color: this.color,
          glow: this.glow,
          trails: this.trails,
          addTasks: this.engine.addTasks,
        }),
      )
    }
  }

  private setupCanvas() {
    this.canvas.setAttribute('height', `${this.canvasRect.height}`)
    this.canvas.setAttribute('width', `${this.canvasRect.width}`)
    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2)
  }

  private draw() {
    if (this.offsetX !== this.offsetTX) {
      this.offsetX += (this.offsetTX - this.offsetX) * 0.02
      this.offsetY += (this.offsetTY - this.offsetY) * 0.02
    }

    this.ctx.clearRect(-this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height)

    for (const star of this.stars) {
      star.draw(this.offsetX, this.offsetY)
    }
  }

  private handleMouseMove(e: MouseEvent) {
    if (this.initialized) {
      this.offsetTX = e.clientX - this.canvasRect.left - this.canvas.width / 2
      this.offsetTY = e.clientY - this.canvasRect.top - this.canvas.height / 2
    }
  }

  private resetMouseOffset() {
    this.offsetTX = 0
    this.offsetTY = 0
  }

  private handleResize() {
    clearTimeout(this.resizeTimeout!)
    this.stop()
    this.resizeTimeout = setTimeout(() => {
      this.reset()
      this.start()
    }, 500)
  }

  start() {
    this.engine.start()
  }

  stop() {
    this.engine.stop()
  }

  reset() {
    this.stars = []
    this.setupCanvas()
    this.generateStars()
  }

  setMaxV(val: number) {
    this.maxV = Math.abs(val) || this.defaultMaxV
    this.reset()
  }

  setMinV(val: number) {
    this.minV = Math.abs(val) || this.defaultMinV
    this.reset()
  }

  setNumStars(val: number) {
    this.numStars = Math.abs(val) || this.defaultNumStars
    this.reset()
  }

  setFollowMouse(val: boolean) {
    if (val) {
      this.followContext.addEventListener('mousemove', this.handleMouseMove)
    } else {
      this.followContext.removeEventListener('mousemove', this.handleMouseMove)
      this.resetMouseOffset()
    }
  }
}

import { MAX_RADIUS, MIN_RADIUS } from '../helpers/constants'
import { defaultOptions, type Options } from '../types/options'
import type { Pressed } from '../types/pressed'

export class Bubble {
  private options: Options = defaultOptions

  constructor(options: Partial<Options> = {}) {
    this.setOptions(options)
  }

  setOptions(options: Partial<Options>) {
    this.options = { ...this.options, ...options }

    if (this.options.radius < MIN_RADIUS) {
      this.options.radius = MIN_RADIUS
    } else if (this.options.radius > MAX_RADIUS) {
      this.options.radius = MAX_RADIUS
    }
  }

  draw(context: CanvasRenderingContext2D | null) {
    if (!context) return

    context.beginPath()
    context.arc(this.options.positionX, this.options.positionY, this.options.radius, 0, Math.PI * 2)
    context.strokeStyle = this.options.color
    context.stroke()
    context.closePath()
  }

  direct(width: number, height: number, pressed: Pressed) {
    const newPositionX = this.options.positionX + this.options.directionX
    const newPositionY = this.options.positionY + this.options.directionY

    const leftLimit = this.options.radius + 1
    const upperLimit = this.options.radius + 1
    const rightLimit = width - this.options.radius - 1
    const lowerLimit = height - this.options.radius - 1

    if (pressed.left && newPositionX > leftLimit) {
      this.options.directionX = -1
    } else if (pressed.right && newPositionX < rightLimit) {
      this.options.directionX = 1
    } else if (newPositionX > rightLimit || newPositionX < leftLimit) {
      this.options.directionX = -this.options.directionX
    }

    if (pressed.up && newPositionY > upperLimit) {
      this.options.directionY = -1
    } else if (pressed.down && newPositionY < lowerLimit) {
      this.options.directionY = 1
    } else if (newPositionY > lowerLimit || newPositionY < upperLimit) {
      this.options.directionY = -this.options.directionY
    }
  }

  move() {
    this.options.positionX += this.options.directionX
    this.options.positionY += this.options.directionY
  }
}

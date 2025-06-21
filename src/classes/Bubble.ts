import { DEFAULT_COLOR, DEFAULT_RADIUS } from '../helpers/constants'
import { type Options } from '../types/options'

export class Bubble {
  public color: string = DEFAULT_COLOR
  public radius: number = DEFAULT_RADIUS
  public positionX: number = DEFAULT_RADIUS + 1
  public positionY: number = DEFAULT_RADIUS + 1
  public directionX: number = 1
  public directionY: number = 1

  constructor(options: Partial<Options> = {}) {
    this.color = options.color || DEFAULT_COLOR
    this.positionX = options.positionX || DEFAULT_RADIUS + 1
    this.positionY = options.positionY || DEFAULT_RADIUS + 1
    this.directionX = options.directionX || 1
    this.directionY = options.directionY || 1
  }

  draw(context: CanvasRenderingContext2D | null) {
    if (!context) return

    context.beginPath()
    context.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2)
    context.strokeStyle = this.color
    context.stroke()
    context.closePath()
  }

  move(speed: number) {
    this.positionX += this.directionX * speed
    this.positionY += this.directionY * speed
  }
}

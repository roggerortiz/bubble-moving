import type { Options } from '../types/options'
import { defaultPressed, type Pressed } from '../types/pressed'
import { Bubble } from './Bubble'

export class Canvas {
  public width: number = 0
  public height: number = 0
  public context: CanvasRenderingContext2D | null = null
  public bubble: Bubble = new Bubble()

  constructor() {
    const canvas = document.querySelector('canvas')

    if (canvas) {
      this.context = canvas.getContext('2d')
      this.width = canvas.width
      this.height = canvas.height
    }
  }

  clear() {
    this.context?.clearRect(0, 0, this.width, this.height)
  }

  draw(options: Partial<Options> = {}, pressed: Pressed = defaultPressed) {
    this.bubble.setOptions(options)
    this.bubble.draw(this.context)
    this.bubble.direct(this.width, this.height, pressed)
    this.bubble.move()
  }
}

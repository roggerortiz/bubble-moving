import { DEFAULT_RADIUS, MAX_SPEED, MIN_SPEED } from '../helpers/constants'
import { getRandomBoolean, getRandomColor, getRandomNumber, isCollisionWithOtherBubble } from '../helpers/utils'
import { Bubble } from './Bubble'

export class Canvas {
  private speed: number = 1
  private width: number = 0
  private height: number = 0
  private context: CanvasRenderingContext2D | null = null
  private bubbles: Bubble[] = []

  constructor() {
    const canvas = document.querySelector('canvas')

    if (canvas) {
      this.context = canvas.getContext('2d')
      this.width = canvas.width
      this.height = canvas.height
      this.addBubble()
    }
  }

  clear() {
    this.context?.clearRect(0, 0, this.width, this.height)
  }

  speedUp() {
    if (this.speed < MAX_SPEED) {
      this.speed++
    }
  }

  speedDown() {
    if (this.speed > MIN_SPEED) {
      this.speed--
    }
  }

  addBubble() {
    const minPosition = DEFAULT_RADIUS + 1
    const maxPositionX = this.width - DEFAULT_RADIUS - 1
    const maxPositionY = this.height - DEFAULT_RADIUS - 1

    const bubble = new Bubble({
      color: getRandomColor(),
      positionX: getRandomNumber(minPosition, maxPositionX),
      positionY: getRandomNumber(minPosition, maxPositionY),
      directionX: getRandomBoolean() ? 1 : -1,
      directionY: getRandomBoolean() ? 1 : -1
    })

    while (isCollisionWithOtherBubble(bubble, this.bubbles)) {
      bubble.positionX = getRandomNumber(minPosition, maxPositionX)
      bubble.positionY = getRandomNumber(minPosition, maxPositionY)
    }

    this.bubbles.push(bubble)
  }

  removeBubble() {
    this.bubbles.pop()
  }

  detectCollisions() {
    this.bubbles = this.bubbles.map((bubble, index, bubbles) => {
      const newPositionX = bubble.positionX + bubble.directionX
      const newPositionY = bubble.positionY + bubble.directionY

      const leftLimit = bubble.radius + 1
      const upperLimit = bubble.radius + 1
      const rightLimit = this.width - bubble.radius - 1
      const lowerLimit = this.height - bubble.radius - 1

      if (newPositionX > rightLimit || newPositionX < leftLimit) {
        bubble.directionX = -bubble.directionX
      }

      if (newPositionY > lowerLimit || newPositionY < upperLimit) {
        bubble.directionY = -bubble.directionY
      }

      const otherBubbles: Bubble[] = bubbles.filter((_, otherIndex: number) => otherIndex !== index)

      if (isCollisionWithOtherBubble(bubble, otherBubbles)) {
        bubble.directionX = -bubble.directionX
        bubble.directionY = -bubble.directionY
      }

      return bubble
    })
  }

  draw() {
    this.bubbles.forEach((bubble) => {
      bubble.draw(this.context)
      bubble.move(this.speed)
    })
  }
}

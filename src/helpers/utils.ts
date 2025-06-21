import { Bubble } from '../classes/Bubble'
import { COLORS } from './constants'

export const getRandomColor = (): string => {
  const randomIndex = Math.floor(Math.random() * COLORS.length)
  return COLORS[randomIndex]
}

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min) + 1
}

export const getRandomBoolean = (): boolean => {
  const randomNumber: number = Math.floor(Math.random() * 2)
  return randomNumber === 1 ? true : false
}

export const getDistance = (bubble1: Bubble, bubble2: Bubble): number => {
  const dx = bubble1.positionX - bubble2.positionX
  const dy = bubble1.positionY - bubble2.positionY
  return Math.sqrt(dx * dx + dy * dy)
}

export const isCollisionWithOtherBubble = (bubble: Bubble, otherBubbles: Bubble[]): boolean => {
  return otherBubbles.some((otherBubble) => {
    const distance: number = getDistance(bubble, otherBubble)
    return distance <= bubble.radius + otherBubble.radius
  })
}

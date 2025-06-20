import { COLORS } from './constants'

export const getRandomColor = (): string => {
  const randomIndex = Math.floor(Math.random() * COLORS.length)
  return COLORS[randomIndex]
}

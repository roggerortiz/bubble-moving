import { DEFAULT_COLOR, DEFAULT_RADIUS } from '../helpers/constants'

export type Options = {
  color: string
  radius: number
  positionX: number
  positionY: number
  directionX: number
  directionY: number
}

export const defaultOptions: Options = {
  color: DEFAULT_COLOR,
  radius: DEFAULT_RADIUS,
  positionX: DEFAULT_RADIUS + 1,
  positionY: DEFAULT_RADIUS + 1,
  directionX: 1,
  directionY: 1
}

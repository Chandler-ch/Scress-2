import { gameState } from '@/utils/saveManager'

export function getTileFigure(position: number) {
  return gameState[position - 1]
}

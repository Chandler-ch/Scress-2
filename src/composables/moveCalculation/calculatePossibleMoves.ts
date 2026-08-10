import { gameState } from '@/utils/saveManager'

export function calculateMoves(pos: number, multiplier: number, limited: number) {
  for (let i = 1; i <= limited; i++) {
    console.log(gameState[pos + multiplier * i])
  }
}

import { gameState } from '@/utils/saveManager'

export function calculateNorthMoves(pos: number, limited: number) {
  for (let i = 1; i <= limited; i++) {
    console.log(gameState[pos + 8 * i])
  }
}

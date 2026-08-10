import type { DirectionMultiplier } from '@/types/directions'
import { possibleMoves } from '@/utils/checkPossibleMoves'
import { gameState } from '@/utils/saveManager'

export function calculateMoves(
  pos: number,
  direction: DirectionMultiplier,
  isWhite: boolean,
  limited: number,
) {
  for (let i = 1; i <= limited; i++) {
    if (isFree(pos + direction.multiplier * i)) {
      possibleMoves.push(pos)
      console.log(gameState[pos + direction.multiplier * i])
      continue
    }
  }
}

function isFree(pos: number) {
  if (gameState[pos] === '') return true
  return false
}

function isEatable(pos: number, isWhite: boolean) {
  if (gameState[pos]?.includes('-W')) {
  }

  // -W = false
}

function isFriendly(pos: number) {}

function isOutOfBounce(pos: number) {
  if (!gameState[pos]) {
  }
}

import type { DirectionMultiplier } from '@/types/directions'
import { possibleMoves } from '@/utils/checkPossibleMoves'
import { gameState } from '@/utils/saveManager'

export function checkPossibleMoves(
  pos: number,
  direction: DirectionMultiplier,
  isWhite: boolean,
  limited: number,
) {
  for (let i = 1; i <= limited; i++) {
    if (isFree(pos + direction.multiplier * i)) {
      possibleMoves.push(pos)
      if (isOnEdge(pos, direction.edge)) break
      continue
    } else if (isEatable(pos, isWhite)) {
      possibleMoves.push(pos)
      break
    } else if (isFriendly(pos, isWhite)) {
      break
    } else {
      console.log('Something went wrong. Please check the security cameras. Operation will stop.')
      break
    }
  }
}

function isFree(pos: number) {
  return gameState[pos] === ''
}

function isEatable(pos: number, isWhite: boolean) {
  const figureIsWhite = gameState[pos]?.includes('-W')
  return figureIsWhite !== isWhite
}

function isFriendly(pos: number, isWhite: boolean) {
  const figureIsWhite = gameState[pos]?.includes('-W')
  return figureIsWhite === isWhite
}

function isOnEdge(pos: number, edge: number[]) {
  return edge.find((e) => {
    pos === e
  })
}

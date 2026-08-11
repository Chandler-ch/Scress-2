import type { DirectionMultiplier } from '@/types/directions'
import { possibleMoves } from '@/utils/possibleMovesHandler'
import { gameState } from '@/utils/saveManager'

export function checkDirectionTiles(
  pos: number,
  direction: DirectionMultiplier,
  isWhite: boolean,
  limited: number,
) {
  for (let i = 1; i <= limited; i++) {
    const calcPos = pos + direction.multiplier * i

    if (isFree(calcPos)) {
      possibleMoves.value.push(calcPos)
      if (isOnEdge(calcPos, direction.edge)) break
      continue
    } else if (isEatable(calcPos, isWhite)) {
      possibleMoves.value.push(calcPos)
      break
    } else if (isFriendly(calcPos, isWhite)) {
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

function isEatable(pos: number, currentIsWhite: boolean) {
  const figureIsWhite = gameState[pos]?.includes('-W')
  return figureIsWhite !== currentIsWhite
}

function isFriendly(pos: number, currentIsWhite: boolean) {
  const figureIsWhite = gameState[pos]?.includes('-W')
  return figureIsWhite === currentIsWhite
}

function isOnEdge(pos: number, edge: number[]) {
  return edge.find((e) => {
    pos === e
  })
}

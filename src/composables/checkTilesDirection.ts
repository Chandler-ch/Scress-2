import type { DirectionMultiplier } from '@/types/directions'
import { possibleMoves } from '@/utils/possibleMovesHandler'
import { gameState, isWhiteTurn } from '@/utils/saveManager'

export function checkDirectionTiles(pos: number, direction: DirectionMultiplier, limited: number) {
  for (let i = 1; i <= limited; i++) {
    const calcPos = pos + direction.multiplier * i

    if (isFree(calcPos)) {
      possibleMoves.value.push(calcPos)
      if (isOnEdge(calcPos, direction.edge)) break
      continue
    } else if (isEatable(calcPos)) {
      possibleMoves.value.push(calcPos)
      break
    } else if (isFriendly(calcPos)) {
      break
    } else {
      console.log('Something went wrong. Please check the security cameras. Operation will stop.')
      break
    }
  }
}

function isFree(pos: number) {
  return gameState.value[pos] === ''
}

function isEatable(pos: number) {
  const figureIsWhite = gameState.value[pos]?.includes('-W')
  return figureIsWhite !== isWhiteTurn.value
}

function isFriendly(pos: number) {
  const figureIsWhite = gameState.value[pos]?.includes('-W')
  return figureIsWhite === isWhiteTurn.value
}

function isOnEdge(pos: number, edge: number[]) {
  return edge.find((e) => {
    pos === e
  })
}

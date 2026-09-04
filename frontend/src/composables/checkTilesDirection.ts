import type { DirectionMultiplier } from '@/types/directions'
import { possibleMoves } from '@/utils/possibleMovesHandler'
import { gameState, isWhiteTurn } from '@/utils/saveManager'

export function checkDirectionTilesMovable(
  pos: number,
  direction: DirectionMultiplier,
  limited: number,
) {
  for (let i = 1; i <= limited; i++) {
    const calcPos = pos + direction.multiplier * i

    if (isOnEdge(pos, direction.edge)) break
    else if (isFree(calcPos)) {
      possibleMoves.value.push(calcPos)
      if (isOnEdge(calcPos, direction.edge)) {
        break
      }
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

export function checkDirectionTileEatable(pos: number, direction: DirectionMultiplier) {
  const calcPos = pos + direction.multiplier

  if (isEatable(calcPos)) possibleMoves.value.push(calcPos)
}

// !isOnEdge(pos, direction.edge) &&
function isFree(pos: number) {
  return gameState.value[pos] === ''
}

// umschreiben, dass kein boolean zurückkommt, sondern der platz dort und dann checken
function isEatable(pos: number) {
  const targetFigure = gameState.value[pos]
  const targetIsWhite = targetFigure?.includes('-W')
  const targetIsEmpty = targetFigure?.length == 0
  const targetIsBlack = !targetIsWhite && !targetIsEmpty

  if (isWhiteTurn.value) {
    return targetIsBlack
  } else return targetIsWhite
}

// umschreiben, dass kein boolean zurückkommt, sondern der platz dort und dann checken
function isFriendly(pos: number) {
  const figureIsWhite = gameState.value[pos]?.includes('-W')
  return figureIsWhite === isWhiteTurn.value
}

function isOnEdge(pos: number, edge: number[]) {
  let found = false
  edge.find((e) => {
    if (pos === e) found = true
  })

  if (found) return true
  else return false
}

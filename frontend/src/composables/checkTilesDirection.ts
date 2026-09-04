import type { DirectionMultiplier } from '@/types/directions'
import type { FigureSituation } from '@/types/scressFigures'
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
    } else if (isFigure(calcPos, 'ENEMY')) {
      possibleMoves.value.push(calcPos)
      break
    } else if (isFigure(calcPos, 'FRIEND')) {
      break
    } else {
      console.log('Something went wrong. Please check the security cameras. Operation will stop.')
      break
    }
  }
}

export function checkDirectionTileEatable(pos: number, direction: DirectionMultiplier) {
  const calcPos = pos + direction.multiplier

  if (!isOnEdge(pos, direction.edge) && isFigure(calcPos, 'ENEMY'))
    possibleMoves.value.push(calcPos)
}

function isFree(pos: number) {
  return gameState.value[pos] === ''
}

function isFigure(pos: number, situation: FigureSituation) {
  const isEnemy = situation === 'ENEMY'

  const targetFigure = gameState.value[pos]
  const targetIsWhite = targetFigure?.includes('-W')
  const targetIsEmpty = targetFigure?.length == 0
  const targetIsBlack = !targetIsWhite && !targetIsEmpty

  if (isWhiteTurn.value) {
    return isEnemy ? targetIsBlack : targetIsWhite
  } else return isEnemy ? targetIsWhite : targetIsBlack
}

function isOnEdge(pos: number, edge: number[]) {
  let found = false
  edge.find((e) => {
    if (pos === e) found = true
  })

  if (found) return true
  else return false
}

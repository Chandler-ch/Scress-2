import type { FigureSituation } from '@/types/tileCheck'
import { gameState, isWhiteTurn } from '@/utils/saveManager'

export function isFree(pos: number) {
  return gameState.value[pos] === ''
}

export function isFigure(pos: number, situation: FigureSituation) {
  const isEnemy = situation === 'ENEMY'

  const targetFigure = gameState.value[pos]
  const targetIsWhite = targetFigure?.includes('-W')
  const targetIsEmpty = targetFigure?.length == 0
  const targetIsBlack = !targetIsWhite && !targetIsEmpty

  if (isWhiteTurn.value) {
    return isEnemy ? targetIsBlack : targetIsWhite
  } else return isEnemy ? targetIsWhite : targetIsBlack
}

export function isOnEdge(pos: number, edge: number[]) {
  let found = false
  edge.find((e) => {
    if (pos === e) found = true
  })

  if (found) return true
  else return false
}

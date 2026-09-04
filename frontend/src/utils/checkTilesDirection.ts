import type { Direction, DirectionMultiplier } from '@/types/directions'
import { gameState, isWhiteTurn } from '@/utils/saveManager'
import { getDirectionMultiplier } from '../composables/directionMultiplier'
import type { FigureSituation, TileCheck } from '@/types/check'
import { ref, type Ref } from 'vue'

export const possibleMoves: Ref<number[]> = ref([])

export function checkDirectionTiles(
  pos: number,
  directionRaw: Direction,
  limited: number = 8,
  check: TileCheck = 'ALL',
) {
  const direction: DirectionMultiplier = getDirectionMultiplier(directionRaw)
  const checkMove = check == 'ALL' || check == 'MOVE'
  const checkEat = check == 'ALL' || check == 'EAT'

  for (let i = 1; i <= limited; i++) {
    const calcPos = pos + direction.multiplier * i

    if (isOnEdge(pos, direction.edge)) break
    else if (checkMove && isFree(calcPos)) {
      possibleMoves.value.push(calcPos)
      if (isOnEdge(calcPos, direction.edge)) {
        break
      }
      continue
    } else if (checkEat && isFigure(calcPos, 'ENEMY')) {
      possibleMoves.value.push(calcPos)
      break
    } else if (checkMove && isFigure(calcPos, 'FRIEND')) {
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

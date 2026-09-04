import type { Direction, DirectionMultiplier } from '@/types/directions'
import { getDirectionMultiplier } from '../composables/directionMultiplier'
import type { TileCheck } from '@/types/tileCheck'
import { ref, type Ref } from 'vue'
import { isFigure, isFree, isOnEdge } from '@/composables/tileCheck'

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

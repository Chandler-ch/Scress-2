import { checkDirectionTiles as checkDirectionTiles } from '@/composables/checkTilesDirection'
import { resolveDirection } from '@/composables/directionMultiplier'
import { type DirectionMultiplier, type Direction } from '@/types/directions'
import { ref, type Ref } from 'vue'

export const possibleMoves: Ref<number[]> = ref([])

export function getpossibleMoves(
  pos: number,
  direction: Direction,
  isWhite: boolean,
  limited: number = 8,
) {
  const multiplier: DirectionMultiplier = resolveDirection(direction)
  checkDirectionTiles(pos, multiplier, isWhite, limited)
}

import { checkDirectionTileEatable, checkDirectionTilesMovable } from '@/composables/checkTilesDirection'
import { resolveDirection } from '@/composables/directionMultiplier'
import { type DirectionMultiplier, type Direction } from '@/types/directions'
import { ref, type Ref } from 'vue'

export const possibleMoves: Ref<number[]> = ref([])

export function getPossibleMoves(pos: number, direction: Direction, limited: number = 8) {
  const multiplier: DirectionMultiplier = resolveDirection(direction)
  checkDirectionTilesMovable(pos, multiplier, limited)
}

export function getPossibleEat(pos: number, direction: Direction) {
  const multiplier: DirectionMultiplier = resolveDirection(direction)
  checkDirectionTileEatable(pos, multiplier)
}

// get multiplier
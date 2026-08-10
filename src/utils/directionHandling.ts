import { checkDirectionTiles as checkDirectionTiles } from '@/composables/checkTilesDirection'
import { resolveDirection } from '@/composables/directionMultiplier'
import { type DirectionMultiplier, type directions } from '@/types/directions'

export const possibleMoves: number[] = []

export function getPossibleMoves(
  pos: number,
  direction: directions,
  isWhite: boolean,
  limited: number = 8,
) {
  const multiplier: DirectionMultiplier = resolveDirection(direction)
  checkDirectionTiles(pos, multiplier, isWhite, limited)
}

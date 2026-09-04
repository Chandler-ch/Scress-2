import { checkDirectionTiles } from '@/utils/checkTilesDirection'
import { isWhiteTurn } from '../saveManager'
import type { Direction } from '@/types/directions'

export function selectPawnPath(pos: number) {
  const isInStartPosition = isWhiteTurn ? pos >= 8 && pos < 16 : pos >= 48 && pos < 56
  const moveDirection: Direction = isWhiteTurn ? 'north' : 'south'
  const eatDirection: Direction[] = isWhiteTurn
    ? ['northwest', 'northeast']
    : ['southeast', 'southwest']

  let limited = 1
  if (isInStartPosition) {
    limited = 2
  }
  checkDirectionTiles(pos, moveDirection, limited, 'MOVE')
  eatDirection.forEach((direction) => {
    checkDirectionTiles(pos, direction, 1, 'EAT')
  })
}

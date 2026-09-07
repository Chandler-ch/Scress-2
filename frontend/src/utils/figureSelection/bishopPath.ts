import type { Direction } from '@/types/directions'
import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectBishopPath(pos: number) {
  const directions: Direction[] = ['northeast', 'northwest', 'southeast', 'southwest']
  directions.forEach((direction) => {
    checkDirectionTiles(pos, direction)
  })
}

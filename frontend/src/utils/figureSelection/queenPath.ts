import type { Direction } from '@/types/directions'
import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectQueenPath(pos: number) {
  const directions: Direction[] = [
    'north',
    'east',
    'south',
    'west',
    'northeast',
    'northwest',
    'southeast',
    'southwest',
  ]
  directions.forEach((direction) => {
    checkDirectionTiles(pos, direction)
  })
}

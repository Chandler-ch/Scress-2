import type { Direction } from '@/types/directions'
import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectKingPath(pos: number) {
  const limited = 1
  const directions: Direction[] = [
    'north',
    'east',
    'south',
    'west',
    'northeast',
    'northwest',
    'southwest',
    'southeast',
  ]
  directions.forEach((direction) => {
    checkDirectionTiles(pos, direction, limited)
  })
}

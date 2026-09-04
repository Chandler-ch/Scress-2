import type { Direction } from '@/types/directions'
import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectRookPath(pos: number) {
  const directions: Direction[] = ['north', 'east', 'south', 'west']
  directions.forEach((direction) => {
    checkDirectionTiles(pos, direction)
  })
}

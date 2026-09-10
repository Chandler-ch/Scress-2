import { type Direction } from '@/types/directions'
import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectKnightPath(pos: number) {
  const limited = 1
  const directions: Direction[] = [
    'kNorthWest',
    'kEastNorth',
    'kEastSouth',
    'kNorthEast',
    'kSouthEast',
    'kSouthWest',
    'kWestSouth',
    'kWestNorth',
  ]
  directions.forEach((direction) => {
    checkDirectionTiles(pos, direction, limited)
  })
}

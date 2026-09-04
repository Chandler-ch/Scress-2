import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectKnightPath(pos: number) {
  const limited = 1
  checkDirectionTiles(pos, 'kNorthWest', limited)
  checkDirectionTiles(pos, 'kWwestNorth', limited)
  checkDirectionTiles(pos, 'kWestSouth', limited)
  checkDirectionTiles(pos, 'kSouthWest', limited)
  checkDirectionTiles(pos, 'kSouthEast', limited)
  checkDirectionTiles(pos, 'kEastSouth', limited)
  checkDirectionTiles(pos, 'kEastNorth', limited)
  checkDirectionTiles(pos, 'kNorthEast', limited)
}

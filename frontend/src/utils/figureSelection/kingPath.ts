import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectKingPath(pos: number) {
  const limited = 1
  checkDirectionTiles(pos, 'north', limited)
  checkDirectionTiles(pos, 'east', limited)
  checkDirectionTiles(pos, 'south', limited)
  checkDirectionTiles(pos, 'west', limited)
  checkDirectionTiles(pos, 'northeast', limited)
  checkDirectionTiles(pos, 'northwest', limited)
  checkDirectionTiles(pos, 'southeast', limited)
  checkDirectionTiles(pos, 'southwest', limited)
}

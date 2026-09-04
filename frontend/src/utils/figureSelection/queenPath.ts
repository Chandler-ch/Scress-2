import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectQueenPath(pos: number) {
  checkDirectionTiles(pos, 'north')
  checkDirectionTiles(pos, 'east')
  checkDirectionTiles(pos, 'south')
  checkDirectionTiles(pos, 'west')
  checkDirectionTiles(pos, 'northeast')
  checkDirectionTiles(pos, 'northwest')
  checkDirectionTiles(pos, 'southeast')
  checkDirectionTiles(pos, 'southwest')
}

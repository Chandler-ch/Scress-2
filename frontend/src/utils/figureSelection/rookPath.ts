import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectRookPath(pos: number) {
  checkDirectionTiles(pos, 'north')
  checkDirectionTiles(pos, 'east')
  checkDirectionTiles(pos, 'south')
  checkDirectionTiles(pos, 'west')
}

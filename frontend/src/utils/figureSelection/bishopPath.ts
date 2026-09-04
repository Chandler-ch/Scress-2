import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectBishopPath(pos: number) {
  checkDirectionTiles(pos, 'northeast')
  checkDirectionTiles(pos, 'northwest')
  checkDirectionTiles(pos, 'southeast')
  checkDirectionTiles(pos, 'southwest')
}

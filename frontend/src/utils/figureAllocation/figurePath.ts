import type { Direction } from '@/types/directions'
import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectFigurePath(pos: number, directions: Direction[], limited: number = 8) {
  directions.forEach((direction) => {
    checkDirectionTiles(pos, direction, limited)
  })
}

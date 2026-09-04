import { checkDirectionTiles } from '@/utils/checkTilesDirection'

export function selectPawnPath(pos: number) {
  let limited = 1
  if (pos >= 8 && pos < 16) {
    limited = 2
  }
  checkDirectionTiles(pos, 'south', limited, 'MOVE')
  checkDirectionTiles(pos, 'southwest', 1, 'EAT')
  checkDirectionTiles(pos, 'southeast', 1, 'EAT')
}

export function selectWPawnPath(pos: number) {
  let limited = 1
  if (pos >= 48 && pos < 56) {
    limited = 2
  }
  checkDirectionTiles(pos, 'north', limited, 'MOVE')
  checkDirectionTiles(pos, 'northwest', 1, 'EAT')
  checkDirectionTiles(pos, 'northeast', 1, 'EAT')
}

export function selectPawnEatingPath() {}

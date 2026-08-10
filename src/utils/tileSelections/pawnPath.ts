import { getPossibleMoves } from '../DirectionHandling'
export function selectPawnPath(pos: number) {
  let limited = 1
  if (pos > 8 && pos <= 16) {
    limited = 2
  }
  getPossibleMoves(pos, 'south', false, limited)
}

export function selectWPawnPath(pos: number) {
  let limited = 1
  if (pos > 48 && pos <= 56) {
    limited = 2
  }
  getPossibleMoves(pos, 'north', true, limited)
}

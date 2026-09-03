import { getPossibleEat, getPossibleMoves } from '../possibleMovesHandler'

export function selectPawnPath(pos: number) {
  let limited = 1
  if (pos >= 8 && pos < 16) {
    limited = 2
  }
  getPossibleMoves(pos, 'south', limited)
  getPossibleEat(pos, 'southwest')
  getPossibleEat(pos, 'southeast')
}

export function selectWPawnPath(pos: number) {
  let limited = 1
  if (pos >= 48 && pos < 56) {
    limited = 2
  }
  getPossibleMoves(pos, 'north', limited)
  getPossibleEat(pos, 'northwest')
  getPossibleEat(pos, 'northeast')
}

export function selectPawnEatingPath() {}

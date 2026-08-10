import { checkPossibleMoves } from '@/utils/checkPossibleMoves'

export function selectPawnPath(pos: number) {
  let limited = 1
  if (pos > 8 && pos <= 16) {
    limited = 2
  }
  checkPossibleMoves(pos, 'north', limited)
}

export function selectWPawnPath(pos: number) {
  let limited = 1
  if (pos > 48 && pos <= 56) {
    limited = 2
  }
}

import { getpossibleMoves } from '../possibleMovesHandler'

export function selectBishopPath(pos: number) {
  getpossibleMoves(pos, 'northeast')
  getpossibleMoves(pos, 'northwest')
  getpossibleMoves(pos, 'southeast')
  getpossibleMoves(pos, 'southwest')
}

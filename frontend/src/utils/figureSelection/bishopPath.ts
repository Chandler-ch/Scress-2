import { getPossibleMoves } from '../possibleMovesHandler'

export function selectBishopPath(pos: number) {
  getPossibleMoves(pos, 'northeast')
  getPossibleMoves(pos, 'northwest')
  getPossibleMoves(pos, 'southeast')
  getPossibleMoves(pos, 'southwest')
}

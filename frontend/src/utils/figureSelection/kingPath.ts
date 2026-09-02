import { getPossibleMoves } from '../possibleMovesHandler'

export function selectKingPath(pos: number) {
  const limited = 1
  getPossibleMoves(pos, 'north', limited)
  getPossibleMoves(pos, 'east', limited)
  getPossibleMoves(pos, 'south', limited)
  getPossibleMoves(pos, 'west', limited)
  getPossibleMoves(pos, 'northeast', limited)
  getPossibleMoves(pos, 'northwest', limited)
  getPossibleMoves(pos, 'southeast', limited)
  getPossibleMoves(pos, 'southwest', limited)
}

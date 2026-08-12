import { getpossibleMoves } from '../possibleMovesHandler'

export function selectKingPath(pos: number) {
  const limited = 1
  getpossibleMoves(pos, 'north', limited)
  getpossibleMoves(pos, 'east', limited)
  getpossibleMoves(pos, 'south', limited)
  getpossibleMoves(pos, 'west', limited)
  getpossibleMoves(pos, 'northeast', limited)
  getpossibleMoves(pos, 'northwest', limited)
  getpossibleMoves(pos, 'southeast', limited)
  getpossibleMoves(pos, 'southwest', limited)
}

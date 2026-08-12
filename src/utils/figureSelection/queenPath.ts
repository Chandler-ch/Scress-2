import { getpossibleMoves } from '../possibleMovesHandler'

export function selectQueenPath(pos: number) {
  getpossibleMoves(pos, 'north')
  getpossibleMoves(pos, 'east')
  getpossibleMoves(pos, 'south')
  getpossibleMoves(pos, 'west')
  getpossibleMoves(pos, 'northeast')
  getpossibleMoves(pos, 'northwest')
  getpossibleMoves(pos, 'southeast')
  getpossibleMoves(pos, 'southwest')
}

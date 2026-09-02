import { getPossibleMoves } from '../possibleMovesHandler'

export function selectQueenPath(pos: number) {
  getPossibleMoves(pos, 'north')
  getPossibleMoves(pos, 'east')
  getPossibleMoves(pos, 'south')
  getPossibleMoves(pos, 'west')
  getPossibleMoves(pos, 'northeast')
  getPossibleMoves(pos, 'northwest')
  getPossibleMoves(pos, 'southeast')
  getPossibleMoves(pos, 'southwest')
}

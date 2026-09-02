import { getPossibleMoves } from '../possibleMovesHandler'

export function selectRookPath(pos: number) {
  getPossibleMoves(pos, 'north')
  getPossibleMoves(pos, 'east')
  getPossibleMoves(pos, 'south')
  getPossibleMoves(pos, 'west')
}

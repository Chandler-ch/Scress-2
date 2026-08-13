import { getpossibleMoves } from '../possibleMovesHandler'

export function selectRookPath(pos: number) {
  getpossibleMoves(pos, 'north')
  getpossibleMoves(pos, 'east')
  getpossibleMoves(pos, 'south')
  getpossibleMoves(pos, 'west')
}

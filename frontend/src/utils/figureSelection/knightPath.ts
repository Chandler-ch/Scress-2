import { getPossibleMoves } from '../possibleMovesHandler'

export function selectKnightPath(pos: number) {
  const limited = 1
  getPossibleMoves(pos, 'kNorthWest', limited)
  getPossibleMoves(pos, 'kWwestNorth', limited)
  getPossibleMoves(pos, 'kWestSouth', limited)
  getPossibleMoves(pos, 'kSouthWest', limited)
  getPossibleMoves(pos, 'kSouthEast', limited)
  getPossibleMoves(pos, 'kEastSouth', limited)
  getPossibleMoves(pos, 'kEastNorth', limited)
  getPossibleMoves(pos, 'kNorthEast', limited)
}

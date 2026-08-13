import { getpossibleMoves } from '../possibleMovesHandler'

export function selectKnightPath(pos: number) {
  const limited = 1
  getpossibleMoves(pos, 'kNorthWest', limited)
  getpossibleMoves(pos, 'kWwestNorth', limited)
  getpossibleMoves(pos, 'kWestSouth', limited)
  getpossibleMoves(pos, 'kSouthWest', limited)
  getpossibleMoves(pos, 'kSouthEast', limited)
  getpossibleMoves(pos, 'kEastSouth', limited)
  getpossibleMoves(pos, 'kEastNorth', limited)
  getpossibleMoves(pos, 'kNorthEast', limited)
}

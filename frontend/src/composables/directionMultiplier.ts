import {
  eastEdge,
  kEastEdge,
  kNorthEdge,
  kSouthEdge,
  kWestEdge,
  northEdge,
  southEdge,
  westEdge,
  type Direction,
} from '@/types/directions'

export function resolveDirection(direction: Direction) {
  switch (direction) {
    case 'north':
      return { multiplier: -8, edge: northEdge }
    case 'east':
      return { multiplier: -1, edge: westEdge }
    case 'south':
      return { multiplier: 8, edge: southEdge }
    case 'west':
      return { multiplier: 1, edge: eastEdge }
    case 'northeast':
      return { multiplier: -7, edge: northEdge.concat(eastEdge) }
    case 'northwest':
      return { multiplier: -9, edge: northEdge.concat(westEdge) }
    case 'southeast':
      return { multiplier: 9, edge: southEdge.concat(eastEdge) }
    case 'southwest':
      return { multiplier: 7, edge: southEdge.concat(westEdge) }

    case 'kNorthWest':
      return { multiplier: -17, edge: kNorthEdge.concat(northEdge).concat(westEdge) }
    case 'kWwestNorth':
      return { multiplier: -10, edge: kWestEdge.concat(northEdge).concat(westEdge) }
    case 'kWestSouth':
      return { multiplier: 6, edge: kWestEdge.concat(southEdge).concat(westEdge) }
    case 'kSouthWest':
      return { multiplier: 15, edge: kSouthEdge.concat(westEdge).concat(southEdge) }
    case 'kSouthEast':
      return { multiplier: 17, edge: kSouthEdge.concat(eastEdge).concat(southEdge) }
    case 'kEastSouth':
      return { multiplier: 10, edge: kEastEdge.concat(southEdge).concat(eastEdge) }
    case 'kEastNorth':
      return { multiplier: -6, edge: kEastEdge.concat(northEdge).concat(eastEdge) }
    case 'kNorthEast':
      return { multiplier: -15, edge: kNorthEdge.concat(eastEdge).concat(northEdge) }
  }
}

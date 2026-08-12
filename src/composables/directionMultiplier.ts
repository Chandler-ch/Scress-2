import { eastEdge, northEdge, southEdge, westEdge, type Direction } from '@/types/directions'

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
  }
}

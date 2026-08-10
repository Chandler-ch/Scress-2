import { checkPossibleMoves as checkPossibleMoves } from '@/composables/moveCalculation/checkPossibleMoves'
import {
  eastEdge,
  northEdge,
  southEdge,
  westEdge,
  type DirectionMultiplier,
  type directions,
} from '@/typings/directions'

export const possibleMoves: number[] = []

export function calculatePossibleMoves(
  pos: number,
  direction: directions,
  isWhite: boolean,
  limited: number = 8,
) {
  const multiplier: DirectionMultiplier = resolveDirection(direction)
  checkPossibleMoves(pos, multiplier, isWhite, limited)
}

function resolveDirection(direction: directions) {
  switch (direction) {
    case 'north':
      return { multiplier: -8, edge: northEdge }
    case 'east':
      return { multiplier: -1, edge: eastEdge }
    case 'south':
      return { multiplier: 8, edge: southEdge }
    case 'west':
      return { multiplier: 1, edge: westEdge }
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

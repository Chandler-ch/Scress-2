import { calculateMoves } from '@/composables/moveCalculation/calculatePossibleMoves'

type directions =
  'north' | 'west' | 'south' | 'east' | 'northwest' | 'southwest' | 'northeast' | 'southeast'
const possibleMoves = []

export function checkPossibleMoves(pos: number, direction: directions, limited: number = 8) {
  calculatePossibleMoves(pos, direction, limited)
}

function calculatePossibleMoves(pos: number, direction: directions, limited: number = 8) {
  const multiplier: number = resolveDirection(direction)
  calculateMoves(pos, multiplier, limited)
}

function resolveDirection(direction: directions) {
  switch (direction) {
    case 'north':
      return -8
    case 'east':
      return -1
    case 'south':
      return 8
    case 'west':
      return 1
    case 'northeast':
      return -7
    case 'northwest':
      return -9
    case 'southeast':
      return 9
    case 'southwest':
      return 7
  }
}

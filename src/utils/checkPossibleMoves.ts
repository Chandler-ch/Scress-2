import { calculateNorthMoves } from '@/composables/moveCalculation/calculatePossibleMoves'

type directions =
  'north' | 'west' | 'south' | 'east' | 'northwest' | 'southwest' | 'northeast' | 'southeast'
const possibleMoves = []
const everyPossibleMove = []

export function checkPossibleMoves(pos: number, direction: directions, limited: number = 8) {
  calculatePossibleMoves(pos, direction, limited)
}

function calculatePossibleMoves(pos: number, direction: directions, limited: number = 8) {
  switch (direction) {
    case 'north':
      calculateNorthMoves(pos, limited)
  }
}

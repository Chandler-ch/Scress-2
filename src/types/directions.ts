export type Direction =
  'north' | 'west' | 'south' | 'east' | 'northwest' | 'southwest' | 'northeast' | 'southeast'

export type DirectionMultiplier = { multiplier: number; edge: number[] }
export const northEdge = [0, 1, 2, 3, 4, 5, 6, 7]
export const eastEdge = [7, 15, 23, 31, 39, 47, 55, 63]
export const southEdge = [56, 57, 58, 59, 60, 61, 62, 63]
export const westEdge = [0, 8, 16, 24, 32, 40, 48, 56]

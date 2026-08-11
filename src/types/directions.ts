export type Direction =
  'north' | 'west' | 'south' | 'east' | 'northwest' | 'southwest' | 'northeast' | 'southeast'

export type DirectionMultiplier = { multiplier: number; edge: number[] }
export const northEdge = [1, 2, 3, 4, 5, 6, 7, 8]
export const eastEdge = [8, 16, 24, 32, 40, 48, 56, 64]
export const southEdge = [57, 58, 59, 60, 61, 62, 63, 64]
export const westEdge = [1, 9, 17, 25, 33, 41, 49, 57]

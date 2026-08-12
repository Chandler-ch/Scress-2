export type Direction =
  | 'north'
  | 'west'
  | 'south'
  | 'east'
  | 'northwest'
  | 'southwest'
  | 'northeast'
  | 'southeast'
  | KnightDirections

type KnightDirections =
  | 'kNorthWest'
  | 'kWwestNorth'
  | 'kWestSouth'
  | 'kSouthWest'
  | 'kSouthEast'
  | 'kEastSouth'
  | 'kEastNorth'
  | 'kNorthEast'

export type DirectionMultiplier = { multiplier: number; edge: number[] }
export const northEdge = [0, 1, 2, 3, 4, 5, 6, 7]
export const eastEdge = [7, 15, 23, 31, 39, 47, 55, 63]
export const southEdge = [56, 57, 58, 59, 60, 61, 62, 63]
export const westEdge = [0, 8, 16, 24, 32, 40, 48, 56]

export const kNorthEdge = [8, 9, 10, 11, 12, 13, 14, 15]
export const kWestEdge = [1, 9, 17, 25, 33, 4, 49, 57]
export const kSouthEdge = [48, 49, 50, 51, 52, 53, 54, 55]
export const kEastEdge = [6, 14, 22, 30, 38, 46, 54, 62]

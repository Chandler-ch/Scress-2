import { beforeEach, expect, test, toStrictEqual } from 'vitest'
import { showMovement } from '../../src/utils/figureAllocation/figureAssignment'
import { possibleMoves } from '../../src/utils/checkTilesDirection'
import { resetGameState, isWhiteTurn } from '../../src/utils/saveManager'
import { resetSelection } from '../../src/utils/selectionHandling'

beforeEach(() => {
  resetGameState()
  resetSelection()
  isWhiteTurn.value = true
})

test('White Bishop is in normal position', () => {
  showMovement(35, 'Läufer-W')
  expect(possibleMoves.value).toStrictEqual([28, 21, 14, 26, 17, 8, 44, 42])
})

test('White King is in normal position', () => {
  showMovement(35, 'König-W')
  expect(possibleMoves.value).toStrictEqual([27, 36, 43, 34, 28, 26, 42, 44])
})

test('White Knight is in normal position', () => {
  showMovement(35, 'Pferd-W')
  expect(possibleMoves.value).toStrictEqual([18, 29, 45, 20, 41, 25])
})

test('White Queen is in normal position', () => {
  showMovement(35, 'Königin-W')
  expect(possibleMoves.value).toStrictEqual([
    27, 19, 11, 36, 37, 38, 39, 43, 34, 33, 32, 28, 21, 14, 26, 17, 8, 44, 42,
  ])
})

test('White Rook is in normal position', () => {
  showMovement(35, 'Turm-W')
  expect(possibleMoves.value).toStrictEqual([27, 19, 11, 36, 37, 38, 39, 43, 34, 33, 32])
})

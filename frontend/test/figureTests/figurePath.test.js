import { beforeEach, expect, test, toStrictEqual } from 'vitest'
import { selectBishopPath } from '../../src/utils/figureSelection/bishopPath'
import { selectKingPath } from '../../src/utils/figureSelection/kingPath'
import { selectKnightPath } from '../../src/utils/figureSelection/knightPath'
import { selectQueenPath } from '../../src/utils/figureSelection/queenPath'
import { selectRookPath } from '../../src/utils/figureSelection/rookPath'
import { possibleMoves } from '../../src/utils/checkTilesDirection'
import { resetGameState, isWhiteTurn } from '../../src/utils/saveManager'
import { resetSelection } from '../../src/utils/selectionHandling'

beforeEach(() => {
  resetGameState()
  resetSelection()
  isWhiteTurn.value = true
})

test('White Bishop is in normal position', () => {
  selectBishopPath(35)
  expect(possibleMoves.value).toStrictEqual([28, 21, 14, 26, 17, 8, 44, 42])
})

test('White King is in normal position', () => {
  selectKingPath(35)
  expect(possibleMoves.value).toStrictEqual([27, 34, 43, 36, 28, 26, 42, 44])
})

test('White Knight is in normal position', () => {
  selectKnightPath(35)
  expect(possibleMoves.value).toStrictEqual([18, 29, 45, 20, 41, 25])
})

test('White Queen is in normal position', () => {
  selectQueenPath(35)
  expect(possibleMoves.value).toStrictEqual([
    27, 19, 11, 34, 33, 32, 31, 43, 36, 37, 38, 39, 40, 28, 21, 14, 26, 17, 8, 44, 42,
  ])
})

test('White Rook is in normal position', () => {
  selectRookPath(35)
  expect(possibleMoves.value).toStrictEqual([27, 19, 11, 34, 33, 32, 31, 43, 36, 37, 38, 39, 40])
})

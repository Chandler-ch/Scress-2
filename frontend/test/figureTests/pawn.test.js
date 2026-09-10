import { beforeEach, expect, test, toStrictEqual } from 'vitest'
import { selectPawnPath } from '../../src/utils/figureAllocation/pawnPath'
import { possibleMoves } from '../../src/utils/checkTilesDirection'
import { resetGameState, isWhiteTurn } from '../../src/utils/saveManager'
import { resetSelection } from '../../src/utils/selectionHandling'

beforeEach(() => {
  resetGameState()
  resetSelection()
  isWhiteTurn.value = true
})

test('White Pawn is in starting position', () => {
  selectPawnPath(55)
  expect(possibleMoves.value).toStrictEqual([47, 39])
})

test('White Pawn is in normal position', () => {
  selectPawnPath(32)
  expect(possibleMoves.value).toStrictEqual([24])
})

test('White Pawn Eating', () => {
  selectPawnPath(20)
  expect(possibleMoves.value).toStrictEqual([11, 13])
})

test('Black Pawn is in starting position', () => {
  isWhiteTurn.value = false
  selectPawnPath(15)
  expect(possibleMoves.value).toStrictEqual([23, 31])
})

test('Black Pawn is in normal position', () => {
  isWhiteTurn.value = false
  selectPawnPath(32)
  expect(possibleMoves.value).toStrictEqual([40])
})

test('Black Pawn Eating', () => {
  isWhiteTurn.value = false
  selectPawnPath(45)
  expect(possibleMoves.value).toStrictEqual([54, 52])
})

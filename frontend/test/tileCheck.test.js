import { beforeEach, expect, test } from 'vitest'
import { isFree, isFigure } from '../src/composables/tileCheck'
import { resetGameState } from '../src/utils/saveManager'

beforeEach(() => {
  resetGameState()
})

test('isFree return TRUE', () => {
  expect(isFree(32)).toBe(true)
})

test('isFree returns FALSE', () => {
  expect(isFree(8)).toBe(false)
})

test('Enemy is on this field (black)', () => {
  expect(isFigure(8, 'ENEMY')).toBe(true)
})

test('Friend is on this field (black)', () => {
  expect(isFigure(63, 'FRIEND')).toBe(true)
})

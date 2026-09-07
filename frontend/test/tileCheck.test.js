import { expect, test, vitest } from 'vitest'
import { isFree, isFigure, isOnEdge } from '../src/composables/tileCheck'
import { resetGameState } from '../src/utils/saveManager'
import { getDirectionMultiplier } from '../src/composables/directionMultiplier'

test('isFree return TRUE', () => {
  resetGameState()
  expect(isFree(32)).toBe(true)
})

test('isFree returns FALSE', () => {
  resetGameState()
  expect(isFree(8)).toBe(false)
})

test('Enemy is on this field (black)', () => {
  resetGameState()
  expect(isFigure(8, 'ENEMY')).toBe(true)
})

test('Friend is on this field (black)', () => {
  resetGameState()
  expect(isFigure(63, 'FRIEND')).toBe(true)
})

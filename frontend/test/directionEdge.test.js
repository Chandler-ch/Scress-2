import { expect, test } from 'vitest'
import { isOnEdge } from '../src/composables/tileCheck'
import { resetGameState } from '../src/utils/saveManager'
import { getDirectionMultiplier } from '../src/composables/directionMultiplier'

test('isOnRightEdge', () => {
  resetGameState()
  const rightEdges = getDirectionMultiplier('east')
  expect(isOnEdge(23, rightEdges.edge)).toBe(true)
})

test('isOnDownEdge', () => {
  resetGameState()
  const southEdges = getDirectionMultiplier('south')
  expect(isOnEdge(61, southEdges.edge)).toBe(true)
})

test('isOnUpEdge', () => {
  resetGameState()
  const northEdges = getDirectionMultiplier('north')
  expect(isOnEdge(5, northEdges.edge)).toBe(true)
})

test('isOnLeftEdge', () => {
  resetGameState()
  const leftEdges = getDirectionMultiplier('west')
  expect(isOnEdge(24, leftEdges.edge)).toBe(true)
})

test('isOnNorthWestEdge', () => {
  resetGameState()
  const northWestEdges = getDirectionMultiplier('northwest')
  expect(isOnEdge(0, northWestEdges.edge)).toBe(true)
})

test('isOnSouthWestEdge', () => {
  resetGameState()
  const southWestEdges = getDirectionMultiplier('southwest')
  expect(isOnEdge(56, southWestEdges.edge)).toBe(true)
})

test('isOnSouthEastEdge', () => {
  resetGameState()
  const southEastEdges = getDirectionMultiplier('southeast')
  expect(isOnEdge(63, southEastEdges.edge)).toBe(true)
})

test('isOnNorthEastEdge', () => {
  resetGameState()
  const northEastEdges = getDirectionMultiplier('northeast')
  expect(isOnEdge(7, northEastEdges.edge)).toBe(true)
})

test('isOnKnightNorthWestEdge', () => {
  resetGameState()
  const kNorthWestEdges = getDirectionMultiplier('kNorthWest')
  expect(isOnEdge(8, kNorthWestEdges.edge)).toBe(true)
})

test('isOnKnightWestNorthEdge', () => {
  resetGameState()
  const kWestNorthEdges = getDirectionMultiplier('kWestNorth')
  expect(isOnEdge(1, kWestNorthEdges.edge)).toBe(true)
})

test('isOnKnightWestSouthEdge', () => {
  resetGameState()
  const kWestSouthEdges = getDirectionMultiplier('kWestSouth')
  expect(isOnEdge(1, kWestSouthEdges.edge)).toBe(true)
})

test('isOnKnightSouthWestEdge', () => {
  resetGameState()
  const kSouthWestEdges = getDirectionMultiplier('kSouthWest')
  expect(isOnEdge(48, kSouthWestEdges.edge)).toBe(true)
})

test('isOnKnightSouthEastEdge', () => {
  resetGameState()
  const kSouthEastEdges = getDirectionMultiplier('kSouthEast')
  expect(isOnEdge(48, kSouthEastEdges.edge)).toBe(true)
})

test('isOnKnightEastSouthEdge', () => {
  resetGameState()
  const kEastSouthEdges = getDirectionMultiplier('kEastSouth')
  expect(isOnEdge(6, kEastSouthEdges.edge)).toBe(true)
})

test('isOnKnightEastNorthEdge', () => {
  resetGameState()
  const kEastNorthEdges = getDirectionMultiplier('kEastNorth')
  expect(isOnEdge(6, kEastNorthEdges.edge)).toBe(true)
})

test('isOnKnightNorthEastEdge', () => {
  resetGameState()
  const kNorthEastEdges = getDirectionMultiplier('kNorthEast')
  expect(isOnEdge(8, kNorthEastEdges.edge)).toBe(true)
})

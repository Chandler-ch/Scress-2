import { beforeEach, expect, test } from 'vitest'
import { onSelectedFigure } from '../src/utils/selectionHandling'
import { resetGameState } from '../src/utils/saveManager'
import { possibleMoves } from '../src/utils/checkTilesDirection'

beforeEach(() => {
  resetGameState()
})

test('whole selection works', () => {
  onSelectedFigure('Königin-W', 32)
  expect(possibleMoves.value).toStrictEqual([
    24, 16, 8, 33, 34, 35, 36, 37, 38, 39, 40, 25, 18, 11, 41,
  ])
})

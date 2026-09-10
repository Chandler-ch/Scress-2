import type { ScressFigures } from '@/types/scressFigures'
import { ref, type Ref } from 'vue'
import { gameState, isWhiteTurn } from './saveManager'
import { possibleMoves } from '@/utils/checkTilesDirection'
import { showMovement } from './figureAllocation/figureAssignment'

const currentFigure: Ref<ScressFigures> = ref('')
const startPos: Ref<number> = ref(-1)

export function onSelectedFigure(figure: ScressFigures, pos: number) {
  resetSelection()
  currentFigure.value = figure
  startPos.value = pos
  showMovement(pos, currentFigure.value)
}

export function onMovement(pos: number) {
  gameState.value[pos] = currentFigure.value
  gameState.value[startPos.value] = ''
  resetSelection()
  isWhiteTurn.value = !isWhiteTurn.value
}

export function resetSelection() {
  currentFigure.value = ''
  startPos.value = -1
  possibleMoves.value.length = 0
}

import { selectPawnPath, selectWPawnPath } from '@/utils/figureSelection/pawnPath'
import type { ScressFigures } from '@/types/scressFigures'
import { possibleMoves } from './possibleMovesHandler'
import { ref, type Ref } from 'vue'
import { gameState, isWhiteTurn } from './saveManager'
import { selectRookPath } from './figureSelection/rookPath'
import { selectBishopPath } from './figureSelection/bishopPath'

const currentFigure: Ref<ScressFigures> = ref('')
const startPos: Ref<number> = ref(-1)

export function onSelectedFigure(figure: ScressFigures, pos: number) {
  reset()
  currentFigure.value = figure
  startPos.value = pos
  showMovement(pos)
}

export function onMovement(pos: number) {
  gameState.value[pos] = currentFigure.value
  gameState.value[startPos.value] = ''
  reset()
  isWhiteTurn.value = !isWhiteTurn.value
}

function showMovement(pos: number) {
  switch (currentFigure.value) {
    case 'Bauer':
      selectPawnPath(pos)
      break
    case 'Bauer-W':
      selectWPawnPath(pos)
      break
    case 'König':
    case 'König-W':
      console.log('not implemented yet König')
      break
    case 'Königin':
    case 'Königin-W':
      console.log('not implemented yet Königin')
      break
    case 'Läufer':
    case 'Läufer-W':
      selectBishopPath(pos)
      break
    case 'Pferd':
    case 'Pferd-W':
      console.log('not implemented yet Pferd')
      break
    case 'Turm':
    case 'Turm-W':
      selectRookPath(pos)
      break
  }
}

function reset() {
  currentFigure.value = ''
  startPos.value = -1
  possibleMoves.value.length = 0
}

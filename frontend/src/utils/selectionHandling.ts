import { selectPawnPath } from '@/utils/figureSelection/pawnPath'
import type { ScressFigures } from '@/types/scressFigures'
import { ref, type Ref } from 'vue'
import { gameState, isWhiteTurn } from './saveManager'
import { selectRookPath } from './figureSelection/rookPath'
import { selectBishopPath } from './figureSelection/bishopPath'
import { selectKingPath } from './figureSelection/kingPath'
import { selectQueenPath } from './figureSelection/queenPath'
import { selectKnightPath } from './figureSelection/knightPath'
import { possibleMoves } from '@/utils/checkTilesDirection'

const currentFigure: Ref<ScressFigures> = ref('')
const startPos: Ref<number> = ref(-1)

export function onSelectedFigure(figure: ScressFigures, pos: number) {
  resetSelection()
  currentFigure.value = figure
  startPos.value = pos
  showMovement(pos)
}

export function onMovement(pos: number) {
  gameState.value[pos] = currentFigure.value
  gameState.value[startPos.value] = ''
  resetSelection()
  isWhiteTurn.value = !isWhiteTurn.value
}

function showMovement(pos: number) {
  switch (currentFigure.value) {
    case 'Bauer':
    case 'Bauer-W':
      selectPawnPath(pos)
      break
    case 'König':
    case 'König-W':
      selectKingPath(pos)
      break
    case 'Königin':
    case 'Königin-W':
      selectQueenPath(pos)
      break
    case 'Läufer':
    case 'Läufer-W':
      selectBishopPath(pos)
      break
    case 'Pferd':
    case 'Pferd-W':
      selectKnightPath(pos)
      break
    case 'Turm':
    case 'Turm-W':
      selectRookPath(pos)
      break
  }
}

export function resetSelection() {
  currentFigure.value = ''
  startPos.value = -1
  possibleMoves.value.length = 0
}

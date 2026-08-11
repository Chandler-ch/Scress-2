import { selectPawnPath, selectWPawnPath } from '@/utils/figureSelection/pawnPath'
import type { ScressFigures } from '@/types/scressFigures'
import { possibleMoves } from './possibleMovesHandler'
import { ref, type Ref } from 'vue'
import { gameState, loadGame } from './saveManager'

const currentFigure: Ref<ScressFigures> = ref('')

export function onSelectedFigure(figure: ScressFigures, pos: number) {
  possibleMoves.value.length = 0
  currentFigure.value = figure
  showMovement(pos)
}

export function onMovement(pos: number) {
  gameState[pos] = currentFigure.value
  loadGame()
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
      console.log('not implemented yet')
      break
    case 'Königin':
    case 'Königin-W':
      console.log('not implemented yet')
      break
    case 'Läufer':
    case 'Läufer-W':
      console.log('not implemented yet')
      break
    case 'Pferd':
    case 'Pferd-W':
      console.log('not implemented yet')
      break
    case 'Turm':
    case 'Turm-W':
      console.log('not implemented yet')
      break
  }
}

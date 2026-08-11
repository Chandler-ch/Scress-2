import { selectPawnPath, selectWPawnPath } from '@/utils/figureSelection/pawnPath'
import type { ScressFigures } from '@/types/scressFigures'
import { possibleMoves } from './possibleMovesHandler'

export function onSelectedFigure(figure: ScressFigures, pos: number) {
  possibleMoves.length = 0
  showMovement(figure, pos)
}

function showMovement(figure: ScressFigures, pos: number) {
  switch (figure) {
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

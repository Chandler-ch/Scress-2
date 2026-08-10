import { selectPawnPath, selectWPawnPath } from '@/composables/tileSelections/pawnPath'
import type { ScressFigures } from '@/enums/scressFigures'

export function onSelectedFigure(figure: ScressFigures, pos: number) {
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

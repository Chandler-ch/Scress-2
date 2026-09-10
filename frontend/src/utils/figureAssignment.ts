import type { Direction } from '@/types/directions'
import type { ScressFigures } from '@/types/scressFigures'
import { selectFigurePath } from './figureSelection/figurePath'
import { ref, type Ref } from 'vue'
import { selectPawnPath } from './figureSelection/pawnPath'
import { selectQueenPath } from './figureSelection/queenPath'

const directions: Ref<Direction[]> = ref([])
const limited: Ref<number> = ref(8)

export function showMovement(pos: number, currentFigure: ScressFigures) {
  resetValues()

  switch (currentFigure) {
    case 'Bauer':
    case 'Bauer-W':
      selectPawnPath(pos)
      break
    case 'König':
    case 'König-W':
      directions.value = [
        'north',
        'east',
        'south',
        'west',
        'northeast',
        'northwest',
        'southwest',
        'southeast',
      ]
      limited.value = 1
      break
    case 'Königin':
    case 'Königin-W':
      selectQueenPath(pos)
      break
    case 'Läufer':
    case 'Läufer-W':
      directions.value = ['northeast', 'northwest', 'southeast', 'southwest']
      break
    case 'Pferd':
    case 'Pferd-W':
      limited.value = 1
      directions.value = [
        'kNorthWest',
        'kEastNorth',
        'kEastSouth',
        'kNorthEast',
        'kSouthEast',
        'kSouthWest',
        'kWestSouth',
        'kWestNorth',
      ]
      break
    case 'Turm':
    case 'Turm-W':
      directions.value = ['north', 'east', 'south', 'west']
      break
  }
  selectFigurePath(pos, directions.value, limited.value)
}

function resetValues() {
  limited.value = 8
  directions.value = []
  // hunger
}

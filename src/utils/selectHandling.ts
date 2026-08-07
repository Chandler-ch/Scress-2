import { selectWPawnPath } from '@/composables/pawnPath'

export function onSelectedFigure(figure: String, currentPosition: number) {
  showMovement(figure, currentPosition)
}

function showMovement(figure: String, currentPosition: number) {
  // figure = "Bauer-W"
  // currentPosition = 50
  switch (figure) {
    case 'Bauer':
    // 2 nach unten
    case 'Bauer-W':
      // 2 nach oben
      selectWPawnPath(currentPosition)
    case 'Turm':
    // passt auch für Turm-W
    // gerade nach in alle 4 Himmelsrichtungen
    case 'Pferd':
    //kompliziert
    case 'Königin':
    // basically alles ausser Pferd
    case 'Läufer':
    // Diagonal überallhin
    case 'König':
    // überall 1
  }
}

import type { ScressFigures } from '@/types/scressFigures'
import { ref, type Ref } from 'vue'

export function saveStorage() {
  // save scressFigures String into local storage on web browser
  // find out, when page refreshes to load from local storage
}

export function loadGame() {
  // aus dem local storage laden & aktuellen Spielstand überschreiben -> was wenn aber von vorherigem Spiel oder so? --> LocalStorage-Lösch-Funktion bei Spielende / Abbruch
  // wenn kein Gamestate vorhanden ist, dann den aktuellen state (start-game-state) nehmen und reinladen. Am Besten diese Funktion immer am Anfang aufrufen.
  // console.log('loaded')
  const newState = gameState.value

  // Logik einsetzen, dass das game geladen wird
}

export const isWhiteTurn: Ref<boolean> = ref(true)

export const gameState: Ref<ScressFigures[]> = ref([
  'Turm',
  'Pferd',
  'Läufer',
  'Königin',
  'König',
  'Läufer',
  'Pferd',
  'Turm',
  'Bauer',
  'Bauer',
  'Bauer',
  'Bauer',
  'Bauer',
  'Bauer',
  'Bauer',
  'Bauer',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Turm-W',
  'Pferd-W',
  'Läufer-W',
  'Königin-W',
  'König-W',
  'Läufer-W',
  'Pferd-W',
  'Turm-W',
])

import { emitter } from '@/utils/eventBus'

interface Figure {
  figureName: String
  currentPosition: number
}

export function selectWPawnPath(currentPosition: number) {
  emitter.emit((currentPosition - 8).toString())
}

function processTileReply(data: Figure) {
  return data
}

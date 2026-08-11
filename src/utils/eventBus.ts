import mitt from 'mitt'

export const emitter = mitt()

export function markTileSignal(tile: number) {
  emitter.emit(tile.toString())
}

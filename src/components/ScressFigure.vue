<script setup lang="ts">
import type { ScressFigures } from '@/types/scressFigures'
import { isWhiteTurn } from '@/utils/saveManager'
import { onSelectedFigure } from '@/utils/selectionHandling'
import { computed, type PropType } from 'vue'

const props = defineProps({
  figureName: {
    type: String as PropType<ScressFigures>,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
})
const isMyTurn = computed(() => {
  const figureIsWhite = props.figureName.includes('-W')
  return isWhiteTurn.value === figureIsWhite
})
</script>
<template>
  <img
    v-on:click="isMyTurn ? onSelectedFigure(figureName, position) : ''"
    class="figure"
    :src="`/images/${props.figureName}.png`"
  />
</template>
<style scoped>
.figure {
  width: 100%;
  height: 100%;
}
</style>

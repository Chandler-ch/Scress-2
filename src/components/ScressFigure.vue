<script setup lang="ts">
import type { ScressFigures } from '@/types/scressFigures'
import { onSelectedFigure } from '@/utils/selectHandling'
import type { PropType } from 'vue'

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
</script>
<template>
  <img
    v-on:click="onSelectedFigure(figureName, position)"
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

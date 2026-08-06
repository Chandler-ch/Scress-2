<script setup lang="ts">
import ScressFigure from './ScressFigure.vue'

const props = defineProps({
  figureName: {
    type: String,
  },
})

const tileSize = import.meta.env.VITE_TILE_SIZE + 'px'
</script>

<template>
  <div class="tile">
    <ScressFigure v-if="props.figureName" :figureName="props.figureName" />
  </div>
</template>

<style scoped>
.tile {
  width: v-bind(tileSize);
  height: v-bind(tileSize);
}
</style>

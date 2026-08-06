<script setup lang="ts">
import ScressFigure from './ScressFigure.vue'

const tileSize = import.meta.env.VITE_TILE_SIZE + 'px'
</script>

<template>
  <div class="tile">
    <ScressFigure figureName="König" />
  </div>
</template>

<style scoped>
.tile {
  width: v-bind(tileSize);
  height: v-bind(tileSize);
}
</style>

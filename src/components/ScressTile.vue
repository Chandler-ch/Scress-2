<script setup lang="ts">
const tileSize = import.meta.env.VITE_TILE_SIZE + 'px'
</script>

<template>
  <div class="tile">
    <slot />
  </div>
</template>

<style scoped>
.tile {
  width: v-bind(tileSize);
  height: v-bind(tileSize);
}
</style>

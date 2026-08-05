<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'white',
  },
})
const tileSize = import.meta.env.VITE_TILE_SIZE + 'px'
</script>

<template>
  <div :style="{ backgroundColor: props.color }" class="tile"></div>
</template>

<style scoped>
.tile {
  width: v-bind(tileSize);
  height: v-bind(tileSize);
}
</style>

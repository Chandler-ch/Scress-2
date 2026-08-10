<script setup lang="ts">
import { gameState } from '@/utils/saveManager.ts'
import ScressFigure from './ScressFigure.vue'
import ScressTile from './ScressTile.vue'
</script>

<template>
  <div class="container">
    <ScressTile
      class="tile"
      :class="
        Math.floor((index - 1) / 8) % 2
          ? index % 2
            ? 'bright'
            : 'dark'
          : index % 2
            ? 'dark'
            : 'bright'
      "
      v-for="index in 64"
      :key="index"
    >
      <ScressFigure
        v-if="gameState[index - 1]"
        :figureName="gameState[index - 1]"
        :position="index"
    /></ScressTile>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;

  border-color: pink;
  border-width: 5px;
  border-style: solid;
}

.bright {
  background-color: var(--bright-tile);
}
.dark {
  background-color: var(--dark-tile);
}
</style>

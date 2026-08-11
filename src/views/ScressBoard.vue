<script setup lang="ts">
import ScressFigure from '@/components/ScressFigure.vue'
import ScressTile from '@/components/ScressTile.vue'
import { gameState } from '@/utils/saveManager.ts'
</script>

<template>
  <div class="container">
    <ScressTile :position="index - 1" v-for="index in 64" :key="index">
      <ScressFigure
        v-if="gameState[index - 1]"
        :figureName="gameState[index - 1]"
        :position="index - 1"
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
</style>

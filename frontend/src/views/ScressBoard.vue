<script setup lang="ts">
import ScressFigure from '@/components/ScressFigure.vue'
import ScressTile from '@/components/ScressTile.vue'
import { gameState } from '@/utils/saveManager.ts'
</script>

<template>
  <div class="container">
    <ScressTile :position="index" v-for="(figureName, index) in gameState" :key="index">
      <ScressFigure v-if="figureName" :figureName="figureName" :position="index"
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

<script setup lang="ts">
import { onMounted } from 'vue'
import { loadGame } from './utils/saveManager.ts'
import ScressBoard from './views/ScressBoard.vue'

onMounted(() => loadGame())
</script>

<template>
  <header>
    <div class="wrapper">
      <ScressBoard />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

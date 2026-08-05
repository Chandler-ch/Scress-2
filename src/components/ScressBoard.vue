<script setup lang="ts">
import ScressTile from './ScressTile.vue'
</script>

<template>
  <ScressTile class="bright" />
</template>

<style scoped>
.bright {
  background-color: var(--bright-tile);
}
.dark {
  background-color: var(--dark-tile);
}
</style>

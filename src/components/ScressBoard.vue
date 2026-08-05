<script setup lang="ts">
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
    />
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

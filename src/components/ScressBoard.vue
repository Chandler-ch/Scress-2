<script setup lang="ts">
import ScressTile from './ScressTile.vue'

const figureArray = [
  'Turm',
  'Pferd',
  'Läufer',
  'Königin',
  'König',
  'Läufer',
  'Pferd',
  'Turm',
  'Bauer',
  'Bauer',
  'Bauer',
  'Bauer',
  'Bauer',
  'Bauer',
  'Bauer',
  'Bauer',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Bauer-W',
  'Turm-W',
  'Pferd-W',
  'Läufer-W',
  'Königin-W',
  'König-W',
  'Läufer-W',
  'Pferd-W',
  'Turm-W',
]

const blackArray = ['Turm', 'Pferd', 'Läufer', 'Königin', 'König', 'Bauer']
const whiteArray = ['Turm-W', 'Pferd-W', 'Läufer-W', 'Königin-W', 'König-W', 'Bauer-W']
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
      :figureName="figureArray[index - 1]"
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

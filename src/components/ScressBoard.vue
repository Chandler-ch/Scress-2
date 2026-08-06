<script setup lang="ts">
import ScressFigure from './ScressFigure.vue'
import ScressTile from './ScressTile.vue'

const startFigures = [
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
      <ScressFigure v-if="startFigures[index - 1] !== ''" :figureName="startFigures[index - 1]"
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

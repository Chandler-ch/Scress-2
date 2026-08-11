<script setup lang="ts">
import { possibleMoves } from '@/utils/possibleMovesHandler'
import { ref, watch } from 'vue'

const tileSize = import.meta.env.VITE_TILE_SIZE + 'px'

const props = defineProps({
  position: {
    type: Number,
    required: true,
  },
})
const marked = ref(false)

watch(possibleMoves.value, () => {
  possibleMoves.value.includes(props.position) ? getMarked() : (marked.value = false)
})

function getMarked() {
  console.log('hey I got marked! ' + props.position)
  marked.value = true
}
</script>

<template>
  <div
    class="tile"
    :class="
      marked
        ? 'marked'
        : Math.floor((position - 1) / 8) % 2
          ? position % 2
            ? 'bright'
            : 'dark'
          : position % 2
            ? 'dark'
            : 'bright'
    "
  >
    {{ marked }}
    <slot />
  </div>
</template>

<style scoped>
.tile {
  width: v-bind(tileSize);
  height: v-bind(tileSize);
}

.bright {
  background-color: var(--bright-tile);
}
.dark {
  background-color: var(--dark-tile);
}

.marked {
  background-color: coral;
}
</style>

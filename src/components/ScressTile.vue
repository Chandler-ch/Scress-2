<script setup lang="ts">
import { possibleMoves } from '@/utils/possibleMovesHandler'
import { computed, ref, watch } from 'vue'

const tileSize = import.meta.env.VITE_TILE_SIZE + 'px'

const props = defineProps({
  position: {
    type: Number,
    required: true,
  },
})
const marked = ref(false)

const tileBrightness =
  Math.floor(props.position / 8) % 2
    ? props.position % 2
      ? 'dark'
      : 'bright'
    : props.position % 2
      ? 'bright'
      : 'dark'

const tileColor = computed(() => {
  return marked.value ? 'marked-' + tileBrightness : tileBrightness
})

watch(possibleMoves.value, () => {
  marked.value = possibleMoves.value.includes(props.position)
})
</script>

<template>
  <div class="tile" :class="tileColor" v-on:click="marked ? console.log('moving') : ''">
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

.marked-bright {
  background-color: var(--marked-bright);
}
.marked-dark {
  background-color: var(--marked-dark);
}
</style>

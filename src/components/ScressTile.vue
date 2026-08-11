<script setup lang="ts">
import { emitter } from '@/utils/eventBus'
import { onMounted, ref } from 'vue'

const tileSize = import.meta.env.VITE_TILE_SIZE + 'px'

const props = defineProps({
  position: {
    type: Number,
    required: true,
  },
})

const marked = ref(false)
onMounted(() => emitter.on(props.position.toString(), getMarked))

function getMarked() {
  console.log('hey I got marked! ' + props.position)
  marked.value = true
}
</script>

<template>
  <div class="tile" :class="marked ? 'marked' : ''">
    <slot />
  </div>
</template>

<style scoped>
.tile {
  width: v-bind(tileSize);
  height: v-bind(tileSize);
}

.marked {
  background-color: coral;
}
</style>

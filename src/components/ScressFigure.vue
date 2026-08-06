<script setup lang="ts">
import { onSelectedFigure } from '@/utils/selectHandling'

const props = defineProps({
  figureName: {
    type: String,
  },
  position: {
    type: Number,
  },
})
</script>
<template>
  <img v-on:click="onSelectedFigure" class="figure" :src="`/images/${props.figureName}.png`" />
</template>
<style scoped>
.figure {
  width: 100%;
  height: 100%;
}
</style>

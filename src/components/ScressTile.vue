<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'var(--dark-tile)',
  },
})
</script>

<template>
  <div :style="{ backgroundColor: props.color }" class="tile"></div>
</template>

<style scoped>
.tile {
  width: 75px;
  height: 75px;
}
</style>

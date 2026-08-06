<script setup lang="ts">
const props = defineProps({
  figureName: {
    type: String,
  },
})
</script>
<template>
  <img class="figure" :src="`/images/${props.figureName}.png`" />
</template>
<style scoped>
.figure {
  width: 100%;
  height: 100%;
}
</style>

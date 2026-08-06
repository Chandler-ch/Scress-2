<script setup lang="ts">
const props = defineProps({
  figureName: {
    type: String,
  },
})
console.log(`../assets/${props.figureName}.png`)
</script>
<template>
  <img class="figure" src="../assets/König.png" />
</template>
<style scoped>
.figure {
  width: 100%;
  height: 100%;
}
</style>

<script setup lang="ts">
import useFilter from '~/composables/filter'

const props = defineProps<{ name: string }>()

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
  <img
    :src="getImageUrl(`class_icon_${props.name}.png`)"
    :alt="`logo-${props.name}`"
    class="inline-block h-7 pr-1"
  >
</template>

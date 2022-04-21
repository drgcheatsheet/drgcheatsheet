<script setup lang="ts">
import useFilter from '~/composables/filter'

const props = defineProps<{ name: string }>()
const { filter } = useFilter()

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
  <span :class="filter[props.name].value ? `text-yellow-300 drg-${props.name}` : `drg-${props.name}`">
    <img
      :src="getImageUrl(`class_icon_${props.name}.png`)"
      :alt="`logo-${props.name}`"
      class="inline h-6 pr-1"
    >
    <slot />
  </span>
</template>

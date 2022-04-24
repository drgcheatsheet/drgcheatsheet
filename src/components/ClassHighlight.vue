<script setup lang="ts">
import useFilter from '~/composables/filter'

const props = defineProps<{ name: string }>()
const { filter } = useFilter()

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
  <span :class="`flex group relative drg-${props.name}`">
    <span
      v-show="filter[props.name].value"
      class="group-hover:animate-bounce animate-duration-1s animate-count-1 absolute text-white right--8 top-1 h-5 w-5 i-carbon-information-square border"
    />
    <span>
      <slot />
    </span>
  </span>
</template>

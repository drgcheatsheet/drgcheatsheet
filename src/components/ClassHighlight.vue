<script setup lang="ts">
import useFilter from '~/composables/filter'

const props = defineProps<{ name: string }>()
const { filter } = useFilter()

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
  <span :class="`flex relative drg-${props.name}`">
    <span
      v-if="filter[props.name].value"
      class="animate-bounce animate-duration-4s absolute text-white right--8 top-2 h-5 w-5 i-carbon-information-square border"
    />
    <span>
      <slot />
    </span>
  </span>
</template>

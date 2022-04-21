<script setup lang="ts">
import useFilter from '~/composables/filter'
const characters = ['driller', 'engineer', 'gunner', 'scout']
const { filter, toggleClass } = useFilter()

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
  <div>
    <div class="text-center text-xl">
      Dwarf highlight
    </div>
    <div class="flex gap-4 justify-center mt-4 mb-6">
      <div v-for="character in characters" :key="character" class="relative h-20 w-20">
        <img
          :src="getImageUrl(`icon_character_${character}.png`)"
          :alt="character.toLowerCase()"
          class="absolute z-10 w-20 cursor-pointer drg-filter-picture"
          :class="!filter[character.toLowerCase()].value && 'grayscale'"
          @click="toggleClass(character.toLowerCase())"
        >
        <div
          class="absolute top--1 left--1 w-22 h-22 drg-filter-picture"
          :class="filter[character.toLowerCase()].value ? 'bg-[#ff9c00]' : 'bg-gray-300'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.drg-filter-picture {
  @apply [clip-path:polygon(0%25%,50%0%,100%25%,100%75%,50%100%,0%75%)] [-webkit-clip-path:polygon(0%25%,50%0%,100%25%,100%75%,50%100%,0%75%)];
}
</style>

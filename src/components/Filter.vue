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
    <div class="text-center text-xl tracking-">
      Dwarf highlight
      (<span class="inline-block w-5 align-middle i-carbon-information-square" />)
    </div>
    <div class="flex gap-4 sm:gap-8 justify-center mt-4 mb-6 mx-6">
      <div v-for="character in characters" :key="character" class="relative h-10 w-10 xs:(h-14 w-14) sm:(h-18 w-18)">
        <img
          :src="getImageUrl(`icon_character_${character}.png`)"
          :alt="character.toLowerCase()"
          class="absolute z-10 w-10 xs:w-14 sm:w-18 cursor-pointer drg-filter-picture"
          :class="!filter[character.toLowerCase()].value && 'grayscale'"
          @click="toggleClass(character.toLowerCase())"
        >
        <div
          class="absolute top--1 left--1 w-12 h-12 xs:(w-16 h-16) sm:(h-20 w-20) drg-filter-picture"
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

<script setup lang="ts">
const [open, toggle] = useToggle()
</script>

<template>
  <div class="flex relative">
    <!--     <div
      v-if="!open"
      class="pr-8 line-clamp-1"
      @click="toggle()"
    >
      <slot />
    </div> -->
    <div
      v-if="open"
      class="pr-8"
    >
      <slot />
    </div>
    <div
      v-if="!open"
      class="drg-chevron i-akar-icons-chevron-down"
      @click="toggle()"
    />
    <div
      v-if="open"
      class="drg-chevron i-akar-icons-chevron-up"
      @click="toggle()"
    />
  </div>
</template>

<style scoped>
.drg-chevron {
  @apply h-5 w-5 text-[#ffed00] absolute right-0 top--7 cursor-pointer;
}
</style>

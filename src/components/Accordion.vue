<script setup lang="ts">
import useFilter from '~/composables/filter'
const { filter } = useFilter()
const [open, toggle] = useToggle()
const content = ref()

watch(filter.driller, (newVal, oldVal) => { containsClass('drg-driller') && (open.value = true) })
watch(filter.engineer, (newVal, oldVal) => { containsClass('drg-engineer') && (open.value = true) })
watch(filter.gunner, (newVal, oldVal) => { containsClass('drg-gunner') && (open.value = true) })
watch(filter.scout, (newVal, oldVal) => { containsClass('drg-scout') && (open.value = true) })

function containsClass(className) {
  return content.value.querySelectorAll(`span.${className}`).length
}
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
      v-show="open"
      ref="content"
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

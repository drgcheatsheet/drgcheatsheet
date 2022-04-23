<script setup lang="ts">
import useFilter from '~/composables/filter'
const { filter } = useFilter()
const [open, toggle] = useToggle()
const content = ref()
defineExpose({
  toggle,
})

watch(filter.driller, () => { containsClass('drg-driller') && (open.value = true) })
watch(filter.engineer, () => { containsClass('drg-engineer') && (open.value = true) })
watch(filter.gunner, () => { containsClass('drg-gunner') && (open.value = true) })
watch(filter.scout, () => { containsClass('drg-scout') && (open.value = true) })

function containsClass(className: string) {
  return content.value.querySelectorAll(`span.${className}`).length
}
</script>

<template>
  <div class="relative">
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
      class="drg-chevron-wrapper"
      @click="toggle()"
    >
      <span class="drg-chevron i-akar-icons-chevron-down" />
    </div>
    <div
      v-if="open"
      class="drg-chevron-wrapper"
      @click="toggle()"
    >
      <span class="drg-chevron i-akar-icons-chevron-up" />
    </div>
  </div>
</template>

<style scoped>
.drg-chevron {
  @apply h-full w-5 absolute right-0;
}

.drg-chevron-wrapper {
  @apply h-6 w-full text-[#ffed00] absolute top--7 cursor-pointer;
}
</style>

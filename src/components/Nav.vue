<script setup lang="ts">
const [navOpen, toggle] = useToggle()
const entries = ref()
const leaving = ref(false)
onMounted(() => {
  refreshToc()
})
function refreshToc() {
  entries.value = document.querySelectorAll('h2,h3')
}
function scroll(element: any) {
  const targetElement = document.getElementById(element.id)
  console.log(targetElement)
  const position: number | undefined = targetElement?.offsetParent ? targetElement.offsetParent.offsetTop + targetElement.offsetTop : targetElement?.offsetTop
  if (position) {
    window.scrollTo({
      top: position - 8,
      left: 0,
      behavior: 'smooth',
    })
    toggle()
  }
}
</script>

<template>
  <div
    v-if="!navOpen && !leaving"
    class="w-8 h-12 bg-black fixed right-0 top-26.5 border-2 border-r border-[#ffed00] top--0.5 bg-opacity-85 cursor-pointer"
    @click="toggle(); refreshToc()"
  >
    <div class="my-4 mx-2 text-[#ffed00] i-akar-icons-chevron-left" />
  </div>
  <transition
    enter-active-class="transition ease-in-out duration-300 transform"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition duration-300 transform"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
    @before-leave="leaving = true"
    @after-leave="leaving = false"
  >
    <div
      v-if="navOpen"
      class="text-left fixed right-0 bg-black flex z-50 border-2 border-r-0 border-[#ffed00] bg-opacity-85"
    >
      <div
        class="w-8 h-12 bg-black absolute left--8.5 border-2 border-r-0 border-[#ffed00] top--0.5 bg-opacity-85 cursor-pointer"
        @click="toggle()"
      >
        <div class="my-4 mx-2 text-[#ffed00] i-akar-icons-chevron-right" />
      </div>
      <div
        class="px-4 py-3 overflow-y-scroll max-h-100 sm:max-h-120 scrollbar-thin-all scrollbar-bg-track-black scrollbar-bg-thumb-[#ffed00]"
      >
        <div
          v-for="entry in entries"
          :key="entry.id"
          :class="entry.tagName === 'H3' ? 'pl-4' : 'pl-0 text-xl'"
          class="cursor-pointer"
          @click="scroll(entry)"
        >
          {{ entry.textContent }}
        </div>
      </div>
    </div>
  </transition>
</template>

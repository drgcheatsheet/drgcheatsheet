<template>
  <div class="px-4 sm:px-16 md:px-16 bg-gradient-to-t from-[#301e07] to-[#140f08] pb-6">
    <div class="max-w-full prose mx-auto break-words text-justify space-y-4 select-none">
      <Filter />
      <Introduction class="drg-block" />
      <General class="drg-block" />
      <Events class="drg-block" />
    </div>
  </div>
</template>

<style scoped>
.drg-block {
  @apply bg-black rounded-md px-6 py-4 bg-opacity-40;
}
</style>

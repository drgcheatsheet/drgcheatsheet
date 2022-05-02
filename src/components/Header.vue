<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div
    class="inline-flex justify-center mt-6 w-full cursor-pointer"
    @click="router.push('/')"
  >
    <img
      src="../assets/DRG_Logo.png"
      alt="DRG logo"
      class="w-38"
    >
    <p class="my-auto text-3xl font-bold">
      .guide
    </p>
  </div>
</template>

<script setup lang="ts">
const throttledSetVh = useThrottleFn(() => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}, 100)
throttledSetVh()
</script>

<template>
  <main class="h-screen w-full text-center h-100vh h-[calc(var(--vh,1vh)*100)]">
    <Header />
    <Nav />
    <router-view class="text-gray-50" />
    <Footer />
  </main>
</template>

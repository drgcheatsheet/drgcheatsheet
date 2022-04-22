<script setup lang="ts">
import Events from '../content/events.md'
import Introduction from '../content/introduction.md'
import General from '../content/general.md'
import Communication from '../content/communication.md'
import Promotions from '../content/promotions.md'
import Classes from '../content/classes.md'
import Modes from '../content/modes.md'
import Hosting from '../content/hosting.md'
import Mods from '../content/mods.md'
import Links from '../content/links.md'
</script>

<template>
  <div class="px-4 sm:px-16 md:px-16 bg-gradient-to-t from-[#301e07] to-[#140f08] pb-6">
    <div class="max-w-full prose mx-auto break-words text-justify space-y-4 select-none">
      <Filter />
      <Introduction class="drg-block" />
      <General class="drg-block" />
      <Events class="drg-block" />
      <Communication class="drg-block" />
      <Promotions class="drg-block" />
      <Classes class="drg-block" />
      <Modes class="drg-block" />
      <Hosting class="drg-block" />
      <Mods class="drg-block" />
      <Links class="drg-block" />
    </div>
  </div>
</template>

<style scoped>
.drg-block {
  @apply bg-black rounded-md px-6 py-4 bg-opacity-40;
}
</style>

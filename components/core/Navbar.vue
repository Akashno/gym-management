<script setup>
const sidebar = ref([
  {
    text: 'Home',
    link: '/',
  },
])
</script>

<template>
  <div class="px-4 lg:px-24 h-[10vh] flex items-center border-[1px] border-black">
    <NuxtLink to="/" class="text-3xl relative">
      The D.
    </NuxtLink>
  </div>
</template>

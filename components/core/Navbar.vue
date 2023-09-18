<script setup>
const sidebar = ref([
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Interlocks',
    link: '/interlocks',
  },
  {
    text: 'Doors',
    link: '/doors',
  },
  {
    text: 'Gardening',
    link: '/gardening',
  },
])
</script>

<template>
  <div class="py-4 px-4 justify-between lg:justify-start lg:px-24 bg-black w-full flex gap-x-16  items-center">
    <img src="/logo.png" alt="" class="w-40">
    <div class=" hidden md:flex gap-x-12 items-center h-fit text-sm font-medium ">
      <NuxtLink v-for="(item, index) in sidebar" :key="index" :to="item.link" class="text-white">
        {{ item.text }}
      </NuxtLink>
    </div>
  </div>
</template>

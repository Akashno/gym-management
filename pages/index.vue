<script setup>
definePageMeta({
  layout: 'default',
})
const { data } = await useFetch('/api/users')
</script>

<template>
  <div>hey</div>
</template>

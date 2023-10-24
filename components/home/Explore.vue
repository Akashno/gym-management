<script setup>
const { products } = useInterlockStore()
const selectedCategory = ref('all')
const options = ref([
  { title: 'All', value: 'all' },
  // { title: 'Table', value: 'table' },
  // { title: 'Sofa', value: 'sofa' },
  // { title: 'Bed', value: 'bed' },
])
</script>

<template>
  <div class="py-10">
    <div class="flex justify-center mb-10">
      <ButtonGroup v-model="selectedCategory" :options="options" />
    </div>
    <div class="bg-white relative mx-auto  z-50 w-full justify-items-center   grid sm:grid-cols-2 xl:grid-cols-4    gap-8 px-10 sm:px-8 md:px-10 xl:px-28">
      <CardProduct v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </div>
</template>

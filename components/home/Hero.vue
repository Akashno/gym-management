<script setup>
const { products } = useInterlockStore()
const sort = ['Price', 'Popularity', 'New Arrivals', 'Alphebetically']
const selected = ref(sort[0])
</script>

<template>
  <div class="bg-white-light h-[90vh]  container">
    <div class="grid grid-cols-5   ">
      <div class="col-span-1 pt-20 space-y-4 mt-4 pe-4">
        <CoreCategory />
      </div>
      <div class="col-span-4">
        <div class="flex justify-between items-center">
          <div class="space-y-1">
            <p class="text-2xl font-bold">
              decor
            </p>
            <p class="text-sm font-medium ">
              124 results
            </p>
          </div>

          <USelectMenu v-model="selected" :options="sort" class="cursor-pointer max-w-[200px] w-full" />
        </div>

        <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-x-8 gap-y-4 mt-10 w-full">
          <div v-for="(product, index) in products" :key="index">
            <NuxtLink to="/product">
              <CardProduct :product="product" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

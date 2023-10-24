<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="group bg-white-light  cursor-pointer  mb-4 w-full  rounded-2xl">
    <img :src="product.img" alt="" class="rounded-2xl object-cover ">
    <div class="mt-4 flex justify-between w-full">
      <div>
        <p class="font-medium text-md">
          {{ product.title }}
        </p>
        <p class="font-medium text-sm text-black opacity-50">
          {{ product.description }}
        </p>
      </div>
      <p class="text-md font-bold">
        #{{ product.model }}
      </p>
    </div>
  </div>
</template>

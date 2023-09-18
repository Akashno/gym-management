<script setup>
const props = defineProps({
  img: String,
  text: String,
  description: String,
})
</script>

<template>
  <div class="bg-white border-[1px]  shadow-sm mb-4 border-opacity-10   min-w-[280px] lg:min-w-[380px] w-full h-[300px] lg:h-[420px] p-3 rounded-2xl">
    <img :src="`/images/${img}`" alt="" class="w-full h-[82%]  rounded-2xl">
    <div class="mt-4 flex justify-between w-full">
      <div>
        <p class="font-medium text-md">
          MonoCo Hexa Square
        </p>
        <p class="font-medium text-sm text-black opacity-50">
          80MM
        </p>
      </div>
      <Button class="h-9 w-9 rounded-full bg-green">
        <Icon name="fluent:open-12-regular" color="white" />
      </Button>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    label: 'Category',
    defaultOpen: true,
    description: ['Cutlery', 'Dinnerware', 'Drinkable', 'Accessories'],
  },
  {
    label: 'Material',
    defaultOpen: true,
    description: ['Teak Wood', 'mango wood', 'Glass', 'Metal'],
  },
]
</script>

<template>
  <UAccordion :items="items" color="accent">
    <template #item="{ item }">
      <p class="italic text-gray-900 dark:text-white  px-4 space-y-2">
        <span v-for="i in item.description" :key="i" class="flex gap-x-2 ">
          <UCheckbox color="primary" :name="i" :label="i" />
        </span>
      </p>
    </template>
  </UAccordion>
</template>

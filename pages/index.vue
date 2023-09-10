<script setup>
definePageMeta({
  layout: '',
})
const drawer = ref(null)
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" />
    <v-app-bar elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title class="text-button">
        Gym management
      </v-app-bar-title>
    </v-app-bar>
    <v-main />
  </v-app>
</template>

<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer"></v-navigation-drawer>
        <v-app-bar elevation="0" >
            <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-button">Gym management</v-app-bar-title>
        </v-app-bar>
        <v-main>
            {{ alert }}
        </v-main>
    </v-app>
</template>
<script setup>
const drawer = ref(null)
const {alert} = useCore()
definePageMeta({
    layout: ''
})
</script>
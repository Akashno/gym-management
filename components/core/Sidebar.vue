<script setup>
const drawer = ref(null)
const { sidebarItems } = useSidebar()
</script>

<template>
  <v-navigation-drawer v-model="drawer">
    <v-list density="compact" nav>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
      />
      <v-divider class="my-4" />
      <v-list-item v-for="(item, index) in sidebarItems" :key="index" :title="item.title" :to="item.link">
        <template #prepend>
          <v-list-item-action start>
            <Icon :name="item.icon" color="black" />
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar elevation="0">
    <Icon name="mdi:menu" color="black" class="mx-4 cursor-pointer" @click="drawer = !drawer" />
  </v-app-bar>
</template>

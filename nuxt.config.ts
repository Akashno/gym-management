// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: [
      'composables/**',
    ],
  },
  modules: [
    '@nuxt/devtools',
    'nuxt-vuefire',
    '@nuxtjs/tailwindcss'
  ],
  vuefire: {
    config: {
      apiKey: "AIzaSyDljx-Y6NFU-Aee4Wr1iOVPu488j27fIEI",
      authDomain: "excellent227-d98de.firebaseapp.com",
      projectId: "excellent227-d98de",
      storageBucket: "excellent227-d98de.appspot.com",
      messagingSenderId: "779631798964",
      appId: "1:779631798964:web:965176a6681eff56f245e1",
      measurementId: "G-QJ5GKDJSSL"
    },
  },
  css: ['@/assets/css/main.css'],
})

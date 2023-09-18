// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: [
      'composables/**',
    ],
  },
  swiper: {
    // Swiper options
    // ----------------------
    // prefix: 'Swiper',
    styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  modules: [
    '@nuxt/devtools',
    'nuxt-vuefire',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
  ],
  googleFonts: {
    families: {

      Rubik: true, // You can specify multiple font families
    },
    display: 'swap', // Optional: Specify the font-display CSS property
  },
  vuefire: {
    config: {
      apiKey: 'AIzaSyDljx-Y6NFU-Aee4Wr1iOVPu488j27fIEI',
      authDomain: 'excellent227-d98de.firebaseapp.com',
      projectId: 'excellent227-d98de',
      storageBucket: 'excellent227-d98de.appspot.com',
      messagingSenderId: '779631798964',
      appId: '1:779631798964:web:965176a6681eff56f245e1',
      measurementId: 'G-QJ5GKDJSSL',
    },
  },
  css: ['@/assets/css/main.css'],
})

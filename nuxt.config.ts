// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  imports:{
    dirs:[
      'composables/**'
    ]
  },
  modules: [
    '@nuxt/devtools',
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt',
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
      theme:{
        defaultTheme:'light',
      },
    },
    moduleOptions: {
      /* nuxt-vuetify module options */

      treeshaking: true,
      useIconCDN: true ,
      /* vite-plugin-vuetify options */
      // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
      // autoImport: true | false,
      // useVuetifyLabs: true | false, 
    }
  },
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
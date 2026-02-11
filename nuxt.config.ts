import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    '@nuxt/icon',
    // '@nuxtjs/google-fonts', // Dočasne vypnuté - môže spôsobovať useHead() chybu
    '@vueuse/nuxt'
  ]
})
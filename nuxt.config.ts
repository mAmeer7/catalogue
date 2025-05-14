// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-easy-lightbox',
  ],
  css: [
    '~/global.css', 
  ],
  googleFonts: {
    families:{
      Figtree: [100, 300, 400, 500, 600, 700, 800, 900], 
    }
   },
  image: {
    dir: 'public'
  }
})
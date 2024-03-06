// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module"
  ],
  css: [
    "@/assets/style/basic.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/assets/style/theme/index.scss';"
        }
      }
    }
  }
})

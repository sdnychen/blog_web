// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module"
  ],
  css: [
    "@/assets/style/basic.scss"
  ],
  app: {
    head: {
      script: [
        { src: "//at.alicdn.com/t/c/font_4456649_viq5cjg0uy.js", type: "text/javascript" } // 引入在线iconfont
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/assets/style/variable.scss';"
        }
      }
    }
  }
})

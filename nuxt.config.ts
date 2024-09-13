import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"

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
                // { src: "//at.alicdn.com/t/c/font_4456649_ufc6ka2djnd.js", type: "text/javascript" } // 引入在线iconfont
            ]
        }
    },

    build: {
        transpile:
    process.env.NODE_ENV === "production" ? ["naive-ui", "vueuc", "@css-render/vue3-ssr", "juggle/resize-observer"] : ["@juggle/resize-observer"]
    },

    vite: {
        optimizeDeps: {
            include: process.env.NODE_ENV === "development" ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"] : []
        },
        plugins: [
            AutoImport({
                imports: [
                    {
                        "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
                    }
                ]
            }),
            Components({
                resolvers: [NaiveUiResolver()]
            })
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: "@import '@/assets/style/index.scss';"
                }
            }
        }
    },

    compatibilityDate: "2024-09-13"
})

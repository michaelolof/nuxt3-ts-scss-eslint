import eslintPlugin from "vite-plugin-eslint";
import { getRuntimeConfig } from "./config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    runtimeConfig: {
        public: getRuntimeConfig(),
    },

    css: [
        "@/assets/scss/main.scss",
    ],

    modules: [
        "@pinia/nuxt",
    ],

    vite: {
        css: {
            preprocessorOptions: {
                sccs: {
                    additionalData: `
                        @import '@/assets/scss/abstracts/variables.scss'
                    `,
                },
            },
        },

        plugins: [
            eslintPlugin({
                emitWarning: true,
                emitError: true,
            }),
        ],
    },
});
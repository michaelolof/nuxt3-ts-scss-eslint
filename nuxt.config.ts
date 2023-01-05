import eslintPlugin from "vite-plugin-eslint";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

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
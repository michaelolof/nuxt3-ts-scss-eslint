import eslintPlugin from "vite-plugin-eslint";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@pinia/nuxt",
    ],

    vite: {
        plugins: [
            eslintPlugin({
                emitWarning: true,
                emitError: true,
            }),
        ],
    },
});
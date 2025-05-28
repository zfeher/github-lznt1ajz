// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",

  $meta: {
    name: "layer2",
  },

  extends: ['../layer1']
});

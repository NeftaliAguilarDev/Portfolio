// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt"],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBackUrl: process.env.API_BACK_URL ?? 'https://random-data-api.com/api/v2/users?size=10&response_type=json'
    }
  }
})
// *** CORE ***
import { createApp } from 'vue'
// ---------------------------
// *** STYLES ***
import '@/assets/css/tailwind.css'
import '@/assets/css/style.css'
// ---------------------------
// *** PLUGINS ***
import i18n from '@/core/plugins/i18n'
import VeeValidatePlugin from '@/core/plugins/veeValidation'
import router from './router'
import { vMaska } from 'maska'
import { createPinia } from 'pinia'
// *** COMPONENTS ***
import nuxtLabsTheme from 'nuxt-ui-vue/dist/theme/nuxtlabsTheme'
import { createUI } from 'nuxt-ui-vue'
import App from './App.vue'

const UI = createUI({
  registerComponents: false,
})
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VeeValidatePlugin)
app.use(UI, nuxtLabsTheme)
app.directive('maska', vMaska)
app.mount('#app')

// *** CORE ***
import { createApp } from 'vue'
// ---------------------------
// *** STYLES ***
import '@/assets/css/tailwind.css'
import '@/assets/css/style.css'
// ---------------------------
// *** PLUGINS ***
import i18n from '@/core/plugins/i18n'
import router from './router'
import { vMaska } from 'maska'
import { createPinia } from 'pinia'
// *** COMPONENTS ***
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.directive('maska', vMaska)
app.mount('#app')

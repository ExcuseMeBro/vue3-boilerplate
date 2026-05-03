import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { vMaska } from 'maska/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import '@/assets/css/tailwind.css'
import '@/assets/css/style.css'

import App from '@/App.vue'
import i18n from '@/core/plugins/i18n'
import VeeValidatePlugin from '@/core/plugins/veeValidation'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(autoAnimatePlugin)
app.use(router)
app.use(i18n)
app.use(VeeValidatePlugin)
app.directive('maska', vMaska)
app.mount('#app')

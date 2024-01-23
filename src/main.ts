// *** CORE ***
import { createApp } from 'vue'
// ---------------------------
// *** STYLES ***
import '@/assets/css/tailwind.css'
import '@/assets/css/style.css'
// ---------------------------
// *** PLUGINS ***
import i18n from '@/core/plugins/i18n'
// *** COMPONENTS ***
import App from './App.vue'

const app = createApp(App)

app.use(i18n)
app.mount('#app')

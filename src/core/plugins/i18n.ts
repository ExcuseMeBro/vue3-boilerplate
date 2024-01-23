import { createI18n } from 'vue-i18n'

import en from '@/core/languages/en.json'
import uz from '@/core/languages/uz.json'

const messages = {
  en: en,
  uz: uz,
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('locale') || 'en',
  messages,
})

export default i18n

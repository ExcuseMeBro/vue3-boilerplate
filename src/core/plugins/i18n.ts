import { createI18n } from 'vue-i18n'

import en from '@/core/languages/en.json'
import ru from '@/core/languages/ru.json'
import uz from '@/core/languages/uz.json'

const messages = {
  en,
  ru,
  uz,
} as const

export type SupportedLocale = keyof typeof messages
export const supportedLocales = Object.keys(messages) as SupportedLocale[]
export const defaultLocale: SupportedLocale = 'en'

function isSupportedLocale(locale: string | null | undefined): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale)
}

function resolveInitialLocale(): SupportedLocale {
  const savedLocale = localStorage.getItem('locale')

  if (isSupportedLocale(savedLocale)) {
    return savedLocale
  }

  const browserLocale = navigator.language.split('-')[0]

  return isSupportedLocale(browserLocale) ? browserLocale : defaultLocale
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: resolveInitialLocale(),
  fallbackLocale: defaultLocale,
  messages,
})

export function setLocale(locale: SupportedLocale) {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

setLocale(i18n.global.locale.value)

export default i18n

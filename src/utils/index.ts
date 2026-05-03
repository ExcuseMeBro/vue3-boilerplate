import {
  defaultLocale,
  type SupportedLocale,
  setLocale,
  supportedLocales,
} from '@/core/plugins/i18n'

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale)
}

export function changeLocale(locale: string) {
  setLocale(isSupportedLocale(locale) ? locale : defaultLocale)
}

export function getLocale(): SupportedLocale {
  const locale = localStorage.getItem('locale')

  return locale && isSupportedLocale(locale) ? locale : defaultLocale
}

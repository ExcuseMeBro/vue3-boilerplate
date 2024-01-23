export function changeLocale(locale: string) {
  localStorage.setItem('locale', locale ?? 'en')
  window.location.reload()
}

export function getLocale() {
  return localStorage.getItem('locale') || 'en'
}

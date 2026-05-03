<template>
  <button type="button" class="btn btn-ghost btn-circle" :aria-label="t('theme.toggle')" @click="toggleTheme">
    <span aria-hidden="true">{{ theme === 'light' ? '🌙' : '☀️' }}</span>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

type Theme = 'light' | 'dark'

const { t } = useI18n()
const theme = ref<Theme>((localStorage.getItem('theme') as Theme | null) ?? 'dark')

function applyTheme(value: Theme) {
  localStorage.setItem('theme', value)
  document.documentElement.setAttribute('data-theme', value)
}

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  applyTheme(theme.value)
}

onMounted(() => applyTheme(theme.value))
</script>

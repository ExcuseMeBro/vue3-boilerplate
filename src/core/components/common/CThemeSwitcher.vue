<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" @click="toggleTheme" />
  </label>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const theme = ref(
  localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark',
)

const html = document.querySelector('html')

const toggleTheme = () => {
  if (theme.value === 'light') {
    theme.value = 'dark'
    localStorage.setItem('theme', 'dark')
  } else {
    theme.value = 'light'
    localStorage.setItem('theme', 'light')
  }
  html?.setAttribute('data-theme', theme.value)
}

onMounted(() => {
  html?.setAttribute('data-theme', theme.value ?? 'dark')
})
</script>

<style lang="scss" scoped></style>

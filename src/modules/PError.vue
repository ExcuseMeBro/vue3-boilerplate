<template>
  <main class="grid min-h-[calc(100vh-4rem)] place-items-center bg-base-200 px-6 text-center">
    <section class="card max-w-md border border-base-300 bg-base-100 shadow-xl">
      <div class="card-body items-center">
        <p class="text-7xl font-black text-primary">404</p>
        <h1 class="card-title">{{ t('errors.notFound') }}</h1>
        <RouterLink to="/" class="btn btn-primary mt-4">{{ t('errors.goHome') }}</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

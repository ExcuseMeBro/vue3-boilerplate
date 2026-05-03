<template>
  <nav class="navbar sticky top-0 z-20 border-b border-base-300 bg-base-100/90 backdrop-blur">
    <div class="navbar-start">
      <div class="dropdown">
        <button
          type="button"
          tabindex="0"
          class="btn btn-ghost btn-circle"
          :aria-label="t('nav.openMenu')"
        >
          <span class="text-xl">☰</span>
        </button>
        <ul
          tabindex="0"
          class="menu dropdown-content z-[1] mt-3 w-56 rounded-box bg-base-100 p-2 shadow"
        >
          <li><RouterLink to="/">{{ t('nav.home') }}</RouterLink></li>
          <li><RouterLink to="/form">{{ t('nav.form') }}</RouterLink></li>
        </ul>
      </div>
    </div>

    <div class="navbar-center">
      <RouterLink to="/" class="btn btn-ghost text-base sm:text-xl">
        {{ t('app.name') }}
      </RouterLink>
    </div>

    <div class="navbar-end gap-2">
      <CLanguageSwitcher class="hidden sm:block" />
      <CThemeSwitcher />
      <button type="button" class="btn btn-ghost btn-circle" :aria-label="t('nav.search')">
        <span aria-hidden="true">⌕</span>
      </button>
      <button type="button" class="btn btn-ghost btn-circle" :aria-label="t('nav.notifications')">
        <div class="indicator">
          <span aria-hidden="true">🔔</span>
          <span class="badge badge-primary badge-xs indicator-item"></span>
        </div>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import CLanguageSwitcher from '@/core/components/common/CLanguageSwitcher.vue'
import CThemeSwitcher from '@/core/components/common/CThemeSwitcher.vue'

const { t } = useI18n()
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import CLanguageSwitcher from '@/core/components/common/CLanguageSwitcher.vue'

const { t } = useI18n()
const count = ref(0)
</script>

<template>
  <section class="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
    <div class="animate-fade-up">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {{ t('app.tagline') }}
      </p>
      <h1 class="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
        {{ t('home.title') }}
      </h1>
      <p class="mt-4 text-base leading-7 text-base-content/70 sm:text-lg">
        {{ t('home.subtitle') }}
      </p>
    </div>

    <div class="card w-full max-w-md border border-base-300 bg-base-100 shadow-xl">
      <div v-auto-animate class="card-body gap-4">
        <button type="button" class="btn btn-primary" @click="count++">
          {{ t('home.counter', { count }) }}
        </button>

        <p v-if="count > 0" class="rounded-box bg-base-200 px-4 py-3 text-sm text-base-content/70">
          {{ t('home.autoAnimateHint') }}
        </p>

        <label class="form-control">
          <span class="label-text mb-2">{{ t('home.maskedInput') }}</span>
          <input
            v-maska
            data-maska="#-#-#"
            type="text"
            placeholder="0-0-0"
            class="input input-bordered w-full"
          />
        </label>

        <CLanguageSwitcher class="sm:hidden" />
      </div>
    </div>
  </section>
</template>

<template>
  <label class="form-control w-36">
    <span class="sr-only">{{ t('language.label') }}</span>
    <select v-model="lang" class="select select-bordered select-sm" :aria-label="t('language.label')">
      <option disabled value="">{{ t('language.select') }}</option>
      <option value="en">{{ t('language.english') }}</option>
      <option value="uz">{{ t('language.uzbek') }}</option>
      <option value="ru">{{ t('language.russian') }}</option>
    </select>
  </label>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { changeLocale, getLocale } from '@/utils/index'

const { t } = useI18n()
const lang = ref(getLocale())

watch(lang, (value) => {
  changeLocale(value)
})
</script>

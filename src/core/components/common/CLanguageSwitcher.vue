<template>
  <div>
    <select v-model="lang" class="select select-info w-full max-w-xs">
      <option disabled selected value="">Select language</option>
      <option value="en">English</option>
      <option value="uz">Uzbek</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { changeLocale, getLocale } from '@/utils/index'

const lang = ref(getLocale())

watch(
  () => lang.value,
  (val) => {
    if (val) {
      changeLocale(val)
    }
  },
)
</script>

<style lang="scss" scoped></style>

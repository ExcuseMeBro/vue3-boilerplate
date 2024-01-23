<script setup lang="ts">
import { watch } from 'vue'
import { ref } from 'vue'
import { changeLocale, getLocale } from '@/utils/index'

interface Props {
  msg: string
  test?: string
}

defineProps<Props>()

const count = ref(0)
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

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <select v-model="lang" class="select select-info w-full max-w-xs">
    <option disabled selected value="">Select language</option>
    <option value="en">English</option>
    <option value="uz">Uzbek</option>
  </select>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

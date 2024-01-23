<script setup lang="ts">
import { ref } from 'vue'
import CLanguageSwitcher from './common/CLanguageSwitcher.vue'

interface Props {
  msg: string
  test?: string
}

defineProps<Props>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <br />
    <input
      v-maska
      data-maska="#-#-#"
      type="text"
      placeholder="0-0-0"
      class="input input-bordered w-full max-w-xs"
    />
    <br />
    <CLanguageSwitcher />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

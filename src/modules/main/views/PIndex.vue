<template>
  <main class="min-h-[calc(100vh-4rem)] bg-base-200 px-6 py-16">
    <div class="mx-auto flex max-w-5xl flex-col items-center gap-10">
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer" aria-label="Vue website">
        <img src="@/assets/svg/vue.svg" class="logo vue" alt="Vue logo" />
      </a>

      <HelloWorld />
    </div>
  </main>
</template>

<script setup lang="ts">
import HelloWorld from '@/core/components/HelloWorld.vue'
</script>

<style scoped>
.logo {
  height: 6rem;
  padding: 1.5rem;
  transition: filter 300ms ease;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2rem #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2rem #42b883aa);
}
</style>

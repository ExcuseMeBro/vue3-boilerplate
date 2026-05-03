<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    <CNavbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import CNavbar from '@/core/components/CNavbar.vue'
</script>

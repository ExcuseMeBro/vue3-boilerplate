<template>
  <router-view v-slot="{ Component }">
    <component :is="detectLayout">
      <Component :is="Component" />
    </component>
  </router-view>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import LDefault from '@/layouts/LDefault.vue'

const route = useRoute()
const layouts = new Map<string, Component>([['default', LDefault]])

const detectLayout = computed(() => layouts.get(String(route.meta.layout ?? 'default')) ?? LDefault)
</script>

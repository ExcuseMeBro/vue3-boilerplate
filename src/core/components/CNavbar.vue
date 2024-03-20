<template>
  <div class="navbar bg-base-100 sticky top-0">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
<!--          <UIcon name="ph:list" size="xl" />-->
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="/">Home</a></li>
          <li><a href="/form">Form Validation</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a href="/" class="btn btn-ghost text-xl" to="/"
        >Vue 3 Boilerplate | {{ $t('hi') }} ;)</a
      >
    </div>
    <div class="navbar-end">
      <CThemeSwitcher />
      <button class="btn btn-ghost btn-circle">
<!--        <UIcon name="ph:magnifying-glass" size="xl" />-->
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
<!--          <UIcon name="ph:bell" size="xl" />-->
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CThemeSwitcher from '@/core/components/common/CThemeSwitcher.vue'
</script>

<style scoped></style>

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { tokenService } from '@/core/services/token.service'
import type { LoginPayload, RegisterPayload, User } from '@/modules/auth/models/auth.models'
import { authService } from '@/modules/auth/services/auth.service'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const isAuthenticated = computed(() => Boolean(user.value || tokenService.getAccessToken()))

  async function setSessionFromAuthResponse(
    request: Promise<{ user: User; accessToken: string; refreshToken?: string }>,
  ) {
    loading.value = true

    try {
      const response = await request
      tokenService.setTokens(response)
      user.value = response.user

      return response.user
    } finally {
      loading.value = false
    }
  }

  function login(payload: LoginPayload) {
    return setSessionFromAuthResponse(authService.login(payload))
  }

  function register(payload: RegisterPayload) {
    return setSessionFromAuthResponse(authService.register(payload))
  }

  async function fetchCurrentUser() {
    if (!tokenService.getAccessToken()) {
      user.value = null
      return null
    }

    loading.value = true

    try {
      user.value = await authService.me()
      return user.value
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    try {
      if (tokenService.getAccessToken()) {
        await authService.logout()
      }
    } finally {
      tokenService.clearTokens()
      user.value = null
    }
  }

  window.addEventListener('auth:unauthorized', () => {
    user.value = null
  })

  return {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    fetchCurrentUser,
    logout,
  }
})

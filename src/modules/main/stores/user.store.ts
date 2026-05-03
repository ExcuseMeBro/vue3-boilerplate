import { defineStore } from 'pinia'
import { ref } from 'vue'

interface DemoUser {
  name: string
  email: string
  avatar: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<DemoUser | null>(null)
  const nextActions = ref<string[]>([])

  function fetchUser() {
    user.value = {
      name: 'Demo User',
      email: 'demo@example.com',
      avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    }
  }

  function addNextAction(action: string) {
    nextActions.value.push(action)
  }

  return {
    user,
    nextActions,
    fetchUser,
    addNextAction,
  }
})

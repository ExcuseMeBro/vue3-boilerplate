import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref()

  function fetchUser() {
    user.value = {
      name: '<NAME>',
      email: '<EMAIL>',
      avatar:
        'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    }
  }

  // *** Next actions, ref, and reactive below ***
  const nextActions = ref([])

  function addNextAction(action: never) {
    nextActions.value.push(action)
  }

  return {
    user,
    fetchUser,
    // comment there
    nextActions,
    addNextAction,
  }
})

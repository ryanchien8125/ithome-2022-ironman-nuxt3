import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: {
      id: null,
      provider: {
        name: null,
        userId: null
      },
      nickname: null,
      avatar: null,
      email: null
    }
  }),
  actions: {
    async refreshUserProfile() {
      const { data, error } = await useFetch('/api/user/profile', { initialCache: false })
      if (data.value) {
        this.profile = data.value
      } else {
        return error.value?.data?.message ?? '未知錯誤'
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: process.client ? localStorage : null
      }
    ]
  }
})

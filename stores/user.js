import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: {
      name: '',
      gender: '',
      email: ''
    }
  }),
  actions: {
    async getUserProfile() {
      try {
        const { data } = await useFetch('/api/profile')
        this.profile = data
      } catch (error) {
        return error
      }
    }
  }
})

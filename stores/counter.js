import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  },
  persist: {
    key: 'counter',
    storage: persistedState.localStorage
  }
})

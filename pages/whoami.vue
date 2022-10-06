<template>
  <div class="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
      <div class="flex flex-col items-center">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700">我是誰</h2>
      </div>
    </div>

    <div class="mt-6 flex w-full max-w-md flex-col items-center">
      <button
        type="button"
        class="mt-2 w-fit rounded-sm bg-emerald-500 py-2 px-4 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        @click="whoami"
      >
        打 /api/whoami API
      </button>
    </div>

    <div v-if="userInfo" class="mt-8 flex w-full max-w-md flex-col">
      <div v-for="key in Object.keys(userInfo)" :key="key" class="mt-1 flex flex-wrap break-all">
        <label class="text-lg font-semibold text-emerald-500"> {{ key }}:</label>
        <span class="ml-2 flex flex-1 text-lg text-slate-700">{{ userInfo[key] }}</span>
      </div>
    </div>

    <div class="mt-6 flex w-full max-w-md flex-col items-center">
      <button
        type="button"
        class="mt-2 w-fit rounded-sm bg-emerald-500 py-2 px-4 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        @click="profile"
      >
        重新取得 Profile
      </button>
    </div>

    <div v-if="userProfile.id" class="mt-8 flex w-full max-w-2xl flex-col">
      <div v-for="key in Object.keys(userProfile)" :key="key" class="mt-1 flex flex-wrap break-all">
        <label class="text-lg font-semibold text-emerald-500"> {{ key }}:</label>
        <span class="ml-2 flex flex-1 text-lg text-slate-700">{{ userProfile[key] }}</span>
      </div>
    </div>
    <div v-else class="mt-8 flex w-full max-w-2xl flex-col">
      <span class="ml-2 flex justify-center text-lg text-slate-700">
        Local Storage 目前還沒有 user 資料
      </span>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userInfo = ref()
const userStroe = useUserStore()

const whoami = () => {
  useFetch('/api/whoami').then((response) => {
    userInfo.value = response.data.value
  })
}

const userProfile = computed(() => userStroe.profile)

const profile = () => {
  userStroe.refreshUserProfile()
}
</script>

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <span class="text-4xl font-semibold text-sky-500">{{ userStore.profile.name }}</span>
      <span class="mt-2 text-2xl font-semibold text-sky-500">{{ userStore.profile.gender }}</span>
      <span class="mt-2 text-2xl font-semibold text-sky-500">{{ userStore.profile.email }}</span>
      <div class="mt-8">
        <NuxtLink to="/">回首頁</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
userStore.getUserProfile()
</script>

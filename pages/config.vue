<template>
  <div class="my-24 flex flex-col items-center">
    <p class="mt-4 text-2xl text-gray-600">theme.primaryColor:</p>
    <span class="mt-4 text-3xl font-semibold text-blue-500">{{ theme.primaryColor }}</span>

    <p class="mt-4 text-2xl text-gray-600">theme.darkMode:</p>
    <span class="mt-4 text-3xl font-semibold text-blue-500">{{ theme.darkMode }}</span>
    <button
      class="mt-6 rounded-sm bg-blue-500 px-4 py-2 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      @click="theme.darkMode = !theme.darkMode"
    >
      {{ `${theme.darkMode ? '取消' : '啟用'}深色模式` }}
    </button>

    <div class="mt-8">
      <NuxtLink to="/">回首頁</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
const { theme } = appConfig
</script>

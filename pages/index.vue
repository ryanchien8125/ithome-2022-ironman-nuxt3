<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex flex-col space-y-4">
        <NuxtLink to="/config">前往 /config</NuxtLink>
      </div>

      <p class="mt-4 text-2xl text-gray-600">theme.darkMode:</p>
      <span class="mt-4 text-3xl font-semibold text-blue-500">{{ theme.darkMode }}</span>
    </div>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
const { theme } = appConfig
</script>

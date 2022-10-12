<template>
  <div class="flex flex-col items-center bg-white py-24">
    <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
    <div class="my-8 flex flex-col space-y-4">
      <NuxtLink to="/vue/onErrorCaptured">前往 /vue/onErrorCaptured</NuxtLink>
      <NuxtLink to="/vue/thowError">前往 /vue/thowError</NuxtLink>
      <NuxtLink to="/vue/createErrorClient">前往 /vue/createErrorClient</NuxtLink>
      <NuxtLink to="/vue/createErrorServer">前往 /vue/createErrorServer</NuxtLink>
      <NuxtLink to="/nuxt/thowError">前往 /nuxt/thowError</NuxtLink>
      <NuxtLink to="/nuxt/NuxtErrorBoundary">前往 /nuxt/NuxtErrorBoundary</NuxtLink>
    </div>
  </div>
</template>

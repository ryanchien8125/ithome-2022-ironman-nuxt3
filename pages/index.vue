<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex flex-col space-y-4">
        <NuxtLink to="/count/useAsyncData">前往 /count/useAsyncData</NuxtLink>
        <NuxtLink to="/count/useLazyAsyncData">前往 /count/useLazyAsyncData</NuxtLink>
        <NuxtLink to="/about/useFetch">前往 /about/useFetch</NuxtLink>
      </div>
    </div>
  </div>
</template>

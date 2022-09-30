<template>
  <div class="my-24 flex flex-col items-center">
    <p class="text-6xl text-gray-600">瀏覽次數</p>
    <span class="mt-4 text-9xl font-semibold text-sky-400">{{ data }}</span>
    <div class="mt-8">
      <NuxtLink to="/">回首頁</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data } = useLazyAsyncData('count', () => $fetch('/api/count'), {
  default: () => '-'
})
</script>

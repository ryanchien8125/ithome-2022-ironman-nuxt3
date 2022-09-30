<template>
  <div class="my-24 flex flex-col items-center">
    <p class="text-2xl text-gray-600">
      請求狀態:
      {{ pending ? '請求中' : '完成' }}
    </p>
    <span v-if="error" class="mt-4 text-6xl text-gray-600">是否錯誤: {{ error }}</span>
    <span class="mt-4 text-2xl text-gray-600">回傳資料:</span>
    <p class="mt-4 text-3xl font-semibold text-blue-500">{{ data }}</p>
    <button
      class="mt-6 rounded-sm bg-blue-500 py-3 px-8 text-xl font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      @click="refresh"
    >
      重新獲取資料
    </button>
  </div>
</template>

<script setup>
const { data, pending, error, refresh } = await useFetch('/api/about', {
  pick: ['name', 'counter']
})
</script>

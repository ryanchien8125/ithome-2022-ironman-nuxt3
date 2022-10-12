<template>
  <NuxtErrorBoundary>
    <!-- 這個按鈕元件可以拋出一個錯誤 -->
    <ButtonOOPS />

    <template #error="{ error }">
      <p class="my-4 text-xl text-gray-500">這裡是發生錯誤時，才會渲染出來的地方</p>
      <button
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        @click="fixIssue(error)"
      >
        修正錯誤
      </button>
    </template>
  </NuxtErrorBoundary>
</template>

<script setup>
const fixIssue = (error) => {
  error.value = null
}
</script>

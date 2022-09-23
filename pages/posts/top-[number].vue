<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-600">這是 posts/top-[number] 的頁面</h1>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Top Number: <span class="text-5xl font-semibold text-rose-500">{{ number }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { number } = route.params
</script>

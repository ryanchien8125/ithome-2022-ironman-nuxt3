<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-600">這是 posts/[postId]/comments/[commentId] 的頁面</h1>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Post Id: <span class="text-5xl font-semibold text-blue-600">{{ postId }}</span>
      </p>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Comment Id:
        <span class="text-5xl font-semibold text-purple-400">{{ commentId }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { postId, commentId } = route.params
</script>

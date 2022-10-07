<template>
  <div class="flex w-full justify-center">
    <div class="mb-8 flex w-full max-w-3xl flex-col justify-center">
      <div class="mt-4">
        <img :src="article.cover" />
      </div>
      <time class="my-2 text-gray-400">
        {{ dayjs(article.createdAt).format('YYYY-MM-DD HH:mm:ss') }}
      </time>
      <h1 class="text-4xl font-semibold text-gray-700">{{ article.title }}</h1>
      <!-- {{ article }} -->
      <div class="mt-6">
        <ArticleReadOnly :content="article.content" />
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
const route = useRoute()

const { data: article } = await useFetch(`/api/articles/${route.params.id}`, {
  initialCache: false
})
</script>

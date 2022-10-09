<template>
  <div class="flex w-full flex-col items-center bg-white">
    <div class="item-center mt-8 flex w-full max-w-4xl flex-col px-8 md:items-start lg:px-0">
      <h1 class="text-3xl font-semibold text-gray-800">所有文章</h1>
      <p class="mt-2 mb-4 text-sm text-gray-500">
        這裡集結了 Nuxt 與 Vue 的技術文章，期待能將我的經驗分享給您
      </p>
    </div>
    <div class="my-8 flex w-full max-w-4xl flex-col">
      <div v-if="pending">
        <Icon class="h-6 w-6 text-gray-500" name="eos-icons:loading" />
      </div>
      <div v-else class="md:border-l md:border-gray-100">
        <div v-if="!articlesResponse || articlesResponse.data.length === 0">
          <span class="text-gray-500">目前尚無最新文章</span>
        </div>
        <div v-else class="flex flex-col space-y-4 md:pl-6">
          <article
            v-for="article in articlesResponse.data"
            :key="article.id"
            class="md:grid md:grid-cols-4 md:items-baseline"
          >
            <NuxtLink
              :to="{
                name: 'articles-id',
                params: {
                  id: article.id
                }
              }"
              class="group mx-4 flex cursor-pointer flex-col items-start py-6 px-4 transition hover:bg-gray-50 sm:rounded-2xl md:col-span-3 md:mx-0"
            >
              <h2 class="text-base font-semibold tracking-tight text-gray-700">
                <span class="">{{ article.title }}</span>
              </h2>
              <time class="order-first mb-3 flex items-center text-sm text-gray-400 md:hidden">
                {{ dayjs(article.createdAt).format('YYYY-MM-DD') }}
              </time>
              <p class="mt-2 text-sm text-gray-500">
                {{ article.summary }}
              </p>
              <span
                aria-hidden="true"
                class="mt-4 flex items-center text-sm font-medium text-emerald-500"
              >
                繼續閱讀
                <Icon name="ri:arrow-right-s-line" />
              </span>
            </NuxtLink>
            <time class="order-first mt-1 mb-3 hidden items-center text-sm text-gray-400 md:flex">
              {{ dayjs(article.createdAt).format('YYYY-MM-DD') }}
            </time>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'

const { push: pushNotify } = useNotification()

const {
  pending,
  data: articlesResponse,
  error
} = useLazyFetch('/api/articles', {
  initialCache: false
})

if (error.value) {
  pushNotify('error', '取得文章失敗', error.value?.data?.message ?? '未知錯誤')
}

watch(error, (newError) => {
  if (!newError.value) {
    pushNotify('error', '取得文章失敗', error.value?.data?.message ?? '未知錯誤')
  }
})

useHead({
  titleTemplate: (title) => {
    return title ? `${title} - 所有文章` : '所有文章'
  }
})

definePageMeta({
  title: '所有文章'
})
</script>

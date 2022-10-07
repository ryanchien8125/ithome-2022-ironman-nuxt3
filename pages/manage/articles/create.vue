<template>
  <div class="flex w-full justify-center">
    <div class="flex w-full max-w-3xl justify-center">
      <form class="w-full space-y-8 divide-y divide-gray-200" @submit.prevent="handleSubmit">
        <div class="space-y-8 divide-y divide-gray-200">
          <div>
            <div class="mt-6">
              <h3 class="text-xl font-medium leading-6 text-gray-900">新增文章</h3>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="col-span-12">
                <label for="title" class="block text-sm font-medium text-gray-700">
                  文章標題
                </label>
                <div class="mt-1">
                  <input
                    id="title"
                    v-model="articleData.title"
                    name="title"
                    type="text"
                    autocomplete="title"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-12">
                <label for="cover" class="block text-sm font-medium text-gray-700">
                  文章圖片連結
                </label>
                <div class="mt-1">
                  <input
                    id="cover"
                    v-model="articleData.cover"
                    name="cover"
                    type="text"
                    autocomplete="cover"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-12">
                <label for="about" class="block text-sm font-medium text-gray-700">文章內容</label>
                <div class="mt-1">
                  <textarea
                    id="content"
                    v-model="articleData.content"
                    name="content"
                    rows="8"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-12">
                <label for="tags" class="block text-sm font-medium text-gray-700">標籤</label>
                <div class="mt-1">
                  <input
                    id="tags"
                    v-model="articleData.tags"
                    type="text"
                    name="tags"
                    autocomplete="tags"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  />
                  <p class="mt-2 text-sm text-gray-500">標籤之間以逗號 , 做間隔</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-5">
          <div class="flex justify-end">
            <button
              type="button"
              class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              取消
            </button>
            <button
              type="submit"
              class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              發布
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const { push: pushNotify } = useNotification()

const articleData = reactive({
  title: '',
  content: '',
  cover: '',
  tags: ''
})

const handleSubmit = async () => {
  const { data, error } = await useFetch('/api/manage/articles', {
    method: 'POST',
    headers: useRequestHeaders(['cookie']),
    body: toRaw(articleData),
    initialCache: false
  })

  if (error.value) {
    pushNotify('error', '文章發布失敗', error.value.data.message)
  } else if (data) {
    pushNotify('success', '文章發布成功', '請等待頁面自動跳轉')
    navigateTo('/articles')
  }
}
</script>

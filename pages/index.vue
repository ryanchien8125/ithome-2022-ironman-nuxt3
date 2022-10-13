<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-semibold text-gray-700">
        這裡是
        <a href="https://ithelp.ithome.com.tw/users/20152617/ironman/5934" target="_blank">
          Nuxt 3 學習筆記
        </a>
        實戰部落格
      </h1>
      <NuxtLink
        class="text-md mt-12 rounded-sm bg-emerald-500 py-2 px-4 font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        to="/manage/articles/create"
      >
        前往撰寫文章
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '首頁'
})
</script>

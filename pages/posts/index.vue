<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-4xl text-gray-600">這是 Posts 首頁</h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/posts/8"> 前往指定的文章 </NuxtLink>
        <NuxtLink to="/posts/8/comments/1">前往指定的文章留言</NuxtLink>
        <NuxtLink to="/posts/top-3">前往 Top 3</NuxtLink>
        <NuxtLink to="/posts/top-10">前往 Top 10</NuxtLink>
      </div>
    </div>
  </div>
</template>

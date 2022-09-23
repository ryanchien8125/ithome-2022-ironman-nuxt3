<template>
  <NuxtLayout name="custom">
    <template #default>
      <div class="bg-white py-24">
        <div class="flex flex-col items-center">
          <h1 class="text-6xl font-semibold text-sky-400">2022 iThome 鐵人賽</h1>
          <p class="my-8 text-3xl text-gray-600">這裡是 /contact</p>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-center">
        <span class="text-2xl text-slate-500">再一步 世界就在你的腳下</span>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})
</script>

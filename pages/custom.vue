<template>
  <NuxtLayout name="custom">
    <template #default>
      <div class="mx-6 mb-4 bg-white py-24">
        <div class="flex flex-col items-center">
          <h1 class="text-6xl font-semibold text-sky-400">2022 iThome</h1>
          <p class="mt-4 text-9xl font-bold text-gray-600">鐵人賽</p>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-col items-center">
        <p class="mt-4 text-xl text-slate-600">感謝您閱讀 Nuxe 3 學習筆記～</p>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})
</script>

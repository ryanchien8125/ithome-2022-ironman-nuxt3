<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="my-2 text-6xl font-semibold text-sky-400">{{ $hello('Ryan') }}</h1>
      <h1 class="my-2 text-6xl font-semibold text-emerald-400">{{ title }}</h1>
      <button
        class="mt-6 rounded-sm bg-blue-500 py-3 px-8 text-xl font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        這個按鈕沒有 v-focus
      </button>
      <button
        v-focus
        class="mt-6 rounded-sm bg-blue-500 py-3 px-8 text-xl font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        這個按鈕會自動成為焦點
      </button>
    </div>
  </div>
</template>

<script setup>
const { $hello } = useNuxtApp()
const title = $hello('Jennifer')
</script>

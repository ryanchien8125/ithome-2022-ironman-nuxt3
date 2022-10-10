<template>
  <div class="flex flex-col items-center bg-white">
    <h1 class="mt-48 text-8xl font-medium text-blue-500">
      {{ $t('hello') }}
    </h1>
    <div class="mt-24 space-x-4">
      <button
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        @click="setLocale('en')"
      >
        English
      </button>

      <button
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        @click="setLocale('zh')"
      >
        繁體中文
      </button>
    </div>
    <div class="mt-4 flex flex-row justify-center">
      <label class="text-gray-600">{{ $t('language') }}</label>
      <span class="ml-4 font-bold text-gray-800">{{ locale }}</span>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale, setLocale } = useI18n()
</script>

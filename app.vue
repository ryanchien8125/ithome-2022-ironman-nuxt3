<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale, setLocale } = useI18n()

const defaultLocaleCode = locale.value

if (process.client) {
  setLocale(localStorage.getItem('i18n-lang') ?? defaultLocaleCode)
}
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale, getLocaleCookie } = useI18n()

const defaultLocaleCode = locale.value

locale.value = getLocaleCookie() ?? defaultLocaleCode
</script>

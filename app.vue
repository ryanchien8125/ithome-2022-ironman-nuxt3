<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <NotificationContainer />
  </div>
</template>

<script setup>
const title = ref('Nuxt 3 Blog')
useHead({
  title,
  titleTemplate: (title) => {
    return title ? `${title} - 首頁` : '首頁'
  }
})
</script>

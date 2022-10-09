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
const route = useRoute()

const title = ref('Nuxt 3 Blog')
useHead({
  meta: [{ name: 'og:title', content: `${route.meta.title} | Nuxt 3 Blog` }],
  title,
  titleTemplate: (title) => {
    return title ? `${title} - 首頁` : '首頁'
  }
})
</script>

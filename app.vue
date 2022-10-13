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
useHead({
  titleTemplate: (title) => (title ? `${title} | Nuxt 3 Blog` : 'Nuxt 3 Blog'),
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: '這裡是 Nuxt 3 學習筆記 實戰部落格' }]
})
</script>

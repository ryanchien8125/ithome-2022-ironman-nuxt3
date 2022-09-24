<template>
  <div>
    <ClientOnly>
      <IronManWelcome />
      <template #fallback>
        <p class="my-6 flex justify-center">[IronManWelcome] 載入中...</p>
      </template>
    </ClientOnly>
  </div>
</template>

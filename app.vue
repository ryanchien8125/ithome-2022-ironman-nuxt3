<template>
  <div class="m-4 bg-white">
    <p class="pb-4 text-2xl text-slate-600">這裡是最外層 app.vue</p>
    <NuxtLayout name="default">
      <p class="px-6 pt-4 text-xl text-slate-800">
        被 NuxtLayout 包裹的元件將會放置到 Layout 的 solt 中
      </p>
    </NuxtLayout>
  </div>
</template>

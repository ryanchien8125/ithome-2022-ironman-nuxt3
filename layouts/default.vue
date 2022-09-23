<template>
  <div class="bg-sky-100 py-2">
    <p class="px-6 py-4 text-2xl text-gray-700">這是預設的布局，全部頁面都會使用到</p>
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </div>
</template>

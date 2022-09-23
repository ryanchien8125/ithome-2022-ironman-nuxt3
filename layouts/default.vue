<template>
  <div>
    <header class="m-4 rounded border-gray-200 bg-gray-50 p-3">
      <div class="container mx-auto flex flex-wrap items-center justify-center md:justify-between">
        <NuxtLink to="/" class="flex items-center">
          <span class="self-center whitespace-nowrap text-xl font-semibold text-sky-500"
            >Nuxt 3 學習筆記</span
          >
        </NuxtLink>
        <div class="hidden w-full md:block md:w-auto">
          <span class="text-slate-600">Ryan</span>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>

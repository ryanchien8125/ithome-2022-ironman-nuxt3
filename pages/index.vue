<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex flex-col space-y-4">
        <NuxtLink to="/count">前往 /count</NuxtLink>
        <NuxtLink to="/random">前往 /random</NuxtLink>
        <NuxtLink to="/counter/increment">前往 /counter/increment</NuxtLink>
        <NuxtLink to="/counter/surprise">前往 /counter/surprise</NuxtLink>
      </div>
    </div>
  </div>
</template>

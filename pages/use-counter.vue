<template>
  <div class="flex flex-col items-center">
    <span class="mt-8 text-4xl text-gray-700">{{ count }}</span>
    <button
      class="my-6 rounded-sm bg-sky-600 px-4 py-2 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
      @click="increment"
    >
      增加 1
    </button>
  </div>
</template>

<script setup>
const { count, increment } = useCounter()
</script>

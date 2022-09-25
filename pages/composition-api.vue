<template>
  <div class="flex flex-col items-center">
    <span class="mt-8 text-4xl text-gray-700">{{ count }}</span>
    <button
      class="my-6 rounded-sm bg-blue-600 py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      @click="increment"
    >
      增加 1
    </button>
    <span class="mt-8 text-4xl text-gray-700">{{ doubleCount }}</span>
    <button
      class="my-6 rounded-sm bg-blue-600 py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      @click="incrementByTwo"
    >
      增加 2
    </button>
  </div>
</template>

<script setup>
const count = ref(0)
const increment = () => {
  count.value += 1
}

const doubleCount = ref(0)
const incrementByTwo = () => {
  doubleCount.value += 2
}
</script>

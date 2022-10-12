<template>
  <button
    type="button"
    class="inline-flex items-center rounded-md border border-transparent bg-orange-100 px-8 py-4 text-xl font-medium text-orange-700 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    @click="onClick"
  >
    OOPS!
  </button>
</template>

<script setup>
const onClick = () => {
  throw new Error('由 ButtonOOPS 元件，拋出一個錯誤！')
}
</script>

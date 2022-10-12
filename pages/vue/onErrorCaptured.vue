<template>
  <div class="flex flex-col items-center bg-white py-24">
    <ButtonOOPS />
    <div class="mt-4 text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { onErrorCaptured } from 'vue'

const errorMessage = ref()

onErrorCaptured((err) => {
  console.error('[捕獲錯誤]', err.message)
  errorMessage.value = err.message

  return false
})
</script>

<template>
  <div class="flex flex-col items-center bg-white py-24">
    <ButtonOOPS />
  </div>
</template>

<script setup>
import { onErrorCaptured } from 'vue'

onErrorCaptured((err) => {
  console.error('[捕獲錯誤]', err.message)

  throw createError({
    statusCode: 400,
    statusMessage: 'Bad Request',
    fatal: true
  })
})
</script>

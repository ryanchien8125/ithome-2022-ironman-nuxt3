<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <span class="text-9xl font-semibold text-sky-400">{{ count }}</span>
    </div>
  </div>
</template>

<script setup>
const count = ref(Math.round(Math.random() * 1000))
</script>

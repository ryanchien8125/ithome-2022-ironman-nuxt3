<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <span class="text-9xl font-semibold text-emerald-400">{{ color }}</span>
    </div>
  </div>
</template>

<script setup>
const color = useColor()
</script>

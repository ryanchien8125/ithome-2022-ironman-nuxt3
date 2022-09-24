<template>
  <div class="flex flex-col items-center">
    <div class="mt-8 flex items-center">
      <input
        id="show-button"
        v-model="useRound"
        name="show-button"
        type="checkbox"
        class="h-5 w-5"
      />
      <label for="show-button" class="ml-2 block text-base text-slate-800">使用圓角按鈕</label>
    </div>
    <component :is="useRound ? RoundButton : BaseButton" />
  </div>
</template>

<script setup>
const useRound = ref(false)
const BaseButton = resolveComponent('BaseApplyButton')
const RoundButton = resolveComponent('RoundApplyButton')
</script>

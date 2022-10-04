<template>
  <div class="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
      <div class="flex flex-col items-center">
        <Icon name="logos:nuxt-icon" size="80" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700">
          登入你的帳號
        </h2>
      </div>

      <div class="mt-4 flex justify-center">
        <ClientOnly>
          <GoogleLogin :callback="callback"/>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
import { googleOneTap } from "vue3-google-login"

const callback = (response) => {
  console.log(response)
}

onMounted(() => {
  googleOneTap()
    .then(callback)
    .catch((error) => {
      console.error(error)
    })
})
</script>

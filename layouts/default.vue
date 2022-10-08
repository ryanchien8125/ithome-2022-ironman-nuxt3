<template>
  <div>
    <header class="flex w-full justify-center">
      <nav class="flex w-full max-w-7xl items-center justify-between py-2 px-6">
        <div>
          <a aria-label="TailwindBlog" href="/">
            <div class="flex items-center justify-between">
              <div class="mr-3">
                <Icon class="h-12 w-12" name="logos:nuxt-icon" />
              </div>
              <div class="hidden h-6 text-2xl font-semibold text-gray-700 sm:block">
                Nuxt 3 Blog
              </div>
            </div>
          </a>
        </div>
        <div class="flex items-center text-base leading-5">
          <div class="flex flex-row items-center">
            <NuxtLink
              class="px-3 py-2 text-gray-700 transition hover:text-emerald-500"
              to="/articles"
            >
              文章
            </NuxtLink>
            <ClientOnly>
              <NavigationBarAvatarMenu v-if="userProfile.id" />
              <NuxtLink
                v-else
                class="px-3 py-2 text-gray-700 transition hover:text-emerald-500"
                to="/login"
              >
                登入
              </NuxtLink>
            </ClientOnly>
          </div>
        </div>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const userProfile = computed(() => userStore.profile)
</script>

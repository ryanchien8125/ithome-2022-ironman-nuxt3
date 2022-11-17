<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="text-gray-700 transition hover:text-emerald-500">
        <Icon class="h-5 w-5" name="heroicons-solid:language" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem  v-for="localeItem in locales" v-slot="{ active }" :key="localeItem.code">
            <button
              :class="[
                active ? 'bg-emerald-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm'
              ]"
              @click="setLocale(localeItem.code)"
            >
              <Icon
                name="icon-park-outline:chinese-one"
                :active="active"
                class="mr-2 h-5 w-5 text-emerald-400"
                aria-hidden="true"
              />
              {{ localeItem.name }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'
const { locales, setLocale } = useI18n()
</script>

<template>
  <transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div class="p-4">
        <div class="flex items-start">
          <div class="h-6 w-6">
            <Icon
              v-if="notification.type === 'info'"
              class="h-full w-full text-blue-600"
              name="ri:information-line"
            />
            <Icon
              v-else-if="notification.type === 'success'"
              class="h-full w-full text-green-600"
              name="ri:checkbox-circle-line"
            />
            <Icon
              v-else-if="notification.type === 'error'"
              class="h-full w-full text-red-600"
              name="ri:error-warning-line"
            />
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">
              {{ notification.title }}
            </p>
            <p class="mt-1 text-sm text-gray-500">
              {{ notification.message }}
            </p>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              @click="removeNotification"
            >
              <span class="sr-only">Close</span>
              <Icon name="ri:close-line" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const { remove } = useNotification()
const show = ref(true)

const props = defineProps({
  notification: {
    type: Object,
    required: true
  }
})

const removeNotification = () => {
  show.value = false
  remove(props.notification.id)
}

const removeTimer = setTimeout(() => {
  removeNotification()
}, props.notification.removeTimeout)

onBeforeUnmount(() => {
  clearTimeout(removeTimer)
})
</script>

<template>
  <div>
    <h1>{{ data.year }} {{ data.title }} - {{ data.name }}</h1>
  </div>
</template>

<script lang="ts" setup>
interface Data {
  year: number
  title: string
  name: string
}

const data: Data = {
  year: 2022,
  title: 'iThome 鐵人賽',
  name: 'Ryan'
}
</script>

<script setup lang="ts">
import { useToggle, useDark } from '@vueuse/core'

const isDark = useDark()
console.log(isDark)
const toggleDark = useToggle(isDark)
</script>

<template>
  <br>
  <el-switch
      v-model="isDark"
      active-text="黑夜"
      inactive-text="白天"
      @change="toggleDark"
  />
  <br>
  {{isDark ? 'Dark' : 'Light'}}
home
</template>

<style scoped>

</style>

<script setup lang="ts">
import {useTheme} from '@/composables'

const {isDark, toggleDark} = useTheme()

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
  <div>

    {{isDark ? 'Dark' : 'Light'}}
  </div>
home
</template>

<style scoped lang="scss">
div {
  color: $brand-color;
}
</style>

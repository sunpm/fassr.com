<script setup lang="ts">
import {ref} from "vue"

const input1 = ref('')
</script>

<template>
  <div class="search">
    <el-input
        v-model="input1"
        placeholder="Please Input"
    />
  </div>
</template>

<style scoped lang="scss">
.search {
  width: 200px;
}
</style>

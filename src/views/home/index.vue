<script setup lang="ts">
import CategoryNav from '@/components/common/CategoryNav.vue'
// import {login} from '@/api'
//
// login()

</script>

<template>
  <div class="container flex">
    <CategoryNav />
    <div class="box flex-item container-box"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  align-items: start;
  .box {
    margin: 0 $box-margin;
  }
}
</style>

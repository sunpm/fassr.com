<script setup lang="ts">

</script>

<template>
  <main class="main">

    <!--<router-link to="/">
      <el-button>Go to Home</el-button>
    </router-link>
    <router-link to="/post">
      <el-button>Go to Post</el-button>
    </router-link>-->
    <router-view/>
  </main>
</template>

<style scoped lang="scss">
.main {
  padding-top: $navbar-height + 20px;
  width: $body-width;
  margin: auto;
}
</style>

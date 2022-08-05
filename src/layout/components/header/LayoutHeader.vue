<script setup lang="ts">
import SwitchTheme from './SwitchTheme.vue'
</script>

<template>
  <header class="header">
    <div class="header-container flex">
      <div class="logo-container flex-center">
        <router-link to="/">
          <img class="logo" src="https://element-plus.gitee.io/images/element-plus-logo.svg" alt="Element Plus Logo">
        </router-link>
      </div>
      <div class="content">
        <SwitchTheme />
      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
  z-index: $z-index-top;
  .header-container {
    padding: $navbar-padding;
    height: $navbar-height;
    border-bottom: 1px solid $border-color;
    background-image: radial-gradient(transparent 1px,$bg-color 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);

    .logo-container {
      height: 100%;
      > a {
        height: 28px;
        width: 128px;

        .logo {
          height: 100%;
        }
      }
    }
  }
}
</style>

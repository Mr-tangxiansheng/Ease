<template>
  <div class="toolbar">
    <Logo />
    <User />
  </div>
</template>

<script setup lang="ts">
import Logo from '../Logo/index.vue';
import User from '../User/index.vue'
</script>

<style lang="less" scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
</style>
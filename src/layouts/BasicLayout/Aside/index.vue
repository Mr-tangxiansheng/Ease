<template>
  <div style="height: 100%;">
    <el-aside width="200px" style="height: 100%;">
      <el-scrollbar>
        <el-menu :default-active="activeRoute" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/home">
            <el-icon>
              <i-ep-setting />
            </el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <i-ep-location />
              </el-icon>
              <span>菜单</span>
            </template>
            <el-menu-item index="/content">内容</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const activeRoute = computed(()=>{
  return route.path
})
</script>

<style lang="less" scoped>
:deep(.el-scrollbar__view) {
  height: 100%;

  .el-menu {
    height: 100%;
  }
}
</style>
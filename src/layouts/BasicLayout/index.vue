<template>
  <div class="common-layout">
    <el-container style="height: 100%;">
      <el-header>
        <Header />
      </el-header>
      <el-container style="height: calc(100% - 60px)">
        <Aside />
        <el-container>
          <el-main>
            <el-scrollbar>
              <router-view />
            </el-scrollbar>
          </el-main>
          <el-footer>
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Aside from './Aside/index.vue';
import Header from './Header/index.vue';
import Footer from './Footer/index.vue';
</script>

<style lang="less" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
}

.el-container {

  .el-header {
    background-color: #CCCCFF;
    padding: 0;
  }

  .el-footer {
    padding: 0;
  }

}

.el-aside {
  height: 100%;

  .el-menu {
    height: 100%;
  }
}
</style>
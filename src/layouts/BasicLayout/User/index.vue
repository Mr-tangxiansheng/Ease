<template>
  <div class="user">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon style="margin-right: 8px; margin-top: 1px">
          <i-ep-setting />
        </el-icon>
        用户名称
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.user{
  display:flex;
  padding-right: 20px;
  .el-dropdown{
    margin: auto;
  }
}
</style>
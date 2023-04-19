<template>
  <div class="page">
    <el-button @click="ElMessage('hello')">button</el-button>
    <ElButton type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
  .page {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
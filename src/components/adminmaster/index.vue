<template>
  <el-container class="layout">
    <el-header class="header" style="height:80px">
      
      <p>爱宠邦后台管理系统</p>
    </el-header>
    <el-container>
      <el-aside width="160px" class="menu">Aside</el-aside>
      <el-container class="mid">
        <el-main class="content">Main</el-main>
        <el-footer class="footer" style="height:40px">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style scoped>
  .layout {
    height: 100%;
  }

  .header {
    display: flex;
    align-items: center;
    height: 80px;
    background: #08a3ba;
    color: white;
    font-size: 18px;
  }

  .mid {
    /* height: 100%; */

  }

  .menu {
    background-color: #283540;
  }

  .footer {
    height: 40px;
    background-color: #232a2d;
    color: #888888;
  }

  .content {
    height: 100%;
    background-color: #f8f8f8;
  }
</style>
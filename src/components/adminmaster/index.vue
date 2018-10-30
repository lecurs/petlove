<template>
  <el-container class="layout">
    <el-header class="header" style="height:80px">
      <div class="headerLeft">
        <i class="iconfont icon-chongwu logo"></i>
        <p>爱宠邦后台管理系统</p>
      </div>
      <div class="headerRight">
        <p class="eachLog">
          <i class="iconfont icon-ai-user rightIcon"></i>
          <i class="headertext">admin</i>
        </p>
        <p class="eachLog">
          <i class="iconfont icon-tuichu1 rightIcon"></i>
          <i class="headertext">退出</i>
        </p>
      </div>
    </el-header>
    <el-container>
      <el-aside width="202px" class="menu">
        <el-menu :default-active="path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-zhanghu menuIcon"></i>
              <span class="menuText">账户管理</span>
            </template>
            <el-menu-item index="/adminmaster/adminaccount">平台账户管理</el-menu-item>
            <el-menu-item index="/adminmaster/userAccount">商家账户管理</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-shenpiguanli menuIcon"></i>
              <span class="menuText">信息审核</span>
            </template>
            <el-menu-item index="/adminmaster/userAudit">用户审核</el-menu-item>
            <el-menu-item index="/adminmaster/storeAudit">门店审核</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont icon-suppliergroup menuIcon"></i>
              <span class="menuText">供应商管理</span>
            </template>
            <el-menu-item index="3-1">用户审核</el-menu-item>
            <el-menu-item index="3-2">门店审核</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont icon-kehutuijian menuIcon"></i>
              <span class="menuText">宠主管理</span>
            </template>
            <el-menu-item index="/adminmaster/petMaster">宠主管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="mid">
        <el-main class="content">
         <router-view></router-view>
        </el-main>
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
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
      path() {
        return this.$router.history.current.path
      }
    },
  };
</script>

<style scoped>
  .layout {
    height: 100%;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background: #08a3ba;
    color: white;
    font-size: 22px;
  }

  .logo {
    font-size: 32px;
    color: white;
    margin-right: 10px;
  }

  .headerLeft {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .headerRight {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
  }

  .rightIcon {
    font-size: 20px;
  }

  .headertext {
    font-size: 16px;
    font-style: normal;
  }

  .eachLog {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    border-left: 1px solid rgba(80, 80, 80, 0.123);
  }

  .menuIcon {
    font-size: 18px;
    color: white;
    margin-right: 5px;
  }

  .menuText {
    font-size: 16px;
  }

  .el-menu-vertical-demo {
    text-align: left;
  }

  .mid {
    /* height: 100%; */

  }

  .menu {
    background-color: #283540;
    overflow: hidden;
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
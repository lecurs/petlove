<template>
<el-container class="layout">
  <el-header class="header" height="80px">
      <div class="headerLeft">
        <i class="iconfont pl-chongwu logo"></i>
        <p>爱宠邦后台管理系统</p>
      </div>
       <div class="headerRight">
        <p class="eachLog">
          <i class="iconfont pl-userman2 rightIcon"></i>
          <i class="headertext">admin</i>
        </p>
        <p class="eachLog">
          <i class="iconfont pl-tuichu rightIcon"></i>
          <i class="headertext">退出</i>
        </p>
      </div>
      </el-header>
  <el-container>
    <el-aside width="20%" class="menu">
        <el-menu
      :default-active="path"
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
                <i class="iconfont pl-shop menuIcon"></i>
                <span slot="title" class="menuText">我的门店</span>
            </template>
            <el-menu-item :index="'/sellerManage/myStore?id='+store._id" :key="store._id" v-for="store in stores" :store="store">{{store.name}}</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="iconfont pl-weibiaoti-- menuIcon"></i>
                <span slot="title" class="menuText">管理中心</span>
            </template>
            <el-menu-item index="/sellerManage/manageCenter">个人信息</el-menu-item>
            <el-menu-item index="/adminmaster/storeAudit">门店管理</el-menu-item>
        </el-submenu>
    </el-menu>
    </el-aside>
   <el-container >
        <el-main class="content">
         <router-view></router-view>
        </el-main>
        <el-footer class="footer" style="height:40px">Footer</el-footer>
      </el-container>
  </el-container>
</el-container>
</template>

<script>
// import MyStores from "../myStores";
import ManageCenter from "../manageCenter";
import { mapState, mapActions } from "vuex";

export default {
  data: function() {
    return {};
  },
  created: function() {
    this.showStores({ id: "5bd2df1626178522cd53fe9c" });
  },
  methods: {
    ...mapActions(["showStores"])
  },
  computed: {
    path() {
      return this.$router.history.current.path;
    },
    ...mapState(["stores"])
  },
  components: {
    // MyStores,
    ManageCenter
  }
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

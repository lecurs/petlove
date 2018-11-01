<template>
    <el-container class="box">
        <el-header class="headers">管理系统</el-header>
        <el-container>
            <el-aside class="asides" width="200px"> 
                <el-menu default-active="path" :router="true" class="menu"  
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">门店列表</template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="/system">
                        <template slot="title">管理中心</template>
                        <el-menu-item-group>
                        <el-menu-item index="/system/stores">用户管理</el-menu-item>
                        <el-menu-item index="/system/stores">店铺管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>     
                </el-menu>
            </el-aside>
            <el-main class="mains">
                 <router-view/>
            </el-main>
        </el-container>
</el-container>
</template>
<script>
    export default{
        data(){
            // console.log(this.$router) 
            return{}
        },
        methods:{},
        computed:{
            path(){
                return this.$router.history.current.path;
            }
        },
        components:{}
    }
</script>
<style scoped>
.box{
    height:100%;
}
.headers{
   background: #0099cc;
   height:100px !important;
   text-align: center;
   line-height: 100px;
   font-size:30px; 
}
.asides{
    background: #545c64;
}
.mains{
    background: white;
}
</style>
<template>
     <el-table
      :data="students"
      border
      style="width: 100%">
      <el-table-column
        prop="users"
        label="登录名"
        >
      </el-table-column>
      <el-table-column
        prop="pwd"
        label="密码"
        >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号">
      </el-table-column>
        <el-table-column
        prop="role"
        label="角色">
      </el-table-column>
         <el-table-column
        prop="privilege"
        label="状态">
      </el-table-column>
      <el-table-column
        label="操作">
         <template slot-scope="scope">
        <el-button size="mini" @click="update(scope.row._id)">
             <i class="el-icon-edit"></i>
            修改</el-button>
        <el-button size="mini" type="danger" @click="remove(scope.row._id)">
            <i class="el-icon-delete"></i>
            删除</el-button>
      </template>
      </el-table-column>
    </el-table>
</template>
<script>
import {mapState,mapActions} from 'vuex';
import axios from 'axios';
    export default{
        data(){
            return{}
        },
        created() {
            this.setStudents();
        },
        methods:{
            update(id){
                this.$emit("update:updateVisible",true)
                this.setStudent(id);
            },
            remove(id){
                axios({
                    url:'/liufei/'+id,
                    method:'delete'
                }).then((response)=>{
                    this.setStudents({page:this.pagination.curpage});
                })
            },
            ...mapActions(["setStudents","setStudent"])
        },
        computed:{
        ...mapState(['students','pagination'])
        },
        components:{}
    }
</script>
<style scoped>

</style>
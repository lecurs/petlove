<template>
    <div style="margin-bottom: 20px;text-align:left">
        <label for="">用户类别：</label>
        <el-radio-group v-model="passed" size="small" @change="changeType">
             <el-radio-button label="">全部</el-radio-button>
            <el-radio-button label="1">正常</el-radio-button>
            <el-radio-button label="0">待审核</el-radio-button>
            <el-radio-button label="-1">已停用</el-radio-button>
        </el-radio-group>
    </div>
</template>
<script>
 import {
        createNamespacedHelpers
    } from 'vuex';
    const {
        mapState,
        mapActions,
        mapMutations
    } = createNamespacedHelpers('UsersAccount')
    export default {
        data() {
            return {
                passed:''
            }
        },
        methods: {
            ...mapActions(['getUsers']),
            changeType(){
                console.log('====================================');
                console.log(this.passed);
                console.log('====================================');
                this.getUsers({passed:this.passed});
            }
        }
    }
</script>
<style scoped>

</style>
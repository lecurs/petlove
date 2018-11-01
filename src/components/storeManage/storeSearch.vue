<template>
    <div class="outEle">
        <div class="input">
            <label for="" class="label">用户名：</label>
            <el-input type="text" v-model="name" placeholder="请输入店铺名" size="small" autocomplete="off"></el-input>
        </div>
        <el-button type="primary" size="small" icon="el-icon-search" class="btn" @click="search">查询</el-button>
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
    } = createNamespacedHelpers('StoreManage');
    export default {
        data() {
            return {
                name: ''
            };
        },
        methods: {
            ...mapActions(['getAllStores']),
            search() {
            
                this.getAllStores({name:this.name});
            }
        }
    }
</script>

<style scoped>
    .outEle {
        display: flex;
        align-items: center;

    }

    .el-form-item {
        margin-bottom: 0px;
    }

    .input {
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .label{
        width: 80px;
        font-size: 14px;
    }

    .btn {
        margin-left: 10px;
    }
</style>
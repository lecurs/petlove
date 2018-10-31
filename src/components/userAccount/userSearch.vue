<template>
    <div class="outEle">
        <div class="input">
            <label for="" class="label">用户名：</label>
            <el-input type="text" v-model="user" size="small"  placeholder="请输入用户名" autocomplete="off"></el-input>
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
    } = createNamespacedHelpers('UsersAccount');
    export default {
        data() {
            return {
                user: ''
            };
        },
        methods: {
            ...mapActions(['getUsers']),
            search() {
            
                this.getUsers({user:this.user});

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
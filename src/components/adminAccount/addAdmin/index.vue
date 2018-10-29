<template>
    <div>
        <el-button class="addbtn" type="primary" @click="dialogFormVisible = true" size="small">新增平台管理员</el-button>
        <el-dialog title="新增平台管理员" :visible.sync="dialogFormVisible" width="35%">
            <el-form :model="add" status-icon ref="addwin" label-width="60px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="user">
                    <el-input type="text" v-model="add.user" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                    <el-input type="text" v-model="add.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input type="text" v-model="add.pwd" autocomplete="off"></el-input>
                </el-form-item>

            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="ok" size="small">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import axios from "axios";
    import {
        createNamespacedHelpers
    } from 'vuex';
    const {
        mapState,
        mapActions
    } = createNamespacedHelpers('AdminAccount')
    export default {
        data() {
            return {
                dialogTableVisible: false,
                dialogFormVisible: false,
                add: {
                    user: "",
                    phone: "",
                    pwd: "",
                    passed: ""
                },

                dialogVisible: false
            };
        },

        computed: {
            ...mapState(["pagenation"]),

        },
        methods: {
            ...mapActions(['addAdminUser']),
            ok() {
                this.addAdminUser({
                    user: this.add.user,
                    phone: this.add.phone,
                    pwd: this.add.pwd
                });
                this.dialogFormVisible = false;
            },
            cancel() {
                this.add.user = "";
                this.add.phone = "";
                this.add.pwd = "";
            },

        },
        components: {}
    };
</script>

<style scoped>
    .demo-ruleForm {
        margin: auto;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    .addbtn {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /* margin-bottom: 20px; */
    }
</style>
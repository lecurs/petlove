<template>
    <div>
        <el-dialog title="修改管理员信息" :visible="updateVisible" @update:visible="cancel" width="35%">
            <el-form :model="updateAdminUser" status-icon ref="updatewin" label-width="60px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="user">
                    <el-input type="text" v-model="updateAdminUser.user" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input type="text" v-model="updateAdminUser.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input type="text" v-model="updateAdminUser.pwd" autocomplete="off"></el-input>
                </el-form-item>
                <div style="margin-top: 20px">
                    <el-form-item label="状态" prop="passed">
                        <el-radio-group v-model="updateAdminUser.passed" size="small">
                            <el-radio-button label="1">
                                <slot>正常</slot>
                            </el-radio-button>
                            <el-radio-button label="0">未激活</el-radio-button>
                            <el-radio-button label="-1">停用</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel" size="small">取 消</el-button>
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
        mapActions,
        mapMutations,
    } = createNamespacedHelpers('AdminAccount')
    export default {
        data() {
            return {

            };
        },
        computed: {
            ...mapState(["updateAdminUser", "updateVisible", 'adminUserPageation']),

        },
        methods: {
            ...mapActions(["getAdminUsers", 'subUpdateAdminUser']),
            ...mapMutations(["setUpdateVisible"]),
            ok: function () {
                console.log(this.updateAdminUser);
                this.subUpdateAdminUser(this.updateAdminUser);
                this.setUpdateVisible(false)
            },
            cancel() {
                this.setUpdateVisible(false);
            },

        },
        created() {

        },

    };
</script>

<style scoped>
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
        margin: auto;
    }

    .avatar-uploader {
        margin-top: 10px;
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
</style>
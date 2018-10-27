<template>
    <div>
        <el-table border :data="adminUser" style="width: 100% ;text-align:center" :row-class-name="tableRowClassName">
            <el-table-column prop="user" label="用户名" width="180" align="center">
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="180" align="center">
            </el-table-column>
            <el-table-column prop="pwd" label="密码" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination background layout="prev, pager, next" :total="adminUserPageation.total" :page-size="adminUserPageation.eachpage"
                @current-change="changeCurPage">
            </el-pagination>
        </div>
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

            }
        },
        computed: {
            ...mapState(["adminUser", "adminUserPageation"])
        },
        methods: {
            ...mapActions(["getAdminUsers","removeAdminUser"]),
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (row.passed == 1) {
                    return 'success-row';
                } else {
                    return 'warning-row';
                }
            },
            changeCurPage(page) {
                this.getAdminUsers({
                    page: page,
                    rows: this.adminUserPageation.eachpage
                })

            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
                this.removeAdminUser({_id:row._id})
            }
        },
        created() {
            this.getAdminUsers();
        },
    }
</script>

<style scoped>
    .el-table .warning-row {
        background: rgb(255, 224, 206);
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .page {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 10px;
    }
</style>
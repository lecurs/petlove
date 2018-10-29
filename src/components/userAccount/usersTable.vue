<template>
    <div>
        <el-table ref="multipleTable" border :data="users" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"
            :row-style="rowClass">
            <el-table-column type="selection" width="60" align="center">
            </el-table-column>
            <el-table-column prop="user" label="用户名" width="250" align="center">
            </el-table-column>
            <el-table-column prop="phone" label="手机号" width="250" align="center">
            </el-table-column>
            <el-table-column prop="name" label="状态" width="250" :formatter="formatter" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                </template>
            </el-table-column>
        </el-table>
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

            }
        },
        computed: {
            ...mapState(['users']),
        },
        methods: {
            ...mapActions(['getUsers']),
            rowClass({
                row,
                rowIndex
            }) {
                console.log(row);
                if (row.passed == 0) {
                    return {
                        "background-color": "#f0f9eb"
                    }
                }else if(row.passed == -1){
                     return {
                        "background-color": "oldlace"
                    }
                }
            },
            
            formatter(row, column) {
                if (row.passed == "1") {
                    return "正常"
                } else if (row.passed == "0") {
                    return "未激活"
                } else {
                    return "已停用"
                }
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleEdit(index, row) {},

        },
        created() {
            this.getUsers();
        },

    }
</script>

<style scoped>
    .el-table .warning-row {
        background: rgb(248, 87, 87);
    }

    .el-table .success-row {
        background: #fae7ed;
    }
</style>
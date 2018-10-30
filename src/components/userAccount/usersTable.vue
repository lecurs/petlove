<template>
    <div>
        <el-table ref="multipleTable" border :header-cell-style="{background:'#08a2ba',color:'white'}" :data="users" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"
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
                    <el-button v-if='scope.row.passed==-1' size="mini" type="success" @click="actionChange(scope.$index, scope.row)">启用</el-button>
                    <el-button v-if='scope.row.passed==1' size="mini" type="danger" @click="actionChange(scope.$index, scope.row)">禁用</el-button>
                    <el-button v-if='scope.row.passed==0' size="mini" type="info" @click="actionChange(scope.$index, scope.row)">审核</el-button>
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
    } = createNamespacedHelpers('UsersAccount');
    export default {
        data() {
            return {
                active: 'true',
                radio: ''
            }
        },
        computed: {
            ...mapState(['users']),
        },
        methods: {
            ...mapActions(['getUsers', 'updateUser']),

            rowClass({
                row,
                rowIndex
            }) {
                if (row.passed == 0) {
                    return {
                        "background-color": "#f0f9eb"
                    }
                } else if (row.passed == -1) {
                    return {
                        "background-color": "oldlace"
                    }
                }
            },

            formatter(row, column) {
                if (row.passed == "1") {
                    return "正常"
                } else if (row.passed == "0") {
                    return "待审核"
                } else if (row.passed == "-1") {
                    return "已禁用"
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

            actionChange(index, row) {
                console.log(this.radio);
                if (row.passed == '0') {
                     this.$router.push("/adminmaster/userAudit");

                } else if (row.passed == '-1') {
                    row.passed = '1'
                } else if (row.passed == '1') {
                    row.passed = '-1'
                }
                console.log("change", row);
                this.updateUser({
                    row
                })
            },
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
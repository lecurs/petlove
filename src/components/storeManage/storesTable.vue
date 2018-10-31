<template>
    <el-table :data="allStores" border :header-cell-style="{background:'#08a2ba',color:'white'}" stripe style="width: 100%;margin-top:20px">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="营业执照">
                        <span>{{ props.row.licenseCode }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址：">
                        <span>{{ props.row.location }}</span>
                    </el-form-item>
                    <el-form-item label="店主：">
                        <span>{{ props.row.legalPerson }}</span>
                    </el-form-item>
                    <el-form-item label="佣金比例：">
                        <span>{{ props.row.rate }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column label="店名:" prop="name">
        </el-table-column>
        <el-table-column label="电话:" prop="phone">
        </el-table-column>
        <el-table-column label="地址：" prop="address">
        </el-table-column>
        <el-table-column prop="passed" label="状态" width="250" :formatter="formatter" align="center">
        </el-table-column>
        <el-table-column label="管理">
            <template slot-scope="scope">
                <el-button v-if='scope.row.passed==-1' size="mini" type="success" @click="actionChange(scope.$index, scope.row)">启用</el-button>
                <el-button v-if='scope.row.passed==1' size="mini" type="danger" @click="actionChange(scope.$index, scope.row)">禁用</el-button>
                <el-button v-if='scope.row.passed==0' size="mini" type="info" @click="actionChange(scope.$index, scope.row)">审核</el-button>
            </template>
        </el-table-column>
    </el-table>
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
                active: 'true',
                radio: ''
            }
        },
        computed: {
            ...mapState(['allStores']),
        },
        methods: {
            ...mapActions(['getAllStores','updateStore' ]),
            formatter(row, column) {
                if (row.passed == "1") {
                    return "正常"
                } else if (row.passed == "0") {
                    return "待审核"
                } else if (row.passed == "-1") {
                    return "已关闭"
                }
            },
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
                    return "已关闭"
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
                    this.$router.push("/adminmaster/storeAudit");

                } else if (row.passed == '-1') {
                    row.passed = '1'
                } else if (row.passed == '1') {
                    row.passed = '-1'
                }
                this.updateStore({
                    row
                });

            },
        },
        created() {},

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
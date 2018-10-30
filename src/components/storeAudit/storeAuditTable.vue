<template>
    <div>
        <el-table ref="singleTable" :header-cell-style="{background:'#08a2ba',color:'white'}" border :data="storeApplicationDate" highlight-current-row @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column type="index" width="80" label="序号" align="center">
            </el-table-column>
            <el-table-column property="time" label="申请时间" width="250" align="center">
            </el-table-column>
            <el-table-column label="申请类型" width="250" align="center">
                <template slot-scope="scope">
                    <el-tag type="success" v-if="scope.row.content.type=='add'">新增</el-tag>
                    <el-tag type="warning" v-if="scope.row.content.type=='update'">修改</el-tag>
                </template>
            </el-table-column>
            <el-table-column property="content.workId" label="UserId" align="center">
            </el-table-column>
            <el-table-column label="处理" align="center" width="250">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" plain @click="info(scope.row)">详情</el-button>
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
    } = createNamespacedHelpers('StoreAudit');
    export default {
        data() {
            return {

                currentRow: null
            }
        },
        computed: {
            ...mapState(['storeApplicationDate', 'storeApplicationPagenetion'])
        },

        methods: {
            ...mapActions(['getApplications']),
            ...mapMutations(['setauditWinVisible','setApplicationContent']),
            typeformatter(row, rowIndex) {
                if (row.content.type == "add") {
                    return "新增"
                } else if (row.content.type == "update") {
                    return "修改"
                }
            },
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row);
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            info(row, rowIndex) {
                this.setauditWinVisible(true);
                this.setApplicationContent(row);
            }
        },
        created() {
            this.getApplications({
                source: "store"
            });

        }
    }
</script>
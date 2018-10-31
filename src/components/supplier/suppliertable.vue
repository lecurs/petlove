<template>
    <el-table :data="allSupplier" border :header-cell-style="{background:'#08a2ba',color:'white'}"  stripe style="width: 100%;margin-top:20px">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="发货时间：">
                        <span>{{ props.row.deliveryTime }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址：">
                        <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="结算方式：">
                        <span>{{ props.row.clearingform }}</span>
                    </el-form-item>
                    <el-form-item label="主营商品：">
                        <p v-for="(temp,key) in props.row.supplyScope" v-bind:key="key">
                            <span class="petSpan" >{{temp}}</span>
                        </p>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column label="供应商名称:" prop="name">
        </el-table-column>
        <el-table-column label="电话:" prop="phone">
        </el-table-column>
        <el-table-column label="地址：" prop="address">
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
    } = createNamespacedHelpers('Supplier');
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['allSupplier', 'supplierPagenation'])
        },
        methods: {
            petformatter(row, rowIndex) {
                console.log(row.pet);

            }
        }
    }
</script>

<style scoped>
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 100%;
    }

    .petSpan {
        margin-right: 5px;
    }
</style>
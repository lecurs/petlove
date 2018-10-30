<template>
    <el-table :data="allPetMaster" style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="姓名:">
                        <span>{{ props.row.realname }}</span>
                    </el-form-item>
                    <el-form-item label="送货地址:">
                        <span>{{ props.row.deliveryAddress }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址:">
                        <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="积分:">
                        <span>{{ props.row.integral }}</span>
                    </el-form-item>
                    <el-form-item label="宠物:">
                        <p v-for="temp in props.row.pet" v-bind:key="temp">
                            <span v-for="(pet,key) in temp" class="petSpan" v-bind:key="key">{{key}}：{{pet}}</span>
                        </p>


                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column label="昵称:" prop="petname">
        </el-table-column>
        <el-table-column label="电话:" prop="phone">
        </el-table-column>
        <el-table-column label="区域:" prop="area">
        </el-table-column>
    </el-table>
</template>

<script>
    import PetMasterTable from './petMasterTable';
    import axios from "axios";
    import {
        createNamespacedHelpers
    } from 'vuex';
    const {
        mapState,
        mapActions,
        mapMutations
    } = createNamespacedHelpers('PetMaster')
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['allPetMaster', 'allpetMasterPagenetion'])
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
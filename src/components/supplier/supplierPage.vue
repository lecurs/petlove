<template>
    <div class="page">
        <el-pagination background layout="prev, pager, next" :total="supplierPagenation.total" :page-size="supplierPagenation.eachpage"
            @current-change="changeCurPage">
        </el-pagination>
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
    } = createNamespacedHelpers('Supplier');
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['supplierPagenation'])
        },
        methods: {
            ...mapActions(["getAllSupplier"]),
            changeCurPage(page) {
                this.getAllSupplier({
                    page: page,
                    rows: this.supplierPagenation.eachpage
                })

            },
        },
    }
</script>

<style scoped>
    .page{
        text-align: right;
        margin-top: 10px;
    }
</style>

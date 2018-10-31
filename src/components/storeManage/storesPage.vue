<template>
    <div class="page">
        <el-pagination background layout="prev, pager, next" :total="allStoresPagenetion.total" :page-size="allStoresPagenetion.eachpage"
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
    } = createNamespacedHelpers('StoreManage');
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['allStoresPagenetion'])
        },
        methods: {
            ...mapActions(["getAllStores"]),
            changeCurPage(page) {
                this.getAllStores({
                    page: page,
                    rows: this.allStoresPagenetion.eachpage
                })

            },
        },
    }
</script>

<style scoped>
    .page {
        text-align: right;
        margin-top: 10px;
    }
</style>
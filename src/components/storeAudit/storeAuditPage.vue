<template>
    <div class="page">
        <el-pagination background layout="prev, pager, next" :total="storeApplicationPagenetion.total" :page-size="storeApplicationPagenetion.eachpage"
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
    } = createNamespacedHelpers('StoreAudit');
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['storeApplicationPagenetion'])
        },
        methods: {
            ...mapActions(["getApplications"]),
            changeCurPage(page) {
                this.getApplications({
                    page: page,
                    rows: this.storeApplicationPagenetion.eachpage
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

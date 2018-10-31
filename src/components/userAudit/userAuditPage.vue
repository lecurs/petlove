<template>
    <div class="page">
        <el-pagination background layout="prev, pager, next" :total="usersAuditPagenation.total" :page-size="usersAuditPagenation.eachpage"
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
    } = createNamespacedHelpers('UserAudit');
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['usersAuditPagenation'])
        },
        methods: {
            ...mapActions(["getApplications"]),
            changeCurPage(page) {
                this.getApplications({
                    page: page,
                    rows: this.usersAuditPagenation.eachpage
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

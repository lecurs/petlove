<template>
    <div class="page">
        <el-pagination background layout="prev, pager, next" :total="allpetMasterPagenetion.total" :page-size="allpetMasterPagenetion.eachpage"
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
    } = createNamespacedHelpers('PetMaster');
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['allpetMasterPagenetion'])
        },
        methods: {
            ...mapActions(["getAllPetMaster"]),
            changeCurPage(page) {
                this.getAllPetMaster({
                    page: page,
                    rows: this.adminUserPageation.eachpage
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

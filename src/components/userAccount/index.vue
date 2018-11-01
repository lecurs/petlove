<template>
    <div>
        <div class="toolbar">
            <UserType></UserType>
            <UserSearch></UserSearch>
        </div>
        <UsersTable></UsersTable>
        <div class="page">
            <el-pagination background layout="prev, pager, next" :total="usersPagenation.total" :page-size="usersPagenation.eachpage"
                @current-change="changeCurPage">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import UsersTable from "./usersTable";
    import UserType from "./userType";
    import UserSearch from "./userSearch.vue";
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

            }
        },
        computed: {
            ...mapState(['usersPagenation'])
        },
        methods: {
            ...mapActions(['getUsers']),
            changeCurPage(page) {
                this.getUsers({
                    page: page,
                    rows: this.usersPagenation.eachpage
                })

            },
        },
        components: {
            UsersTable,
            UserType,
            UserSearch
        }
    }
</script>

<style scoped>
    .page {
        text-align: right;
        margin-top: 10px;
    }
    .toolbar{
        width: 700px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
</style>
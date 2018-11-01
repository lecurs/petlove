<template>
    <div>
        <div>门店管理</div>
        <div class="toolbar">
            <StoreType></StoreType>
            <StoresSearch></StoresSearch>
        </div>
        <StoresTable></StoresTable>
        <StorePage></StorePage>
    </div>
</template>
<script>
    import StoresTable from "./storesTable";
    import StoreType from "./storeType.vue";
    import StorePage from "./storesPage.vue";
    import StoresSearch from "./storeSearch.vue";
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
            return {};
        },
        components: {
            StoresTable,
            StoreType,
            StorePage,
            StoresSearch
        },
        methods: {
            ...mapActions(['getAllStores'])
        },
        created() {
            this.getAllStores();
        }
    };
</script>
<style scoped>
    .toolbar {
        width: 700px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>
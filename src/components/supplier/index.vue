<template>
    <div>
        <div>供应商</div>
        <SupplierTable></SupplierTable>
        <SupplierPage></SupplierPage>
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
    import SupplierTable from "./suppliertable.vue";
    import SupplierPage from "./supplierPage.vue";
    export default {
        data() {
            return {

            }
        },
        methods: {
            ...mapActions(['getAllSupplier'])
        },
        components: {
            SupplierTable,SupplierPage
        },
        created() {
            this.getAllSupplier();
        }
    }
</script>
<style scoped>

</style>
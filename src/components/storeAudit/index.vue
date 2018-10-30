<template>
   <div>
        <div>门店审核</div>
    <StoreAuditTable></StoreAuditTable>
    <StoreAuditWin></StoreAuditWin>
   </div>
</template>

<script>
import StoreAuditTable from "./storeAuditTable";
import StoreAuditWin from "./storeAuditWin";
    export default {
        data() {
            return {

            }
        },
        components: {
            StoreAuditTable,StoreAuditWin
        }
    }
</script>

<style scoped>

</style>
<template>
   <div>
        <div>门店审核</div>
         <div>
            <p class="header">待审核信息：</p>
        </div>
    <StoreAuditTable></StoreAuditTable>
    <StoreAuditWin></StoreAuditWin>
    <StoreAuditPage></StoreAuditPage>
   </div>
</template>

<script>
import StoreAuditTable from "./storeAuditTable";
import StoreAuditWin from "./storeAuditWin";
import StoreAuditPage from "./storeAuditPage.vue";
    export default {
        data() {
            return {

            }
        },
        components: {
            StoreAuditTable,StoreAuditWin,StoreAuditPage
        }
    }
</script>

<style scoped>
.header{
    text-align: left;;
}
</style>
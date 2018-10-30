<template>
   <div>
        <div>用户信息审核</div>
        <div>
            <p class="header">待审核信息：</p>
        </div>
        <UserAuditTbale></UserAuditTbale>
        <auditWin></auditWin>
   </div>

</template>

<script>
import UserAuditTbale from "./userAuditTbale";
import auditWin from "./auditWin";
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
        methods: {
            ...mapActions(['getApplications']),
        },
        components: {
            UserAuditTbale,auditWin
        },
        created () {
            console.log(111);
            
            this.getApplications({source:"account"});
        }
    }
</script>

<style scoped>
.header{
    text-align: left;;
}
</style>
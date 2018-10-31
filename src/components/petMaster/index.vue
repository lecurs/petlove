<template>
    <div>
        <div>宠主</div>
        <PetMasterTable></PetMasterTable>
        <PetMasterPage></PetMasterPage>
    </div>
</template>

<script>
    import PetMasterTable from './petMasterTable';
    import PetMasterPage from "./petMasterPage.vue";
    import axios from "axios";
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
        components: {
            PetMasterTable,PetMasterPage
        },
        methods:{
            ...mapActions(['getAllPetMaster'])
        },
        created() {
            this.getAllPetMaster();
        }
    }
</script>

<style scoped>

</style>
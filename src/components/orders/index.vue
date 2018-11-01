<template>
    <div>
    <h1>订单管理</h1>
    <GoodsAdd />
    <OrdSearch />
    <div class="tou">
    <OrdTable :updateVisible.sync="updateVisible"/>
    <OrdUpdate :updateVisible.sync="updateVisible" />
    </div>
    <Page />
  </div>
</template>
<script>
import OrdTable from "./OrdTable";
import OrdUpdate from "./OrdUpdate";
import OrdSearch from "./OrdSearch";
import GoodsAdd from '../goodsAdd/goodsAdd.vue'
import Page from './Page'
import {createNamespacedHelpers} from "vuex";
const {mapState,mapActions} = createNamespacedHelpers("orders") 
export default {
  data() {
    return {
        updateVisible:false
    };
  },
  created() {
    this.setOrders();
    
  },
  methods: {
      ...mapActions(["setOrders"])
  },
  components:{
      OrdTable,OrdUpdate,Page,OrdSearch,GoodsAdd
  }

};
</script>

<style scoped>
</style>
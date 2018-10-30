<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-goods"></i>商品列表</span>
                <GoodsTable/>
             </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-service"></i>服务列表</span>
                <ServicesTable/>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i>订单列表</span>
                我的订单
            </el-tab-pane>
        </el-tabs>
    </div>  
</template>

<script>
import GoodsTable from "./GoodsTable.vue";
import ServicesTable from "./ServicesTable.vue";
import { mapState } from "vuex";
export default {
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState(["storeId"])
  },
  components: {GoodsTable,ServicesTable}
};
</script>

<style scoped>
</style>


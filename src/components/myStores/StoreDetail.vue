<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-goods"></i>商品列表</span>
                <div class="btns">
                    <AddGoods/>
                    <RemoveGoods/>
                </div>
                <GoodsTable :updateVisible.sync="updateVisible"/>
                <UpdateGoods :updateVisible.sync="updateVisible" />
             </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-service"></i>服务列表</span>
                 <div class="btns">
                    <AddServices/>
                    <RemoveServices/>
                </div>
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
import AddGoods from "./AddGoods.vue";
import RemoveGoods from "./RemoveGoods.vue";
import ServicesTable from "./ServicesTable.vue";
import AddServices from "./AddServices.vue";
import RemoveServices from "./RemoveServices.vue";
import UpdateGoods from "./UpdateGoods.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("XiongPlus");
export default {
  data: function() {
    return {
      updateVisible: false
    };
  },
  methods: {},
  computed: {
    ...mapState(["storeId"])
  },
  components: {
    GoodsTable,
    ServicesTable,
    AddGoods,
    RemoveGoods,
    AddServices,
    RemoveServices,
    UpdateGoods
  }
};
</script>

<style scoped>
.btns {
  width: 220px;
  display: flex;
  justify-content: space-between;
}
</style>


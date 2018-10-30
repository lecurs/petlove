<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-goods"></i>商品列表</span>
                我的行程
             </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-service"></i>服务列表</span>
                我的服务
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i>订单列表</span>
                我的订单
            </el-tab-pane>
        </el-tabs>
    </div>  
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data: function() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
</style>


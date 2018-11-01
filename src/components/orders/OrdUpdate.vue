<template>
    <el-dialog title="订单修改" :visible="updateVisible" @update:visible="$emit('updateVisible',$event)">
        <el-form>
            <!-- <el-form-item label="商品名称" :label-width="formLabelWidth">
            <el-input v-model="store.goodsName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="所属店铺" :label-width="formLabelWidth">
            <el-input v-model="store.storesName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品单号" :label-width="formLabelWidth">
             <el-input v-model="store.code" autocomplete="off"></el-input>
            </el-form-item> -->
            <el-form-item label="商品进度" :label-width="formLabelWidth">
             <el-radio-group v-model="order.state">
                <el-radio label="已完成"></el-radio>
                <el-radio label="未完成"></el-radio>
                
            </el-radio-group>
            </el-form-item>
            
            <el-form-item label="商品价格" :label-width="formLabelWidth">
             <el-input v-model="order.price" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="收货人" :label-width="formLabelWidth">
           
             <el-input v-model="order.consignee" autocomplete="off"></el-input>
             <el-input v-model="order.consignphone" autocomplete="off"></el-input>
             <el-input v-model="order.consignadr" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:updateVisible',false)">取 消</el-button>
            <el-button type="primary" @click="update(order.id)">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
import axios from "axios";
import {createNamespacedHelpers} from "vuex";
const {mapState,mapActions} = createNamespacedHelpers("orders") 
export default {
  props: ["updateVisible"],
  data() {
    
    return {
      formLabelWidth: "100px"
    };
  },
  methods: {
    update: function(id) {
        console.log(id)
     this.updateOrder({
         consignee:this.order.consignee,
         consignphone:this.order.consignphone,
         consignadr:this.order.consignadr,
         state:this.order.state,
         id
     })
      this.$emit("update:updateVisible", false);
    },
    
    
    
    ...mapActions(["setOrders", "addStore", "updateOrder"])
  },
  computed: {
    ...mapState(["order", "openflag"]),
    
  }
};
</script>
<style scoped>
    .el-radio-group{
        margin-left: -370px
    }
</style>

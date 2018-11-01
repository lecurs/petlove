<template>
    <div style="margin-top: 15px;">
  <el-input placeholder="请输入订单号" v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请输入订单号">
      <el-option label="订单号" value="code"></el-option>
      </el-select>
    
    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
  </el-input>
</div>
</template>
<script>
import {createNamespacedHelpers} from "vuex";
const {mapState,mapActions} = createNamespacedHelpers("orders") 
export default {
  data() {
    return {
      input5: "",
      select: "code"
    };
  },
  methods: {
    search: function() {
      console.log("select", this.select);
      console.log("input5", this.input5);
       this.setOrders({type:this.select,value:this.input5})
    },
    ...mapActions(["setOrders"])
  }
};
</script>
<style scoped>
.el-select {
  width: 130px;
}
.input-with-select {
  background-color: #fff;
  width:900px
}
</style>
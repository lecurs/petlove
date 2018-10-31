<template>
<div>
    <!-- {{stores[0]._id}} -->
    <el-table
    :data="orders"
    
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称:" v-if="props.row.type=='商品'">
            <span>{{props.row.goods.name }}</span>
          </el-form-item>
          <el-form-item label="商品名称:" v-if="props.row.type=='服务'">
            <span>{{props.row.services.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺:">
            <span>{{ props.row.stores.name }}</span>
          </el-form-item>
          <el-form-item label="商品单号:">
            <span>{{props.row.code}}</span>
          </el-form-item>

          <el-form-item label="商品进度:" >
            <span>{{props.row.state}}</span>
          </el-form-item>
          <el-form-item label="服务时间:" v-if="props.row.type=='服务'">
            <span>{{props.row.services.workTime[1]}}</span>
          </el-form-item>

          <el-form-item label="订单分类:" :key="store._id" v-if="props.row.type=='商品'" v-for="store in props.row.orders.goods">
            <span>{{ props.row.type }},</span>
            <span>{{ store.type }}</span>
          </el-form-item>
          <el-form-item label="订单分类:" :key="store._id" v-if="props.row.type=='服务'" v-for="store in props.row.orders.services">
            <span>{{ props.row.type }},</span>
            <span>{{ store.type }}</span>
          </el-form-item>
          <el-form-item label="店铺地址:">
            <span>{{ props.row.stores.adress }}</span>
          </el-form-item>
          <el-form-item label="商品描述:">
            <span>{{ props.row.content.context }}</span>
          </el-form-item>
          <el-form-item label="商品价格:" :key="store._id" v-if="props.row.type=='商品'" v-for="store in props.row.stores.goods">
            <span>{{ store.price}}</span>
          </el-form-item>
          <el-form-item label="商品价格:" :key="store._id" v-if="props.row.type=='服务'" v-for="store in props.row.stores.services">
            <span>{{ store.basePrice}}</span>
          </el-form-item>
          <el-form-item label="收货人:" class="buyadress">
            <p>{{props.row.consignee}}</p>
            <p>{{props.row.consignadr}}</p>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品单号"
      prop="code">
    </el-table-column>
    <!-- <el-table-column
      
      label="商品名称"
      prop="services.name">
    </el-table-column> -->
    <el-table-column label="商品名称">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item v-if="props.row.type=='商品'">
            <span>{{props.row.goods.name }}</span>
          </el-form-item>
          <el-form-item v-if="props.row.type=='服务'">
            <span>{{props.row.services.name }}</span>
          </el-form-item>
          </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="描述"
      prop="content.context">
    </el-table-column>
    <el-table-column
      label="价格"
      prop="goods.price">
    </el-table-column>
    <el-table-column
      label="进度"
      prop="state"
      >
      
    </el-table-column>
    
    <el-table-column prop="caozuo" label="操作" width="260">
      <template slot-scope="scope">
        <el-button size="small" @click="update(scope.row._id)">修改</el-button>
        <el-button size="small" @click="del(scope.row._id)">移除</el-button>
        
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
// import { mapState, mapActions, mapMutations } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("orders");
export default {
  data() {
    return {
      visible2: false
      // store:this.stores
    };
  },
  //   created() {
  //       console.log(this.stores)
  //       for(let item of this.stores){
  //           for(let items of item.stores.goods){
  //               arr.push(items.name)
  //           }
  //           console.log(this.arr)
  //       }
  //       console.log(this.arr)
  //   },
  methods: {
    del: function(id) {
      this.delOrder(id);
      console.log(id);
    },
    update: function(id) {
      console.log(id);
      this.$emit("update:updateVisible", true);
      this.setOrder(id);
    },
    ...mapActions(["setOrders", "setOrder", "delOrder"])
    //   ...mapMutations(["setOpenflag"])
  },

  computed: {
    ...mapState(["orders"])
  }
};
</script>
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-form-item:last-of-type {
  display: flex;
}
.buyadress {
  display: flex;
  align-items: center;
}
</style>

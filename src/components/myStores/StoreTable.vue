<template>
 <el-table :data="stores" stripe style="width: 100%">
     <template slot="empty">
	    <div class="addStore" @click="toAddStore">
            <img src="../../assets/add.png" alt="">
            <p>还没有店铺，马上申请开店吧</p>
        </div>
    </template>
    <el-table-column prop="name" label="店名" width="250"></el-table-column>
    <el-table-column prop="adress" label="地址" width="250"></el-table-column>
    <el-table-column prop="phone" label="电话" width="250"></el-table-column>
    <el-table-column prop="vip" label="评分" width="250"></el-table-column>
    <el-table-column label="操作">
       <template slot-scope="scope">
        <el-button size="mini" type="primary" icon="el-icon-goods">商品</el-button>
        <el-button size="mini" type="primary" icon="el-icon-service">服务</el-button>
        <el-button size="mini" type="primary" icon="el-icon-date">订单</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import StoreItem from "./StoreItem.vue";
import { mapState } from "vuex";
export default {
  data: function() {
    return {};
  },
  methods: {
      toAddStore(){
        this.$router.push("/sellerManage/manageCenter");
      }
  },
  computed: {
    ...mapState(["stores"])
  },
  components: {
    StoreItem
  }
};
</script>

<style scoped>
.addStore{
    cursor: pointer;
    padding-top: 20px;
}
</style>

<template>
 <el-table ref="multipleTable" :data="goodsOfStore" stripe style="width: 100%">
    <template slot="empty">
	    <div class="addGoods" @click="toAddGoods">
            <img src="../../assets/add.png" alt="">
            <p>还没有商品，马上上架吧</p>
        </div>
    </template>
     <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column prop="name" label="品名" ></el-table-column>
    <el-table-column prop="type" label="种类" ></el-table-column>
    <el-table-column prop="weight" label="规格" ></el-table-column>
    <el-table-column prop="productDate" label="生产日期" ></el-table-column>
    <el-table-column prop="longLife" label="保质期" ></el-table-column>
    <el-table-column prop="price" label="单价" ></el-table-column>
    <el-table-column prop="amount" label="货量"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" icon="el-icon-edit" @click="update(scope.row._id)">修改</el-button>
        <el-button size="mini" type="danger" icon="el-icon-delete" @click="del(scope.row._id)">下架</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from 'axios';
export default {
  data: function() {
    return {
    };
  },
  created() {
    this.getGoodsOfStore(this.storeId);
  },
  methods: {
    update(id) {
      this.$emit("update:updateVisible", true);
      this.setOneGood({storeId:this.storeId,goodId:id})
    },
     del(id) {
       axios({
         method:'put',
         url:'/xiongwei/delGoods/'+this.storeId,
         data:{id}
       }).then(()=>{
         this.getGoodsOfStore(this.storeId);
       });
    },
    toAddGoods() {
    },
    ...mapActions(["getGoodsOfStore","setOneGood"])
  },
  computed: {
    ...mapState(["goodsOfStore", "storeId"])
  },
  components: {}
};
</script>

<style scoped>
.addGoods {
  cursor: pointer;
  padding-top: 20px;
}
</style>

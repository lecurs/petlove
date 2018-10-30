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
    <el-table-column prop="area" label="产地" ></el-table-column>
    <el-table-column prop="productDate" label="生产日期" ></el-table-column>
    <el-table-column prop="longLife" label="保质期" ></el-table-column>
    <el-table-column prop="price" label="单价"></el-table-column>
    <el-table-column prop="amount" label="货量"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" icon="el-icon-edit">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: function() {
    return {
    };
  },
  created() {
    this.getGoodsOfStore(this.storeId);
  },
  methods: {
    toAddGoods() {
    },
    ...mapActions(["getGoodsOfStore"])
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

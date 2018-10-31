<template>
    <el-dialog title="修改商品" :visible="updateVisible" @update:visible="$emit('update:updateVisible',$event)" width="25%" class="updateDialog">
    <el-form >
        <el-form-item label="品名" :label-width="formLabelWidth">
            <el-input v-model="oneGood.name" autocomplete="off" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="单价" :label-width="formLabelWidth">
            <el-input v-model="oneGood.price"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="货量" :label-width="formLabelWidth">
            <el-input v-model="oneGood.amount"  autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="update(oneGood._id)">确 定</el-button>  
    <el-button type="info" @click="$emit('update:updateVisible',false)">取 消</el-button>
  </div>
</el-dialog>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("XiongPlus");
export default {
  props: ["updateVisible"],
  data: function() {
    return {
      imageUrl: "",
      updateImgUrl: "",
      formLabelWidth: "80px"
    };
  },
  methods: {
    update: function(id) {
      this.$emit("update:updateVisible", false);
      axios({
        method: "put",
        url: "/xiongwei/updateGoods/"+this.storeId,
        data: {
          goodId: id,
          name: this.oneGood.name,
          price: this.oneGood.price,
          amount: this.oneGood.amount
        }
      }).then(() => {
        this.getGoodsOfStore(this.storeId)
      });
    },
    ...mapActions(["getGoodsOfStore"])
  },
  computed: {
    ...mapState(["oneGood", "storeId"])
  },
  components: {}
};
</script>

<style scoped>
/* .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 50px;
  height: 30px;
  line-height: 178px;
  text-align: center;
} */
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

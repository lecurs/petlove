<template>
    <div>
        <el-button class="addBtn" type="primaty" icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true">上新</el-button>
        <el-dialog title="商品上新" :visible.sync="dialogFormVisible" width="25%" class="addDialog">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="选择商品">
                    <el-select v-model="formInline.name" placeholder="选择商品">
                        <el-option :key="good._id" v-for="good in myGoods" :good="good" :label="good.name" :value="good._id"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="add(formInline.name)">确 定</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data: function() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "50px",
      formInline: {
        name: ""
      }
    };
  },
  created() {
    this.getMyGoods(this.ownerId);
  },
  methods: {
    add: function(id) {
      this.dialogFormVisible = false;
      axios({
        method: "put",
        url: "/xiongwei/addGoods/" + this.storeId,
        data: { id }
      }).then(() => {
        this.getMyGoods(this.ownerId);
        this.getGoodsOfStore(this.storeId);
      });
    },
    ...mapActions(["getMyGoods","getGoodsOfStore"])
  },
  computed: {
    ...mapState(["myGoods", "ownerId", "storeId"])
  },
  components: {}
};
</script>

<style scoped>
.addBtn {
  margin: 20px 0;
}
.avatar-uploader,
.el-upload {
  width: 48%;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader,
.el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

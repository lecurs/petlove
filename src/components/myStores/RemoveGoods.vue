<template>
    <div>
        <el-button class="delBtn" type="primaty" icon="el-icon-delete" @click="dialogFormVisible = true">批量下架</el-button>
        <el-dialog title="商品下架" :visible.sync="dialogFormVisible" width="25%" class="delDialog">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <span>确认下架这些商品吗？</span>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="del" >确 定</el-button>
                
            </div>
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("XiongPlus");
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
  methods: {
    del: function() {
      this.dialogFormVisible = false;
      axios({
        method: "put",
        url: "/xiongwei/addGoods/" + this.storeId,
        data: { id }
      }).then(() => {
        this.getMyGoods();
      });
    },
    ...mapActions(["getMyGoods"])
  },
  computed: {
    ...mapState(["myGoods", "ownerId", "storeId"])
  },
  components: {}
};
</script>

<style scoped>
.delBtn {
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

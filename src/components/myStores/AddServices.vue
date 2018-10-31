<template>
    <div>
        <el-button class="addBtn" type="primaty" icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true">上新</el-button>
        <el-dialog title="服务上线" :visible.sync="dialogFormVisible" width="25%" class="addDialog">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="选择服务">
                    <el-select v-model="formInline.name" placeholder="选择服务">
                        <el-option :key="service._id" v-for="service in myServices" :service="service" :label="service.name" :value="service._id"></el-option>
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
  created() {
    this.getMyServices(this.ownerId);
  },
  methods: {
    add: function(id) {
      this.dialogFormVisible = false;
      axios({
        method: "put",
        url: "/xiongwei/addServices/" + this.storeId,
        data: { id }
      }).then(() => {
        this.getMyServices(this.ownerId);
        this.getServicesOfStore(this.storeId);
      });
    },
    ...mapActions(["getMyServices","getServicesOfStore"])
  },
  computed: {
    ...mapState(["myServices", "ownerId", "storeId"])
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

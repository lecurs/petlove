<template>
<div class="add">
    
    <el-button @click="dialogFormVisible = true">新增</el-button>
    <el-dialog title="服务增加" :visible.sync="dialogFormVisible">
        <el-form>
            <el-form-item label="服务名字" :label-width="formLabelWidth">
            <el-input v-model="name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="服务等级" :label-width="formLabelWidth">
            <el-input v-model="staffLevel" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="服务时长" :label-width="formLabelWidth">
            <el-input v-model="timeLong" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="服务价格" :label-width="formLabelWidth">
            <el-input v-model="basePrise" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="服务时间段" :label-width="formLabelWidth">
            <el-input v-model="workTime" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="宠物重量" :label-width="formLabelWidth">
            <el-input v-model="weight" autocomplete="off"></el-input>
            </el-form-item>
            
            <el-form-item label="上传头像" :label-width="formLabelWidth">
            <el-upload class="avatar-uploader" action="/upload" 
                name="uploadHeader"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                
                list-type="picture"
                >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="add">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>
<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "servicesAdd"
);
export default {
  data() {
    return {
      imageUrl: "",
      dialogFormVisible: false,
      age: "",
      name: "",
      gender: "",

      formLabelWidth: "100px",
      fileList: ""
    };
  },
  beforeCreate() {
    axios({
      method: "get",
      url: "/xiajing/getSession"
    }).then(res => {
        
      if (!res.data.user) {
        this.$router.push("/login");
      } else {
        this.setOwnerId(res.data._id);
        this.setSession(res.data);
      }
    });
  },
  methods: {
    add: function() {
      this.addServices({
        name: this.name,
        staffLevel: this.staffLevel,
        timeLong: this.timeLong,
        basePrise: this.basePrise,
        workTime: this.workTime,
        weight: this.weight,
        owners:this.ownerId,
        stores:"5bd2e23a26178522cd53fe9d"
      });
      this.dialogFormVisible = false;
    },
    handleAvatarSuccess(response, file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.fileList = response;
      console.log(this.fileList);
    },
    handleRemove(file, fileList) {
      this.fileList = fileList;
    },
    handlePreview(file) {
      console.log(file);
    },
    ...mapMutations(["setSession"]),
    ...mapActions(["setOwnerId","addServices"])
  },
  computed: {
    ...mapState(["ownerId"])
  },
};
</script>
<style>
.add {
  margin-top: 15px;
}
</style>

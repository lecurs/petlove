<template>
<div class="add">
    
    <el-button @click="dialogFormVisible = true">新增</el-button>
    <el-dialog title="学生增加" :visible.sync="dialogFormVisible">
        <el-form>
            <el-form-item label="商品名字" :label-width="formLabelWidth">
            <el-input v-model="name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品类型" :label-width="formLabelWidth">
            <el-input v-model="type" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="主要成分" :label-width="formLabelWidth">
            <el-input v-model="material" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="宠物年龄" :label-width="formLabelWidth">
            <el-input v-model="whatAge" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="宠物种类" :label-width="formLabelWidth">
            <el-input v-model="specialFor" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="宠物重量" :label-width="formLabelWidth">
            <el-input v-model="weight" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品口味" :label-width="formLabelWidth">
            <el-input v-model="tasty" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品用途" :label-width="formLabelWidth">
            <el-input v-model="workFor" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品产地" :label-width="formLabelWidth">
            <el-input v-model="area" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="保质期" :label-width="formLabelWidth">
            <el-input v-model="longLife" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="生产日期" :label-width="formLabelWidth">
            <el-input v-model="productDate" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="供货商" :label-width="formLabelWidth">
            <el-input v-model="supplier" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" :label-width="formLabelWidth">
            <el-input v-model="price" autocomplete="off"></el-input>
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
  "goodsAdd"
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
      this.addGoods({
        name: this.name,
        type: this.type,
        material: this.material,
        whatAge: this.whatAge,
        specialFor: this.specialFor,
        weight: this.weight,
        tasty: this.tasty,
        workFor: this.workFor,
        area: this.area,
        longLife: this.longLife,
        productDate: this.productDate,
        supplier: this.supplier,
        price:this.price,
        owners:this.ownerId
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
    ...mapActions(["setOwnerId","addGoods"])
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

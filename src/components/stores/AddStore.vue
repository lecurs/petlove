<template>
    <div>
        <el-button type="button" @click="dialogFormVisible = true">开店</el-button>
            <el-dialog title="新开商店" :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="店名" :label-width="formLabelWidth">
                <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item label="营业执照号码" :label-width="formLabelWidth">
                <el-input v-model="licenseCode"></el-input>
                </el-form-item>
                <el-form-item label="营业执照图片" :label-width="formLabelWidth">
                    <el-upload
                        class="avatar-uploader"
                        action="/zhaoqinglong/upload"
                        name="uploadHeader"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="营业地址" :label-width="formLabelWidth">
                <el-input v-model="address"></el-input>
                </el-form-item>
                <el-form-item label="定位" :label-width="formLabelWidth">
                <el-input v-model="location"></el-input>
                </el-form-item>
                <el-form-item label="法人" :label-width="formLabelWidth">
                <el-input v-model="legalPerson"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                <el-input v-model="phone"></el-input>
                </el-form-item>
                <el-form-item label="店面头图" :label-width="formLabelWidth">
                    <el-upload
                        class="avatar-uploader"
                        action="/zhaoqinglong/upload"
                        name="uploadHeader"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccessShopImg"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageSrc" :src="imageSrc" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="特色" :label-width="formLabelWidth">
                <el-input v-model="special"></el-input>
                </el-form-item>
                <el-form-item label="VIP等级" :label-width="formLabelWidth">
                <el-input v-model="vip"></el-input>
                </el-form-item>
                <el-form-item label="佣金比例" :label-width="formLabelWidth">
                <el-input v-model="rate"></el-input>
                </el-form-item>
                <p>店员属性</p>
                <el-form-item label="姓名：" :label-width="formLabelWidth">
                <el-input v-model="staffs.name"></el-input>
                </el-form-item>
                <el-form-item label="职级：" :label-width="formLabelWidth">
                <el-input v-model="staffs.rank"></el-input>
                </el-form-item>
                <el-form-item label="电话：" :label-width="formLabelWidth">
                <el-input v-model="staffs.phone"></el-input>
                </el-form-item>
            </el-form>  
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button @click="addStore" type="primary">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("stores");
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "100px",
      name: "",
      licenseCode: "",
      address: "",
      location: "",
      legalPerson: "",
      phone: "",
      special: "",
      vip: "",
      rate: "",
      passed: "0",
      imageUrl: "",
      licenseImg: "",
      imageSrc: "",
      shopImg: "",
      staffs: {
        name: "",
        rank: "",
        phone: ""
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      // console.log(file,5555555555);
      this.imageUrl = URL.createObjectURL(file.raw);
      this.licenseImg = file.response;
    },
    handleAvatarSuccessShopImg(res, file) {
      // console.log(file,5555555555);
      this.imageSrc = URL.createObjectURL(file.raw);
      this.shopImg = file.response;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    addStore: function() {
      console.log(this.ownerId,23232323232323)
      axios({
        url: "/zhaoqinglong/addStore",
        method: "post",
        data: {
          name: this.name,
          owner:this.ownerId,
          licenseCode: this.licenseCode,
          address: this.address,
          location: this.location,
          legalPerson: this.legalPerson,
          phone: this.phone,
          special: this.special,
          vip: this.vip,
          rate: this.rate,
          passed: this.passed,
          licenseImg: this.licenseImg,
          shopImg: this.shopImg,
          staffs: {
            name: this.staffs.name,
            rank: this.staffs.rank,
            phone: this.staffs.phone
          }
        }
      }).then(res => {
        // console.log(res.data._id, 5566);
        // let ownerId = "5bd2df1626178522cd53fe9c";
        let ownerId = this.ownerId;
        let storeId = res.data._id;
        this.setOwners({ ownerId: ownerId, storeId: storeId });
        let time = new Date();
        let year = time.getFullYear();
        let mouth = time.getMonth() + 1;
        let day = time.getDate();
        time = year + "-" + mouth + "-" + day;
        // console.log(time, 123456789);
        axios({
          url: "/zhaoqinglong/saveApplication",
          method: "post",
          data: {
            source: "store",
            time: time,
            content: {
              workId: storeId,
              type: "add",
              message: {
                oldMsg: {},
                newMsg: {
                  name: this.name,
                  licenseCode: this.licenseCode,
                  licenseImg: this.licenseImg,
                  address: this.address,
                  location: this.location,
                  legalPerson: this.legalPerson,
                  phone: this.phone,
                  shopImg: this.shopImg,
                  special: this.special,
                  vip: this.vip,
                  rate: this.rate
                }
              }
            },
            passed:"0",
            handle:"0"
          }
        }).then(res=>{
          console.log('suc');
        });
        // this.setStores();
        this.setStoresOfOwner(this.ownerId)
        this.dialogFormVisible = false;
      });
    },
    ...mapActions(["setStores", "setOwners","setStoresOfOwner"])
  },
  computed: {
    ...mapState(["ownerId"])
  },
  components: {}
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
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
<template>
    <div>
        <el-dialog title="修改商店" :visible="updateVisible" @update:visible="$emit('update:updateVisible',$event)">
        <el-form>
            <el-form-item label="店名" :label-width="formLabelWidth">
            <el-input v-model="store.name"></el-input>
            </el-form-item>
            <el-form-item label="营业执照号码" :label-width="formLabelWidth">
            <el-input v-model="store.licenseCode"></el-input>
            </el-form-item>
            <!-- <el-form-item label="营业执照图片" :label-width="formLabelWidth">
            <el-input v-model="licenseImg"></el-input>
            </el-form-item> -->
            <el-form-item label="营业执照图片" :label-width="formLabelWidth">
              <el-upload
                  class="avatar-uploader"
                  action="/zhaoqinglong/upload"
                  name="uploadHeader"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img style="height:80px;width:100px;" v-if="store.licenseImg" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="营业地址" :label-width="formLabelWidth">
            <el-input v-model="store.address"></el-input>
            </el-form-item>
            <el-form-item label="定位" :label-width="formLabelWidth">
            <el-input v-model="store.location"></el-input>
            </el-form-item>
            <el-form-item label="法人" :label-width="formLabelWidth">
            <el-input v-model="store.legalPerson"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="store.phone"></el-input>
            </el-form-item>
            <!-- <el-form-item label="店面头图" :label-width="formLabelWidth">
            <el-input v-model="shopImg"></el-input>
            </el-form-item> -->
            <el-form-item label="店面头图" :label-width="formLabelWidth">
                <el-upload
                    class="avatar-uploader"
                    action="/zhaoqinglong/upload"
                    name="uploadHeader"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccessShopImg"
                    :before-upload="beforeAvatarUpload">
                    <img style="height:80px;width:100px;" v-if="store.shopImg" :src="imageSrc" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="特色" :label-width="formLabelWidth">
            <el-input v-model="store.special"></el-input>
            </el-form-item>
            <el-form-item label="VIP等级" :label-width="formLabelWidth">
            <el-input v-model="store.vip"></el-input>
            </el-form-item>
            <el-form-item label="佣金比例" :label-width="formLabelWidth">
            <el-input v-model="store.rate"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:updateVisible',false)">取 消</el-button>
            <el-button @click="updateConfirm(store._id)" type="primary">确 定</el-button>
        </div>
    </el-dialog>
    </div>
</template>
<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("stores");
export default {
  props: ["updateVisible"],
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
      rate: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      // console.log(file,5555555555);
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.store.licenseImg = file.response;
    },
    handleAvatarSuccessShopImg(res, file) {
      // console.log(file,5555555555);
      // this.imageSrc = URL.createObjectURL(file.raw);
      this.store.shopImg = file.response;
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
    updateConfirm(id) {
      let ownerId = "5bd2df1626178522cd53fe9c";
      let storeId = id;
      this.setOwners({ ownerId: ownerId, storeId: storeId });
      let time = new Date();
      let year = time.getFullYear();
      let mouth = time.getMonth() + 1;
      let day = time.getDate();
      time = year + "-" + mouth + "-" + day;
      console.log(this.store.licenseImg,7788);
      axios({
        url: "/zhaoqinglong/" + id,
        method: "put",
        data: {
          name: this.store.name,
          licenseCode: this.store.licenseCode,
          address: this.store.address,
          location: this.store.location,
          legalPerson: this.store.legalPerson,
          phone: this.store.phone,
          special: this.store.special,
          vip: this.store.vip,
          rate: this.store.rate,
          licenseImg:this.store.licenseImg,
          shopImg:this.store.shopImg,
          passed:"0"
        }
      }).then(response => {
        this.$emit("update:updateVisible", false);
        axios({
          url: "/zhaoqinglong/saveApplication",
          method: "post",
          data: {
            source: "store",
            time: time,
            content: {
              workId: storeId,
              type: "put",
              message: {
                oldMsg: {
                  // name: store.name,
                  // licenseCode: store.licenseCode,
                  // address: store.address,
                  // location: store.location,
                  // legalPerson: store.legalPerson,
                  // phone: store.phone,
                  // special: store.special,
                  // vip: store.vip,
                  // rate: store.rate
                },
                newMsg: {
                  name: this.store.name,
                  licenseCode: this.store.licenseCode,
                  licenseImg:this.store.licenseImg,
                  address: this.store.address,
                  location: this.store.location,
                  legalPerson: this.store.legalPerson,
                  phone: this.store.phone,
                  shopImg: this.store.shopImg,
                  special: this.store.special,
                  vip: this.store.vip,
                  rate: this.store.rate
                }
              }
            },
            passed: "0",
            handle: "0"
          }
        });
        this.setStores();
      });
    },
    ...mapActions(["setStores", "setOwners"])
  },
  computed: {
    ...mapState(["store"]),
    imageUrl(){
      return "/upload/"+this.store.licenseImg
    },
    imageSrc(){
      return "/upload/"+this.store.shopImg
    }
  },
  components: {}
};
</script>
<style scoped>
</style>
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
    updateConfirm(id) {
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
        }
      }).then(response => {
        this.$emit("update:updateVisible", false);
        this.setStores();
      });
    },
    ...mapActions(["setStores"])
  },
  computed: {
    ...mapState(["store"])
  },
  components: {}
};
</script>
<style scoped>
</style>
<template>
  <el-table
    :data="storesOfOwner"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称：">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="营业执照号码：">
            <span>{{ props.row.licenseCode }}</span>
          </el-form-item>
          <el-form-item label="营业执照图片：">
            <span><img :src="/upload/+props.row.licenseImg" style="height:80px;width:100px;" alt=""></span>
          </el-form-item>
          <el-form-item label="门店头图：">
            <span><img :src="/upload/+props.row.shopImg" style="height:80px;width:100px;" alt=""></span>
          </el-form-item>
          <el-form-item label="营业地址：">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="定位：">
            <span>{{ props.row.location }}</span>
          </el-form-item>
          <el-form-item label="法人：">
            <span>{{ props.row.legalPerson }}</span>
          </el-form-item>
          <el-form-item label="联系电话：">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="特色：">
            <span>{{ props.row.special }}</span>
          </el-form-item>
          <el-form-item label="vip等级：">
            <span>{{ props.row.vip }}</span>
          </el-form-item>
          <el-form-item label="佣金比例：">
            <span>{{ props.row.rate }}</span>
          </el-form-item>
          <el-form-item label="店员：">
            <span>{{ props.row.staffs.name }}</span>
          </el-form-item>
          <el-form-item label="操作：">
            <span class="spanColor" @click="update(props.row._id)">修改</span>
            <span> | </span>
            <span class="spanColor" @click="remove(props.row._id)">删除</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商店名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="营业执照号码"
      prop="licenseCode">
    </el-table-column>
    <el-table-column
      label="营业地址"
      prop="address">
    </el-table-column>
     <el-table-column
      label="法人"
      prop="legalPerson">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("stores");
export default {
  data() {
    return {};
  },
  methods: {
    update(id) {
      console.log(id);
      this.$emit("update:updateVisible", true);
      this.setStore(id);
      this.setoldStore(id);
    },
    remove(id) {
      console.log(id, 2323232323);
      axios({
        url: "/zhaoqinglong/" + id,
        method: "delete"
      }).then(response => {
        this.setStoresOfOwner();
      });
    },
    ...mapActions(["setStores", "setStore", "setoldStore","setStoresOfOwner"])
  },

  computed: {
    ...mapState(["stores", "oldstores","ownerId","storesOfOwner"])
  },
  components: {}
};
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.spanColor {
  color: red;
}
</style>
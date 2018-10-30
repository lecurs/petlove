<template>
  <div>
    <h1 class="title">{{store.name}}</h1>
    <el-form label-width="80px" class="form">
      <el-form-item label="地址:">
        <span>{{store.adress}}</span>
      </el-form-item>
      <el-form-item label="电话:">
        <span>{{store.phone}}</span>
      </el-form-item>
      <el-form-item label="评分：">
        <span>{{store.vip}}</span>
      </el-form-item>
    </el-form>
    <StoreDetail/>
  </div>
</template>

<script>
import StoreDetail from "./StoreDetail";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data: function() {
    return {};
  },
  created() {
    let storeId = this.$router.currentRoute.query.storeId;
    this.setStoreId(storeId);
    this.getStoreById(storeId);
  },
  methods: {
    ...mapMutations(["setStoreId"]),
    ...mapActions(["getStoreById"])
  },
  computed: {
    ...mapState(["store","storeId"])
  },
  components: {
    StoreDetail
  }
};
</script>

<style scoped>
.title{
  font-size: 30px;
}
.form{
  display: flex;
  flex-wrap: wrap;
}
</style>

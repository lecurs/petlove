<template>
    <div class="box">
        <el-input placeholder="请输入需要查询的内容" v-model="input" class="inputBox">
            <el-select v-model="select" slot="prepend" placeholder="店名" class="selectBox">
            <el-option label="店名" value="name"></el-option>
            <el-option label="执照号" value="licenseCode"></el-option>
            <el-option label="地址" value="address"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="searchButton()"></el-button>
        </el-input>
    </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("stores");
export default {
  data() {
    return {
      input: "",
      select: "name"
    };
  },
  methods: {
    searchButton: function() {
      console.log(this.select, this.input, 88888);
      this.setStores({
        name: this.select,
        value: this.input,
        id:this.ownerId
      });
    },
    ...mapActions(["setStores"])
  },
  computed: {
    ...mapState(["ownerId"])
  },
  components: {}
};
</script>
<style scoped>
.box {
  margin-left: 5px;
}
.inputBox {
  width: 500px;
}
.selectBox {
  width: 100px;
}
</style>
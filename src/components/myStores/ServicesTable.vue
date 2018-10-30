<template>
 <el-table ref="multipleTable" :data="servicesOfStore" stripe style="width: 100%">
    <template slot="empty">
	    <div class="addServices" @click="toAddServices">
            <img src="../../assets/add.png" alt="">
            <p>还没有服务，马上上架吧</p>
        </div>
    </template>
     <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column prop="name" label="服务" ></el-table-column>
    <el-table-column prop="workTime" label="时间" ></el-table-column>
    <el-table-column prop="timeLong" label="时长" ></el-table-column>
    <el-table-column prop="staffLevel" label="员工星等" ></el-table-column>
    <el-table-column prop="basePrice" label="单价" ></el-table-column>
    <el-table-column prop="weight" label="规格" ></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" icon="el-icon-edit">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: function() {
    return {};
  },
  created() {
    this.getServicesOfStore(this.storeId);
  },
  methods: {
    toAddServices() {},
    ...mapActions(["getServicesOfStore"])
  },
  computed: {
    ...mapState(["servicesOfStore", "storeId"])
  },
  components: {}
};
</script>

<style scoped>
.addServices {
  cursor: pointer;
  padding-top: 20px;
}
</style>

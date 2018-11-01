<template>
<div>
    <el-pagination class="page" :page-size="pages.eachpage" @current-change="changePage" background layout="prev, pager, next" :total="pages.total">
    </el-pagination>
</div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("orders");
export default {
  data() {
    return {};
  },
  methods: {
    changePage(page) {
      this.setOrders({ page: page, rows: 3, type: "", value: "" });
    },
    ...mapActions(["setOrders"])
  },
  computed: {
    ...mapState(["pages"])
  },
  components: {}
};
</script>
<style scoped>
.page {
  margin-top: 20px;
  text-align: right;
}
</style>

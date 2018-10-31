<template>
        <tr>
            <th>{{store.name}}</th>
            <th>{{store.adress}}</th>
            <th>{{store.phone}}</th>
            <th>{{store.vip}}</th>
            <th>
                <input type="button" value="商品" >
                <input type="button" value="服务">
                <input type="button" value="订单" >
            </th>
        </tr>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("XiongPlus");
export default {
  props: ["store"],
  data: function() {
    return {};
  },
  methods: {
    // showById: function(id) {
    //   this.setStudent(id);
    // },
    // del: function(id) {
    //   axios({
    //     method: "delete",
    //     url: "/students/" + id
    //   }).then(()=> {
    //     this.setStudents({
    //       page: this.pagination.curpage,
    //       rows: this.pagination.eachpage
    //     });
    //   });
    // },
    // ...mapActions(["setStudent", "setStudents"])
  },
  computed: {

  },
  components: {}
};
</script>

<style scoped>
</style>

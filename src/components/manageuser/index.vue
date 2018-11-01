<template>
    <div>
        <h1>用户管理</h1>
        <ManagTable :updateVisible.sync="updateVisible"></ManagTable>
        <!-- <Page></Page> -->
        <UpdateUsers :updateVisible.sync="updateVisible"></UpdateUsers>
    </div>
</template>
<script>
import ManagTable from "./ManagTable";
import UpdateUsers from "./UpdateUsers";
import {mapState,mapActions} from 'vuex';

export default {
  data() {
    return {
      updateVisible: false
    };
  },
  created() {
    this.setStudents()
  },
  methods: {
    ...mapActions(["setStudents"])
  },
  computed: {},
  components: {
    ManagTable,
    UpdateUsers,

  }
};
</script>
<style scoped>
/* .box{
  display: flex;
  margin-bottom:10px; 
} */
</style>

<template>
    <div>
        <h1>用户管理</h1>
        <StudentTable :updateVisible.sync="updateVisible"></StudentTable>
        <!-- <Page></Page> -->
        <UpdateStudent :updateVisible.sync="updateVisible"></UpdateStudent>
    </div>
</template>
<script>
import StudentTable from "./StudentTable";
import UpdateStudent from "./UpdateStudent";
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
    StudentTable,
    // Page,
    // AddStudent,
    UpdateStudent,
    // SearchStudent
  }
};
</script>
<style scoped>
/* .box{
  display: flex;
  margin-bottom:10px; 
} */
</style>

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
// import Page from "./Page";
// import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
// import SearchStudent from "./SearchStudent";
export default {
  data() {
    return {
      updateVisible: false
    };
  },
  methods: {},
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

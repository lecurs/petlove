<template>
    <div>
        <h3>增加店铺</h3>
        <InputEle v-model="name" type="text">姓名:</InputEle>
        <InputEle v-model="age" type="text">年龄:</InputEle>
        <RadioEle v-model="gender" keyMan="addMan" keyWoman="addWoman">性别:</RadioEle>
        <input type="button" value="新增" @click="add" />
    </div>
</template>

<script>
// import InputEle from "../InputEle.vue";
// import RadioEle from "../RadioEle.vue";
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  data: function() {
    return {
      name: "",
      age: "",
      gender: ""
    };
  },
  methods: {
    add: function() {
      axios({
        method: "post",
        url: "/students",
        data: {
          name: this.name,
          age: this.age,
          gender: this.gender
        }
      }).then(() => {
        this.name = "";
        this.age = "";
        this.gender = "";
        this.setStudents({
          page: this.pagination.curpage,
          rows: this.pagination.eachpage
        });
      });
    },
    ...mapActions(["setStudents"])
  },
  computed: {
    ...mapState(["pagination"])
  },
  components: { InputEle, RadioEle }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

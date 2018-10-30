<template>
    <div>
        <!-- <h3>修改</h3>
        <InputEle v-model="student.user" type="text">登录名</InputEle>
        <p></p> 
        <InputEle v-model="student.pwd" type="text">密码</InputEle> 
        <p></p>
         <InputEle v-model="student.phone" type="text">手机号</InputEle> 
        <p></p>
         <InputEle v-model="student.role" type="text">角色</InputEle> 
        <p></p>
         <InputEle v-model="student.privilege" type="text">状态</InputEle> 
        <p></p>
        <input type="button" @click="updateSure(student._id)" value="确认修改"> -->
    </div>
</template>

<script>
import InputEle from "./InputEle";
import axios from "axios";
import {mapState,mapActions} from 'vuex';
export default {
//   props: ["show","student"],
  data: function() {
    return {
      user: "",
      pwd: "",
      phone: "",
      role: "",
    privilege:""
    };
  },
  methods: {
   updateSure:function(id){
       axios({
           url:'/liufei/'+id,
           method:'put',
           data:{
               name:this.student.name,
               age:this.student.age,
               gender:this.student.gender
           }
       }).then((response)=>{
        this.setStudents();
       })
   },
   ...mapActions(["setStudents"]),
  },
  computed:{
      ...mapState(["student"])
  },
  components: {
    InputEle,
  }
};
</script>
<style scoped>
</style>
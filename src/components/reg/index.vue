<template>
     <div>
       <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>注册</span>
        </div>
        <div class="text item">
          <el-form :model="regForm" status-icon :rules="reg" ref="regForm" label-width="100px" class="demo-ruleForm">
            <!-- ref="regForm" 此处用于确认密码后的密码修改和提交表单的验证以及表单的重置-->
            <el-form-item label="用户名" prop="user">
              <el-input  placeholder="请输入6-18位任意字符"  v-model="regForm.user" type="text"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input placeholder="请输入11位手机号码" v-model="regForm.phone" type="text"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input v-model="regForm.code" type="text"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
              <el-input type="password" v-model="regForm.pwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirm">
              <el-input type="password" v-model="regForm.confirm" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
   </div>
</template>
<script>
import InputEle from '../InputEle';
import axios from 'axios';
export default {
  data() {
       const validateUser = function (rule, value, callback){
      axios({
        method: "get",
        url: '/zhangyuan/',
        params: {
          user: value
        }
      }).then((response) => {
        if (response.data.status == 0) {
          callback("用户名已存在");
        } else {
          callback();
        }
      })
    };
    const validatePhone = function (rule, value, callback){
      axios({
        method: "get",
        url: '/zhangyuan/validate/',
        params: {
          phone: value
        }
      }).then((response) => {
        if (response.data.status == 0) {
          callback("号码已注册");
        } else {
            // console.log(123);
          callback();
        }
      })
    };
    const validatePwd =(rule, value, callback)=>{
      callback();
      this.$refs.regForm.validateField('confirm');
      // validateField	对部分表单字段进行校验的方法
    };
    const validateConfirm =(rule, value, callback)=>{
      if(value==this.regForm.pwd){
        callback();
      }else{
        callback("两次密码不一致")
      }
    };
      return {
        regForm: {
          user:'',
          phone: '',
          code: '',
          pwd: '',
          confirm:'',
          privilege:0,
          passed:0
        },
        reg: {
          user: [
            { required: true, message: '用户名不能为空' },
             {
               pattern: /^\S{1,16}$/, message: '用户名格式不正确'
                },
              { validator: validateUser}
          ],
          phone: [
            { required: true, message: '手机号不能为空' },
            { pattern: /^1\d{10}$/, message: "手机号格式不正确" },
            { validator: validatePhone}
          ],
          code: [
                {
                  required: true, message: '请输入6位验证码',
                },
                {
                  pattern: /^\d{6}$/, message: '验证码格式不正确'
                },
          ],
          pwd: [
                {
                  required: true, message: '请输入6-10位密码',
                },
                {
                  pattern: /^\w{6,10}$/, message: '密码格式不正确'
                },
                { validator: validatePwd }
          ],
          confirm: [
                {
                  required: true, message: '请输入6-10位密码',
                },
                { validator: validateConfirm }
          ]
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs.regForm.validate((valid) => {
          if (valid) {
             axios({
              method: "post",
              url: "/zhangyuan/reg",
              data: {
                user:this.regForm.user,
                phone: this.regForm.phone,
                pwd: this.regForm.pwd,
                privilege:0,
                passed:0,
              }
            }).then((response) => { //接收注册成功以后返回的数据
                let id = response.data._id;
                let pwd = response.data.pwd;
                let user = response.data.user;
                let phone = response.data.phone;
                // console.log(response.data._id)
            alert("注册成功，待审核通过即可登录")
            let time = new Date();
            let year = time.getFullYear() //获取完整的年份(4位,1970-????)
            //  console.log(year) 
             let mouth = time.getMonth()+1; //获取当前月份(0-11,0代表1月)
            //  console.log(mouth);
             let date = time.getDate() //获取当前日(1-31)
            //  console.log(date); 
             time = year+"-"+mouth+"-"+date  // 拼接年月日
            //   console.log(time);
            axios({
                method: "post",
                url: "/zhangyuan/audit",
                data:{
                  time:time,
                  passed:"0",
                  handle:"0",
                  source:"account",
                  content:{
                      workId:id,
                      type:"add",
                      message:{
                          newMsg:{
                            user:user,
                            phone:phone,
                            pwd:pwd,
                          }
                      }
                  }
              }
            }).then((response)=>{
                // console.log("suc")
                    this.$router.push("/login");
            })
              this.$refs.regForm.resetFields();//清空表格
          
            });
          } else {
            alert("注册失败")
            this.$refs.regForm.resetFields();
          }
        });
      },
      resetForm() {
        this.$refs.regForm.resetFields();
        // resetFields	对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
      }
    }
};
</script>
<style scoped>
.box-card{
  width:500px;
  margin:100px auto;
}
</style>
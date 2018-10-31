<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
      <div class="text item">
        <el-form :model="logForm" ref="logForm" status-icon label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机号" prop="phone">
            <el-input type="text" v-model="logForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input type="password" autocomplete="off" v-model="logForm.pwd"></el-input>
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

<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
      <div class="text item">
        <el-form :model="logForm" ref="logForm" status-icon label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机号" prop="phone">
            <el-input type="text" v-model="logForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input type="password" autocomplete="off" v-model="logForm.pwd"></el-input>
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
  import axios from "axios";
  export default {
    data() {
      return {
        logForm: {
          phone: '',
          pwd: '',
          privilege: '',
          passed: ''
        }
      };
    },

    methods: {
      submitForm() {
        this.$refs.logForm.validate((valid) => {
          // console.log(this)
          if (valid) {
            axios({
              method: "post",
              url: "/zhangyuan/login",
              data: {
                phone: this.logForm.phone,
                pwd: this.logForm.pwd
              }
            }).then((response) => {
              if (response.data.status == 1) { //平台管理登录
                this.$router.push("/adminmaster");
              } else if (response.data.status == 0) { //店铺管理登录
                axios({
                  method: "post",
                  url: "/zhangyuan/setSession",
                  data: {
                    phone: this.logForm.phone,
                  }
                }).then((response) => {
                  alert('店铺管理登录成功');
                })
              } else if (response.data.status == 2) { //待审核
                alert("账号待审核")
                // this.$router.push("/manage");
              } else { //登录失败
                alert("登录失败")
              }
            });
          }
        });
      },
      resetForm() {
        this.$refs.logForm.resetFields();
      }
    }
  };
</script>

<style scoped>
  .box-card {
    width: 500px;
    margin: 100px auto;
  }
</style>
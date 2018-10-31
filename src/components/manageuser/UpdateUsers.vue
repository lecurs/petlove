<template>
    <div>
        <el-dialog title="修改" :visible="updateVisible" @update:visible="$emit('update:updateVisible',$event)">
            <el-form>
                <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="student.user"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                <el-input v-model="student.phone"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="student.pwd" type="password" autocomplete="off"></el-input>
                </el-form-item>
                  <el-form-item label="角色" :label-width="formLabelWidth">
                <el-input v-model="student.role"></el-input>
                </el-form-item>
                  <el-form-item label="状态" :label-width="formLabelWidth">
                <el-input v-model="student.privilege"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="$emit('update:updateVisible',false)">取 消</el-button>
                <el-button type="primary" @click="updateConfirm(student._id)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  props: ["updateVisible"],

  data() {
    console.log(this.student);
    return {
      formLabelWidth: "100px"
    };
  },
  created() {
    console.log(this.student);
  },
  methods: {
    handleAvatarSuccess(res, file) {
      //  console.log(this.student.imgPath,111)
      this.student.imgPath = file.response;
    },

    updateConfirm(id) {
      //    console.log(id,5555);
      axios({
        url: "/liufei/" + id,
        method: "put",
        data: {
          user: this.student.user,
          phone: this.student.phone,
          pwd: this.student.pwd,
          role: this.student.role,
          privilege: this.student.privilege
        }
      }).then(response => {
        let id = response.data._id;
        let time = new Date();
        let year = time.getFullYear();
        let mouth = time.getMonth()+1;
        let day = time.getDate();
        time = year + "-" + mouth + "-" + day;
        axios({
          url: "/liufei",
          method: "post",
          data: {
            source: "users",
            time: time,
            content: {
              workId: id,
              type: "put",
              message: {
                user: this.student.user,
                phone: this.student.phone,
                pwd: this.student.pwd,
                role: this.student.role,
                privilege: this.student.privilege
              }
            },
            passed: "0",
            handle: "0"
          }
        }).then(response => {
          console.log("suc");
        });
        this.$emit("update:updateVisible", false);
        this.setStudents({ page: this.pagination.curpage });
      });
    },
    ...mapActions(["setStudents"])
  },
  computed: {
    ...mapState(["student", "pagination"])
  },
  components: {}
};
</script>
<style scoped>
/* .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  } */
</style>
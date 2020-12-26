<template>
  <div id="grzl">
    <div class="grzl_main">
      <el-form ref="form" :model="form" label-width="100px">
        <!-- 他们说没有的都去掉 -->
        <!-- <el-form-item label="微信号：">
          <el-input v-model="form.wx"></el-input>
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio v-model="form.sex" label="1">男</el-radio>
        <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item> -->
        <el-form-item label="真实姓名：">
          <el-input v-if="!oldFullName" v-model="form.FullName"></el-input>
          <span v-else>{{oldFullName}}</span>
        </el-form-item>
        <el-form-item label="昵称：">
          <el-input v-model="form.NickName"></el-input>
        </el-form-item>
        <el-form-item label="QQ：">
          <el-input v-model="form.QqNumber"></el-input>
        </el-form-item>
        <el-form-item label="邮箱号：">
          <el-input v-model="form.Email"></el-input>
        </el-form-item>
        <el-form-item label="手机号：">
          <el-input v-model="form.PhoneNumber"></el-input>
        </el-form-item>
        <!-- <el-form-item label="邀请码：">
          <el-input v-model="form.yqm" style="width: 235px"></el-input>
          <el-checkbox v-model="form.yzm">我有验证码</el-checkbox>
        </el-form-item> -->
        <el-form-item>
          <el-button class="submit" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div class="warning_img">
        <img src="../../assets/zjzh/warning.png" style="width: 54px;height: 52px;">
      </div>
      <div style="text-align: center;">手机号不合法</div>
      <span slot="footer" class="dialog-footer">
		    <el-button class="pop_sure_btn" type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
    </el-dialog>

  </div>
</template>
<script>
    // 引用axios封装文件
    import {postAjax, getAjax} from "../../util/ajax.js";
    import {Message} from 'element-ui';

    export default {
        data() {
            return {
                form: {
                    // wx: '',
                    // sex: '1',
                    QqNumber: '',
                    Email: '',
                    PhoneNumber: '',
                    FullName: '',
                    NickName: '',
                    // yqm:'',
                    // yzm:''
                },
                oldFullName: '',
                dialogVisible: false,
            }
        },
        methods: {
            onSubmit() {
                let mailReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
                if (!mailReg.test(this.form.Email)) {
                    this.$message.error('邮箱格式不正确')
                    return
                }

                let that = this;
                let url = "Api/User/UserUpdateInfo";
                if (!(/^1[34578]\d{9}$/.test(this.form.PhoneNumber))) {
                    this.dialogVisible = true;
                } else {
                    postAjax(url, this.form).then(function (data) {
                        if (data.IsSucess) {
                            that.getUserInfo()
                            that.$message({
                                message: '修改成功',
                                type: 'success'
                            });
                        } else {
                            Message.error(data.Message)
                        }
                    })
                }
            },
            //得到个人信息
            // 得到用户信息方法
            getUserInfo() {
                let that = this;
                let url = "Api/User/GetUserInfo";
                postAjax(url, null)
                    .then(function (data) {
                        console.log(data);
                        if (data.IsSucess) {
                            that.form.FullName = data.Data.FullName;
                            that.oldFullName = data.Data.FullName;
                            that.form.NickName = data.Data.NickName;
                            that.form.QqNumber = data.Data.QqNumber;
                            that.form.PhoneNumber = data.Data.PhoneNumber;
                            that.form.Email = data.Data.Email;
                        }
                    })
            },
        },
        mounted() {
            this.getUserInfo();
        }
    }
</script>
<style lang="scss">
  #grzl {
    height: 759px;
    background-color: white;
  }

  .grzl_main {
    display: flex;
    justify-content: center;
    margin: 42px auto 0;
  }

  #grzl .el-form-item__label {
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #171717;
  }

  /*调整input框的宽度*/
  #grzl .el-input__inner {
    width: 264px;
    height: 38px;
    background-image: linear-gradient(0deg,
      #ececec 0%,
      #ffffff 100%);
    border-radius: 5px;
    border: solid 1px #dddddd;
  }

  /*提交按钮的样式*/
  #grzl .submit {
    width: 112px;
    height: 36px;
    color: #fff;
    font-size: 16px;
    background-color: #008573;
    border-radius: 5px;
    line-height: 36px;
    padding: 0;
  }

  #grzl .el-input {
    width: 220px;
  }

  /*提示弹窗样式*/
  #grzl .el-dialog__header {
    border-top: 4px solid #2ba498;
    height: 42px;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  #grzl .el-dialog__body {
    padding: 0;
  }

  .warning_img {
    margin: 34px 0 28px;
    text-align: center;
  }

  #grzl .el-dialog__footer {
    padding: 25px 0 60px;
    text-align: center;
  }

  #grzl .pop_sure_btn {
    color: #fff;
    background-color: #008573;
    border-color: #008573;
    width: 120px;
  }
</style>

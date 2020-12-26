<template>
    <div class="user_login_box">
        <div class="login_img">
            <!--<el-carousel height="415px" arrow="never">-->
                <!--&lt;!&ndash;        <el-carousel-item v-for="item in imgarr" :key="item">&ndash;&gt;-->
                <!--&lt;!&ndash;          <img :src="item" alt="">&ndash;&gt;-->
                <!--&lt;!&ndash;        </el-carousel-item>&ndash;&gt;-->
                <!--<el-carousel-item>-->
                    <!--<img src="../../static/img/loginlunbo1.jpg" alt="">-->
                <!--</el-carousel-item>-->
            <!--</el-carousel>-->
          <img src="../../static/img/loginlunbo1.jpg" alt="">
        </div>
        <div class="login_content">
            <!-- 输入错误时添加类名 return__error -->
            <div :class='["user_login_itembox",errUser?"return__error":""]'>
                <span class="iconfont icon-yonghu userclass"></span>
                <input type="text" placeholder="请输入用户名" v-model="userLogin" @keyup.enter="userLoginAjax"
                       @click="hideErr"
                       />
                <!--        <p>{{errText}}</p>-->
            </div>
            <div :class='["user_login_itembox","password_box",errPass?"return__error":""]'>
                <span class="iconfont icon-mima pasclass"></span>
                <input type="password" placeholder="请输入密码" v-model="userPass" @keyup.enter="userLoginAjax"
                       @click="hideErr" />
                <!--        <p>{{errText}}</p>-->
            </div>
            <div :class='["user_login_itembox","indenty_code",errCode?"return__error":""]'>
                <div class="indenty_code_box">
                    <input id="code" type="text" placeholder="请输入验证码" v-model.trim="userCode"
                           @keyup.enter="userLoginAjax"
                           @click="hideErr"/>
                    <!-- 验证码图片 -->
                    <div class="indenty_code_btn" @click="indentyajax">
                        <img :src="IndentyImg"/>
                    </div>
                </div>
                <!--        <p>{{errText}}</p>-->
            </div>
            <div class="user_login_btnbox">
                <button @click="userLoginAjax">立即登录</button>
            </div>
            <!-- <div class="user_login_goto">
                <router-link to="/userRegister" class="user_goto_other">前往注册</router-link>
            </div> -->
            <!--      <el-button :plain="true" @click="openMessAge"></el-button>-->
            <!--      <el-button :plain="true" @click="openSuccess"></el-button>-->
        </div>

    </div>
</template>
<script>
  // 引用axios封装文件
  import {postAjax, getAjax} from "../../util/ajax.js"
  // 引用vuex文件
  import {mapMutations} from 'vuex';
  import {getUserInfo} from "../../util/getdata";
  import {timeFormatProcessing} from "../../util/common";

  export default {
    data() {
      return {
        userLogin: "", //用户名
        userPass: "", //密码
        userCode: "", //用户输入的二维码
        loginInfo: true, //登陆状态
        IndentyCode: "", //二维码唯一标示
        IndentyImg: "", //二维码图片
        terminalNum: null, //终端型号
        errUser: false, //用户名错误时显示错误信息
        errPass: false, //密码错误时显示错误信息
        errCode: false, //验证码错误时显示错误信息
        errText: "", //错误信息文本
        userToken: "", //用户标示token
        imgarr: [require('../../static/img/login/log1.png'), require('../../static/img/login/log2.png')]
      }
    },
    watch: {
      'userCode'(val) {
        this.userCode = val.replace(/[^0-9]/ig, "");
      }
    },
    created() {
      this.indentyajax()
      this.userPass = ''
      this.userCode = ''
    },
    methods: {
      // 登陆成功提示

      //vuex文件内定义方法
      ...mapMutations(['changeLogin']),

      // 请求验证码图片
      indentyajax() {
        let that = this;
        let url = "Api/Common/GetVerifyCode";
        getAjax(url, 1)
          .then(function (data) {
            if (data.IsSucess) {
              that.IndentyImg = data.Data.ImgBase64
              that.IndentyCode = data.Data.VcGuid
            }
          })
      },
      // 显示提示框
      openMessAge(data) {
        this.$message.error(data);
      },
      // 登陆成功
      openSuccess() {
        let that = this
        this.$message({
          message: "登陆成功，即将跳转到首页",
          type: 'success',
          duration: 1000,
          onClose: function () {
            that.$router.push('/home')
          }
        });
      },
      // 用户登录
      userLoginAjax() {
        let that = this;
        let url = "api/Login/In";
        // 判断终端
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
          var ua = window.navigator.userAgent.toLowerCase();
          if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            that.terminalNum = 3
          } else {
            that.terminalNum = 2
          }
        } else {
          that.terminalNum = 1
        }
        var userinfo = {
          LoginName: that.userLogin,
          LoginPwd: that.userPass,
          Term: that.terminalNum,
          VCode: that.userCode,
          VCGuid: that.IndentyCode
        }
        if (that.userLogin == "") {
          that.openMessAge("账号不能为空")
        } else if (that.userPass == "") {
          that.openMessAge("密码不能为空")
        } else {
          if (that.userCode == "") {
            that.openMessAge("验证码不能为空")
          } else {
            //验证提交数据
            postAjax(url, userinfo)
              .then(function (data) {
                if (data.IsSucess) {
                  that.userToken = "Basic" + " " + data.Data.Token
                  // 将token存储到vuex
                  that.changeLogin({Authorization: that.userToken});
                  that.openSuccess();
                  localStorage.setItem('alertState', 'true');
                  sessionStorage.clear()
                  that.$store.commit('setLoginAfter', false)
                  getUserInfo()
                  that.lastLoginInfo()
                } else {
                  if (data.Message) {
                    //获取错误提示显示到页面
                    that.errText = data.Message
                    if (data.Message == "验证码输入错误" || data.Message == "验证码过期") {
                      that.errCode = true
                      that.userCode = ""
                    } else if (data.Message == "用户不存在") {
                      that.errUser = true
                    } else if (data.Message == "密码输入错误") {
                      that.errPass = true
                      that.userPass = ""
                      that.userCode = ""
                    }

                    that.openMessAge(that.errText)
                    that.indentyajax()
                  } else {
                    that.openMessAge("获取地址失败，请刷新页面后重试")
                  }
                }
              })
          }
        }

      },
      lastLoginInfo() {
        let that = this;
        let url = "Api/User/UserLoginLogInfo";
        let cxData = {
          StartTime: timeFormatProcessing(),
          EndTime: timeFormatProcessing(0, 1),
          PIndex: 1,
          PSize: 2
        };
        postAjax(url, cxData).then((data) => {
          if (data.IsSucess) {
            this.$store.commit('setLastLogin',data.Data.rows[1].LoginTime)
          }
        }).catch(() => {
          this.loading = false
        })
      },
      // input框获取焦点时隐藏错误提示
      hideErr() {
        let that = this
        that.errCode = false
        that.errUser = false
        that.errPass = false
      },
    }

  }
</script>
<style scoped>
    /* 登录 */
    .user_login_box {
        display: flex;
        justify-content: space-between;
        width: 1100px;
    }

    .login_img {
        width: 690px;
        height: 415px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
        overflow: hidden;
    }

    .login_img img {
        width: 686px;
        height: 415px;
    }

    .login_content {
        width: 400px;
        padding: 54px 45px 0;
    }

    .user_login_itembox {
        position: relative;
        padding-bottom: 30px;
    }

    .user_login_itembox input {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 54px;
        padding-left: 52px;
        outline: none;
        font-size: 14px;
        line-height: 42px;
        border-radius: 27px;
        border: solid 1px #8e8e8e;
        z-index: 1;
    }

    .user_login_itembox input::placeholder {
        color: #8e8e8e;
    }

    .user_login_itembox > p {
        padding: 6px 0px;
        text-align: left;
        padding-left: 130px;
        color: #c93030;
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 14px;
        display: none;
    }

    .return__error p {
        display: block;
    }

    .user_login_btnbox {
        text-align: center;
    }

    .user_login_btnbox > button {
        width: 100%;
        height: 54px;
        background-color: #008573;
        border-radius: 27px;
        border: none;
        font-size: 18px;
        color: #ffffff;
        cursor: pointer;
    }

    .user_login_btnbox > button:hover {
        opacity: .9;
    }

    .user_login_goto {
        text-align: center;
        width: 100%;
        font-size: 14px;
        margin-top: 15px;
        color: #707b83;
        overflow: hidden;
        margin-bottom: 9px;
    }

    .user_login_goto > .user_goto_other {
        color: #707b83;
    }

    .user_login_goto > .user_goto_other:hover {
        text-decoration: underline;
        color: #167e77;
    }

    .user_login_goto > span {
        margin: 0 5px;
    }

    /* 验证码 */
    .indenty_code input {
        padding: 3px 10px;
        line-height: 30px;
    }

    .indenty_code_box {
        display: inline-block;
        position: relative;
    }

    .indenty_code_box > input {
        width: 170px;
        border-radius: 10px;
    }

    .indenty_code_btn {
        float: right;
        width: 132px;
        height: 44px;
        margin-left: 8px;
        cursor: pointer;
    }

    .indenty_code_btn > img {
        width: 100%;
        height: 54px;
        border-radius: 10px;
    }

    .user_login_box > .el-button {
        display: none
    }

    .userclass {
        display: inline-block;
        position: absolute;
        top: 7px;
        left: 15px;
        font-size: 26px;
        color: #999999;
        z-index: 2;
    }

    .pasclass {
        display: inline-block;
        position: absolute;
        top: 6px;
        left: 16px;
        font-size: 26px;
        color: #999999;
        z-index: 2;
    }

    .el-carousel__item {
        font-size: 0;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
</style>


<template>
  <!-- 注册 -->
  <div class="user_login_box">
    <div class="register_img">
      <!--<el-carousel height="455px" arrow="never">-->
<!--&lt;!&ndash;        <el-carousel-item v-for="item in imgarr" :key="item">&ndash;&gt;-->
<!--&lt;!&ndash;          <img :src="item" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;        </el-carousel-item>&ndash;&gt;-->
        <!--<el-carousel-item>-->
          <!--<img src="../../static/img/register.jpg" alt="">-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
      <img src="../../static/img/register.jpg" alt="">
    </div>
    <div class="register_content">
      <h1>用户注册</h1>
      <div class="user_login_itembox">
        <label>用户名：</label>
        <input type="text" placeholder="输入6-13位字母或者数字" v-model="userID" @blur="judgeUser"
               @keyup.enter="register" id="userId"/>
        <!--        <p>{{errText1}}</p>-->
      </div>
      <div class="user_login_itembox">
        <label>登陆密码：</label>
        <input type="password" placeholder="输入6-13位字母或者数字" v-model="userPass" @blur="judgess"
               @keyup.enter="register" id="passId"/>
        <!--        <p>{{errText2}}</p>-->
      </div>
      <div class="user_login_itembox">
        <label>确认密码：</label>
        <input type="password" placeholder="输入6-13位字母或者数字" v-model="confirmPass" @blur="judgessPass"
               @keyup.enter="register" id="PassConfirm"/>
        <!--        <p>{{errText5}}</p>-->
      </div>
      <div class="user_login_itembox">
        <label>资金密码：</label>
        <input type="password" placeholder="输入6-13位字母或者数字" v-model="userPID" @blur="judgePass"
               @keyup.enter="register" id="passPId"/>
        <!--        <p>{{errText3}}</p>-->
      </div>
      <div class="user_login_itembox">
        <label>手机号：</label>
        <input type="text" placeholder="输入11位手机号码" v-model.trim="PhoneNumber" @blur="judgeTel"
               @keyup.enter="register" id="tel"/>
        <!--        <p>{{errText4}}</p>-->
      </div>
      <div class="user_login_itembox">
        <label>验证码：</label>
        <div class="indenty_code_box">
          <input type="text" placeholder="请输入验证码" v-model.trim="userCode" @keyup.enter="register"/>
          <!-- 验证码图片 -->
          <div class="indenty_code_btn" @click="indentyajax">
            <img :src="IndentyImg"/>
          </div>
        </div>
        <!--        <p>{{errText4}}</p>-->
      </div>
      <div class="user_login_btnbox">
        <button @click="register">立即注册</button>
      </div>
      <div class="user_login_goto">
        <router-link to="/userLogin" class="user_goto_other">已有账号，前往登录</router-link>
      </div>
    </div>

    <el-button :plain="true" @click="openMessAge"></el-button>
    <el-button :plain="true" @click="openSuccess"></el-button>
  </div>
</template>
<script>
    import {postAjax, getAjax} from "../../util/ajax.js"
    import {SysKey} from "../../util/sysconfig";
    import {getUserInfo} from "../../util/getdata";

    export default {
        data() {
            return {
                IndentyCode: "", //二维码唯一标示
                IndentyImg: "", //二维码图片
                userID: "",  //账号
                userPass: "", //密码
                confirmPass: "",//确认密码
                userPID: "",//安全密码
                userCode: "",//验证码
                PhoneNumber: "",//手机号
                regist: null,  //注册标示
                errUser: false, //用户名错误时显示错误信息
                errPass: false, //密码错误时显示错误信息
                errConfirmPWD: false, //确认密码错误时显示错误信息
                errPid: false, //安全密码输入错误时显示错误信息
                errCode: false, //验证码错误时显示错误信息
                errTel: false,//手机号错误时
                errText1: "", //错误信息文本
                errText2: "", //错误信息文本
                errText3: "", //错误信息文本
                errText4: "", //错误信息文本
                errText5: "", //错误信息文本
                localhostHerf: '',//当前页网址
                imgarr: [require('../../static/img/login/register1.png'), require('../../static/img/login/register2.png')],
            }
        },
        watch: {
            'userCode'(val) {
                this.userCode = val.replace(/[^0-9]/ig, "");
                if (val.length > 4) {
                    this.userCode = this.userCode.substring(0, 4);
                }
            },
            'PhoneNumber'(val) {
                this.PhoneNumber = val.replace(/[^0-9]/ig, "");
                if (val.length > 11) {
                    this.PhoneNumber = this.PhoneNumber.substring(0, 11);
                }

            }
        },
        created() {
            this.localhostHerf = window.location.hostname || document.domain;
            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                let url = window.location.href;
                let rtData = getURLData(url);
                if (rtData) {
                    let h5url = SysKey("WapUrl").SysValue + "/login/RegShare?flag=" + rtData;
                    window.location.href = h5url;
                }
            }
            this.indentyajax();

            function getURLData(url) {
                if (url.indexOf("?") != -1 && url.indexOf("flag") != -1) {
                    let relUrl = url.toString().split("?")[1];
                    let rurl = relUrl.toString().split("&");
                    let item;
                    for (item in rurl) {
                        let data = rurl[item];
                        if (data.indexOf("flag") != -1) {
                            return data.toString().split("=")[1];
                        }
                    }
                    return null;
                } else {
                    return null;
                }
            }
        },
        methods: {
            indentyajax() {
                let that = this;
                let url = "Api/Common/GetVerifyCode";
                getAjax(url, 1)
                    .then(function (data) {
                        if (data.IsSucess) {
                            that.IndentyImg = data.Data.ImgBase64
                            that.IndentyCode = data.Data.VcGuid
                        } else {
                            that.openMessAge("获取地址失败，请刷新页面后重试")
                        }
                    })
            },
            //注册
            register() {
                let path = this.$route.path;
                let that = this
                let url = "api/User/DomainCreateUser"
                let data;
                if (path === '/userRegister') {
                    data = {
                        flag: that.regist,
                        LoginName: that.userID,
                        PassWord: that.userPass,
                        SafetyPassWord: that.userPID,
                        VCode: that.userCode,
                        VCGuid: that.IndentyCode,
                        PhoneNumber: that.PhoneNumber
                    }
                } else {
                    data = {
                        LoginName: that.userID,
                        PassWord: that.userPass,
                        SafetyPassWord: that.userPID,
                        VCode: that.userCode,
                        VCGuid: that.IndentyCode,
                        PhoneNumber: that.PhoneNumber,
                        Domain: that.localhostHerf
                    }
                }
                if (that.userID == "") {
                    that.openMessAge("请输入注册账号")
                } else if (that.userPass == "" || that.userPID == "") {
                    that.openMessAge("请输入注册密码")
                } else if (that.PhoneNumber == "" || that.PhoneNumber.length != 11) {
                    that.openMessAge("请输入11位手机号码")
                } else if (that.userCode == "") {
                    that.openMessAge("请输入验证码")
                } else {
                    postAjax(url, data).then(function (data) {
                        if (data.Data) {
                            localStorage.setItem('Authorization', "Basic" + " " + data.Data.Token)
                            getUserInfo();
                            that.openSuccess()
                        } else {
                            that.openMessAge(data.Message)
                            that.indentyajax()
                        }
                    })
                }
            },
            //判断用户名是否可以使用
            judgeUser() {
                let that = this
                that.errPass = false
                that.errPid = false
                that.errCode = false
                that.errConfirmPWD = false
                if (that.userID.length < 6 || that.userPID.length > 18) {
                    that.errText1 = "输入的用户名长度有误"
                    that.errUser = true
                    return false
                } else {
                    let url = "api/User/IsExitLoginName?LoginName=" + that.userID
                    postAjax(url)
                        .then(function (data) {
                            if (data.Data) {

                            } else {
                                that.errText1 = "输入用户名有误"
                                that.errUser = true

                                return false
                            }
                        })
                }
                that.errUser = false
            },
            // 显示提示框
            openMessAge(data) {
                this.$message.error(data);
            },
            // 注册成功
            openSuccess() {
                let that = this
                this.$message({
                    message: "注册成功，即将跳转到首页",
                    type: 'success',
                    duration: 2000,
                    onClose: function () {
                        that.$router.push('/home')
                    }
                });
            },
            //资金密码
            judgePass() {
                let that = this;
                if (this.userPID.length < 6 || this.userPID.length > 18) {
                    that.errText3 = "输入密码长度有误"
                    that.errPid = true
                    return
                }
                that.errPid = false
            },
            judgeTel() {
                let that = this;
                if (that.PhoneNumber == "" || that.PhoneNumber.length != 11) {
                    that.errText4 = "手机号输入有误"
                    that.errTel = true
                    return
                } else {
                    that.errText4 = ""
                    that.errTel = false
                }
            },
            // 输入密码长度
            judgess() {
                let that = this
                if (this.userPass.length < 6 || this.userPass.length > 18) {
                    that.errText2 = "输入密码长度有误"
                    that.errPass = true
                    return
                }
                that.errPass = false
            },
            //登陆密码 和 确认密码
            judgessPass() {
                let that = this
                if (that.userPass == that.confirmPass) {
                    that.errConfirmPWD = false
                } else {
                    that.errConfirmPWD = true
                    that.errText5 = "登陆密码与确认密码不一致！"
                    return false;
                }
            }
        },
        mounted() {
            try {
                this.regist = this.$router.currentRoute.query.flag
                console.log('flag', this.$router.currentRoute.query.flag);
            } catch (ignore) {
            }
            //隐藏顶部
            // this.$store.commit('setHead', false)
        }
    }
</script>
<style scoped>
  /* 登录 */
  .user_login_box {
    display: flex;
    justify-content: space-between;
    width: 1097px;
  }

  .register_img {
    width: 686px;
    height: 468px;
  }

  .register_img img {
    width: 686px;
    height: 468px;
  }

  .register_content {
    width: 384px;
  }

  .register_content > h1 {
    padding: 5px 0 20px;
    line-height: 22px;
    font-size: 22px;
    color: #2b9c92;
    text-align: center;
    font-weight: normal;
  }

  .user_login_itembox {
    display: flex;
    flex-wrap: nowrap;
    color: #444444;
    position: relative;
    padding-bottom: 13px;
  }

  .register_content label {
    display: inline-block;
    width: 74px;
    line-height: 44px;
    text-align: right;
    font-size: 14px;
    color: #171717;
    font-weight: bold;
  }

  .register_content input {
    display: inline-block;
    width: 308px;
    height: 44px;
    outline: none;
    font-size: 14px;
    line-height: 50px;
    padding: 0 14px;
    border-radius: 10px;
    border: solid 1px #8e8e8e;
  }

  .user_login_itembox input::placeholder {
    color: #8e8e8e;
  }

  .user_login_itembox > p {
    padding: 6px 0px 6px 124px;
    text-align: left;
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
    text-align: right;
    margin-top: 4px;
  }

  .user_login_btnbox > button {
    width: 310px;
    height: 44px;
    background-color: #2ba59a;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }

  .user_login_goto {
    float: right;
    text-align: center;
    width: 310px;
    font-size: 14px;
    margin-top: 12px;
    overflow: hidden;
  }

  .user_login_goto > .user_goto_other {
    color: #289f92;
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
  }

  .indenty_code_btn {
    float: right;
    width: 130px;
    height: 44px;
    margin-left: 8px;
  }

  .user_login_box > .el-button {
    display: none
  }

  .indenty_code_btn > img {
    width: 100%;
    height: 100%;
  }

  .el-carousel__item {
    font-size: 0;
  }
</style>


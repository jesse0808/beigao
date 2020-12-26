<template>
    <!-- 客户端下载 -->
    <div class="client_mainbox" ref="minHeight">
        <!-- 头部 -->
        <div class="line_detection_topbox" v-if="1 == 2">
            <div class="box_center cf">
                <router-link to="/" class="line_dete_logo box_h">
                    <img :src="SysLogo" alt=""/>
                </router-link>
                <!-- 操作 -->
                <ul class="line_detacion_opreabox cf">
                    <li class="detacion_itembox">
                        <router-link to="/userlogin" class="detacion_oprea_login">登录</router-link>
                    </li>
                    <li class="detacion_itembox">
                        <router-link to="/Client" class="detacion_oprea_app">APP下载</router-link>
                    </li>
                    <li class="detacion_itembox">
                        <a class="detacion_oprea_custer" :href="kfUrl" target="_blank">在线客服</a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="box_center cf">
            <!-- 手机模型 -->
            <div class="client_phone_mode">
                <img src="../../static/img/phone_mode.png"/>
                <!-- 推荐使用浏览器 -->
                <div class="client_browser_box">
                    <p>推荐使用以下浏览器：</p>
                    <div class="client_browser_picbox box_h">
                        <img src="../../static/img/Browser/guge.png"/>
                        <img src="../../static/img/Browser/baidu.png"/>
                        <img src="../../static/img/Browser/sougou.png"/>
                        <img src="../../static/img/Browser/qq.png"/>
                        <img src="../../static/img/Browser/op.png"/>
                    </div>
                </div>
            </div>
            <!-- 二维码 -->
            <div class="client_code_box">
                <h6>手机客户端下载</h6>
                <div class="client_text_box">
                    <p>请使用 QRCode扫描器 扫描二维码进行下载 , </p>
                    <p>iOS 11 以上的朋友可直接使用相机应用扫描 , </p>
                    <p>安装打开即可使用, 感受流畅的移动投注体验。</p>
                </div>
                <div class="client_phone_typebox cf">
                    <div class="client_iosphone_leftbox">
                        <p class="iosphone_icon phone_btn"><a :href="iosDownload" style="color: white" target="_blank">IOS客户端</a>
                        </p>
                        <div class="phone_pic_code">
                            <img :src='iosQRURL'/>
                        </div>
                    </div>
                    <div class="client_androphone_rightbox">
                        <p class="andriphone_icon phone_btn"><a :href="androidDownload" style="color: white"
                                                                target="_blank">安卓客户端</a></p>
                        <div class="phone_pic_code">
                            <img :src='androidQRURL'/>
                        </div>
                    </div>
                </div>
                <!-- 官方推荐最佳分辨率 -->
                <div class="client_Resolving_powerbox">
                    <p>官方推荐最佳分辨率：</p>
                    <div class="resolving_power_icon box_h">
                        <span class="box_flex">1440px*900px</span>
                        <span class="box_flex">1680px*900px</span>
                        <span class="box_flex">1920px*1280px</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 登录弹窗 -->
        <div class="login_div" v-show="loginAfter">
            <div>
                <div class="close_login" @click="closeLogin"></div>
                <loginItem></loginItem>
            </div>
        </div>
    </div>
</template>
<script>
  import {SysKey} from "../../util/sysconfig";
  import loginItem from "../login/login_item";

  export default {
    data() {
      return {
        SysLogo: SysKey("ImgServerUrl").SysValue + SysKey("SysLogo").SysValue,
        kfUrl: SysKey("KfCenterUrl").SysValue,
        ImgServerUrl: SysKey("ImgServerUrl").SysValue,
        iosQRURL: SysKey("ImgServerUrl").SysValue + SysKey("IosQrCodeUrl").SysValue,
        androidQRURL: SysKey("ImgServerUrl").SysValue + SysKey("AndroidQrCodeUrl").SysValue,
        iosDownload: SysKey("IosDownUrl").SysValue,
        androidDownload: SysKey("AndroidDownUrl").SysValue,
        showTop: false, //显示未登录顶部
        lg: localStorage.getItem('Authorization'),
      }
    },
    components: {loginItem},
    computed: {
      loginAfter() {
        return this.$store.state.loginAfter;
      }
    },
    methods: {
      closeLogin() {
        this.$store.commit('setLoginAfter', false)
      },
      //验证是否登录
      setTop() {

      //  let that = this

        // 未登录
        // if (this.lg == undefined || this.lg == "" || this.lg == null) {
        //   that.showTop = false
        //
        // } else {
        //   that.showTop = true
        // }

      //  this.$store.commit('setHead',true)

      },
    },
    mounted() {
      this.setTop();
      this.$nextTick(() => {
        let minHeight = document.documentElement.clientHeight - 190;
        this.$refs.minHeight.style.minHeight = minHeight + 'px';
      })
    },
    created() {
      this.$store.commit('setHead', true)
      this.$store.commit('setTop', false)
      this.$store.commit('setFoot', false)
    },
    destroyed() {
      this.$store.commit('setHead', true)
      this.$store.commit('setTop', true)
      this.$store.commit('setFoot', true)
    }
  }
</script>
<style>

    .client_mainbox {
        height: 946px;
        overflow: hidden;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url(../../static/img/downbg.png);
    }

    /* 手机模型 */
    .client_phone_mode {
        float: left;
        margin-top: 178px;
    }

    .client_phone_mode img {
        width: 578px;
        margin-left: -55px;
    }

    /* 介绍 */
    .client_code_box {
        float: left;
        width: 380px;
        overflow: hidden;
        margin-left: 61px;
    }

    .client_code_box > h6 {
        font-size: 30px;
        font-weight: bold;
        color: #008573;
        text-align: center;
        letter-spacing: 3px;
        margin-top: 142px;
    }

    .client_code_box > .client_text_box {
        width: 380px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 122px;
        background-image: url(../../static/img/client_textbg.png);
        text-align: center;
        color: #fff;
        padding: 25px 0;
        margin-top: 48px;
    }

    .client_code_box > .client_text_box > p {
        margin-bottom: 7px;
        font-size: 14px;
        text-align: left;
        padding-left: 44px;
    }

    .client_code_box > .client_text_box > p:last-child {
        margin-bottom: 0px
    }

    .client_phone_typebox {
        width: 100%;
        margin-top: 30px;
    }

    .client_iosphone_leftbox {
        float: left;
        width: 164px;
    }

    .client_androphone_rightbox {
        float: right;
        width: 164px;
    }

    .client_iosphone_leftbox > .iosphone_icon {
        background: #008573;
        background-image: url(../../static/img/icon/ios.png);
    }

    .client_androphone_rightbox > .andriphone_icon {
        background: #ff9200;
        background-image: url(../../static/img/icon/andro.png);
    }

    .client_phone_typebox .phone_btn {
        width: 100%;
        border: 1px solid #0f2d2b;
        text-align: center;
        border-radius: 8px;
        height: 47px;
        line-height: 47px;
        background-position: center left 24px;
        background-repeat: no-repeat;
        background-size: 29px 29px;
        display: block;
        margin-bottom: 27px;
        padding-left: 33px;
        color: #fff;
        cursor: pointer;
    }

    .client_phone_typebox .phone_pic_code {
        width: 162px;
        height: 162px;
        border: 1px solid #008573;
        padding: 11px;
    }

    .client_phone_typebox .phone_pic_code > img {
        width: 140px;
        height: 140px;
    }

    /* 推荐浏览器 */
    .client_browser_box {
        width: 100%;
        overflow: hidden;
        padding-left: 10px;
    }

    .client_browser_box > p, .client_Resolving_powerbox > p {
        color: #f1a104;
        font-size: 14px;
        margin-top: 117px;
        margin-bottom: 13px;
    }

    .client_browser_picbox {
        border: 1px solid #265854;
        width: 495px;
        height: 78px;
        justify-content: center;
        align-items: center;
    }

    .client_browser_picbox > img {
        width: 47px;
        height: 47px;
        margin: 0 13px;
    }

    /* 分辨率 */
    .client_Resolving_powerbox {
        width: 100%;
        overflow: hidden;
    }

    .client_Resolving_powerbox > p {
        margin-top: 123px;
    }

    .resolving_power_icon {
        background-position: center top;
        background-size: 352px 32px;
        background-repeat: no-repeat;
        background-image: url(../../static/img/num_ary.png);
        padding-top: 45px;
    }

    .resolving_power_icon > span {
        color: #fff;
        font-size: 14px;
        text-align: center;
        display: block;
    }

    .resolving_power_icon > span:first-child {
        text-align: left;
    }

    .resolving_power_icon > span:last-child {
        text-align: right;
    }

    .login_div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
        z-index: 100;
    }

    .login_div > div {
        position: relative;
        padding: 16px 15px 14px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 0 20px rgb(0, 0, 0);
    }

    .close_login {
        position: absolute;
        top: -22px;
        right: -22px;
        width: 45px;
        height: 45px;
        z-index: 1;
        cursor: pointer;
        background-image: url(../../static/img/icon/close.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all .1s linear;
    }

    .close_login:hover {
        animation: rotatebtn 1s linear infinite;
    }

    @keyframes rotatebtn {
        0% {
            transform: scale(1.1) rotate(0deg);
        }
        50% {
            transform: scale(1.1) rotate(180deg);
        }
        100% {
            transform: scale(1.1) rotate(360deg);
        }
    }
</style>


<template>
  <div class="user_opreat_mainbox" ref="minHeight">
    <div class="centerdiv">
      <!-- 操作框 -->
      <div class="user_opreat_centerbox">
        <div class="login_logo">
          <img src="../../static/img/logogif.gif"/>
        </div>
        <!-- 内容 -->
        <router-view></router-view>
      </div>
      <!-- 3个按钮 -->
      <div class="user_login_bottombox box_h">
          <router-link to="/Client" class="app_login">
            <img src="../../static/img/login/app_img.png" alt="">
          </router-link>
          <router-link to="/line" class="line_login">
            <img src="../../static/img/login/line_img.png" alt="">
          </router-link>
          <a :href="kfURL" class="custor_login" target="_blank">
            <img src="../../static/img/login/service_img.png" alt="">
          </a>
      </div>
    </div>

  </div>
</template>
<script>


    // 引入登陆模块
    import loginitem from "./login_item.vue";

    // 引入注册模块
    import registeritem from "./register_item.vue";

    import {SysKey} from "../../util/sysconfig";

    export default {
        data() {
            return {
                logoUrl: SysKey("ImgServerUrl").SysValue + SysKey("SysLogo").SysValue,
                kfURL: SysKey("KfCenterUrl").SysValue,
                loading: true,
            }
        },
        computed: {
            pageState() {
                return this.$store.state.header
            }
        },
        created() {

            //隐藏顶部
            this.$store.commit('setHead', false)
            this.$store.commit('setFoot', false)
            window.userInfo = null;
            // let img = new Image();
            // img.src = "../../static/img/login_bg.png";
            // if(img.complete){
            //     this.loading = false;
            //     console.log('加载完');
            // }
            // img.onload = ()=>{
            //     console.log('加载完');
            //     this.loading = false;
            // }
        },
        destroyed() {
            // 页面被销毁时恢复
            this.$store.commit('setHead', true)
            this.$store.commit('setFoot', true)
        },
        mounted() {
            // this.$nextTick(() => {
            //     let minHeight = document.documentElement.clientHeight;
            //     this.$refs.minHeight.style.minHeight = minHeight + 'px';
            // })
            setTimeout(() => {
                this.loading = false;
            }, 1000)
        }
    }
</script>
<style>
  .user_opreat_mainbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(../../static/img/login_bg.png);
    background-position: 0 0;
    background-size: 100% 100%;
    background-repeat: repeat-y;
    overflow: auto;
  }

  .centerdiv {

  }

  .user_opreat_centerbox {
    position: relative;
    width: auto;
    height: auto;
    padding: 16px 15px 14px;
    background-color: #ffffff;
    border-radius: 10px;
  }

  .user_opreat_centerbox .login_logo {
    position: absolute;
    width: 248px;
    height: 60px;
    top: -77px;
    left: 0;
  }

  .user_opreat_centerbox .login_logo > img {
    width: 100%;
    height: auto;
  }

  /* 下方3个按钮 */
  .user_login_bottombox {
    width: 567px;
    margin: 21px auto 0;
    text-align: center;
  }

  .user_login_bottombox a {
    display: block;
    width: 123px;
    height: 35px;
    margin: 0 41px;
    background-size: cover;
    background-position: 0 0;
    background-repeat: no-repeat;
    font-size: 0;
  }

  .user_login_bottombox a > img {
    width: 100%;
    height: auto;
  }

  .user_login_bottombox a:hover {
    opacity: .9;
  }

  .user_login_bottombox a:hover {
    color: white;
  }
</style>


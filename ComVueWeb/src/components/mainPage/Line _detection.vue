<template>
  <!-- 线路检测 -->
  <div class="line_detection_box" ref="minHeight">
    <!-- 头部 -->
    <div class="line_detection_topbox" v-if="showTop == false">
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
    <!-- 中间内容 -->
    <div class="line_detection_centerbox">
      <div class="box_center">
        <div class="line_detecenter_mainbox">
          <!-- 标题 -->
          <div class='line_detemain_titlebox cf'>
            <p class="line_detemain_title">线路检测中心<span>MB/S数值越大，打开网站速度越快</span></p>
            <div class="line_Refresh_btn" @click="testNetworkAll()">刷新检测</div>
          </div>
          <!-- 内容 -->
          <div class="line_detacenter_mainbox cf">
            <div class="line_detacenter_item" v-for="(item,index) in address" :key="index" :data-id="item.Id">
              <h3>{{item.Name}}</h3>
              <div class="line_detacenter_address cf">
                <a :href="item.Url">{{item.Url}}</a>
                <p>{{item.speed}}</p>
              </div>
              <div class="line_detacenter_progress" @click="testNetwork(item,index)">
                <el-progress :text-inside="true" :stroke-width="12" :percentage="item.percentage"
                             color="#30a079" aria-valuemax="50"></el-progress>
              </div>
              <img height="0" width="0" :ref="''+index" onload="testNetwork(testNetwork(item,index))" alt=""/>
            </div>
          </div>
          <div class="line_detacenter_introbox cf">
            <!-- 推荐浏览器 -->
            <div class="line_Recommend_box">
              <p>为了保证最佳使用体验，请保证您的屏幕分辨率在1280及以上，若使用IE浏览器，请使用IE9及以上版本</p>
              <!-- 浏览器图片盒子 -->
              <div class="Browser_icon_box">
                <p>推荐使用浏览器</p>
                <div class="Browser_icon_main box_h">
                  <img src="../../static/img/Browser/guge.png" class="box_flex"/>
                  <img src="../../static/img/Browser/baidu.png" class="box_flex"/>
                  <img src="../../static/img/Browser/sougou.png" class="box_flex"/>
                  <img src="../../static/img/Browser/qq.png" class="box_flex"/>
                  <img src="../../static/img/Browser/op.png" class="box_flex"/>
                </div>
              </div>
            </div>
            <!-- 收藏页面 -->
            <div class="line_Collection_box">
              <p>如果检测中心对您有帮助，请按 Ctrl+D 收藏，如果检测后不能登录,请按以下方式操作：</p>
              <div class="collection_way_item">
                <p>A. 打开IE浏览器：</p>
                <div>选择：工具→Internet选项→再选择（删除历史浏览）→删除→重启IE</div>
              </div>
              <div class="collection_way_item">
                <p>B. 如果您体验过程中出现卡顿：</p>
                <div>请您打开本界面选择其他线路看看。</div>
              </div>
            </div>
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
    import {getAjax} from '../../util/ajax';
    import {SysKey} from "../../util/sysconfig";
    import loginItem from "../login/login_item";
    export default {
        data() {
            return {
                SysLogo: SysKey("ImgServerUrl").SysValue + SysKey("SysLogo").SysValue,
                kfUrl: SysKey("KfCenterUrl").SysValue,
                showTop: false, //显示顶部
                lg: localStorage.getItem('Authorization'),
                watCH: this.$store.state.header,
                address: []
            }

        },
        components:{loginItem},
        computed: {
            loginAfter(){
                return this.$store.state.loginAfter;
            }
        },
        methods: {
            closeLogin() {
                this.$store.commit('setLoginAfter', false)
            },
            //验证是否登录
            setTop() {

                let that = this

                // 未登录
                if (this.lg == undefined || this.lg == "" || this.lg == null) {
                    that.showTop = false

                } else {
                    that.showTop = true
                }

                this.$store.commit('setHead', that.showTop)

            },
            testNetwork(item, index) {
                item.speed = "检测中"
                let Rand = Math.random();
                let RandNum = 1 + Math.round(Rand * 999999);
                let szsrc = item.Url + "/speed.png?id=" + RandNum;
                if (szsrc.indexOf("http://") < 0) {
                    szsrc = "http://" + szsrc;
                }
                let st = new Date();
                let im = this.$refs[index][0]
                im.src = szsrc
                item.percentage = 0;
                im.onload = function () {
                    let fs = 1.46 * 1024;  //图片文件大小(KB)
                    let l = 2;    //小数点的位数
                    let et = new Date();
                    let alltime = fs * 1000 / (et - st)
                    let Lnum = Math.pow(10, l)
                    let calcspeed = Math.round(alltime * Lnum) / Lnum
                    let mb = Math.round(calcspeed / 128 * Lnum) / Lnum
                    item.speed = mb + "MB/秒";
                    item.percentage = mb * 2;
                }
            },
            testNetworkAll() {
                let iteIdx;
                for (iteIdx in this.address) {
                    this.testNetwork(this.address[iteIdx], iteIdx);
                }
            },
            //请求地址接口
            getAdress() {
                let that = this
                let url = "api/Sys/GetSysLines"
                getAjax(url, 1)
                    .then(function (data) {
                        if (data.IsSucess) {
                            let item;
                            for (item in data.Data) {
                                let dd = data.Data[item];
                                let ites = {
                                    idx: dd,
                                    Id: dd.Id,
                                    Name: dd.Name,
                                    Url: dd.Url,
                                    percentage: 0,
                                    testPage: ``,
                                    speed: "0MB/S"
                                }
                                that.address.push(ites)
                            }
                        }
                    })
            }
        },
        mounted() {
            this.setTop()
            // 请求地址接口
            this.getAdress();
            this.$nextTick(() => {
                let minHeight = document.documentElement.clientHeight - 190;
                this.$refs.minHeight.style.minHeight = minHeight + 'px';
            })
        },
        created() {
            setTimeout(() => {
                this.testNetworkAll()
            }, 1 * 1000);
            this.$store.commit('setHead', false)
            this.$store.commit('setTop', false)
        },
        destroyed() {
            this.$store.commit('setTop', true)
            this.$store.commit('setHead', true)
        },
        watch: {
            "watCH": function () {
                this.setTop()
            }
        }

    }
</script>
<style lang="scss" scoped>
  .line_detection_box {
    background: url(../../static/img/downbg.png) no-repeat 0 0 /100% 100%;
  }

  /* 中间内容 */
  .line_detection_centerbox {
    overflow: hidden;
    min-height: 720px;
    position: relative;
  }

  .line_detecenter_mainbox {
    margin-top: 30px;
    border: 1px solid #15403d;
    background-color: #e7e8e9;
    border-radius: 10px;
    padding: 40px 60px;
    margin-bottom: 30px;
  }

  .line_detemain_title {
    font-size: 18px;
    color: #000;
    font-weight: bold;
    overflow: hidden;
    float: left;
  }

  .line_detemain_title > span {
    font-size: 14px;
    color: #4a4a4a;
    margin-left: 5px;
    vertical-align: bottom;
    font-weight: normal;
  }

  .line_Refresh_btn {
    cursor: pointer;
    float: right;
    text-decoration: underline;
    color: #275ac0;
    font-size: 14px;
    vertical-align: text-bottom;
    line-height: 24px;
    padding-bottom: 19px;
  }

  .line_detacenter_mainbox {
    width: 100%;
    overflow: hidden;
  }

  .line_detacenter_item {
    float: left;
    border: 1px solid #dedede;
    border-radius: 8px;
    height: 108px;
    width: 430px;
    margin: 10px 0;
    background: #fbfbfb;
    padding: 16px 21px 16px 29px;
    overflow: hidden;
  }

  .line_detacenter_item > h3 {
    margin-bottom: 8px;
  }

  .line_detacenter_address {
    margin-bottom: 8px;
    color: #9b9b9b;
    font-size: 15px;
  }

  .line_detacenter_address > a {
    float: left;
    color: #275ac0;
  }

  .line_detacenter_address > p {
    float: right;

  }

  .line_detacenter_item:nth-child(even) {
    float: right;
  }

  .el-progress-bar__innerText {
    display: none;
  }

  .el-progress-bar__outer {
    border: 1px solid #40a774;
    background-color: transparent;
  }

  .el-progress-bar__inner {
    font-size: 0;
    background-color: transparent;
  }

  /*推荐浏览器*/
  .line_detacenter_introbox {
    margin-top: 10px;
  }

  .line_Recommend_box {
    float: left;
    width: 430px;
    overflow: hidden;
  }

  .line_Recommend_box > p {
    font-size: 13px;
    line-height: 22px;
    text-indent: 24px;
  }

  .Browser_icon_box {
    margin-top: 5px;
    font-size: 13px;
  }

  .Browser_icon_box > p {
    color: #1f7879;
    text-indent: 5px;
  }

  .Browser_icon_main > img {
    width: 47px;
    height: 47px;
    margin: 0 13px;
  }

  .Browser_icon_main {
    margin-top: 15px;
    padding: 0 22px;
  }

  /* 收藏页面 */
  .line_Collection_box {
    float: right;
    width: 430px;
    overflow: hidden;
  }

  .line_Collection_box > p {
    font-size: 13px;
    line-height: 22px;
    text-indent: 24px;
  }

  .collection_way_item {
    font-size: 13px;
    color: #1f2020;
    line-height: 24px;
  }

  .collection_way_item > p {
    color: #1f7879;
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

<template>
    <div class="top_mainbox">
        <div class="header_topbox" v-if="$store.state.header_top">
            <!-- 上方公共与用户信息 -->
            <div class="box_center box_h">
                <div class="top_messagebox diandian">
                    <span class="iconfont"><img src="../../assets/img/icon/head/notice.png"></span>
                    <!-- 显示弹框 -->
                    <p class="iconfont">
                        <marquee behavior="scroll" scrolldelay="150" direction="up" scrollamount="2" onMouseOut="this.start()"
                                 onMouseOver="this.stop()">
                            <!--{{title}}-->
                            <div v-for="(item,index) in ary" @click="onclickGonggao(item.name)" :key="index">
                                {{item.Title}}
                            </div>
                        </marquee>
                    </p>
                </div>
                <div class="box_flex box_h top_otherinfo" v-if="loginStatus">
                    <div class="box_flex"></div>
                    <router-link to="/line" class="icon_a">
                        <span class="iconfont luxiantu">
                            <img src="../../assets/img/icon/head/circuit_light.png" v-if="this.theme===0">
                            <img src="../../assets/img/icon/head/circuit_light.png" v-if="this.theme===1">
                        </span>切换线路
                    </router-link>
                    <!--                    <router-link to="/Client" class="icon_a"><span class="iconfont icon-shouji"></span>手机客户端</router-link>-->
                    <div class="user_center user_center_listshow">
                        <p @click="toCenter" data-name="tjbb" data-value="tjbb">管理中心</p>
                        <!-- 账号中心下拉框 -->
                        <div class="user_center_listbox">
                            <div class="admin_center">
                                <div class="user_center_listitembox">
                                    <div class="user_center_bottom_box">
                                        <p class="user_center_listtitle">订单报表</p>
                                        <div class="user_center_listmain cf">
                                            <a @click="toCenter" data-name="tjbb" data-value="tjbb">统计报表</a>
                                            <a @click="toCenter" data-name="tzjl" data-value="tzjl">投注记录</a>
                                            <a @click="toCenter" data-name="zhjl" data-value="zhjl">追号记录</a>
                                            <a @click="toCenter" data-name="zbmx" data-value="zbmx">账变明细</a>
                                            <a @click="toCenter" data-name="jfmx" data-value="jfmx">积分明细</a>
                                            <a @click="toCenter" data-name="hdbb" data-value="hdbb">活动报表</a>
                                            <!--                                    <a class="user_center_listtext" @click="toCenter" data-name="yktj"-->
                                            <!--                                       data-value="yktj">盈亏统计</a>-->
                                            <!--                                            <a :href="DlCenterUrl" data-name="yktj" data-value="yktj" target="_blank"-->
                                            <!--                                               v-if="userInfo.UtId === 1">代理中心</a>-->
                                            <a @click="toCenter" data-name="sfjl" data-value="sfjl">三方记录</a>
                                        </div>
                                    </div>
                                    <div class="user_center_bottom_box">
                                        <p class="user_center_listtitle">财务中心</p>
                                        <div class="user_center_listmain cf">
                                            <a @click="toCenter" data-name="zhcz" data-value="zhcz">账户充值</a>
                                            <a @click="toCenter" data-name="yetx" data-value="yetx">余额提现</a>
                                            <a @click="toCenter" data-name="zjzh" data-value="zjzh">资金转换</a>
                                            <a @click="toCenter" data-name="czjl" data-value="czjl">充值记录</a>
                                            <a @click="toCenter" data-name="txjl" data-value="txjl">提现记录</a>
                                            <a @click="toCenter" data-name="zzjl" data-value="zzjl">转账记录</a>
                                        </div>
                                    </div>
                                    <div class="user_center_bottom_box">
                                        <p class="user_center_listtitle">个人中心</p>
                                        <div class="user_center_listmain cf">
                                            <a class="user_center_listtext" @click="toCenter" data-name="grsy"
                                               data-value="grsy">个人首页</a>
                                            <a class="user_center_listtext" @click="toCenter" data-name="yhkgl"
                                               data-value="yhkgl">银行卡管理</a>
                                            <a class="user_center_listtext" @click="toCenter" data-name="grzl"
                                               data-value="grzl">个人资料</a>
                                            <a class="user_center_listtext" @click="toCenter" data-name="dljl"
                                               data-value="dljl">登录记录</a>
                                        </div>
                                    </div>
                                    <div class="user_center_bottom_box">
                                        <p class="user_center_listtitle">消息中心</p>
                                        <div class="user_center_listmain cf">
                                            <a @click="toCenter" data-name="sjx" data-value="sjx">收件箱</a>
                                            <a @click="toCenter" data-name="fjx" data-value="fjx">发件箱</a>
                                            <a @click="toCenter" data-name="fxx" data-value="fxx">发消息</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="agency_center" v-if="userInfo.UtId === 1">
                                    <a class="agency_center_a" :href="DlCenterUrl" data-name="yktj"
                                       data-value="yktj" target="_blank">代理中心&ensp;></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--                    <p class="user_name" @click="toCenter" data-name="grsy" data-value="grsy">{{userInfo.LoginName}}</p>-->
                    <div class="user_balance">
                        <p><span class="iconfont icon-yonghu"></span>余额：<span style="color: #faac1f;">{{parseFloat(userInfo.Balance).toFixed(3)}}</span>元
                            <img src="../../assets/img/icon/head/reset.png" v-bind:class="Refresh==true?'refresh_anima':''" @click="refresh" alt=""/>
                        </p>
                        <div class="user_head_div">
                            <div class="user_head_box">
                                <div class="user_name">您好，{{userInfo.LoginName}}</div>
                                <a class="head_cz" @click="toCenter" data-name="zhcz" data-value="zhcz">充值</a>
                                <a class="head_cash" @click="toCenter" data-name="yetx" data-value="yetx">提款</a>
                                <div class="user_exit" @click="exit()">
                                    <span class="iconfont icon-tuichu4"></span>退出游戏
                                </div>
                                <div class="login_record">
                                    <p>上次登录</p>
                                    <p>{{lastLoginTime}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 操作 -->
                    <div class="user_operation cf">
                        <a class="recharge" @click="toCenter" data-name="zhcz" data-value="zhcz">充值</a>
                        <a class="cash" @click="toCenter" data-name="yetx" data-value="yetx">提现</a>
                        <a class="transfer" @click="toCenter" data-name="zjzh" data-value="zjzh">转账</a>
                        <router-link to="/Client" class="phone_head"><span class="iconfont icon-shouji"></span>手机客户端
                        </router-link>
                        <a class="phone_head" target="_blank" :href="kfUrl"><span
                                class="iconfont icon-htmal5icon31"></span>客服</a>
                    </div>
                    <!-- 退出 -->
                    <!--                    <div class="user_exit" @click="exit()">-->
                    <!--                        <a>退出</a>-->
                    <!--                    </div>-->
                </div>
                <div class="box_flex box_h login_status" v-else>
                    <a class="icon_a" target="_blank" :href="kfUrl"><span class="iconfont icon-htmal5icon31"></span>咨询客服</a>
                    <!--                    <router-link class="icon_a" to="/line"><span class="iconfont icon-luxiantu"></span>切换线路</router-link>-->
                    <router-link to="/Client" class="icon_a"><span class="iconfont icon-shouji"></span>手机客户端
                    </router-link>
                    <a class="login_button" @click="loginButtom">登录</a>
                    <router-link class="login_button" to="register">注册</router-link>
                    <a @click="shiwan" class="login_button play_demo">试玩</a>
                </div>
            </div>
        </div>
        <!-- 导航栏 -->
        <div class="nav_box">
            <div class="box_center cf">
                <a class="logo box_h">
                    <img src='../../assets/logo_g.png' alt="贝高"/>
                </a>
                <ul class="nav_content cf">
                    <li class="nav_item">
                        <router-link to="/home">首页</router-link>
                    </li>
                    <li class="nav_item navlottery_gamebox_show" @mouseenter="navlotteryShow(1)" @mouseleave="navlotteryHide">
                        <router-link class="nav_arrow_icon" data-id="1" data-index="1" :to="{name:'Timehonor',query: {id:1,index:1}}">彩票游戏</router-link>
                    </li>
                    <li class="nav_item navlive_gamebox_show" @mouseenter="navlotteryShow(2)" @mouseleave="navlotteryHide">
                        <router-link to="/peopleGame" class="nav_arrow_icon">真人视讯</router-link>
                    </li>
                    <li class="nav_item" @mouseenter="navlotteryShow(3)" @mouseleave="navlotteryHide">
                        <router-link to="/fishGame" class="nav_arrow_icon">捕鱼游戏</router-link>
                    </li>
                    <li class="nav_item navptgame_gamebox_show" @mouseenter="navlotteryShow(4)" @mouseleave="navlotteryHide">
                        <router-link to="/ptGame" class="nav_arrow_icon">电子游艺</router-link>
                    </li>
                    <li class="nav_item navsports_gamebox_show" @mouseenter="navlotteryShow(5)" @mouseleave="navlotteryHide">
                        <router-link to="/sportGame" class="nav_arrow_icon">体育投注</router-link>
                    </li>
                    <li class="nav_item">
                        <router-link to="/electron" class="nav_arrow_icon">电竞游戏</router-link>
                    </li>
                    <li class="nav_item navcardgame_gamebox_show">
                        <router-link to="/qpGame" class="nav_arrow_icon">棋牌游戏</router-link>
                    </li>
                    <li class="nav_item">
                        <router-link to="/preMain">优惠活动</router-link>
                    </li>
                </ul>
            </div>
            <div class="nav_select_div" @mouseleave="navlotteryHide">
                <el-collapse-transition>
                    <div class="nav_select_show div_trianglea" v-show="pulldownState === 1">
                        <!-- 彩票游戏下拉框 -->
                        <ul class="navlottery_gamebox" @mouseenter="navlotteryShow(1)">
                            <li class="navlottery_game_item box_flex" v-for="(item,index) in navAry" :key="index">
                                <div class="nav_name">{{item.NvgName}}</div>
                                <div class="box_flex cf ">
                                    <a class="navlotter_game_btn" v-for="value in item.LotteryList"
                                       :key="value.LgId"
                                       :data-id="value.LgId" :data-index="value.LsId"
                                       @click="getDescribe">{{value.Name}}<span v-if="value.IsHot"></span></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-collapse-transition>

                <el-collapse-transition>
                    <!-- 真人视讯下拉框 -->
                    <div class="div_triangle" v-show="pulldownState === 2">
                        <ul class="Live_video_gamebox box_h" @mouseenter="navlotteryShow(2)">
                            <li @click="startGame(pg[2])">
                                <div class="head_img_div">
                                    <img src="../../assets/img/head/AG.png" alt="">
                                </div>
                                <p>AG真人娱乐</p>
                            </li>
                            <li @click="startGame(pg[3])">
                                <div class="head_img_div">
                                    <img src="../../assets/img/head/BBIN.png" alt="">
                                </div>
                                <p>BBIN真人娱乐</p>
                            </li>
                            <li @click="startGame(pg[4])">
                                <div class="head_img_div">
                                    <img src="../../assets/img/head/OG.png" alt="">
                                </div>
                                <p>OG真人娱乐</p>
                            </li>
                            <li @click="startGame(pg[5])">
                                <div class="head_img_div">
                                    <img src="../../assets/img/head/sb.png" alt="">
                                </div>
                                <p>申博真人娱乐</p>
                            </li>
                            <li @click="startGame(pg[6])">
                                <div class="head_img_div">
                                    <img src="../../assets/img/head/ob.png" alt="">
                                </div>
                                <p>欧博真人娱乐</p>
                            </li>
                        </ul>
                    </div>
                </el-collapse-transition>
                <el-collapse-transition><!--捕鱼-->
                    <div class="div_triangle" v-show="pulldownState === 3">
                        <ul class="Live_video_gamebox box_h" style="height: 175px" @mouseenter="navlotteryShow(3)">
                            <li class="box_flex head_fish_box">
                                <img src="../../assets/img/head/FishingAG.png"
                                     @click="startGame({GameId:2,GameCode:'6'})"
                                     alt="捕鱼王">
                            </li>
                            <li class="box_flex head_fish_box">
                                <img src="../../assets/img/head/FishingCQ9.png"
                                     @click="startGame({GameId:12,GameCode:'AB3'})"
                                     alt="黄金渔场">
                            </li>
                            <li class="box_flex head_fish_box">
                                <img src="../../assets/img/head/FishingCQ92.png"
                                     @click="startGame({GameId:12,GameCode:'AB1'})"
                                     alt="黄金渔场2">
                            </li>
                            <li class="box_flex head_fish_box">
                                <img src="../../assets/img/head/FishingCQ93.png"
                                     @click="startGame({GameId:12,GameCode:'AT01'})"
                                     alt="一炮捕鱼">
                            </li>
                        </ul>
                    </div>
                </el-collapse-transition>
                <el-collapse-transition><!--电子-->
                    <div class="div_triangle" v-show="pulldownState === 4">
                        <ul class="Live_video_gamebox box_h" @mouseenter="navlotteryShow(4)">
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../assets/img/head/PTgame.png" @click="toDzGame('7')" alt="pt">
                                </div>
                                <p>PT电子</p>
                            </li>
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../assets/img/head/BETSOFT.png" @click="toDzGame('10')" alt="bet">
                                </div>
                                <p>BETSOFT</p>
                            </li>
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../assets/img/head/MGgame.png" @click="toDzGame('11')" alt="mg">
                                </div>
                                <p>MG</p>
                            </li>
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../assets/img/head/CQ9game.png" @click="toDzGame('12')" alt="cq9">
                                </div>
                                <p>CQ9</p>
                            </li>
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../assets/img/head/Hgame.png" @click="toDzGame('13')" alt="hab">
                                </div>
                                <p>HAB</p>
                            </li>
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../assets/img/head/AGgame.png" @click="toDzGame('2')" alt="ag">
                                </div>
                                <p>AG</p>
                            </li>
                        </ul>
                    </div>
                </el-collapse-transition>
                <el-collapse-transition><!--体育-->
                    <div class="div_triangle" v-show="pulldownState === 5">
                        <ul class="Live_video_gamebox box_h" @mouseenter="navlotteryShow(5)">
                            <li class="box_flex box_s head_ty">
                                <img src="../../assets/img/head/hg_ty.png" @click="startGame(hg)" alt="bet">
                            </li>
                            <li class="box_flex box_s head_ty">
                                <img src="../../assets/img/head/sb_ty.png" @click="startGame(sb)" alt="pt">
                            </li>
                            <li class="box_flex box_s head_ty">
                                <img src="../../assets/img/head/ss_ty.png" @click="startGame(ss)" alt="bet">
                            </li>
                        </ul>
                    </div>
                </el-collapse-transition>
            </div>
        </div>
        <!-- 弹框 -->
        <cardDom @hiddenDiv="hideCardDiv" v-show="isShow" :ary="ary" :selectNav="selectTabs"></cardDom>
        <!-- 右侧悬浮 -->
        <div ref="rightNav" class="suspension_box" v-show="$store.state.suspension && rightNavStatus">
            <div class="sus_item">
                <a :href="kfUrl" target="_blank">
                    <div class="text_box">在线客服</div>
                    <div class="sus_item_inco"><img src="../../assets/img/icon/head/sever.png"></div>
                </a>
            </div>
            <div class="sus_item moblie_btn">
                <router-link to="/Client">
                    <div class="text_box ">手机端下载</div>
                    <div class="sus_item_inco"><img src="../../assets/img/icon/head/mobile.png"></div>
                </router-link>
            </div>
            <div class="sus_item">
                <router-link to="/line">
                    <div class="text_box">切换线路</div>
                    <div class="sus_item_inco"><img src="../../assets/img/icon/head/circuit_black.png"></div>
                </router-link>
            </div>
            <div class="sus_item skin_btn">
                <a href="javascript:void(0)">
                    <div class="text_box skin">
                        <div class="color_span light" :class="theme==0?'current':''" @click="changeSkin(0)">
                            <div class="skin_active "><img src="../../assets/img/icon/head/success.png" ></div>
                        </div>
                        <div class="color_span black" :class="theme==1?'current':''" @click="changeSkin(1)">
                            <div class="skin_active "><img src="../../assets/img/icon/head/success.png" ></div>
                        </div>
                    </div>
                    <div class="sus_item_inco"><img src="../../assets/img/icon/head/theme.png"></div>
                </a>
            </div>
        </div>
        <!--        显示导航栏-->
        <div v-if="$store.state.suspension && !rightNavStatus" class="show_right_nav">
            <div @click="showRightNav">
                <span class="iconfont icon-jiantou_shangyiye"></span>
                <div>展开</div>
            </div>
        </div>
        <hintCom ref="exitHintCom" :confirm="exitConfirm">
            <template slot="content">
                <span>是否退出登录?</span>
            </template>
        </hintCom>
        <!-- 登录弹窗 -->
        <div class="login_div" v-if="loginAfter">
            <loginItem ref="loginFun"/>
        </div>
    </div>
</template>
<script>
  import cardDom from "../Elasticframe/homeCard.vue"
  import hintCom from '@/components/Elasticframe/OrderCancel.vue'
  // 引用axios封装文件
  import {postAjax, getAjax} from "../../util/ajax.js"
  import {SysKey} from "../../util/sysconfig";
  import {getUserInfo, userOut, getHeadNav} from "../../util/getdata";
  import {timeFormatProcessing} from "../../util/common";
  import loginItem from "../login/login_item";
  import {Message} from "element-ui"

  export default {
    components: {cardDom, hintCom, loginItem},
    // 刷新页面
    inject: ["reload"],
    data() {
      return {
        DlCenterUrl: '#',
        ImgServerUrl: SysKey("ImgServerUrl").SysValue,
        iosQRURL: SysKey("ImgServerUrl").SysValue + SysKey("IosQrCodeUrl").SysValue,
        androidQRURL: SysKey("ImgServerUrl").SysValue + SysKey("AndroidQrCodeUrl").SysValue,
        WapQrCodeUrl: SysKey("ImgServerUrl").SysValue + SysKey("WapQrCodeUrl").SysValue,
        SysLogo: SysKey("ImgServerUrl").SysValue + SysKey("SysLogo").SysValue,
        kfUrl: SysKey("KfCenterUrl").SysValue,
        title: "", //滚动公告
        isShow: false, //弹框状态
        Refresh: false, //是否刷新余额
        userToken: localStorage.getItem('Authorization'), //用户token
        // navAry: [], //下拉框数据
        url: SysKey("ImgServerUrl").SysValue, //图片地址
        routerName: '/', //路由地址,
        ary: [], //传入公告栏的值
        hoverState: false, //下拉框是否显示
        pulldownState: 0,//显示相对应得导航下拉
        selectTabs: '',//默认选中的公告
        pg: {
          2: {GameCode: "0", GameId: 2},
          3: {GameCode: "lobby", GameId: 3},
          4: {GameCode: "1", GameId: 4},
          5: {GameCode: "Sunbet_Lobby", GameId: 8},
          6: {GameCode: "101", GameId: 9},
        },
        sb: {
          GameCode: '0',
          GameId: 5,
        },
        ss: {
          GameCode: 'SC',
          GameId: 15,
        },
        hg: {
          GameId: 16,
          plat: 1003
        },
        imgCorlor: ['e3e1e6', '045acb', '150819', '63d4e6', '000906', '137159', '02060f', '252525', '1c2953', '673720'],
        rightNavStatus: true,
      }
    },
    computed: {
      lastLoginTime(){
        return this.$store.state.lastLoginInfo
      },
      tempStatus() {
        return this.$store.state.tempStatus
      },
      userInfo() {
        return this.$store.state.userInfo//用户信息
      },
      loginStatus() {
        return this.$store.state.loginStatus
      },
      loginAfter() {
        return this.$store.state.loginAfter
      },
      navArr() {
        return this.$store.state.navAry
      },
      navAry() {
        if (this.navArr.length === 0) return false;
        return this.navArr;
      },
      theme(){
        let lsTheme=localStorage.getItem("theme")-0;
        if(lsTheme==this.$store.state.theme){
            return this.$store.state.theme;
        }else{
            return lsTheme;
        }
      }
    },
    methods: {
      //最后一次登陆信息
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
      //关闭右侧导航栏
      closeRightNav() {
        this.$refs.rightNav.style.right = '-67px'
        setTimeout(() => {
          this.rightNavStatus = false
        }, 300)
      },
      //显示右侧导航栏
      showRightNav() {
        this.$refs.rightNav.style.right = '0'
        this.rightNavStatus = true
      },
      //更换皮肤
      changeSkin(str) {
        this.$store.commit("setTheme", str);
        localStorage.setItem("theme",str);
      },
      //去电子游艺
      toDzGame(arr) {
        this.$router.push({
          path: '/ptGame',
          query: {
            id: arr
          }
        })
      },
      loginButtom() {
        this.$store.commit('setLoginAfter', true)
      },
      exitConfirm() {
        userOut()
      },
      // 退出
      exit() {
        this.$refs.exitHintCom.show();
      },
      // 刷新
      refresh() {
        let that = this;
        if (this.Refresh === false) {
          that.Refresh = true
          getUserInfo()
          setTimeout(function () {
            that.Refresh = false
          }, 1500)
        }
      },
      // 显示弹框
      onclickGonggao(num) {
        this.selectTabs = num
        this.isShow = true
      },
      // 隐藏弹框
      hideCardDiv() {
        this.isShow = false;
      },
      // 请求用户数据
      userinfoAjax() {
        if (this.userInfo.UtId == 1 && location.hostname != 'localhost') {
          // console.log(SysKey("DlCenterUrl").SysValue)
          // this.DlCenterUrl = SysKey("DlCenterUrl").SysValue + "?token=" + localStorage.getItem("Authorization").replace("Basic ", "");
          this.DlCenterUrl = document.location.protocol + "//daili." + document.location.host.split('.').slice(-2).join('.') + "/" + "?token=" + localStorage.getItem("Authorization").replace("Basic ", "");
        }
      },
      //导航栏路由跳转
      getDescribe(e) {
        let indexs = e.target.dataset.index
        let ids = e.target.dataset.id
        let that = this
        if (indexs == 1) {
          that.routerName = "Timehonor"
        } else if (indexs == 2) {
          that.routerName = "Racing"
        } else if (indexs == 3) {
          that.routerName = "Timehonor"
        } else if (indexs == 4) {
          that.routerName = "Quickthree"
        } else if (indexs == 5) {
          that.routerName = "twenteight"
        } else if (indexs == 6) {
          that.routerName = "Timehonor"
        } else if (indexs == 7){
          that.routerName = "markSix"
        }
        this.$router.push({
          name: that.routerName,
          query: {
            id: ids,
            index: indexs
          }
        })
        this.pulldownState = 0
        this.hoverState = false
        this.reload()
      },
      //个人中心页面
      toCenter(e) {
        let name = e.target.dataset.name
        let value = e.target.dataset.value
        this.$router.push({
          name: "UserCenter",
          query: {
            name: name,
            value: value
          }
        })

      },
      // 公告
      getNotice() {
        let that = this
        let url = "api/Sys/GetSysNotice"
        getAjax(url, 1)
          .then(function (data) {
            that.title = data.Data[0].Title;
            if (data.IsSucess) {
              that.ary = data.Data.map((item, index) => {
                return Object.assign({
                  name: 'a' + index
                }, item);
              });
              that.ary.forEach((item, index) => {
                if (item.IsUrgent && localStorage.getItem('alertState') === 'true') {
                  that.isShow = true;
                  that.selectTabs = item.name;
                  that.$store.commit('CHANGEALERTSTATE');
                  localStorage.setItem('alertState', 'false');
                  return false;
                }
              })
            }
          })
          .catch(() => {
            // that.$message.error("网络异常，请刷新后在试");
          })
      },
      // 三方页面
      getGame(id) {
        if (!localStorage.getItem('Authorization')) {
          this.$store.commit('setLoginAfter', true)
          return false;
        }
        let that = this;
        let name = '';
        // let compalte=false;
        let obj = '';
        let url = "/api/ThirdGame/GetGameList?g=" + id + "&d=1";
        if (id == 2) {
          name = ""
        } else if (id == 3) {
          name = ""
        } else if (id == 4) {
          name = ""
        }
        let data = {
          name: name,
          PIndex: 1,
          PSize: 1
        };
        this.loading = this.$loading({
          lock: true,
          text: '加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)'
        });
        postAjax(url, data).then(function (data) {
          if (data.IsSucess) {
            that.startGame(data.Data.rows[0]);
          }
        }).catch(() => {
          this.loading.close();
          // that.$message.error("网络异常，请刷新后在试");
        })
      },
      startGame(arr) {
        let that = this
        if (!localStorage.getItem('Authorization')) {
          this.$store.commit('setLoginAfter', true)
          return false;
        }
        this.loading = this.$loading({
          lock: true,
          text: '加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)'
        });
        let url = "/api/ThirdGame/StartGame";
        let data = {
          GameCode: arr.GameCode || '',
          game: arr.GameId,
          plat: arr.plat || 1001
        };
        postAjax(url, data, 1).then((data) => {
          that.loading.close();
          if (data.IsSucess) {
            that.$confirm('将在新窗口打开游戏！', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success',
              center: true
            }).then(() => {
              window.open(data.Data);
            }).catch(() => {
              that.$message({
                type: 'warning ',
                message: '已取消游戏'
              });
            });
          } else {
            that.$message.error(data.Message);
          }
        }).catch(() => {
          that.loading.close();
        })
      },
      notQequestData() {
        return this.$router.currentRoute.path != '/userRegister' && this.$router.currentRoute.path != '/userLogin'
      },
      // 显示下拉
      navlotteryShow(num) {
        // this.hoverState = true;
        this.pulldownState = num;
      },
      // 隐藏下拉
      navlotteryHide() {
        this.hoverState = false;
        this.pulldownState = 0;
      },
      //
      shiwan() {
        let that = this;
        postAjax('/api/User/GetTmepUser').then(data => {
          if (data.IsSucess) {
            localStorage.setItem('Authorization', "Basic" + " " + data.Data.Token);
            localStorage.setItem('shiwan', true);
            getUserInfo();
            that.$message.success('登录成功，跳转首页中...');
            setTimeout(() => {
              that.$router.push('/home')
            }, 1000)

          } else {
            Message.error(data.Message)
          }
        })
      },
    },
    created() {
      getHeadNav()
      window.eventBus.$on('refreshHeader', () => {
        this.refresh()
      });
      if (this.notQequestData()) {
        this.userinfoAjax()
        // this.headNavAjax()
        this.getNotice()
      }
      if (localStorage.getItem('Authorization')) {
        this.lastLoginInfo()
        getUserInfo()
      }
      
    },
    watch: {
      'userInfo': function () {
        this.userinfoAjax()
      },
      'loginAfter'() {
        if (this.loginAfter) {
          this.$refs.loginFun.indentyajax()
        }
      },
    },
    mounted() {
        let lsTheme=localStorage.getItem("theme")-0;
        if(lsTheme!=this.$store.state.theme){
            this.$store.commit("setTheme", lsTheme);
        }
    }
  }
</script>

<style lang="scss" scoped>
    .top_mainbox {
        width: 100%;

        .header_topbox {
            position: relative;
            display: flex;
            align-items: center;
            height: 46px;
            color: #fff;
            font-size: 12px;
            z-index: 5;
            border-bottom: 4px solid #C19F62;

            .box_center {
                align-items: center;

                &:after{
                    content: '';
                    clear: both;
                }

                .user_center_listitembox:after, .user_head_box:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 0;
                    height: 0;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                }

                .top_messagebox {
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    width: 376px;
                    white-space: nowrap;
                    overflow: hidden;

                    span{
                        display: flex;
                        align-items: center;

                        img{
                            width:18px;
                            height: 19px;
                        }
                    }

                    p {
                        margin-top: -1px;
                        color: #fff;
                        overflow: hidden;
                        cursor: pointer;
                        margin-left: 5px;
                        vertical-align: sub;

                        * {
                            height: 40px;
                            margin-left: 6px;
                            font-size: 14px;
                            vertical-align: middle;
                        }

                        div {
                            line-height: 30px;
                        }
                    }
                }

                .icon_a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 92px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 12px;
                    color: #ffffff;

                    span {
                        padding-right: 5px;
                    }
                }

                .top_otherinfo {
                    align-items: center;
                    height: 26px;
                    line-height: 26px;

                    .user_center_listshow:hover .user_center_listbox, .user_balance:hover .user_head_div {
                        display: block;
                    }

                    .luxiantu{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height:100%;
                        
                        img{
                            width:75%;
                        }
                    }

                    .user_center {
                        display: flex;
                        height: 40px;
                        padding: 0 10px;
                        cursor: pointer;
                        position: relative;
                        
                        p {
                            display: inline-block;
                            height: 100%;
                            line-height: 40px;
                            background-image: url(../../assets/img/icon/arrow_bottom.png);
                            background-repeat: no-repeat;
                            background-position: center right;
                            background-size: 14px 8px;
                            padding-right: 15px;
                            font-size: 12px;
                        }

                        .user_center_listbox {
                            display: none;
                            width: 532px;
                            height: auto;
                            position: absolute;
                            z-index: 66;
                            left: -226px;
                            top: 27px;
                            padding-top: 13px;

                            .admin_center {
                                width: 100%;
                                
                                border-radius: 5px;
                                box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.35);

                                .user_center_listitembox {
                                    display: flex;
                                    justify-content: start;
                                    position: relative;

                                    .user_center_bottom_box {
                                        width: 25%;

                                        .user_center_listtitle {
                                            width:100%;
                                            height: auto;
                                            font-weight: 600;
                                            font-size: 14px;
                                            padding: 10px 0 10px 8px;
                                            letter-spacing: 2px;
                                            text-align: center;
                                            background: none;
                                        }

                                        .user_center_listmain {
                                            overflow: hidden;
                                            width: 100%;
                                            padding-left: 7px;

                                             a {
                                                display: block;
                                                position: relative;
                                                text-align: left;
                                                text-indent: 40px;
                                                color: #666666;
                                                line-height: 35px;
                                                font-size: 13px;

                                                &:before {
                                                    content: '';
                                                    position: absolute;
                                                    top: 13px;
                                                    left: 30px;
                                                    width: 0;
                                                    height: 0;
                                                    border-left: 4px solid #707070;
                                                    border-top: 4px solid transparent;
                                                    border-bottom: 4px solid transparent;
                                                }

                                                &:hover {
                                                    color: #2aaca2;

                                                    &:before {
                                                        border-left: 4px solid #2aaca2;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                .agency_center {
                                    display: flex;
                                    justify-content: center;
                                    width: 100%;
                                    padding: 16px 0;
                                    text-align: center;

                                    .agency_center_a {
                                        display: block;
                                        width: 120px;
                                        height: 40px;
                                        line-height: 40px;
                                        text-align: center;
                                        background-color: #008573;
                                        box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.18);
                                        border-radius: 3px;
                                        font-size: 14px;
                                        color: #ffffff;
                                    }
                                }   
                            }
                        }   
                    }
                }

                .user_balance {
                    position: relative;
                    height: 40px;
                    padding: 0 15px;
                    cursor: pointer;

                    p {
                        display: flex;
                        align-items: center;
                        height: 100%;
                        line-height: 26px;

                        span {
                            color: #ffffff;
                            padding-right: 5px;

                            &.icon-yonghu {
                                display: inline-block;
                            }
                        }

                        img {
                            display: inline-block;
                            width: 13px;
                            height: 13px;
                            margin-left: 10px;
                        }

                    }

                    .user_head_div {
                        display: none;
                        position: absolute;
                        top: 27px;
                        left: -15px;
                        width: 220px;
                        height: auto;
                        z-index: 66;
                        padding-top: 13px;

                        .user_head_box {
                            position: relative;
                            width: 100%;
                            border-radius: 5px;
                            box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.35);
                            color: #555555;
                            padding: 15px;

                            .user_name{
                                width:100%;
                                height: 20px;
                                font-weight: bold;
                            }

                            a {
                                display: block;
                                width: 190px;
                                height: 36px;
                                margin: 5px 0 15px;
                                line-height: 36px;
                                text-align: center;
                                font-size: 14px;
                                border-radius: 6px;

                                &.head_cz {
                                    margin-top: 15px;
                                    background-color: #C19F62;
                                    color: #ffffff;
                                }

                                &.head_cash {
                                    border: solid 1px #C6D1D0;
                                    background-color: #ffffff;
                                }

                                &:hover{
                                    opacity: .8;
                                }
                            }

                            .user_exit {
                                display: flex;
                                justify-content: center;
                                align-content: center;
                                width: 190px;
                                height: 36px;
                                line-height: 36px;
                                border: solid 1px #C6D1D0;
                                font-size: 14px;
                                border-radius: 6px;

                                span {
                                    display: flex;
                                    align-items: center;
                                    font-size: 20px;
                                    margin-top: 1px;
                                    margin-right: 5px;
                                }
                            }

                            .login_record {
                                margin-top: 15px;
                                text-align: center;
                                color: #9b9b9b;

                                p {
                                    line-height: 20px;
                                }
                            }
                        }
                        
                    }
                }

                /* 刷新旋转动画 */
                .refresh_anima {
                    animation: refresh 1.5s ease-in-out 0s 1 alternate forwards;
                }

                @keyframes refresh {
                    from {
                        transform: rotateZ(0deg)
                    }
                    to {
                        transform: rotateZ(360deg)
                    }

                }

                .user_operation{

                    a {
                        float: left;
                        height: 40px;
                        line-height: 40px;
                        padding: 0 15px;
                        font-size: 12px;
                        text-align: center;
                        cursor: pointer;

                        &.phone_head {
                            display: flex;
                            align-items: center;

                            &:last-child {
                                border-right: none;
                            }
                        }

                        &:last-child {
                            margin-right: 0px;
                        }
                    }
                }
            }
        }

        /* 导航栏 */
        .nav_box {
            position: relative;
            height: 70px;
            z-index: 4;

            .logo {
                float: left;
                height: 64px;
                justify-content: center;
                align-items: center;

                img {
                    width: auto;
                    height: 50px;
                    margin-top: 7px;
                }
            }

            .nav_content {
                float: right;

                .nav_item {
                    float: left;
                    position: relative;
                    margin-left: 50px;

                    a {
                        display: block;
                        height: 70px;
                        line-height: 70px;
                        text-align: right;
                        font-size: 16px;
                        font-weight: 400;
                        cursor: pointer;

                        &.nav_arrow_icon {
                            position: relative;
                            background-position: center right 15px;
                            background-repeat: no-repeat;
                            background-size: 13px 11px;

                        }
                    }
                }
            }

            .nav_select_div {
                position: absolute;
                top: 70px;
                left: 0;
                width: 100%;
                height: auto;
                z-index: 50;

                .nav_select_show {
                    position: relative;
                    display: block;
                    width: 100%;

                    .navlottery_gamebox {
                        display: flex;
                        justify-content: center;
                        position: relative;
                        width: 1200px;
                        margin: 0 auto;
                        z-index: 66;
                        padding: 25px 0;

                        .navlottery_game_item {

                            .navlotter_game_btn {
                                position: relative;
                                display: block;
                                width: 120px;
                                height: 34px;
                                border-radius: 6px;
                                text-align: center;
                                cursor: pointer;
                                font-size: 14px;
                                font-weight: 500;
                                line-height: 35px;
                                margin-top:10px;

                                &:first-child{
                                    margin-top: 3px;
                                }

                                span {
                                    display: block;
                                    position: absolute;
                                    top:-12px;
                                    right: -10px;
                                    width: 20px;
                                    height: 28px;
                                    background: url("../../assets/img/icon/hot.png") center no-repeat;
                                    animation: navtop .3s infinite;
                                    animation-direction: alternate;

                                    @keyframes navtop {
                                        from {
                                            top: -12px;
                                        }
                                        to {
                                            top: -10px;
                                        }
                                    }
                                }

                                &:hover {
                                    background-color: #008573;
                                    color: #fff;
                                    border-color: #008573;
                                }

                                &:hover:before {
                                    border-left: 6px solid #008573;
                                }
                            }

                            .nav_name {
                                font-size: 16px;
                                font-weight: bolder;
                                margin-bottom: 7px;
                                text-indent: 2px;
                            }
                        }
                    }
                }

                /* 真人视讯下拉 */
                .Live_video_gamebox {
                    position: relative;
                    width: 1200px;
                    height: 265px;
                    margin: 0 auto;
                    z-index: 66;

                    li {
                        width: 20%;
                        cursor: pointer;

                        &:hover {
                            background-color: rgba(0, 0, 0, .1);
                        }

                        p {
                            text-align: center;
                        }

                        .head_img_div {
                            display: flex;
                            justify-content: center;
                            align-items: flex-end;
                            width: 100%;
                            height: 215px;

                            img {
                                width: 200px;
                                height: auto;
                            }
                        }

                        .head_img_dz {
                            display: flex;
                            justify-content: center;
                            align-items: flex-end;
                            width: 100%;
                            height: 200px;

                            img {
                                width: 177px;
                            }
                        }



                        .head_fish_box {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img {
                                height: 100%;
                            }
                        }

                        &.head_ty {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            white-space: nowrap;
                            flex-direction: row;
                        }
                    }
                }

                .div_triangle {
                    position: relative;
                    width: 1200px;
                    margin: 0 auto;
                }

                .div_trianglea {
                    position: relative;
                    width: 1200px;
                    margin: 0 auto;
                }

                .live_video-enter-active, .live_video-leave-active {
                    transition: navhover .3s inherit;
                    
                    @keyframes navhover {
                        from {
                            height: 0;
                        }
                        to {
                            height: auto;
                        }
                    }
                }

                .live_video-enter, .live_video-leave-to {
                    height: 0;
                }
            }
        }
        
        /* 右侧悬浮 */
        .suspension_box {
            position: fixed;
            right: 5px;
            top: 0;
            bottom: 0;
            z-index: 3;
            font-size: 14px;
            width: 50px;
            margin: auto;
            padding-top:15vw;
            transition: all .3s;

            .sus_item {
                display:flex;
                justify-content:space-between;
                width: 50px;
                height: 50px;
                position: relative;
                border-radius: 10px;
                margin-bottom: 5px;
                transition: all .3s;
                overflow: hidden;
                float: right;
                z-index: 0;
                
                .sus_item_inco{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position:absolute;
                    right: 0;
                    z-index: 1;
                    width:50px;
                    height: 50px;
                    transition: all .3s;
                }

                .text_box{
                    display: flex;
                    align-items: center;
                    position:absolute;
                    z-index: -1;
                    left: 0;
                    height: 50px;
                    transition: all .3s;
                    border-radius: 10px;
                    padding: 0 15px;
                    white-space: nowrap;
                    color:#666;
                    font-size: 14px;
                    font-weight: 400;
                    transition: all .3s;
                    opacity: 0;

                    &.skin{
                        padding: 0 8px;
                        justify-content: space-between;

                        .color_span{
                            width:38px;
                            height: 23px;
                            margin: 0 5px;
                            position: relative;

                            &.light{
                                background-color: #fff;
                            }

                            &.black{
                                background-color:#191A1F;
                            }

                            &.current{

                                .skin_active{
                                    display: block;
                                }
                            }

                            .skin_active{
                                display: none;
                                position: absolute;
                                right: -2px;
                                bottom: -2px;
                                width:15px;
                                height: 15px;

                                img{
                                    width:100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                    
                }

                .code_box {
                    position: absolute;
                    width: 134px;
                    /*height: 400px;*/
                    background-color: #008573;
                    overflow: hidden;
                    left: -134px;
                    top: 0;
                    padding: 13px;
                    line-height: 30px;
                    font-size: 0;
                    transition: all .4s linear 10ms;
                    display: none
                }

                &:last-child{
                    margin-bottom: 0;
                }

                span{
                    color: #666;
                }

                &:hover{
                    width: 130px;

                    &.moblie_btn{
                        width:145px;
                    }

                    &.skin_btn{
                        width:155px;
                    }

                    .text_box{
                        display: flex;
                        opacity: 1;
                    }
                }
            }
        }

        .show_right_nav {
            position: fixed;
            right: 0;
            top: 40vw;
            width: 67px;
            height: 80px;
            z-index: 3;

            div {
                width: 67px;
                height: 80px;
                padding: 0 0 20px;
                color: #b2b2b2;
                text-align: center;
                background-color: #383838;
                cursor: pointer;

                span {
                    font-size: 34px;
                }

                &:hover {
                    color: #ffffff;
                    background-color: #008573;
                }
            }
        }

        .register__login {
            padding-right: 12px;
            font-size: 0px;

            a {
                color: #fff;
                width: 57px;
                height: 20px;
                background: #088e84;
                display: inline-block;
                text-align: center;
                border-radius: 2px;
                line-height: 20px;
                font-size: 13px;

                &:last-child {
                    margin-left: 5px;
                }
            }
        }
    }

    .navcardgame_gamebox_show img {
        margin: 5px 0 !important;
    }


    .nav_content a {
        cursor: pointer;
    }

    .login_status {
        justify-content: flex-end;
        align-items: center;

        .login_button {
            width: 56px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: #fff;
            text-align: center;
            margin-left: 6px;
            cursor: pointer;
            background-color: #C19F62;
            border-radius: 15px;
            font-weight: 400;

            &.play_demo {
                background: linear-gradient(-90deg, #FF8E86, #FE7668);
            }
        }   
    }

    .icon_a:hover, .user_center:hover, .user_balance:hover, .user_operation > a:hover {
        background-color: rgba(0, 0, 0, .1);
    }

    .icon-htmal5icon31 {
        font-size: 20px;
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
</style>
<template>
    <div class="center_main" ref="minHeight">
        <el-row class="user_center_box">
            <el-col class="menuLeftParent" ref="menuLeft" :span="4">
                <div class="bg-purple menuLeft">
                    <div class="user_head">
                        <div>
                            <img src="../../static/img/user.png" alt="">
                        </div>
                        <p>{{userInfo.LoginName}}</p>
                    </div>
                    <el-row class="user_tac">
                        <el-col :span="24">
                            <el-menu
                                    :default-active="defaultactive"
                                    :active="defaultactive"

                                    class="el-menu-vertical-demo"
                                    :unique-opened="true"
                                    text-color="#707070"
                                    active-text-color="#008573"
                                    @open="handleOpen"
                                    @close="handleClose"
                                    @select="handleSelect"
                            >
                                <el-submenu index="1">
                                    <template slot="title" index="1-1" style="height: 45px;line-height: 44px">
                                        <span :class="['iconfont','icon-gerenzhongxin-zhong1',currChoosed==1?'':'']" style="font-size: 18px;color: #a8b0ad;"></span>
                                        <span class="titles">个人中心</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item @click="userAdministration('grsy','grsy')" index="1-1-1">
                                            个人首页
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('yhkgl','yhkgl')" index="1-1-2">
                                            银行卡管理
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('grzl','grzl')" index="1-1-3">
                                            个人资料
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('dljl','dljl')" index="1-1-4">
                                            登录记录
                                        </el-menu-item>
                                    </el-menu-item-group>

                                </el-submenu>
                                <el-submenu index="2">
                                    <template slot="title">
                                        <span :class="['iconfont','icon-caiwuzhongxin',currChoosed==2?'':'']" style="font-size: 20px;color: #a8b0ad;"></span>
                                        <span class="titles">财务中心</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item @click="userAdministration('zhcz','zhcz')" index="2-1-1">
                                            账户充值
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('yetx','yetx')" index="2-2-2">
                                            余额提现
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('zjzh','zjzh')" index="2-3-3">
                                            资金转换
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('czjl','czjl')" index="2-4">
                                            充值记录
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('txjl','txjl')" index="2-5">
                                            提现记录
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('zzjl','zzjl')" index="2-6">
                                            转账记录
                                        </el-menu-item>
                                    </el-menu-item-group>

                                </el-submenu>

                                <el-submenu index="3">
                                    <template slot="title">
                                        <span :class="['iconfont','icon-dingdan',currChoosed==3?'':'']" style="font-size: 20px;color: #a8b0ad;"></span>
                                        <span class="titles">订单报表</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item @click="userAdministration('tjbb','tjbb')" index="3-0">
                                            统计报表
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('tzjl','tzjl')" index="3-1">
                                            投注记录
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('zhjl','zhjl')" index="3-2">
                                            追号记录
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('zbmx','zbmx')" index="3-3">
                                            账变明细
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('jfmx','jfmx')" index="3-4">
                                            积分明细
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('hdbb','hdbb')" index="3-5">
                                            活动报表
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('sfjl','sfjl')" index="3-7">
                                            三方记录
                                        </el-menu-item>
                                        <!--                    <el-menu-item @click="userAdministration('yktj','yktj')" index="3-6"><span></span>盈亏统计</el-menu-item>-->
                                    </el-menu-item-group>

                                </el-submenu>

                                <!-- <el-submenu index="4">
                                  <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span class="titles">团队报表</span>
                                  </template>
                                  <el-menu-item-group>
                                    <el-menu-item index="4-1">团报报表</el-menu-item>
                                  </el-menu-item-group>
                                </el-submenu> -->

                                <el-submenu index="5">
                                    <template slot="title">
                                        <span :class="['iconfont','icon-xiaoxizhongxin',currChoosed==5?'':'']" style="font-size: 20px;color: #a8b0ad;"></span>
                                        <span class="titles">消息中心</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item @click="userAdministration('sjx','sjx')" index="5-1">收件箱
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('fjx','fjx')" index="5-2">发件箱
                                        </el-menu-item>
                                        <el-menu-item @click="userAdministration('fxx','fxx')" index="5-3">发消息
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>

                                <!-- <el-submenu index="6">
                                  <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span class="titles">意见反馈</span>
                                  </template>
                                  <el-menu-item-group>
                                    <el-menu-item index="6-1">我要反馈</el-menu-item>
                                    <el-menu-item index="6-2">反馈记录</el-menu-item>
                                  </el-menu-item-group>
                                </el-submenu> -->
                            </el-menu>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col class="menuRightParent" :span="20">
                <div class="panel_title"><b>{{panelname}}</b></div>
                <div ref="menuRight" class="panel_content">
                    <!--个人首页-->
                    <grsy v-if="choose_each_one[0]=='grsy'" @grsygobingrzl="grsygobingrzljs"></grsy>
                    <!-- 银行卡管理 -->
                    <yhkgl v-if="choose_each_one[0]=='yhkgl'" @gobingrzl="gobingrzljs"></yhkgl>
                    <!-- 个人资料 -->
                    <grzl v-if="choose_each_one[0]=='grzl'"></grzl>
                    <!-- 登录记录 -->
                    <dljl v-if="choose_each_one[0]=='dljl'"></dljl>

                    <!-- 账户中心 -->
                    <!-- 账户充值 -->
                    <zhcz v-if="choose_each_one[0]=='zhcz'"></zhcz>
                    <!-- 余额提现 -->
                    <yetx v-if="choose_each_one[0]=='yetx'" @gobindyhk="gobindyhkjs"></yetx>
                    <!-- 资金转换 -->
                    <zjzh v-if="choose_each_one[0]=='zjzh'"></zjzh>
                    <!-- 充值记录 -->
                    <czjl v-if="choose_each_one[0]=='czjl'"></czjl>
                    <!-- 提现记录 -->
                    <txjl v-if="choose_each_one[0]=='txjl'"></txjl>
                    <!-- 转账记录 -->
                    <zzjl v-if="choose_each_one[0]=='zzjl'"></zzjl>

                    <!-- 订单报表 -->
                    <!-- 统计报表 -->
                    <tjbb v-if="choose_each_one[0]=='tjbb'"></tjbb>
                    <!-- 投注记录 -->
                    <tzjl v-if="choose_each_one[0]=='tzjl'"></tzjl>
                    <!-- 追号记录 -->
                    <zhjl v-if="choose_each_one[0]=='zhjl'"></zhjl>
                    <!-- 账变明细 -->
                    <zbmx v-if="choose_each_one[0]=='zbmx'"></zbmx>
                    <!-- 积分明细 -->
                    <jfmx v-if="choose_each_one[0]=='jfmx'"></jfmx>
                    <!-- 活动报表 -->
                    <hdbb v-if="choose_each_one[0]=='hdbb'"></hdbb>
                    <!-- 盈亏统计 -->
                    <yktj v-if="choose_each_one[0]=='yktj'"></yktj>
                    <!-- 三方记录 -->
                    <sfjl v-if="choose_each_one[0]=='sfjl'"></sfjl>

                    <!-- 团队报表 -->
                    <!-- <tbbb v-if="choose_each_one[0]=='tzjl'"></tbbb> -->

                    <!-- 消息中心 -->
                    <!-- 收件箱 -->
                    <sjx v-if="choose_each_one[0]=='sjx'"></sjx>
                    <!-- 发件箱 -->
                    <fjx v-if="choose_each_one[0]=='fjx'"></fjx>
                    <!-- 发消息 -->
                    <fxx v-if="choose_each_one[0]=='fxx'"></fxx>

                    <!-- 意见反馈 -->
                    <!-- 我要反馈 -->
                    <!-- <wyfk v-if="choose_each_one[0]=='tzjl'"></wyfk> -->
                    <!-- 反馈记录 -->
                    <!-- <fkjl v-if="choose_each_one[0]=='tzjl'"></fkjl> -->
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
  import grsy from '../UserComps/grsy'
  import yhkgl from '../UserComps/yhkgl'
  import grzl from '../UserComps/grzl'
  import dljl from '../UserComps/dljl'

  import zhcz from '../AccountCenter/zhcz'
  import yetx from '../AccountCenter/yetx'
  import zjzh from '../AccountCenter/zjzh'
  import czjl from '../AccountCenter/czjl'
  import txjl from '../AccountCenter/txjl'
  import zzjl from '../AccountCenter/zzjl'

  import tjbb from '../OrderReport/tjbb'
  import tzjl from '../OrderReport/tzjl'
  import zhjl from '../OrderReport/zhjl'
  import zbmx from '../OrderReport/zbmx'
  import jfmx from '../OrderReport/jfmx'
  import hdbb from '../OrderReport/hdbb'
  import yktj from '../OrderReport/yktj'
  import sfjl from '../OrderReport/sfjl'

  import tbbb from '../TeamReports/tbbb'

  import sjx from '../InfoCenter/sjx'
  import fjx from '../InfoCenter/fjx'
  import fxx from '../InfoCenter/fxx'

  import wyfk from '../Feedback/wyfk'
  import fkjl from '../Feedback/fkjl'

  import {HeightMixins} from "../../mixins/payloadHeightMixin";

  export default {
    // 刷新页面
    mixins: [HeightMixins],
    inject: ["reload"],
    components: {
      grsy,
      yhkgl,
      grzl,
      dljl,
      zhcz,
      yetx,
      zjzh,
      czjl,
      txjl,
      zzjl,
      tzjl,
      zhjl,
      zbmx,
      jfmx,
      hdbb,
      yktj,
      tbbb,
      sjx,
      fjx,
      fxx,
      wyfk,
      fkjl,
      tjbb,
      sfjl
    },
    computed: {
      userInfo() {
        return this.$store.state.userInfo
      }
    },
    data() {
      return {
        choose_each_one: ['grsy', 'grsy'],//当前是在哪个菜单里面
        //左侧当前选中的是哪个大菜单
        currChoosed: 0,
        defaultactive: '1-1-1',//默认
        navselected: '1-1-1',
        privateHeight: 0,
        panelname: '个人中心',
        panelInfo: {
          grsy: '个人首页',
          yhkgl: '银行卡管理',
          grzl: '个人资料',
          dljl: '登录记录',
          zhcz: '账户充值',
          yetx: '余额提现',
          zjzh: '资金转换',
          czjl: '充值记录',
          txjl: '提现记录',
          zzjl: '转账记录',
          tzjl: '投注记录',
          zhjl: '追号记录',
          zbmx: '账变明细',
          jfmx: '积分明细',
          hdbb: '活动报表',
          yktj: '盈亏统计',
          sjx: '收件箱',
          fjx: '发件箱',
          fxx: '发消息',
          tjbb: '统计报表',
          sfjl: '三方记录'
        }
      }
    },

    methods: {
      handleOpen(key, keyPath) {
        this.currChoosed = key;
        switch (key) {
          case '1':
            this.userAdministration('grsy', 'grsy')
            break;
          case '2':
            this.userAdministration('zhcz', 'zhcz')
            break;
          case '3':
            this.userAdministration('tjbb', 'tjbb')
            break;
          case '5':
            this.userAdministration('sjx', 'sjx')
            break;
        }
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
        this.currChoosed = 0;
      },
      handleSelect(key, keyPath) {
        this.defaultactive = keyPath.join("-");
      },
      //打开子菜单
      childMenu(index) {
        // console.log(index);
      },
      userAdministration(val, name) {
        this.panelname = this.panelInfo[name];
        this.$router.push({
          name: "UserCenter",
          query: {
            name: name,
            value: val
          }
        })
      },
      fix2Page(val, name) {
        this.choose_each_one = [val, name];
        switch (val) {
          case 'grsy':
            this.defaultactive = '1-1-1';
            break;
          case 'yhkgl':
            this.defaultactive = '1-1-2';
            break;
          case 'grzl':
            this.defaultactive = '1-1-3';
            break;
          case 'dljl':
            this.defaultactive = '1-1-4';
            break;

          case 'zhcz':
            this.defaultactive = '2-1-1';
            break;
          case 'yetx':
            this.defaultactive = '2-2-2';
            break;
          case 'zjzh':
            this.defaultactive = '2-3-3';
            break;
          case 'czjl':
            this.defaultactive = '2-4';
            break;
          case 'txjl':
            this.defaultactive = '2-5';
            break;
          case 'zzjl':
            this.defaultactive = '2-6';
            break;

          case 'tjbb':
            this.defaultactive = '3-0';
            break;
          case 'tzjl':
            this.defaultactive = '3-1';
            break;
          case 'zhjl':
            this.defaultactive = '3-2';
            break;
          case 'zbmx':
            this.defaultactive = '3-3';
            break;
          case 'jfmx':
            this.defaultactive = '3-4';
            break;
          case 'hdbb':
            this.defaultactive = '3-5';
            break;
          case 'yktj':
            this.defaultactive = '3-6';
            break;
          case 'sfjl':
            this.defaultactive = '3-7';
            break;

          case 'sjx':
            this.defaultactive = '5-1';
            break;
          case 'fjx':
            this.defaultactive = '5-2';
            break;
          case 'fxx':
            this.defaultactive = '5-3';
            break;
        }
        switch (val) {
          case 'grsy':
          case 'yhkgl':
          case 'grzl':
          case 'dljl':
            this.currChoosed = 1;
            break;

          case 'zhcz':
          case 'yetx':
          case 'zjzh':
          case 'czjl':
          case 'txjl':
          case 'zzjl':
            this.currChoosed = 2;
            break;

          case 'tjbb':
          case 'tzjl':
          case 'zhjl':
          case 'zbmx':
          case 'jfmx':
          case 'hdbb':
          case 'yktj':
          case 'sfjl':
            this.currChoosed = 3;
            break;

          case 'sjx':
          case 'fjx':
          case 'fxx':
            this.currChoosed = 5;
            break;
        }
      },
      gobindyhkjs(e) {
        this.userAdministration('yhkgl', 'yhkgl')
      },
      gobingrzljs(e) {
        this.userAdministration('grzl', 'grzl')
      },
      grsygobingrzljs(e) {
        this.userAdministration('grzl', 'grzl')
      },
      _initHeight() {
        let RightHeight = this.$refs.menuRight
        this.privateHeight = RightHeight.offsetHeight
      }
    },
    created() {
      this.fix2Page(this.$route.query.value, this.$route.query.name)
      this.panelname = this.panelInfo[this.$route.query.name]
    },
    // 监听刷新页面
    watch: {
      $route() {
        this.fix2Page(this.$route.query.value, this.$route.query.name)
        this.$nextTick(() => {
          this._initHeight()
        })
        this.panelname = this.panelInfo[this.$route.query.name]
      }
    },
    mounted() {
      this.$nextTick(() => {
        let minHeight = document.documentElement.clientHeight - 300;
        this.$refs.minHeight.style.minHeight = minHeight + 'px';
      })
    }
  }
</script>
<style>

    .unpaidState {
        color: #8b8b8b;
    }
    .chedan {
        color: #b0b0b0;
    }
    .cancelState {
        color: #008573;
    }

    .payState {
        color: #f21d32;
    }


    /*给所有弹窗变头部*/
    .el-dialog__header {
        background: #2ba498 !important;
        border: 0 !important;
    }

    .el-dialog__title {
        color: #fff !important;
        font-size: 16px !important;
        font-weight: bold !important;
    }

    .el-table--border {
        border-left: 1px solid #EBEEF5 !important;
    }
    .el-menu{
        border-right: none !important;
    }
    .el-submenu__title:hover{
        background-color: #008573 !important;
    }
    .el-submenu__title:hover span{
        color: #ffffff !important;
    }
    .el-menu-item.is-active{
        background-color: #ebeeed !important;
    }
    .el-menu-item:focus, .el-menu-item:hover{
        background-color: #ebeeed !important;
    }
    .el-table--border th:last-child {
        border-right: 1px !important;
    }

    .tableData .el-table th:last-child {
        border-right: 1px !important;
    }

    .right_top {
        font-size: 18px !important;
        font-weight: bold !important;
    }

    .pay_succ {
        color: #2ac1b1;
    }

    .pay_fail {
        color: #818181;
    }

    /*此页面的样式*/
    .center_main .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
        color: #fff;
    }

    .center_main .el-pager li {
        min-width: 32px !important;
    }

    /*.center_main .el-submenu__title i{color:#74aca6;}*/
    /*提示信息的样式*/
    .warning_img {
        margin: 34px 0 28px;
        text-align: center;
    }

    /*重置左边导航栏选中颜色*/
    .menuLeft .is-opened {
        border: none;
        background-color: #008573 !important;
    }
    .menuLeft .is-opened > div.el-submenu__title{
        border-radius: 5px;
    }
    .menuLeft .is-opened > .el-submenu__title > span {
        color: #ffffff !important;
    }

    .menuLeft .el-submenu {
        background-color: #ffffff;
    }

    .menuLeftParent .el-menu-item {
        width: 100%;
        margin: 0 auto;
        color: #707070;
        min-width: 100px !important;
    }

    .menuLeftParent .el-menu-item > span {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 8px;
        border: solid 1px #a2a2a2;
        border-radius: 100%;
    }

    .menuLeftParent .el-menu-item:last-child {
        border: none;
    }

    .menuLeftParent .el-menu-item-group__title {
        display: none !important;
    }

    .el-submenu__title i {
        display: none !important;
    }

    .menuLeft .el-submenu__title {
        height: 45px;
        line-height: 44px;
    }
</style>
<style lang="scss" scoped>
    .center_main {
        padding: 26px 0;
    }

    .user_center_box {
        position: relative;
        width: 1200px;
        margin: auto;
        height: auto; /*暂时用*/
        .menuLeftParent {
            height: 100%;

            .menuLeft {
                height: 971px;

                .user_head {
                    width: 100%;
                    height: 140px;

                    &::before {
                        content: '';
                        display: block;
                        width: 195px;
                        height: 3px;
                        margin-left: -2px;
                        background-color: #008573;
                        box-shadow: 0 1px 1px 0 rgba(49, 166, 157, 0.7);
                    }

                    div {
                        width: 73px;
                        height: 73px;
                        margin: 21px auto 14px;
                        background-color: #2ba498;
                        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3);
                        /*border: solid 2px #ffffff;*/
                        border-radius: 100%;

                        img {
                            width: 100%;
                        }
                    }

                    p {
                        font-size: 16px;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 16px;
                        letter-spacing: 0px;
                        color: #707070;
                        text-align: center;
                    }
                }
            }
        }

        .menuRightParent {
            height: 971px;
            background-color: #ffffff;
            /*overflow:hidden;
            zoom:1;*/
            .panel_title {
                width: 100%;
                height: 50px;
                background-color: #008573;
                border-bottom: solid 1px #008573;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 49px;
                letter-spacing: 1px;
                color: #ffffff;
                text-align: center;
            }

            .panel_content {
                width: 100%;
                height: 920px;
            }
        }

    }

    .bg-purple {
        background-color: #ffffff;
        margin-right: 10px;
    }

    /*左边导航、*/
    .titles {
        font-weight: bold;
        color: #171717 !important;
    }

    .user_tac {
        text-align: center;
        color: white;
        padding: 0 20px;
        overflow-x: hidden;
    }

    .top_nav {
        height: 50px;
        line-height: 50px;
        background-color: #74aca6;
    }

    .el-menu-vertical-demo {
        background-color: #f2f2f2;
    }

    .menuLeft li.el-menu-item {
        height: 40px;
        line-height: 40px;
        text-align: left;
        padding-left: 50px !important;
    }
</style>

<template>
    <!-- 重庆时时彩 -->
    <div class="allgame-mainbox gamepanel">

        <div class="box_center">
            <!-- 中奖信息 -->
            <div class="title_box box_h">
                <div class="title_logo">
                    <img :src="logoImgUrl" alt=""/>
                </div>
                <!--投注时间-->
                <div class="title_countdown_box">
                    <h3 class="racing_titles_box">投注倒计时&emsp;{{NowLssue}}&nbsp;期</h3>
                    <div class="time">
                        <countDown :time="NowTime" @upTimeData="upTimeData"></countDown>
                    </div>
                </div>
                <!-- 往期中奖号码-时时彩系列 -->
                <div v-if="GameIndex == 1" class="title_countdown_box">
                    <h3 class="winning_box_title">开奖号码&emsp;{{LastLssue}}&nbsp;期
                        <router-link class="to_zst"
                                     :to="{name:'Trendmap',query:{id:$route.query.id,index:$route.query.index}}"
                                     target="_blank">
                            <span class="iconfont icon-zoushitu"></span>&ensp;走势
                        </router-link>
                    </h3>
                    <!-- 中奖号码盒子 -->
                    <div>
                        <open-number :data-array="drawingNumberData"></open-number>
                    </div>
                </div>
                <!-- 往期中奖号码-赛车系列 -->
                <div v-if="GameIndex == 2" class="winning_box">
                    <!-- 近一期 -->
                    <div class="one_data" v-if="choicenum">
                        <div class="winning_box_title">开奖号码&emsp;{{LastLssue}}&emsp;期</div>
                        <!-- 中奖号码盒子 -->
                        <div class="winning_main_sc box_h">
                            <div class="winning_item_sc racing_car_iconbox" v-for="(item,index) in LastNum"
                                 :key="index">
                                <p class="racing_car_rank">{{LastNumRank[index]}}</p>
                                <img :src='"../../static/img/gametype/racing_car"+item+".png"'/>
                                <!--                <div class="winning_item_list">{{item}}</div>-->
                                <!--                <img :src='"../../static/img/gametype/racing_car"+item+".png"'/>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 玩法内容 -->
            <div class="gametype_center">
                <!-- 主要内容 -->
                <div class="Timhonor_content_box">
                    <!-- 最顶部导航栏 -->
                    <!-- 时时彩 -->

                    <!-- 中间内容 -->
                    <div class="content_big">
                        <div class="content_box_left">
                            <div class="content_nav" v-if="GameIndex == 1">
                                <template v-if="GameIndex == 1">
                                    <ul class="content_nav_top box_h">
                                        <li><a :class="NavSwich == 0?'select_a':''" :data-id="0" @click="topNavSwitch">数字盘</a>
                                        </li>
                                        <li><a :class="NavSwich == 1?'select_a':''" :data-id="1" @click="topNavSwitch">双面盘</a>
                                        </li>
                                        <li><a :class="NavSwich == 2?'select_a':''" :data-id="2" @click="topNavSwitch">龙虎斗</a>
                                        </li>
                                        <li><a :class="NavSwich == 3?'select_a':''" :data-id="3" @click="topNavSwitch">全五中一</a>
                                        </li>
                                      <li style="margin-left: 20px;"><router-link :to="{name:'Timehonor',query: {id:$route.query.id,index:$route.query.index}}" class="change_bth_a">经典玩法<div></div></router-link></li>
                                    </ul>
                                </template>
                            </div>
                            <div class="content_nav" v-if="GameIndex == 2">
                                <template v-if="GameIndex == 2">
                                    <ul class="content_nav_top box_h">
                                        <li><a :class="NavSwich == 0?'select_a':''" :data-id="0" @click="topNavSwitch">双面</a>
                                        </li>
                                        <li><a :class="NavSwich == 1?'select_a':''" :data-id="1" @click="topNavSwitch">冠亚和值</a>
                                        </li>
                                        <li><a :class="NavSwich == 2?'select_a':''" :data-id="2" @click="topNavSwitch">冠亚季和值</a>
                                        </li>
                                        <li><a :class="NavSwich == 3?'select_a':''" :data-id="3" @click="topNavSwitch">首尾和值</a>
                                        </li>
                                        <li><a :class="NavSwich == 4?'select_a':''" :data-id="4" @click="topNavSwitch">1-10名</a>
                                        </li>
                                        <li><a :class="NavSwich == 5?'select_a':''" :data-id="5" @click="topNavSwitch">龙虎斗</a>
                                        </li>
                                      <li style="margin-left: 20px;"><router-link :to="{name:'Racing',query: {id:$route.query.id,index:$route.query.index}}" class="change_bth_a">经典玩法<div></div></router-link></li>
                                    </ul>
                                </template>
                            </div>
                            <!-- 选号内容 -->
                            <template v-if="navsw==186">
                                <div class="betContent">
                                    <div v-for="(item,num) in sites" :class="[item.LpId==210?'contentW':'contentH']"
                                         :key="num">
                                        <template
                                                v-if="item.LpId==210 || item.LpId==222 || item.LpId==223 || item.LpId==224">
                                            <div :class="['contentW210', 'setFontTitle',item.PlayContentList.length<6?'border_bottom_none':'',index>4&&index+1>(item.PlayContentList.length-((item.PlayContentList.length)%5 == 0?5:(item.PlayContentList.length)%5))?'border_bottom_none':'',(item.PlayContentList.length == (index+1)&&item.PlayContentList.length%5>0)?'border_right_dashed':'']"
                                                 v-for="(values,index) in item.PlayContentList" :key="index">
                                                <div class="hpjW">
                                                    <span class="numberText setFontTitle">号码</span>
                                                    <span class="oddText setFontTitle">赔率</span>
                                                    <span class="betMoneyText setFontTitle">金额</span>
                                                    <div class="dtjW"
                                                         :class="values.selectStatus?'checedTrue':'checedFalse'">
                                                        <span :class="['betPlay', 'setFontText',/^[\d|\.]*$/.test(values.Content) == true?'num_font_text':'']"
                                                              @click="show(item,index,num)">{{values.Content}}</span>
                                                        <span class="odds setFontOdds" @click="show(item,index,num)">{{values.Odds}}</span>
                                                        <span><input class="betMoney"
                                                                     @input="inputFun(item,index,num,$event)"
                                                                     :value="values.inValue"
                                                                     @click="inputShow(item,index,num)"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div :class="['bet_content_main',sites.length<6?'border_bottom_none':'',num>4&&num+1>(sites.length-((sites.length)%5 == 0?5:(sites.length)%5))?'border_bottom_none':'',(sites.length == (num+1)&&sites.length%5>0)?'border_right_dashed':'']"
                                                 :key="num">
                                                <div class="numberW setFontTitle">{{item.Alias}}</div>
                                                <div class="hpj">
                                                    <span class="numberText setFontTitle">号码</span>
                                                    <span class="oddText setFontTitle">赔率</span>
                                                    <span class="betMoneyText setFontTitle">金额</span>
                                                </div>
                                                <div v-for="(values,index) in item.PlayContentList" :key="index"
                                                     class="dtj"
                                                     :class="values.selectStatus?'checedTrue':'checedFalse'">
                                                    <span :class="['betPlay','setFontText',/^[\d|\.]*$/.test(values.Content) == true?'num_font_text':'']"
                                                          @click="show(item,index,num)">{{values.Content}}</span>
                                                    <span class="odds setFontOdds" @click="show(item,index,num)">{{values.Odds}}</span>
                                                    <span><input class="betMoney"
                                                                 @input="inputFun(item,index,num,$event)"
                                                                 :value="values.inValue"
                                                                 @click="inputShow(item,index,num)"></span>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </template>
                            <!-- 用户投注 -->
                            <div class="twenty_user_opration box_h">
                                <!-- 用户输入投注数量 -->
                                <div class="user_input_box" style="padding-top: 8px">
                                    <div class="user_input">
                                        <span>投注金额：</span><input type="text" v-model="betMount"/>
                                    </div>
                                    <div class="user_pay_for">
                                        <span>当前选择：</span>
                                        <div class="user_pay">
                                            <strong v-text="NumBets"></strong>注，
                                            共<strong v-text="MoneyBets.toFixed(3)"></strong>元
                                        </div>
                                    </div>
                                </div>
                                <!-- 用户选择投注大小 -->
                                <div class="user_select_iconbox box_h">
                                    <a data-mount="10" @click="setMount">
                                        <img src="../../static/img/bottom/icon_lhc_chips10.png" alt="">
                                    </a>
                                    <a data-mount="50" @click="setMount">
                                        <img src="../../static/img/bottom/icon_lhc_chips50.png" alt="">
                                    </a>
                                    <a data-mount="100" @click="setMount">
                                        <img src="../../static/img/bottom/icon_lhc_chips100.png" alt="">
                                    </a>
                                    <a data-mount="500" @click="setMount">
                                        <img src="../../static/img/bottom/icon_lhc_chips500.png" alt="">
                                    </a>
                                    <a data-mount="1000" @click="setMount">
                                        <img src="../../static/img/bottom/icon_lhc_chips1000.png" alt="">
                                    </a>
                                </div>
                                <!-- 提示框 -->
                                <div class="game_message_box">
                                    <el-button :plain="true" @click="openMessAge"></el-button>
                                </div>
                                <!-- 用户按钮 -->
                                <div class="user_btn_box box_flex">
                                    <a href="javascript:void(0)" class="delete_num" @click="initialView">清空</a>
                                    <a href="javascript:void(0)" class="direct_bet" @click="Directbet">一键投注</a>
                                </div>
                            </div>
                        </div>
                        <!-- 右边近15期开奖历史 -->
                        <div class="content_box_right">
                            <history :historyData="allLotterydata" v-if="GameIndex == 1"></history>
                            <history :historyData="allLotterydata" :id=9 v-if="GameIndex == 2"></history>
                        </div>
                    </div>

                    <!-- 表格 -->
                    <tablelist :tablist="tableList" @setinfo="infoData" :tracklist="trackList"
                               :indexs="GameIndex"></tablelist>
                    <!-- 倒计时结束后显示 -->
                    <openResult v-if="openFrame" :redata="openDataRe" @hidere="hideOpenRe"></openResult>
                    <!-- 提示框 -->
                    <div class="game_message_box">
                        <el-button :plain="true" @click="openMessAge"></el-button>
                    </div>
                    <!-- 未选择投注号码提示弹框 -->
                    <betElast v-if="betMinA" @bethide=" betMinAHide"></betElast>
                    <!-- 追号详情 -->
                    <zhDetali :zhdata="zhList" ref="dragZhDetali" @list="ListAjax" @getinfo="getUserInfo"></zhDetali>
                    <!-- 投注成功 -->
                    <betSuccess v-if="betSuccess" @bethide="hideBetSuc"></betSuccess>
                    <!-- 详情弹框 -->
                    <detali :getinfo="infoList" ref="dragDetali" @list="ListAjax" @getinfo="getUserInfo"></detali>
                    <!-- 追号投注弹框 -->
                    <trackNum v-if="trackState" @hidetrack="hideTrack" :ary="betAry" @clearbet="clearBetAry"
                              @list="ListAjax(true)"
                              @getinfo="getUserInfo"></trackNum>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import Vue from 'vue'
  //系统设置
  import {SysKey} from "../../util/sysconfig"
  // 倒计时结束后显示
  import openResult from "../Elasticframe/Number_change"
  // 追号投注
  import trackNum from "../Elasticframe/Track_num"
  // 引用axios封装文件
  import {postAjax, getAjax} from "../../util/ajax.js"
  // 投注记录组件
  // import betting from "../Subcomponents/Betting"
  // 表格组件
  import tablelist from "../Subcomponents/Tablelist"
  // 选号组件
  // import gameCom from "../Subcomponents/game_content"
  // 和值
  import gameCount from "../Subcomponents/game_Count"
  // 用户自选号
  import optionvalue from "../Subcomponents/Optionalvalue"
  // 龙虎斗
  import dragon from "../Subcomponents/Dragon_Tiger"
  // 悬浮组件
  import flextab from "../Subcomponents/flex_tab"
  // 投注提示弹框
  import betElast from "../Elasticframe/Betting_minone"
  // 投注成功
  import betSuccess from "../Elasticframe/Betting_success"
  // 详情弹框
  import detali from "../Elasticframe/infodetails"
  // 秒数转化
  import {SecondToHHSSMM} from "../../static/js/changeTime.js"
  // 追号详情
  import zhDetali from "../Elasticframe/zhdetails"
  //开奖历史
  import history from "../conmon/history";
  //倒计时组件
  import countDown from "../conmon/countDown";
  //开奖组件
  import openNumber from "../conmon/openNumber";

  var selectNavSwich = 0
  export default {
    // 刷新页面
    inject: ["reload"],
    data() {
      var gameId = parseInt(this.$route.query.id)
      if (gameId == 2) {
        selectNavSwich = 2
      } else if (gameId == 27 || gameId == 28 || gameId == 29) {//福彩3D 排列三 上海时时乐
        selectNavSwich = 0
      } else {
        selectNavSwich = 0
      }
      return {
        setNumber: '',
        timeNum: 0, //请求次数
        GameState: true, //组件状态
        openDataRe: {}, //开奖弹框数据
        openFrame: false, //倒计时结束弹框
        trackState: false, //追号投注页面
        userBalace: 0, //用户余额
        imgUrl: SysKey("ImgServerUrl").SysValue, //图片地址
        logoImgUrl: '',//彩票图标
        tableList: [], //传入表单子组件
        trackList: [], //出入表单子组件
        betSuccess: false, // 是否投注成功
        betMinA: false, //弹框是否显示
        choicenum: true, //五期一期切换显示
        NavSwich: selectNavSwich,  //导航栏选中
        GameIds: parseInt(this.$route.query.id), //游戏ID
        GameIndex: this.$route.query.index.toString(),  //游戏种类
        NowLssue: "", //当前期号
        dirNowLssue: "",//当前期号格式
        LastLssue: "", //近一期
        openTime: "",//开奖期数
        LastNum: "", //近一期开奖号码
        drawingNumberData: {},//开奖号码数据
        openGifClass: "icon",//开奖动画样式 默认是正常没有动画
        NowTime: {}, //投注倒计时
        navAllList: [], //返回所有玩法数组
        navList: [], //导航栏渲染内容
        allLotterydata: [],//全部开奖数据
        navsw: 186, //次级导航
        selectGName: "",//龙虎和选中的内容
        gameName: "", //玩法名称
        gameMultiplying: 1, //游戏倍率
        mountType: [], //模式
        mountTypeName: "2元", //模式名称
        mountTypeId: 1, //模式ID
        mountNum: 2, //初始金额
        Bonusrate: "",
        gameOdds: "", //玩法赔率
        gamePoint: "", //游戏返点
        CurrentPoint: 0, //当前返点
        BetNum: 0, //投注数量
        BetMoney: 0, //投注金额
        betary: [], //传入投注卡组件的内容
        betDis: [],// 投注位数
        DorSomeAry: [
          {name: "龙", odds: "", state: "false"},
          {name: "虎", odds: "", state: "false"},
          {name: "和", odds: "", state: "false"}], //传入龙虎斗组件内容
        // 传入子组件玩法赔率数组
        userSelect: ["1920.000-0.00%", "1900.000-1.00%"],
        // 传入玩法子组件的数据
        gameAry: [
          {
            ids: 1,
            digit: '万位',
            num: [{value: "1", state: false}, {value: "2", state: false}, {value: "3", state: false}, {
              value: "4",
              state: false
            }, {value: "5", state: false}, {value: "6", state: false}, {value: "7", state: false}, {
              value: "8",
              state: false
            }, {value: "9", state: false}, {value: "0", state: false}]
          },
          {
            ids: 2,
            digit: '千位',
            num: [{value: "1", state: false}, {value: "2", state: false}, {value: "3", state: false}, {
              value: "4",
              state: false
            }, {value: "5", state: false}, {value: "6", state: false}, {value: "7", state: false}, {
              value: "8",
              state: false
            }, {value: "9", state: false}, {value: "0", state: false}]
          },
          {
            ids: 3,
            digit: '百位',
            num: [{value: "1", state: false}, {value: "2", state: false}, {value: "3", state: false}, {
              value: "4",
              state: false
            }, {value: "5", state: false}, {value: "6", state: false}, {value: "7", state: false}, {
              value: "8",
              state: false
            }, {value: "9", state: false}, {value: "0", state: false}]
          },
          {
            ids: 4,
            digit: '十位',
            num: [{value: "1", state: false}, {value: "2", state: false}, {value: "3", state: false}, {
              value: "4",
              state: false
            }, {value: "5", state: false}, {value: "6", state: false}, {value: "7", state: false}, {
              value: "8",
              state: false
            }, {value: "9", state: false}, {value: "0", state: false}]
          },
          {
            ids: 5,
            digit: '个位',
            num: [{value: "1", state: false}, {value: "2", state: false}, {value: "3", state: false}, {
              value: "4",
              state: false
            }, {value: "5", state: false}, {value: "6", state: false}, {value: "7", state: false}, {
              value: "8",
              state: false
            }, {value: "9", state: false}, {value: "0", state: false}]
          },

        ],
        //  子组件选择投注数组完成后，结果传入父组件
        userSelectAry: [],
        // 传入投注卡子组件数据
        betAry: [],
        infoList: {}, //接受子组件的值
        zhList: [], //追号详情信息
        timer: null, //设置定时器
        sites: [],
        playData: [],
        betMount: 0, //投注金额
        NumBets: 0, //投注数量
        MoneyBets: 0,//投注总金额
        newarrayall: [],//选中的号码
        inputValue: 0,//输入框输入的值
        betArray: [],//投注的数据
        LastNumRank: ["冠", "亚", "季", "四", "五", "六", "七", "八", "九", "十"],
        gameAry: [{
          ids: 1,
          digit: '猜冠军',
          num: [{value: "01", state: false}, {value: "02", state: false}, {
            value: "03",
            state: false
          }, {value: "04", state: false}, {value: "05", state: false}, {
            value: "06",
            state: false
          }, {value: "07", state: false}, {value: "08", state: false}, {
            value: "09",
            state: false
          }, {value: "10", state: false}]
        }],

      }
    },
    methods: {
      //投注金额输入监听
      inputFun(item, index, num, e) {
        this.inputValue = e.target.value
        this.sites[num].PlayContentList[index].inValue = this.inputValue
        this.betArray = [];
        const me = this;
        me.MoneyBets = 0

        function changedata(data) {
          data.forEach(function (element) {
            element.PlayContentList.forEach(function (el) {
              if (el.selectStatus) {
                me.newarrayall.push(me.sites[num].PlayContentList[index])
                me.MoneyBets = Number(me.MoneyBets) + Number(el.inValue)
                me.betArray.push({
                  LpId: element.LpId,
                  PlayName: element.Name,
                  BetMoney: Number(el.inValue),
                  BetContent: el.Content
                })
              }
            });
          });
        }

        changedata(this.sites, item.LpId, index);
      },
      //投注金额点击监听
      inputShow(item, index, num) {
        this.sites[num].PlayContentList[index].selectStatus = true
        if (this.betMount > 0) {
          this.sites[num].PlayContentList[index].inValue = this.betMount
        }
        this.upSelectData(item, index, num)
      },
      // 选择投注金额
      setMount(e) {
        let that = this
        let num = e.currentTarget.dataset.mount
        let count = that.betMount
        if (count == "") {
          count = 0
        }
        that.betMount = parseInt(num);// + parseInt(count)
        if (that.NumBets.length == 0) {
          that.newarrayall = []
        }
        that.newarrayall.forEach(data => {
          data.inValue = that.betMount
        })
        that.MoneyBets = that.NumBets * that.betMount
        that.betArray.forEach(data => {
          data.BetMoney = that.betMount
        })
        that.setGameNav()
      },
      // 直接投注
      Directbet() {
        let that = this
        let url = "Api/Bet/AddEttmOrder?" + "lssue=" + that.dirNowLssue + "&LgId=" + that.GameIds
        this._initOpenLoading()
        postAjax(url, that.betArray, 1)
          .then((data) => {
            that._initCloseLoading()
            if (data.IsSucess == true) {
              this.showBetSuc();
              this.ListAjax();
            } else if (data.IsSucess === false) {
              that.openMessAge(data.Message)
            }
            this.initialView();
          })
          .catch(() => {
            that.openMessAge("网络出现异常，请刷新后重试")
            this._initCloseLoading()
          })
      },
      //玩法点击监听
      show(item, index, num) {
        this.sites[num].PlayContentList[index].selectStatus = !this.sites[num].PlayContentList[index].selectStatus
        if (this.sites[num].PlayContentList[index].selectStatus == false) {
          // this.initialView();
          this.sites[num].PlayContentList[index].selectStatus = false
          this.sites[num].PlayContentList[index].inValue = null
        }
        this.setGameNav()
        this.upSelectData(item, index, num)
      },
      //选中玩法后  更新数据和界面
      upSelectData(item, index, num) {
        this.betArray = [];
        const me = this;
        me.MoneyBets = 0

        function changedata(data) {
          data.forEach(function (element) {
            element.PlayContentList.forEach(function (el) {
              if (el.selectStatus) {
                if (me.betMount > 0) {
                  el.inValue = me.betMount
                }
                me.newarrayall.push(me.sites[num].PlayContentList[index])
                me.betArray.push({
                  LpId: element.LpId,
                  PlayName: element.Name,
                  BetMoney: me.betMount,
                  BetContent: el.Content
                })
              }
              me.NumBets = me.betArray.length
              me.MoneyBets = me.NumBets * me.betMount
            });
          });
          if (me.NumBets.length == 0) {
            me.newarrayall = []
          }
        }

        changedata(this.sites, item.LpId, index);
      },
      //初始化控件
      initialView() {
        this.newarrayall.forEach(data => {
          data.inValue = null
        })
        this.sites.forEach(data => {
          data.PlayContentList.forEach(item => {
            item.selectStatus = false;
          })
        })
        this.betArray = [];
        this.newarrayall = [];
        this.MoneyBets = 0;
        this.NumBets = 0;
        this.betMount = 0;
      },
      getGameIcon() {
        this.navAry.forEach(item => {
          item.LotteryList.forEach(e => {
            if (e.LgId == this.GameIds) {
              this.imgUrl = this.imgUrl + e.WebIco
            }
          })
        })
      },
      //显示追号弹框
      setTrack() {
        let that = this
        if (that.betAry.length < 1) {
          that.betMinAShow()
        } else {
          if (that.betAry.length > 1) {
            that.openMessAge("追号投注,订单列表不能大于1项")
          } else {
            that.trackState = true
          }
        }
      },
      // 关闭追号弹框
      hideTrack() {
        this.trackState = false
      },
      // 追号投注后清除数组
      clearBetAry() {
        this.betAry = []
      },
      // 接受投注位数的值
      getDisData(data) {
        this.betDis = data
      },
      //计算投注数量
      setBetNum(data, value) {
        let that = this
        this.BetNum = 0
        if (value == undefined || value == null || value == "") {
        } else {
          this.betDis = value
        }
        this.BetNum = data
        this.CalcMount(data)
      },
      // 接受子组件的值
      infoData(data, num) {
        let that = this
        let index = num  //1为普通订单，2位追号订单
        let obj = data
        let ptid = data.OrderNumber  //普通订单号
        let zhid = data.ZhNumber     //追号订单号
        //获取普通投注数据
        if (index == 1) {
          let url = "Api/Order/GetDetailByOrderNumber?" + "number=" + ptid + "&type=" + index
          postAjax(url)
            .then(function (data) {
              if (data.IsSucess) {
                that.infoList = data.Data[0]
              } else {
                that.openMessAge("获取信息错误，请重试")
                return false
              }
            })
            .then(function () {
              that.$refs.dragDetali.dialogTableVisible = true
            })
            .catch(() => {
              that.openMessAge("网路异常，请刷新后重试")
            })
        }
        //追号记录 详情
        else if (index == 2) {
          let url = "Api/Order/GetDetailByOrderNumber?" + "number=" + zhid + "&type=" + index
          postAjax(url)
            .then(function (data) {
              if (data.IsSucess) {
                that.zhList = data.Data
                let allmoney = 0 //总金额
                let ykmoney = 0  //盈亏金额
                //计算总金额
                data.Data.forEach(item => {
                  allmoney += item.BetMoney
                  ykmoney += item.WinBonus - item.BetMoney
                })
                //添加到第一个数组
                data.Data[0]["allMoney"] = allmoney
                data.Data[0]["ykMoney"] = ykmoney
              } else {
                that.openMessAge("获取信息错误，请重试")
                return false
              }
            })
            .then(function () {
              that.$refs.dragZhDetali.dialogVisible = true
            })
            .catch(() => {
              that.openMessAge("网路异常，请刷新后重试")
            })
        }
      },
      // 输入返回数组
      OptionGdata(data) {
        let that = this
        this.selectGName = data
        let len = that.betDis.length
        if (that.navsw == 62) {
          if (len == 4) {
            that.BetNum = parseInt(this.selectGName.length) * 1
          } else if (len == 5) {
            that.BetNum = parseInt(this.selectGName.length) * 5
          } else {
            that.BetNum = parseInt(this.selectGName.length) * 0
          }
        } else if (that.navsw == 64 || that.navsw == 67) {
          if (len == 3) {
            that.BetNum = parseInt(this.selectGName.length) * 1
          } else if (len == 4) {
            that.BetNum = parseInt(this.selectGName.length) * 4
          } else if (len == 5) {
            that.BetNum = parseInt(this.selectGName.length) * 10
          } else {
            that.BetNum = parseInt(this.selectGName.length) * 0
          }
        } else if (that.navsw == 69) {
          if (len == 2) {
            that.BetNum = parseInt(this.selectGName.length) * 1
          } else if (len == 3) {
            that.BetNum = parseInt(this.selectGName.length) * 3
          } else if (len == 4) {
            that.BetNum = parseInt(this.selectGName.length) * 6
          } else if (len == 5) {
            that.BetNum = parseInt(this.selectGName.length) * 10
          } else {
            that.BetNum = parseInt(this.selectGName.length) * 0
          }
        } else {
          this.BetNum = data.length;
        }
        this.CalcMount()
      },
      // 投注后返回的数据
      setGdata(data) {
        this.selectGName = data
      },
      // 设置获取赔率数据
      setDorOdds() {
        let that = this;
        let ids = that.navsw;
        let list = that.navList;
        list.forEach(item => {
          if (ids == item.LpId) {
            // that.gameOdds = item.JjList[that.CurrentPoint].Jj
            // that.gamePoint = item.JjList[that.CurrentPoint].Rebate
          }
        })
        that.DorSomeAry.forEach(item => {
          if (item.name == "龙" || item.name == "虎") {
            item.odds = parseFloat(that.gameOdds / 4.5).toFixed(3)
          } else {
            item.odds = parseFloat(that.gameOdds).toFixed(1)
          }
        })
      },
      // 显示提示框
      openMessAge(data) {
        this.$message.error(data);
      },
      // 选择游戏倍率
      selectGameMultiply(data) {
        this.gameMultiplying = data
        this.CalcMount()
      },
      //设置玩法赔率数组
      setUserSelect() {
        let that = this;
        let ids = that.navsw;
        that.navList.forEach(item => {
          if (ids == item.LpId) {
            let ary = item.JjList
            let setAry = []
            for (let i = 0; i < 2; i++) {
              // let str = [ary[i].Jj.toFixed(3), ary[i].Rebate.toFixed(2)].join("-")
              // setAry.push(str)
            }
            that.userSelect = setAry
          }
        })
      },
      //计算投注金额
      CalcMount(data) {
        let that = this
        if (data == undefined || data == null || data == "") {
          that.BetNum = that.BetNum //当前投注数量
        } else {
          that.BetNum = data
        }
        let type = that.mountType; //模式
        let name = that.mountTypeName;
        let num = that.gameMultiplying

        type.forEach(item => {
          if (item.Name == name) {
            that.BetMoney = parseInt(that.BetNum) * parseInt(num) * parseFloat(item.Rate)
          }
        })
      },
      // 设置玩法模式
      TypeSet(data) {
        let that = this
        that.mountTypeName = data
        that.mountType.forEach(item => {
          if (item.Name == that.mountTypeName) {
            that.mountTypeId = item.Id
            that.mountNum = item.Rate
          }
        })
        that.CalcMount()

      },
      //设置选号玩法数组
      setGameAry() {
        let that = this
        that.gameAry = []

      },
      // 选择玩法返点
      Bonusadjust(data) {
        let that = this
        if (data == "" || data == undefined) {
          that.CurrentPoint = 0
        } else {
          that.CurrentPoint = data
        }
        // 设置龙虎斗玩法
        this.setDorOdds()
      },
      // 切换显示期号数量
      choice_data() {
        this.choicenum = true
      },
      choice_data_other() {
        this.choicenum = false
      },
      //导航栏点击切换
      topNavSwitch(e) {
        let that = this
        that.NavSwich = e.target.dataset.id
        that.navsw = 186;
        that.setGameNav()
        // 清空子组件的值
        that.initialView();
      },
      // 次级导航栏点击切换
      smallSwitch(e) {
        this.navsw = parseInt(e.target.dataset.id)
        this.gameName = e.target.dataset.name
        // 初始化内容
        this.clearDrag()
        try {
          this.$refs.drag.selectAry = [];
          this.$refs.drag.val = ""
        } catch (e) {

        }
      },
      // 请求玩法数据
      gameAjax() {
        let that = this
        let getPlayList = JSON.parse(window.localStorage.getItem("2playList" + that.GameIds))
        if (getPlayList) {
          that.playData = getPlayList
          that.setGameNav()
          return false
        }
        let url = "Api/Lp/GetPlayList?lpId=" + that.GameIds + "&pattern=2"
        getAjax(url)
          .then(function (data) {
            if (data.IsSucess) {
              that.playData = data.Data;
              window.localStorage.setItem("2playList" + that.GameIds, JSON.stringify(data.Data))
              that.setGameNav();
            }
          })
          .then(function () {
          })
          .catch(() => {
            this.openMessAge("网络出现异常，请刷新后重试")
          })
      },
      // 设置玩法导航
      setGameNav() {
        let that = this
        that.sites = [];
        that.playData.forEach(item => {
          if (that.GameIndex == 1) {
            if (that.NavSwich == 0) {
              if (item.LpId == 186 || item.LpId == 187 || item.LpId == 188 || item.LpId == 189 || item.LpId == 190)
                if (item.IsOpen == true) {
                  that.sites.push(item)
                }
            } else if (that.NavSwich == 1) {
              if (191 <= item.LpId && item.LpId <= 199)
                if (item.IsOpen == true) {
                  that.sites.push(item)
                }
            } else if (that.NavSwich == 2) {
              if (200 <= item.LpId && item.LpId <= 209)
                if (item.IsOpen == true) {
                  that.sites.push(item)
                }
            } else if (that.NavSwich == 3) {
              if (item.LpId == 210)
                if (item.IsOpen == true) {
                  that.sites.push(item)
                }
            }
          } else if (that.GameIndex == 2) {
            if (that.NavSwich == 0) {
              if (211 <= item.LpId && item.LpId <= 221)
                if (item.IsOpen == true) {
                  that.sites.push(item)
                }
            } else if (that.NavSwich == 1) {
              if (item.LpId == 222)
                if (item.IsOpen == true) {
                  that.sites.push(item)
                }
            } else if (that.NavSwich == 2) {
              if (item.LpId == 223)
                if (item.IsOpen == true) {
                  that.sites.push(item)
                }
            } else if (that.NavSwich == 3) {
              if (item.LpId == 224)
                if (item.IsOpen == true) {
                  that.sites.push(item)
                }
            } else if (that.NavSwich == 4) {
              if (225 <= item.LpId && item.LpId <= 234)
                if (item.IsOpen == true) {
                  that.sites.push(item)
                }
            } else if (that.NavSwich == 5) {
              if (235 <= item.LpId && item.LpId <= 239)
                if (item.IsOpen == true) {
                  that.sites.push(item)
                }
            }
          }
        })
      },
      upTimeData(){
        if(this.NowLssue){
          this.$notify({
            title: '温馨提示',
            type: 'warning',
            showClose: false,
            message: this.NowLssue+ ' 已停止销售,请注意当前期号',
            position: 'bottom-right'
          });
        }
        this.timeAjax();
      },
      //请求投注期号
      timeAjax() {
        let that = this
        that.NowTime = {
          state: false
        }
        let url = "Api/Lssue/GetBetLssueInfo"
        let data = {
          lgId: that.GameIds
        }
        let openState = true   //是否需要请求开奖
        getAjax(url, data)
        // 请求成功后赋值
          .then(function (data) {
            window.NowLssue = data.Data.NowLssueFormat
            that.NowLssue = data.Data.NowLssueFormat
            that.LastLssue = data.Data.LastLssueFormat
            that.dirNowLssue = data.Data.NowLssue
            that.openTime = data.Data.LastLssue  //开奖期号
            that.NowTime = {
              time: data.Data.NowLssueRemainTime,
              state: true
            }
            if (data.Data.LastOpenNumber == null || data.Data.LastOpenNumber == "") {
              if (that.GameIndex == 1) {
                that.LastNum = ["?", "?", "?", "?", "?"];
                that.drawingNumberData = {
                  state: false,
                  arr: ["?", "?", "?", "?", "?"]
                }
              } else if (that.GameIndex == 2) {
                that.LastNum = ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]
              }
              openState = true //无开奖号码
            } else {
              that.LastNum = data.Data.LastOpenNumber.split(',');
              if (that.GameIndex == 1) {
                that.drawingNumberData = {
                  state: true,
                  arr: data.Data.LastOpenNumber.split(',')
                }
              }
              openState = false //有开奖号码
            }
            // 初始化时间组件
          })
          .then(function () {
            // 如果没有开奖号，开始执行倒计时请求开奖号码
            if (openState) {
              that.setTimer()
            }
          })
          .catch(() => {
            that.openMessAge("网络请求出现错误，请刷新页面后重试")
          })
      },
      // 设置倒计时请求开奖号码
      setTimer() {
        let that = this
        if (this.timer == null) {
          this.timer = setInterval(() => {
            that.getResultNum()
          }, 5000)
        }
      },
      // 获取近5期投注期号
      PhaseAjax() {
        let that = this;
        let url = "Api/Lssue/GetLssueHistoryInfo"
        let data = {
          lgId: that.GameIds
        }
        getAjax(url, data)
          .then(function (data) {
            if (data.IsSucess) {
              if (data.Data != null) {
                that.allLotterydata = data.Data;
              }
            }
          })
      },
      //计算投注金额
      CompentMount() {
        let that = this
        that.NumBet = that.betAry.length;
        let num = 0
        that.betAry.forEach(item => {
          if (item.mount == "") {
            item.mount = 0
          }
          num += parseInt(item.mount)
        })
        that.MoneyBets = parseInt(num)
      },
      // 初始化内容
      clearDrag() {
        let that = this
        try {
          that.GameState = false
          that.GameState = true
          this.gameMultiplying = 1
          // 获取赔率
          this.setDorOdds()
          // 设置玩法下拉内容
          this.setUserSelect()
          // 初始化游戏数组
          this.stateAry()
          this.setGameAry()

          this.selectGName = ""
          // 初始化投注金额
          this.BetNum = 0
          this.BetMoney = 0
          this.betDis = []
          this.$refs.drag.selectAry = [];
          this.$refs.drag.val = ""
        } catch (e) {
        }
      },
      // 清空投注卡列表
      EmptyNum(Data) {
        let that = this
        that.betAry = Data
        // 计算投注金额
        that.CompentMount()
      },
      // 删除投注卡某一列
      deleteNum(Data) {
        let that = this
        that.betAry.splice(Data, 1)
        // 计算投注金额
        that.CompentMount()
      },
      // 显示提示框
      openMessAge(data) {
        this.$message.error(data);
      },
      // 显示弹框 隐藏弹框
      betMinAShow() {
        this.betMinA = true
      },
      betMinAHide() {
        this.betMinA = false
      },
      // 显示投注成功框
      showBetSuc() {
        this.betSuccess = true
        this.autoHideBetSuc = setTimeout(this.hideBetSuc, 2000);
      },
      hideBetSuc() {
        this.betSuccess = false
        this.autoHideBetSuc = null
      },
      //初始化话传入数组状态
      stateAry() {
        this.DorSomeAry.forEach(item => {
          item.state = "false"
        })
        this.gameAry.forEach(item => {
          item.num.forEach(e => {
            e.state = false
          })
        })
      },
      _initOpenLoading(isFlag = true) {
        this.loading = this.$loading({
          lock: true,
          text: `${isFlag ? '投注中' : '加载中'}...`,
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.4)'
        })
      },
      _initCloseLoading() {
        this.loading.close()
      },
      // 投注数据
      // 扩展一个字段，isFlag为true显示投注中,false为默认加载中
      ListAjax() {
        let that = this
        let url = "api/OrderReport/BetHistory" + "?lgid=" + that.GameIds
        postAjax(url)
          .then(function (data) {
            if (data.IsSucess) {
              that.tableList = data.Data;
            }
          })
        // 追号数据
        let url2 = "api/OrderReport/ZHHistory?lgid=" + that.GameIds
        postAjax(url2)
          .then(function (data) {
            if (data.IsSucess) {
              that.trackList = data.Data
            }
          })
      },
      //设置传入投注卡的数组
      addNum() {
        let that = this
        let obj = {};
        obj["name"] = that.gameName  //名称
        obj["GAry"] = that.selectGName //投注内容
        obj["num"] = that.BetNum   //注数
        obj["mount"] = that.BetMoney  //投注金额
        obj["type"] = that.mountTypeName //投注模式
        obj["Odds"] = that.gameOdds + "-" + that.gamePoint //奖金返点
        obj["GMult"] = that.gameMultiplying //倍率
        obj["ids"] = that.navsw  //玩法id
        obj["Gids"] = that.GameIds //玩法种类
        obj["data"] = that.dirNowLssue //当前期号
        obj["gameOdd"] = that.gameOdds //投注奖金
        obj["reba"] = that.gamePoint //返点
        obj["RxD"] = that.betDis.length > 0 ? that.betDis.join("") : null //位数
        obj["bon"] = that.mountTypeId //投注模式ID
        if (that.BetNum < 1) {
          that.betMinAShow()
        } else {
          if (that.navsw == 62) {
            if (that.betDis.length < 4) {
              that.openMessAge("位数最少选择4个")
              return false
            }
          }
          if (that.navsw == 64 || that.navsw == 67 || that.navsw == 65 || that.navsw == 66) {
            if (that.betDis.length < 3) {
              that.openMessAge("位数最少选择3个")
              return false
            }
          }
          if (that.navsw == 69) {
            if (that.betDis.length < 2) {
              that.openMessAge("位数最少选择2个")
              return false
            }
          }
          that.betAry.push(obj)
          //添加成功后初始化数据
          that.clearDrag()
          that.selectGName = []
          try {
            this.$refs.drag.selectAry = [];
            this.$refs.drag.val = ""
          } catch (e) {
          }
        }
      },
      // 数组投注
      aryDisAjax() {
        let that = this
        let zxState = true
        if (that.betAry.length < 1) {
          that.betMinAShow()
        } else {
          let url = "Api/Bet/AddClassicPatternOrder?" + "lssue=" + that.dirNowLssue + "&LgId=" + that.GameIds
          let order = []
          let ListAllMoney = 0
          that.betAry.forEach(item => {
            // 传入后端格式
            if (item.ids == 62 || item.ids == 178 || item.ids == 175 || item.ids == 173 ||
              item.ids == 169 || item.ids == 50 || item.ids == 47 || item.ids == 2 || item.ids == 14 || item.ids == 20 ||
              item.ids == 26 || item.ids == 31 || item.ids == 33 || item.ids == 38 || item.ids == 40 || item.ids == 45) {
              zxState = false
            }
            let obj = {}
            obj["BetMoney"] = item.mount
            obj["BetMultiple"] = item.GMult
            obj["LpId"] = item.ids
            obj["PlayName"] = item.name
            obj["BetContent"] = zxState ? item.GAry.join(",") : item.GAry.join(" ")
            obj["BetCount"] = item.num
            obj["BetRebate"] = item.reba
            obj["BetBonus"] = item.gameOdd
            obj["BonusMode"] = item.bon
            obj["RxDsFormart"] = item.RxD
            order.push(obj)
            ListAllMoney += item.BetMoney
          })
          // 已选择了号码，则进行loadong提示
          this.loading = this.$loading({
            lock: true,
            text: '投注中...',
            spinner: 'el-icon-loading',
            background: 'rgba(255, 255, 255, 0.4)'
          });
          postAjax(url, order, 1)
            .then((data) => {
              this.loading.close()
              if (data.IsSucess == true) {
                if (data.Data.ErrorInfos.length > 0) {
                  that.openMessAge("成功投注：" + data.Data.SuccessCount + "注，投注失敗：" + data.Data.ErrorInfos.length + "注")
                } else {
                  that.showBetSuc()
                }
                that.getUserInfo()
                // 刷新表单数据
                that.ListAjax()
              } else if (data.IsSucess == false) {
                that.openMessAge(data.Message)
              }
            })
            .then(function () {
              that.betAry = []
              that.loading.close()
              // 初始化子组件状态
              that.clearDrag()
            })
            .catch(() => {
              that.loading.close()
              that.openMessAge("网络请求出现错误，请刷新页面后重试")
            })
        }
      },
      //直接投注
      DisAjax() {
        let that = this
        let url = "Api/Bet/AddClassicPatternOrder?" + "lssue=" + that.dirNowLssue + "&LgId=" + that.GameIds
        let zxState = true
        if (that.BetNum < 1) {
          that.betMinAShow()
        } else if (that.BetMoney > that.userBalace) {
          that.openMessAge("您的可用余额不足，请重新选择")
          return
        } else {
          if (that.navsw == 67 || that.navsw == 64 || that.navsw == 62 || that.navsw == 175 || that.navsw == 178 || that.navsw == 173 || that.navsw == 169 || that.navsw == 50 || that.navsw == 47 || that.navsw == 2 || that.navsw == 14 || that.navsw == 20 || that.navsw == 26 || that.navsw == 31 || that.navsw == 33 || that.navsw == 38 || that.navsw == 40 || that.navsw == 45) {
            zxState = false
          }
          if (that.navsw == 62) {
            if (that.betDis.length < 4) {
              that.openMessAge("位数最少选择4个")
              return false
            }
          }
          if (that.navsw == 64 || that.navsw == 67 || that.navsw == 65 || that.navsw == 66) {
            if (that.betDis.length < 3) {
              that.openMessAge("位数最少选择3个")
              return false
            }
          }
          if (that.navsw == 69) {
            if (that.betDis.length < 2) {
              that.openMessAge("位数最少选择2个")
              return false
            }
          }
          let order = [{
            BetMoney: that.BetMoney,
            BetMultiple: that.gameMultiplying,
            LpId: that.navsw,
            PlayName: that.gameName,
            BetContent: zxState ? that.selectGName.join(",") : that.selectGName.join(" "),
            BetCount: that.BetNum,
            BetRebate: that.gamePoint,
            BetBonus: that.gameOdds,
            BonusMode: that.mountTypeId,
            RxDsFormart: that.betDis.length > 0 ? that.betDis.join("") : null
          }]
          this._initOpenLoading()
          postAjax(url, order, 1)
            .then((data) => {
              that._initCloseLoading()
              if (data.IsSucess == true) {
                that.showBetSuc()
                that.getUserInfo()
                // 刷新表单数据
                that.ListAjax()
              } else if (data.IsSucess === false) {
                that.openMessAge(data.Message)
              }
            })
            .then(() => {
              that._initCloseLoading()
              //  初始化数组状态
              that.stateAry()
              // 初始化子组件状态
              that.clearDrag()
            })
            .catch(() => {
              that.openMessAge("网络出现异常，请刷新后重试")
              this._initCloseLoading()
            })
        }
      },
      // 一键梭哈
      AllIN() {
        let that = this
        let userMoney = parseFloat(that.userBalace) //用户余额
        let betnum = parseInt(that.BetNum)  //投注数量
        let money = that.mountNum   //基数金钱

        if (that.BetNum < 1) {
          that.betMinAShow()
        } else if (userMoney < betnum * money) {
          that.openMessAge("您的余额不足，请充值")
        } else {
          // 当前梭哈倍数
          let num = Math.floor(userMoney / parseFloat(betnum * money)) //获取倍数
          let intMoney = parseFloat(num * money * betnum) //获取金额
          that.gameMultiplying = num
          that.BetMoney = intMoney
        }
      },
      // 请求游戏图片
      getGImg() {
        let that = this;
        let url = "Api/Lnc/Get";
        getAjax(url)
          .then(function (data) {
            data.Data.forEach(item => {
              item.LotteryList.forEach(e => {
                if (e.LgId == that.GameIds) {
                  that.logoImgUrl = ''
                  that.logoImgUrl = that.imgUrl + e.WebIco
                }
              })
            });
          })
          .catch(() => {
            that.openMessAge("网络出现异常，请刷新后重试")
          })
      },
      //请求用户数据
      getUserInfo() {
        let that = this;
        let url = "Api/User/GetUserInfo";
        postAjax(url)
          .then(function (data) {
            // 提交用户信息到vuex
            that.userBalace = data.Data.Balance
            // 提交用户信息到vuex
            that.$store.commit('setUserInfo', data.Data);
          })
          .catch(() => {

          })
      },
      // 获取开奖号码
      getResultNum() {
        let that = this
        let url = "Api/Lssue/GetLssueOpenInfo?lgId=" + that.GameIds + "&lssue=" + that.openTime
        getAjax(url)
          .then(function (data) {
            window.lgText = data.Data.lgText
            if (data.Data.OpenNumber == null || data.Data.OpenNumber == "") {

            } else {
              // 显示弹框
              that.openGifClass = "icon"
              that.LastNum = data.Data.OpenNumber.split(',');
              if (that.GameIndex == 1) {
                that.drawingNumberData = {
                  state: true,
                  arr: data.Data.OpenNumber.split(',')
                }
              }
              that.openDataRe["LastOpenNumber"] = data.Data.OpenNumber.split(',')
              that.openDataRe["Time"] = that.LastLssue
              that.openDataRe["Name"] = data.Data.lgText
              that.openFrame = true
              // 请求近5期期号数据
              that.PhaseAjax()
              // 请求表单数据
              that.ListAjax()
              // 请求用户数据
              that.getUserInfo()
            }
          })
          .catch(() => {
            that.openMessAge("网络请求出现错误，请刷新页面后重试")
          })
      },
      // 关闭开奖弹框
      hideOpenRe() {
        this.openFrame = false
        this.timeNum = 0
      },
      handleWinFocus() {
        this.timeAjax();
      }
    },
    components: {
      openResult,
      zhDetali,
      trackNum,
      // betting,
      tablelist,
      // userpay,
      // gameCom,
      // doubleSided,
      optionvalue,
      dragon,
      flextab,
      betElast,
      betSuccess,
      detali,
      gameCount,
      history,
      countDown,
      openNumber
    },
    computed: {
      navAry() {
        return this.$store.state.navAry //导航栏数据
      },

    },
    filters: {
      returnNumber(val) {
        return val;
      }
    },
    // 监听刷新页面
    watch: {
      $route() {
        this.reload();
      },
      navAry(val) {
        this.getGImg()
      }
    },
    beforeCreate() {
      // 进入页面时清除定时器
      clearInterval(this.timer)
      this.timer = null;
    },
    destroyed() {
      // 每次离开当前界面时，清除定时器
      clearInterval(this.timer)
      // this.timer = null;
    },
    created() {
      // 请求数据
      this.gameAjax()
      // 请求期号数据
      this.timeAjax()
      // 请求数据
      this.ListAjax()
      // 请求用户数据
      this.getUserInfo()
      // 请求近5期期号数据
      this.PhaseAjax()
      // 请求游戏图片
      this.getGImg()
    },
    beforeDestroy() {
      // 每次离开当前界面时，清除定时器
      clearInterval(this.timer);
      // 每次离开当前界面时，清除监听
      window.removeEventListener('focus', this.handleWinFocus);
    },
    mounted() {
      window.addEventListener('focus', this.handleWinFocus);
    }
  }
</script>
<style>
    .contentW {
        width: 100%;
        float: left;
        /*border-bottom: 0.3px solid #D4D4D4;*/
    }

    .contentW210 {
        width: 20%;
        height: 85px;
        line-height: 40px;
        overflow: hidden;
        text-align: center;
        float: left;
        /*border-top: 1px solid #D4D4D4;*/
        border-bottom: 1px solid #D4D4D4;
        border-left: 1px dashed #D4D4D4;
    }

    .contentW210:nth-child(5n+1) {
        border-left: none;
    }

    .checedTrue {
        background-color: #008573;
    }

    .checedTrue > .setFontText, .checedTrue > .setFontOdds {
        color: white;
    }

    .checedTrue .setFontText {
        color: #ffffff;
    }

    .content_big {
        display: flex;
        justify-content: space-between;
        white-space: nowrap;
        width: 100%;
    }

    .betContent {
        border-bottom: solid 1px #ddd8d4;
        overflow: hidden;
    }

    .gamepanel .bet_content_main {
        width: 20%;
        float: left;
        border-left: 1px dashed #D4D4D4;
        border-bottom: 1px solid #D4D4D4;
    }

    .contentH:nth-child(5n+1) .bet_content_main {
        border-left: none;
    }

    .contentH:nth-child(5n+5) .bet_content_main {
        border-right: none;
    }

    .numberW {
        width: 100%;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        text-align: center;
        color: #707070;
        font-weight: bold;
        border-bottom: 0.3px solid #D4D4D4;
    }

    .betContent > div:nth-child(5n+5) > div > div {
        border-right: none;
    }

    .hpjW {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 0.3px solid #D4D4D4;
    }

    .hpjW > span {
        color: #9b9b9b;
    }

    .hpjW > span:first-child:after, .hpjW > span:nth-child(2):after {
        content: '|';
        float: right;
        margin-right: 0;
    }

    .hpjW span {
        width: 33.33%;
        float: left;
        text-align: center;
    }

    .hpj {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 0.3px solid #D4D4D4;
        background-color: #ececec;
    }

    .hpj span {
        width: 33.33%;
        float: left;
        text-align: center;
    }

    .dtjW {
        width: 100%;
        height: 45px;
        line-height: 44px;
        overflow: hidden;
        cursor: pointer;
    }

    .dtjW span {
        width: 33.33%;
        float: left;
        text-align: center;
    }

    .dtj {
        width: 100%;
        height: 45px;
        line-height: 45px;
        overflow: hidden;
        cursor: pointer;

    }

    .dtj span {
        width: 33.33%;
        float: left;
        text-align: center;
    }

    .betMoney {
        width: 46px;
        height: 24px;
        background-color: #ffffff;
        border-radius: 5px;
        border: solid 1px #cccccc;
        text-align: center;
        top: -50px;
        font-size: 14px;
        overflow: hidden;
    }

    .weizhiText span {
        width: 33.33%;
        float: left;
        text-align: center;
    }

    .setFontTitle {
        font-size: 14px;
    }

    .hpj > span {
        color: #9b9b9b;
    }

    .hpj > span:not(:last-child):after {
        content: '|';
        float: right;
        margin-right: 0;
    }

    .setFontText {
        display: inline-block;
        border-radius: 100%;
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
        color: #707070;
    }

    .num_font_text {
        width: 24px !important;
        height: 24px;
        line-height: 24px;
        margin-top: 10px;
        margin-left: 16px;
        margin-right: 16px;
        border: solid 1px #c7c7c7;
        background-color: #ffffff;
    }

    .checedTrue .num_font_text {
        /*background-color: #ffffff;*/
        /*border-color: #ffffff;*/
        color: #727272;;
    }

    .setFontOdds {
        font-size: 14px;
        color: #707070;
        font-weight: bold;
    }

    /* 用户投注 */
    .gamepanel .twenty_user_opration {
        width: 100%;
        overflow: hidden;
        padding: 10px 12px 10px 18px;
        position: relative;
    }

    .user_input {
        font-size: 14px;
        color: #000000;
        margin-bottom: 15px;
    }

    .user_input input {
        width: 134px;
        height: 31px;
        background-color: #fefefe;
        border-radius: 5px;
        border: solid 1px #e4e4e4;
        padding-left: 15px;
    }

    .user_input input:focus {
        border: 1px solid #1f7877;
        outline: none;
    }

    .user_pay_for {
        font-size: 14px;
    }

    .user_pay_for .user_pay {
        display: inline-block;
    }

    .user_pay_for .user_pay strong {
        margin: 0px 7px;
        color: #ff680a;
        font-size: 16px;
    }

    .user_btn_box {
        text-align: right;
    }

    .user_btn_box a:first-child {
        margin-right: 15px;
    }

    .btn_clear {
        background-color: #ececec;
        box-shadow: 0px 2px 5px 0px rgba(176, 176, 176, 0.61);
        border-radius: 5px;
        border: solid 1px #dddddd;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 16px;
        letter-spacing: 0px;
        color: #9b9b9b !important;
        background-position: center left 5px;
        background-repeat: no-repeat;
        background-image: url(../../static/img/icon/clear.png);
        background-size: 25px 25px;
        padding-left: 15px;
    }

    .user_select_iconbox {
        margin-left: 15px;
    }

    .user_select_iconbox > a {
        width: 49px;
        height: 48px;
        margin: 0 9px;
        cursor: pointer;
    }

    .user_select_coin {
        width: 55px;
        height: 55px;
        margin: 0 5px;
        cursor: pointer;
    }

    .user_select_coin img {
        width: 55px;
        height: 55px;
    }

    .user_select_coin img:hover {
        animation: tada 1s .2s ease both;
    }

    /* 图片效果 */
    @keyframes tada {
        0% {
            -webkit-transform: scale(1);
        }
        10%, 20% {
            -webkit-transform: scale(0.9) rotate(-3deg);
        }
        30%, 50%, 70%, 90% {
            -webkit-transform: scale(1.2) rotate(3deg);
        }
        40%, 60%, 80% {
            -webkit-transform: scale(1.2) rotate(-3deg);
        }
        100% {
            -webkit-transform: scale(1) rotate(0);
        }
    }

    .game_message_box .el-button {
        display: none
    }

    .winning_item_sc {
        width: 46px;
        text-align: center;
        cursor: pointer;
        color: white;
        font-size: 18px;
        margin: 0 3px;
        overflow: hidden;
    }

    .winning_item_sc .racing_car_rank {
        color: #ffffff;
        font-size: 16px;
        margin-bottom: 5px;
        height: 21px;
        width: 40px;
    }

    .racing_car_iconbox img {
        width: 40px;
        display: block;
    }

    .racing_titles_box {
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        line-height: 14px;
        letter-spacing: 1px;
        color: #ffffff;
        cursor: pointer;
    }

    .winning_box_title {
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        line-height: 14px;
        letter-spacing: 1px;
        color: #ffffff;
    }

    .gamepanel .winning_box {
        width: auto;
        overflow: hidden;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .winning_main_sc {
        margin-top: 10px;
        padding-right: 15px;
        text-align: center;
        align-items: center;
        justify-content: flex-end;
    }

    .check_box {
        width: 23px;
        font-size: 12px;
        margin: 0 14px;
        letter-spacing: 1px;
        overflow: hidden;
    }

    .check_box div {
        background-color: #ece5cd;
        color: #020202;
        height: 55px;
        padding-top: 4px;
        cursor: pointer;
    }

    .check_box div.five_data_check {
        margin-top: 1px;
        height: 54px;
    }

    .check_box .select_this {
        color: white;
        background-color: #000000;
    }

    /* 近5期 */
    .five_data_item {
        overflow: hidden;
        padding: 0 8px;
    }

    .five_data_item {
        border-bottom: 1px dashed #cacaca;
    }

    .five_data_item:nth-child(even) {
        background-color: #eae9e9;
    }

    .five_data .data_time {
        text-align: left;
        line-height: 22px;
        font-size: 13px;
        overflow: hidden;
        width: 140px;
    }

    .racing_data_winningbox {
        overflow: hidden;
    }

    .racing_data_winningbox .data_item {
        width: 16px;
        height: 22px;
        cursor: pointer;
        text-align: center;
        line-height: 22px;
        margin: 0 5px;
        font-size: 12px;
        font-weight: 500;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-image: url(../../static/img/icon/small_circle.png);
        color: white;
        line-height: 23px;
    }

    .data_winningbox .data_item {
        width: 25px;
        height: 15px;
        cursor: pointer;
        text-align: center;
        line-height: 15px;
        font-weight: 500;
        margin: 0 2px;
        background-position: center center;
        background-repeat: no-repeat;
        font-size: 12px;
        background-size: 25px 15px;
    }

    .data_winningbox {
        overflow: hidden;
        align-items: center;
    }

    .data_winningbox .icon1 {
        color: #010101;
        background-image: url(../../static/img/icon/white_ellipse.png);
    }

    .data_winningbox .icon2 {
        color: #fff;
        background-image: url(../../static/img/icon/colour_ellipse.png);
    }

    .racing_data_winningbox .icon_white {
        background-image: url(../../static/img/icon/small_circle_white.png);
        color: #010101;
    }

    /* 主要内容开始 */
    .Timhonor_content_box {
        width: 100%;
    }

    .Dragon_Tiger label {
        margin-right: 24px;
    }

    .game_message_box .el-button {
        display: none
    }

    /* 提示栏 */
    .racing_gameintro_box {
        height: 40px;
        padding: 0 20px;
        color: #000;
        align-items: center;
        font-size: 12px;
        background-color: #ffffff;
    }

    .winning_box_title {
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        line-height: 14px;
        letter-spacing: 1px;
        color: #ffffff;
    }

    .winning_item_list {
        width: 42px;
        height: 42px;
        text-align: center;
        line-height: 42px;
        color: #1a1c21;
        cursor: pointer;
        background-color: #fdf7f7;
        border-radius: 100%;
        margin: 0 2px;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        color: #2c9a92;
        box-shadow: 0 0 5px 0px #ffffff;
    }
</style>



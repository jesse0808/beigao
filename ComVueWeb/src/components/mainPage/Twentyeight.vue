<template>
    <!-- 28幸运 -->
    <div class="allgame-mainbox twnetyeight">
        <div class="box_center">
            <!-- 中奖信息 -->
            <div class="title_box box_h">
                <div class="title_logo">
                    <img :src="logoImgUrl" alt=""/>
                </div>
                <!--投注时间-->
                <div class="title_countdown_box">
                    <h3>投注倒计时&emsp;<strong>{{NowLssue}}</strong>&ensp;期</h3>
                    <div>
                        <countDown :time="NowTime" @upTimeData="upTimeData"></countDown>
                    </div>
                </div>
                <!-- 往期中奖号码 -->
                <div class="title_countdown_box">
                    <h3>开奖号码&emsp;<strong>{{LastLssue}}</strong>&emsp;期
                        <router-link class="to_zst"
                                     :to="{name:'Trendmap',query:{id:$route.query.id,index:$route.query.index}}"
                                     target="_blank">
                            <span class="iconfont icon-zoushitu"></span>&ensp;走势
                        </router-link>
                    </h3>
                    <!-- 中奖号码盒子 -->
                    <div style="margin-top: 8px">
                        <open-number :data-array="LastNum"></open-number>
                    </div>
                </div>
            </div>
            <!-- 玩法内容 -->
            <div class="gametype_center">
                <div class="content_info">
                    <div class="content_box_left">
                        <!-- 选号 -->
                        <div class="twenty_content_box1 gametype_topnav">
                            <!-- 号码列表 -->
                            <div class="twenty_select_list cf">
                                <div class="num_list_item" v-for="(item,index) in gameList1" :key="index"
                                     :data-id="item.LpId"
                                     @click="gameChioce" :data-odd="item.Odds" :data-name="item.Name">
                                    <div :class="['twenty_select_item_bg',gameState==item.LpId?'checed_true big_icon':'checed_false']"
                                         :data-id="item.LpId">
                                        {{item.Alias}}
                                    </div>
                                    <p :data-id="item.LpId">x{{item.Odds}}</p>
                                </div>
                            </div>
                        </div>
                        <!-- 竞猜 -->
                        <div class="twenty_content_box2">
                            <div class="content_box2_main">
                                <div class="content_box2_item cf">
                                    <!-- 选择 box2_content_select -->
                                    <div :class="['box2_content','width3',gameState==item.LpId?'box2_content_select':'']"
                                         v-for="(item,index) in gameList2" :key="index" :data-id="item.LpId"
                                         @click="gameChioce"
                                         :data-odd="item.Odds" :data-name="item.Name">
                                        <span :data-id="item.LpId">{{item.Alias}}</span>x{{item.Odds}}
                                    </div>
                                </div>
                                <div class="content_box2_item cf">
                                    <div :class="['box2_content','width3',gameState==item.LpId?'box2_content_select':'']"
                                         v-for="(item,index) in gameList3" :key="index" :data-id="item.LpId"
                                         @click="gameChioce"
                                         :data-odd="item.Odds" :data-name="item.Name">
                                        <span :data-id="item.LpId">{{item.Alias}}</span>x{{item.Odds}}
                                    </div>
                                </div>
                                <div class="content_box2_item cf">
                                    <div :class="['box2_content','width6',gameState==item.LpId?'box2_content_select':'']"
                                         v-for="(item,index) in gameList4" :key="index" :data-id="item.LpId"
                                         @click="gameChioce"
                                         :data-odd="item.Odds" :data-name="item.Name">
                                        <span :data-id="item.LpId">{{item.Alias}}</span>x{{item.Odds}}
                                    </div>
                                </div>
                                <div class="content_box2_item cf">
                                    <div :class="['box2_content','width4',gameState==item.LpId?'box2_content_select':'']"
                                         v-for="(item,index) in gameList5" :key="index" :data-id="item.LpId"
                                         @click="gameChioce"
                                         :data-odd="item.Odds" :data-name="item.Name">
                                        <span :data-id="item.LpId">{{item.Alias}}</span>x{{item.Odds}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 用户投注 -->
                        <div class="twenty_user_opration box_h">
                            <!-- 用户输入投注数量 -->
                            <div class="user_input_box" style="padding-top: 7px">
                                <div class="user_input">
                                    <span>单注金额：</span><input type="text" v-model="betMount"/>
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
                                <a href="javascript:void(0)" class="add_num" @click="AddNum">添加号码</a>
                                <a href="javascript:void(0)" class="direct_bet" @click="Directbet">一键投注</a>
                            </div>
                        </div>
                        <!-- 投注框 -->
                        <betting :time="NowTime" :ids="gameState" @direct="dirAryBet" @addnum="AddNum"
                                 @emptynum="EmptyNum" @deletenum="deleteNum"
                                 :betary="betAry" :gameindex="GameIndex" @openmess="openMessAge"
                                 @chinput="changeMoney"></betting>
                    </div>
                    <div class="content_box_right" style="padding-top: 0;">
                        <history :historyData="LastFiveLssue" :id=19></history>
                    </div>
                </div>

                <!-- 表格 -->
                <tablelist :tablist="tableList" @setinfo="infoData" :indexs="GameIndex"></tablelist>
            </div>
            <!-- 未选择投注号码提示弹框 -->
            <betElast v-if="betMinA" @bethide="betMinAHide"></betElast>
            <!-- 投注成功组件 -->
            <betSuccess v-if="betMinSucee" @bethide="betMinSHide"></betSuccess>
            <!-- 详情弹框 -->
            <detali :getinfo="infoList" ref="drag" @list="ListAjax" @getinfo="getUserInfo"></detali>
            <!-- 悬浮组件 -->
            <flextab :gameType=18 :id="GameIds" :indexs="GameIndex"></flextab>
            <!-- 倒计时结束后显示 -->
            <openResult v-if="openFrame" :redata="openDataRe" @hidere="hideOpenRe"></openResult>
        </div>
    </div>
</template>
<script>
  //系统设置
  import {SysKey} from "../../util/sysconfig";
  // 悬浮组件
  import flextab from "../Subcomponents/flex_tab"
  // 投注记录组件
  import betting from "../Subcomponents/Betting"
  // 表格组件
  import tablelist from "../Subcomponents/Tablelist"

  // 投注提示弹框
  import betElast from "../Elasticframe/Betting_minone"
  import betSuccess from "../Elasticframe/Betting_success"
  // 引用axios封装文件
  import {postAjax, getAjax} from "../../util/ajax.js"
  // 详情弹框
  import detali from "../Elasticframe/infodetails"
  // 秒数转化
  import {SecondToHHSSMM} from "../../static/js/changeTime.js"
  // 倒计时结束后显示
  import openResult from "../Elasticframe/Number_change"
  //开奖历史
  import history from "../conmon/history";
  //倒计时组件
  import countDown from "../conmon/countDown";
  //开奖动画组件
  import openNumber from "../conmon/openNumber";

  export default {
    // 刷新页面
    inject: ["reload"],
    data() {
      return {
        timeNum: 0,//请求次数
        showFrame: true, //初始化弹框
        countTime: false, //显示倒计时
        openTime: "",//开奖期数
        openDataRe: {}, //开奖弹框数据
        openFrame: false, //倒计时结束弹框
        imgUrl: SysKey("ImgServerUrl").SysValue, //图片地址
        logoImgUrl: '',//彩票图标
        GameIds: parseInt(this.$route.query.id,), //游戏ID
        GameIndex: this.$route.query.index.toString(),  //游戏种类
        choicenum: true,
        gameList1: "", //数字列表按钮
        gameList2: "", //大小单双列表
        gameList3: "", //大单小单大双小双列表
        gameList4: "", //极大极小
        gameList5: "",  //豹子类
        gameState: -1, //模块选中状态
        NowLssue: "", //当前期号
        LastLssue: "", //近一期
        LastNum: {}, //近一期开奖号码
        NowTime: {}, //剩余时间
        LastFiveLssue: [], //近五期数据
        betMinA: false, //弹框是否显示
        betMinSucee: false, //投注成功弹框状态
        gameOdds: "", //游戏赔率
        betMount: "", //投注金额
        gameName: '', //游戏名称
        NumBets: 0, //投注数量
        MoneyBets: 0,//投注总金额
        // 传入投注卡子组件的内容
        betAry: [],
        // 传入表格的记录
        tableList: [],
        infoList: {}, //接受子组件的值
        timer: null, //设置计时器
      }

    },
    methods: {
      // 加载中
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
      //重复执行获取开奖号码
      startGetNum() {
        this.showFrame = false
        let num = 0
        setTimeout(() => {
          num++
          if (num < 2) {
            this.getResultNum()
          }
        }, 5000)
      },
      // 接受子组件的值
      infoData(data) {
        let that = this
        let index = 1  //1为普通订单，2位追号订单
        let num = data.OrderNumber
        let url = "Api/Order/GetDetailByOrderNumber?" + "number=" + num + "&type=" + index
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
            that.$refs.drag.dialogTableVisible = true
          })
          .catch(() => {
            // that.openMessAge("网络异常，请刷新后重试")
          })


      },
      // 显示弹框 隐藏弹框
      betMinAShow() {
        this.betMinA = true
      },
      betMinAHide() {
        this.betMinA = false
      },
      // 投注成功弹框
      betMinSShow() {
        this.betMinSucee = true
        this.autoHideBetSuc = setTimeout(this.betMinSHide, 2000);
      },
      betMinSHide() {
        this.betMinSucee = false
        this.autoHideBetSuc = null
      },
      // 切换期号数据
      choice_data() {
        this.choicenum = true
      },
      choice_data_other() {
        this.choicenum = false
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
      },
      // 请求玩法数据
      gameAjax() {
        let that = this
        let getPlayList = JSON.parse(window.sessionStorage.getItem("1playList" + that.GameIds))
        if (getPlayList) {
          that.setGameList(getPlayList)
          return false
        }
        let url = "Api/Lp/GetPlayList"
        let data = {
          lpId: that.GameIds,
          pattern: 1
        }
        this._initOpenLoading(false)
        getAjax(url, data).then(function (data) {
          that._initCloseLoading()
          that.setGameList(data.Data)
          window.sessionStorage.setItem("1playList" + that.GameIds, JSON.stringify(data.Data))
        }).catch(() => {
          this._initCloseLoading()
          // that.openMessAge("网络异常，请刷新后重试")
        })
      },
      setGameList(data) {
        let that = this
        that.gameList1 = data.slice(0, 28)
        that.gameList2 = data.slice(28, 32)
        that.gameList3 = data.slice(32, 36)
        that.gameList4 = data.slice(36, 38)
        that.gameList5 = data.slice(38)
      },
      // 模块选中
      gameChioce(e) {
        let that = this
        if (e.target.dataset.id == that.gameState) {
          that.gameState = -222
        } else {
          that.gameState = parseInt(e.currentTarget.dataset.id);
          that.gameOdds = e.currentTarget.dataset.odd;
          that.gameName = e.currentTarget.dataset.name;
        }

      },
      //数组投注
      dirAryBet() {
        let that = this
        let ary = that.betAry
        if (ary.length < 1) {
          that.betMinAShow()
        } else {
          let orders = []
          ary.forEach(item => {
            let obj = {}
            obj["Lpid"] = parseInt(item.ids)
            obj["PlayName"] = item.name
            obj["BetMoney"] = parseInt(item.mount)
            orders.push(obj)
          })
          let url = "Api/Bet/AddHandiCapOrder?" + "lssue=" + that.NowLssue + "&" + "lgId=" + that.GameIds
          this._initOpenLoading(true)
          postAjax(url, orders, 1)
            .then(function (data) {
              that._initCloseLoading()
              if (data.IsSucess) {
                if (data.Data.ErrorInfos.length > 0) {
                  that.openMessAge("成功投注：" + data.Data.SuccessCount + "注，投注失敗：" + data.Data.ErrorInfos.length + "注")
                } else {
                  that.betMinSShow()
                }
                // 刷新列表
                that.ListAjax()
              } else {
                that.openMessAge(data.Message)

              }
            })
            .then(function () {
              // 重置数组
              that.betAry = []
              that.betMount = 0
              that.NumBets = 0
              that.CompentMount()
              that.getUserInfo()
            })
            .catch(() => {
              that._initCloseLoading()
              //  that.openMessAge("网络异常，请刷新后重试")
            })

        }

      },
      // 直接投注
      Directbet() {
        let that = this
        let url = "Api/Bet/AddHandiCapOrder?" + "lssue=" + that.NowLssue + "&" + "lgId=" + that.GameIds
        if (that.gameName == "" || that.gameName == null) {
          that.betMinA = true
        } else if (that.betMount == 0) {
          that.openMessAge("请选择投注金额")
        } else if (that.betMount > this.$store.state.userInfo.Balance) {
          that.openMessAge("您的可用余额不足，请重新选择")
          return
        } else {
          let orders = [
            {
              LpId: parseInt(that.gameState),
              PlayName: that.gameName,
              BetMoney: parseInt(that.betMount)
            }
          ]
          this._initOpenLoading(true)
          postAjax(url, orders, 2)
            .then(function (data) {
              that._initCloseLoading()
              if (data.IsSucess == false) {
                that.openMessAge(data.Message)
                that.betMount = ""
                that.gameState = -222
                that.gameName = ""
              } else {
                if (data.Data.ErrorInfos.length > 0) {
                  that.openMessAge("失败：" + data.Data.ErrorInfos.length + "注")
                } else {
                  that.betMinSShow()
                  that.betMount = ""
                  that.gameState = -222
                  that.gameName = ""
                  that.betAry = []
                  that.getUserInfo()
                }
              }
            })
            .then(function () {
              // 计算金额
              that.CompentMount()
              // 刷新列表
              that.ListAjax()
            })
            .catch(() => {
              that._initCloseLoading()
              // that.openMessAge("网络异常，请刷新后重试")
            })
        }
      },
      // 添加投注卡列表
      AddNum() {
        let that = this
        let obj = {};
        obj["name"] = that.gameName
        obj["odds"] = that.gameOdds
        obj["mount"] = that.betMount
        obj["ids"] = that.gameState
        obj["gameId"] = that.GameIds
        obj["time"] = that.NowLssue
        if (that.gameName == null || that.gameName == undefined || that.gameName == "") {
          that.betMinAShow()
        } else {
          if (that.betMount == null || that.betMount == undefined || that.betMount == "") {
            let texts = "请选择投注金额"
            that.openMessAge(texts)
          } else {
            that.betAry.push(obj)
            // 添加成功后初始化数据
            // 重置投注数
            // that.betMount = ""
            that.gameState = -222
            that.gameName = ""
            // 计算投注金额
            that.CompentMount()
          }
        }
      },
      //计算投注金额
      CompentMount() {
        let that = this
        that.NumBets = that.betAry.length;
        let num = 0
        that.betAry.forEach(item => {
          if (item.mount == "") {
            item.mount = 0
          }
          num += parseInt(item.mount)
        })
        that.MoneyBets = parseInt(num)
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
      //近期开奖数据
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
            that.NowLssue = data.Data.NowLssue
            that.LastLssue = data.Data.LastLssueFormat
            that.NowTime = {
              time: data.Data.NowLssueRemainTime,
              state: true
            }
            that.openTime = data.Data.LastLssue  //开奖期号
            if (data.Data.LastOpenNumber == null || data.Data.LastOpenNumber == "") {
              // that.LastNum = ["?", "+", "?", "+", "?", "=", "?"]
              that.LastNum = {
                state: false,
                arr: []
              }
              openState = true //无开奖号码
            } else {
              // that.LastNum = data.Data.LastOpenNumber.split("=")[0].split("").concat(["="].concat(data.Data.LastOpenNumber.split("=")[1]))
              that.LastNum = {
                state: true,
                arr: [...data.Data.LastOpenNumber.split("=")[0].split("+").concat(data.Data.LastOpenNumber.split("=")[1])]
              }
              openState = false //有开奖号码
            }
            // 初始化时间组件
            // that.initialTime()
          })
          .then(function () {
            // 如果没有开奖号，开始执行倒计时请求开奖号码
            if (openState) {
              that.setTimer()
            }
          })
          .then(function () {
            if (that.openTime != 0) {

            }
          })
          .catch(() => {
            // that.openMessAge('网络异常，请刷新后重试')
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
            if (data.Data == null) {
              //五期数组为空
            } else {
              let ary = data.Data;
              that.LastFiveLssue = ary.map(item => {
                if (item.OpenNumber == null) {
                  return {
                    FormatLssue: item.FormatLssue,
                    OpenNumber: ["+", "?", "=", '?']
                  }
                } else {
                  return {
                    FormatLssue: item.FormatLssue,
                    OpenNumber: item.OpenNumber.split("=")[0].split("").concat(["="].concat(item.OpenNumber.split("=")[1]))
                  }
                }

              })
            }
          })
      },
      // 显示提示框
      openMessAge(data) {
        this.$message.error(data);
      },
      //投注记录
      ListAjax() {
        let that = this
        let url = "api/OrderReport/BetHistory" + "?lgid=" + that.GameIds
        postAjax(url)
          .then(function (data) {
            that.tableList = data.Data;
          })
          .catch(() => {
            // that.openMessAge('网络异常，请刷新后重试')
          })
      },
      // 请求游戏图片
      getGameIcon() {
        this.navAry.forEach(item => {
          item.LotteryList.forEach(e => {
            if (e.LgId == this.GameIds) {
              this.logoImgUrl = ''
              this.logoImgUrl = this.imgUrl + e.WebIco
            }
          })
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
              // 显示开奖号码
              that.LastNum = {
                state: true,
                arr: [...data.Data.OpenNumber.split("=")[0].split("+").concat(data.Data.OpenNumber.split("=")[1])]
              }
              // that.LastNum = data.Data.OpenNumber.split("=")[0].split("").concat(["="].concat(data.Data.OpenNumber.split("=")[1]))
              // 显示弹框
              that.openDataRe["LastOpenNumber"] = data.Data.OpenNumber.split("=")[0].split("").concat(["="].concat(data.Data.OpenNumber.split("=")[1]))
              that.openDataRe["Time"] = that.LastLssue
              that.openDataRe["Name"] = data.Data.lgText
              that.openFrame = true
              // 清除倒计时
              clearInterval(that.timer)
              that.timer = null
              // 请求近5期期号数据
              that.PhaseAjax()
              // 请求表单数据
              that.ListAjax()
            }
          })
          .catch(() => {
            // that.openMessAge('网络异常，请刷新后重试')
          })
      },
      // 关闭开奖弹框
      hideOpenRe() {
        this.openFrame = false
        this.timeNum = 0
      },
      // 用户输入金额
      changeMoney() {
        this.CompentMount()
      },
      // 请求用户数据
      getUserInfo() {
        let that = this;
        let url = "Api/User/GetUserInfo";
        postAjax(url)
          .then(function (data) {
            // console.log(data)
            // 提交用户信息到vuex
            that.$store.commit('setUserInfo', data.Data);
          })
          .catch(() => {
            // that.openMessAge('网络异常，请刷新后重试')
          })
      },
      handleWinFocus() {
        this.timeAjax();
      }
    },
    components: {
      betting, tablelist, betElast, betSuccess, detali, flextab, openResult, history, countDown, openNumber
    },
    created() {
      // 请求近5期期号数据
      this.PhaseAjax()
      // 玩法导航
      this.gameAjax()
      // 投注信息
      this.timeAjax()
      // 投注记录
      this.ListAjax()
      // 请求图片
      this.getGameIcon()
    },
    computed: {
      navAry() {
        return this.$store.state.navAry //导航栏数据
      }
    },
    // 监听刷新页面
    watch: {
      $route() {
        this.reload()
      },
      navAry(val) {
        this.getGameIcon()
      }
    },
    beforeDestroy() {
      // 进入页面时清除定时器
      clearInterval(this.timer)
      // this.timer = null
      // 每次离开当前界面时，清除监听
      window.removeEventListener('focus', this.handleWinFocus);
    },
    destroyed() {
      // 每次离开当前界面时，清除定时器
      clearInterval(this.timer)
      // this.timer = null;
    },
    mounted() {
      window.addEventListener('focus', this.handleWinFocus);
    }
  }
</script>
<style>
    .user_select_iconbox > a {
        width: 49px;
        height: 48px;
        margin: 0 9px;
        cursor: pointer;
    }
    .user_select_iconbox > a:hover img{
        animation:myRotate .5s linear reverse;
    }
    @-webkit-keyframes myRotate{
        0%{ -webkit-transform: rotateX(0deg);}
        50%{ -webkit-transform: rotateX(180deg);}
        100%{ -webkit-transform: rotateX(360deg);}
    }
    @keyframes myRotate{
        0%{ -webkit-transform: rotateX(0deg);}
        50%{ -webkit-transform: rotateX(180deg);}
        100%{ -webkit-transform: rotateX(360deg);}
    }
    .gametype_center {
        width: 100%;
    }

    .twenty_content_box1 {
        width: 100%;
        padding: 20px 11px 33px;
        overflow: hidden;
        border-bottom: 1px solid #cfcfcf;
    }

    .twenty_select_list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
    }

    .twenty_select_list > * {
        cursor: pointer;
    }

    .twnetyeight .num_list_item {
        text-align: center;
        color: #8e8e8e;
        width: auto;
        padding: 0 9px;
        float: left;
        margin-top: 12px;
        font-size: 0px;
    }

    .num_list_item p {
        font-size: 12px;
    }

    .twnetyeight .num_list_item .twenty_select_item_bg {
        width: 45px;
        height: 45px;
        font-size: 18px;
        color: #171717;
        line-height: 42px;
        border-radius: 100%;
        background-image: linear-gradient(0deg, #f2f2f2 0%, #ffffff 100%), linear-gradient( #ececec, #ececec);
        background-blend-mode: normal, normal;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.04);
        border: solid 1px #c6d1d0;
    }
    .twnetyeight .num_list_item .twenty_select_item_bg:hover{
        color: #ffffff !important;
        background-color: #008573 !important;
        background-image: none !important;
    }

    /* 竞猜 */
    .twenty_content_box2 {
        width: 100%;
        padding: 20px 20px 17px;
        border-bottom: 1px solid #cacaca;
    }

    .content_box2_main {
        width: 100%;
        background-color: #ffffff;
        border: 1px solid #dedfe5;
    }

    .content_box2_item {
        border-bottom: 1px solid #dedfe5;
        font-size: 14px;
    }

    .content_box2_item:last-child {
        border-bottom: none;
    }

    .box2_content {
        float: left;
        text-align: center;
        border-right: 1px solid #dedfe5;
        line-height: 48px;
        color: #727272;
        cursor: pointer;
    }

    .box2_content span {
        font-size: 18px;
        margin-right: 5px;
        color: #171717;
    }

    .content_box2_item .box2_content_select {
        color: #ffffff;
        background-color: #299b8f;
        border: none;
    }
    .content_box2_item .box2_content_select > span{
        color: #ffffff;
    }
    .content_box2_item .box2_content:last-child {
        border-right: none;
    }

    .content_box2_item .width3 {
        width: 25%;
    }

    .content_box2_item .width4 {
        width: 33.33%;
    }

    .content_box2_item .width6 {
        width: 50%;
    }

    /* 用户投注 */
    .twnetyeight .twenty_user_opration {
        width: 100%;
        padding: 10px 20px 10px;
        overflow: hidden;
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
        color: #30a699;
        font-size: 16px
    }

    .user_btn_box {
        text-align: right;
    }

    .user_btn_box button:first-child {
        margin-right: 5px;
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


</style>

<!--历史中奖-->
<style>
    .twnetyeight .winning_box {
        width: auto;
        overflow: hidden;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
</style>

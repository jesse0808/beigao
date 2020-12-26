<template>
        <!-- 用户投注 -->
        <div class="twenty_user_opration box_h">
          <!-- 用户输入投注数量 -->
          <div class="user_input_box">
            <div class="user_input">
              <span>投注金额：</span><input type="text" v-model="betMount" />
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
            <a class="user_select_coin">
              <img src="../../static/img/gametype/coin_10.png" data-mount="10" @click="setMount" />
            </a>
            <a class="user_select_coin">
              <img src="../../static/img/gametype/coin_50.png" data-mount="50" @click="setMount" />
            </a>
            <a class="user_select_coin">
              <img src="../../static/img/gametype/coin_100.png" data-mount="100" @click="setMount" />
            </a>
            <a class="user_select_coin">
              <img src="../../static/img/gametype/coin_500.png" data-mount="500" @click="setMount" />
            </a>
            <a class="user_select_coin">
              <img src="../../static/img/gametype/coin_1000.png" data-mount="1000" @click="setMount" />
            </a>
          </div>
          <!-- 提示框 -->
          <div class="game_message_box">
            <el-button :plain="true" @click="openMessAge"></el-button>
          </div>
          <!-- 用户按钮 -->
          <div class="user_btn_box box_flex">
            <button class="btn_pay" @click="Directbet">一键投注</button>
          </div>
    </div>
</template>
<script>
  //系统设置
  import {SysKey} from "../../util/sysconfig";
  // 悬浮组件
  import flextab from "../Subcomponents/flex_tab"
  // 投注记录组件
  // import betting  from "../Subcomponents/Betting"
  // 表格组件
  import tablelist from "../Subcomponents/Tablelist"
  // 投注提示弹框
  import betElast from "../Elasticframe/Betting_minone"
  import betSuccess from "../Elasticframe/Betting_success"
  // 引用axios封装文件
  import {postAjax,getAjax} from "../../util/ajax.js"
  // 详情弹框
  import detali from "../Elasticframe/infodetails"
  // 秒数转化
  import {SecondToHHSSMM} from "../../static/js/changeTime.js"
  // 倒计时结束后显示
  import openResult from "../Elasticframe/Number_change"
  export default {
    // 刷新页面
    inject:["reload"],
    data(){
      return{
        timeNum:0,//请求次数
        showFrame:true, //初始化弹框
        countTime:false, //显示倒计时
        openTime:"",//开奖期数
        openDataRe:{}, //开奖弹框数据
        openFrame:false, //倒计时结束弹框
        timer_icon:require("../../static/img/digits.png"), //倒计时背景图
        imgUrl:SysKey("ImgServerUrl").SysValue, //图片地址
        GameIds:parseInt(this.$route.query.id,), //游戏ID
        GameIndex:this.$route.query.index.toString(),  //游戏种类
        choicenum:true,
        gameList1:"", //数字列表按钮
        gameList2:"", //大小单双列表
        gameList3:"", //大单小单大双小双列表
        gameList4:"", //极大极小
        gameList5:"",  //豹子类
        gameState:-1, //模块选中状态
        NowLssue:"", //当前期号
        LastLssue:"", //近一期
        LastNum:[], //近一期开奖号码
        NowTime: 0, //剩余时间
        LastFiveLssue:[], //近五期数据
        betMinA:false, //弹框是否显示
        betMinSucee:false, //投注成功弹框状态
        gameOdds:"", //游戏赔率
        betMount:"", //投注金额
        gameName:'', //游戏名称
        NumBets:0, //投注数量
        MoneyBets:0,//投注总金额
        // 传入投注卡子组件的内容
        betAry:[],
        // 传入表格的记录
        tableList:[],
        infoList:{}, //接受子组件的值
        timer:null, //设置计时器
      }

    },
    methods:{
      // 加载中
      _initOpenLoading(isFlag = true) {
        this.loading = this.$loading({
          lock: true,
          text: `${isFlag? '投注中':'加载中'}...`,
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.4)'
        })
      },
      _initCloseLoading() {
        this.loading.close()
      },
      //重复执行获取开奖号码
      startGetNum(){
        this.showFrame = false
        let num = 0
        setTimeout(()=>{
          num++
          if(num<2){
            this.getResultNum()
          }
        },5000)
      },
      // 接受子组件的值
      infoData(data){
        let that =this
        let index = 1  //1为普通订单，2位追号订单
        let num = data.OrderNumber
        let url ="Api/Order/GetDetailByOrderNumber?"+"number="+num+"&type="+index
        postAjax(url)
          .then(function(data){
            if(data.IsSucess){
              that.infoList = data.Data[0]
            }
            else{
              that.openMessAge("获取信息错误，请重试")
              return false
            }
          })
          .then(function(){
            that.$refs.drag.dialogTableVisible = true
          })
          .catch(()=>{
            // that.openMessAge("网络异常，请刷新后重试")
          })


      },
      // 显示弹框 隐藏弹框
      betMinAShow(){
        this.betMinA = true
      },
      betMinAHide(){
        this.betMinA = false
      },
      // 投注成功弹框
      betMinSShow(){
        this.betMinSucee = true
        this.autoHideBetSuc = setTimeout(this.betMinSHide,2000 );
      },
      betMinSHide(){
        this.betMinSucee = false
        this.autoHideBetSuc = null
      },
      // 切换期号数据
      choice_data(){
        this.choicenum = true
      },
      choice_data_other(){
        this.choicenum = false
      },
      // 选择投注金额
      setMount(e){
        let that = this
        let num = e.currentTarget.dataset.mount
        let count  = that.betMount
        if(count == ""){
          count = 0
        }
        that.betMount = parseInt(num) + parseInt(count)
      },
      // 请求玩法数据
      gameAjax(){
        let that = this
        let url = "Api/Lp/GetPlayList"
        let data = {
          lpId:that.GameIds,
          pattern:1
        }
        this._initOpenLoading(false)
        getAjax(url,data)

          .then(function(data){
            that._initCloseLoading()
            that.gameList1 = data.Data.slice(0,28)
            that.gameList2 = data.Data.slice(28,32)
            that.gameList3 =data.Data .slice(32,36)
            that.gameList4 = data.Data.slice(36,38)
            that.gameList5 = data.Data.slice(38)
          })
          .catch(()=>{
            this._initCloseLoading()
            // that.openMessAge("网络异常，请刷新后重试")
          })
      },
      // 模块选中
      gameChioce(e){
        let that = this
        if(e.target.dataset.id == that.gameState){
          that.gameState = -222
        }
        else{
          that.gameState = parseInt(e.currentTarget.dataset.id);
          that.gameOdds = e.currentTarget.dataset.odd;
          that.gameName = e.currentTarget.dataset.name;
        }

      },
      //数组投注
      dirAryBet(){
        let that = this
        let ary = that.betAry
        if(ary.length<1){
          that.betMinAShow()
        }
        else{
          let orders=[]
          ary.forEach(item=>{
            let obj = {}
            obj["Lpid"]=parseInt(item.ids)
            obj["PlayName"] = item.name
            obj["BetMoney"] = parseInt(item.mount)
            orders.push(obj)
          })
          let url ="Api/Bet/AddHandiCapOrder?"+"lssue="+that.NowLssue+"&"+"lgId="+that.GameIds
          this._initOpenLoading(true)
          postAjax(url,orders,1)
            .then(function(data){
              that._initCloseLoading()
              if(data.IsSucess){
                if(data.Data.ErrorInfos.length >0){
                  that.openMessAge("成功投注："+data.Data.SuccessCount+"注，投注失敗：" + data.Data.ErrorInfos.length + "注")
                }
                else{
                  that.betMinSShow()
                }
                // 刷新列表
                that.ListAjax()
              }
              else{
                that.openMessAge(data.Message)

              }
            })
            .then(function(){
              // 重置数组
              that.betAry = []
              that.betMount = 0
              that.NumBets = 0
              that.CompentMount()
              that.getUserInfo()
            })
            .catch(()=>{
              that._initCloseLoading()
              //  that.openMessAge("网络异常，请刷新后重试")
            })

        }

      },
      // 直接投注
      Directbet(){
        let that = this
        let url ="Api/Bet/AddHandiCapOrder?"+"lssue="+that.NowLssue+"&"+"lgId="+that.GameIds
        if(that.gameName == "" || that.gameName == null){
          that.betMinA = true
        }
        else if(that.betMount == 0){
          that.openMessAge("请选择投注金额")
        }
        else if(that.betMount>this.$store.state.userInfo.Balance){
          that.openMessAge("您的可用余额不足，请重新选择")
          return
        }
        else{
          let orders=[
            {
              LpId:parseInt(that.gameState),
              PlayName:that.gameName,
              BetMoney:parseInt(that.betMount)
            }
          ]
          this._initOpenLoading(true)
          postAjax(url,orders,2)
            .then(function(data){
              that._initCloseLoading()
              if(data.IsSucess==false){
                that.openMessAge(data.Message)
                that.betMount = ""
                that.gameState = -222
                that.gameName = ""
              }
              else{
                if(data.Data.ErrorInfos.length>0){
                  that.openMessAge("失败："+data.Data.ErrorInfos.length+"注")
                }
                else{
                  that.betMinSShow()
                  that.betMount = ""
                  that.gameState = -222
                  that.gameName = ""
                  that.betAry=[]
                  that.getUserInfo()
                }
              }
            })
            .then(function(){
              // 计算金额
              that.CompentMount()
              // 刷新列表
              that.ListAjax()
            })
            .catch(()=>{
              that._initCloseLoading()
              // that.openMessAge("网络异常，请刷新后重试")
            })
        }
      },
      // 添加投注卡列表
      AddNum(){
        let that = this
        let obj = {};
        obj["name"] = that.gameName
        obj["odds"] = that.gameOdds
        obj["mount"] = that.betMount
        obj["ids"] = that.gameState
        obj["gameId"] = that.GameIds
        obj["time"] = that.NowLssue
        if(that.gameName == null || that.gameName == undefined ||that.gameName == ""){
          that.betMinAShow()
        }
        else{
          if(that.betMount == null || that.betMount == undefined || that.betMount == ""){
            let texts = "请选择投注金额"
            that.openMessAge(texts)
          }
          else{
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
      CompentMount(){
        let that = this
        that.NumBets = that.betAry.length;
        let num = 0
        that.betAry.forEach(item => {
          if(item.mount == ""){
            item.mount = 0
          }
          num += parseInt(item.mount)
        })
        that.MoneyBets = parseInt(num)
      },
      // 清空投注卡列表
      EmptyNum(Data){
        let that = this
        that.betAry = Data
        // 计算投注金额
        that.CompentMount()
      },
      // 删除投注卡某一列
      deleteNum(Data){
        let that = this
        that.betAry.splice(Data,1)
        // 计算投注金额
        that.CompentMount()
      },
      //近期开奖数据
      timeAjax(){
        let that = this
        let url = "Api/Lssue/GetBetLssueInfo"
        let data = {
          lgId:that.GameIds
        }
        let openState = true   //是否需要请求开奖
        getAjax(url,data)
        // 请求成功后赋值
          .then(function(data){
            window.NowLssue = data.Data.NowLssueFormat
            that.NowLssue = data.Data.NowLssueFormat
            that.LastLssue = data.Data.LastLssueFormat
            that.NowTime = SecondToHHSSMM(data.Data.NowLssueRemainTime)
            that.openTime = data.Data.LastLssue  //开奖期号
            if(data.Data.LastOpenNumber==null || data.Data.LastOpenNumber == ""){
              that.LastNum = ["?","+","?","+","?","=","?"]
              openState = true //无开奖号码
            }
            else{
              that.LastNum = data.Data.LastOpenNumber.split("=")[0].split("").concat(["="].concat(data.Data.LastOpenNumber.split("=")[1]))
              openState = false //有开奖号码
            }
            // 初始化时间组件
            that.initialTime()
          })
          .then(function(){
            // 如果没有开奖号，开始执行倒计时请求开奖号码
            if(openState){
              that.setTimer()
            }
          })
          .then(function(){
            if(that.openTime != 0){
              that.setInterTime()
            }
          })
          .catch(()=>{
            // that.openMessAge('网络异常，请刷新后重试')
          })
      },
      // 设置倒计时请求开奖号码
      setTimer(){
        let that = this
        if(this.timer == null) {
          this.timer = setInterval( () => {
            that.getResultNum()
          }, 5000)
        }
      },
      // 重置倒计时插件
      setInterTime(){
        if($("#counter>div").length>8){
          $("#counter>div:nth-child(-n+8)").remove('')
        }
      },
      // 获取近5期投注期号
      PhaseAjax(){
        let that = this;
        let url = "Api/Lssue/GetLssueHistoryInfo"
        let data={
          lgId:that.GameIds
        }
        getAjax(url,data)
          .then(function(data){
            if(data.Data == null){
              //五期数组为空
            }
            else{
              that.LastFiveLssue = []
              let ary = data.Data.splice(0, 5);
              ary.forEach(item => {
                if(item.OpenNumber==null){
                  item.OpenNumber=["?","+","?","+","?","=",'?']
                }
                else{
                  item.OpenNumber = item.OpenNumber.split("=")[0].split("").concat(["="].concat(item.OpenNumber.split("=")[1]))
                }
                that.LastFiveLssue.push(item);
              })
            }
          })
      },
      // 显示提示框
      openMessAge(data){
        this.$message.error(data);
      },
      //投注记录
      ListAjax(){
        let that = this
        let url = "api/OrderReport/BetHistory"+"?lgid="+that.GameIds
        postAjax(url)
          .then(function(data){
            that.tableList = data.Data;
          })
          .catch(()=>{
            // that.openMessAge('网络异常，请刷新后重试')
          })
      },
      // 请求游戏图片
      getGameIcon(){
        this.navAry.forEach(item => {
          item.LotteryList.forEach(e =>{
            if(e.LgId == this.GameIds){
              this.imgUrl = this.imgUrl + e.WebIco
            }
          })
        })
      },
      //初始化倒计时组件
      initialTime(){
        var that = this;
        $('#counter').countdown({
          image: that.timer_icon,
          startTime: that.NowTime,
          // 倒计时结束后的回调
          timerEnd: function () {
            that.timeNum++
            // 重新请求投注数据
            if (that._isDestroyed){
              return
            }
            if(that.timeNum<2){
              that.timeAjax()
            }

          }

        });
      },
      // 获取开奖号码
      getResultNum(){
        let that = this
        let url = "Api/Lssue/GetLssueOpenInfo?lgId="+that.GameIds+"&lssue="+that.openTime
        getAjax(url)
          .then(function(data){
            window.lgText = data.Data.lgText
            if(data.Data.OpenNumber == null || data.Data.OpenNumber == ""){

            }
            else{
              // 显示开奖号码
              that.LastNum = data.Data.OpenNumber.split("=")[0].split("").concat(["="].concat(data.Data.OpenNumber.split("=")[1]))
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
          .catch(()=>{
            // that.openMessAge('网络异常，请刷新后重试')
          })
      },
      // 关闭开奖弹框
      hideOpenRe(){
        this.openFrame = false
        this.timeNum = 0
      },
      // 用户输入金额
      changeMoney(){
        this.CompentMount()
      },
      // 请求用户数据
      getUserInfo(){
        let that = this;
        let url = "Api/User/GetUserInfo";
        postAjax(url)
          .then(function(data){
            // 提交用户信息到vuex
            that.$store.commit('setUserInfo', data.Data);
          })
          .catch(()=>{
            // that.openMessAge('网络异常，请刷新后重试')
          })
      },
    },
    components:{
      tablelist,betElast,betSuccess,detali,flextab,openResult
    },
    created(){
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
    beforeCreate(){
      // 进入页面时清除定时器
      clearInterval(this.timer)
      this.timer = null
    },
    computed:{
      navAry(){
        return this.$store.state.navAry //导航栏数据
      }
    },
    // 监听刷新页面
    watch:{
      $route(){
        this.reload()
      },
      navAry(val){
        this.getGameIcon()
      }
    },
    beforeDestroy(){
      // 每次离开当前界面时，清除定时器
      clearInterval(this.timer)
      this.timer = null
    },
  }
</script>
<style>
  .twnetyeight .twenty_winning_item{
    width: 30px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    color:#1a1c21;
    font-weight: bold;
    cursor: pointer;
  }
  .twnetyeight .winning_main .icon{
    background-image: url(../../static/img/gametype/winning_bg.png);
    background-size: 60px 60px;
    background-position: center center;
    background-repeat: no-repeat;
    color:white;
    font-size: 18px;
    width: 60px;
  }
  .check_box{
    width: 23px;
    font-size: 12px;
    margin: 0 14px;
    letter-spacing: 1px;
    overflow: hidden;
  }
  .check_box   div.five_data_check{
    margin-top: 1px;
    height: 54px;
  }
  /* 近5期 */
  .five_data_item{
    overflow: hidden;
  }
  .five_data_item{
    border-bottom: 1px dashed #cacaca;
  }
  .five_data_item:nth-child(even){
    background-color: #eae9e9;
  }
  .five_data .data_time{
    text-align: center;
    line-height: 22px;
    font-size: 13px;
    overflow: hidden;
  }
  .data_winningbox{
    overflow: hidden;
  }
  .twnetyeight .data_winningbox .data_item{
    width: 16px;
    height: 22px;
    cursor: pointer;
    text-align: center;
    line-height: 21px;
    margin: 0 2px;
    font-size: 20px;
    font-weight: 500;
  }
  .user_select_iconbox{
    position: absolute;
    left: 250px;
    top:10px;
  }
  .twnetyeight .data_winningbox .icon{
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-image: url(../../static/img/icon/small_circle.png);
    color:white;
    font-size: 12px;
  }

  .twenty_content_box1{
    width: 100%;
    overflow: hidden;
  }
  .twenty_num_list{
    padding:10px  32px  22px;
    width: 100%;
    border-bottom: 1px dashed #cfcfcf;
  }
  .twenty_num_list>*{
    cursor: pointer;
  }
  .num_list_item{
    text-align: center;
    color:#8e8e8e;
    width: 68px;
    padding: 0 5px;
    float: left;
    margin-top: 12px;
    font-size: 0px;
  }
  .num_list_item p{
    font-size: 12px;
  }
  .num_list_item .list_item_bg{
    width: 100%;
    height: 58px;
    /*background-image: url(../../static/img/gametype/num_bg.png);*/
    /*background-position: center center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: 100% 100%;*/
    font-size: 20px;
    color:#1f7877;
    line-height:  58px;
    text-align: center;
    font-weight: bold;
    border: 1px solid #6fbcbc;
    border-radius: 58px;
  }
  .twenty_num_list .num_list_item>.list_item_bg_select{
    /*background-image: url(../../static/img/gametype/winning_bg.png);*/
    background-color: #299b8f;
    color:#fff;
  }
  /* 竞猜 */
  .twenty_content_box2{
    width: 100%;
    padding: 15px 35px 19px;
    border-bottom:1px dashed #cacaca;
  }
  .content_box2_main{
    width: 100%;
    background-color: #ffffff;
    border:1px solid #dedfe5;
  }
  .content_box2_item{
    border-bottom: 1px solid #dedfe5;
    font-size: 14px;
  }
  .content_box2_item:last-child{
    border-bottom:none;
  }
  .box2_content{
    float: left;
    text-align: center;
    border-right: 1px solid #dedfe5;
    line-height: 48px;
    color:#20232a;
    cursor: pointer;
  }
  .box2_content span{
    font-size: 18px;
    margin-right: 5px;
  }
  .content_box2_item .box2_content_select {
    color:#ffffff;
    background-color: #299b8f;
    border:none;
  }
  .content_box2_item .box2_content:last-child{
    border-right:none;
  }
  .content_box2_item .width3{
    width: 25%;
  }
  .content_box2_item .width4{
    width: 33.33%;
  }
  .content_box2_item .width6{
    width: 50%;
  }
  /* 用户投注 */
  .twenty_user_opration{
    width: 100%;
    overflow: hidden;
    padding: 10px 18px 10px 30px;
    position: relative;
  }
  .user_input{
    font-size: 14px;
    color:#000000;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .user_input input{
    border:1px solid #c6c8ce;
    width: 139px;
    height: 30px;
    color:#232924;
    padding-left:15px;
  }
  .user_input input:focus{
    border:1px solid #1f7877;
    outline: none;
  }
  .user_pay_for{
    font-size: 14px;
  }
  .user_pay_for .user_pay{
    display: inline-block;
  }
  .user_pay_for .user_pay strong{
    margin: 0px 7px;
    color:#ff4d4d;
  }
  .user_btn_box{
    text-align: right;
  }
  .user_btn_box button:hover{
    background-color: #3f8b96;
  }
  .user_btn_box button:first-child{
    margin-right: 5px;
  }
  .user_select_coin{
    width: 55px;
    height: 55px;
    margin: 0 5px;
    cursor: pointer;
  }
  .user_select_coin img{
    width: 55px;
    height: 55px;
  }
  .user_select_coin img:hover{
    animation: tada 1s .2s ease both;
  }
  /* 图片效果 */
  @keyframes  tada{
    0%{-webkit-transform:scale(1);}
    10%,20%{-webkit-transform:scale(0.9) rotate(-3deg);}
    30%,50%,70%,90%{-webkit-transform:scale(1.2) rotate(3deg);}
    40%,60%,80%{-webkit-transform:scale(1.2) rotate(-3deg);}
    100%{-webkit-transform:scale(1) rotate(0);}
  }
  .game_message_box .el-button{
    display: none
  }


</style>

// 历史中奖
<style>
  .winning_box {
    overflow: hidden;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
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
  .five_data{
    width: 453px;
  }
  .five_data_item{
    overflow: hidden;
    padding: 0 8px;
  }
  .five_data_item{
    border-bottom: 1px dashed #cacaca;
  }
  .five_data_item:nth-child(even){
    background-color: #eae9e9;
  }
  .five_data .data_time{
    text-align: left;
    line-height: 22px;
    font-size: 13px;
    overflow: hidden;
    width: 118px;
  }
  .data_winningbox{
    overflow: hidden;
    align-items: center;
  }
  .data_winningbox .data_item{
    width: 27px;
    height: 15px;
    cursor: pointer;
    text-align: center;
    line-height: 15px;
    font-weight: 500;
    margin: 0 2px;
    background-position: center center;
    background-repeat: no-repeat;
    font-size: 12px;
    background-size: 27px 15px;
  }
  .data_winningbox .icon1{
    color:#010101;
    background-image: url(../../static/img/icon/white_ellipse.png);
  }
  .data_winningbox .icon2{
    color:#fff;
    background-image: url(../../static/img/icon/colour_ellipse.png);
  }
</style>

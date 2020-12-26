<template>
    <div class="center_main">
        <!-- 轮播图 -->
        <div class="brodact_box">
            <el-carousel arrow="never" height="auto">
                <img :src="ary.length > 0 ?url+ary[0].Url:''" alt="">
                <el-carousel-item v-for="(item,index) in ary" :key="index">
                    <img :src="url +item.Url" :data-id="item.Id" @click="getGame(item,item.Id)"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="box_center" style="margin-top: 25px">
            <div class="type_boxs">
                <div class="type_boxs_title">
                    <img src="../../static/img/icon/recommend.png" alt="">
                    <span>精彩游戏推荐</span>
                </div>
                <div class="type_boxs_div">
                    <router-link to="/sportGame" class="type-border" href="#">
                        <div class="circle">
                            <img src="../../static/img/icon/football.png"/>
                        </div>
                        <p>体育投注</p>
                        <div class="intro">SPORTS GAME</div>
                    </router-link>
                    <router-link to="/peopleGame" class="type-border" href="#">
                        <div class="circle">
                            <img src="../../static/img/icon/live.png"/>
                        </div>
                        <p>真人娱乐</p>
                        <div class="intro">LIVE GAMES</div>
                    </router-link>
                    <router-link :to="{name:'Timehonor',query:{id:1,index:1}}" class="type-border" href="#">
                        <div class="circle ">
                            <img src="../../static/img/icon/lottery.png"/>
                        </div>
                        <p>彩票游戏</p>
                        <div class="intro">LOTTERY TICKET</div>
                    </router-link>
                    <router-link to="/ptGame" class="type-border" href="#">
                        <div class="circle  ">
                            <img src="../../static/img/icon/dzyy.png"/>
                        </div>
                        <p>电子游艺</p>
                        <div class="intro">VIDEO GAME</div>
                    </router-link>
                    <router-link to="/qpGame" class="type-border" href="#">
                        <div class="circle ">
                            <img src="../../static/img/icon/qpyx.png"/>
                        </div>
                        <p>棋牌游戏</p>
                        <div class="intro">FISHING GAME</div>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- 游戏盒子 -->
        <div class="Home_allgame_box">
            <div class="box_center">
                <div class="home_allgame_main box_h">
                    <!-- 左边的盒子 -->
                    <div class="home_allgame_leftbox">
                        <!-- 重庆时时彩 -->
                        <div class="home_timeho_div">
                            <div class="home_Timeho_box box_h">
                                <img src="../../static/img/gametype/azxy5.jpg" alt=""/>
                                <div class="home_info_box box_flex">
                                    <!-- 最新一期中奖号码 -->
                                    <div class='home_info_topbox cf'>
                                        <p>{{LastLssue}}&ensp;&ensp;中奖号码：</p>
                                        <div>
                                            <span v-for="(item,index) in LastNum" :key="index">{{item}}</span>
                                        </div>
                                    </div>
                                    <!-- 投注倒计时 -->
                                    <div class="home_info_timeup">
                                        <div>
                                            <span>{{NowLssue}}&ensp;&ensp;开奖倒计时：</span>
                                            <div class="home_countdown">
                                                <span>{{timehleft}}</span>
                                                <span>{{timehright}}</span>
                                                <b>:</b>
                                                <span>{{timemleft}}</span>
                                                <span>{{timemright}}</span>
                                                <b>:</b>
                                                <span>{{timesleft}}</span>
                                                <span>{{timesright}}</span>
                                            </div>
                                        </div>
                                        <router-link :to="{name:'Timehonor',query:{id:34,index:1}}">立即投注</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="home_timeho_div_right" @click="toLottgame"></div>
                        </div>

                        <!-- 所有游戏的种类 -->
                        <div class="home_allgame_typebox">
                            <div class="type1 box_h">
                                <router-link :to="{name:'Timehonor',query:{id:1,index:1}}" class="home_gametype_item"
                                             href="#">
                                    <div>
                                        <img src="../../static/img/gametype/type_pic1.png" alt="重庆时时彩">
                                    </div>
                                    <p>重庆时时彩</p>
                                    <span>马上参与</span>
                                </router-link>
                                <router-link :to="{name:'Timehonor',query:{id:10,index:3}}" class="home_gametype_item"
                                             href="#">
                                    <div>
                                        <img src="../../static/img/gametype/type_pic2.png" alt="山东11选5">
                                    </div>
                                    <p>山东11选5</p>
                                    <span>马上参与</span>
                                </router-link>
                                <router-link :to="{name:'Racing',query:{id:9,index:2}}" class="home_gametype_item"
                                             href="#">
                                    <div>
                                        <img src="../../static/img/gametype/type_pic3.png" alt="北京PK10">
                                    </div>
                                    <p>北京PK10</p>
                                    <span>马上参与</span>
                                </router-link>
                                <router-link :to="{name:'Timehonor',query:{id:28,index:6}}" class="home_gametype_item"
                                             href="#">
                                    <div>
                                        <img src="../../static/img/gametype/type_pic4.png" alt="排列三">
                                    </div>
                                    <p>排列三</p>
                                    <span>马上参与</span>
                                </router-link>
                            </div>

                            <div class="type2 box_h">
                                <router-link :to="{name:'Timehonor',query:{id:27,index:6}}" class="home_gametype_item"
                                             href="#">
                                    <div>
                                        <img src="../../static/img/gametype/type_pic5.png" alt="3D">
                                    </div>
                                    <p>3D</p>
                                    <span>马上参与</span>
                                </router-link>
                                <router-link :to="{name:'Timehonor',query:{id:13,index:3}}"
                                             class="home_gametype_item">
                                    <div>
                                        <img src="../../static/img/gametype/type_pic6.png" alt="上海11选5">
                                    </div>
                                    <p>上海11选5</p>
                                    <span>马上参与</span>
                                </router-link>
                                <router-link :to="{name:'Quickthree',query:{id:21,index:4}}"
                                             class="home_gametype_item">
                                    <div>
                                        <img src="../../static/img/gametype/type_pic7.png" alt="江苏快三">
                                    </div>
                                    <p>江苏快三</p>
                                    <span>马上参与</span>
                                </router-link>
                                <router-link :to="{name:'Timehonor',query:{id:1,index:1}}" href="#"
                                             class="home_gametype_item">
                                    <div>
                                        <img src="../../static/img/gametype/type_pic8.png" alt="彩票游戏">
                                    </div>
                                    <p>彩票游戏</p>
                                    <span>马上参与</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <!-- 右边的盒子 -->
                    <div class="home_allgame_rightbox">
                        <!-- 中奖公告 -->
                        <div class="home_winners">
                            <div class="home_winners_title">
                                <img src="../../static/img/icon/gift.png" alt="">
                                <span>中奖公告</span>
                            </div>
                            <div class="wonder_getgift_ggbox">
                                <marquee id="notice-marquee" contenteditable="true" direction="up" height="240px"
                                         behavior="scroll"
                                         scrollamount="3"
                                         sytle="overflow: hidden; height:120px" hegi>
                                    <div id="noticeDiv" unselectable="on"
                                         style="white-space:nowrap;width: auto;height: 440px">
                                        <ul class="wonder_getgft">
                                            <li>恭喜<span>j***er</span>在<span>腾讯分分彩</span>赢得<a>1000元</a></li>
                                            <li>恭喜<span>p***an</span>在<span>腾讯分分彩</span>赢得<a>58154元</a></li>
                                            <li>恭喜<span>at***ee</span>在<span>腾讯分分彩</span>赢得<a>2360元</a></li>
                                            <li>恭喜<span>th***sa</span>在<span>腾讯分分彩</span>赢得<a>63200元</a></li>
                                            <li>恭喜<span>l***a</span>在<span>腾讯分分彩</span>赢得<a>13612元</a></li>
                                            <li>恭喜<span>mira***le</span>在<span>腾讯分分彩</span>赢得<a>65470元</a></li>
                                            <li>恭喜<span>ba***n</span>在<span>腾讯分分彩</span>赢得<a>8574元</a></li>
                                            <li>恭喜<span>w***d</span>在<span>腾讯分分彩</span>赢得<a>7890元</a></li>
                                            <li>恭喜<span>col***s</span>在<span>腾讯分分彩</span>赢得<a>47012元</a></li>
                                            <li>恭喜<span>m***s</span>在<span>腾讯分分彩</span>赢得<a>3695元</a></li>

                                            <li>恭喜<span>B***ie</span>在<span>腾讯分分彩</span>赢得<a>10320元</a></li>
                                            <li>恭喜<span>H***a</span>在<span>腾讯分分彩</span>赢得<a>85754元</a></li>
                                            <li>恭喜<span>Hami***on</span>在<span>腾讯分分彩</span>赢得<a>8980元</a></li>
                                            <li>恭喜<span>J***on</span>在<span>腾讯分分彩</span>赢得<a>64500元</a></li>
                                            <li>恭喜<span>I***el</span>在<span>腾讯分分彩</span>赢得<a>25680元</a></li>
                                            <li>恭喜<span>Ru***ph</span>在<span>腾讯分分彩</span>赢得<a>15470元</a></li>
                                            <li>恭喜<span>Y***g</span>在<span>腾讯分分彩</span>赢得<a>85450元</a></li>
                                            <li>恭喜<span>Fra***s</span>在<span>腾讯分分彩</span>赢得<a>86952元</a></li>
                                            <li>恭喜<span>Ben***in</span>在<span>腾讯分分彩</span>赢得<a>3650元</a></li>
                                            <li>恭喜<span>Ma***e</span>在<span>腾讯分分彩</span>赢得<a>89650元</a></li>
                                        </ul>
                                    </div>
                                </marquee>
                            </div>
                        </div>
                        <!--最新优惠活动-->
                        <div class="home_winners home_float">
                            <div class="home_winners_title">
                                <img src="../../static/img/icon/bighot.png" alt="">
                                <span>最新优惠活动</span>
                            </div>
                            <div class="home_red_packet">
                                <a v-for="(item,index) in acObj" :key="index" :data-index="item.AcType"
                                   @click="toActive">
                                    <span>【{{item.Name}}】</span>活动大放送，点击查看详情...
                                </a>
                            </div>
                        </div>

                    </div>
                    <!-- 倒计时结束后显示 -->
                    <openResult v-if="openFrame" :redata="openDataRe" @hidere="hideOpenRe"></openResult>
                </div>
            </div>
        </div>
        <!-- 足球游戏 -->
        <div class="Home_football_box">
            <div class="box_center">
                <div class="Home_football_main">
                    <div class="football_topbox cf">
                        <div class="football_navbox">
                            <a href="#" class="foot_select">混合过关</a>
                            <span>|</span>
                            <a href="#">胜负平</a>
                            <span>|</span>
                            <a href="#">让球胜负平</a>
                            <span>|</span>
                            <a href="#">半全场</a>
                            <span>|</span>
                            <a href="#">比分</a>
                            <span>|</span>
                            <a href="#">总进球</a>
                            <span>|</span>
                            <a href="#">单关</a>
                        </div>
                        <!-- 合买大厅 -->
                        <a href="#" class="foot_hall_box">合买大厅</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 精彩活动 -->
        <!--    <div class="Home_Wonderful_box">-->
        <!--      <div class="box_center">-->
        <!--        <div class="wonder_main box_h">-->
        <!--          &lt;!&ndash; 精彩活动 &ndash;&gt;-->
        <!--          <div class="wonder_main_leftbox box_h">-->
        <!--            <div class="wonder_main_box">-->
        <!--              &lt;!&ndash; 标题 &ndash;&gt;-->
        <!--              <div class="wonder_title_icon">-->
        <!--                <img src="../../static/img/center/active.png"/>-->
        <!--              </div>-->
        <!--              &lt;!&ndash; 更多 &ndash;&gt;-->
        <!--              <router-link to="/sign" class='wonder_to_more'>-->
        <!--                <div>MORE</div>-->
        <!--              </router-link>-->
        <!--              &lt;!&ndash; 内容 &ndash;&gt;-->
        <!--              <div class="wonder_content_box box_h">-->
        <!--                <a v-for="(item,index) in acObj" :key="index" :data-index="index" @click="toActive">-->
        <!--                  <img :src="item.ImgUrl" :data-index="index"/>-->
        <!--                </a>-->

        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="wonder_main_rightbox box_h">-->
        <!--            <div class="wonder_main_box">-->
        <!--              &lt;!&ndash; 标题 &ndash;&gt;-->
        <!--              <div class="wonder_title_icon">-->
        <!--                <img src="../../static/img/center/active2.png"/>-->
        <!--              </div>-->

        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--    </div>-->
        <!-- 游戏种类 -->
        <!--    <div class="box_flex">-->
        <!--      &lt;!&ndash; 倒计时组件 &ndash;&gt;-->
        <!--      <div class="count_down_compon box_h set_style">-->
        <!--        <div id="counter"></div>-->
        <!--      </div>-->
        <!--    </div>-->
    </div>
</template>
<script>
  // 倒计时结束后显示
  import openResult from "../Elasticframe/Number_change"
  // 引用axios封装文件
  import {postAjax, getAjax} from "../../util/ajax.js"
  // 秒数转化
  import {SecondToHHSSMM} from "../../static/js/changeTime.js"
  import {SysKey} from "../../util/sysconfig";

  export default {
    inject: ["reload"],
    data() {
      return {
        a: null,
        url: SysKey("ImgServerUrl").SysValue, //图片地址
        timer_icon: require("../../static/img/digits.png"), //倒计时背景图
        ary: [], //轮播图数量
        NowLssue: "",//当前日期
        LastLssue: "", //上一期
        LastNum: [], //上一期开奖号码
        NowTime: 0, //倒计时
        openTime: "", //开奖期号

        btnTop: true, //向上按钮
        btnBottom: true,//向下按钮
        scrollTop: {
          top: ""
        },  //卷曲高度
        topNum: 0, //高度值
        acObj: [], //活动配置
        timer: null,//设置计时器
        openDataRe: {}, //开奖弹框信息
        openFrame: false, //开奖弹框是否显示
        timeNum: 0, //请求次数
        timehleft: 0,//开奖倒计时小时十位
        timehright: 0,//
        timemleft: 0,
        timemright: 0,
        timesleft: 0,
        timesright: 0,
      }
    },
    computed: {
      centerAry() {
        return this.$store.state.navAry //导航栏数据
      }
    },
    methods: {
      toLottgame() {
        this.$router.push({
          name: 'Timehonor',
          query: {
            id: 2,
            index: 1
          }
        });
      },
      // 请求当前投注期号
      timeAjax() {
        let that = this
        let url = "Api/Lssue/GetBetLssueInfo?lgId=34"
        let openState = true   //是否需要请求开奖
        getAjax(url)
        // 请求成功后赋值
          .then(function (data) {
            that.NowLssue = data.Data.NowLssueFormat
            that.NowTime = data.Data.NowLssueRemainTime
            that.LastLssue = data.Data.LastLssueFormat
            that.openTime = data.Data.LastLssue  //开奖期号
            if (data.Data.LastOpenNumber == null) {
              that.LastNum = ["?", "?", "?", "?", "?"]
              openState = true //无开奖号码
            } else {
              that.LastNum = data.Data.LastOpenNumber.split(",")
              openState = false //有开奖号码
            }
            // 初始化时间组件
            clearTimeout(that.setTimeFun);
            that.openTimeDispose();
          })
          .then(function () {
            // 如果没有开奖号，开始执行倒计时请求开奖号码
            if (openState) {
              that.setTimer()
            }
          })
          .then(function () {

          })
          .catch(() => {
            // that.$message.error("网络异常，请刷新后在试");
          })
      },

      // 设置倒计时请求开奖号码
      setTimer() {
        let that = this
        if (that.timer == null) {
          that.timer = setInterval(() => {
            that.getResultNum()
          }, 5000)
        }
      },
      // 获取开奖号码
      getResultNum() {
        let that = this
        let url = "Api/Lssue/GetLssueOpenInfo?lgId=34" + "&lssue=" + that.openTime
        getAjax(url)
          .then(function (data) {
            window.lgText = data.Data.lgText
            if (data.Data.OpenNumber == null || data.Data.OpenNumber == "") {
              return
            } else {
              // 显示弹框
              that.openDataRe["LastOpenNumber"] = data.Data.OpenNumber.split(',')
              that.LastNum = data.Data.OpenNumber.split(',')
              that.openDataRe["Time"] = that.LastLssue
              that.openDataRe["Name"] = data.Data.lgText
              that.openFrame = true
              // 清除倒计时
              clearInterval(that.timer)
              that.timer = null
            }
          })
          .catch(() => {
            // that.$message.error("网络异常，请刷新后在试");
          })
      },
      //开奖倒计时时间处理
      openTimeDispose() {
        let that = this;
        if (that.NowTime < 2) {
          clearTimeout(that.setTimeFun);
          that.timeAjax();
        }
        let minute = Math.floor(Number(that.NowTime) / 60);//分钟
        let timem = Number(that.NowTime) % 60;//秒
        let timeh = Math.floor(Number(minute) / 60);//小时
        that.timehleft = Math.floor(Number(timeh) / 10);
        that.timehright = Number(timeh) % 10;
        that.timemleft = Math.floor(Number(minute) / 10);
        that.timemright = Number(minute) % 10;
        that.timesleft = Math.floor(Number(timem) / 10);
        that.timesright = Number(timem) % 10;
        that.setTimeFun = setTimeout(() => {
          if (that.NowTime > 0) {
            that.NowTime -= 1;
            that.openTimeDispose();
          }
        }, 1000)

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
        }
        this.$router.push({
          name: that.routerName,
          query: {
            id: ids,
            index: indexs
          }
        })
      },
      // 按钮隐藏与现实
      btnHiden() {
        let num = this.topNum
        let that = this
        if (num == 0) {
          that.btnTop = false
          that.btnBottom = true
        } else if (num < -140) {
          that.btnTop = true
          that.btnBottom = false
        } else {
          that.btnTop = true
          that.btnBottom = true
        }
      },
      // 高度增加
      topAdd() {
        let num = this.topNum
        let result = num + 420
        this.topNum = result

        this.scrollTop.top = result + 'px'
        this.btnHiden()
      },
      // 高度减少
      topRmove() {
        let num = this.topNum
        let result = num - 420
        this.topNum = result
        this.scrollTop.top = result + 'px'
        this.btnHiden()
      },
      // 获取轮播图
      getBroPic() {
        let that = this
        let url = "api/Sys/GetSysTurns?Divice=1"
        postAjax(url, 1)
          .then(function (data) {
            that.ary = data.Data
          })
          .catch(() => {
            // that.$message.error("网络异常，请刷新后在试");
          })

      },
      //获取活动配置
      getActive() {
        let that = this
        let url = "api/Activity/GetActList"
        postAjax(url, 1)
          .then(function (data) {
            if (data.IsSucess == true) {
              data.Data.forEach((item, index) => {
                if (that.acObj.length < 5 && item.Enabled) {
                  item.ImgUrl = that.url + item.ImgUrl
                  that.acObj.push(item)
                  // if (item.AcType < 4) {
                  //   that.acObj.push(item)
                  // }
                }
              })
            }
          })
          .catch(() => {
            // that.$message.error("网络异常，请刷新后在试");
          })
      },
      // 前往优惠活动页面
      toActive(e) {
        let index = e.target.dataset.index
        if (!localStorage.getItem('Authorization')) {
          index = ''
        }
        let name = "preMain"
        this.$router.push({
          name: name,
          query: {
            ids: index,

          }
        })
      },
      // 三方页面
      getGame(time, id) {
        if (!time.Action) {
          return;
        }
        let that = this;
        let name = '';
        // let compalte=false;
        let obj = '';
        let url = "/api/ThirdGame/GetGameList?g=" + id + "&d=1";
        if (id == 2) {
          name = "AG真人"
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
        postAjax(url, data).then(function (data) {
          if (data.IsSucess) {
            that.startGame(data.Data.rows[0]);
          }
        })
          .catch(() => {
            // that.$message.error("网络异常，请刷新后在试");
          })
      },
      startGame(arr) {

        let that = this;
        let url = "/api/ThirdGame/StartGame";
        let data = {
          GameCode: arr.GameCode,
          game: arr.GameId,
          plat: 1001
        };
        postAjax(url, data, 1).then(function (data) {
          if (data.IsSucess) {
            window.open(data.Data);
          } else {
            that.$message.error(data.Message);
          }
        })
          .catch(() => {
            // that.$message.error("网络异常，请刷新后在试");
          })
      },
      // 关闭开奖弹框
      hideOpenRe() {
        this.openFrame = false
        this.timeNum = 0
      },
      handleWinFocus() {
        this.timeAjax();
      },
    },
    components: {openResult},
    created() {
      this.timeAjax()
      // 按钮隐藏与现实
      this.btnHiden()
      // 获取轮播图
      this.getBroPic()
      // 获取活动配置
      this.getActive();
      localStorage.setItem('alertState', true);
    }
    ,
    mounted() {
      this.$store.commit('setHead', true);
      window.addEventListener('focus', this.handleWinFocus);
    },
    destroyed() {
      // 每次离开当前界面时，清除定时器
      clearInterval(this.timer)
      // this.timer = null;
    },
    beforeDestroy() {
      // 每次离开当前界面时，清除定时器
      clearInterval(this.timer)
      // this.timer = null;
      window.removeEventListener('focus', this.handleWinFocus);
    },
  }
</script>
<style>
    /*轮播样式  */
    .brodact_box {
        width: 100%;
        height: auto;
        max-height: 560px;
    }

    .brodact_box img {
        width: 100%;
        display: block;
        height: 100%;
        max-height: 560px;
    }

    .el-carousel__indicator {
        padding-bottom: 30px !important;
    }

    .el-carousel__button {
        width: 55px !important;
        height: 6px !important;
        background-color: #5fbbb2 !important;
        border-radius: 3px;
    }

    .el-carousel__arrow--left {
        left: calc((100% - 1080px) / 2);
    }

    .el-carousel__arrow--right {
        right: calc((100% - 1080px) / 2);
    }

    .el-carousel__arrow i {
        font-size: 42px;
    }

    /* 游戏种类 */
    .type_boxs {
        width: 1200px;
        height: 348px;
        background-color: #ffffff;
    }

    .type_boxs_title {
        width: 100%;
        height: 51px;
        padding-left: 31px;
        border-bottom: solid 1px #d8d8d8;
    }

    .type_boxs_title > img {
        width: 36px;
        height: 36px;
        margin-top: 7px;
    }

    .type_boxs_title > span {
        margin-left: 12px;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #171717;
        vertical-align: text-bottom;
    }

    .type_boxs_div {
        display: flex;
        justify-content: center;
        padding-top: 35px;
    }

    .type-border {
        display: block;
        width: 154px;
        text-align: center;
        color: #5c6b8b;
        margin: 0 35px;
    }

    /* 分类图标 */
    .circle {
        width: 154px;
        height: 155px;
        border-radius: 100%;
        position: relative;
        z-index: 1;
        box-shadow: 0px 1px 10px 0px rgba(164, 164, 164, 0.75);
        transition: all .3s;
    }

    .circle img {
        width: 100%;
    }

    .circle:hover {
        transform: scale(1.2, 1.2);
    }

    .type-border p {
        margin-top: 24px;
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        line-height: 16px;
        letter-spacing: 0px;
        color: #171717;
    }

    .intro {
        /*color: #dae1f6;*/
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 16px;
        letter-spacing: 0px;
        color: #707070;
    }

    /* 游戏盒子 */
    .Home_allgame_box {
        width: 100%;
        padding: 27px 0;
        margin-bottom: 27px;
        overflow: hidden;
    }

    .home_allgame_main {
        height: 577px;
        justify-content: space-between;
    }

    .home_allgame_main .home_allgame_leftbox {
        width: 860px;
        height: 577px;
        overflow: hidden;
        padding: 20px;
        background-color: #fff;
    }

    /* 重庆时时彩 */
    .home_timeho_div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .home_Timeho_box {
        width: 553px;
        height: 154px;
        font-size: 0px;
        background-color: #eeeeee;
    }

    .home_timeho_div_right {
        width: 251px;
        height: 154px;
        background-color: #eeeeee;
        background-image: url(../../static/img/gametype/txffc_front.png);
        background-repeat: no-repeat;
        background-size: 195px 88px;
        background-position: 27px 22px;
        cursor: pointer;
    }

    .home_timeho_div_right:hover {
        background-color: #008573;
        background-image: url(../../static/img/gametype/txffc_reverse.png);
    }

    .home_Timeho_box > img {
        width: 137px;
        height: 154px;
    }

    .home_info_box {
        padding-left: 11px;
        overflow: hidden;

    }

    .home_info_topbox {
        border-bottom: 2px dashed #d8d8d8;
        width: 100%;
        height: 63px;
        overflow: hidden;
    }

    .home_info_topbox > p {
        font-size: 14px;
        float: left;
        line-height: 63px;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #171717;
        text-indent: 10px;
    }

    /* 开奖号码 */
    .home_info_topbox > div {
        float: right;
        margin-top: 17px;
        margin-right: 18px;
    }

    .home_info_topbox > div > span {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: #30a699;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        margin-left: 5px;
        color: #ffffff;
    }

    .home_info_topbox > p > span {
        color: #299d9d;
    }

    /* 倒计时 */
    .home_info_timeup {
        margin-top: 12px;
        padding-left: 10px;
        overflow: hidden;
        align-items: center;
        /*text-align: center;*/
        /*height: 90px;*/
    }

    .home_countdown {
        display: inline-block;
        font-size: 0;
    }

    .home_countdown > span {
        display: inline-block;
        width: 24px;
        height: 33px;
        margin-left: 3px;
        background-color: #237b74;
        border-radius: 4px;
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 33px;
        text-align: center;
        color: #ffffff;
    }

    .home_countdown > span:first-child {
        margin-left: 0;
    }

    .home_countdown > b {
        margin-left: 3px;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        color: #4e4e4e;
        line-height: 33px;
        font-weight: bold;
        text-align: center;
    }

    .home_info_timeup > div {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        font-size: 14px;
        margin-bottom: 6px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #171717;
    }

    .home_info_timeup > div > span {
        line-height: 33px;
        vertical-align: top;
    }

    .home_info_timeup > a {
        display: block;
        width: 91px;
        height: 28px;
        margin-left: 47px;
        background-color: #008573;
        text-align: center;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 1px;
        color: #ffffff;
        border-radius: 14px;
    }

    /* 所有游戏的种类 */
    .home_allgame_typebox {
        width: 819px;
        height: 362px;
        margin-top: 21px;
        padding: 15px 18px;
        background-color: #eeeeee;
    }

    .home_allgame_typebox .type1 {
        margin-bottom: 10px;
        justify-content: space-between;
    }

    .home_gametype_item {
        display: block;
        width: 186px;
        height: 159px;
        padding-top: 18px;
        background-color: #ffffff;
        border: solid 1px #d8d8d8;
        background-repeat: no-repeat;
        background-size: 140px 140px;
        transition: all .3s;
    }

    .home_gametype_item > div {
        width: 91px;
        height: 91px;
        margin: 0 auto;
        border-radius: 100%;
        overflow: hidden;
        border-width: 3px;
        transition: all .3s;
    }

    .home_gametype_item > div > img {
        width: 100%;
    }

    .home_gametype_item > p {
        margin-top: 14px;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 14px;
        letter-spacing: 1px;
        color: #707070;
        text-align: center;
    }

    .home_gametype_item > span {
        display: none;
        width: 91px;
        height: 28px;
        margin: 5px auto 0;
        background-color: #008573;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 16px;
        letter-spacing: 1px;
        color: #ffffff;
        border-radius: 14px;
        line-height: 28px;
        text-align: center;
    }

    .home_gametype_item:hover {
        padding-top: 15px;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
    }

    .home_gametype_item:hover div {
        width: 97px;
        height: 97px;
    }

    .type1 .home_gametype_item:nth-child(2):hover div {
        border: solid 3px rgba(38, 180, 126, .2);
    }

    .type1 .home_gametype_item:first-child:hover div {
        border: solid 3px rgba(238, 19, 19, .2);
    }

    .type1 .home_gametype_item:nth-child(3):hover div {
        border: solid 3px rgba(255, 91, 11, .2);
    }

    .type1 .home_gametype_item:nth-child(4):hover div {
        border: solid 3px rgba(66, 204, 24, .2);
    }

    .type2 .home_gametype_item:first-child:hover div {
        border: solid 3px rgba(52, 143, 255, .2);
    }

    .type2 .home_gametype_item:nth-child(2):hover div {
        border: solid 3px rgba(235, 20, 20, .2);
    }

    .type2 .home_gametype_item:nth-child(3):hover div {
        border: solid 3px rgba(247, 7, 69, .2);
    }

    .type2 .home_gametype_item:nth-child(4):hover div {
        border: solid 3px rgba(245, 180, 21, .2);
    }

    .home_gametype_item:hover p {
        display: none;
    }

    .home_gametype_item:hover span {
        display: block;
    }

    .home_allgame_typebox > .type2 {
        display: flex;
        justify-content: space-between;
    }

    .home_allgame_typebox > .type1 > .home_gametype_item:last-child, .home_allgame_typebox > .type2 > .home_gametype_item:last-child {
        margin-right: 0px;
    }

    /* 右边选项盒子 */
    .home_allgame_rightbox {
        width: 320px;
    }

    .home_winners {
        width: 100%;
        /*height: 312px;*/
        padding-bottom: 19px;
        background-color: #ffffff;
        box-sizing: border-box;
    }

    .home_float {
        height: 247px;
        margin-top: 20px;
        overflow: hidden;
    }

    .home_winners_title {
        width: 100%;
        height: 51px;
        text-align: center;
        border-top: solid 2px #008573;
        border-bottom: solid 1px #d8d8d8;
    }

    .home_winners_title > img {
        display: inline-block;
        width: 34px;
        height: 34px;
        margin-top: 8px;
    }

    .home_winners_title > span {
        margin-left: 11px;
        vertical-align: top;
        line-height: 51px;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #171717;
    }

    .home_red_packet {
        width: 100%;
        padding: 0 27px;
    }

    .home_red_packet > a {
        display: block;
        width: 100%;
        height: 40px;
        padding: 0 15px 0 7px;
        line-height: 40px;
        cursor: pointer;
        border-bottom: solid 1px #eeeeee;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #707070;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .home_red_packet > a > span {
        color: #30a699;
    }

    .home_allgame_rightbox > i {
        display: block;
        width: 100%;
        height: 24px;
        position: absolute;
        width: 100%;
        cursor: pointer;
    }

    .home_allgame_rightbox > i:hover {
        background: rgba(0, 0, 0, 0.4)
    }

    /* 足球游戏 */
    .Home_football_box {
        width: 100%;
        height: 384px;
        background-image: url(../../static/img/football_gamebg.png);
        background-size: cover;
        padding-bottom: 27px;
        display: none;
    }

    .Home_football_main {
        overflow: hidden;
        width: 100%;
    }

    .football_navbox {
        font-size: 0px;
        padding: 16px 0;
        position: relative;
    }

    .football_navbox > .foot_select {
        color: #e7c34e;
    }

    .football_navbox > a {
        color: #fff;
        font-size: 15px;
        vertical-align: middle;
        padding: 0 26px;
    }

    .football_navbox > a:hover {
        color: #e7c34e;
    }

    .football_navbox > span {
        font-size: 13px;
        color: #25413d;
        font-weight: bold;
        vertical-align: middle;
    }

    .foot_hall_box {
        position: absolute;
        right: 0;
        top: 11px;
        width: 80px;
        height: 26px;
        line-height: 25px;
        text-align: center;
        border: 1px solid #4e5461;
        color: #fff;
        font-size: 12px;
        background-size: 5px 7px;
        background-position: center right 8px;
        background-repeat: no-repeat;
        background-image: url(../../static/img/icon/arrow_icon.png);
        padding-right: 5px;
    }

    /* 倒计时块 */
    .home_Timeho_box #counter > div {
        margin-right: 0px !important;
    }

    .home_Timeho_box #counter .cntSeparator {
        margin: 0px 3px 10px;
    }

    .home_info_timeup .count_down_compon {
        justify-content: flex-end;
        align-items: center;
    }

    /* 精彩活动 */
    .Home_Wonderful_box {
        height: 318px;
        width: 100%;
        background: #fff;
        padding: 35px 0 83px;
    }

    .wonder_main {
        background: #dbdde5;
        height: 200px;
        padding: 7px 10px;
    }

    .wonder_main_leftbox {
        width: 636px;
        background: #f1f2f9;
        height: 100%;
        padding: 20px 27px 18px;

    }

    .wonder_main_rightbox {
        background: #f1f2f9;
        height: 100%;
        padding: 20px 27px 18px;
        width: 367px;
        margin-left: 4px;
        background-image: url(../../static/img/center/bg.png);
        background-repeat: no-repeat;
        background-size: 220px 220px;
        background-position: right -12px bottom -25px;
    }

    .wonder_main_box {
        width: 100%;
        height: 100%;
        border: 1px solid #dde4f3;
        position: relative;
    }

    .wonder_main_box > .wonder_title_icon {
        position: absolute;
        left: 0px;
        top: -11px;
        background: #f1f2f9;
    }

    .wonder_main_box > .wonder_title_icon > img {
        display: block;
        margin-left: 4px;
        margin-right: 10px;
    }

    .wonder_main_box > .wonder_to_more {
        width: 71px;
        height: 28px;
        position: absolute;
        right: -1px;
        top: -8px;
        background: #f1f2f9;
        overflow: hidden;
    }

    .wonder_main_box > .wonder_to_more > div {
        font-size: 13px;
        width: 65px;
        height: 23px;
        text-align: center;
        line-height: 22px;
        border: 1px solid #b1bbd1;
        color: #141f36;
        margin-left: 6px;
        background-image: url(../../static/img/center/more.png);
        background-repeat: no-repeat;
        background-position: center right 5px;
        padding-right: 3px;
        background-size: 5px 7px;
        cursor: pointer;
    }

    /* 滚动公告 */
    .wonder_getgift_ggbox {
        width: 100%;
        text-align: center;
        padding: 14px 27px 0px;
        overflow: hidden;
        height: 240px;
    }

    .wonder_getgift_ggbox .wonder_getgft {
        width: 100%;
        text-align: left;
    }

    .wonder_getgift_ggbox .wonder_getgft > li {
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border-bottom: solid 1px #eeeeee;
        color: #707070;
    }

    .wonder_getgift_ggbox .wonder_getgft > li > span:first-child {
        color: #008573;
        padding: 0 5px;
    }

    .wonder_getgift_ggbox .wonder_getgft > li > span:nth-child(2) {
        color: #171717;
        padding: 0 5px;
    }

    .wonder_getgift_ggbox .wonder_getgft > li > a {
        color: #008573;
        padding: 0 5px;
    }

    /* 导航盒子 */
    .home_center_navbox {
        width: 100%;
        height: 434px;
        position: relative;
        padding: 0 14px;
        overflow: hidden;
        color: #fff;
    }

    .home_center_navbox > ul {
        position: absolute;
        left: 14px;
        height: 434px;
        width: 100%;
    }

    .home_center_navcontitle {
        margin-bottom: 4px;
        font-size: 14px;
    }

    .home_center_navbox > ul > li {
        margin-bottom: 17px;
    }

    .home_center_navcontent > div {
        width: 118px;
        height: 24px;
        border: 1px solid #559798;
        text-align: center;
        display: block;
        color: #cfe3ff;
        cursor: pointer;
        font-size: 12px;
        line-height: 22px;
        margin: 0 1px;
        float: left;
        margin-bottom: 2px;
        background: #106261;

    }

    .home_center_navcontent > div:hover {
        background: #174a57;
    }

    /* 精彩活动图片 */
    .wonder_content_box {
        padding: 23px 25px 20px;
    }

    .wonder_content_box > a {
        cursor: pointer;
        width: 258px;
        height: 115px;
        display: inline-block;
    }

    .wonder_content_box > a:first-child {
        margin-right: 13px;
    }

    .wonder_content_box > a > img {
        width: 258px;
        height: 115px;
    }

    .set_style #counter {
        padding-left: 36px;
    }

    marquee {
        outline: none;
    }
</style>

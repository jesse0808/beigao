<template>
  <div class="prefe_sign_box preman" ref="minHeight">
    <div class="div_shadow"></div>
    <!-- 内容 -->
    <el-collapse class="box_center" v-model="activeName" change="collapseChange" accordion>
      <el-collapse-item class="activity_item" :disabled=!loginStatus v-for="(item,index) in actiAry" :name="item.AcType"
                        :key="index">
        <template slot="title">
          <div class="title">
            <img :src="item.url" alt="">
            <!-- <span>{{item.Name}}</span> -->
          </div>
        </template>
        <div class="content">
          <div class="every_day" v-if="item.AcType == 0">
            <div :class="[index<signDay?'checkedin':'']" v-for="(item,index) in signAry" :key="index">
              <p>{{item.data}}</p>
              <span>{{item.name}}</span>
            </div>
          </div>
          <div class="sign_in" v-if="item.AcType == 0">
            <p>您已经连续签到<strong>{{signInfo.SignCount}}</strong>天, 上次签到{{signLastTime}}, 当前消费金额<strong>{{signInfo.BetCount}}</strong>元
            </p>
            <template v-if="signcondition==1">
              <el-button size="medium" type="success" plain disabled @click="signBen">已签到</el-button>
            </template>
            <template v-else-if="signcondition==2">
              <el-button size="medium" type="success" @click="signBen">签到</el-button>
            </template>
            <template v-else-if="signcondition==3">
              <el-button size="medium" disabled>签到</el-button>
            </template>
          </div>
          <div class="sign_in" v-else-if="item.AcType == 1">
            <p>您当前消费<strong>{{betInfo.BetCount}}</strong>元, 可领取<strong>{{betInfo.CashGift}}</strong>元</p>
            <diV class="preM_content_btnbox box_h">
              <template v-if="betInfo.bl">
                <el-button size="medium" type="success" @click="getMoney">领取</el-button>
              </template>
              <template v-else>
                <el-button size="medium" type="success" plain disabled>已领取</el-button>
              </template>
            </diV>
          </div>
          <div class="sign_in" v-else-if="item.AcType == 2">
            <p>首充金额<strong>{{regInfo.FirstRechargeMoney}}</strong>元, 可领取<strong>{{regInfo.CashGift}}</strong>元</p>
            <diV class="preM_content_btnbox box_h">
              <!-- 未签到添加类名 has_not_sign -->
              <template v-if="regInfo.bl">
                <el-button size="medium" type="success" @click="getGift">领取</el-button>
              </template>
              <template v-else>
                <el-button size="medium" type="success" plain disabled>不可领取</el-button>
              </template>
            </diV>
          </div>
          <div class="sign_in" v-else-if="item.AcType == 7">
            <p>
              当前等级<strong>{{promotionAwardInfo.VipGrade}}</strong>&emsp;晋级奖励<strong>{{promotionAwardInfo.CashGift}}</strong>
            </p>
            <diV class="preM_content_btnbox box_h">
              <!-- 未签到添加类名 has_not_sign -->
              <template v-if="promotionAwardInfo.bl">
                <el-button size="medium" type="success" @click="getPromotionAward">领取</el-button>
              </template>
              <template v-else>
                <el-button size="medium" type="success" plain disabled>不可领取</el-button>
              </template>
            </diV>
          </div>
          <div class="sign_in" v-else-if="item.AcType == 8">
            <p>
              昨日投注：<strong>{{dailyBonusInfo.YDayBetMoney}}</strong>&emsp;当前等级：<strong>{{dailyBonusInfo.VipGrade}}</strong>&emsp;加奖比例：<strong>{{dailyBonusInfo.DbRatio}}</strong>&emsp;可得加奖：<strong>{{dailyBonusInfo.CashGift}}</strong>
            </p>
            <diV class="preM_content_btnbox box_h">
              <!-- 未签到添加类名 has_not_sign -->
              <template v-if="dailyBonusInfo.bl">
                <el-button size="medium" type="success" @click="getDailyBonus">领取</el-button>
              </template>
              <template v-else>
                <el-button size="medium" type="success" plain disabled>不可领取</el-button>
              </template>
            </diV>
          </div>
          <div class="sign_in" v-else-if="item.AcType == 5">
            <p>您今日首充金额<strong>{{topUpInfo.FirstRechargeMoney}}</strong>元, 可领取<strong>{{topUpInfo.CashGift}}</strong>元
            </p>
            <template v-if="topUpInfo.bl">
              <el-button size="medium" type="success" @click="getMoney">领取</el-button>
            </template>
            <template v-else>
              <el-button size="medium" type="success" plain disabled>已领取</el-button>
            </template>
          </div>
          <!--          <img src="../../static/img/activity__hr.png" width="1200" height="50" alt="">-->
          <!-- 通用规则模块  -->
          <div class="item_text" v-html="item.Description"></div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
    // 引用axios封装文件
    import {postAjax, getAjax} from "../../util/ajax.js"
    // collapse 展开折叠
    import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
    import {SysKey} from "../../util/sysconfig";

    export default {
        computed: {
            loginStatus() {
                return this.$store.state.loginStatus
            }
        },
        components: {
            CollapseTransition
        },
        data() {
            return {
                url: SysKey("ImgServerUrl").SysValue, //图片地址
                activeName: '100',
                actiAry: [],//活动数据
                signAry: [
                    {data: "第一天", name: "未签到"},
                    {data: "第二天", name: "未签到"},
                    {data: "第三天", name: "未签到"},
                    {data: "第四天", name: "未签到"},
                    {data: "第五天", name: "未签到"},
                    {data: "第六天", name: "未签到"},
                    {data: "第七天", name: "未签到"},
                ], //签到数组
                signInfo: {},//签到信息
                signDay: 0,//每日签到天数
                signLastTime: "无",
                signcondition: 1, //是否满足签到条件
                betInfo: {}, //投注信息
                regInfo: {},//首充信息
                topUpInfo: {},//充值大放送信息
                promotionAwardInfo: {},//晋级奖励信息
                dailyBonusInfo: {},//每日加奖信息
            }
        },
        methods: {
            collapseChange(name) {
                console.log(name)
            },
            // 获取活动信息
            getActive() {
                let that = this
                let url = "api/Activity/GetActList"
                postAjax(url).then((data) => {
                    if (data.IsSucess == true) {
                        that.actiAry = data.Data.map((item, index) => {
                            let newitem = item;
                            newitem.url = that.url + item.ImgUrl;
                            if (item.AcType == 0) {
                                that.getEveryDayInfo();
                            } else if (item.AcType == 1) {
                                that.getBetInfo();
                            } else if (item.AcType == 2) {
                                that.getRegInfo();
                            } else if (item.AcType == 3) {

                            } else if (item.AcType == 5) {
                                that.gettopUpInfo();
                            } else if (item.AcType == 7) {
                                that.getPromotionAwardInfo();
                            } else if (item.AcType == 8) {
                                that.getDailyBonusInfo();
                            }
                            return newitem
                        });
                    }
                })
            },
            // 跳转
            selecItem(e) {
                // this.activeName = e.target.dataset.id
            },
            //获取每日签到信息
            getEveryDayInfo() {
                if (!localStorage.getItem('Authorization')) {
                    return false;
                }
                let that = this
                let url = "api/Activity/GetSignInfo"
                postAjax(url)
                    .then(function (data) {
                        if (data.IsSucess == true) {
                            that.signInfo = data.Data
                            that.signDay = data.Data.SignCount
                            // 判断是否有签到时间
                            if (data.Data.LastSignTime == null) {
                                that.signLastTime = "无"
                            } else {
                                that.signLastTime = data.Data.LastSignTime
                            }
                            // 判断是今天是否可以签到签到条件
                            if (data.Data.bl == false) {
                                if (data.Data.BetCount >= data.Data.Amount) {
                                    that.signcondition = 2

                                } else {
                                    that.signcondition = 3

                                }

                            } else if (data.Data.bl == true) {
                                that.signcondition = 1

                            }

                        }
                    })
                    .then(function () {
                        let index = 0
                        that.signAry.forEach(item => {
                            index++
                            if (index <= that.signInfo.SignCount) {
                                item.name = "已签到"
                            }
                        })
                    })
            },
            // 获取礼金信息
            getBetInfo() {
                if (!localStorage.getItem('Authorization')) {
                    return false;
                }
                let that = this
                let url = "api/Activity/GetBetInfo"
                postAjax(url)
                    .then(function (data) {
                        if (data.IsSucess == true) {
                            that.betInfo = data.Data

                        }
                    })
            },
            // 获取首充信息
            getRegInfo() {
                if (!localStorage.getItem('Authorization')) {
                    return false;
                }
                let that = this
                let url = "api/Activity/GetFirstRechargeInfo"
                postAjax(url)
                    .then(function (data) {
                        that.regInfo = data.Data
                    })

            },
            //获取充值大放送信息
            gettopUpInfo() {
                let that = this
                let url = "api/Activity/GetRechargeInfo"
                postAjax(url)
                    .then(function (data) {
                        if (data.IsSucess == true) {
                            that.topUpInfo = data.Data

                        }
                    })
            },
            // 签到
            signBen() {
                let that = this
                let url = "api/Activity/Sign"
                postAjax(url)
                    .then(function (data) {
                        if (data.IsSucess == true) {
                            that.openSuccess("签到成功")
                        } else {
                            that.openMessAge(data.Message)
                        }
                    })
            },
            //成功提示
            openSuccess(data) {
                let that = this
                this.$message({
                    message: data,
                    type: 'success',
                    duration: 2000,
                    onClose: function () {
                        that.getSignbtn()
                    }
                });
            },
            // 失败提示
            openMessAge(data) {
                this.$message.error(data);
            },
            // 领取
            getMoney() {
                let that = this
                let url = "api/Activity/GetGift"
                postAjax(url)
                    .then(function (data) {
                        if (data.IsSucess == true) {
                            that.openSuccess(data.Message)
                        } else {
                            that.openMessAge(data.Message)
                        }
                    })
            },
            judRouter() {
                let id = this.$route.query.ids ? this.$route.query.ids : 100;
                this.activeName = Number(id);
            },
            // 领取
            getGift() {
                let that = this
                let url = "api/Activity/GetFirstRechargeGift"
                postAjax(url)
                    .then(function (data) {
                        if (data.IsSucess == true) {
                            that.openSuccess(data.Message)
                        } else {
                            that.openMessAge(data.Message)
                        }
                    })
            },
            //晋级奖励信息获取
            getPromotionAwardInfo(){
                if (!localStorage.getItem('Authorization')) {
                    return false;
                }
                let that = this;
                let url = '/api/Activity/GetPromotionAwardInfo';
                postAjax(url).then(data=>{
                    if (data.IsSucess == true) {
                        that.promotionAwardInfo = data.Data
                    }
                })
            },
            //晋级奖励领取
            getPromotionAward(){
                let that = this;
                let url = '/api/Activity/GetPromotionAwardGift';
                postAjax(url).then(data=>{
                    if (data.IsSucess == true) {
                        that.$message.success(data.Message)
                        that.getPromotionAwardInfo();
                    } else {
                        that.openMessAge(data.Message)
                    }
                })
            },
            //没日加奖信息获取
            getDailyBonusInfo(){
                if (!localStorage.getItem('Authorization')) {
                    return false;
                }
                let that = this;
                let url = '/api/Activity/GetDailyBonusInfo';
                postAjax(url).then(data=>{
                    if (data.IsSucess == true) {
                        that.dailyBonusInfo = data.Data
                    }
                })
            },
            //加奖领取
            getDailyBonus(){
                let that = this;
                let url = '/api/Activity/GetDailyBonusInfoGift';
                postAjax(url).then(data=>{
                    if (data.IsSucess == true) {
                        that.$message.success(data.Message)
                        that.getDailyBonusInfo();
                    } else {
                        that.openMessAge(data.Message)
                    }
                })
            }
        },
        created() {
            // 判断路由
            this.judRouter()
            this.getActive()
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
  .preman .prefe_sign_box .el-collapse-item__header {
    height: 236px !important;
  }

  .preman .el-collapse-item__header i {
    display: none;
  }

  .preman .el-collapse-item__header {
    height: auto;
  }

  .preman .el-collapse-item__header {
    border: 0;
  }

  .preman .el-collapse-item__wrap {
    border: none;
    background-color: #17726b;
  }
</style>
<style lang="scss" scoped>
  .prefe_sign_box {
    width: 100%;
    padding-bottom: 11px;

    .el-collapse{
      border-top: 0;
      border-bottom: 0; 
    }
    .div_shadow {
      height: 1px;
      box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);
    }

    .box_center {
      margin-top: 33px;

      .activity_item {
        width: 1200px;
        height: auto;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.41);
        background-color: #ffffff;
        margin-bottom: 22px;

        .title {
          position: relative;
          width: 100%;
          height: 236px;
          overflow: hidden;
          font-size: 0;

          img {
            width: 100%;
          }

          span {
            position: absolute;
            top: 24px;
            left: 895px;
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 16px;
            letter-spacing: 0;
            color: #008573;

            &:after {
              content: '';
              position: absolute;
              top: -16px;
              right: -40px;
              width: 36px;
              height: 24px;
              background: url(../../static/img/icon/hot.png) no-repeat 0 0/ 36px 24px;
              animation: preHot .3s infinite;
              animation-direction: alternate;
            }
          }

          i {
            display: none;
          }
        }

        .content {
          .every_day {
            display: flex;
            justify-content: space-around;
            padding: 15px 0 0;

            div {
              width: 148px;
              height: 50px;
              padding-top: 4px;
              background: url(../../static/img/bottom/evday.png) no-repeat 0 0/cover;
              border-radius: 5px;
              cursor: pointer;

              p {
                font-size: 16px;
                /*font-weight: bold;*/
                font-stretch: normal;
                line-height: 20px;
                letter-spacing: 2px;
                color: #171717;
                text-align: center;
              }

              span {
                display: inline-block;
                width: 100%;
                margin-top: 8px;
                font-size: 14px;
                /*font-weight: bold;*/
                font-stretch: normal;
                line-height: 14px;
                letter-spacing: 1px;
                color: #171717;
                text-align: center;
              }
            }

            .checkedin {
              background-color: #fffedc !important;
              background-image: none !important;
            }
          }

          .sign_in {
            width: 1160px;
            height: 144px;
            margin: 15px auto;
            padding-top: 25px;
            background-color: #17726b;
            border-radius: 5px;
            text-align: center;

            p {
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 16px;
              letter-spacing: 2px;
              color: #ffffff;

              strong {
                color: #fffb8a;
              }
            }

            button {
              display: block;
              width: 160px;
              height: 40px;
              margin: 22px auto 0;
              background: url(../../static/img/bottom/button_bg.png) no-repeat 0 0/cover;
              font-size: 16px;
              letter-spacing: 2px;
              color: #171717;
              border: none;

              &:hover {
                opacity: .95;
              }
            }
          }

          .item_text {
            width: 1160px;
            margin: 0 auto;
            padding-bottom: 40px;

            p, span {
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 24px;
              letter-spacing: 2px;
              color: #707070;
            }

            table {
              td {
                height: 40px;
              }
            }
          }
        }
      }

    }
  }

  .item_text /deep/ p, span {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 2px;
    color: #707070;
  }

  .item_text /deep/ span {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 2px;
    color: #707070;
  }

  .item_text /deep/ table td {
    height: 40px;
  }

  @-webkit-keyframes preHot {
    from {
      top: -16px;
    }
    to {
      top: -18px;
    }
  }

  @keyframes preHot {
    from {
      top: -16px;
    }
    to {
      top: -18px;
    }
  }

  .sign_top_banner {
    padding-top: 10px
  }

  .sign_top_banner {
    margin-bottom: 10px;
  }

  .sign_top_banner > .sign_banner_pic {
    width: 100%;
    height: 120px;
    display: block;
  }
</style>



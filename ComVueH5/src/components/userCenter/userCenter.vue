<template>
    <div class="form_content_view userCenter">
        <div class="scroll">
            <div class="head_div">
                <div class="user_title">
                    <div class="div" style="display: flex;justify-content: flex-start;">
                        <div class="u_logo"></div>
                        <div class="div">
                            <p>账号：{{userInfo.LoginName||'--'}}</p>
                            <p>余额：{{resetStatus?'加载中':(userInfo.Balance || '0')}} 元&emsp;<i
                                    :class="['reset_icon',resetStatus?'rotate':'']"
                                    @click="resetUser"></i></p>
                            <p>
                                等级：
                                <img src="../../assets/img/vip/icon_vip1.png" v-if="userInfo.VipLevel==1" alt="vip1"
                                     style="width: 1.70666rem; height: 0.50666rem;">
                                <img src="../../assets/img/vip/icon_vip2.png" v-if="userInfo.VipLevel==2" alt="vip2"
                                     style="width: 1.70666rem; height: 0.50666rem;">
                                <img src="../../assets/img/vip/icon_vip3.png" v-if="userInfo.VipLevel==3" alt="vip3"
                                     style="width: 1.70666rem; height: 0.50666rem;">
                                <img src="../../assets/img/vip/icon_vip4.png" v-if="userInfo.VipLevel==4" alt="vip4"
                                     style="width: 1.70666rem; height: 0.50666rem;">
                                <img src="../../assets/img/vip/icon_vip5.png" v-if="userInfo.VipLevel==5" alt="vip5"
                                     style="width: 1.70666rem; height: 0.50666rem;">
                                <img src="../../assets/img/vip/icon_vip6.png" v-if="userInfo.VipLevel==6" alt="vip6"
                                     style="width: 1.70666rem; height: 0.50666rem;">
                                <img src="../../assets/img/vip/icon_vip7.png" v-if="userInfo.VipLevel==7" alt="vip7"
                                     style="width: 1.70666rem; height: 0.50666rem;">
                                <img src="../../assets/img/vip/icon_vip8.png" v-if="userInfo.VipLevel==8" alt="vip8"
                                     style="width: 1.70666rem; height: 0.50666rem;">
                                <img src="../../assets/img/vip/icon_vip9.png" v-if="userInfo.VipLevel==9" alt="vip9"
                                     style="width: 1.70666rem; height: 0.50666rem;">
                                <img src="../../assets/img/vip/icon_vip10.png" v-if="userInfo.VipLevel==10" alt="vip10"
                                     style="width: 1.70666rem; height: 0.50666rem;">
                                <span style="margin-left: .25rem">({{userInfo.Score}}分)</span>
                            </p>
                        </div>
                    </div>
                    <div class="div" style="margin-top: .2rem;"><p style="font-size: .32rem;">距离下一等级还需要 {{nextNeedScore}} 分 每充值 1
                        元加 1 分</p></div>
                    <div class="progress" style="position: relative;">
                        <div style="position: absolute;left: 0;width: 10%;height: .5rem;line-height: .5rem;">
                            VIP{{userInfo.VipLevel}}
                        </div>
                        <div style="position: absolute;width:74%;left: 10%;">
                            <van-progress  :percentage="levelProgress"/>
                        </div>
                        <div style="position: absolute;right: 0;width: 10%;text-align: center;right: 5%;height: .5rem;line-height: .5rem;">
                            {{userInfo.NextVipLevel>=10?'满级':('VIP'+userInfo.NextVipLevel)}}
                        </div>
                    </div>
                </div>
                <div class="money_div">
                    <router-link to="/recharge" class="money_area">
                        <div class="topNavxxx">
                            <label class="topIcon iconfont icon-chongzhi2"
                                   style="font-size: 0.55rem; "/>
                        </div>
                        <p>充值</p>
                    </router-link>
                    <div style="width: 0.02666rem; height: 1.16rem; background-color: #daf1ee; align-self: center"></div>
                    <router-link to="/withdraw" class="money_area">
                        <div class="topNavxxx">
                            <label class="topIcon iconfont icon-tixian"/>
                        </div>
                        <p>提现</p>
                    </router-link>
                    <div style="width: 0.02666rem; height: 1.16rem; background-color: #daf1ee; align-self: center"></div>
                    <router-link to="/transfer" class="money_area">
                        <div class="topNavxxx">
                            <label class="topIcon iconfont icon-tixian1"
                                   style="font-size: 0.6rem;"/>
                        </div>
                        <p>转账</p>
                    </router-link>
                </div>
            </div>

            <div class="area_div" style="margin-top:5.75rem">
                <label class="area_title">个人管理</label>
                <div class="area_content">
                    <router-link to="/userInfo" class="area_item">
                        <label class="area_icon iconfont icon-gerenziliao" style="font-size: 0.6rem"/>
                        <label class="area_label">个人中心</label>
                    </router-link>
                    <router-link to="/moneyFrom" class="area_item">
                        <label class="area_icon iconfont icon-yingkuizichan" style="font-size: 0.65rem"/>
                        <label class="area_label">盈亏统计</label>
                    </router-link>
                    <router-link to="/bettingRecord" class="area_item">
                        <label class="area_icon iconfont icon-jilu3" style="font-size: 0.58rem"/>
                        <label class="area_label">投注记录</label>
                    </router-link>
                    <router-link to="/afterRecord" class="area_item">
                        <label class="area_icon iconfont icon-jilu1" style="font-size: 0.75rem"/>
                        <label class="area_label">追号记录</label>
                    </router-link>
                    <router-link to="/thrdRecard" class="area_item">
                        <label class="area_icon iconfont icon-recored"/>
                        <label class="area_label">三方记录</label>
                    </router-link>
                    <router-link to="/billRecard" class="area_item">
                        <label class="area_icon iconfont icon-zijinliushui" style="font-size: 0.62rem"/>
                        <label class="area_label">资金流水</label>
                    </router-link>
                    <router-link to="/rechargeRecord" class="area_item">
                        <label class="area_icon iconfont icon-zijin" style="font-size: 0.65rem"/>
                        <label class="area_label">充值记录</label>
                    </router-link>
                    <router-link to="/cashRecard" class="area_item">
                        <label class="area_icon iconfont icon-tixian1"/>
                        <label class="area_label">提现记录</label>
                    </router-link>
                    <router-link to="/zhuanzhangRecard" class="area_item">
                        <label class="area_icon iconfont icon-zhuanzhang" style="font-size: 0.65rem"/>
                        <label class="area_label">转账记录</label>
                    </router-link>
                </div>
            </div>

            <div class="area_div" v-if="!userInfo.IsTest && userInfo.UtId==1">
                <label class="area_title">代理中心</label>
                <div class="area_content">
                    <router-link to="/agencyPolicy" class="area_item">
                        <label class="area_icon iconfont icon-zhidu1"/>
                        <label class="area_label">代理制度</label>
                    </router-link>
                    <router-link to="/countReport" class="area_item">
                        <label class="area_icon iconfont icon-tongji"/>
                        <label class="area_label">统计报表</label>
                    </router-link>
                    <router-link to="/userList" class="area_item">
                        <label class="area_icon iconfont icon-yonghuzhongxin" style="font-size: 0.5867rem"/>
                        <label class="area_label">会员列表</label>
                    </router-link>
                    <router-link to="/openAccountCenter" class="area_item">
                        <label class="area_icon iconfont icon-kaihu" style="font-size: 0.5267rem"/>
                        <label class="area_label">开户中心</label>
                    </router-link>
                    <router-link to="/bettingRecord?isCameFromAgentCenter=true" class="area_item">
                        <label class="area_icon iconfont icon-zhidu"/>
                        <label class="area_label">投注记录</label>
                    </router-link>
                    <router-link to="/afterRecord?isCameFromAgentCenter=true" class="area_item">
                        <label class="area_icon iconfont icon-jilu3" style="font-size: 0.5667rem"/>
                        <label class="area_label">追号记录</label>
                    </router-link>
                    <router-link to="/thrdRecard?isCameFromAgentCenter=true" class="area_item">
                        <label class="area_icon iconfont icon-jilu" style="font-size: 0.5267rem"/>
                        <label class="area_label">三方记录</label>
                    </router-link>
                    <router-link to="/selfProfitAndLoss" class="area_item">
                        <label class="area_icon iconfont icon-gerenbaobiao"/>
                        <label class="area_label">个人亏盈</label>
                    </router-link>
                    <router-link to="/teamProfitAndLoss" class="area_item">
                        <label class="area_icon iconfont icon-tuanduibaobiao"/>
                        <label class="area_label">团队亏盈</label>
                    </router-link>
                </div>
            </div>

            <div class="area_div">
                <label class="area_title">系统管理</label>
                <div class="area_content">
                    <router-link to="/notices" class="area_item">
                        <label class="area_icon iconfont icon-gonggao" style="font-size: 0.65rem"/>
                        <label class="area_label">平台公告</label>
                    </router-link>
                    <router-link to="/email" class="area_item">
                        <!--<label class="area_icon iconfont icon-gonggao" style="font-size: 0.65rem"/>-->
                        <label class="area_icon">
                            <van-icon class-prefix="iconfont" name="zhanneixin" size=".65rem" style="position: relative"
                                      :badge="noReadMsgCount"/>
                        </label>
                        <label class="area_label">站内信</label>
                    </router-link>
                    <router-link to="#" class="area_item">
                        <label class="area_icon iconfont icon-kefu" @click="openKF()" style="font-size: 0.65rem"/>
                        <label class="area_label">在线客服</label>
                    </router-link>
                    <router-link to="#" class="area_item" v-if="inWebView">
                        <label class="area_icon iconfont icon-jilu" style="font-size: 0.5267rem"
                               @click="openVersion()"/>
                        <label class="area_label">版本信息</label>
                    </router-link>
                </div>
            </div>

            <div class="area_div" style="height: 1.2rem;line-height:  1.2rem;margin-bottom: 0.25rem " @click="logout">
                <span style="font-size:0.37333rem;color: #999999">退出登录</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {getUserInfo, getUserMsgCount} from "../../util/game";
    import {OpenCustomer, InWebView, OpenVersion} from '../../util/sysconfig'

    export default {
        name: "userCenter",
        data() {
            return {
                resetStatus: false,
                noReadMsgCount: 0,
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            },
            inWebView() {
                return InWebView();
            },
            //等级进度
            levelProgress() {
                //进度百分比
                let s = parseInt(this.userInfo.Score / this.userInfo.NextLevelScore * 100);
                if(s>100) s=100;
                if(s<0) s=0;
                return s;
            },
            //下一等级需要的积分
            nextNeedScore(){
                let s=this.userInfo.NextLevelScore-this.userInfo.Score;
                if(s<0) s=0;
                return s;
            },
        },
        created() {
            this.resetUser();
            this.getMsgCount();
        },
        methods: {
            getMsgCount() {
                getUserMsgCount().then(data => {
                    this.noReadMsgCount = data;
                });
            },
            logout() {
                let that = this;
                this.$dialog.confirm({
                    title: '',
                    message: '确认退出？'
                }).then(() => {
                    this.$store.dispatch('logout', this);
                    that.$router.replace('/login');
                }).catch(() => {
                    // on cancel
                });
            },
            openKF() {
                OpenCustomer();
            },
            openVersion() {
                OpenVersion();
            },
            resetUser() {
                let that = this;
                that.resetStatus = true;
                getUserInfo().then(data => {
                    that.resetStatus = false;
                });
                //  that.getVipImg();
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped>


    .userCenter {

        .head_div {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;

            .service_div {
                width: 100%;
                height: 1.2rem;
                text-align: right;

                .service_icon {
                    display: inline-block;
                    width: 1.2rem;
                    height: 1.2rem;
                    background: url(../../assets/img/user/service.png) no-repeat center center/.45333rem .45333rem;
                }
            }

            .user_title {
                padding-top: 0.55rem;
                /*display: flex;*/
                /*justify-content: start;*/
                width: 100%;
                /*flex-wrap: wrap;*/
                //   height: 3.64rem;
                height: 5rem;
                padding-left: .24rem;
                background-image: url("../../assets/img/user/userBG.png");
                background-repeat: no-repeat;
                background-color: #008573;
                background-size: 100% 100%;
                color: white;

                .u_logo{
                    width: 1.65333rem;
                    height: 1.65333rem;
                    border-radius: 100%;
                    overflow: hidden;
                    background-image: url("../../assets/img/user/user_phto1.png");
                    background-repeat: no-repeat;
                    background-color: #70cce3;
                    background-size: 100% 100%;
                }



                div.div {
                    margin-left: .5rem;
                    /*padding-top: .24rem;*/
                    text-align: left;

                    p {
                        font-size: 0.42666rem;
                        height: .7rem;
                        display: flex;
                        align-items: center;

                        color: #ffffff;

                        i {
                            display: inline-block;
                            width: .45rem;
                            height: .45rem;
                            background: url(../../assets/img/user/reset.png) no-repeat 0 0/cover;
                            margin-left: .2rem;
                            margin-right: .05rem;
                        }

                    }
                }

                .progress {
                    margin-left: .5rem;
                    text-align: left;
                    margin-top: .25rem;

                    .van-progress {
                        height: .5rem !important;
                        border-radius: .3rem !important;
                        overflow: hidden;
                        background-color: white !important;

                        /deep/ .van-progress__portion {
                            height: .5rem !important;
                            background-color: #14a892 !important;
                            border-radius:0  !important;
                            border-top-left-radius: .3rem !important;
                            border-bottom-left-radius: .3rem !important;
                            .van-progress__pivot {
                                height: .5rem !important;
                                line-height: .5rem !important;
                                background-color: #14a892 !important;
                                border-radius:0  !important;
                                border-top-right-radius: .3rem !important;
                                border-bottom-right-radius: .3rem !important;
                                font-size: .32rem !important;
                            }
                        }
                    }
                }
            }

            .money_div {
                display: flex;
                justify-content: space-around;
                width: 100%;
                height: 1.6667rem;
                background-color: #ffffff;
                box-shadow: 0px 0px 0.04rem rgba(0, 0, 0, 0.2);

                .money_area {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;

                    .topNavxxx {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #008573;
                        border-radius: 0.5rem;
                        text-align: center;
                        height: 0.75rem;
                        width: 0.75rem;
                        margin-top: 0.25rem;
                        margin-bottom: 0.1333rem;

                        .topIcon {
                            line-height: 0.8rem;
                            color: white;
                            font-size: 0.35rem;
                        }
                    }
                }

                p {
                    font-size: 0.32rem;
                    // font-weight: 600;
                    line-height: .4rem;
                    letter-spacing: 1px;
                    color: #333333;
                    margin-bottom: 0.2667rem;
                }

            }
        }

        .user_info_div {
            width: 100%;
            background-color: #ffffff;
            margin-bottom: .28rem;

            a {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 1.33333rem;
                padding-left: .26666rem;
                padding-right: .28rem;
                text-align: left;
                font-size: .37333rem;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 1px;
                color: #171717;
                border-bottom: solid 1px #ebebeb;

                div {
                    img {
                        width: .37333rem;
                        height: .37333rem;
                        margin-right: .21333rem;
                    }
                }
            }
        }

        .area_div {
            display: flex;
            flex: 1;
            flex-direction: column;
            background-color: white;
            margin: 0.2667rem 0px 0px 0px;
            border-width: 1px 0px 1px 0px;
            border-style: solid;
            border-color: #e0e0e0;
            box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);

            .area_title {
                margin: .4rem 0 .4rem 0.26666rem;
                font-size: 0.32rem;
                text-align: left;
            }

            .area_content {
                display: flex;
                flex-wrap: wrap;

                a {
                    color: #171717;
                    border-bottom: solid 1px #ebebeb;
                }

                .area_item {
                    display: flex;
                    flex-direction: column;
                    width: 25%;
                    margin-bottom: 0.3667rem;
                    border: 0;

                    .area_icon {
                        color: #008573;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 0.46666rem;
                        font-size: 0.7rem;
                        margin-bottom: 0.26666rem;
                    }

                    .area_label {
                        font-size: 0.32rem;
                    }
                }
            }
        }
    }


</style>

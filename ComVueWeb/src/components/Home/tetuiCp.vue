<template>
    <div class="tetui">
        <div class="tetui_img">
            <img :src="imgUrl+curCp.H5Ico" :alt="curCp.Name">
        </div>
        <div class="tetui_info">
            <div class="tetui_name">{{curCp.Name}}</div>
            <div class="tetui_qishu">{{LastLssue}}期截止</div>
            <div class="tetui_num">
                <ul>
                    <li v-for="(item,index) in LastNum" :key="index">{{item}}</li>
                </ul>
            </div>
            <div class="tetui_qishu">{{NowLssue}}期截止</div>
            <div class="tetui_timer">
                <span>{{timehleft}}</span>
                <span>{{timehright}}</span>
                <b>:</b>
                <span>{{timemleft}}</span>
                <span>{{timemright}}</span>
                <b>:</b>
                <span>{{timesleft}}</span>
                <span>{{timesright}}</span>
            </div>
            <div class="tetui_go">
                <router-link :to="{name:'Timehonor',query:{id:id,index:curCp.LsId}}">立即投注</router-link>
            </div>
        </div>
        <!-- 倒计时结束后显示 -->
        <openResult v-if="openFrame" :redata="openDataRe" @hidere="hideOpenRe"></openResult>
    </div>
</template>

<script>
import openResult from "../Elasticframe/Number_change";
import { SysKey } from "../../util/sysconfig";
import {getAjax} from "../../util/ajax.js";
import {SecondToHHSSMM} from "../../assets/js/changeTime.js";

export default {
    name: "tetuiCp",
    props: ["id"],
    components:{openResult},
    data() {
        return {
            imgUrl: SysKey("ImgServerUrl").SysValue, //图片地址
            NowLssue: "", //当前日期
            LastLssue: "", //上一期
            LastNum: [], //上一期开奖号码
            NowTime: 0, //倒计时
            openTime: "", //开奖期号
            timeNum: 0, //请求次数
            timehleft: 0,//开奖倒计时小时十位
            timehright: 0,//
            timemleft: 0,
            timemright: 0,
            timesleft: 0,
            timesright: 0,
            openDataRe: {}, //开奖弹框信息
            openFrame: false, //开奖弹框是否显示
        };
    },
    computed: {
        curCp() {
            let caipiao = new Object();
            if (this.$store.state.navAry.length!=0){
                this.$store.state.navAry.forEach((items) => {
                    items.LotteryList.forEach((item)=>{
                        if (item.LgId === this.id) {
                            return caipiao = item;
                        }
                    })
                });
            }
            return caipiao;
        },
    },
    created(){
        this.timeAjax();
    },
    mounted(){
        window.addEventListener('focus', this.handleWinFocus);
    },
    destroyed() {
      // 每次离开当前界面时，清除定时器
      clearInterval(this.timer)
    },
    beforeDestroy() {
        // 每次离开当前界面时，清除定时器
        clearInterval(this.timer)
        window.removeEventListener('focus', this.handleWinFocus);
    },
    methods: {
        // 请求当前投注期号
        timeAjax() {
            let that = this;
            let openState = true; //是否需要请求开奖
            let url = "Api/Lssue/GetBetLssueInfo?lgId="+that.id;
            getAjax(url)
            .then(function (data) {
                that.NowLssue = data.Data.NowLssueFormat;
                that.NowTime = data.Data.NowLssueRemainTime;
                that.LastLssue = data.Data.LastLssueFormat;
                that.openTime = data.Data.LastLssue; //开奖期号
                if (data.Data.LastOpenNumber == null) {
                that.LastNum = ["?", "?", "?", "?", "?"];
                openState = true; //无开奖号码
                } else {
                that.LastNum = data.Data.LastOpenNumber.split(",");
                openState = false; //有开奖号码
                }
                // 初始化时间组件
                clearTimeout(that.setTimeFun);
                that.openTimeDispose();
            })
            .then(function () {
                // 如果没有开奖号，开始执行倒计时请求开奖号码
                if (openState) {
                that.setTimer();
                }
            })
            .then(function () {})
            .catch(() => {
                // that.$message.error("网络异常，请刷新后在试");
            });
        },

        // 设置倒计时请求开奖号码
        setTimer() {
            let that = this;
            if (that.timer == null) {
            that.timer = setInterval(() => {
                that.getResultNum();
            }, 5000);
            }
        },

        // 获取开奖号码
        getResultNum() {
            let that = this;
            let url ="Api/Lssue/GetLssueOpenInfo?lgId="+that.id+ "&lssue=" + that.openTime;
            getAjax(url)
            .then(function (data) {
                window.lgText = data.Data.lgText;
                if (data.Data.OpenNumber == null || data.Data.OpenNumber == "") {
                return;
                } else {
                // 显示弹框
                that.openDataRe["LastOpenNumber"] = data.Data.OpenNumber.split(",");
                that.LastNum = data.Data.OpenNumber.split(",");
                that.openDataRe["Time"] = that.LastLssue;
                that.openDataRe["Name"] = data.Data.lgText;
                that.openFrame = true;
                // 清除倒计时
                clearInterval(that.timer);
                that.timer = null;
                }
            })
            .catch(() => {
                // that.$message.error("网络异常，请刷新后在试");
            });
        },

        //开奖倒计时时间处理
        openTimeDispose() {
            let that = this;
            if (that.NowTime < 2) {
                clearTimeout(that.setTimeFun);
                that.timeAjax(that.id);
            }
            let minute = Math.floor(Number(that.NowTime) / 60); //分钟
            let timem = Number(that.NowTime) % 60; //秒
            let timeh = Math.floor(Number(minute) / 60); //小时
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
            }, 1000);
        },

         // 关闭开奖弹框
        hideOpenRe() {
            this.openFrame = false;
            this.timeNum = 0;
        },

        handleWinFocus() {
            this.timeAjax();
        },
    },
   
};
</script>

<style lang="scss" scoped>
    .tetui {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 443px;
        height: 235px;
        border-right: 1px solid #e3e1e6;
        padding-right: 40px;

        .tetui_img {
            width: 145px;
            height: 145px;
            margin-top: -15px;
            border: 2px solid #C19F62;
            border-radius: 50%;

            img{
                width:100%;
                height: 100%;
            }
        }
        .tetui_info {
            width: 180px;
            height: 100%;
            

            .tetui_name {
                width: 100%;
                height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #000;
                margin-top: 10px;
            }

            .tetui_qishu {
                width: 100%;
                height: 20px;
                font-size: 14px;
                color: #7b7b7b;
                margin-top: 12px;
                letter-spacing: 1px;
            }

            .tetui_num {
                width: 100%;
                height: 30px;
                margin-top: 10px;
                
                ul{
                    display: flex;
                    justify-content: space-between;

                    li{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width:32px;
                        height: 32px;
                        border: 1px solid #CCB17F;
                        border-radius: 50%;
                        font-size: 24px;
                        color: #C19F62;
                        font-weight: 500;
                    }
                }
            
            }

            .tetui_timer {
                display: flex;
                justify-content: left;
                width: 100%;
                height: 35px;
                font-size: 32px;
                color: #008573;
                
                span{
                    font-weight: 500;
                    margin:0 2px;

                    &:first-child{
                        margin-left: 0;
                    }
                }
                b{
                    margin: 0 3px;
                    font-weight: 500;
                }
            }

            .tetui_go {
                display: flex;
                justify-content: center;
                width:100%;
                margin-top: 30px;

                a{
                    width: 110px;
                    height: 25px;
                    line-height: 25px;
                    text-align: center;
                    color: #fff;
                    border-radius: 10px;
                    background-color: #008573;
                    transition: all 0.3s;
                    margin-left: -20px;
                    font-size: 14px;

                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="count_down">
        <div class="count_div" v-if="$route.query.LsId == 7">
            <div class="present">
                <p class="time_type">{{lotteryName}} {{lastLssueFormat}}期</p>
                <div class="open_num_div" v-if="lastOpenNumber.length > 0">
                    <div class="lhc_open" v-for="(item,index) in lastOpenNumber.split(',')" :key="index">
                        <div class="lhc_open_num">
                            <span class="span_num" :class="[returnClass(item)]">{{item}}</span>
                            <span class="span_txt">{{lastExplain.split('')[index]}}</span>
                        </div>
                        <div class="fu_hao" v-if="index==lastOpenNumber.split(',').length-1">
                            <span>=</span>
                        </div>
                        <div class="fu_hao" v-else>
                            <span>+</span>
                        </div>
                        <div class="lhc_sum" v-if="index==lastOpenNumber.split(',').length-1">
                            {{returnSum(lastOpenNumber.split(','))}}
                        </div>
                    </div>
                </div>
                <div class="open_num_div" v-else-if="!lastOpenNumber.length">
                    <div class="lhc_open" v-for="index of 7" :key="index">
                        <div class="lhc_open_num">
                            <span class="span_num" :class="[returnClass('01')]">?</span>
                            <span class="span_txt">肖</span>
                        </div>
                        <div class="fu_hao" v-if="index==7">
                            <span>=</span>
                        </div>
                        <div class="fu_hao" v-else>
                            <span>+</span>
                        </div>
                        <div class="lhc_sum" v-if="index==7">?</div>
                    </div>
                </div>
            </div>
            <div class="count_down_box">
                <p class="time_type">{{nowLssueFormat}} 期</p>
                <van-count-down @finish="overTime" :auto-start="false" ref="countDownNum"
                                :time="nowLssueRemainTime * 1000">
                    <template v-slot="timeData">
                        <span class="time_item">{{ timeData.hours < 10 ? '0' + timeData.hours:timeData.hours }}</span>
                        <b>:</b>
                        <span class="time_item">{{ timeData.minutes < 10 ? '0' + timeData.minutes:timeData.minutes }}</span>
                        <b>:</b>
                        <span class="time_item">{{ timeData.seconds < 10 ? '0' + timeData.seconds:timeData.seconds }}</span>
                    </template>
                </van-count-down>
            </div>
        </div>
        <div class="count_div" v-else>
            <div class="present">
                <p class="time_type">{{lotteryName}} 第 {{lastLssueFormat}} 期</p>
                <div class="open_num_div" v-if="(pageId ==1 || pageId ==3) && lastOpenNumber.length > 0">
                    <div class="open_num_item" v-for="(item,index) in lastOpenNumber.split(',')" :key="index"><span>{{item}}</span>
                    </div>
                </div>
                <div class="open_num_div" v-else-if="(pageId ==1 || pageId ==3) && !lastOpenNumber.length">
                    <div class="open_num_item"><span>?</span></div>
                    <div class="open_num_item"><span>?</span></div>
                    <div class="open_num_item"><span>?</span></div>
                    <div class="open_num_item"><span>?</span></div>
                    <div class="open_num_item"><span>?</span></div>
                </div>
                <div class="pk10_div" v-else-if="pageId == 2 && lastOpenNumber.length > 0">
                    <div :class="`open_num_item ${filterColor(item)}`" v-for="(item,index) in lastOpenNumber.split(',')"
                         :key="index"><span>{{item}}</span></div>
                </div>
                <div class="pk10_div" v-else-if="pageId == 2 && !lastOpenNumber.length">
                    <div class="open_num_item span_7" v-for="(item,index) in 10" :key="index"><span>?</span></div>
                </div>
                <div class="fck_div" v-else-if="pageId == 4 && lastOpenNumber.length > 0">
                    <div v-for="(item,index) in lastOpenNumber.split(',')" :key="index">
                        <img v-if="item == 1" src="../../assets/img/icon/touzi_b1.png" alt="1">
                        <img v-if="item == 2" src="../../assets/img/icon/touzi_b2.png" alt="2">
                        <img v-if="item == 3" src="../../assets/img/icon/touzi_b3.png" alt="3">
                        <img v-if="item == 4" src="../../assets/img/icon/touzi_b4.png" alt="4">
                        <img v-if="item == 5" src="../../assets/img/icon/touzi_b5.png" alt="5">
                        <img v-if="item == 6" src="../../assets/img/icon/touzi_b6.png" alt="6">
                    </div>
                </div>
                <div class="fck_div" v-else-if="pageId == 4 && !lastOpenNumber.length">
                    <div v-for="index of 3" :key="index">
                        <img src="../../assets/img/icon/touzi_w.png" alt="?">
                    </div>
                </div>
                <div class="pcd_div" v-else-if="pageId == 5 && lastOpenNumber.length > 0">
                    <div class="pcd_open_num_item"><span>{{lastOpenNumber[0]}}</span></div>
                    <div class="pcd_fu">+</div>
                    <div class="pcd_open_num_item"><span>{{lastOpenNumber[2]}}</span></div>
                    <div class="pcd_fu">+</div>
                    <div class="pcd_open_num_item"><span>{{lastOpenNumber[4]}}</span></div>
                    <div class="pcd_fu">=</div>
                    <div class="pcd_open_num_item"><span>{{lastOpenNumber[6]}}</span></div>
                </div>
                <div class="pcd_div" v-else-if="pageId == 5 && !lastOpenNumber.length">
                    <div class="pcd_open_num_item"><span>?</span></div>
                    <div class="pcd_fu">+</div>
                    <div class="pcd_open_num_item"><span>?</span></div>
                    <div class="pcd_fu">+</div>
                    <div class="pcd_open_num_item"><span>?</span></div>
                    <div class="pcd_fu">=</div>
                    <div class="pcd_open_num_item"><span>?</span></div>
                </div>
                <div class="open_num_div" v-if="pageId ==6 && lastOpenNumber.length > 0">
                    <div class="open_num_item" v-for="(item,index) in lastOpenNumber.split(',')" :key="index"><span>{{item}}</span>
                    </div>
                </div>
                <div class="open_num_div" v-else-if="pageId ==6 && !lastOpenNumber.length">
                    <div class="open_num_item"><span>?</span></div>
                    <div class="open_num_item"><span>?</span></div>
                    <div class="open_num_item"><span>?</span></div>
                </div>
            </div>
            <div class="count_down_box">
                <p class="time_type">{{nowLssueFormat}} 期</p>
                <van-count-down @finish="overTime" :auto-start="false" ref="countDownNum"
                                :time="nowLssueRemainTime * 1000">
                    <template v-slot="timeData">
                        <span class="time_item">{{ timeData.hours < 10 ? '0' + timeData.hours:timeData.hours }}</span>
                        <b>:</b>
                        <span class="time_item">{{ timeData.minutes < 10 ? '0' + timeData.minutes:timeData.minutes }}</span>
                        <b>:</b>
                        <span class="time_item">{{ timeData.seconds < 10 ? '0' + timeData.seconds:timeData.seconds }}</span>
                    </template>
                </van-count-down>
            </div>
        </div>
    </div>
</template>

<script>
    import {arraySum} from "../../util/comon";
    import {GetBetIssueInfo, GetLssueOpenInfo} from "../../util/lottery";
    import {getUserInfo} from "../../util/game";
    // import $ from "jquery"

    export default {
        name: "countDown",
        props: {
            lotteryName: {//彩种名称
                type: String,
                required: true
            },
            nowLssue: {//当前期号 如果发生变化需要告诉父组件(父组件用这个期号来进行投注的)
                type: String,
                required: true
            }
        },
        data() {
            return {
                LgId: this.$route.query.LgId, //彩种id
                pageId: this.$route.query.LsId, //系列id
                lssue: "",//当前期号
                nowLssueFormat: '加载中',//当前期号(格式化) 用于展示
                nowLssueRemainTime: 0,//当前期号剩余投注时间 单位s
                lastLssue: '',//上一期期号
                lastLssueFormat: '加载中',//上一期期号(格式化) 用于展示
                lastOpenNumber: '',//上一期期号开奖号码 如果为空表示正在开奖需要开启定时器获取开奖号码
                lastExplain: '',//上一期开奖号码说明 比如六合彩会是号码对应的生肖
                isLoadingLssue: false,//当前是否正在加载期号中
                time: null,//当前定时器对象
            }
        },
        watch: {
            nowLssueRemainTime() {
                this.$refs.countDownNum.reset()
            }
        },
        created() {
            window.addEventListener("focus", this.windowFocus);
            this.getIssueInfo();
        },
        mounted() {
            let that = this;
        },
        methods: {
            //获取最新彩种期号信息
            getIssueInfo() {
                let that = this;
                //防止多次加载
                if (this.isLoadingLssue == true)
                    return;
                this.isLoadingLssue = true;


                that.nowLssueFormat = '加载中'
                that.lastLssueFormat = '加载中'

                //请求api
                GetBetIssueInfo(this.LgId).then(data => {
                    that.isLoadingLssue = false;//重置加载期号状态
                    if (data.IsSucess) {
                        //   console.log(data)
                        that.lssue = data.Data.NowLssue || '';
                        //修改父组件当前期号
                        that.$emit("setNowLssue", that.lssue);
                        that.nowLssueFormat = data.Data.NowLssueFormat || '加载中';
                        that.nowLssueRemainTime = data.Data.NowLssueRemainTime || 0;
                        if (that.nowLssueRemainTime > 0) {
                            that.$nextTick(() => { //必须要加这个才能成功 可能是在异步里面的原因
                                if (that.$refs.countDownNum)//不为空证明还在当前页面
                                    that.$refs.countDownNum.start();//开启定时器
                            })
                        }
                        that.lastLssue = data.Data.LastLssue || '';//上一期期号
                        that.lastLssueFormat = data.Data.LastLssueFormat || '加载中';
                        that.lastOpenNumber = data.Data.LastOpenNumber || '';
                        that.lastExplain = data.Data.LastExplain || '';
                        if (that.lastOpenNumber == '')//如果上一期开奖号码为空 则表示开奖中 开起定时器获取开奖号码
                            this.startInterval();

                    } else {
                        if (that.$refs.countDownNum)//不为空证明还在当前页面
                            setTimeout(that.getIssueInfo, 2000);//延迟重新获取
                    }

                })
            },
            overTime() {
                let lssue = this.nowLssueFormat;
                if (lssue != '加载中')
                    this.$toast({message: lssue + " 已停止销售\n请注意当前期号", duration: 1000 * 3});
                this.getIssueInfo();
            },
            //启用定时器获取开奖号码
            startInterval() {
                let that = this;
                if (!that.$refs.countDownNum)//为空证明不在当前页面
                    return
                clearInterval(this.time);
                this.time = setInterval(that.getLssueOpenNumber, 1000 * 5);
            },
            //访问api获取开奖号码
            getLssueOpenNumber() {
                let that = this;
                if (!that.lastLssue) return;//期号为空不获取
                GetLssueOpenInfo(that.LgId, that.lastLssue).then(data => {
                    console.log("获取开奖号码=>" + that.LgId + " " + that.lastLssue);
                    if (data.IsSucess) {
                        if (data.Data.Lssue == that.lastLssue && data.Data.OpenNumber) {
                            that.$emit("reloadRecord");//刷新走势
                            that.lastOpenNumber = data.Data.OpenNumber;
                            that.lastExplain = data.Data.Explain;
                            clearInterval(that.time);
                            console.log("结束定时器=>" + that.LgId + " " + that.lastLssue);
                            getUserInfo();//刷新用户余额

                        }
                    }
                });
            },
            //window 获得焦点事件
            windowFocus() {
                console.log("投注界面获得焦点事件");
                this.getIssueInfo();
            },
            filterColor(txt) {
                let num = Number(txt);
                if (num === 1) {
                    return 'span_1'
                } else if (num === 2) {
                    return 'span_2'
                } else if (num === 3) {
                    return 'span_3'
                } else if (num === 4) {
                    return 'span_4'
                } else if (num === 5) {
                    return 'span_5'
                } else if (num === 6) {
                    return 'span_6'
                } else if (num === 7) {
                    return 'span_7'
                } else if (num === 8) {
                    return 'span_8'
                } else if (num === 9) {
                    return 'span_9'
                } else if (num === 10) {
                    return 'span_10'
                }
            },
            //返回球的颜色
            returnClass(str) {
                let num = Number(str);
                if (num === 1 || num === 2 || num === 7 || num === 8 || num === 12 || num === 13 || num === 18 || num === 19 || num === 23 || num === 24 || num === 29 || num === 30 || num === 34 || num === 35 || num === 40 || num === 45 || num === 46) {
                    return 'red_qiu'
                }
                if (num === 3 || num === 4 || num === 9 || num === 10 || num === 14 || num === 15 || num === 20 || num === 25 || num === 26 || num === 31 || num === 36 || num === 37 || num === 41 || num === 42 || num === 47 || num === 48) {
                    return 'blue_qiu'
                }
                if (num === 5 || num === 6 || num === 11 || num === 16 || num === 17 || num === 21 || num === 22 || num === 27 || num === 28 || num === 32 || num === 33 || num === 38 || num === 39 || num === 43 || num === 44 || num === 49) {
                    return 'green_qiu'
                }
            },
            returnSum(arr) {
                return arraySum(arr)
            }
        },
        beforeDestroy() {
            window.removeEventListener("focus", this.windowFocus);
            clearInterval(this.time);//清空定时器
        }
    }
</script>

<style lang="less" scoped>
    .count_down {
        width: 100%;
        height: 2.13333rem;
        padding-top: .37333rem;
        background-color: #e6f7f5;

        .count_div {
            display: flex;
            justify-content: center;

            .present {
                width: 6.57rem;
                border-right: 0.02666rem solid #cae4e1;

                .time_type {
                    width: 100%;
                    margin-bottom: .26666rem;
                    font-size: .32rem;
                    line-height: .32rem;
                    text-align: center;
                }

                .open_num_div {
                    display: flex;
                    justify-content: center;

                    .lhc_open {
                        display: flex;
                        justify-content: center;
                    }

                    .lhc_open_num {
                        width: .5rem;
                        font-size: 0;

                        .span_num {
                            display: inline-block;
                            width: .5rem;
                            height: .5rem;
                            line-height: .5rem;
                            border-radius: 50%;
                            font-size: .25333rem;
                            color: #fff;
                        }

                        .span_txt {
                            font-size: .25333rem;
                            color: #666666;
                        }
                    }

                    .fu_hao {
                        width: .32rem;
                        padding-top: .05rem;
                        font-size: .25333rem;
                        color: #707070;
                    }

                    .lhc_sum {
                        padding-top: .05rem;
                        font-size: .25333rem;
                        color: #000000;
                    }

                    .open_num_item {
                        width: 0.77777rem;
                        height: 0.77777rem;
                        justify-content: center;
                        display: flex;
                        align-items: center;
                        background: url("../../assets/img/icon/kaijiangqiu.png") no-repeat;
                        background-size: 100% 100%;
                        border-radius: 100%;
                        overflow: hidden;
                        margin-right: 0.06666rem;

                        span {
                            display: block;
                            font-size: .38666rem;
                            color: #ffffff;
                            /*border-radius: 50%;*/
                        }
                    }
                }

                .pk10_div {
                    display: flex;
                    justify-content: center;
                    margin-top: .35rem;
                    padding-left: 0.06666rem;

                    .open_num_item {
                        display: inline-block;
                        width: .6rem;
                        height: .6rem;
                        overflow: hidden;
                        margin-right: 0.06666rem;
                        line-height: .6rem;
                        border-radius: 50%;
                        color: #ffffff;

                        span {
                            display: block;
                            width: 100%;
                            height: 100%;
                            font-size: .28666rem;
                            color: #ffffff;
                            /*border-radius: 50%;*/
                        }
                    }
                }

                .fck_div {
                    display: flex;
                    justify-content: center;

                    div {
                        width: 0.77777rem;
                        height: 0.77777rem;
                        margin: 0 .1rem;
                        font-size: 0;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                .pcd_div {
                    display: flex;
                    justify-content: center;

                    .pcd_fu {
                        width: .36rem;
                        height: 0.77777rem;
                        line-height: .77777rem;
                        font-size: .38666rem;
                        color: #333333;
                    }

                    .pcd_open_num_item {
                        width: 0.77777rem;
                        height: 0.77777rem;
                        line-height: .77777rem;
                        background: url("../../assets/img/icon/kaijiangqiu.png") no-repeat #008573;
                        background-size: 100% 100%;
                        border-radius: 100%;
                        overflow: hidden;
                        margin-right: 0.06666rem;

                        span {
                            display: block;
                            width: 100%;
                            height: 100%;
                            font-size: .38666rem;
                            color: #ffffff;
                            /*border-radius: 50%;*/
                        }
                    }
                }
            }

            .count_down_box {
                width: 3.43rem;
                margin: 0 auto;

                div {
                    display: flex;
                    justify-content: center;
                    font-size: .37333rem;
                }

                .time_type {
                    width: 100%;
                    margin-bottom: .26666rem;
                    font-size: .32rem;
                    line-height: .32rem;
                    text-align: center;
                }

                .time_item {
                    width: .64rem;
                    height: .77777rem;
                    background-image: linear-gradient(-90deg,
                    #000000 0%,
                    #494949 100%),
                    linear-gradient(#4d4d4d,
                            #4d4d4d);
                    background-blend-mode: normal,
                    normal;
                    border-radius: .04rem;
                    color: #fff;
                    font-size: .32rem;
                    line-height: .77777rem;
                    text-align: center;
                }

                b {
                    width: .29333rem;
                    line-height: .77777rem;
                }
            }
        }
    }
</style>

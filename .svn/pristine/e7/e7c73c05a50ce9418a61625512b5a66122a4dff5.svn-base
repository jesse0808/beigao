<template>
    <div class="form_content_view bet_info">
        <div class="scroll">
            <my-title title-val="订单详情" title-router="my" @clickLeftBack="clickLeftBack"></my-title>

            <!--中奖状态-->
            <div class="order_status">
                <!-- 未中奖-->
                <div class="panel" v-if="itemData.Status == 4">
                    <div class="left_icon"><span class="iconfont icon-gantanhao"></span></div>
                    <div class="left_text">很可惜,未中奖</div>
                </div>
                <!-- 已撤单-->
                <div class="panel" v-if="itemData.Status == 2">
                    <div class="left_icon"><span class="iconfont icon-gantanhao"></span></div>
                    <div class="left_text">已撤单</div>
                </div>
                <!-- 已中奖-->
                <div class="panel" v-if="itemData.Status ==3">
                    <div class="left_icon"><span class="iconfont icon-chenggong"></span></div>
                    <div class="left_text" style="color: #fffd30;">恭喜你,中奖 {{itemData.WinBonus}} 元</div>
                </div>
                <!-- 未开奖-->
                <div class="panel" v-if="itemData.Status == 1">
                    <div class="left_icon"><span class="iconfont icon-naozhong"></span></div>
                    <div class="left_text">未开奖</div>
                </div>
            </div>


            <!-- 彩种-->
            <div class="order_lottery">
                <div class="lottery">
                    <span style="font-size:0.42666rem;">{{itemData.LgName}}</span>
                    <span style="margin-left: .25rem;">第&nbsp;{{itemData.Lssue}}&nbsp;期</span>
                </div>
                <div class="open_number">
                    <span>开奖号码：</span>
                    <span>{{itemData.OpenNumber}}</span>
                </div>
            </div>

            <!-- 投注信息-->
            <div class="order_bet_info">
                <div style="color: #333333;">{{itemData.RxDsFormart?(itemData.LpName+'('+itemData.RxDsFormart+')'):itemData.LpName}}
                </div>
                <div class="info_1">
                    <span>奖金模式：{{itemData.AmName}}</span>
                    <span>投注倍数：{{itemData.BetMultiple}}倍</span>
                    <span>奖金返点：{{itemData.BetBonus}}&nbsp元&nbsp|&nbsp{{itemData.BetRebate}}%</span>
                    <span>投注内容：</span>
                </div>
                <div class="info_2">
                    <textarea readonly>{{itemData.BetContent}}</textarea>
                </div>
                <div class="info_3">
                    <div class="one_row">
                        <span>投注注数：</span>
                        <span class="max_font">{{itemData.BetCount}}&nbsp<span class="min_font">注</span></span>
                    </div>
                    <div class="one_row">
                        <span>投注金额：</span>
                        <span class="max_font">{{typeof(itemData.BetMoney) !='number' ? '0': itemData.BetMoney.toFixed(3)}}&nbsp<span
                                class="min_font">元</span></span>
                    </div>
                    <div class="one_row">
                        <span>中奖注数：</span>
                        <span class="max_font">{{itemData.WinCount}}&nbsp<span class="min_font">注</span></span>
                    </div>
                    <div class="one_row">
                        <span>中奖金额：</span>
                        <span class="max_font">{{typeof(itemData.WinBonus) != 'number' ? '0': itemData.WinBonus.toFixed(3)}}&nbsp<span
                                class="min_font">元</span></span>
                    </div>
                    <div class="line"></div>
                    <div class="one_row" style="font-size:0.373rem;line-height: 0.933rem;line-height: 0.933rem">
                        <span>盈亏金额：</span>
                        <span :class="getMoneyColorClass(itemData.KuiYing)">
                        <span style="font-size: 0.427rem">{{itemData.KuiYing}}</span>&nbsp<span
                                class="min_font">元</span>
                    </span>
                    </div>
                </div>
            </div>

            <!-- 订单信息-->
            <div class="other_info">
                <div class="info_1">订单信息</div>
                <div class="info_2">
                    <div>订单用户：{{itemData.UserName}}</div>
                    <div>
                        <span>订单编号：{{itemData.OrderNumber}}</span>
                        <span v-clipboard:copy="itemData.OrderNumber" v-clipboard:success="clipboardSuccessHandler"
                              style="color: #008573">复制</span>
                    </div>
                    <div>下注时间：{{itemData.BetTime}}</div>
                    <div>完成时间：{{itemData.CompleteTime}}</div>
                </div>
            </div>

            <!-- 撤单操作 -->
            <div style="margin-top: 0.25rem;width: 100%;text-align: center;height:auto;background-color: #eeeeee;display: flex;justify-content: center;">
                <div style="font-size:0.32rem!important;width:3.2rem;background-color: white;border-radius:0.75rem;line-height: 0.987rem;height: 0.987rem"
                     v-if="itemData.Status == 1 && !isCameFromAgentCenter" @click="execCancleOrder">
                    撤销订单
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getDetailByOrderNumber, cancleOrder} from "../../../../util/statistics";
    import {Toast} from 'vant';

    export default {
        name: "betInfo",
        data() {
            return {
                itemData: {},
            }
        },
        props: {
            OrderNumber: {//订单号
                type: String,
                required: true
            },
            isCameFromAgentCenter: {//是否代理中心过来
                type: Boolean,
                required: true
            }
        },
        watch: {
            OrderNumber() {//订单号
                // this.getData();
            }
        },
        methods: {
            clickLeftBack() {
                this.$emit('back')
            },
            getMoneyColorClass(money) {
                if (money > 0) {
                    return 'status_color_1'
                } else
                    return 'status_color_2';
            },
            clipboardSuccessHandler() {
                Toast('复制成功')
            },
            getData() {
                let that = this
                this.$toast.loading({message: '正在加载...', duration: 0});
                getDetailByOrderNumber({number: this.OrderNumber, type: 1}).then(rtData => {
                    this.$toast.clear()
                    if (rtData.IsSucess) {
                        if (rtData.Data.length > 0) {
                            that.itemData = rtData.Data[0]
                        }
                    } else
                        that.$toast.fail(rtData.Message)
                })
            },
            execCancleOrder() {
                this.$dialog.confirm({
                    title: '',
                    message: '确认撤单？'
                }).then(() => {
                    this.$toast.loading({overlay: true, message: '撤销中...', duration: 0});
                    cancleOrder({number: this.OrderNumber, type: 1}).then(rtData => {
                        this.$toast.clear()
                        if (rtData.IsSucess) {
                            this.$toast.success("撤销订单成功！")
                            setTimeout(() => {
                                this.$emit('back')
                            }, 500)
                        } else
                            this.$toast.fail(rtData.Message)
                    })
                }).catch(() => {
                    // on cancel
                });
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style lang="less" scoped>
    .bet_info {
        position: absolute;
        top: 0;
        z-index: 1001;
        height: 100%;
        //订单状态
        .order_status {
            height: 2.05333rem;
            background-color: #008573;
            overflow: hidden;
            margin-top: .001rem;

            .panel {
                color: white;
                font-size: 0.507rem;
                text-align: left;;
                display: flex;
                justify-content: left;

                .left_icon {
                    height: 2.053rem;
                    line-height: 2.053rem;
                    margin-left: 0.8rem;
                    padding-top: 0.1rem;

                    .iconfont {
                        font-size: 0.933rem;
                        align-items: center;
                        flex: 1
                    }
                }

                .left_text {
                    height: 2.053rem;
                    line-height: 2.053rem;
                    margin-left: .35rem;
                }
            }
        }

        //彩种信息
        .order_lottery {
            background-color: white;
            margin-top: 0.25rem;
            width: 100%;
            height: 2.12rem;
            overflow: hidden;
            padding-left: .4rem;
            color: #333333;

            .lottery {
                text-align: left;
                height: 1rem;
                display: flex;
                align-items: center;
                margin-top: .15rem;
            }

            .open_number {
                text-align: left;
                display: flex;
                justify-content: left;
            }
        }

        //投注信息
        .order_bet_info {
            text-align: left;
            background-color: white;
            margin-top: 0.25rem;
            padding: .4rem .4rem 0 .4rem;
            color: #666666;

            .info_1 {
                text-align: left;
                display: flex;
                flex-direction: column;

                span {
                    line-height: 0.567rem;
                }
            }

            .info_2 {
                text-align: left;
                width: 100%;
                border: 0.01333rem solid #e0e0e0;
                padding: 0.125rem;
                background-color: #fcfcfc;
                margin-top: 0.25rem;

                textarea {
                    height: 2rem;
                    width: 100%;
                    border: none;
                    font-size: 0.32rem;
                    text-align: left;
                    line-height: 0.375rem !important;
                    color: #666666 !important;
                    background: none;
                }
            }

            .info_3 {
                text-align: left;
                width: 100%;
                margin-top: 0.25rem;
                color: #333333;

                .one_row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .max_font {
                        font-size: 0.427rem
                    }

                    .min_font {
                        font-size: .32rem;
                    }
                }

                .line {
                    border-bottom: 0.01333rem solid #e0e0e0;
                    width: 100%;
                    margin-top: 0.2rem;
                }
            }

        }

        //订单信息
        .other_info {
            background-color: white;
            margin-top: 0.25rem;
            width: 100%;
            padding: 0.4rem;

            .info_1 {
                font-size: 0.37333rem;
                text-align: left;
                height: .5rem;
                line-height: .5rem;
                border-left: 0.05333rem solid #008573;
                padding-left: .15rem;
            }

            .info_2 {
                display: flex;
                flex-flow: column;
                text-align: left;
                line-height: 0.567rem;
                margin-top: .15rem;

                div {
                    display: flex;
                    justify-content: space-between;
                }

            }
        }
    }
</style>

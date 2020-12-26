<template>
    <div class="zh_order_info">
        <div class="list-content">
            <div class="list-item" style="height:2rem!important;padding-bottom: 0.25rem; align-items: flex-start">
                <div style="font-size: 0.32rem;background: white; padding-top: 0.25rem; color: #333333; margin-right: 0.2667rem">
                    追号内容：
                </div>
                <van-field
                        v-model="itemData.BetContent"
                        value=""
                        type="textarea"
                        readonly
                        style="border: 1px solid rgba(0, 0, 0, 0.15);flex: 1; background-color: #fcfcfc;color: #333333;font-size:0.32rem;text-align: left;line-height: 0.6rem!important;height: 100%;padding-top: 0!important;padding: 0.133rem"
                />
            </div>
            <div class="list-item">
                <span>追号编号：</span>
                <span style="margin-left: 0.25rem">{{itemData.ZhNumber}}</span>
            </div>
            <div class="list-item">
                <span>追号用户：</span>
                <span style="margin-left: 0.25rem">{{itemData.UserName}}</span>
            </div>
            <div class="list-item">
                <span>彩种玩法：</span>
                <span style="margin-left: 0.25rem" v-if="!itemData.RxDsFormart">{{itemData.LgName}}-{{itemData.LpName}}</span>
                <span style="margin-left: 0.25rem" v-else>{{itemData.LgName}}-{{itemData.LpName}} ({{itemData.RxDsFormart}})</span>
            </div>
            <div class="list-item">
                <span>追号模式：</span>
                <span style="margin-left: 0.25rem">{{itemData.AmName}}&nbsp模式</span>
            </div>
            <div class="list-item">
                <span>奖金返点：</span>
                <span style="margin-left: 0.25rem">{{itemData.BetBonus}}&nbsp元&nbsp/ {{itemData.BetRebate}}%</span>
            </div>
            <div class="list-item">
                <span>追号金额：</span>
                <span style="margin-left: 0.25rem">{{ZhAmount}}&nbsp元</span>
            </div>
            <div class="list-item">
                <span>每单注数：</span>
                <span style="margin-left: 0.25rem">{{itemData.BetCount}}&nbsp注</span>
            </div>
            <div class="list-item">
                <span>中奖停止：</span>
                <span style="margin-left: 0.25rem">{{itemData.IsZhWinStop?"是":"否"}}</span>
            </div>
            <div class="list-item">
                <span>追号进度：</span>
                <span style="margin-left: 0.25rem">{{openD}}</span>
            </div>
            <div class="list-item">
                <span>追号时间：</span>
                <span style="margin-left: 0.25rem">{{itemData.BetTime}}</span>
            </div>
            <div class="list-item">
                <span>追号盈亏：</span>
                <span style="margin-left: 0.25rem"><span
                        :class="getMoneyColorClass()">{{(kyMoney).toFixed(3)}}</span>&nbsp元</span>
            </div>
        </div>
        <div v-if="!isCameFromAgentCenter && isCeDan"
             style="width: 100%;height:1.173rem;background-color: #eeeeee;margin-top: 0.267rem">
            <div style="background-color: #008573;color: white;font-size: 0.373rem;text-align: center;line-height:1.173rem;height:1.173rem;margin:0.213rem ;border-radius: 0.1rem"
                 @click="execCancleOrder">
                撤销追号
            </div>
        </div>
    </div>
</template>

<script>
    import {cancleOrder} from "../../../../util/statistics";

    export default {
        name: "orderInfo",
        data() {
            return {
                itemData: {},
                ZhAmount: 0,//追号金额
                kyMoney: 0,//亏盈金额
            }
        },
        props: {
            orderData: {//订单数据
                type: Array,
                required: true
            },
            openD: {//追号进度
                type: String,
                required: true
            },
            isCameFromAgentCenter: {//是否代理中心过来
                type: Boolean,
                required: true
            }
        },
        watch: {
            orderData() {
                this.itemData = this.orderData[0];
                this.calcZhAmount();
            },
        },
        computed: {
            isCeDan() {//根据进度返回是否可以撤单
                let s = this.openD.split('/')
                if (s[0] == s[1])
                    return false;
                else
                    return true;
            }
        },
        created() {

        },
        methods: {
            //计算追号总金额 亏盈
            calcZhAmount: function () {
                let allMoney = 0;
                let zj = 0;
                this.orderData.forEach(x => {
                    if (x.Status != 2) {
                        allMoney += x.BetMoney
                    }
                    if (x.Status == 3) {
                        zj += x.WinBonus
                    }
                });
                this.ZhAmount = allMoney;
                this.kyMoney = zj - allMoney;
            },
            getMoneyColorClass() {
                if (this.kyMoney > 0) {
                    return 'status_color_1'
                } else
                    return 'status_color_2';

            },
            execCancleOrder() {//撤单
                this.$dialog.confirm({
                    title: '',
                    message: '确认撤单？'
                }).then(() => {
                    this.$toast.loading({overlay: true, message: '撤销中...', duration: 0});
                    cancleOrder({number: this.itemData.ZhNumber, type: 2}).then(rtData => {
                        this.$toast.clear();
                        if (rtData.IsSucess) {
                            this.$toast.success("撤销追号订单成功！")
                            setTimeout(() => {this.$emit('back')}, 500)
                        } else
                            this.$toast.fail(rtData.Message)
                    })
                }).catch(() => {
                    // on cancel
                });

            }
        },

    }
</script>

<style lang="less" scoped>
    .zh_order_info {
        .list-content {
            width: 100%;
            background-color: white;
            padding: 0.25rem;

            .list-item {
                border-bottom: 0.013rem solid #f2f2f2;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: 0.32rem;
                color: #333333;
                font-family: "Microsoft YaHei";
                height: 0.827rem !important;
                // line-height: 0.827rem !important;
            }
        }
    }
</style>
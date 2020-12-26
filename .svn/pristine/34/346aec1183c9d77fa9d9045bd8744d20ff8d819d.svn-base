<template>
    <div class="zh_order_list">
        <div class="list-content">

            <div class="zh-recard-item" v-for="(item,index) in orderData" :key="index">
                <div class="recard-item_div">
                    <span>本期号码：</span>
                    <span style="margin-left: 0.6rem">{{item.Lssue}}</span>
                </div>
                <div class="recard-item_div">
                    <span>开奖号码：</span>
                    <span style="margin-left: 0.6rem;color: #008573">{{item.OpenNumber}}</span>
                </div>
                <div class="recard-item_div">
                    <span>投注倍数：</span>
                    <span style="margin-left: 0.6rem">{{item.BetMultiple}}&nbsp倍</span>
                </div>
                <div class="recard-item_div">
                    <span>投注金额：</span>
                    <span style="margin-left: 0.6rem">{{item.BetMoney}}&nbsp元</span>
                </div>
                <div class="recard-item_div">
                    <span>中奖金额：</span>
                    <span style="margin-left: 0.6rem;">{{item.WinBonus}}&nbsp元</span>
                </div>
                <div class="recard-item_div">
                    <span>中奖注数：</span>
                    <span style="margin-left: 0.6rem">{{item.WinCount}}&nbsp注</span>
                </div>
                <div class="recard-item_div">
                    <span>本期盈亏：</span>
                    <span style="margin-left: 0.6rem;" :class="{'status_color_2':item.KuiYing<0,'status_color_1':item.KuiYing>0}">{{item.KuiYing}}&nbsp元</span>
                </div>
                <div class="recard-item_div" style="border: 0">
                    <div style="display: flex;flex-flow:row;flex-direction: row;flex: 1; justify-content: space-between;">
                        <span :class="{'status_color_3':item.Status == 2,'status_color_1':item.Status == 3 ,'status_color_2':item.Status == 4 }">{{item.StatusText}}&nbsp({{item.BetTime}})</span>
                        <div v-if="item.Status == 1 && !isCameFromAgentCenter" @click="execCancleOrder(item)"
                             style="width: 1.787rem;height:0.653rem;line-height:0.653rem;text-align: center;color: #008573;border: 0.013rem solid #a1e9df;border-radius:0.107rem;background-color: #f0fffd;margin-top: 0.093rem">
                            撤销本期
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import {cancleOrder} from "../../../../util/statistics";
    export default {
        name: "orderList",
        data() {
            return {}
        },
        props: {
            orderData: {//订单数据
                type: Array,
                required: true
            },
            isCameFromAgentCenter: {//是否代理中心过来
                type: Boolean,
                required: true
            }
        },
        methods:{
            execCancleOrder(val){
                let that=this;
                this.$dialog.confirm({
                    title: '',
                    message: '确认撤单？'
                }).then(() => {
                    this.$toast.loading({overlay: true, message: '撤销中...', duration: 0});
                    cancleOrder({number: val.OrderNumber, type: 1}).then(rtData => {
                        that.$toast.clear();
                        if (rtData.IsSucess) {
                            that.$toast.success("撤销本期订单成功！")
                            setTimeout(() => {that.$emit('getData')}, 500)
                        } else
                            that.$toast.fail(rtData.Message)

                    })
                }).catch(() => {
                    // on cancel
                });

            }
        }
    }
</script>

<style lang="less" scoped>
    .zh_order_list {
        .list-content {
            overflow: scroll;
            padding: 10px;
            height: 100%;
        }

        .zh-recard-item {
            width: 100%;
            background-color: white;
            border-radius: 0.125rem;
            font-size: 0.32rem;
            font-family: "Microsoft YaHei";
            margin-bottom: 0.2667rem;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
        }

        .recard-item_div {
            height: 0.853rem;
            line-height: 0.853rem;
            border-bottom: 1px solid #cccccc;
            text-align: left;
            padding: 0px 0.4rem 0px 0.4rem;
        }


    }
</style>
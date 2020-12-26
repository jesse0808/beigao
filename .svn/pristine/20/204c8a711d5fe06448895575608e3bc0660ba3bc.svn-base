<template>
    <div class="me_recard_main recharge_info">
        <my-title :title-val="title"></my-title>

        <div style="text-align: center;font-size: 0.4rem;line-height: 1rem;height:1rem;width: 100%">
            <span>订单有效时间剩余：</span>
            <span style="color: #ff6c00;font-size:0.427rem">{{expendTimeTxt}}</span>
        </div>
        <div class="item">
            <span style="width: 25%;text-align: left">订单号</span>
            <span style="color: #333333;text-align: left;width: 50%">{{orderData.OrderNumber}}</span>
            <span style="width: 25%;text-align: right;color: #008573" v-clipboard:copy="orderData.OrderNumber"
                  v-clipboard:success="copy">复制</span>
        </div>
        <div class="item">
            <span style="width: 25%;text-align: left">充值金额</span>
            <span style="color: #333333;text-align: left;width: 50%">{{orderData.RcMoney}}</span>
            <span style="width: 25%;text-align: right;color: #008573" v-clipboard:copy="orderData.RcMoney"
                  v-clipboard:success="copy">复制</span>
        </div>

        <!--<div v-if="orderData.PayType == 16">-->
        <div class="item">
            <span style="width: 25%;text-align: left">存款户名</span>
            <span style="color: #333333;text-align: left;width: 50%">{{orderData.RcFullName}}</span>
            <span style="width: 25%;text-align: right;color: #008573" v-clipboard:copy="orderData.RcFullName"
                  v-clipboard:success="copy">复制</span>
        </div>
        <div class="item">
            <span style="width: 25%;text-align: left">存款银行</span>
            <span style="color: #333333;text-align: left;width: 50%">{{orderData.RcBankName}}</span>
            <span style="width: 25%;text-align: right;color: #008573" v-clipboard:copy="orderData.RcBankName"
                  v-clipboard:success="copy">复制</span>
        </div>
        <div class="item">
            <span style="width: 25%;text-align: left">收款账号</span>
            <span style="color: #333333;text-align: left;width: 50%">{{orderData.RcBankNumber}}</span>
            <span style="width: 25%;text-align: right;color: #008573" v-clipboard:copy="orderData.RcBankNumber"
                  v-clipboard:success="copy">复制</span>
        </div>

        <div style="height: 1.173rem;line-height:1.173rem;font-size: 0.373rem;background-color: #ffffff;color: #999999;border-radius: 0.2rem;margin: 0.5rem"
             @click="chexiao(orderData.OrderNumber)">
            撤销订单
        </div>

    </div>
</template>

<script>

    import {revocationOrder, checkRechargeOrderStatus} from "../../../util/money";

    export default {
        name: "rechargeInfo",
        data() {
            return {
                title: '入款明细',
                orderData: {},
                expendTime: 0,
                expendTimeTxt: "",
                timer: null, //倒计时timer
                checkTimer: null,//检查订单状态timer
            }
        },
        created() {
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            }
        },
        methods: {
            expendTimes() {
                this.expendTime = this.expendTime - 1
                if (this.expendTime <= 0) {
                    clearInterval(this.timer);
                    clearInterval(this.checkTimer)
                    this.$dialog.alert({
                        message: '订单已超时',
                    }).then(() => {
                        this.$router.back(-1);
                    });
                    this.expendTime = 0
                }
                let min = Math.floor(this.expendTime % 3600);
                let h = Math.floor(this.expendTime / 3600);
                let m = Math.floor(min / 60);
                let s = this.expendTime % 60;
                this.expendTimeTxt = (h > 9 ? h : "0" + h) + ":" + (m > 9 ? m : "0" + m) + ":" + (s > 9 ? s : "0" + s);
            },
            copy(e) {
                this.$toast.success("复制成功");
            },
            getOrderStatus() {
                checkRechargeOrderStatus({OrderNumber: this.orderData.OrderNumber}).then(data => {
                    if (data.IsSucess) {
                        if (data.Data == 1) {
                            clearInterval(this.timer);
                            clearInterval(this.checkTimer)
                            this.$dialog.alert({
                                message: '订单已取消',
                            }).then(() => {
                                this.$router.back(-1);
                            });
                        } else if (data.Data == 2) {
                            clearInterval(this.timer);
                            clearInterval(this.checkTimer)
                            this.$dialog.alert({
                                message: '订单已支付完成',
                            }).then(() => {
                                this.$router.back(-1);
                            });
                        }
                    }
                })
            },
            chexiao(value) {
                this.$toast.loading({
                    mask: true,
                    message: '撤销中...',
                    duration: 0
                });
                revocationOrder(value).then(data => {
                    this.$toast.clear();
                    if (data.IsSucess) {
                        clearInterval(this.timer);
                        clearInterval(this.checkTimer)
                        this.$dialog.alert({
                            message: '撤销订单成功',
                        }).then(() => {
                            this.$router.back(-1);
                        });
                    } else {
                        this.$toast.fail(data.Message)
                    }

                })
            },
        },
        beforeDestroy() {
            clearInterval(this.timer)
            clearInterval(this.checkTimer)
        },
        mounted() {
            clearInterval(this.timer);
            clearInterval(this.checkTimer);
            let orderInfo=sessionStorage.getItem("ltOrderInfo")
            if (!orderInfo) {
                this.$dialog.alert({
                    message: '订单为空',
                }).then(() => {
                    this.$router.back(-1);
                });
            }else{
                this.orderData =JSON.parse(orderInfo);
                this.$dialog.alert({message: "转帐时，请依照提示金额（含小数点后数字）转帐，否则将不会立即到帐"});
                this.expendTime = parseInt(this.orderData.OrderExtendTime);
                this.timer = setInterval(this.expendTimes, 1000);
                this.checkTimer=setInterval(this.getOrderStatus,1000*5);
            }
        }
    }
</script>

<style lang="less" scoped>
    .recharge_info {
        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 1.2rem;
            padding: 0 .4rem;
            margin-bottom: 1px;
            background-color: #ffffff;

            span {
                font-size: 0.32rem;
                color: #1A2C3B;
            }
        }

        .item_a {
            padding-right: 0.25rem;
        }
    }
</style>

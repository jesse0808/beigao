<template>
    <div class="add_to">
        <div class="fixed_title">
            <div class="nav_title">
                <a href="javascript:void(0)" @click.stop="checkedState = 0"
                   :class="checkedState === 0?'checked_a':'uncheck_a'">同倍追号</a>
                <a href="javascript:void(0)" @click.stop="checkedState = 1"
                   :class="checkedState === 1?'checked_a':'uncheck_a'">翻倍追号</a>
                <a href="javascript:void(0)" @click.stop="checkedState = 2"
                   :class="checkedState === 2?'checked_a':'uncheck_a'">利润率</a>
                <span :class="checkedState === 1?'anm_left':checkedState === 2?'anm_left_1':''"></span>
            </div>
            <div class="input_div" v-if="checkedState === 0">
                <label>追号倍数&ensp;<input type="text" v-model="multiple" placeholder="请输入追号倍数">&ensp;倍</label>
                <label>追号期数&ensp;<input type="text" v-model="periods" placeholder="请输入追号期数">&ensp;期</label>
            </div>
            <div class="input_div" v-if="checkedState === 1">
                <label>追号期数&ensp;<input class="gap" type="text" v-model="periods" placeholder="请输入追号期数"></label>
                <label>间隔期数&ensp;<input class="gap" type="text" v-model="gapPeriods" placeholder="请输入间隔期数"></label>
                <label>倍数乘以&ensp;<input class="gap" type="text" v-model="gapMultiple" placeholder=""></label>
            </div>
            <div class="input_div" v-if="checkedState === 2">
                <label>追号期数&ensp;<input class="gap" type="text" v-model="periods" placeholder="请输入期数"></label>
                <label>起始倍数&ensp;<input class="gap" type="text" v-model="multiple" placeholder="请输入倍数"></label>
                <label>最低收益&ensp;<input class="gap" type="text" v-model="profitMargin" placeholder="最低收益率">%</label>
            </div>
            <div class="creat_or">
                <div><span class="iconfont icon-duihao" @click="IsZhWinStop = !IsZhWinStop"
                           :class="[IsZhWinStop?'checked_span':'']"></span>&ensp;中奖后停止追号
                </div>
                <a href="javascript:void(0)" @click="createAdd">生成追号</a>
            </div>
            <div class="tab_title">
                <span>期号</span>
                <span>倍数</span>
                <span>金额</span>
            </div>
        </div>
        <div class="tab_content">
            <div class="tab_item" v-for="(item,index) in addToList" :key="index">
                <div class="qi_hao"><span class="iconfont icon-duihao"
                                          :class="[item.multiple > 0?'checked_span':'']"></span>&ensp;{{item.FormatLssue}}
                </div>
                <div><label><input type="text" @input="inputChange(index)" v-model="item.multiple"
                                   placeholder="未生成"></label></div>
                <div>￥{{item.money}}</div>
            </div>
        </div>
        <div class="fixed_bottom">
            <a class="cancel" href="javascript:void(0)" @click="cancelAdd">取消</a>
            <div>
                <p>共&ensp;<span>{{showPeriods || 0}}</span>&ensp;期</p>
                <p>共&ensp;<span>{{allMoney}}</span>&ensp;元</p>
            </div>
            <a class="bet_a" href="javascript:void(0)" @click="addBet">
                <p>立即下注</p>
                <p>余额 {{resetStatus?'加载中':userInfo.Balance}}</p>
                <!--<p >余额 {{resetStatus?'加载中':userInfo.Balance}} <i class="iconfont icon-shuaxin" @click.stop="clickStop" @click="getUserBalance"></i></p>-->
            </a>
        </div>
    </div>
</template>

<script>
    import {betAddTo, getAddToData} from "../../../util/lottery";
    import {getUserInfo} from "../../../util/game";

    export default {
        name: "addTo",
        props: {
            issueNum: {
                type: [Number, String],
                required: true
            }
        },
        data() {
            return {
                resetStatus: false,
                checkedState: 0,
                multiple: 1,//追号倍数
                periods: 10,//追号期数
                gapPeriods: 1,//翻倍追号 间隔期数
                gapMultiple: 2,//翻倍追号 倍数
                profitMargin: 50,//利润率
                gameId: this.$route.query.LgId,
                addToList: [],
                showPeriods: 0,//显示的总期数
                allMoney: 0,//显示的总金额
                order: {},//订单
                IsZhWinStop: true,//中奖后是否继续追号
            }
        },
        watch: {
            checkedState() {
                this.addToList.forEach(item => {
                    item.multiple = ''
                    item.money = 0;
                });
                this.showPeriods = 0;
                this.allMoney = 0;
                this.multiple = 1;
                this.periods = 10;
                this.gapPeriods = 1;
                this.gapMultiple = 2;
                this.profitMargin = 50
            },
            multiple(value) {
                this.multiple = value.replace(/[^\d]/g, '');
            },
            periods(value) {
                this.periods = value.replace(/[^\d]/g, '');
                if (value > 120) {
                    this.periods = 120
                }
            },
            gapPeriods(val) {
                this.gapPeriods = val.replace(/[^\d]/g, '');
            },
            profitMargin(val) {
                this.profitMargin = val.replace(/[^\d]/g, '');
                if (val > 100) {
                    this.profitMargin = 100
                }
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            },
        },
        created() {
            let that = this;
            this.$toast.loading({
                message: '加载期号...',
                forbidClick: true,
                duration: 0,
            })
            getAddToData({issue: that.issueNum, lgId: that.gameId}).then(data => {
                this.$toast.clear()
                if (data.IsSucess) {
                    let arrData = data.Data.map(item => {
                        item.multiple = '';
                        item.money = 0;
                        return item
                    });
                    that.addToList = arrData
                } else
                    this.$toast.fail(data.Message);
            });
            this.getUserBalance();
        },
        methods: {
            getUserBalance() {
                this.resetStatus = true;
                getUserInfo().then(data => {
                    this.resetStatus = false;
                });
            },
            //阻止冒泡
            clickStop() {
                return false
            },
            //生成追号
            createAdd() {
                this.addToList.forEach((item, index) => {
                    if (index < this.periods) {
                        if (this.checkedState === 1) {
                            if (this.gapPeriods < 1) {
                                this.$toast.fail({message: '请输入间隔期数'})
                            } else if (this.gapMultiple < 2) {
                                this.$toast.fail({message: '倍数必须大于等于2'})
                            } else {
                                item.multiple = parseInt(Math.pow(this.gapMultiple, Math.floor(index / this.gapPeriods)))
                            }
                        } else {
                            if (this.multiple < 1) {
                                this.$toast.fail({message: '请输入追号倍数'});
                                return
                            }
                            item.multiple = this.multiple
                        }
                    } else {
                        if (this.periods < 1) {
                            this.$toast.fail('请输入追号期数');
                            return;
                        }
                        item.multiple = ''
                    }
                });
                this.showPeriods = this.periods;
                this.countMoney()
            },
            //倍数变化时
            inputChange(index) {
                this.addToList[index].multiple = this.addToList[index].multiple.replace(/[^\d]/g, '');
                let num = 0;
                this.addToList.forEach(item => {
                    if (item.multiple > 0) {
                        num += 1
                    }
                });
                this.showPeriods = num;
                this.countMoney()
            },
            //就散总金额
            countMoney() {
                let num = 0;
                let order = window.sessionStorage.getItem('order');
                this.order = JSON.parse(order);
                this.addToList.forEach(item => {
                    if (item.multiple > 0) {
                        num += item.multiple * this.order.BetMoney;
                        item.money = parseInt(item.multiple * this.order.BetMoney)
                    }
                });
                this.allMoney = num.toFixed(3)
            },
            //取消
            cancelAdd() {
                this.$emit('cancel')
            },
            //追号下注
            addBet() {
                if (this.showPeriods > 0) {
                    if (this.userInfo.Balance < this.allMoney)
                        return this.$toast.fail({message: "您的可用余额不足，请重新选择"});
                    this.$dialog.confirm({
                        // title: '标题',
                        message: `共追号 ${this.showPeriods} 期,共 ${this.allMoney} 元,确定要追号吗？`
                    }).then(() => {
                        let Lssues = [];
                        this.addToList.forEach(item => {
                            if (item.multiple > 0) {
                                Lssues.push({
                                    Lssue: item.Lssue,
                                    Multiple: item.multiple
                                })
                            }
                        });
                        this.$toast.loading({
                            message: '下单中...',
                            forbidClick: true,
                            duration: 0,
                            overlay: true
                        })
                        let params = {
                            Lssues: Lssues,
                            Order: this.order,
                            IsZhWinStop: this.IsZhWinStop,
                            LgId: this.gameId
                        };
                        betAddTo(params).then(data => {
                            this.$toast.clear()
                            if (data.IsSucess) {
                                let errorMsg = '';
                                if (data.Data.ErrorInfos.length > 0) {
                                    data.Data.ErrorInfos.forEach(e => {
                                        errorMsg += `${e.Lssue} ${e.ErrorMsg}\n`;
                                    });
                                    this.$toast.fail({message: `成功追号 ${data.Data.SuccessCount} 期 \n ${errorMsg}`})
                                } else
                                    this.$toast.success({message: `成功追号 ${data.Data.SuccessCount} 期`})
                                getUserInfo();
                                setTimeout(() => {
                                    this.$emit('cancel', 1)
                                }, 1000)
                            } else {
                                this.$toast.fail(data.Message)
                            }
                        })
                    }).catch(() => {

                    });
                } else {
                    this.$toast.fail({message: '请先生成追号方案'})
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .add_to {
        position: fixed;
        top: 1.17777rem;
        left: 0;
        background-color: #fff;
        width: 100%;
        min-height: calc(100vh - 1.17777rem);
        z-index: 200;

        .fixed_title {
            width: 100%;

            .nav_title {
                position: relative;
                display: flex;
                width: 100%;
                height: 1.2rem;
                border-bottom: solid #e1e1e1 .01333rem;

                a {
                    display: inline-block;
                    width: 33.3%;
                    height: 1.16rem;
                    line-height: 1.16rem;
                    font-size: .42666rem;
                }

                .checked_a {
                    color: #008573;
                }

                .uncheck_a {
                    color: #333333;
                }

                span {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    display: inline-block;
                    width: 33.3%;
                    height: .04rem;
                    background-color: #008573;
                    transition: left .3s;
                }

                .anm_left {
                    left: 33.3%;
                }

                .anm_left_1 {
                    left: 66.6%;
                }
            }

            .input_div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 1.2rem;
                padding: 0 .37333rem;
                border-bottom: solid #e1e1e1 .01333rem;

                label {
                    font-size: .34666rem;
                    color: #333333;

                    input {
                        width: 1.56rem;
                        height: .8rem;
                        background-color: #f3f3f3;
                        border-radius: .06666rem;
                        border: solid .01333rem #f0f0f0;
                        font-size: .34666rem;
                        color: #333333;
                        text-align: center;
                    }

                    .gap {
                        width: 1.16rem;
                    }
                }
            }

            .creat_or {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: .88rem;
                padding-left: .4rem;
                font-size: .32rem;
                border-bottom: solid #e1e1e1 .01333rem;

                div {
                    color: #333333;

                    span {
                        font-size: .4rem;
                        color: #cdcdcd;
                    }
                }

                a {
                    width: 2.61333rem;
                    height: .68rem;
                    line-height: .68rem;
                    margin-right: .1rem;
                    color: #fff;
                    background-color: #008573;
                    border-radius: .06666rem;
                }
            }

            .tab_title {
                display: flex;
                width: 100%;
                height: .8rem;
                background-color: #f3f3f3;

                span {
                    display: inline-block;
                    width: 33.3%;
                    line-height: .8rem;
                    font-size: .32rem;
                    color: #666666;
                }
            }
        }

        .tab_content {
            width: 100%;
            height: calc(100vh - 3.25777rem);
            padding-bottom: 3.5rem;
            overflow-y: scroll;

            .tab_item {
                display: flex;
                align-items: center;
                width: 100%;
                height: 1rem;
                border-bottom: solid #e1e1e1 .01333rem;

                div {
                    width: 33.3%;
                    font-size: .32rem;
                    color: #666666;

                    label {
                        input {
                            width: 1.12rem;
                            height: .58666rem;
                            background-color: #ffffff;
                            box-shadow: inset 0 .02666rem .02666rem 0 rgba(0, 0, 0, 0.09);
                            border-radius: .06666rem;
                            border: solid .01333rem #d5d5d5;
                            outline: none;
                            text-align: center;
                        }
                    }
                }

                .qi_hao {
                    display: flex;
                    align-items: center;
                    text-align: left;
                    padding-left: .4rem;

                    span {
                        font-size: .4rem;
                    }

                    .iconfont {
                        color: #cdcdcd;
                    }
                }
            }
        }

        .fixed_bottom {
            position: fixed;
            left: 0;
            bottom: 0;
            display: flex;
            width: 100%;
            height: 1.28rem;
            background-color: #fff;

            .cancel {
                position: relative;
                width: 1.6rem;
                height: 1.28rem;
                line-height: 1.28rem;
                font-size: .32rem;
                color: #333333;

                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    width: .02666rem;
                    height: .8rem;
                    background-color: #e1e1e1;
                }
            }

            div {
                width: 3.44rem;
                padding-top: .2rem;

                p {
                    font-size: .32rem;

                    span {
                        color: #ff6200;
                    }
                }
            }

            .bet_a {
                width: 4.85333rem;
                height: 1.18rem;
                padding-top: .12rem;
                background-color: #008573;
                border-radius: .04rem;
                display: flex;
                flex-direction: column;

                p {
                    color: #fff;

                    &:first-child {
                        font-size: .4rem;
                        margin-top: .05rem;
                    }

                    &:last-child {
                        font-size: .32rem;
                        height: .5rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        i {
                            font-size: .5rem;
                            margin-left: .1rem;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="foot_info foot_info2" :class="{'show_keyboard':showBeiShu}">
        <div class="foot_sum">
            <div>已选:<span> {{betNum || 0}} </span>注&ensp;共<span> {{betMoney || 0}} </span>元</div>
        </div>
        <div class="pattern">
            <div class="on_mode">
                <a href="javascript:void(0)" @click="clickMoney(index)" class="check_mode"
                   v-for="(item,index) in moneyArr" :key="index">{{item.value}}</a>
            </div>
            <div class="money_tex">
               <div>金额</div>
                <!--<input type="text" v-model="checkMoney" placeholder="请输入">-->
                <van-field
                        readonly
                        clickable
                        :value="checkMoney"
                        @click="showBeiShu = true"
                />
                <van-number-keyboard style="height: 6.3rem" :hide-on-click-outside="false" theme="custom" v-model="checkMoney" close-button-text="关闭" @blur="showBeiShu=false"  :show="showBeiShu"  />
                <div>元</div>
            </div>
        </div>
        <div class="user_balance">
            <a href="javascript:void(0)" @click="clearAll" class="clear_a"><img
                    src="../../../assets/img/icon/qingchu.png" alt=""></a>
            <a href="javascript:void(0)" class="bet_a" @click="betClick">
                <p>立即下注</p>
                <p >余额 {{resetStatus?'加载中':userInfo.Balance}}</p>
                <!--<p >余额 {{resetStatus?'加载中':userInfo.Balance}} <i class="iconfont icon-shuaxin" @click.stop="clickStop" @click="getUserBalance"></i></p>-->
            </a>
        </div>
    </div>
</template>

<script>
    import {selectHeight} from "../../../mixins/height";
    import {pcdBet} from "../../../util/lottery";
    import {getUserInfo} from "../../../util/game";

    export default {
        name: "footInfo",
        components: {},
        mixins: [selectHeight],
        props: {
            betInfo: {
                type: Object,
                required: false
            },
            betIssue: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                resetStatus:false,
                showBeiShu:false,
                betNum: 0,//投注注数
                betMoney: 0,//投注金额
                checkMoney: "10",//输入框金额
                moneyArr: [
                    {
                        value: 10,
                        state: false
                    },
                    {
                        value: 50,
                        state: false
                    },
                    {
                        value: 100,
                        state: false
                    },
                    {
                        value: 500,
                        state: false
                    },
                    {
                        value: 1000,
                        state: false
                    },
                ]
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            },
        },
        watch: {
            betInfo() {
                if (this.betInfo) {
                    this.betNum = 1;
                } else
                    this.betNum = 0;
                this.countBal();
            },
            checkMoney() {
                this.countBal()
            }
        },
        created(){
            this.getUserBalance();
        },
        methods: {
            getUserBalance(){
                this.resetStatus = true;
                getUserInfo().then(data => {
                    this.resetStatus = false;
                });
            },
            //阻止冒泡
            clickStop() {
                return false
            },
            clickMoney(num) {
                let that = this;
                that.moneyArr.forEach((item, index) => {
                    item.state = index == num;
                    if (index == num) {
                        that.checkMoney = item.value+"";
                    }
                })
            },
            //投注
            betClick() {
                this.showBeiShu=false;
                if (this.betNum > 0) {
                    if (this.betMoney <= 0)
                        return this.$toast.fail({message: '请输入金额'});
                    if (this.userInfo.Balance < this.betMoney) {
                        this.$toast.fail({message: "您的可用余额不足，请重新选择"});
                    } else {
                        this.$dialog.confirm({
                            message: `期号 ${this.betIssue}\n共${this.betNum}注，${this.betMoney} 元，确定投注？`
                        }).then(() => {
                            this.betData()
                        }).catch(() => {
                            // on cancel
                        });
                    }
                } else {
                    this.$toast.fail({message: '号码选择不完整'})
                }
            },
            //投注数据处理
            betData() {
                this.$toast.loading({
                    message: '下单中...',
                    forbidClick: true,
                    duration: 0,
                    overlay: true
                });
                this.BetContent = [
                    {
                        LpId: this.betInfo.LpId,
                        PlayName: this.betInfo.Name,
                        BetMoney: this.checkMoney,
                    }
                ];
                pcdBet(this.betIssue, this.$route.query.LgId, this.BetContent).then(data => {
                    this.$toast.clear()
                    if (data.IsSucess) {
                        let errorMsg = '';
                        if (data.Data.ErrorInfos.length > 0) {
                            data.Data.ErrorInfos.forEach(e => {
                                errorMsg += `${e.Lssue} ${e.ErrorMsg}\n`;
                            });
                            this.$toast.fail({message: `成功投注 ${data.Data.SuccessCount} 个订单 \n ${errorMsg}`})
                        } else
                            this.$toast.success({message: `成功投注 ${data.Data.SuccessCount} 个订单`})
                        this.$emit('resetGame');
                        this.getUserBalance();
                    } else {
                        this.$toast.fail(data.Message)
                    }
                })
            },
            countBal() {
                    this.betMoney = Number(this.betNum * Number(this.checkMoney)).toFixed(3);
            },
            //清除全部选号
            clearAll() {
                this.$emit('clearAll')
            },
        },
    }
</script>

<style lang="less" scoped>
    @import "../../../assets/css/gameview.less";
</style>


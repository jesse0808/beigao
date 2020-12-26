<template>
    <div class="foot_info" :class="{'show_keyboard':showBeiShu}">
        <div class="foot_sum">
            <div>已选:<span> {{betNum || 0}} </span>注&ensp;共<span> {{betMoney || 0}} </span>元</div>
            <div class="bonus">
                奖金：
                <span class="bonusInput" @click="showBonus = true">{{bonusVal}}<span
                        class="iconfont icon-xia-"></span></span>
                <van-popup v-model="showBonus" position="bottom">
                    <van-picker show-toolbar
                                :columns="lossPerCent"
                                @cancel="showBonus = false"
                                @confirm="onBonus" :defaultIndex="0" value-key="keyValue"
                                :item-height="ramHeight"/>
                </van-popup>
            </div>
        </div>
        <div class="pattern">
            <div class="multiple_div">
                <div>倍数</div>
                <div class="multiple">
                    <a href="javascript:void(0)" @click="valueReduce"><span class="iconfont icon-jian2"></span></a>
                    <label>
                        <!--<input type="number" readonly v-model="value" @focus="shouBeiShuKeyNumber">-->
                        <van-field
                                :value="value"
                                readonly
                                @click="showBeiShu = true"
                        />
                    </label>
                    <!--不能为label中 ios 点关闭键盘会有bug-->
                    <van-number-keyboard style="height: 6.3rem" :hide-on-click-outside="false" theme="custom"
                                         v-model="value" close-button-text="关闭" @blur="showBeiShu=false"
                                         :show="showBeiShu"/>
                    <a href="javascript:void(0)" @click="valueAdd"><span class="iconfont icon-jia"></span></a>
                </div>
                <div>倍</div>
            </div>
            <div class="on_mode">
                <a href="javascript:void(0)" :class="[BonusMode == item.Id?'check_mode':'uncheck_mode']"
                   @click="onMode(item)" v-for="(item,index) in modeArray" :key="index">{{item.Name}}</a>
            </div>
        </div>

        <div class="user_balance">
            <a href="javascript:void(0)" @click="clearAll" class="clear_a"><img
                    src="../../../assets/img/icon/qingchu.png" alt=""></a>
            <a href="javascript:void(0)" @click="addToClick" class="bet_add">追号</a>
            <a href="javascript:void(0)" class="bet_a" @click="betClick">
                <p>立即下注</p>
                <p>余额 {{resetStatus?'加载中':userInfo.Balance}}</p>
                <!--<p >余额 {{resetStatus?'加载中':userInfo.Balance}} <i class="iconfont icon-shuaxin" @click.stop="clickStop" @click="getUserBalance"></i></p>-->
            </a>
        </div>
    </div>
</template>

<script>
    import {selectHeight} from "../../../mixins/height";
    import {lotteryBet} from "../../../util/lottery";
    import {getUserInfo} from "../../../util/game";

    export default {
        name: "footInfo",
        components: {},
        mixins: [selectHeight],
        props: {
            modeArray: {
                type: Array,
                required: true
            },
            bonusArray: {
                type: Array,
                required: true
            },
            betInfo: {
                type: Object,
                required: true
            },
            thisGameInfo: {
                type: Object,
                required: true
            },
            betIssue: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                resetStatus: false,
                modelNum: 0,//模式数值 用于计算金额
                bonusVal: '',//奖金选择
                showBonus: false, //奖金选择下拉框
                showBeiShu: false,//倍数数字键盘是否显示
                value: "1", // 倍数可以设置为空的
                beiShu: 1,//实际倍数
                betNum: 0,//投注注数
                betMoney: 0,//投注金额
                lossPerCent: [],//赔率
                BetContent: '',//处理后的彩票选中内容
                RxDsFormart: '',
                BetRebate: 0,//游戏返点
                BetBonus: 0,//投注奖金(选择的奖金)
                BonusMode: 0,//投注模式id
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            },
        },
        created() {
            this.getUserBalance();
        },
        watch: {
            // thisGameInfo(val) {
            //
            // },
            modeArray(val) {
                let old = val.filter((item => {
                    return item.Id == Number(localStorage.getItem("lg_bmid"))
                }));
                if (old.length > 0) {
                    this.onMode(old[0]);
                } else
                    this.onMode(val[0]);
            },
            bonusArray(val) {
                this.onBonus(val[0])
                this.lossPerCent = [...val.map(item => {
                    let newItem = item
                    newItem.keyValue = `${item.Jj}-${item.Rebate}%`
                    return newItem
                })]
            },
            betInfo(val) {
                this.BetContent = val.data || '';
                this.betNum = val.num || 0;
                this.RxDsFormart = val.remark || ''
            },
            betNum() {
                this.countBal()
            },
            modelNum() {
                this.countBal()
            },
            value(num) {
                if (num === '' || num < 1) {
                    this.value = '';
                    this.beiShu = 1;
                } else
                    this.beiShu = Number(this.value);
                this.countBal()
            }
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
            //模式
            onMode(data) {
                this.modelNum = data.Rate;
                this.BonusMode = data.Id;
                localStorage.setItem("lg_bmid", this.BonusMode);
            },
            //奖金
            onBonus(data) {
                this.bonusVal = `${data.Jj}-${data.Rebate}%`;
                this.showBonus = false;
                this.BetRebate = data.Rebate;
                this.BetBonus = data.Jj;
                this.$emit('setSelectJj', this.BetBonus);
            },
            //投注
            betClick() {
                this.showBeiShu = false;
                if (this.betInfo.num > 0) {
                    if (this.userInfo.Balance < this.betMoney) {
                        this.$toast.fail({message: "您的可用余额不足，请重新选择"});
                    } else {
                        this.$dialog.confirm({
                            message: `期号 ${this.betIssue}\n共${this.betNum}注，${this.betMoney} 元，确定投注？`
                        }).then(() => {
                            if (this.thisGameInfo.LpId == 28 && this.betNum > 800) {
                                this.$toast.fail(`玩法 ${this.thisGameInfo.Name} 不能大于800注`)
                                return
                            }
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
                let order = [{
                    BetMoney: this.betMoney,
                    BetMultiple: this.beiShu,
                    LpId: this.thisGameInfo.LpId,
                    PlayName: this.thisGameInfo.Name,
                    BetContent: this.BetContent,
                    BetCount: this.betNum,
                    BetRebate: this.BetRebate,
                    BetBonus: this.BetBonus,
                    BonusMode: this.BonusMode,
                    RxDsFormart: this.RxDsFormart
                }]
                this.$toast.loading({
                    message: '下单中...',
                    forbidClick: true,
                    duration: 0,
                    overlay: true
                })
                lotteryBet(this.betIssue, this.$route.query.LgId, order).then(data => {
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
                this.betMoney = (this.betNum * this.modelNum * this.beiShu).toFixed(3)
            },
            //减少
            valueReduce() {
                this.value = parseInt(Number(this.value) - 1) + "";
            },
            //增加
            valueAdd() {
                this.value = parseInt(Number(this.value) + 1) + "";
            },
            //清除全部选号
            clearAll() {
                this.$emit('clearAll')
            },
            //追号
            addToClick() {
                if (this.betInfo.num > 0) {
                    let order = {
                        BetMoney: this.betMoney,
                        BetMultiple: this.beiShu,
                        LpId: this.thisGameInfo.LpId,
                        PlayName: this.thisGameInfo.Name,
                        BetContent: this.BetContent,
                        BetCount: this.betNum,
                        BetRebate: this.BetRebate,
                        BetBonus: this.BetBonus,
                        BonusMode: this.BonusMode,
                        RxDsFormart: this.RxDsFormart
                    };
                    window.sessionStorage.setItem('order', JSON.stringify(order));
                    this.$emit('addTo')
                } else {
                    this.$toast.fail({message: '号码选择不完整', duration: 1000})
                }
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../assets/css/gameview.less";
</style>


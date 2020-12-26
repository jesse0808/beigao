<template>
    <div class="form_content_view zhuanzhang">
        <div class="scroll">
            <my-title title-val="转账" title-router="userCenter" :title-type=1 :customRight=true>
            <span slot="customRight" style="color: white;font-size:0.32rem"
                  @click="$router.push('/zhuanzhangRecard')">转账记录</span>
            </my-title>
            <div class="content_panel">
                <div class="row_item">
                    <div class="label_left">主账户余额</div>
                    <label style="color: #ff6200">{{resetStatus?'加载中':userInfo.Balance}}</label>
                    <div>元</div>
                </div>
                <div class="row_item">
                    <div class="label_left">游戏平台</div>
                    <label @click="showGame = true"><input type="text" disabled v-model="gameValue"
                                                           placeholder="请选择游戏平台"></label>
                    <span class="iconfont icon-xia-"></span>

                    <van-popup v-model="showGame" position="bottom">
                        <van-picker show-toolbar :columns="gameList" @cancel="showGame = false"
                                    @confirm="onGameChange" :default-index=0 value-key="CN_Name"
                                    :item-height="ramHeight"></van-picker>
                    </van-popup>
                </div>
                <div class="row_item">
                    <div class="label_left">转账类型</div>
                    <label @click="showType = true"><input type="text" disabled v-model="typeValue"
                                                           placeholder="请选择转账类型"
                    ></label>
                    <span class="iconfont icon-xia-"></span>
                    <van-popup v-model="showType" position="bottom">
                        <van-picker show-toolbar :columns="columns" @cancel="showType = false"
                                    @confirm="onConfirm" :default-index='0' value-key="name"
                                    :item-height="ramHeight"></van-picker>
                    </van-popup>
                </div>

                <div class="row_item">
                    <div class="label_left">转移金额</div>
                    <label><input type="number" v-model.trim="form.amount" placeholder="请输入转账金额"></label>
                </div>
            </div>
            <div class="add_button" @click="onSubmit">确定转移</div>
            <div class="sf_money_div">
                <div class="item-list">
                    <div class="money_item" v-for="(item,index) in gameList" :key="index" @click="refreshSelf(item)">
                        <p style="margin-top: 0.15rem;font-size: 0.32rem;">{{item.CN_Name}}</p>
                        <p style="margin-top: 0.1rem;font-size: 0.26666rem;color: #666666;"
                           v-if="currentIndex == item.GameId || item.load">加载中...</p>
                        <p style="margin-top: 0.1rem;font-size: 0.26666rem;color: #666666" v-else><span>余额</span><span
                                style="color: #ff6200"> {{item.GameId|getMoney(thirdBalance)}}</span> 元
                        </p>
                        <div class="reload">刷新</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {selectHeight} from "../../../mixins/height";
    import {getGameThirdMoney, getGameThirdMoneySelf, transferSccounts} from "../../../util/money";
    import {getUserInfo} from "../../../util/game";

    export default {
        name: "transfer",
        data() {
            return {
                resetStatus: false,
                showType: false,//转账类型状态
                showGame: false,//游戏选择下拉框状态
                gameValue: '',
                typeValue: '',
                columns: [{name: '转入游戏平台', type: 1}, {name: '转出到主账户', type: 2}],
                gameList: [],//第三方平台数据
                thirdBalance: [],//第三方余额数据
                currentIndex: null,
                selectGame: null,//选中的游戏
                form: {
                    game: '',
                    plat: '',
                    amount: '',
                    type: 1
                }
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            },
        },
        created() {
            let data = this.$store.state.thirdGames;
            data.forEach(item => {
                this.gameList.push(item)
            })
            this.gameList.map(item => {
                let obj = item
                obj.load = true;
                return obj
            })
            this.getGameData();
            this.getUserBalance();
        },
        mixins: [selectHeight],
        methods: {
            getUserBalance(){
                this.resetStatus = true;
                getUserInfo().then(data => {
                    this.resetStatus = false;
                });
            },
            //转账提交
            onSubmit() {
                let that = this;
                if (!this.selectGame)
                    return that.$toast.fail('请选择游戏平台');
                if (!this.form.amount)
                    return that.$toast.fail('请输入转移金额');
                if (that.form.type === 1) {
                    if (that.form.amount < that.selectGame.TMin)
                        return that.$toast.fail('最少转移金额为 ' + that.selectGame.TMin + ' 元');
                    else if (that.form.amount > that.selectGame.TMax)
                        return that.$toast.fail('最多转移金额为 ' + that.selectGame.TMax + ' 元');
                    else if (this.userInfo.Balance < that.form.amount)
                        return that.$toast.fail('主账户余额不足');
                }
                that.subimtData()
            },
            subimtData() {
                let that = this;
                that.$toast.loading({
                    mask: true,
                    message: '提交中...',
                    duration: 0
                });
                transferSccounts(that.form).then(data => {
                    that.$toast.clear()
                    if (data.IsSucess) {
                        that.form.amount = '';
                        that.refreshSelf(that.selectGame);//刷新当前余额
                        that.$toast.success('转账成功');
                        this.getUserBalance();//刷新账户余额
                    } else
                        that.$toast.fail(data.Message);

                })
            },
            getGameData() {
                let that = this;
                getGameThirdMoney().then(data => {
                    if (data.IsSucess) {
                        that.thirdBalance = data.Data
                        data.Data.forEach(item => {
                            for (let x = 0; x < that.gameList.length; x++) {
                                if (item.GameId == that.gameList[x].GameId) {
                                    let obj = that.gameList[x];
                                    obj.load = false
                                    that.$set(that.gameList, x, obj)
                                }
                            }
                        })
                    } else
                        this.$toast.fail(data.Message)
                })
            },
            onConfirm(value) {
                this.showType = false;
                this.typeValue = value.name
                this.form.type = value.type
            },
            onGameChange(value) {
                let that = this;
                this.showGame = false;
                this.selectGame = value
                this.form.game = value.GameId
                this.form.plat = value.PlatID
                this.form.amount = '';
                this.gameValue = value.CN_Name;


            },
            //单个刷新
            refreshSelf(item) {
                let that = this;
                that.currentIndex = item.GameId
                getGameThirdMoneySelf(item.GameId).then(data => {
                    if (data.IsSucess) {
                        that.currentIndex = null
                        that.thirdBalance.forEach((r, index) => {
                            if (r.GameId == item.GameId) {
                                that.thirdBalance[index].Balance = data.Data;
                            }
                        })
                    } else
                        that.$toast.fail(data.Message);
                })
            }
        },
        filters: {
            //通过id得到金额
            getMoney(id, arr) {
                let money = 0;
                arr.forEach(item => {
                    if (id == item.GameId) {
                        money = item.Balance;
                    }
                })
                return money
            },
        },
        mounted() {
            this.typeValue = this.columns[0].name
        }
    }
</script>

<style lang="less" scoped>

    .zhuanzhang {
        .sf_money_div {
            font-size: .35rem;
            width: 9.2rem;
            margin: .4rem auto .1rem;

            .item-list {
                width: 100%;
                display: flex;
                flex-flow: wrap;
                justify-content: flex-start;
                text-align: center;
            }

            .money_item {
                margin-right: 0.26666rem;
                width: 2.85333rem;
                height: 1.79333rem;
                border-radius: 0.13333rem;
                background-color: #f7f7f7;
                margin-bottom: 0.25rem;

                &:nth-child(3n) {
                    margin-right: 0;
                }

                div.reload {
                    width: 1.56666rem;
                    margin: 0px auto;
                    height: .5rem;
                    line-height: .5rem;
                    text-align: center;
                    font-size: 0.26666rem;
                    background-color: #f3f3f3;
                    color: #999;
                    border-radius: 0.15rem;
                    border: 0.01333rem solid #dfdfdf;
                    margin-top: .1rem;

                }

            }
        }
    }


</style>

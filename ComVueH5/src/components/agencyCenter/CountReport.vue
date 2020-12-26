<template>
    <div class="form_content_view count_report">
        <div class="scroll">
            <my-title title-val="统计报表" :isShowLeftText="false"></my-title>
            <div class="container">
                <div class="total_area">
                    <div class="total_item">
                        <label>在线/团队</label>
                        <label>{{data.OnLine}}/{{data.TeamCount}}人</label>
                    </div>
                    <div class="total_item">
                        <label>24小时投注</label>
                        <label>{{data.BetCount}}人</label>
                    </div>
                    <div class="total_item">
                        <label>团队余额</label>
                        <label>{{data.TeamBlance}}元</label>
                    </div>
                </div>
                <div class="date_choose">
                    <div ref="day_cur" class="date_choose_item date_choosed" @click="switchTime('day_cur')">
                        <label>当天</label>
                    </div>
                    <div ref="day_last" class="date_choose_item" @click="switchTime('day_last')">
                        <label>昨天</label>
                    </div>
                    <div ref="day_last_last" class="date_choose_item" @click="switchTime('day_last_last')">
                        <label>前天</label>
                    </div>
                    <div ref="month" class="date_choose_item" @click="switchTime('month')">
                        <label>{{getMonthText()}}</label>
                    </div>
                </div>
                <div class="list">
                    <div class="list_item">
                        <label>新充值/新增</label>
                        <label>{{chooseTimeData.NewUserCharge}}/{{chooseTimeData.NewUser}}</label>
                    </div>
                    <div class="list_item">
                        <label>当前投注金额/单数</label>
                        <label>{{data.NowTZMoney}}/{{data.NowTZCount }}</label>
                    </div>
                    <div class="list_item" style="background-color: #e30000">
                        <label style="color: white">总盈利</label>
                        <label style="color: white">{{chooseTimeData.AllWin}}</label>
                    </div>
                    <div class="list_item">
                        <label>存款总额/单数</label>
                        <label>{{chooseTimeData.CashIn}}/{{chooseTimeData.InCount}}</label>
                    </div>
                    <div class="list_item">
                        <label>取款总额/单数</label>
                        <label>{{chooseTimeData.CashOut}}/{{chooseTimeData.OutCount}}</label>
                    </div>
                    <div class="list_item">
                        <label>充值差额</label>
                        <label>{{chooseTimeData.CashIn - chooseTimeData.CashOut}}</label>
                    </div>
                    <div class="list_item">
                        <label>彩票有效投注额/单数</label>
                        <label>{{chooseTimeData.TZMoney}}/{{chooseTimeData.TZCount }}</label>
                    </div>
                    <div class="list_item">
                        <label>彩票中奖金额/单数</label>
                        <label>{{chooseTimeData.BonusMoney }}/{{chooseTimeData.BonusCount }}</label>
                    </div>
                    <div class="list_item">
                        <label>彩票返点</label>
                        <label>{{chooseTimeData.Rebate}}</label>
                    </div>
                    <div class="list_item">
                        <label>活动金额</label>
                        <label>{{chooseTimeData.Activity}}</label>
                    </div>
                    <div class="list_item" style="background-color: #008573">
                        <label style="color: white">彩票盈利</label>
                        <label style="color: white">{{chooseTimeData.Win}}</label>
                    </div>
                    <div class="list_item">
                        <label>第三方投注额</label>
                        <label>{{chooseTimeData.ThirdBet }}</label>
                    </div>
                    <div class="list_item">
                        <label>第三方中奖额</label>
                        <label>{{chooseTimeData.ThirdWin }}</label>
                    </div>
                    <div class="list_item">
                        <label>第三方返水</label>
                        <label>{{chooseTimeData.ThirdRebate }}</label>
                    </div>
                    <div class="list_item" style="background-color: #008573">
                        <label style="color: white">第三方盈利</label>
                        <label style="color: white">{{chooseTimeData.ThirdAllWin }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {postAjax} from '../../util/ajaxjson'

    export default {
        name: "countReport",
        data() {
            return {
                //总数据
                data: {
                    IsSucess: true,
                    Message: "Success",
                    Data: '',
                    OnLine: 0,
                    BetCount: 0,
                    TeamCount: 1,
                    TeamBlance: 800000,
                    NowTZMoney: 0,
                    NowTZCount: 0,
                    Items: [
                        {
                            Type: 0,
                            CashIn: 0,
                            InCount: 0,
                            CashOut: 0,
                            OutCount: 0,
                            TZMoney: 0,
                            TZCount: 0,
                            BonusMoney: 0,
                            BonusCount: 0,
                            Rebate: 0,
                            Activity: 0,
                            Win: 0,
                            NewUser: 0,
                            NewUserCharge: 0,
                            ThirdBet: "0/0",
                            ThirdWin: "0/0",
                            ThirdRebate: 0,
                            ThirdAllWin: 0,
                            AllWin: 0,
                        }
                    ]
                },

                // 选中时间段的数据
                chooseTimeData: {
                    Type: 1,
                    CashIn: 0,
                    InCount: 0,
                    CashOut: 0,
                    OutCount: 0,
                    TZMoney: 0,
                    TZCount: 0,
                    BonusMoney: 0,
                    BonusCount: 0,
                    Rebate: 0,
                    Activity: 0,
                    Win: 0,
                    NewUser: 0,
                    NewUserCharge: 0,
                    ThirdBet: "0/0",
                    ThirdWin: "0/0",
                    ThirdRebate: 0,
                    ThirdAllWin: 0,
                    AllWin: 0,
                }
            }
        },
        created() {
            this.$toast.loading({message: '正在加载...', duration: 0})
            postAjax('api/Proxy/GetReport').then((data) => {
                this.$toast.clear()
                if (data.IsSucess)
                    this.data = data.Data;
                else
                    this.$toast.fail(data.Message);
            })
        },
        methods: {
            getMonthText() {
                let now = new Date();
                let date = new Date(now.getFullYear() + "-" + (now.getMonth() + 1) + "-04 03:00:00");
                if (now < date) return "上月";
                else
                    return "本月";
            },
            /**
             * 切换tab栏
             */
            switchTime(time) {
                let nameArr = ['day_cur', 'day_last', 'day_last_last', 'month']
                nameArr.forEach((name, index) => {
                    if (name == time) {
                        this.$refs[name].classList.add('date_choosed')
                        this.chooseTimeData = this.data.Items[index];
                    } else {
                        this.$refs[name].classList.remove('date_choosed')
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .count_report {

        .container {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            .total_area {
                width: 100%;
                background-color: white;
                display: flex;
                justify-content: space-between;
                flex: 1;
                padding: 0.2667rem 0.3rem 0.2667rem 0.3rem;

                .total_item {
                    display: flex;
                    background-color: #edfffd;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 1.4267rem;
                    width: 2.96rem;
                    border-style: solid;
                    border-width: 0.01333rem;
                    border-color: #9fdfd6;
                }

                .total_item label:nth-child(2) {
                    color: #008573;
                    margin-top: 0.1333rem;
                }

            }

            .date_choose {
                display: flex;
                width: 100%;
                background-color: white;

                .date_choose_item {
                    width: 25%;
                    height: 0.9867rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    label {
                        font-size: 0.34666rem;
                        color: #999;
                    }
                }

                .date_choosed {
                    border-style: solid;
                    border-width: 0px 0px 0.05333rem 0px;
                    border-color: #008573;

                    label {
                        color: #008573;
                    }

                }

            }

            .list {
                width: 100%;
                margin-top: .25rem;

                .list_item {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    height: 1rem;
                    align-items: center;
                    background-color: white;
                    border-style: solid;
                    border-width: 0px 0px 0.01333rem 0px;
                    border-color: #ebebeb;
                    padding-left: 0.4rem;
                    padding-right: 0.5333rem;

                    label {
                        font-size: 0.32rem;
                    }
                }
            }

        }

        label {
            font-size: 0.32rem;
        }
    }


</style>

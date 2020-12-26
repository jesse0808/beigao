<template>
    <div class="form_content_view grkuiying_record">
        <div class="scroll">
            <my-title title-val="盈亏统计"></my-title>
            <div class="nav">
                <div v-for="(item,index) in moneyData" :key="index" :class="selectStatus ===index?'selectNav':'unSlectNav'"
                     @click="setSelect(index)">
                    <span>{{item.Time}}</span>
                </div>
            </div>
            <div class="data_panel" v-if="nowDataItem">
              <div class="data_item">
                  <span >亏盈总额</span>
                  <span :class="getMoneyColorClass(nowDataItem.KuiYing)">{{nowDataItem.KuiYing|filterMoney()}} 元</span>
              </div>
                <div class="data_item">
                    <span >存款总额</span>
                    <span >{{nowDataItem.AllCzMoney|filterMoney()}} 元</span>
                </div>
                <div class="data_item">
                    <span >取款总额</span>
                    <span >{{nowDataItem.AllTkMoney|filterMoney()}} 元</span>
                </div>
                <div class="data_item">
                    <span >彩票投注</span>
                    <span >{{nowDataItem.AllCpYxTzMoney|filterMoney()}} 元</span>
                </div>
                <div class="data_item">
                    <span >彩票中奖</span>
                    <span >{{nowDataItem.AllCpZjMoney|filterMoney()}} 元</span>
                </div>
                <div class="data_item">
                    <span >彩票返点</span>
                    <span >{{nowDataItem.AllCpFdMoney|filterMoney()}} 元</span>
                </div>
                <div class="data_item">
                    <span >三方投注</span>
                    <span >{{nowDataItem.DsfTzMoney|filterMoney()}} 元</span>
                </div>
                <div class="data_item">
                    <span >三方中奖</span>
                    <span >{{nowDataItem.DsfZjMoney|filterMoney()}} 元</span>
                </div>
                <div class="data_item">
                    <span >三方返水</span>
                    <span >{{nowDataItem.AllSfFsMoney|filterMoney()}} 元</span>
                </div>
                <div class="data_item">
                    <span >活动奖励</span>
                    <span >{{nowDataItem.AllJlMoney|filterMoney()}} 元</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {profitAndLossQuery} from "../../../util/statistics";

    export default {
        name: "moneyFrom",
        data() {
            return {
                selectStatus: 0,//当前展示数据的索引
                moneyData: [],//数据集合
                nowDataItem: null,//当前展示的数据
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                let that = this;
                that.$toast.loading({message: '加载中...', duration: 0})
                profitAndLossQuery().then(data => {
                    that.$toast.clear()
                    if (data.IsSucess) {
                        that.moneyData = data.Data;
                        that.nowDataItem = that.moneyData [that.selectStatus];
                    } else
                        that.$toast.fail(data.Message);
                })
            },
            //导航切换
            setSelect(num) {
                this.selectStatus = num
                this.nowDataItem = this.moneyData [this.selectStatus];
            },
            getMoneyColorClass(money) {
                if (money>0) {
                    return 'status_color_1'
                }else
                    return 'status_color_2';

            }
        },
        filters: {
            filterMoney(val) {
                if (val)
                    return Number(val).toFixed(3);
                else
                    return Number(0).toFixed(3);
            }
        }
    }
</script>

<style lang="less" scoped>
    .grkuiying_record {
        .nav {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 1.04rem;
            line-height: 1.75rem;
            background-color: #ffffff;
            overflow: hidden;

            .selectNav {
                color: #008573;
                font-size: 0.34666rem;
                border-bottom: 0.05333rem solid #008573;
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                box-sizing: content-box;
            }

            .unSlectNav {
                font-size: 0.34666rem;
                color: #999;
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
            }



            .data_div {
                width: 9.4rem;
                background-color: #ffffff;
                margin: 0 auto;
                box-shadow: 0 0.05rem 0.2rem rgba(0, 0, 0, 0.3);
                font-size: .35rem;
                border-radius: .13333rem;

                .data_item {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 1.2rem;
                    padding-left: .4rem;

                    span {
                        display: inline-block;
                        width: 3.2rem;
                        text-align: left;

                        strong {
                            color: #ff7b0e;
                        }
                    }
                }
            }
        }
        .data_panel{
            margin-top: 0.2667rem;
            background-color: white;
            .data_item{
                height:.96rem;
                padding:0 .4rem;
                display: flex;
                justify-content:space-between;
                align-items: center;
                border-bottom: 0.01333rem solid #ebebeb;
                span:first-child{
                    color: #000;
                }
            }
        }
        .list_item {
            border-bottom: 0.025rem solid #eee;
            font-size: 0.3467rem !important;
            height: 0.96rem;
            color: #333333 !important;
        }
    }

</style>

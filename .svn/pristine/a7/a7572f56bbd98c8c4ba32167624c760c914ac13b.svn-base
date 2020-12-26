<template>
    <div class="lottery_nav">
        <my-title :title-type=3 titleVal="选择彩种" ></my-title>
        <div class="nav_panel">
            <div class="div_box" v-for="(item,index) in lotteryNav">
                <div class="title" >{{item.NvgName}}</div>
                <div class="div_panel">
                    <a href="javascript:void(0)" :class="[lg.LgId==LgId?'select_a':'']" @click="changeTo(lg)" v-for="(lg,row) in item.LotteryList">{{lg.Name}}</a>
                    <template v-if="item.LotteryList.length%3==1">
                        <a class="empt_a" href="javascript:void(0)"></a>
                        <a class="empt_a" href="javascript:void(0)"></a>
                    </template>
                    <template v-if="item.LotteryList.length%3==2">
                        <a class="empt_a" href="javascript:void(0)"></a>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {GoLotteryGame} from "../../../util/game";
    export default {
        name: "index",
        data() {
            return {
                LgId: 0, //彩种id
            }
        },
        computed: {
            lotteryNav(){//所有彩票信息
                return this.$store.state.lotteryData;
            }
        },
        created() {
            this.LgId = this.$route.query.LgId
        },
        methods: {
            changeTo(data) {
                GoLotteryGame(data);
            },
        }
    }
</script>

<style lang="less" scoped>
    .lottery_nav {
        padding-top:1.17777rem ;
        .nav_panel{
            overflow-y: auto;
            height: 100%;
            background-color: #edefef;
            padding: 0.34666rem;
            .div_box{
                border-bottom: 0.01333rem solid #dfdfdf;
                color:#333333 ;
                margin-top: 0.4rem;
                &:last-child{
                    border-bottom:none;
                }
                &:first-child{
                    margin-top: 0;
                }
                .title{
                    text-align:left;
                    font-size: 0.34666rem;
                    font-weight: bold;
                }
                .div_panel{
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    padding-bottom:0.26666rem ;
                    justify-content: space-between;
                    a{
                        display: inline-block;
                        width: 2.5rem;
                        height: 0.8rem;
                        line-height: 0.8rem;
                        text-align: center;
                        font-size: .32rem;
                        background-color: white;
                        border: 0.01333rem solid #dddfdf;
                        margin: 0.26666rem 0 0 0;
                        color:#333333 ;
                        border-radius: 0.06666rem;
                        &:nth-child(3n) {
                            margin-right: 0;
                        }
                    }
                    .empt_a{
                        background-color: #edefef;
                        border: none;
                    }
                    .select_a{
                        background-color: #008573;
                        color: white;
                    }
                }
            }
        }

    }
</style>

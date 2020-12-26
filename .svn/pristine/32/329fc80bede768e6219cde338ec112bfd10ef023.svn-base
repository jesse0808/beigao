<template>
    <div class="lottery_box">
        <div class="title_nav">
            <a href="javascript:void(0)" :class="[index === checkId?'check_a':'uncheck_a']"
               v-for="(item,index) in lotteryNav" @click="clickSsc(index)" :key="index">{{item.NvgName}}</a>
        </div>
        <div class="lottery_div">
            <a href="javascript:void(0)" v-for="(item,index) in lotteryData" @click="changeTo(item)" :key="index">
                <div>
                    <!--<img alt="" v-lazy="url + item.H5Ico" >-->
                    <van-image lazy-load :src="url+item.H5Ico"/>
                </div>
                <span>{{item.Name}}</span>
            </a>
        </div>
    </div>
</template>

<script>
    import {SysKey} from "../../../util/sysconfig";
    import {GoLotteryGame} from "../../../util/game";
    export default {
        name: "index",
        data() {
            return {
                checkId: 0,//选中的彩种序列号
                lotteryData: [],//当前选中的彩票数据
                kfUrl: SysKey("KfCenterUrl").SysValue,
            }
        },
        watch: {
            checkId() {
                this.disposeData()
            }
        },
        computed: {
            lotteryNav(){//所有彩票信息
                return this.$store.state.lotteryData;
            },
            url() {
                return SysKey("ImgServerUrl").SysValue
            },
        },
        created() {
            let that = this;
            let glotteryIndex= Number(sessionStorage.getItem("glotteryIndex"));
            if (glotteryIndex!=this.checkId )
                this.checkId =glotteryIndex //改变checkId的值会触发 checkId()方法
            else
                this.disposeData();

        },
        methods: {
            clickSsc(index) {
                this.checkId = Number(index)
                sessionStorage.setItem("glotteryIndex", this.checkId)
            },
            disposeData() {
                this.lotteryData = this.lotteryNav[this.checkId].LotteryList
            },
            changeTo(data) {
                GoLotteryGame(data);
            },
        }
    }
</script>

<style lang="less" scoped>
    .lottery_box {
        position: relative;
        width: 100%;
        padding-top: 3.07997rem;

        .title_nav {
            position: fixed;
            top: 2.39999rem;
            left: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
            padding: 0 .1rem .41333rem;
            border-bottom: solid 0.01333rem #dbdbdb;
            background-color: #fff;
            z-index: 10;

            a {
                display: inline-block;
                width: 2.21333rem;
                height: 1.06666rem;
                line-height: 1.06666rem;
                font-size: .34666rem;
                border-radius: .53333rem;
                margin-top: .26666rem;
            }

            .check_a {
                color: #ffffff;
                background-color: #008573;
            }

            .uncheck_a {
                color: #999999;
                background-color: #eff1f1;
            }
        }

        .lottery_div {
            width: 100%;
            padding: .4rem 0 0;
            text-align: left;

            a {
                display: inline-block;
                width: 33.3%;
                height: 2.8rem;
                text-align: center;
                font-size: 0;

                div {
                    width: 1.72rem;
                    height: 1.72rem;
                    margin: 0 auto .24rem;
                    font-size: 0;
                    border-radius: 50%;
                    overflow: hidden;

                    img {
                        width: 100%;
                    }
                }

                span {
                    font-size: .32rem;
                    color: #333333;
                }
            }
        }
    }
</style>

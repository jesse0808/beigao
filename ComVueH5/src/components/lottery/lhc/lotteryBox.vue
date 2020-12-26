<template>
    <div class="lhc_box">
        <div class="game_box">
            <div class="game_div">
                <div class="title">{{showObj.title}}</div>
                <div class="game_content" v-if="showPageId === 0">
                    <a :class="[item.state?'check_lhc_a':'']" @click="clickEven(index)" href="javascript:void(0)"
                       v-for="(item,index) in showObj.boxArr" :key="index">
                        <div :class="item.bgColor">
                            <p>{{item.value}}</p>
                            <span>&#935;{{item.odds}}</span>
                        </div>
                    </a>
                </div>
                <div class="game_content_bb" v-if="showPageId === 1">
                    <a :class="[item.state?'check_lhc_bb':'']" @click="clickEven(index)" href="javascript:void(0)"
                       v-for="(item,index) in showObj.boxArr" :key="index">
                        <p><span class="name">{{item.value}}</span>&ensp;&#935;<span class="odds">{{item.odds}}</span>
                        </p>
                        <div class="bb">
                            <span :class="item.bgColor" v-for="(val,num) in item.num" :key="num">{{val}}</span>
                        </div>
                    </a>
                </div>
                <div class="game_content_bb" v-if="showPageId === 2">
                    <a :class="[item.state?'check_lhc_bb':'']" @click="clickEven(index)" href="javascript:void(0)"
                       v-for="(item,index) in showObj.boxArr" :key="index">
                        <p><span class="name">{{item.value}}</span>&ensp;&#935;<span class="odds">{{item.odds}}</span>
                        </p>
                        <div class="sx">
                            <span :class="item.titleImg" style="margin-right: .3rem"></span>
                            <span :class="val.bgColor" v-for="(val,num) in item.num" :key="num">{{val.value}}</span>
                        </div>
                    </a>
                </div>
                <div class="game_content_bb" v-if="showPageId === 3">
                    <a :class="[item.state?'check_lhc_bb':'']" @click="clickEven(index)" href="javascript:void(0)"
                       v-for="(item,index) in showObj.boxArr" :key="index">
                        <p><span class="name">{{item.value}}</span>&ensp;&#935;<span class="odds">{{item.odds}}</span>
                        </p>
                        <div class="sx">
                            <span :class="[returnClass(val)]" v-for="(val,num) in item.num" :key="num">{{val}}</span>
                        </div>
                    </a>
                </div>
                <div class="game_content_zc" v-if="showPageId === 4">
                    <a :class="[item.state?'check_lhc_bb':'']" @click="clickEven(index)" href="javascript:void(0)"
                       v-for="(item,index) in showObj.boxArr" :key="index">
                        <span class="title_zf">{{item.value}}</span>
                        <span class="odds_zf"><span style="font-size: .25rem">&#935;</span>{{item.odds}}</span>
                        <span class="text_zf">{{item.text}}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gameData from '../../../util/lhcData'
    import {returnBetData} from "../../../util/displseLhc";

    export default {
        name: "lotteryBox",
        props: {
            gameClass: {//1 时时彩 2 PK10 3 十一选五 4 福彩快三 5 PC蛋蛋 6 低频彩
                type: [Number, String],
                required: true
            },
            gameId: {//当前选中次级导航ID
                type: [Number, String],
                required: true
            },
            thisGameInfo: {
                type: Object,
                required: false
            },
        },
        data() {
            return {
                showObj: {},
            }
        },
        created() {
        },
        watch: {
            gameId(val) {
                if (this.showPageId === 0 || this.showPageId === 1 || this.showPageId === 3 || this.showPageId === 4) {
                    this.showObj = gameData[val]
                }
            },
            thisGameInfo(val) {
                if (this.showPageId === 0 || this.showPageId === 1 || this.showPageId === 3 || this.showPageId === 4) {
                    this.showObj.boxArr.forEach(item => {
                        val.PlayContentList.forEach(x => {
                            if (item.value == x.Content) {
                                item.odds = x.Odds
                            }
                        })
                    })
                } else if (this.showPageId === 2) {
                    let data = this.thisGameInfo.PlayContentList.map((item, index) => {
                        let oldArr = item.Content.split('|');
                        let arr = oldArr[1].split(',').map(val => {
                            return {
                                value: val,
                                bgColor: this.returnClass(val)
                            }
                        });
                        return {
                            value: oldArr[0],
                            odds: item.Odds,
                            state: false,
                            titleImg: this.returnImg(index),
                            num: arr
                        }
                    });
                    this.showObj = {
                        title: this.thisGameInfo.Name || '',
                        boxArr: data
                    }
                }
            }
        },
        computed: {
            showPageId() {
                if (this.gameId == 240 || this.gameId == 241 || this.gameId == 242 || this.gameId == 243 || this.gameId == 244 || this.gameId == 245 || this.gameId == 246 || this.gameId == 253 || this.gameId == 254 || this.gameId == 255 || this.gameId == 256 || this.gameId == 257 || this.gameId == 258) {
                    return 0
                } else if (this.gameId == 247) {
                    return 1
                } else if (this.gameId == 248 || this.gameId == 249 || this.gameId == 250) {
                    return 2
                } else if (this.gameId == 251) {
                    return 3
                } else if (this.gameId == 252) {
                    return 4
                }
            }
        },
        methods: {
            clickEven(index) {
                this.showObj.boxArr[index].state = !this.showObj.boxArr[index].state;
                this.filterData();
            },
            filterData: function () {
                let data = returnBetData(this.gameId, this.showObj.boxArr);
                this.$emit('selectReturnData', data)
            },
            resetData() {
                if (this.showObj.boxArr) {
                    this.showObj.boxArr.forEach(item => {
                        item.state = false
                    });
                }
                this.$emit('selectReturnData', {data: '', num: 0});
            },
            //返回球的颜色
            returnClass(str) {
                let num = Number(str);
                if (num === 1 || num === 2 || num === 7 || num === 8 || num === 12 || num === 13 || num === 18 || num === 19 || num === 23 || num === 24 || num === 29 || num === 30 || num === 34 || num === 35 || num === 40 || num === 45 || num === 46) {
                    return 'red_qiu'
                }
                if (num === 3 || num === 4 || num === 9 || num === 10 || num === 14 || num === 15 || num === 20 || num === 25 || num === 26 || num === 31 || num === 36 || num === 37 || num === 41 || num === 42 || num === 47 || num === 48) {
                    return 'blue_qiu'
                }
                if (num === 5 || num === 6 || num === 11 || num === 16 || num === 17 || num === 21 || num === 22 || num === 27 || num === 28 || num === 32 || num === 33 || num === 38 || num === 39 || num === 43 || num === 44 || num === 49) {
                    return 'green_qiu'
                }
            },
            returnImg(str) {
                let num = Number(str);
                if (num === 0) {
                    return 'shu_sx'
                } else if (num === 1) {
                    return 'niu_sx'
                } else if (num === 2) {
                    return 'hu_sx'
                } else if (num === 3) {
                    return 'tu_sx'
                } else if (num === 4) {
                    return 'long_sx'
                } else if (num === 5) {
                    return 'she_sx'
                } else if (num === 6) {
                    return 'ma_sx'
                } else if (num === 7) {
                    return 'yang_sx'
                } else if (num === 8) {
                    return 'hou_sx'
                } else if (num === 9) {
                    return 'ji_sx'
                } else if (num === 10) {
                    return 'gou_sx'
                } else if (num === 11) {
                    return 'zhu_sx'
                } else {
                    return ''
                }
            },
            //清除全部
            clearAllCheck() {
                this.showObj.boxArr.forEach((item, index) => {
                    item.state = false
                });
                this.$emit('selectReturnData', {data: '', num: 0});
            },
            //玩法提示
            playTip() {
                let play = gameData[this.gameId];
                if (play != null) {
                    this.$dialog.alert({
                        messageAlign: "left",
                        closeOnClickOverlay: true,
                        message: `${play.hintText}`
                    });
                } else
                    this.$dialog.alert({message: `玩法提示`})
            },
        }
    }
</script>

<style lang="less" scoped>
    .lhc_box {
        width: 100%;
        background-color: #eeeeee;

        .game_box {
            width: 100%;
            padding-top: .3rem;

            .game_div {
                width: 9.46666rem;
                margin: 0 auto;
                background-color: #ffffff;
                box-shadow: 0 0 .10666rem 0 rgba(0, 0, 0, 0.17);
                border-radius: .13333rem;

                .title {
                    width: 8.93333rem;
                    height: 1.05rem;
                    margin: 0 auto;
                    line-height: 1.05rem;
                    font-size: .37333rem;
                    text-align: left;
                    color: #000000;
                    border-bottom: solid .01333rem #ebebeb;
                }

                .game_content_zc {
                    width: 100%;
                    padding: .33333rem .13rem .1rem;

                    a {
                        display: flex;
                        align-items: center;
                        width: 8.88rem;
                        height: 1.54666rem;
                        margin: 0 auto .26666rem;
                        background-color: #fcfcfc;
                        border-radius: .06666rem;
                        border: solid .02666rem #dbdbdb;

                        .title_zf {
                            display: inline-block;
                            width: 1.3rem;
                            font-size: .45333rem;
                            color: #000000;
                        }

                        .odds_zf {
                            position: relative;
                            display: inline-block;
                            width: 1.2rem;
                            height: .8rem;
                            line-height: .88rem;
                            font-size: .45333rem;
                            color: #000000;
                            border-left: solid .01333rem #a9b9b7;
                            border-right: solid .01333rem #a9b9b7;
                        }

                        .text_zf {
                            padding-left: .2rem;
                            font-size: .30666rem;
                            color: #666666;
                        }
                    }
                }

                .game_content_bb {
                    width: 100%;
                    text-align: left;
                    padding: .33333rem .13rem .1rem;

                    a {
                        display: block;
                        width: 8.8rem;
                        height: 2.06666rem;
                        margin: 0 auto .33333rem;
                        padding: .2rem;
                        background-color: #fcfcfc;
                        border-radius: .06666rem;
                        border: solid .02666rem #dbdbdb;
                        font-size: 0;

                        p {
                            font-size: .25rem;
                            color: #666666;

                            .name {
                                font-size: .4rem;
                                color: #000000;
                            }

                            .odds {
                                font-size: .32rem;
                                color: #333333;
                            }
                        }

                        .bb {
                            margin-top: .18666rem;
                            text-align: left;

                            span {
                                display: inline-block;
                                width: .74666rem;
                                height: .74666rem;
                                margin-right: .08rem;
                                line-height: .746666rem;
                                text-align: center;
                                border-radius: 50%;
                                font-size: .36rem;
                                color: #ffffff;
                            }
                        }

                        .sx {
                            margin-top: .18666rem;
                            text-align: left;

                            span {
                                display: inline-block;
                                width: .8rem;
                                height: .8rem;
                                margin-right: .08rem;
                                line-height: .8rem;
                                text-align: center;
                                border-radius: 50%;
                                font-size: .36rem;
                                color: #ffffff;
                                vertical-align: top;
                            }
                        }
                    }
                }

                .game_content {
                    width: 100%;
                    text-align: left;
                    padding: .33333rem .13rem 0;

                    a {
                        display: inline-block;
                        width: 1.24rem;
                        height: 1.24rem;
                        margin: 0 .29333rem .52rem;
                        border-radius: .33333rem;
                        overflow: hidden;
                        background-color: black;

                        div {
                            width: 1.24rem;
                            height: 1.24rem;
                            padding-top: .13rem;
                            text-align: center;
                            font-size: 0;

                            p {
                                line-height: .7rem;
                                font-size: .61333rem;
                                letter-spacing: 1px;
                                color: #ffffff;
                            }

                            span {
                                font-size: .28rem;
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="jiDian_box">
        <div class="game_box">
            <div class="game_div" v-for="(item,index) in showPlayArr">
                <div class="wei_title">{{item.Alias}}</div>
                <div :class="`game_content ${getGameClass(item)}`">
                    <a href="javascript:void(0)" @click="clickEven(p)" v-for="(p,row) in item.PlayContentList"
                       :key="row" :class="[p.state?'select_a':'']">
                        <span class="title">{{p.Content}}</span>
                        <span class="money">&#935;{{p.Odds}}</span>
                    </a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "lotteryBox",
        props: {
            gameClass: {//1 时时彩 2 PK10 3 十一选五 4 福彩快三 5 PC蛋蛋 6 低频彩
                type: [Number, String],
                required: true
            },
            thisGameInfo: {//当前导航数据对象 {navIndex:导航索引,navName:导航名称,playData:[]当前导航所有玩法集合api返回的}
                type: Object,
                required: true
            },
        },
        data() {
            return {
                showPlayArr: [],//当前界面显示用的玩法数据数组
            }
        },
        created() {
        },
        watch: {
            thisGameInfo() {
                //重置 showPlayObj 玩法数据
                this.thisGameInfo.playData.forEach(x => {
                    let newPcArr = [];
                    x.PlayContentList.forEach(y => {
                        let obj = Object.assign({state: false}, y);//给api对象加一个当前数字选中状态的属性
                        newPcArr.push(obj);
                    });
                    this.showPlayArr.push({
                        "LpId": x.LpId,
                        "Name": x.Name,
                        "Alias": x.Alias,
                        "PlayContentList": newPcArr
                    });
                });
              //  console.log(this.showPlayArr)
            }
        },
        methods: {
            //玩法球的点击事件
            clickEven: function (p) {
                p.state = !p.state;
                let returnData=[];
                //获得选中的数据
                this.showPlayArr.forEach((item) => {
                    item.PlayContentList.forEach((p=>{
                        if(p.state)
                            returnData.push({"LpId":item.LpId,"PlayName":item.Name,"BetContent":p.Content});
                    }));
                });
                this.$emit('selectReturnData', returnData);//发送给footinfo组件
            },
            //重置数据
            resetData() {
                this.showPlayArr.splice(0);
                this.$emit('selectReturnData', []);
            },
            //获取当前玩法投注球面板样式名 控制一行显示几个数字球
            getGameClass: function (play) {
                if (play.LpId == 191 || play.LpId == 192 || play.LpId == 193 || play.LpId == 194 || play.LpId == 195
                    || play.LpId == 196 || play.LpId == 211 || play.LpId == 212 || play.LpId == 213 || play.LpId == 214
                    || play.LpId == 215 || play.LpId == 216|| play.LpId == 217|| play.LpId == 218|| play.LpId == 219
                    || play.LpId == 220 || play.LpId == 221)
                    return "game_cell_4";
                else if (play.LpId == 200 || play.LpId == 201 || play.LpId == 202 || play.LpId == 203 || play.LpId == 204
                    || play.LpId == 205 || play.LpId == 206 || play.LpId == 207 || play.LpId == 208 || play.LpId == 209)
                    return "game_cell_3";
                else if (play.LpId == 235 || play.LpId == 236 || play.LpId == 237 || play.LpId == 238 || play.LpId == 239)
                    return "game_cell_2";
                else
                    return "game_cell_5";
            },
            //清除全部
            clearAllCheck() {
                this.showPlayArr.forEach((item) => {
                  item.PlayContentList.forEach((p=>{
                      p.state=false;
                  }));
                });
                this.$emit('selectReturnData', []);
            },
        }
    }
</script>

<style lang="less" scoped>
    .jiDian_box {
        width: 100%;
        background-color: #eeeeee;

        .game_box {
            width: 100%;
            padding-top: .3rem;

            .game_div {
                width: 9.46666rem;
                background-color: #ffffff;
                box-shadow: 0 0 0.10666rem 0 rgba(0, 0, 0, 0.17);
                border-radius: 0.13333rem;
                margin: 0 auto 0.30666rem auto;

                .wei_title {
                    width: 8.93333rem;
                    height: 1.05333rem;
                    margin: 0 auto;
                    line-height: 1.05333rem;
                    font-size: .37333rem;
                    text-align: left;
                    color: #333333;
                    border-bottom: solid .01333rem #ebebeb;
                }

                //球样式
                .game_content {
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    padding: 0 0.45333rem 0.32rem 0.45333rem;

                    a {
                        display: inline-block;
                        background-color: #fcfcfc;
                        border-radius: 0.08888rem;
                        border: solid 0.01333rem #dbdbdb;
                        font-size: 0;
                        color: #333333;
                        margin-top: 0.32rem;
                        height: 1.30666rem;

                        .title {
                            display: block;
                            font-size: 0.42666rem;
                            padding-top: 0.16666rem;
                        }

                        .money {
                            font-size: 0.26666rem;
                        }

                    }

                    .select_a {
                        background-color: #008573;
                        color: white;
                    }
                }

                //一排5个的球样式
                .game_cell_5 {
                    a {
                        width: 1.44rem;
                        margin-right: 0.33333rem;

                        &:nth-child(5n) {
                            margin-right: 0;
                        }
                    }
                }

                //一排4个的球样式
                .game_cell_4 {
                    a {
                        width: 1.84rem;
                        margin-right: 0.4rem;

                        &:nth-child(4n) {
                            margin-right: 0;
                        }
                    }
                }

                //一排3个的球样式
                .game_cell_3 {
                    a {
                        width: 2.64rem;
                        margin-right: 0.32rem;

                        &:nth-child(3n) {
                            margin-right: 0;
                        }
                    }
                }

                //一排2个的球样式
                .game_cell_2 {
                    a {
                        width: 4.17333rem;
                        height: 1.17333rem;
                        margin-right: 0.14666rem;

                        &:nth-child(2n) {
                            margin-right: 0;
                        }
                    }
                }

            }
        }
    }
</style>
<template>
    <div class="game_lobby">
        <div class="nav_top">
            <div class="title">游戏大厅</div>
            <div class="nav_fixed">
                <a href="javascript:void(0)" @click="checkedClick(index)"
                   :class="[checkNav === index?'check_nav':'uncheck_nav']" v-for="(item,index) in navFixed"
                   :key="index">{{item}}</a>
            </div>
        </div>
        <lotteryBox v-if="checkNav === 0"></lotteryBox>
        <people v-if="checkNav === 1"></people>
        <sports v-if="checkNav === 2"></sports>
        <chess v-if="checkNav === 3"></chess>
        <electronics v-if="checkNav === 4"></electronics>
        <fishing v-if="checkNav === 5"></fishing>
    </div>
</template>

<script>
    import lotteryBox from './lottery/index.vue'
    import people from './people/index.vue'
    import sports from './sports/index.vue'
    import chess from './chess/index.vue'
    import electronics from './electronics/index.vue'
    import fishing from './fishing/index.vue'

    export default {
        name: "index",
        components: {lotteryBox, people, sports, chess, electronics, fishing},
        data() {
            return {
                active: 0,
                showMaxNum: 6,
                navFixed: ['彩票', '真人', '体育', '棋牌', '电子', '捕鱼'],
                checkNav: 0
            }
        },
        watch: {
            checkNav() {

            }
        },
        methods: {
            checkedClick(num) {
                this.checkNav = Number(num)
               // sessionStorage.setItem("globbyIndex", this.checkNav)
            }
        },
        created(){
          // if(sessionStorage.getItem("globbyIndex"))
          //     this.checkNav=Number(sessionStorage.getItem("globbyIndex"))
        }
    }
</script>

<style lang="less" scoped>
    .game_lobby {
        width: 100%;
        padding-top: 2.39999rem;

        .nav_top {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 100;
            background-color: #008573;

            .title {
                width: 100%;
                height: 1.17333rem;
                line-height: 1.17333rem;
                background-color: #008573;
                text-align: center;
                font-size: .50666rem;
                letter-spacing: .05333rem;
                color: #ffffff;
            }

            .nav_fixed {
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: 1.22666rem;
                background-color: #008573;

                a {
                    width: 1.6rem;
                    height: 1.22666rem;
                    line-height: 1.22666rem;
                    font-size: .34666rem;
                    text-align: center;
                }

                .check_nav {
                    position: relative;
                    color: #fff298;

                    &:after {
                        content: '';
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: .17333rem;
                        margin: auto;
                        width: .84rem;
                        height: .04rem;
                        background-color: #fff298;
                    }
                }

                .uncheck_nav {
                    color: #fff;
                }
            }
        }
    }
</style>
<style>
    .game_lobby .van-tab__pane, .game_lobby .van-tabs__content {
        width: 100%;
        min-height: calc(100% - 3.68666rem) !important;
    }
</style>

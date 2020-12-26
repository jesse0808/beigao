<template>
    <div class="home_item">
        <div class="head">
            <!--            <div class="left_login">-->
            <!--                {{userInfo.LoginName}}-->
            <!--            </div>-->
            <div class="un_login">
                <div style="height: 0.85333rem;">
                    <img src="@/assets/img/home/logo_w.png" alt="贝捷娱乐">
                </div>
                <div v-if="loginStatus && tempUser">
                    <a href="javascript:void(0)" @click="userOut">退出</a>
                </div>
                <div style="height: 0.85333rem; display: flex;align-items: center" v-if="loginStatus && !tempUser">
                    <span class="iconfont icon-ren12" style="font-size: .4rem;"> {{userInfo.LoginName}}</span>
                </div>
                <div v-if="!loginStatus">
                    <router-link to="/login">登录</router-link>
                    <router-link to="/register" v-if="!inwebview">注册</router-link>
                    <a href="javascript:void(0)" @click="tryPlay">试玩</a>
                </div>
            </div>
        </div>
        <div class="fixed_top">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item class="swiper-demo-img" v-for="(item, index) in swiperData" :key="index">
                    <van-image lazy-load :src="url+item.Url"/>
                </van-swipe-item>
            </van-swipe>
            <div class="notice">
                <div class="content">
                    <span class="iconfont icon-laba"></span>
                    <van-swipe :autoplay="3000" vertical :show-indicators="false">
                        <van-swipe-item v-for="(item,index) in title" :key="index">
                            <span v-text="item.Title" @click="goGgInfo(item.SnId)"></span>
                        </van-swipe-item>
                    </van-swipe>
                    <span class="iconfont icon-you" @click="goGgList"></span>
                </div>
            </div>
            <div class="game_nav">
                <router-link to="/recharge">
                    <p class="p_ico"><span class="iconfont icon-chongzhi"></span></p>
                    <p class="p_text">在线充值</p>
                </router-link>
                <router-link to="/bettingRecord">
                    <p class="p_ico"><span class="iconfont icon-jilu"></span></p>
                    <p class="p_text">投注记录</p>
                </router-link>
                <router-link to="/activity">
                    <p class="p_ico"><span class="iconfont icon-liwu"></span></p>
                    <p class="p_text">优惠活动</p>
                </router-link>
                <a href="javascript:void(0)" @click="openkefu()">
                    <p class="p_ico"><span class="iconfont icon-kefu"></span></p>
                    <p class="p_text">在线客服</p>
                </a>
            </div>
        </div>
        <div class="game_box" style="margin-top: 7.32999rem;‬">
            <div class="game_box_head">
                <h1>热门彩种</h1>
                <span style="font-size: .32rem;color: #ff8d13;">左右滑动查看更多</span>
            </div>
            <!--<h1><img class="hot_img" src="@/assets/img/home/home_more.png" alt=""/></h1>-->
            <div class="">
                <van-tabs v-model="active" swipeable animated color="#ffffff">
                    <van-tab v-for="(item,index) in hotGameData" :key="index">
                        <div class="hot_lottery">
                            <a href="javascript:void(0)" class="lottery_a" v-for="(val,num) in item"
                               @click="changeTo(val)" :key="num">
                                <div>
                                    <!--<img v-lazy="url + val.H5Ico" alt="">-->
                                    <van-image lazy-load :src="url+val.H5Ico"/>
                                </div>
                                <p>{{val.Name}}</p>
                            </a>
                        </div>
                    </van-tab>

                </van-tabs>
            </div>
        </div>
        <div class="game_box">
            <div class="game_box_head">
                <h1>热门游戏</h1>
            </div>
            <div class="hot_game">
                <a href="javascript:void(0)" @click="clickHotGame(item)" v-for="(item,index) in hotGames" :key="index">
                    <!--<img v-lazy="url + item.Icon" alt="">-->
                    <div>
                        <van-image lazy-load :src="url+item.Icon"/>
                    </div>
                    <p>{{item.CN_Name}}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

    import {carouselImg} from "../../util/game";
    import {SysKey, OpenCustomer, InWebView, GetTempUser} from "../../util/sysconfig";
    import {getGameRouter, GoLotteryGame} from "../../util/game";


    export default {
        name: 'homeItem',
        components: {},
        data() {
            return {
                swiperData: [],//轮播信息
                title: [], //滚动公告
                hotGameData: [],//热门彩种
                active: 0,
                hotGames: [],//热门游戏
            }
        },
        created() {
            const that = this;
            that.getGameData();
            if (that.noticeInfo.length === 0) {
                setTimeout(function () {
                    that.setTitle();
                }, 1000)
            } else {
                that.setTitle();
            }
        },
        computed: {
            url() {
                return SysKey("ImgServerUrl").SysValue
            },
            noticeInfo() {
                return this.$store.state.noticeInfo;
            },
            userInfo() {
                return this.$store.state.userInfo;
            },
            loginStatus() {
                return this.$store.state.loginStatus;
            },
            tempUser() {
                if (this.userInfo.UtId == 3)
                    return true;
                else
                    return false;
            },
            inwebview() {
                return InWebView();
            }
        },
        watch: {},
        methods: {
            getHeadClass() {
                if (this.loginStatus) {
                    if (this.tempUser)
                        return "";
                    else
                        return "temp_login";
                } else
                    return "";

            },
            goGgList() {
                this.$router.push({path: '/notices'})
            },
            goGgInfo(ggid) {
                this.$router.push({path: '/noticeinfo', query: {SnId: ggid}})
            },
            tryPlay() {

                GetTempUser();
            },
            setTitle() {
                let that = this;
                this.noticeInfo.forEach((item, index) => {
                    that.title.push(item)
                });
            },
            getGameData() {
                let that = this;
                let hotLottery = that.$store.state.lotteryData;
                let hotGame = that.$store.state.thirdGames;
                that.hotGames = hotGame.filter((item, index) => {
                    if (item.IsHot) {
                        return item
                    }
                })
                let arr = [];
                hotLottery.forEach(item => {
                    let lottery = item.LotteryList;
                    for (let i = 0; i < lottery.length; i++) {
                        if (lottery[i].IsOpen && lottery[i].IsHot) {
                            arr.push(lottery[i])
                        }
                    }
                })
                let arrLength = []
                arr.forEach((item, index) => {
                    if (arr.length / 9 > index) {
                        arrLength.push(arr.slice(index * 9, index * 9 + 9))
                    }
                })
                that.hotGameData = arrLength
                //   console.log(that.hotGameData)

            },
            userOut() {
                let that = this;
                this.$dialog.confirm({
                    title: '',
                    message: '确认退出？'
                }).then(() => {
                    this.$store.dispatch('logout', this);
                    that.$router.replace('/login');
                }).catch(() => {
                    // on cancel
                });
            },
            //点击游戏
            clickHotGame(data) {
                if (data.HallCode === null) {
                    this.$router.push({path: '/gameBox', query: {id: data.GameId, name: data.Name}})
                } else {
                    getGameRouter(data)
                }
            },
            changeTo(data) {
                GoLotteryGame(data);
            },
            //打开客服
            openkefu() {
                OpenCustomer();
            },
        },
        mounted() {
            carouselImg().then(data => {
                this.swiperData = data
            })
        }
    }
</script>

<style lang="less" scoped>
    .home_item {
        width: 100%;
        height: auto;
        padding-top: 1.17333rem;

        .fixed_top {
            position: fixed;
            left: 0;
            right: 0;
            z-index: 10;
            background-color: #dbdbdb;
        }

        .van-swipe {
            width: 100%;
            height: 4.33333rem;
            font-size: 0;

            .van-image {
                width: 100%;
            }

            /deep/ .van-image__img {
                width: 100%;
                height: 4.33333rem;
            }
        }

        .notice {
            width: 100%;
            height: 1.17333rem;
            background-color: #ffffff;
            padding: .18666rem 0;
            display: flex;
            align-items: center;

            .content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 95%;
                height: .8rem;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: .4rem;

                .icon-laba {
                    color: #edb640;
                    /*margin-top: .1rem;*/
                }

                .van-swipe {
                    width: 90%;
                    height: .8rem;
                    padding-left: 0;
                    line-height: .8rem;
                    font-size: .32rem;
                    color: #666666;

                    .van-swipe-item {
                        text-align: left;
                        overflow: hidden;
                    }
                }

                .icon-you {
                    font-size: .2rem;
                    color: #989898;
                }
            }

        }

        .game_nav {
            display: flex;
            width: 100%;
            height: 1.8rem;
            justify-content: space-around;
            background-color: #ffffff;
            border-bottom: solid 0.01333rem #eaeaea;
            border-top: solid 0.01333rem #eaeaea;
            margin-top: -0.01333rem;

            a {
                display: inline-block;
                width: 1.52rem;
                text-align: center;
                font-size: 0;
                margin-top: .15rem;

                .p_ico {
                    height: 1rem;
                    line-height: 1rem;
                }

                .icon-chongzhi {
                    font-size: .8rem;
                    color: #ff8d13;
                }

                .icon-jilu {
                    font-size: .7rem;
                    color: #25b5ff;
                }

                .icon-liwu {
                    font-size: .7rem;
                    color: #f6495a;
                }

                .icon-kefu {
                    font-size: .8rem;
                    color: #14a340;
                }

                .p_text {
                    line-height: .34666rem;
                    font-size: .34666rem;
                    text-align: center;
                    color: #333333;
                }
            }
        }

        .game_box {
            width: 100%;
            margin-bottom: .26666rem;
            background-color: #ffffff;
            /*border-bottom: solid 0.01333rem #dbdbdb;*/

            &:last-child {
                border-bottom: 0px;
            }

            .game_box_head {
                display: flex;
                height: 1.14666rem;
                padding: 0 0.46666rem;
                justify-content: space-between;
                align-items: center;

                h1 {
                    /*padding: 0 .46666rem;*/
                    /*line-height: 1.14666rem;*/
                    font-size: .35rem;
                    /*letter-spacing: 1px;*/
                    color: #333333;
                    /*border-bottom: solid 1px #f2f2f2;*/
                    text-align: left;

                    .hot_img {
                        float: right;
                        width: 3.26666rem;
                        margin-top: 0.47333rem;
                    }

                    :after {
                        content: '';
                        clear: both;
                    }
                }
            }


            .hot_game {
                /*padding: .3rem .2rem 0 .2rem;*/
                text-align: left;
                padding-top: .3rem;
                a {
                    display: inline-block;
                    width: 50%;
                    margin-bottom: 0.32rem;
                    text-align: left;
                    font-size: 0;

                    div{
                        width: 4.26666rem;
                        height: 2.50666rem;
                        border-radius: .4rem;
                        margin: 0 auto;

                    }
                    p {

                        width: 4.26666rem;
                        font-size: .32rem;
                        color: #333333;
                        margin:.18666rem  auto 0;
                    }
                }
            }

            .hot_lottery {
                text-align: left;
                padding-top: .3rem;

                .lottery_a {
                    display: inline-block;
                    width: 33.3%;
                    margin-bottom: 0.32rem;

                    div {
                        width: 1.46666rem;
                        height: 1.46666rem;
                        margin: 0 auto;
                        border-radius: 50%;
                        overflow: hidden;
                        font-size: 0;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    p {
                        margin-top: .18666rem;
                        font-size: .32rem;
                        text-align: center;
                        color: #333333;
                    }
                }
            }

            .flex_div {
                display: flex;
            }
        }
    }


</style>
<style>
    /*.van-notice-bar__wrap {*/
    /*height: 100% !important;*/
    /*line-height: .8rem;*/
    /*}*/

    /*.van-swipe__indicators {*/
    /*bottom: .22222rem !important;*/
    /*}*/

    /*.van-swipe__indicator {*/
    /*width: .16666rem;*/
    /*height: .16666rem;*/
    /*}*/

    .game_box .van-hairline--top-bottom {
        display: none !important;
    }
</style>

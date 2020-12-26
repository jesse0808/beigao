<template>
    <div class="betting_page lhc_page" ref="contentPage" :class="[upPlan?'padding_bottom':'']">
        <my-title :title-type=1 @clickCallBack="clickRight" titleRouter="gameLobby">
            <a class="top_title" href="javascript:void(0)" slot="title" @click.stop="onNavClick">
                <span class="title_sty">玩法</span>
                <div class="title_text">{{selectData.Name || '加载中'}}<span class="iconfont icon-arrowup"></span></div>
            </a>
        </my-title>
        <count-down class="count_pos" @setNowLssue="setNowLssue" @reloadRecord="reloadRecord" :now-lssue="nowLssue" :lottery-name="lgText"/>
        <div class="up_plan">
            <a href="javascript:void(0)" @click="tabChange(true)" :class="upPlan?'check_a':'uncheck_a'">投注</a>
            <a href="javascript:void(0)" @click="tabChange(false)" :class="upPlan?'uncheck_a':'check_a'">走势</a>
            <span :class="upPlan?'':'animation_wi'"></span>
        </div>
        <div class="right_button transparency_bg" v-show="rightPanel" @click="rightPanel = false">
            <div class="right_button_div">
                <a href="javascript:void(0)" @click="changeLottery"><span class="iconfont icon-iconfontyouxihudong"
                                                                          style="color: #666666"></span>&ensp;切换彩种</a>
                <router-link :to="{path:'/bettingRecord',query:{id:LgId}}"><span class="iconfont icon-jiluliebiao"></span>&ensp;投注记录
                </router-link>
                <a href="javascript:void(0)" @click="gameTp"><span class="iconfont icon-gantanhao"></span>&ensp;玩法提示</a>
            </div>
        </div>
        <div :class="`right_button transparency_bg ${!showNav?'topFull':''}`"  @click="showNav = false">
            <nav-item @clickReturnData="navReturnData" :lottery-id="LgId" :ls-id="LsId" :pattern-id="2"/>
        </div>
        <lottery-box v-show="upPlan" ref="lotteryDiv" :this-game-info="selectData" @selectReturnData="getReturnData"
                     :game-id="selectLgId" :game-class="LsId"/>
        <record v-if="!upPlan" ref="record"></record>
        <foot-info v-show="upPlan" @clearAll="clearLotteryCheck" @resetGame="resetLottery" :bet-issue="nowLssue"
                   :this-game-info="selectData" :bet-info="selectNum"/>
    </div>
</template>

<script>
    import countDown from "../countDown";
    import footInfo from "./footInfo";
    import navItem from "../navItem";
    import lotteryBox from "./lotteryBox";
    import record from "../record";
    import {GetBetIssueInfo} from "../../../util/lottery";
    export default {
        name: "index",
        components: {countDown, footInfo, navItem, lotteryBox, record},
        data() {
            return {
                nowLssue: '',//当前期号，投注时使用
                lgText: "腾讯分分彩",
                LgId: 1, //默认腾讯分分彩
                LsId: 1,//默认 1 时时彩 2 PK10 3 十一选五 4 福彩快三 5 PC蛋蛋 6 低频彩 // 3有特殊处理
                showNav: false,//显示导航栏
                selectData: {}, //当前选中玩法模式
                selectLgId: 1, // 选中后的玩法id
                selectNum: {}, // 选中的球
                upPlan: true,//默认
                rightPanel:false,//右边面板状态
            }
        },
        created() {
            this.LgId = this.$route.query.LgId
            this.LsId = this.$route.query.LsId
            this.lgText = this.$route.query.name
            this.resetLottery()
        },
        watch: {
            $route() {
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo
            }
        },
        methods: {
            //刷新走势
            reloadRecord(){
                if(!this.upPlan)//如果当前用户在走势视图
                    this.$refs.record.getData();
            },
            tabChange(flg){
                this.upPlan=flg;
                this.$refs.contentPage.scrollTop = 0; //让内容滚动条重置到顶部
            },
            //重置游戏
            resetLottery() {
                let that = this;
                that.$nextTick(() => {
                    that.$refs.lotteryDiv.resetData();
                })
            },
            //选中菜单后返回的数据
            navReturnData(data) {
                this.$refs.contentPage.scrollTop=0; //让内容滚动条重置到顶部
                if (this.selectLgId != data.LpId) {
                    this.resetLottery()
                }
                this.selectData = data
                this.selectLgId = data.LpId
                this.showNav = false //选中后关闭
                this.$forceUpdate()
            },
            //子组件调用 设置当前期号
            setNowLssue(lssue) {
                this.nowLssue = lssue;
                console.log("设置当前期号为" + this.nowLssue);
            },
            //显示导航栏
            onNavClick() {
                this.rightPanel=false;
                this.showNav = !this.showNav
            },
            //得到选中的球
            getReturnData(data) {
              //  console.log(data)
                this.selectNum = data
            },
            //右边更多
            clickRight() {
                this.showNav=false;
                this.rightPanel = !this.rightPanel
            },
            //清除选中的号码
            clearLotteryCheck() {
                this.$refs.lotteryDiv.clearAllCheck()
            },
            //游戏玩法提示
            gameTp(){
                this.$refs.lotteryDiv.playTip();
            },
            //切换彩种
            changeLottery() {
                this.$router.push({
                    path: '/cpNav', query: {
                        LgId: this.LgId,
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../assets/css/gameview.less";
    .lhc_page{

    }
    .padding_bottom {
        padding-bottom: 3.34666rem;
    }
</style>

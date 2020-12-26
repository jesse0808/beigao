<template>
    <div class="betting_page pcd_page" ref="contentPage" :class="[upPlan?'padding_bottom':'']">
        <my-title :title-type=1 @clickCallBack="clickRight" titleRouter="gameLobby">
            <a class="top_title" href="javascript:void(0)" slot="title">
                <!--<span class="title_sty">玩法</span>-->
                <div class="title_text">{{lgText}}</div>
            </a>
        </my-title>
        <count-down class="count_pos" @setNowLssue="setNowLssue" :now-lssue="nowLssue" @reloadRecord="reloadRecord" :lottery-name="lgText" />
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
            </div>
        </div>
        <lottery-box v-show="upPlan" ref="lotteryDiv" @selectReturnData="getReturnData" :game-id="LgId"/>
        <record v-if="!upPlan" ref="record"></record>
        <foot-info v-show="upPlan" @clearAll="clearLotteryCheck" @resetGame="resetLottery" :bet-issue="nowLssue"
                   :bet-info="selectNum"/>
    </div>
</template>

<script>
    import countDown from "../countDown";
    import footInfo from "./footInfo";
    import lotteryBox from "./lotteryBox";
    import record from "../record";

    export default {
        name: "index",
        components: {countDown, footInfo, lotteryBox, record},
        data() {
            return {
                nowLssue: '',//当前期号，投注时使用
                lgText: "极速28",
                LgId: 37, //默认腾讯分分彩
                selectNum: {}, // 选中的球
                upPlan: true,//默认
                rightPanel: false,//右边面板状态
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
            //得到选中的球
            getReturnData(data) {
                this.selectNum = data
            },
            //右边更多
            clickRight() {
                this.rightPanel = !this.rightPanel
            },
            //清除选中的号码
            clearLotteryCheck() {
                this.$refs.lotteryDiv.clearAllCheck()
            },
            //子组件调用 设置当前期号
            setNowLssue(lssue) {
                this.nowLssue=lssue;
                console.log("设置当前期号为"+this.nowLssue);
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
    .padding_bottom {
        padding-bottom: 3.34666rem;
    }
</style>

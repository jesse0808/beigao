<template>
    <div class="betting_page gfplay_page" ref="contentPage" :class="[upPlan?'padding_bottom':'']">
        <my-title :title-type=1 @clickCallBack="clickRight" titleRouter="gameLobby">
            <a class="top_title" href="javascript:void(0)" slot="title" @click.stop="onNavClick">
                <span class="title_sty">玩法</span>
                <div class="title_text">{{selectData.navName || '加载中'}}<span class="iconfont icon-arrowup"></span></div>
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
                <router-link :to="{path:'/bettingRecord',query:{id:LgId}}"><span
                        class="iconfont icon-jiluliebiao"></span>&ensp;投注记录
                </router-link>
            </div>
        </div>
        <div :class="`right_button transparency_bg ${!showNav?'topFull':''}`" @click="showNav = false">
            <nav-item @clickReturnData="navReturnData" :lottery-id="LgId" :ls-id="LsId" :pattern-id="2"/>
        </div>
        <lottery-box v-show="upPlan" ref="lotteryDiv" :this-game-info="selectData" @selectReturnData="getReturnData"
                     :game-class="LsId"/>
        <record v-if="!upPlan" ref="record"></record>
        <foot-info v-show="upPlan" @clearAll="clearLotteryCheck"  :bet-issue="nowLssue" :bet-info="returnData"/>
    </div>
</template>

<script>
    import countDown from "../countDown";
    import navItem from "../navItem";
    import record from "../record";
    import footInfo from "./footInfo";
    import lotteryBox from "./lotteryBox";

    export default {
        name: "index",
        components: {countDown, navItem, record, footInfo, lotteryBox},
        data() {
            return {
                testa1: {},
                nowLssue: '',//当前期号，投注时使用
                lgText: "腾讯分分彩",
                LgId: 1, //默认腾讯分分彩
                LsId: 1,//默认 1 时时彩 2 PK10 3 十一选五 4 福彩快三 5 PC蛋蛋 6 低频彩 // 3有特殊处理
                selectData: {}, //当前导航数据对象 {navIndex:导航索引,navName:导航名称,playData:[]当前导航所有玩法集合api返回的}
                returnData:[],//当前选择要投注的内容数组
                showNav: false,//显示导航栏
                upPlan: true,//默认
                rightPanel: false,//右边面板状态
            }
        },
        created() {
            this.LgId = this.$route.query.LgId;
            this.LsId = this.$route.query.LsId;
            this.lgText = this.$route.query.name;
            this.resetLottery(true)
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
            //显示导航栏
            onNavClick() {
                this.rightPanel = false;
                this.showNav = !this.showNav
            },
            //得到选中的数据数组
            getReturnData(data) {
               this.returnData=data;
               console.log(this.returnData);
            },
            //右边更多
            clickRight() {
                this.showNav = false;
                this.rightPanel = !this.rightPanel
            },
            //子组件调用 设置当前期号
            setNowLssue(lssue) {
                this.nowLssue = lssue;
                console.log("设置当前期号为" + this.nowLssue);
            },
            //选中菜单后返回的数据
            navReturnData(data) {
                this.$refs.contentPage.scrollTop = 0; //让内容滚动条重置到顶部
                if (this.selectData.navIndex != data.navIndex) {
                    this.resetLottery(false)
                }
                this.selectData = data;
                this.showNav = false; //选中后关闭
                this.$forceUpdate()
            },
            //重置游戏
            resetLottery(flg) {
                let that = this;
                if (flg){
                    that.$nextTick(() => {
                        that.$refs.lotteryDiv.resetData();
                    })
                }else
                    that.$refs.lotteryDiv.resetData();
            },
            //清除选中的号码
            clearLotteryCheck() {
                this.$refs.lotteryDiv.clearAllCheck()
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

    .gfplay_page {

    }

    .padding_bottom {
        padding-bottom: 3.34666rem;
    }
</style>

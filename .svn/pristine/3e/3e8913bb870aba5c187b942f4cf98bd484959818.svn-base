<template>
    <div class="lottery_nav" @click.stop="clickStop">
        <van-tabs v-model="topSelectNav" v-if="viewType==1" @change="navChange" swipeable title-inactive-color="#333333"
                  background="#edefef"
                  title-active-color="#008573" color="#008573">
            <van-tab v-for="(item,index) in topNav" :name="index" :title="item.navName" :key="index"
                     class="tab-content">
            </van-tab>
        </van-tabs>
        <van-tabs v-model="topSelectNav" v-else @change="navChange" swipeable title-inactive-color="#333333"
                  background="#edefef"
                  title-active-color="#008573" color="#008573">
            <van-tab v-for="(item,index) in topNav" :name="index" :title="item.navName" :key="index"
                     class="tab-content">
                <div class="nav_item" v-for="(x,y) in item.childList" :key="y">
                    <div class="nav_name">{{x.name}}</div>
                    <div class="nav_box">
                        <a href="javascript:void(0)" @click="onClickItem(val)"
                           :class="[nowSelectPlayId==val.LpId?'selected':'']"
                           v-for="(val,num) in navAllList.slice(x.childData[0],x.childData[1])"
                           :key="num">{{val.Alias}}</a>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import {getPlayList} from "../../util/lottery";
    import lotteryData from "../../util/lottery.json"

    export default {
        name: "navItem",
        props: {
            // 游戏ID lgid
            lotteryId: {
                type: [Number, String],
                required: true
            },
            //默认 1 时时彩 2 PK10 3 十一选五 4 福彩快三 5 PC蛋蛋 6 低频彩 7六合彩 // 3有特殊处理
            lsId: {
                type: [Number, String],
                required: true
            },
            patternId: {//玩法模式id
                type: [Number, String],
                required: true
            }
        },
        data() {
            return {
                navAllList: [], //当前彩种所有分类选择
                //   selectNav: 0,
                topSelectNav: 0,//当前选中的导航索引
                //  navList: [],
                // oneLoad: true,//初始化只执行一次
                topNav: [],//导航数据 本地lottery.json对应的配置
                //     fckNav: [], //当为福彩快三时
                // fckLoading: true, // 当为福彩快三时，只加载一次
                //  selectTopNav: [], //当前选中的二级导航下列三级导航数
                nowSelectPlayId: 0,//当前选中的玩法id
            }
        },
        computed: {
            viewType() {//视图显示类型
                if (this.patternId == 2 && this.lsId != 7)
                    return 1;//时时彩和赛车经典玩法视图
                else
                    return 10;//其它视图类型
            }
        },
        created() {
            //修改导航索引
            this.topSelectNav = Number(localStorage.getItem("gnva_" + this.lotteryId + "_" + this.patternId));
            let lData = null;
            // 时时彩id为2和44时的时候单独取
            if (this.lsId == 1 && (this.lotteryId == 2 || this.lotteryId == 44))
                lData = lotteryData['0'];
            else
                lData = lotteryData[this.lsId + '-' + this.patternId];//系列-模式
            this.topNav = lData.nav;
            if (this.viewType != 1) {//viewType=1的时候没有玩法选择只有导航切换
                let _playid = Number(localStorage.getItem("gplay_" + this.lotteryId + "_" + this.patternId));
                if (_playid > 0)
                    this.nowSelectPlayId = _playid;//默认选中的玩法
                else
                    this.nowSelectPlayId = lData.defaultPlayId;//默认选中的玩法
            }
            this.getConfig();//获取服务端玩法配置数据
        },
        methods: {
            //玩法点击事件
            onClickItem(data) {
                if (this.viewType == 1) {
                    //viewType=1 暂时没有玩法点击事情
                } else {
                    localStorage.setItem("gnva_" + this.lotteryId + "_" + this.patternId, this.topSelectNav);
                    this.nowSelectPlayId = data.LpId;//选择玩法时修改当前选中玩法的id
                    //把当前 游戏id_模式id 写入本地存储
                    localStorage.setItem("gplay_" + this.lotteryId + "_" + this.patternId, this.nowSelectPlayId);
                    this.$emit('clickReturnData', data);
                }
            },
            //阻止冒泡
            clickStop() {
                return false
            },
            //获取当前选中的彩种的配置
            getConfig() {
                let that = this;
                getPlayList(this.lotteryId, this.patternId).then(data => {
                    that.navAllList = data;
                    if (data != null) {
                        if (that.viewType == 1) {
                            that.setClassicReturnData();//经典玩法设置返回数据
                        } else {
                            if (that.lsId == 3 && this.patternId == 0) { //11选5官方玩法模式特殊处理
                                let exitArr = that.navAllList.splice(10);
                                let newArr = exitArr.filter(item => {
                                    return item.Name.indexOf("复式") != -1;
                                });
                                let iddArr = exitArr.filter(item => {
                                    return item.Name.indexOf("单式") != -1;
                                });
                                that.navAllList.push(...newArr, ...iddArr)
                            } else if (that.lsId == 4 && this.patternId == 0)//快3官方玩法模式特殊处理
                            {
                                console.log(that.navAllList);
                                //因为api返回的 大小单双玩法位置在最后一个 要把它移动到数组的第二个位置
                                let lastp = that.navAllList[8];//索引8的玩法是 大小单双
                                that.navAllList.splice(1, 0, lastp);//把lastp插入到数组索引1处
                                that.navAllList.splice(9, 1); //在移除最后一个 因为重复了
                                console.log(that.navAllList)
                            }
                            //返回默认选中的玩法 只存在一个
                            let d = that.navAllList.filter(item => {
                                return item.LpId == that.nowSelectPlayId;
                            });
                            this.$emit('clickReturnData', d[0]) //设置默认选中的玩法 给父组件
                        }
                    }else
                        that.$toast.fail("加载玩法配置错误,请重新加载");
                })
            },
            //设置经典玩法当前选中的数据
            setClassicReturnData: function () {
                let nav = this.topNav[this.topSelectNav];
                let plays=this.navAllList.slice(nav.playIdSlice[0],nav.playIdSlice[1]);
               // console.log(plays);
                 this.$emit('clickReturnData',{navIndex:this.topSelectNav,navName:nav.navName,playData:plays},) ;//设置选中的玩法集合 给父组件
            },
            //导航变化监听
            navChange() {
                if(this.viewType==1){
                    localStorage.setItem("gnva_" + this.lotteryId + "_" + this.patternId, this.topSelectNav);
                   this.setClassicReturnData();
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    .lottery_nav {
        width: 100%;
        border-bottom: 1px solid #eeeeee;
        // background-color: #008573;
        .tab-content {
            background-color: #edefef;
            border-top: 0.01333rem solid #008573;
        }

        .nav_item {
            display: flex;
            justify-content:space-evenly;
            padding-top: .26666rem;

            .nav_name {
                width: 2.75rem;
                font-size: .32rem;
                color: #333333;
                text-align: center;
                line-height: 0.85333rem;
            }

            .nav_box {
                display: flex;
                justify-content: start;
                flex-wrap: wrap;
                width: 7.25rem;

                a {
                    width: 3rem;
                    height: .85333rem;
                    margin: 0 .5rem .26666rem 0;
                    line-height: .85333rem;
                    display: inline-block;
                    font-size: .32rem;
                    color: #333333;
                    text-align: center;
                    border: 1px solid #dddfdf;
                    border-radius: .13333rem;
                    background-color: white;
                }

                .selected {
                    border: 1px solid #03ac8b;
                    background-color: #008573;
                    color: white;
                }
            }
        }
    }
</style>
<style scoped>
    .van-tab__pane {
        background-color: #ffffff;
    }
</style>

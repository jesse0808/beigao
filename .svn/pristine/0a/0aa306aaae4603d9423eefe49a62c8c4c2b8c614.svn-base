<template>
    <div id="app" v-on:touchstart="bodyTouchStart" v-on:touchmove="bodyTouchMove" v-on:touchend="bodyTouchEnd">
        <div class="welcome" v-if="!isInitSucess"></div>
        <transition :name="transitionNameTop" v-if="isInitSucess">
            <keep-alive :include="keepAliveComponents">
                <router-view class="child-view"/>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
    let swidth = document.documentElement.clientWidth;
    import {GetSysLines, selfConfig, SysKey, SetupIosWebView} from "./util/sysconfig";
    export default {
        data() {
            return {
                transitionNameTop: '',
                isInitSucess: false,//初始化数据是否加载完成
                sysLines: [],//系统线路
                nowLineIndex: 0,//当前使用的系统线路索引
                // touchLeft 划动起点界限，起点在靠近屏幕左侧时才有效
                touchLeft: swidth * 2 / 5,
                // touchStartPoint 记录起始点X坐标
                touchStartPoint: 0,
                // distance 记录划动的距离
                distance: 0,
                // 回退按钮的dom，根据页面上是否存在此dom来判断该路由是否可回退
                backBtn: null
            }
        },
        methods: {
            //请求系统必须的初始化数据 lastLineIndex 上一次使用保存在本地存储的线路索引
            getInitData(lastLineIndex) {
                let that = this;
                let nowIndex = 0;
                if (lastLineIndex != null)
                    nowIndex = lastLineIndex;
                else {
                    nowIndex = that.nowLineIndex;
                    that.nowLineIndex++;
                }
                that.$axios.defaults.baseURL = that.sysLines[nowIndex].Url;//修改当前axios使用的api地址

                selfConfig().then((data) => {
                    console.log("当前检测api地址=>" + that.$axios.defaults.baseURL)
                    if (data) {
                        this.$toast.clear();
                        console.log("当前使用api地址=>" + that.$axios.defaults.baseURL)
                        that.$store.commit('setSysConfig', data.DicConfig);
                        if (data.User) {
                            that.$store.commit('setUserInfo', data.User);
                            that.$store.commit('setLoginStatus', true);
                        }
                        if (data.Notice) {//如果有紧急公告则弹出
                            that.$dialog.alert({message: "<div class='jjgg-dialog'>" + data.Notice.SnContent + "</div>"});
                        }
                        that.$store.commit('setLotteryData', data.LotteryNvgData);
                        that.$store.commit('setThirdGames', data.ThirdGames);
                        that.$store.commit('setThirdCategory', data.ThirdCategory);
                        that.$store.commit('setNowLineIndex', nowIndex);//设置当前使用线路的索引
                        localStorage.setItem('nowLineIndex', nowIndex);//本地保存
                        that.isInitSucess = true;
                        // 修改网站标题
                       //  document.title = SysKey('SysName').SysValue;
                    } else {
                        if (that.nowLineIndex <= that.sysLines.length - 1)
                            that.getInitData(null);//当前线路访问失败 访问下一个线路
                        else
                            that.$toast.fail({message: '加载失败,请检查网络后重试'});//所有线路均访问不了 提示用户
                    }
                });
            },
            bodyTouchStart: function(event) {
                this.backBtn = document.getElementById("navback");
                if (this.backBtn) {
                    // 获得起点X坐标，初始化distance为0
                    this.touchStartPoint = event.targetTouches[0].pageX;
                    this.distance = 0;
                }
            },
            bodyTouchMove: function(event) {
                if (this.backBtn && this.touchStartPoint < this.touchLeft) {
                    // 只监听单指划动，多指划动不作响应
                    if (event.targetTouches.length > 1) {
                        return;
                    }
                    // 实时计算distance
                    this.distance = event.targetTouches[0].pageX - this.touchStartPoint;
                }
            },
            bodyTouchEnd: function(event) {
                if (this.backBtn && this.touchStartPoint < this.touchLeft) {
                    // 划动结束，重置数据
                    this.touchStartPoint = 0;
                    // 当划动距离超过100px时，触发返回事件
                    if (this.distance > 150) {
                        // 返回前修改样式，让过渡动画看起来更快
                        this.$router.back();
                    }
                }
            }
        },
        watch: {
            '$route'(to, from) {
                if (to.meta.index > from.meta.index) {
                    this.transitionNameTop = 'slide-left';
                } else {
                    this.transitionNameTop = 'slide-right';
                }
            }
        },
        created() {
            SetupIosWebView();//注册Ios WebView 对象
            let that = this;
            that.sysLines = GetSysLines();//获取系统所有线路
            console.log(that.sysLines);
            if (that.sysLines.length > 0) {
                //请求app必须的初始化数据 并设置系统当前使用的api线路
                this.$toast.loading({message: '加载中...', duration: 0})
                let lastIndex = parseInt(localStorage.getItem('nowLineIndex'));
                if (lastIndex && lastIndex <= that.sysLines.length)
                    that.getInitData(lastIndex);
                else
                    that.getInitData(null);
            } else
                that.$toast.fail({message: '没用可用线路'})
        },
        computed: {
            keepAliveComponents() {
                return this.$store.state.keepAliveComponents
            },
        }
    }
</script>
<style lang="less">
    #app {
        width: 100%;
        height: 100%;
        font-family: Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        overflow-x: hidden;
        overflow-y: auto;
        /*background-color: #eeeeee;*/

        .welcome {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #008573;
            /*background-size: 100% 100%;*/
            /*background-repead: no-repead;*/
        }
    }

    .jjgg-dialog {
        text-align: left;
        color: #333333;
        font-size: .32rem;

        p, div {
            white-space: normal;
        }
    }

    * {
        box-sizing: border-box;
    }
</style>

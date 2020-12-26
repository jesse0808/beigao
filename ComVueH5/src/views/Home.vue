<template>
    <div class="home">
        <div class="content_div"  ref="content">
            <transition :name="transitionName">
                <router-view class="child-view"/>
            </transition>
        </div>
        <van-tabbar class="nav_shadow" :change="changeSelectNav(selectNav)" v-model="selectNav" active-color="#008573"
                    inactive-color="#aaaaaa"
                    safe-area-inset-bottom route
                    style="z-index: 100;">
            <van-tabbar-item v-for="(item, index) in navData" :key="index"  :to="item.path">
                <span>{{item.name}}</span>
                <span
                        slot="icon"
                        slot-scope="props"
                        :class="['iconfont',item.selectIcon]"
                ></span>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {getUserInfo, noticeInfo} from "../util/game";

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                selectNav: 0,//默认选中
                oldActive: 0,//选中之前得
                transitionName: '',
                navData: [
                    {
                        name: '首页',
                        selectIcon: 'icon-shouyex',
                        select: 0,
                        path: '/homeItem'
                    },
                    {
                        name: '游戏大厅',
                        selectIcon: 'icon-iconfontyouxihudong',
                        select: 1,
                        path: '/gameLobby'
                    },
                    {
                        name: '活动',
                        selectIcon: 'icon-bajiefuli',
                        select: 2,
                        path: '/activity'
                    },
                    {
                        name: '我的',
                        selectIcon: 'icon-ren12',
                        select: 3,
                        path: '/userCenter'
                    }
                ]
            }
        },
        methods: {
            changeSelectNav(active) {
                //进入个人中心之前判断是否登陆，未登陆恢复之前选中得nav
                if (active === 3 && !this.$store.state.loginStatus) {
                    this.selectNav = this.oldActive
                }
            }
        },
        watch: {
            '$route'(to, from) {
                this.$refs.content.scrollTop = 0;
                let that = this;
                if (to.meta.index > from.meta.index) {
                    this.transitionName = 'slide-left';
                } else {
                    this.transitionName = 'slide-right';
                }
                //监听路由，选中路由对应的选项
                that.navData.forEach((item, index) => {
                    if (to.path.includes(item.path)) {
                        this.selectNav = item.select;
                        this.oldActive = item.select
                    }
                })
            }
        },
        created() {
            let that = this
            let path = that.$route.path
            that.navData.forEach((item, index) => {
                if (path.includes(item.path)) {
                    this.selectNav = item.select
                }
            })
            //验证是否存在token,并且用户信息为空则获取用户信息
            if (localStorage.getItem('token') && !that.$store.state.loginStatus) {
                getUserInfo()
            }
            noticeInfo();//加载公告并放入 store 中
        },
        mounted() {
        }
    }
</script>
<style lang="less" scoped>
    .home {
        width: 100%;
        height: 100%;
        padding-bottom:1.45333rem;
        overflow-x: hidden;


        .content_div {
            background-color: white;
            position: relative;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
        }

        .nav_shadow {
            box-shadow: 0px 0px 1px #aaaaaa;

            .iconfont {
                font-size: .65rem !important;
            }
        }
    }
</style>
<style>
    .van-tabbar {
        height: 1.45333rem !important;
    }

    .van-tabbar-item {
        font-size: .32rem !important;
    }

    .van-tabbar-item .van-tabbar-item__icon {
        display: block;
        font-size: .54666rem !important;
    }

    .van-tabbar-item__icon img {
        height: .54666rem !important;
    }

    .van-tabbar-item__icon {
        margin-bottom: 0.11666rem !important;
    }
</style>

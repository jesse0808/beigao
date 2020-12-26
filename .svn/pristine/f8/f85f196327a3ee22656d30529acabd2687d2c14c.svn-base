<template>
    <div class="me_recard_main game_box" ref="gameBox">
        <my-title :title-val="$route.query.name"></my-title>
        <div class="search">
            <label>
                <input type="text" v-model="searchData.Name" placeholder="输入关键字">
            </label>
            <a href="javascript:void(0)" @click="searchFun">搜索</a>
        </div>
        <pull-to
                :top-load-method="upPage"
                :top-config="TOP_DEFAULT_CONFIG"
                :bottom-config="BOTTOM_DEFAULT_CONFIG"
                :is-scroll-sensitive="true"
                @infinite-scroll="nextPage"
        >
            <div class="content_box">
                <a href="javascript:void(0)" v-for="(item,index) in pageData" @click="clickGame(item)" :key="index">
                    <div>
                        <van-image lazy-load :src="url+item.imgurl"/>
                    </div>
                    <p>{{item.cn_name}}</p>
                </a>
            </div>

            <div v-if="finished" class="no_data">
                没有更多数据了！
            </div>
        </pull-to>
    </div>
</template>

<script>
    import {toDzGame, getPtGame} from "../../../util/game";
    import {SysKey} from "../../../util/sysconfig";
    import {throttle} from "../../../util/comon";
    import PullTo from 'vue-pull-to'
    export default {
        name: "gameBox",
        components: {PullTo},
        data() {
            return {
                gameId: this.$route.query.id,
                pageData: [], //页面显示数据
                finished: false,
                TotalPage: 0,
                TOP_DEFAULT_CONFIG: {
                    pullText: '下拉刷新', // 下拉时显示的文字
                    triggerText: '释放刷新', // 下拉到触发距离时显示的文字
                    loadingText: '加载中...', // 加载中的文字
                    doneText: '加载完成', // 加载完成的文字
                    failText: '加载失败', // 加载失败的文字
                    loadedStayTime: 400, // 加载完后停留的时间ms
                    stayDistance: 50, // 触发刷新后停留的距离
                    triggerDistance: 70 // 下拉刷新触发的距离
                },
                BOTTOM_DEFAULT_CONFIG: {
                    pullText: '上拉下一页',
                    triggerText: '释放加载下一页',
                    loadingText: '加载中...',
                    doneText: '加载完成',
                    failText: '加载失败',
                    loadedStayTime: 400,
                    stayDistance: 50,
                    triggerDistance: 70
                },
                searchData: {
                    PIndex: 1, PSize: 18, Name: "",Category:102//只获取电子分类的游戏
                },

            }
        },
        computed: {
            url() {
                return SysKey("ImgServerUrl").SysValue
            },
        },
        watch: {
            'prams.Name': function (val) {
                this.prams.Name = val.replace(/\s+/g, "");
            }
        },
        created() {
            this.getPageData();
        },
        methods: {
            getPageData(loaded, isUp) {
                this.$toast.loading({message: '加载中...', duration: 0});
                let that = this;
                getPtGame({id: that.gameId, data: that.searchData}).then(data => {
                    that.$toast.clear();
                    if (data.IsSucess) {
                        if (isUp && data.Data.rows && data.Data.rows.length > 0) {
                            that.pageData = data.Data.rows
                        } else {
                            data.Data.rows.forEach(item => {
                                that.pageData.push(item)
                            })
                        }
                        let total = parseInt(data.Data.total)
                        that.TotalPage = total % that.searchData.PSize == 0 ? parseInt(total / that.searchData.PSize) : parseInt(total / that.searchData.PSize) + 1
                        if (that.searchData.PIndex >= that.TotalPage) {
                            that.searchData.PIndex = that.TotalPage
                            this.finished = true;

                        } else {
                            this.finished = false
                        }
                    } else {
                        this.$toast.fail(data.Message)
                    }
                    if (loaded) {
                        loaded('done')
                    }
                })
            },
            clickGame(data) {
                toDzGame(data)
            },
            nextPage(loaded) {
                if (this.finished) {
                    if (loaded) {
                        loaded('done')
                    }
                    return;
                }
                this.searchData.PIndex += 1
                this.searchData.PIndex = this.searchData.PIndex >= this.TotalPage ? this.TotalPage : this.searchData.PIndex
                this.getPageData(loaded, false)
            },
            upPage(loaded) {
                this.searchData.PIndex = 1
                this.searchData.PIndex = this.searchData.PIndex <= 0 ? 1 : this.searchData.PIndex
                this.getPageData(loaded, true)
            },
            searchFun() {
                this.finished = false
                this.searchData.PIndex = 1
                this.TotalPage = 0
                this.pageData = []
                this.getPageData(null, false)
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
    .game_box {
        .search {
            position: fixed;
            display: flex;
            justify-content: space-between;
            top: 1.17777rem;
            left: 0;
            width: 100%;
            padding: .18666rem .46666rem .29333rem;
            background-color: #eeeeee;
            z-index: 30;

            label {
                width: 7.36rem;
                height: .81333rem;
                font-size: 0;

                input {
                    width: 7.36rem;
                    height: .81333rem;
                    padding: 0 .26666rem;
                    background-color: #ffffff;
                    border-radius: 3px;
                    font-size: .32rem;
                    outline: none;
                    border: none;

                    &::placeholder {
                        color: #999999;
                    }
                }
            }

            a {
                width: 1.6rem;
                height: .81333rem;
                line-height: .81333rem;
                background-color: #008573;
                border-radius: .04rem;
                font-size: .32rem;
                color: #fff;
            }
        }
       .vue-pull-to-wrapper{
           margin-top: 1.3rem;
       }
        .content_box {
            width: 100%;
            text-align: left;
            padding: 0 .29999rem 0;

            a {
                display: inline-block;
                width: 2.8rem;
                margin: 0 .166665rem .4rem;
                /*height: 2.8rem;*/

                div {
                    width: 2.8rem;
                    height: 2.8rem;
                    margin-bottom: .2rem;
                    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
                    border-radius: .04rem;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                p {
                    width: 100%;
                    font-size: .32rem;
                    letter-spacing: .02666rem;
                    color: #333333;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>

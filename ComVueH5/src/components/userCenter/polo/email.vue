<template>
    <div class="me_recard_main user_email">
        <my-title :isShowLeftText="false" title-val="站内信"></my-title>
        <pull-to
                :top-load-method="upPage"
                :top-config="TOP_DEFAULT_CONFIG"
                :bottom-config="BOTTOM_DEFAULT_CONFIG"
                :is-scroll-sensitive="true"
                @infinite-scroll="nextPage"
        >
            <div class="recard-item" v-for="(item,index) in pageData" :key="index">
                <div class="item_title">
                    <span>{{item.Title}}</span>
                </div>
                <div class="item_xian"></div>
                <div class="item_content">
                    <div class="content_data">
                        <span>{{item.UmContent}}</span>
                    </div>
                </div>
                <div class="item_xian"></div>
                <div class="item_bottom">
                    <span> {{item.CreateTime}}</span>
                </div>
            </div>
            <div v-if="finished" class="no_data">
                没有更多数据了！
            </div>
        </pull-to>
    </div>
</template>

<script>
    import {getUserMessageInfo,setUserMsgFlg} from '../../../util/user'
    import PullTo from 'vue-pull-to'

    export default {
        name: "email",
        components: {
            PullTo
        },
        data() {
            return {
                pageData: [],
                TotalPage: 0,
                finished: false,
                searchData: {
                    PIndex: 1,
                    PSize: 10,
                    Type: 1,//固定 获取未读消息

                },
                TOP_DEFAULT_CONFIG: {
                    pullText: '下拉刷新', // 下拉时显示的文字
                    triggerText: '释放刷新', // 下拉到触发距离时显示的文字
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
                }
            }
        },
        created() {
        },
        methods: {
            getPageData(loaded, isUp) {
                let that = this;
                this.$toast.loading({message: '正在加载...', duration: 0})
                getUserMessageInfo(this.searchData).then(data => {
                    this.$toast.clear()
                    if (data.IsSucess) {
                      //设置消息为已读
                            let idArr = [];
                            data.Data.rows.forEach(item => {
                                if (!item.Flg)
                                    idArr.push(item.UmId);
                            })
                            if(idArr.length>0){
                                setUserMsgFlg(idArr.join(','));
                            }
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
                this.getPageData(loaded, true)
            }
        }
        ,
        mounted() {
            this.getPageData(null, false)
        }
    }
</script>

<style lang="less" scoped>
    .user_email {


    }


</style>

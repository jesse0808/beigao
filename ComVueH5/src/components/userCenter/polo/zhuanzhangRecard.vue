<template>
    <div class="me_recard_main zhuanzhang_record">
        <my-title title-val="转账记录" :title-type=0 @clickCallBack="selectPanel=true"></my-title>

        <van-popup v-model="selectPanel" position="top"class="select_pop">
            <div class="pop_main">
                <div class="one_form_item">
                    <van-field v-model="searchData.StartTime"
                               label="开始日期："
                               value="String"
                               placeholder="开始日期"
                               readonly
                               @click="startTimePicker=true"/>
                    <span slot="right-icon" class="iconfont icon-arrowup"></span>
                    <van-popup v-model="startTimePicker" position="bottom" class="item_pop">
                        <van-datetime-picker
                                v-model="dateObj.stTime"
                                type="datetime"
                                @confirm="startPickerTime"
                                @cancel="startTimePicker=false"
                                :item-height="ramHeight"
                        />
                    </van-popup>

                </div>
                <div class="one_form_item">
                    <van-field v-model="searchData.EndTime"
                               label="结束日期："
                               placeholder="结束日期"
                               readonly
                               @click="endTimePicker=true"/>
                    <span slot="right-icon" class="iconfont icon-arrowup"></span>
                    <van-popup v-model="endTimePicker" position="bottom" class="item_pop">
                        <van-datetime-picker v-if="endTimePicker"
                                             v-model="dateObj.endTime"
                                             type="datetime"
                                             @confirm="endPickerTime"
                                             @cancel="endTimePicker=false"
                                             :item-height="ramHeight"
                        />
                    </van-popup>
                </div>
                <div class="one_form_item">
                    <van-field v-model="TranTypeName"
                               label="游戏平台："
                               readonly
                               @click="tranferTypePanel=true"
                    >
                        <span slot="right-icon" class="iconfont icon-arrowup"></span>
                    </van-field>
                    <van-popup v-model="tranferTypePanel" position="bottom" class="item_pop">
                        <van-picker show-toolbar :columns="gameList" @cancel="tranferTypePanel = false"
                                    @confirm="onGameChange" :default-index=0 value-key="CN_Name"
                                    :item-height="ramHeight"></van-picker>
                    </van-popup>

                </div>
                <div class="btn_panel">
                    <div class="btn_cancel" @click="selectPanel=false">取消</div>
                    <div class="btn_submit" @click="search">查询</div>
                </div>
            </div>
        </van-popup>
            <pull-to
                    :top-load-method="upPage"
                    :top-config="TOP_DEFAULT_CONFIG"
                    :bottom-config="BOTTOM_DEFAULT_CONFIG"
                    :is-scroll-sensitive="true"
                    @infinite-scroll="nextPage"
                   >
                <div class="recard-item" v-for="(item,index) in pageData" :key="index">
                    <div class="item_title">
                        <span>{{item.OrderNumber}}</span>
                    </div>
                    <div class="item_xian"></div>
                    <div class="item_content">
                        <div class="content_data">
                            <div>游戏平台：{{item.GameTypeText}}</div>
                            <div>转账金额：{{item.TranMoney}}元</div>
                            <div>订单状态：{{item.Remark}}</div>
                        </div>
                    </div>
                    <div class="item_xian"></div>
                    <div class="item_bottom">
                        <span :class="{'status_color_1':item.TranType==2,'status_color_2':item.TranType==1}">{{item.TranTypeText}}</span>
                        <span >{{item.CreateTime}}</span>
                    </div>
                </div>
                <div v-if="finished" class="no_data">没有更多数据了！</div>
            </pull-to>
    </div>
</template>

<script>
    import {selectHeight} from "../../../mixins/height";
    import {timeFormatProcessing, timeFormatStr} from "../../../util/time";
    import {getGameThird, getTransferList} from "../../../util/money";
    import PullTo from 'vue-pull-to'

    export default {
        name: "cashRecard",
        components: {PullTo},
        data() {
            return {
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
                    StartTime: '',
                    EndTime: '',
                    OrderNumber: '',
                    PIndex: 1,
                    PSize: 10,
                    GameType: '',
                    TranType: ""
                },
                TranTypeName: "",
                gameList: [],//第三方平台数据
                startTimePicker: false,
                endTimePicker: false,
                pageData: [], //页面显示数据
                selectPanel: false,
                finished: false,
                TotalPage: 0,
                tranferTypePanel: false,
                dateObj: {}//日期对象
            }
        },
        mixins: [selectHeight],
        methods: {
            onGameChange(val) {
                console.log(val)
                this.searchData.TranType = val.GameId
                this.TranTypeName = val.CN_Name
                this.tranferTypePanel = false
            },
            getGameList() {
                let that = this
                that.gameList.push({CN_Name: "全部", GameId: ""})
                let data = this.$store.state.thirdGames;
                data.forEach(item => {
                    that.gameList.push(item)
                })
            },
            loadTableData() {
                this.finished = false
                this.searchData.PIndex = 1
                this.searchData.TranType = ""
                this.pageData = []
                this.TranTypeName = "全部"
                this.getPageData(null, false)
            },
            search() {
                this.finished = false
                this.searchData.PIndex = 1
                this.TotalPage = 0
                this.pageData = []
                this.selectPanel = false
                this.getPageData(null, false)
            },
            startPickerTime(val) {
                this.searchData.StartTime = timeFormatStr(val)
                this.startTimePicker = false
            },
            endPickerTime(val) {
                this.searchData.EndTime = timeFormatStr(val)
                this.endTimePicker = false
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
                this.getPageData(loaded,false)
            },
            upPage(loaded) {
                this.searchData.PIndex -= 1
                this.searchData.PIndex = this.searchData.PIndex <= 0 ? 1 : this.searchData.PIndex
                this.getPageData(loaded, true)
            },
            getPageData(loaded, isUp) {
                let that = this
                this.$toast.loading({message: '正在加载...', duration: 0})
                getTransferList(that.searchData).then(data => {
                    this.$toast.clear()
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
        },
        mounted() {
            this.dateObj = timeFormatProcessing();//获取系统特殊 开始时间和结束时间日期对象
            this.searchData.StartTime = timeFormatStr(this.dateObj.stTime);
            this.searchData.EndTime = timeFormatStr(this.dateObj.endTime);
            this.getGameList()
            this.loadTableData()
        }
    }
</script>

<style lang="less" scoped>
    .zhuanzhang_record {

    }
</style>

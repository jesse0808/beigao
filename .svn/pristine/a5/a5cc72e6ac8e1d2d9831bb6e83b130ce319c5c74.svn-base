<template>
    <div class="me_recard_main zh_record">
        <my-title title-val="追号记录" :title-type=0 @clickCallBack="selectPanel=true"></my-title>

        <van-popup v-model="selectPanel" position="top" class="select_pop">
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
                               label="彩种："
                               readonly
                               @click="tranferTypePanel=true"
                    >
                        <span slot="right-icon" class="iconfont icon-arrowup"></span>
                    </van-field>


                    <van-popup v-model="tranferTypePanel" position="bottom" class="item_pop">
                        <van-picker show-toolbar :columns="gameList" @cancel="tranferTypePanel = false"
                                    @confirm="onGameChange" :default-index="0" value-key="Name"
                                    :item-height="ramHeight"></van-picker>
                    </van-popup>

                </div>
                <div class="one_form_item" v-if="isCameFromAgentCenter">
                    <van-field v-model="searchData.LoginName"
                               label="用户名：" placeholder="请输入用户名"
                    >
                    </van-field>
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
                    <span>{{isCameFromAgentCenter?item.LoginName:item.LgName}}</span>
                    <span>开奖进度 {{item.OpenD}}</span>
                </div>
                <div class="item_xian"></div>
                <div class="item_content">
                    <van-cell is-link arrow-direction @click="zhxlHandler(item)">
                        <div slot="title" class="content_data">
                            <span>{{isCameFromAgentCenter? `${item.LgName}-${item.LpName}`: item.LpName}}</span>
                            <span>订单：{{item.ZhNumber}}</span>
                            <span>投注 {{item.BetMoney}} 元</span>
                        </div>
                    </van-cell>
                </div>
                <div class="item_xian"></div>
                <div class="item_bottom">
                    <span :class="{'status_color_1':item.Status == 2,'status_color_2':item.Status == 1}">{{item.StatusText}}</span>
                    <span v-if="item.Status == 2">{{item.BetTime}}</span>
                </div>
            </div>
            <div v-if="finished" class="no_data">没有更多数据了！</div>
        </pull-to>

        <info-index v-if="showInfoStatus" :open-d="openD" :order-number="showOrderNumber"
                    :is-came-from-agent-center="isCameFromAgentCenter" @back="infoBack"></info-index>

    </div>
</template>

<script>
    import {selectHeight} from "../../../../mixins/height";
    import {timeFormatProcessing, timeFormatStr} from "../../../../util/time";
    import {getPZhHistoryinfo} from "../../../../util/statistics";
    import PullTo from 'vue-pull-to'
    import infoIndex from "./infoIndex"

    export default {
        name: "afterRecard",
        components: {PullTo, infoIndex},
        data() {
            return {
                showInfoStatus: false,//是否显示订单显示
                showOrderNumber: '',//显示页面用的订单号
                openD: '',//详情页面用的订单号
                isCameFromAgentCenter: false,           //// 是否从代理中心过来，代理中心过来的不能撤单
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
                    PIndex: 1,
                    PSize: 10,
                    LgId: "",
                    Type: 1,//查询类型 代理中心时使用
                    LoginName:''
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
            infoBack() {//详细界面回退
                this.showInfoStatus = false;
            },
            zhxlHandler(val) {
                this.showOrderNumber = val.ZhNumber;
                this.openD = val.OpenD;
                this.showInfoStatus = true;
            }
            ,
            onGameChange(val) {
                this.searchData.LgId = val.LgId
                this.TranTypeName = val.Name
                this.tranferTypePanel = false
            }
            ,
            getGameList() {
                let that = this
                that.gameList.push({Name: "全部", Value: ""});
                this.$store.state.lotteryData.forEach(item => {
                    item.LotteryList.forEach(data => {
                        that.gameList.push({Name: data.Name, LgId: data.LgId, LsId: data.LsId})
                    })
                })
            }
            ,
            loadTableData() {
                this.finished = false
                this.searchData.PIndex = 1
                this.searchData.LgId = ""
                this.TranTypeName = this.gameList[0].Name
                this.getPageData()
            }
            ,
            search() {
                this.finished = false
                this.searchData.PIndex = 1
                this.TotalPage = 0
                this.pageData = []
                this.selectPanel = false
                this.getPageData(null, false)
            }
            ,
            startPickerTime(val) {
                this.searchData.StartTime = timeFormatStr(val)
                this.startTimePicker = false
            }
            ,
            endPickerTime(val) {
                this.searchData.EndTime = timeFormatStr(val)
                this.endTimePicker = false
            }
            ,
            nextPage(loaded) {
                if (this.finished) {
                    //   this.$toast("已经到底了！")
                    if (loaded) {
                        loaded('done')
                    }
                    return;
                }
                //    this.$toast.loading("加载下一页")
                this.searchData.PIndex += 1
                this.searchData.PIndex = this.searchData.PIndex >= this.TotalPage ? this.TotalPage : this.searchData.PIndex
                this.getPageData(loaded, false)
            }
            ,
            upPage(loaded) {
                this.finished = false
                this.searchData.PIndex = 1
                this.searchData.PIndex = this.searchData.PIndex <= 0 ? 1 : this.searchData.PIndex
                this.getPageData(loaded, true)
            }
            ,
            getPageData(loaded, isUp) {
                let that = this
                if (this.isCameFromAgentCenter) {
                    if (this.searchData.LoginName)
                        this.searchData.Type = 0;
                    else
                        this.searchData.Type = 1;
                }
                this.$toast.loading({message: '正在加载...', duration: 0})
                getPZhHistoryinfo(that.searchData, this.isCameFromAgentCenter).then(data => {
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
                            this.finished = true
                            //  that.$toast("没有更多数据了！")
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
            }
        },
        created() {
            this.isCameFromAgentCenter = this.$route.query.isCameFromAgentCenter == 'true' ? true : false;
        }
        ,
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
    .zh_record {
    }


</style>

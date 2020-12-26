<template>
    <div class="me_recard_main bet_record">
        <my-title title-val="投注记录" :title-type=0 @clickCallBack="selectPanel=true"></my-title>

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
                    <van-popup v-model="startTimePicker" class="item_pop" position="bottom">
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
                        <van-datetime-picker
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

                <div class="one_form_item">
                    <van-field v-model="statusName"
                               label="状态："
                               readonly
                               @click="statusPanel=true"
                    >
                        <span slot="right-icon" class="iconfont icon-arrowup"></span>
                    </van-field>


                    <van-popup v-model="statusPanel" position="bottom" class="item_pop">
                        <van-picker show-toolbar :columns="statusDatas" @cancel="statusPanel = false"
                                    @confirm="onStatusChange" :default-index="0" value-key="Name"
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
                    <span>第{{item.Lssue}}期</span>
                </div>
                <div class="item_xian"></div>
                <div class="item_content">
                    <van-cell is-link arrow-direction @click="betInfoHandler(item)">
                        <div slot="title" class="content_data">
                            <span>{{isCameFromAgentCenter? `${item.LgName}-${item.LpName}`: item.LpName}}</span>
                            <span class="van-ellipsis">{{item.BetContent}}</span>
                            <span>投注&nbsp;{{item.BetMoney}}&nbsp;元</span>
                        </div>
                    </van-cell>
                </div>
                <div class="item_xian"></div>
                <div class="item_bottom">
                    <span v-if="item.Status == 1">{{item.StatusText}}</span>
                    <span class="status_color_2" v-else-if="item.Status == 4">{{item.StatusText}}</span>
                    <span class="status_color_1" v-else-if="item.Status == 3">中奖 {{item.WinBonus}}</span>
                    <span class="status_color_3" v-else-if="item.Status == 2">{{item.StatusText}}</span>
                    <span v-else>{{item.StatusText}}</span>
                    <span>{{item.BetTime}}</span>
                </div>
            </div>

            <div v-if="finished" class="no_data">
                没有更多数据了！
            </div>
        </pull-to>

        <bet-info v-if="showInfoStatus" :order-number="showOrderNumber"
                  :is-came-from-agent-center="isCameFromAgentCenter" @back="infoBack"></bet-info>
    </div>
</template>

<script>
    import {selectHeight} from "../../../../mixins/height";
    import {timeFormatProcessing, timeFormatStr} from "../../../../util/time";
    import {getPBetHistoryinfo} from "../../../../util/statistics";
    import PullTo from 'vue-pull-to'
    import betInfo from "./betInfo"

    export default {
        name: "betRecard",
        components: {PullTo, betInfo},
        data() {
            return {
                showInfoStatus: false,//是否显示订单详情
                showOrderNumber: '',//显示页面用的订单号
                isCameFromAgentCenter: false,           // 是否从代理中心过来
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
                    Type: 1,//查询类型 代理中心时使用
                    LgId: "",
                    LoginName: "",//个人用户名查询
                    Status: ""
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
                statusName: "",
                statusDatas: [
                    {Name: "全部", status: ""},
                    {Name: "未开奖", status: 1},
                    {Name: "已撤单", status: 2},
                    {Name: "已中奖", status: 3},
                    {Name: "未中奖", status: 4},
                ],
                statusPanel: false,
                dateObj: {}//日期对象
            }
        },
        mixins: [selectHeight],
        created() {
            this.isCameFromAgentCenter = this.$route.query.isCameFromAgentCenter == 'true' ? true : false;
        },
        methods: {
            infoBack() {//详细界面回退
                this.showInfoStatus = false;
            },
            betInfoHandler(val) {
                this.showOrderNumber = val.OrderNumber;
                this.showInfoStatus = true;
                //   this.$router.push({path: '/bettingDetails', query: {OrderNumber: val.OrderNumber}})
            },
            onGameChange(val) {
                console.log("onGameChange>>>", val)
                this.searchData.LgId = val.LgId
                this.TranTypeName = val.Name
                this.tranferTypePanel = false
            },
            onStatusChange(val) {
                console.log("onStatusChange>>>", val)
                this.searchData.Status = val.status
                this.statusName = val.Name
                this.statusPanel = false
            },
            getGameList() {
                let that = this
                that.gameList.push({Name: "全部", Value: ""});
                this.$store.state.lotteryData.forEach(item => {
                    item.LotteryList.forEach(data => {
                        that.gameList.push({Name: data.Name, LgId: data.LgId, LsId: data.LsId})
                    })
                })
            },
            loadTableData() {
                this.finished = false
                this.searchData.PIndex = 1
                this.searchData.LgId = ""
                this.searchData.Status = ""
                this.pageData = []
                this.TranTypeName = this.gameList[0].Name
                this.statusName = this.statusDatas[0].Name
                this.getPageData()
            },
            search() {
                this.finished = false
                this.searchData.PIndex = 1
                this.TotalPage = 0
                this.pageData = []
                this.selectPanel = false
                this.statusPanel = false
                this.getPageData(null, false)
            },
            startPickerTime(val) {
                this.searchData.StartTime = timeFormatStr(val);
                this.startTimePicker = false
            },
            endPickerTime(val) {
                this.searchData.EndTime = timeFormatStr(val);
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
                this.getPageData(loaded, false)
            },
            upPage(loaded) {
                this.searchData.PIndex = 1
                this.searchData.PIndex = this.searchData.PIndex <= 0 ? 1 : this.searchData.PIndex
                this.getPageData(loaded, true)
            },
            getPageData(loaded, isUp) {
                let that = this
                if (this.isCameFromAgentCenter) {
                    if (this.searchData.LoginName)
                        this.searchData.Type = 0;
                    else
                        this.searchData.Type = 1;
                }
                this.$toast.loading({message: '正在加载...', duration: 0})
                getPBetHistoryinfo(this.searchData, this.isCameFromAgentCenter).then(data => {
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
            }
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
    .bet_record {

    }
</style>

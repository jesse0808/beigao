<template>
    <div class="me_recard_main cash_record">
        <my-title title-val="提现记录" :title-type=0 @clickCallBack="selectPanel=true"></my-title>
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
                                :item-height="ramHeight"
                                @confirm="startPickerTime"
                                @cancel="startTimePicker=false"
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
                                             :item-height="ramHeight"
                                             @confirm="endPickerTime"
                                             @cancel="endTimePicker=false"
                        />
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
                            <div>姓名：{{item.FullName}}</div>
                            <div>金额：{{item.DmMoney}}元</div>
                            <div>银行：{{item.BankName}}</div>
                            <div>卡号：{{item.BankNumber}}</div>
                        </div>
                    </div>
                    <div class="item_xian"></div>
                    <div class="item_bottom">
                        <span :class="{'status_color_2':item.Status==2,'status_color_2':item.Status==3,'status_color_1':item.Status==4,'status_color_3':item.Status==5}">{{item.StatusText}}</span>
                        <span >{{item.ApplyTime}}</span>
                    </div>
                </div>


                <div v-if="finished" class="no_data">没有更多数据了！</div>

        </pull-to>
    </div>
</template>

<script>
    import {selectHeight} from "../../../mixins/height";
    import {timeFormatProcessing, timeFormatStr} from "../../../util/time";
    import {drawMoneyApplyList} from "../../../util/statistics";
    import PullTo from 'vue-pull-to'

    export default {
        name: "cashRecard",
        components: {
            PullTo
        },
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
                    PayType: '',
                    Status: ''
                },
                startTimePicker: false,
                endTimePicker: false,
                pageData: [], //页面显示数据
                selectPanel: false,
                finished: false,
                TotalPage: 0,
                dateObj: {}//日期对象
            }
        },
        mixins: [selectHeight],
        methods: {
            loadTableData() {
                this.finished = false
                this.searchData.PIndex = 1
                this.pageData = []
                this.getPageData()
            },
            search() {
                this.finished = false
                this.searchData.PIndex = 1
                this.TotalPage = 0
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
                this.getPageData(loaded)
            },
            upPage(loaded) {
                this.searchData.PIndex = 1
                this.searchData.PIndex = this.searchData.PIndex <= 0 ? 1 : this.searchData.PIndex
                this.getPageData(loaded, true)
            },
            getPageData(loaded, isUp) {
                let that = this
                this.$toast.loading({message: '正在加载...', duration: 0})
                drawMoneyApplyList(that.searchData).then(data => {
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
            this.$toast.loading("正在加载")
            this.dateObj = timeFormatProcessing();//获取系统特殊 开始时间和结束时间日期对象
            this.searchData.StartTime = timeFormatStr(this.dateObj.stTime);
            this.searchData.EndTime = timeFormatStr(this.dateObj.endTime);
            this.loadTableData()
        }
    }
</script>

<style lang="less" scoped>
    .cash_record {

    }

</style>

<template>
    <div class="me_recard_main bill_record">

        <my-title title-val="资金流水" :title-type=0 @clickCallBack="selectPanel=true"></my-title>

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
                    <van-popup v-model="endTimePicker" position="bottom"class="item_pop">
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
                               label="账变类型："
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
                        <span>{{item.OpTypeText}}</span>

                    </div>
                    <div class="item_xian"></div>
                    <div class="item_content">
                        <div class="content_data">
                            <span >余额：{{item.NowMoney}}元</span>
                            <span class="van-ellipsis">备注：{{item.Remark}}</span>
                        </div>
                    </div>
                    <div class="item_xian"></div>
                    <div class="item_bottom">
                        <span :class="getColor(item.OpType)">{{getFuHao(item.OpType)}}{{item.OpMoney}} 元</span>
                        <span >{{item.OpTime}}</span>
                    </div>

                </div>
                <div v-if="finished" class="no_data">
                    没有更多数据了！
                </div>
            </pull-to>


    </div>
</template>

<script>
    import {selectHeight} from "../../../mixins/height";
    import {timeFormatProcessing, timeFormatStr} from "../../../util/time";
    import {getUserAccTypeList, pUserAccInfo} from "../../../util/money";
    import PullTo from 'vue-pull-to'

    export default {
        name: "billRecard",
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
                    OpType: "",
                    StartTime: '',
                    EndTime: '',
                    PIndex: 1,
                    PSize: 10,
                    BetNumber: '',
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
            getFuHao(type){//获取是加号还是减号
                //1, 4, 8, 14, 16, 17
              if(type==1 || type==4 || type==8 || type==14 || type==16 || type==7)
                  return '-';
              else
                  return '+'
            },
            getColor(type){//获取颜色
                //1, 4, 8, 14, 16, 17
                if(type==1 || type==4 || type==8 || type==14 || type==16 || type==7)
                    return 'status_color_2';
                else
                    return 'status_color_1'
            },
            onGameChange(val) {
                this.searchData.OpType = val.Value
                this.TranTypeName = val.Name
                this.tranferTypePanel = false
            },
            userAccTypeList() {
                let that = this
                that.gameList.push({Name: "全部", Value: ""});
                getUserAccTypeList().then(data => {
                    data.forEach(item => {
                        that.gameList.push(item)
                    })
                })
            },
            loadTableData() {
                this.finished = false
                this.searchData.PIndex = 1
                this.searchData.OpType = ""
                this.pageData = []
                this.TranTypeName = this.gameList[0].Name
                this.getPageData()
            },
            search() {
                this.finished = false
                this.searchData.PIndex = 1
                this.TotalPage = 0
                this.pageData = []
                this.selectPanel = false
                this.getPageData()
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
                this.getPageData(loaded, false)
            },
            upPage(loaded) {
                this.searchData.PIndex = 1
                this.searchData.PIndex = this.searchData.PIndex <= 0 ? 1 : this.searchData.PIndex
                this.getPageData(loaded, true)
            },
            getPageData(loaded, isUp) {
                let that = this
                this.$toast.loading({message: '正在加载...', duration: 0})
                pUserAccInfo(that.searchData).then(data => {
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

            this.dateObj = timeFormatProcessing();//获取系统特殊 开始时间和结束时间日期对象
            this.searchData.StartTime = timeFormatStr(this.dateObj.stTime);
            this.searchData.EndTime = timeFormatStr(this.dateObj.endTime);
            this.userAccTypeList()
            this.loadTableData()
        }
    }
</script>

<style lang="less" scoped>
   .bill_record{

   }
</style>

<template>
    <div class="me_recard_main team_profit_loss">
        <my-title title-val="团队亏盈" :title-type=0 @clickCallBack="selectPanel=true"></my-title>
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
                    <van-field v-model="searchData.LoginName" label="用户名：" placeholder="请输入用户名">
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
            <div v-for="(item, index) in pageData" :key="index">
                <div class="block_recard_main">
                    <div class="title">
                        <label>{{item.LoginName }}</label>
                        <label @click="getSubUser(item.LoginName)" class="status_color_2">查看下级 ></label>
                    </div>
                    <div class="item_area">
                        <div class="one_item">
                                <label class='item_title'>新充值/新增</label>
                                <label>{{item.NewUserCharge }}/{{item.NewUser}}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>在线/团队</label>
                                <label>{{item.OnLine }}/{{item.TeamCount }}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>团队余额</label>
                                <label>{{item.TeamBlance }}</label>
                        </div>
                        <div class="one_item" :class="item.AllSummary >0 ? 'status_bgColor_1': 'status_bgColor_2'">
                            <label class='item_title'>总盈亏</label>
                            <label >{{item.AllSummary}}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>彩票投注</label>
                                <label>{{item.TZCount }}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>彩票中奖</label>
                                <label>{{item.WinBonus}}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>彩票返点</label>
                                <label>{{item.Rebate}}</label>
                        </div>
                        <div class="one_item" :class="item.Summary >0 ? 'status_bgColor_1': 'status_bgColor_2'">
                                <label class='item_title'>彩票盈亏</label>
                                <label >{{item.Summary}}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>三方投注</label>
                                <label>{{item.ThirdBet }}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>三方中奖</label>
                                <label>{{item.ThirdWinBonus}}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>三方返水</label>
                                <label>{{item.ThirdRebate}}</label>
                        </div>
                        <div class="one_item" :class="item.ThirdWin >0 ? 'status_bgColor_1': 'status_bgColor_2'">
                                <label class='item_title'>三方盈亏</label>
                                <label >{{item.ThirdWin}}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>活动奖金</label>
                                <label>{{item.Activity }}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>充值金额</label>
                                <label>{{item.CashIn }}</label>
                        </div>
                        <div class="one_item">
                                <label class='item_title'>取款金额</label>
                                <label>{{item.CashOut }}</label>
                        </div>
                    </div>
                </div>

            </div>
            <div v-if="finished" class="no_data">
                没有更多数据了！
            </div>
        </pull-to>
    </div>
</template>

<script>
    import {selectHeight} from "../../mixins/height";
    import {postAjax} from '../../util/ajaxjson';
    import {timeFormatStr, timeFormatProcessing} from '../../util/time';
    import PullTo from 'vue-pull-to'

    export default {
        name: "teamProfitAndLoss",
        components: {PullTo},
        data() {
            return {
                finished: false,    // 是否已加载所有数据
                dateObj: {},//日期对象
                selectPanel: false,//查询条件面板
                TotalPage: 0,
                searchData: {
                    StartTime: '',
                    EndTime: '',
                    PIndex: 1,
                    PSize: 10,
                    LoginName: "",
                    Type: 1,//固定
                },
                startTimePicker: false,
                endTimePicker: false,
                pageData: [], //页面显示数据
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
                    triggerDistance: 70,
                },
            }
        },
        created() {
            this.dateObj = timeFormatProcessing();//获取系统特殊 开始时间和结束时间日期对象
            this.searchData.StartTime = timeFormatStr(this.dateObj.stTime);
            this.searchData.EndTime = timeFormatStr(this.dateObj.endTime);
             this.getPageData(null, false);
        },
        mixins: [selectHeight],
        methods: {
            /**
             * 获取列表信息
             */
            getPageData(loaded, isUp) {
                this.$toast.loading({message: '正在加载...', duration: 0})
                postAjax('api/proxy/GetProxyAccReport', this.searchData).then((data) => {
                    this.$toast.clear(true)
                    if (data.IsSucess) {
                        if (isUp && data.Data.rows && data.Data.rows.length > 0) {
                            this.pageData = data.Data.rows
                        } else {
                            data.Data.rows.forEach(item => {
                                this.pageData.push(item)
                            })
                        }
                        let total = parseInt(data.Data.total)
                        this.TotalPage = total % this.searchData.PSize == 0 ? parseInt(total / this.searchData.PSize) : parseInt(total / this.searchData.PSize) + 1
                        if (this.searchData.PIndex >= this.TotalPage) {
                            this.searchData.PIndex = this.TotalPage
                            this.finished = true;
                        } else {
                            this.finished = false
                        }
                    } else
                        this.$toast.fail(data.Message)
                    if (loaded) {
                        loaded('done')
                    }
                })
            },
            /**
             * 加载第一页的数据
             */
            upPage(loaded) {
                this.searchData.PIndex = 1
                this.getPageData(loaded, true)
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
            getSubUser(curTeamName) {
                this.finished = false
                this.searchData.PIndex = 1
                this.TotalPage = 0
                this.pageData = []
                this.searchData.LoginName=curTeamName;
                this.getPageData(null,false)
            },
            startPickerTime(val) {
                this.searchData.StartTime = timeFormatStr(val);
                this.startTimePicker = false
            },
            endPickerTime(val) {
                this.searchData.EndTime = timeFormatStr(val);
                this.endTimePicker = false
            },
            search() {
                this.finished = false
                this.searchData.PIndex = 1
                this.TotalPage = 0
                this.pageData = []
                this.selectPanel = false
                this.getPageData(null, false)
            },
        }
    }
</script>

<style lang="less" scoped>
    .team_profit_loss {

    }


</style>

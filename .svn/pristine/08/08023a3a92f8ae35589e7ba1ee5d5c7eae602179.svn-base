<template>
    <div class="me_recard_main user_list">
        <my-title title-val="会员列表" :title-type=0 @clickCallBack="isShowPanel=true"></my-title>

        <van-popup v-model="isShowPanel" position="top" class="select_pop">
            <div class="pop_main">
                <div class="one_form_item">
                    <van-field label="用户名：" v-model="searchParam.LoginName" placeholder="请输入用户名"/>
                </div>
                <div class="one_form_item">
                    <van-field v-model="ksSelectName"
                               label="快捷查询："
                               placeholder="请选择"
                               readonly
                               @click="ksSelectStatus=true"
                    >
                        <span slot="right-icon" class="iconfont icon-arrowup"></span>
                    </van-field>
                    <van-popup v-model="ksSelectStatus" position="bottom" class="item_pop">
                        <van-picker show-toolbar :columns="ksSelectDatas" @cancel="ksSelectStatus = false"
                                    @confirm="onKsSelectChange" :default-index="0" value-key="Name"
                                    :item-height="ramHeight"></van-picker>
                    </van-popup>

                </div>

                <div class="btn_panel">
                    <div class="btn_cancel" @click="isShowPanel=false">取消</div>
                    <div class="btn_submit" @click="btnSearch()">查询</div>
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

            <div class="recard-item" v-for="(item, index) in pageData" :key="index">
                <div class="item_title">
                    <span>{{item.LoginName}}</span>
                    <span :class="{'status_color_1':item.UtId==1,'status_color_2':item.UtId==2}">{{item.UtName}}</span>
                </div>
                <div class="item_xian"></div>
                <div class="item_content">
                    <div class="content_data">
                        <span>可用余额：{{item.Balance}}元</span>
                        <span>彩票奖金：{{item.UserRebate}}</span>
                        <span>注册时间：{{item.CreateTime}}</span>
                        <span>最后登录：{{item.LastLoginTime}}</span>
                        <span>最后次数：{{item.LoginCount}}</span>
                    </div>
                </div>
                <div class="item_xian"></div>
                <div class="item_bottom">
                    <span>上级 : {{item.SupName}}</span>
                    <span v-if="!item.IsOnline" class="status_color_3">离线</span>
                    <span v-if="item.IsOnline" class="status_color_1">在线</span>
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
    import PullTo from 'vue-pull-to'

    export default {
        name: "userList",
        components: {
            PullTo
        },
        data() {
            return {
                finished: false,    // 是否已加载所有数据
                isShowPanel: false,//是否显示查询面板
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
                TotalPage: 0,//总页数
                pageData: [],//数据
                ksSelectDatas: [//快速查询条件数据
                    {Name: "15天没登录", Field: "Is15leave", Value: true},
                    {Name: "代理", Field: "UserType", Value: 1},
                    {Name: "玩家", Field: "UserType", Value: 2},
                    {Name: "在线", Field: "IsOnline", Value: true},
                    {Name: "新用户", Field: "NewUser", Value: true},
                    {Name: "直属下级", Field: "DirectSub", Value: true},
                ],
                ksSelectStatus: false,//快速查询状态
                ksSelectName: '',//快速查询名称
                searchParam: {      // 搜索参数
                    PIndex: 1,
                    PSize: 10,
                    Type: 1,      //0-个人查询 1团队查询  app只做个人查询搜索
                    DirectSub: false,
                    Is15leave: false,
                    IsOnline: false,
                    NewUser: false,
                    UserType: '',//用户类型查询
                    order: 'desc',
                    sortName: 'LastLoginTime',
                    LoginName: '',//用户名
                }
            }
        },
        created() {
            this.getPageData(null);
        },
        mixins: [selectHeight],
        methods: {
            onKsSelectChange(val) {//快速查询 选择事件
                this.ksSelectName = val.Name;
                this.ksSelectStatus = false;
                this.isShowPanel = false;
                this.searchParam = Object.assign(this.searchParam, {
                    PIndex:1,
                    DirectSub: false,
                    Is15leave: false,
                    IsOnline: false,
                    NewUser: false,
                    UserType: '',
                    LoginName: ''
                });//重置一下所有参数
                this.searchParam[val.Field] = val.Value;
                this.TotalPage = 0;
                this.pageData = [];
                this.finished=false;
                this.getPageData(null);
            },
            //按钮查询
            btnSearch() {
                this.searchParam = Object.assign(this.searchParam, {
                    PIndex:1,
                    DirectSub: false,
                    Is15leave: false,
                    IsOnline: false,
                    NewUser: false,
                    UserType: ''
                });//重置一下所有参数
                this.ksSelectName = '';
                this.isShowPanel = false;
                this.TotalPage = 0;
                this.pageData = [];
                this.finished=false;
                this.getPageData(null);
            },
            /**
             * 查询数据
             */
            getPageData(loaded) {
                if (this.searchParam.LoginName)
                    this.searchParam.Type = 0;//如果用户不用空 则改变type为0
                else
                    this.searchParam.Type = 1;
                this.$toast.loading({message: '正在加载...', duration: 0})
                postAjax('api/Proxy/GetProxyUserList', this.searchParam).then((data) => {
                    this.$toast.clear();
                    if (data.IsSucess) {
                            this.pageData = this.pageData.concat(data.Data.rows);
                        let total = parseInt(data.Data.total)
                        this.TotalPage = total % this.searchParam.PSize == 0 ? parseInt(total / this.searchParam.PSize) : parseInt(total / this.searchParam.PSize) + 1
                        if (this.searchParam.PIndex >= this.TotalPage) {
                            this.searchParam.PIndex = this.TotalPage
                            this.finished = true;
                        } else
                            this.finished = false
                    } else
                        this.$toast.fail(data.Message);
                    if (loaded) {
                        loaded('done')
                    }
                })
            },
            /**
             * 加载第一页的数据
             */
            upPage(loaded) {
                this.searchParam.PIndex = 1
                this.TotalPage = 0;
                this.pageData = [];
                this.finished=false;
                this.getPageData(loaded)
            }
            ,
            /**
             * 上拉加载下一页
             */
            nextPage(loaded) {
                if (this.finished) {
                    if (loaded) {
                        loaded('done')
                    }
                    return;
                }
                this.searchParam.PIndex += 1
                this.searchParam.PIndex = this.searchParam.PIndex >= this.TotalPage ? this.TotalPage : this.searchParam.PIndex
                this.getPageData(loaded)
            }
        }
    }
</script>

<style lang="less" scoped>
    .user_list {
    }


</style>

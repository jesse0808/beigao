<template>
    <div class="form_content_view zh_info_index" >
        <div class="scroll" ref="contentPage">
        <my-title title-val="追号详情" title-router="my" @clickLeftBack="clickLeftBack"></my-title>
        <div style="background-color: white;width: 100%;height: 1.08rem;display: flex;justify-content: center;line-height:1.08rem; font-size:0.373rem;color: #666666;border-bottom:0.013rem solid #e0e0e0">
                <span :class="selectNavIndex==0?'selectNav':''" @click="navChange(0)"
                      style="width: 50%;height:1.08rem;">订单详情</span>
            <span :class="selectNavIndex==1?'selectNav':''" @click="navChange(1)"
                  style="width: 50%;height: 1.08rem;">期号列表</span>
        </div>
        <order-info v-show="selectNavIndex==0" :order-data="orderData" :open-d="openD"
                    :is-came-from-agent-center="isCameFromAgentCenter" @back="clickLeftBack"></order-info>
        <order-list v-show="selectNavIndex==1" :order-data="orderData"
                    :is-came-from-agent-center="isCameFromAgentCenter" @getData="getData"></order-list>
        </div>
    </div>
</template>

<script>
    import {getDetailByOrderNumber, cancleOrder} from "../../../../util/statistics";
    import orderInfo from "./orderInfo"
    import orderList from "./orderList"

    export default {
        name: "infoIndex",
        components: {orderInfo, orderList},
        data() {
            return {
                selectNavIndex: 0,//选择的导航索引
                orderData: [],//所有订单数据
            }
        },
        props: {
            orderNumber: {//追号订单号
                type: String,
                required: true
            },
            openD: {//追号进度
                type: String,
                required: true
            },
            isCameFromAgentCenter: {//是否代理中心过来
                type: Boolean,
                required: true
            }
        },
        computed: {},
        watch: {
            orderNumber(val, old) {
                // this.selectNavIndex = 0;
                // this.$refs.contentPage.scrollTop = 0; //让内容滚动条重置到顶部
                // this.getData();
            }
        },
        created() {
           // this.selectNavIndex = 0;
            //this.$refs.contentPage.scrollTop = 0; //让内容滚动条重置到顶部
            this.getData();
        },
        methods: {
            clickLeftBack() {
                this.$emit('back')
            },
            navChange(index) {//导航改变
                this.selectNavIndex = index;
            },
            getData() {//获取订单数据
                let that = this
                this.$toast.loading({message: '正在加载...', duration: 0})
                getDetailByOrderNumber({number: this.orderNumber, type: 2}).then(rtData => {
                    this.$toast.clear()
                    if (rtData.IsSucess) {
                        if (rtData.Data.length > 0) {
                            this.orderData = rtData.Data;
                        }
                    } else
                        that.$toast.fail(rtData.Message)
                })
            }
        },

    }
</script>

<style lang="less" scoped>


    .zh_info_index {
        position: absolute;
        z-index: 1001;
        top: 0;
        height: 100%;

        .selectNav {
            border-bottom: 0.05rem solid #008573;
            color: #008573;
        }
    }
</style>
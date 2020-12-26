<template>
    <div class="activity">
        <div class="head">
            <div class="center_div">优惠活动</div>
        </div>
        <div class="activity_box">
            <div class="activity_item" v-for="(item,index) in dataList" :key="index">
                <router-link :to="{name:'activityBox',query:{id:item.AcType}}">
                    <van-image lazy-load :src="url+item.h5ImgUrl"/>
                    <!--<div class="activity_info">-->
                    <!--<label>{{item.Name}}</label>-->
                    <!--</div>-->
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {getActivity} from "../../util/game";
    import {SysKey} from "../../util/sysconfig";

    export default {
        name: "activity",
        data() {
            return {
                dataList: []
            }
        },
        computed: {
            url() {
                return SysKey("ImgServerUrl").SysValue
            }
        },
        created() {
            let that = this;
            this.$toast.loading({
                message: '正在加载...',
                duration: 0
            });
            getActivity().then(data => {
                that.$toast.clear()
                if (data)
                    that.dataList = data
                else
                    this.$toast.fail("获取活动列表失败,请重试");

            })
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .activity {
        height: 100%;
        overflow-y: auto;
        .activity_box {
            width: 100%;
            padding-top: 1.46666rem;

            .activity_item {
                width: 9.56rem;
                margin: 0 auto .26666rem;
                background-color: #ffffff;
                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.21);
                border-radius: .06666rem;
                font-size: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 0.1333rem;
                padding-bottom: 0.1333rem;

                /deep/ .van-image__img {
                    display: block;
                    width: 9.28rem;
                    height: 3.0933rem;
                    border-top-left-radius: .06666rem;
                    border-top-right-radius: .06666rem;
                }


                .activity_info {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    padding: 0 .2rem;
                    height: 0.8rem;
                    align-items: center;

                    label {
                        font-size: 0.3467rem;
                        color: #202020

                    }
                }
            }
        }
    }
</style>

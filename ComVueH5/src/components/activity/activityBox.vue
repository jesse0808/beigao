<template>
    <div class="form_content_view activity_box">
        <div class="scroll">
            <my-title :isShowLeftText='false' :title-val="activityName"/>
            <div class="activity_content_panel" v-if="activityData">
                <img :src="url+activityData.h5ImgUrl" alt="">
                <div class="special_box">
                    <div v-if="isSpecialAc" class="ts_content_box">
                        <!-- 签到活动 -->
                        <DailyCheckIn v-if="isDailyCheckIn"/>
                        <!-- 投注礼金 -->
                        <BetGiftMoney v-if="isShowBetGiftMoney"/>
                        <!-- 首冲的特殊页面 -->
                        <FirstRechargeVue v-if="isShowFirstBox"/>
                        <!-- 晋级奖励的特殊页面 -->
                        <PromotionAwardVue v-if="isShowPromotionAward"/>
                        <!-- 加奖的特殊页面 -->
                        <DailyBonusVue v-if="isShowAddReward"/>
                    </div>
                    <div class="activity_info_html" v-html="activityData.Description">
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import {getActivityInfo} from "../../util/game";
    import {SysKey} from '../../util/sysconfig';
    import FirstRechargeVue from './specialPages/FirstRecharge.vue';
    import DailyBonusVue from './specialPages/DailyBonus.vue';
    import PromotionAwardVue from './specialPages/PromotionAward.vue';
    import BetGiftMoney from './specialPages/BetGiftMoney.vue';
    import DailyCheckIn from './specialPages/DailyCheckIn.vue';

    export default {
        name: "activityBox",
        components: {
            FirstRechargeVue,
            DailyBonusVue,
            PromotionAwardVue,
            BetGiftMoney,
            DailyCheckIn
        },
        data() {
            return {
                activityData: null,
                activityName: "",//活动名称
                isSpecialAc: false,           // 是否是特殊活动页面 ， 普通活动页面直接显示后台数据， 特殊活动单独显示,
                isShowFirstBox: false,          // 是否显示首冲的特殊框框
                isShowAddReward: false,         // 是否显示加奖的特殊框框
                isShowPromotionAward: false,    // 是否显示 晋级奖励的特殊框框
                isShowBetGiftMoney: false,//是否显示投注礼金的特殊框框
                isDailyCheckIn: false,//是否显示签到活动的特殊框框
            }
        },
        computed: {
            url() {
                return SysKey("ImgServerUrl").SysValue
            },
            id() {
                return this.$route.query.id
            }
        },
        watch: {
            activityData() {
                this.activityName = this.activityData.Name;
                this.setActivityType();
            }
        },

        created() {
            this.$toast.loading({
                message: '正在加载...',
                duration: 0
            });
            getActivityInfo(this.id).then(data => {
                this.$toast.clear()
                if (data.IsSucess)
                    this.activityData = data.Data;
                else
                    this.$toast.fail(data.Message);

            })
        },

        methods: {
            /**
             * 设置活动类型
             */
            setActivityType() {
                if (this.activityData.AcType == 0) {//签到活动
                    this.isSpecialAc = true;
                    this.isDailyCheckIn = true;
                } else if (this.activityData.AcType == 1) {//投注礼金
                    this.isSpecialAc = true;
                    this.isShowBetGiftMoney = true;
                } else if (this.activityData.AcType == 2) {//首冲奖励
                    this.isSpecialAc = true;
                    this.isShowFirstBox = true;
                } else if (this.activityData.AcType == 7) {//晋级奖励
                    this.isSpecialAc = true;
                    this.isShowPromotionAward = true;
                } else if (this.activityData.AcType == 8) {//每日加奖
                    this.isSpecialAc = true;
                    this.isShowAddReward = true;
                }

            }
        }
    }
</script>

<style lang="less">
    .activity_box {


        .activity_content_panel {
            width: 9.5467rem;
            margin: 0.2rem auto;
            /*display: flex;*/
            /*flex-direction: column;*/
            /*justify-content: center;*/
            /*align-items: center;*/
            border-style: solid;
            border-width: 0.01333rem;
            border-color: rgba(0, 0, 0, 0.1);
            border-radius: 0.05333rem;
            padding: 0.1133rem 0px 0.1133rem 0px;
            background-color: white;


            img {
                width: 9.28rem;
                height: 3.09333rem;
                border-top-left-radius: .06666rem;
                border-top-right-radius: .06666rem;
            }

            .special_box {
                width: 9.28rem;
                background-color: #17726b;
                margin: 0.2rem auto;
                border-radius: 0.1rem;

                .ts_content_box {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding-top: 0.2867rem;
                    padding-bottom: 0.2867rem;
                }
            }

            .activity_info_html {
                font-size: 0.32rem;
                text-align: left;
                width: 9.28rem;
                border-radius: 0.1067rem;
                padding: .15rem;

                .app_act_title_panel {
                    line-height: .7rem !important;
                    font-size: .3rem !important;
                    color: #333333 !important;
                    border-radius: 0.33333rem !important;
                    padding: 0 .3rem !important;
                }

                table {
                    border: 0.01333rem solid white;
                }

                tr {
                    height: 1rem;
                }
            }
        }
    }
</style>

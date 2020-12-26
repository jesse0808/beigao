<template>
    <!-- 每日加奖的特殊页面 -->
    <div class="act_condition_box">
        <div class="act_top_panel">
            <div class="act_top_info">
                <label class="condition_label">昨日投注：{{Data.YDayBetMoney}}元</label>
                <label class="condition_label" >当前等级：{{Data.VipGrade}}</label>
            </div>
            <div class="act_top_info">
                <label class="condition_label">加奖比例：{{Data.DbRatio}}%</label>
                <label class="condition_label">可得加奖：{{Data.CashGift}}</label>
            </div>
        </div>
        <div ref="receiveBtn" @click="receive" class="act_get_bet positiveBtn">{{btnText}}</div>
    </div>
</template>

<script>
import { postAjax } from '../../../util/ajaxjson'
    export default {
        name: "dailyBonus",
        data() {
            return {
                Data: {
                    bl: false,           // 是否可领取
                    CashGift: "加载中",            // 可得礼金
                    YDayBetMoney:"加载中",           //昨日投注金额
                    DbRatio: "加载中",           //加奖比例(显示时在后面加上%符合)
                    VipGrade: "加载中",           //当前等级
                },
                btnText:"加载中"
            }
        },
        computed: {
        },
        watch: {

        },

        created() {
            this.getInfo();
        },

        methods: {
            getInfo() {
                postAjax('api/Activity/GetDailyBonusInfo').then((info) =>{
                    if (!info.IsSucess) {
                        this.btnText = "不可领取";
                        this.Data.VipGrade='-';
                        this.Data.CashGift='-';
                        this.Data.YDayBetMoney='-';
                        this.Data.DbRatio='-';
                        this.$toast.fail(info.Message)
                        return;
                    }
                    this.Data = info.Data;
                    this.reRenderRecieveBtn(this.Data.bl)
                })
            },
            /**
             * 重新渲染领取按钮
             */
            reRenderRecieveBtn(isCanRecieve) {
                this.btnText = isCanRecieve ? "领取" : "不可领取";
                let receiveBtn = this.$refs.receiveBtn;
                if (isCanRecieve) {
                    receiveBtn.classList.add('activeBtn')
                    receiveBtn.classList.remove('positiveBtn')
                } else {
                    receiveBtn.classList.add('positiveBtn')
                    receiveBtn.classList.remove('activeBtn')
                }
            },

            /**
             * 领取奖励
             */
            receive() {
                if (!this.Data.bl) {
                    return;
                }
                this.$toast.loading({
                    message: '领取中...',
                    duration: 0,
                    overlay: true
                });
                postAjax('api/Activity/GetDailyBonusInfoGift').then((info) =>{
                    this.$toast.clear();
                    if (info.IsSucess) {
                        this.$toast.success("领取成功");
                        this.Data.bl = false;
                        this.reRenderRecieveBtn(false);
                    } else this.$toast.fail(info.Message);
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>

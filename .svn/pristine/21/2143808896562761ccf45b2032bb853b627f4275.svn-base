<template>
    <!-- 晋级奖励的特殊页面 -->
    <div class="act_condition_box">
        <div class="act_top_panel">
            <div class="act_top_info">
                <label class="condition_label">当前等级：{{Data.VipGrade}}</label>
                <label class="condition_label">晋级奖励：{{Data.CashGift}}</label>
            </div>
        </div>
        <div ref="receiveBtn" @click="receive" class="act_get_bet positiveBtn">{{btnText}}</div>
    </div>
</template>

<script>
    import {postAjax} from '../../../util/ajaxjson'

    export default {
        name: "promotionAward",
        data() {
            return {
                Data: {
                    bl: false,           // 是否可领取
                    CashGift: "加载中",            // 可得礼金
                    VipGrade: "加载中",           //当前等级
                },
                btnText: "加载中...",
            }
        },
        computed: {},
        watch: {},

        created() {
            this.getInfo();
        },

        methods: {
            getInfo() {
                postAjax('api/Activity/GetPromotionAwardInfo').then((info) => {
                    if (!info.IsSucess) {
                        this.btnText = "不可领取";
                        this.$toast.fail(info.Message);
                        this.Data.VipGrade='-';
                        this.Data.CashGift='-';
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
                postAjax('api/Activity/GetPromotionAwardGift').then((info) => {
                    this.$toast.clear();
                    if (info.IsSucess) {
                        this.$toast.success("领取成功");
                        this.Data.bl = false;
                        this.reRenderRecieveBtn(false);
                    } else {
                        this.$toast.fail(info.Message);
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>

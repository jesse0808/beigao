<template>
    <!-- 首冲的特殊页面 -->
    <div class="act_condition_box">
        <div class="act_top_panel">
            <div class="act_top_info">
                <label class="condition_label">签到次数：{{Data.SignCount}} 天</label>
                <label class="condition_label">上次签到：{{Data.LastSignTime?Data.LastSignTime:"无"}}</label>
            </div>
            <div class="act_top_info">
                <label class="condition_label">当前消费：{{Data.BetCount}}</label>
            </div>
        </div>
        <div ref="receiveBtn" @click="receive" class="act_get_bet positiveBtn">{{btnText}}</div>
    </div>
</template>

<script>
    import {postAjax} from '../../../util/ajaxjson'

    export default {
        name: "DailyCheckIn",
        data() {
            return {
                Data: {
                    bl: false,           // 是否可领取
                    BetCount: "加载中",         // 消费金额
                    SignCount: "加载中",//签到次数
                    LastSignTime: "加载中",            // 上次签到时间
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
                postAjax('api/Activity/GetSignInfo').then((info) => {
                    this.$toast.clear();
                    if (!info.IsSucess) {
                        this.$toast.fail(info.Message)
                        return;
                    }
                    this.Data = info.Data;
                    this.reRenderRecieveBtn(info.Data.bl);
                })
            },
            /**
             * 重新渲染领取按钮
             */
            reRenderRecieveBtn(isCanRecieve) {
                this.btnText = isCanRecieve ? "签到" : "不可签到";
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
                    message: '签到中...',
                    duration: 0,
                    overlay: true
                });
                postAjax('api/Activity/Sign').then((info) => {
                    this.$toast.clear();
                    if (info.IsSucess) {
                        this.$toast.success("签到成功");
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

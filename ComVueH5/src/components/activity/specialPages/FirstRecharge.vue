<template>
    <!-- 首冲的特殊页面 -->
    <div  class="act_condition_box"  >
        <div class="act_top_panel" >
            <div class="act_top_info">
                <label class="condition_label" >首冲金额：{{Data.FirstRechargeMoney}}</label>
                <label class="condition_label">可得奖励：{{Data.CashGift}}</label>
            </div>
        </div>
        <div ref="receiveBtn" @click="receive" class="act_get_bet positiveBtn" >{{btnText}}</div>
    </div>
</template>

<script>
    import {postAjax} from '../../../util/ajaxjson'

    export default {
        name: "firstRecharge",
        data() {
            return {
                Data: {
                    bl: false,           // 是否可领取
                    FirstRechargeMoney:"加载中",         // 首冲金额
                    CashGift: "加载中",            // 可得礼金
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
            /**
             * 获取首冲信息
             */
            getInfo() {
                postAjax('api/Activity/GetFirstRechargeInfo').then((info) => {
                    if (!info.IsSucess) {
                        this.$toast.fail(info.Message)
                        return;
                    }
                    this.Data = info.Data;
                    if(!this.Data.bl)
                        this.Data.CashGift=0;
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
                postAjax('api/Activity/GetFirstRechargeGift').then((info) => {
                    this.$toast.clear();
                    if (info.IsSucess) {
                        this.$toast.success("领取成功");
                        this.Data.bl=false;
                        this.reRenderRecieveBtn(false);
                    }
                    else this.$toast.fail(info.Message);

                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>

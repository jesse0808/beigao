<template>
    <div class="form_content_view notice_info">
        <div class="scroll">
        <my-title title-val="公告详情"></my-title>
        <div style="margin-left: 0.25rem;margin-right: 0.25rem;">
            <div class="notice-item" v-if="notice!=null">
                <div class="n_item_title">
                    {{notice.Title}}
                </div>
                <div class="n_item_content" v-html="notice.SnContent">
                </div>
                <div class="n_item_bottom">
                    {{notice.ModifyTime}}
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

    import {noticeInfo} from "../../../util/game";

    export default {
        name: "noticeinfo",
        data() {
            return {
                SnId: 0,
                notice: null,
                showC: true,
            }
        },
        created() {
            this.SnId = this.$route.query.SnId | 0;
            this.$toast.loading({message: '正在加载...', duration: 0})
            noticeInfo().then(data => {
                this.$toast.clear();
                if (data != null) {
                    data.forEach((item) => {
                        if (item.SnId === this.SnId) {
                            this.notice = item;
                            // setTimeout(()=>{this.showC=true},1000*5);
                        }
                    })
                } else
                    this.$toast.fail("获取公告信息为空");
            });


        },
        methods: {},
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
    .notice_info {
        .notice-item {
            background-color: white;
            padding: 0 0.375rem 0.375rem 0.375rem;
            border-radius: 0.15rem;
            margin-top: 0.375rem;
            margin-bottom: 0.375rem;
            box-shadow: 0px 0px 0.13333rem rgba(0, 0, 0, 0.1);

            .n_item_title {
                border-bottom: 0.01333rem solid rgba(0, 0, 0, 0.1);
                color: #333333;
                line-height: 1rem;
                height: 1rem;
                font-size: 0.32rem;
                text-align: left;
            }

            .n_item_content {
                padding: 0.2rem;
                font-size: 0.32rem !important;
                text-align: left;
                line-height: 0.625rem;
                color: #333333;
            }

            .n_item_content p {
                font-size: 0.32rem !important;
            }

            .n_item_bottom {
                line-height: 0.375rem;
                font-size: 0.32rem;
                color: #999999;
                text-align: right;
                margin-right: 0.2667rem;
            }
        }

    }


</style>

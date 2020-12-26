<template>
    <div class="form_content_view notice_list">
        <div class="scroll">
            <my-title title-val="平台公告"></my-title>
            <div style="margin-left: 0.25rem;margin-right: 0.25rem">
                <div class="notice-item" @click="$router.push('/noticeinfo?SnId='+item.SnId)"
                     v-for="item in pageData"
                     :key="item.SnId">
                    <span style="font-size: 0.32rem;color: #333333">{{splitTitle(item.Title)}}</span>
                    <span style="font-size: 0.32rem;color: #999999">{{item.ModifyTime}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {noticeInfo} from "../../../util/game";

    export default {
        name: "noticeList",
        data() {
            return {
                pageData: []
            }
        },
        methods: {
            splitTitle(value) {
                if (value.length > 16) {
                    return value.slice(0, 16) + "..."
                } else {
                    return value
                }
            }
        },
        mounted() {
            this.$toast.loading({message: '正在加载...', duration: 0})
            noticeInfo().then(data => {
                this.$toast.clear();
                if (data != null)
                    this.pageData = data;
                else
                    this.$toast.fail("获取公告信息为空");
            });
        }
    }
</script>

<style lang="less" scoped>

    .notice_list {
        .notice-item {
            background-color: white;
            height: 1.0667rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.25rem;
            border-radius: 0.13rem;
            margin-top: 0.2667rem;
            box-shadow: 0px 0px 0.06666rem rgba(0, 0, 0, 0.2);
        }
    }


</style>

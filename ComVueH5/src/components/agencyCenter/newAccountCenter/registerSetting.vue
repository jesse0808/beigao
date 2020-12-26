<template>
    <div class="register_setting">
        <div class="panel" @click="$router.push('/newRegisterLink')"
             style="height: 1.1733rem; background-color: #008573; display: flex; justify-content: center; ">
            <label style="color: white; font-size: 0.3733rem">+新增注册链接</label>
        </div>
        <div v-for="(item, index) in resources" :key="index">
            <div class="panel">
                <div style="display: flex; height: 0.9867rem; justify-content: space-between; border-style: solid; 
                border-width: 0px 0px 1px 0px; border-color:rgba(0, 0, 0, 0.18); margin: 0 .4rem .2rem .4rem; align-items: center">
                    <label>{{item.type==1?'代理':'玩家'}}</label>
                    <label>{{item.CreateTime}}</label>
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-start; margin: 0px 0.4rem 0.4rem 0.4rem">
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%">
                        <div class="middle_line">
                            <label class="desc">注册链接</label>
                            <label>：</label>
                            <label class="van-ellipsis" style="color: #008573;width: 5.5rem;text-align: left">{{item.Url}}</label>
                        </div>
                        <div style="width: 1.2133rem; height: 0.6267rem; border-style: solid; boder-width: 0.01333rem; border-color: rgba(0, 0, 0, 0.1);
                        display: flex; justify-content: center;align-items: center; border-radius:0.06666rem; font-size: .32rem;
                        " v-clipboard:copy="item.Url" v-clipboard:success="clipboardSuccessHandler">复制
                        </div>
                    </div>
                    <div class="middle_line">
                        <label class="desc">状态</label>
                        <label>：</label>
                        <label v-if="!item.IsEnable" class="status_color_3">已停用</label>
                        <label v-if="item.IsEnable" class="status_color_1">启用</label>
                    </div>
                    <div class="middle_line">
                        <label class="desc">备注</label>
                        <label>：</label>
                        <label> {{item.Remark}}</label>
                    </div>
                </div>

                <div style="display: flex; justify-content: space-between; margin: 0px 0.4rem 0.4rem 0.4rem">
                    <div v-if="item.IsEnable == 0" @click="reUse(item.LinkId)" class="edit_btn"
                         style="background-color: #008573; color: white">启用
                    </div>
                    <div v-if="item.IsEnable == 1" @click="stopUse(item.LinkId)" class="edit_btn">停用</div>
                    <div class="edit_btn" @click="del(item.LinkId)">删除</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {postAjax} from '../../../util/ajaxjson';

    export default {
        name: "registerSetting",
        data() {
            return {
                resources: [
                    {
                        LinkId: 0,
                        Uid: 0,
                        Url: "",
                        CreateTime: "",
                        IsEnable: true,
                        flag: "",
                        type: 0,
                        Remark: "",
                        Domain: "",
                    },
                ]
            }
        },
        computed: {},
        created() {
            this.resources = [];
            this.getList();
        },
        methods: {
            clipboardSuccessHandler({value, event}) {
                this.$toast('已复制')
            },
            /**
             * 获取注册列表
             */
            getList() {
                this.$toast.loading({message: '正在加载...', duration: 0})
                postAjax('Api/User/GetUserRegLink').then((data) => {
                    this.$toast.clear()
                    if (data.IsSucess)
                        this.resources = data.Data;
                    else
                        this.$toast.fail(data.Message);
                })
            },
            del(id) {
                this.$toast.loading({message: '提交中...', duration: 0, overlay: true})
                postAjax(`Api/User/DelUserRegLink?linkId=${id}`).then((data) => {
                    this.$toast.clear();
                    if (data.IsSucess)
                        this.getList();
                    else
                        this.$toast.fail(data.Message);
                })
            },

            stopUse(id) {
                this.$toast.loading({message: '提交中...', duration: 0, overlay: true})
                postAjax(`/api/User/SetUserRegStatu?linkId=${id}&statu=${false}`).then((data) => {
                    this.$toast.clear();
                    if (data.IsSucess)
                        this.getList();
                    else
                        this.$toast.fail(data.Message);
                })
            },

            reUse(id) {
                this.$toast.loading({message: '提交中...', duration: 0, overlay: true})
                postAjax(`/api/User/SetUserRegStatu?linkId=${id}&statu=${true}`).then((data) => {
                    this.$toast.clear();
                    if (data.IsSucess)
                        this.getList();
                    else
                        this.$toast.fail(data.Message);
                })
            }


        }
    }
</script>

<style lang="less" scoped>
    .register_setting {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 0.4rem;

        .panel {
            display: flex;
            flex-direction: column;
            width: 9.4667rem;
            background-color: white;
            border-radius: 0.0667rem;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            margin-top: 0.3333rem;

            .edit_btn {
                background-color: #ebebeb;
                font-size: 0.32rem;
                width: 4.0933rem;
                height: 0.88rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0.0667rem;
            }

            .middle_line {
                display: flex;
                align-items: center;
                height: 0.6267rem;
            }

            .desc {
                width: 1.5rem;
                text-align-last: justify;
            }
        }

        label {
            font-size: 0.32rem;
        }
    }


</style>

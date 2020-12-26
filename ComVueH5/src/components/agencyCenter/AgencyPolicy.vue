<template>
    <div class="me_recard_main agency_policy">
        <my-title title-val="代理制度" :isShowLeftText="false"></my-title>
        <div class='panel' v-html="policyHtml" >

        </div>
    </div>
</template>

<script>
    import {postAjax} from '../../util/ajaxjson';

    export default {
        name: "agentPolicy",
        data() {
            return {
                policyHtml: '<div></div>',
            }
        },
        created() {
            this.$toast.loading({message: '正在加载...', duration: 0})
            postAjax('api/Proxy/GetProxyPolicy').then((data) => {
                this.$toast.clear()
                if (data.IsSucess)
                    this.policyHtml = data.Data;
                else
                    this.$toast.fail(data.Message);
            })
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .agency_policy {

        align-items: center;

        .panel {
            margin-top: .25rem;
            width: 9.4667rem;
            background-color: white;
            border-radius: 0.16666rem;
            padding: 0.4rem;
            font-size: 0.32rem;text-align: left
        }
    }

</style>

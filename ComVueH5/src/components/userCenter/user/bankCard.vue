<template>
    <div class="form_content_view bank_card">
        <div class="scroll">
            <my-title :title-val="title"></my-title>

            <div class="card">
                <div class="bank_card_item" v-for="(item,index) in bankList" :key="index">
                    <div class="card_head" style="height: 0.875rem;line-height: 0.875rem;">{{item.BankName}}</div>
                    <div class="card_content">{{item.BankNumber}}</div>
                </div>

            </div>

            <div class="add_button" @click="toAddBankCard"><span
                    style="font-size: 0.427rem!important;margin-left: 0.25rem">+</span>
                添加银行卡（最多10张）
            </div>
        </div>
    </div>
</template>

<script>
    import {getUserBankList} from "../../../util/user";

    export default {
        name: "bankCard",
        data() {
            return {
                title: '我的银行卡',
                bankList: []
            }
        },
        mounted() {
            let that = this;
            this.$toast.loading({message: '正在加载...', duration: 0})
            getUserBankList().then(data => {
                this.$toast.clear();
                if (data.IsSucess) {
                    that.bankList = data.Data;
                } else
                    this.$toast.fail(data.Message);

            })
        },
        methods: {
            toAddBankCard() {
                this.$router.replace('/addBankCard')
            }
        }
    }
</script>

<style lang="less" scoped>
    .bank_card {

        .card {
            background-color: white;
            padding: .5rem 0;

            .bank_card_item {
                width: 9.2rem;
                margin: 0rem  auto .5rem;
                background-color: #008573;
                color: white;
                text-align: left;
                font-size: 0.32rem;
                height: 1.96rem;
                font-family: "Microsoft YaHei";
                border-radius: 0.107rem;
                padding-left: 0.75rem;
                padding-top: .2rem;
            }
            .bank_card_item:last-child{
                margin: 0  auto 0;
            }
        }

        .add_button {
            width: 9.4rem;
            height: 1.2rem;
            line-height: 1.2rem;
            margin: .3rem auto .3rem;
            font-size: 0.373rem;
            color: #666666;
            text-align: center;
            background-color: #ffffff;
            border-radius: .13333rem;
        }


    }

</style>

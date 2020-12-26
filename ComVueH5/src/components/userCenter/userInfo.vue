<template>
    <div class="form_content_view user_info">
        <div class="scroll">
            <my-title :title-val="title" title-router="userCenter"></my-title>
            <div class="item">
                <span>用户名</span>
                <span >{{userInfo.LoginName}}</span>
            </div>
            <div class="item">
                <span>可用余额</span>
                <span >{{userInfo.Balance !==undefined?userInfo.Balance:'00.00'}}<span>&nbsp;元</span></span>
            </div>
            <div class="item">
                <span>真实姓名</span>
                <span >{{userInfo.FullName||'未填写'}}</span>
            </div>
            <div style="margin-top: 0.53333rem">
                <router-link class="item item_a" to="userData"><span>安全资料</span>
                    <van-icon name="arrow"></van-icon>
                </router-link>
                <router-link class="item item_a" to="bankCard"><span>银行卡</span>
                    <van-icon name="arrow"></van-icon>
                </router-link>
                <router-link class="item item_a" :to="{name:'amendPass',query:{id:0}}"><span>修改登录密码</span>
                    <van-icon name="arrow"></van-icon>
                </router-link>
                <router-link class="item item_a" :to="{name:'amendPass',query:{id:1}}"><span>修改资金密码</span>
                    <van-icon name="arrow"></van-icon>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userInfo",
        data() {
            return {
                title: '个人中心'
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            }
        }
    }
</script>

<style lang="less" scoped>
    .user_info {
        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 1.2rem;
            padding: 0 .4rem;
            margin-bottom: 0.01333rem;
            background-color: #ffffff;

            span {
                font-size: .32rem;
                color: #333333;
            }
        }

        .item_a {
            padding-right: 0.25rem;
        }
    }
</style>

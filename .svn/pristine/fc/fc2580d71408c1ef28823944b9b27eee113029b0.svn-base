<template>
    <div class="login">
        <my-title :isShowLeftText="false" :title-val="title" :title-type=1 :customRight="true">
            <label @click="toService" slot="customRight" class="area_icon iconfont icon-kefu"
                   style="color: white; font-size: 0.6267rem;"/>
        </my-title>
        <div class="login_div">
            <div class="login_box">
                <div class="input_item">
                    <label class="iconfont icon-gerenziliao lefticon"/>
                    <label class="desc">账号</label>
                    <input class="input" type="text" v-model.trim="userData.LoginName" placeholder="6-13位，字母或数字">
                </div>
                <div class="input_item">
                    <label class="iconfont icon-password lefticon"/>
                    <label class="desc">登录密码</label>
                    <input ref="loginPwd" class="input" type="password" v-model.trim="userData.PassWord"
                           placeholder="6-13位，字母或数字">
                    <label ref="loginPwdIcon" @click="switchLoginPwdVisible" class="iconfont icon-- righticon"/>
                </div>
                <div class="input_item">
                    <label class="iconfont icon-password lefticon"/>
                    <label class="desc">资金密码</label>
                    <input ref="moneyPwd" class="input" type="password" v-model.trim="userData.SafetyPassWord"
                           placeholder="6-13位，字母或数字">
                    <label ref="moneyPwdIcon" @click="switchMoneyPwdVisible" class="iconfont icon-- righticon"/>
                </div>
                <div class="input_item">
                    <label class="iconfont icon-password lefticon"/>
                    <label class="desc">手机号码</label>
                    <input ref="moneyPwd" class="input" type="ptext" v-model.trim="userData.PhoneNumber"
                           placeholder="输入11位手机号码"
                           minlength="10" maxlength="11">
                </div>
                <div class="input_item" style="margin-bottom: 0.4rem">
                    <label class="iconfont icon-yanzhengma lefticon"/>
                    <label class="desc">验证码</label>
                    <input class="input" type="number" v-model.trim="userData.VCode" placeholder="请输入验证码" maxlength="4"
                           style="width: 3.8667rem">
                    <img :src="codeImg" alt="验证码加载中" style="font-size: .32rem" @click.stop="getCode">
                </div>
                <div class="login_button" @click="regiestButton">
                    <label for="">立即注册</label>
                </div>
                <router-link to="/login" replace style="margin-top: .2rem">
                    <label style="color: #008573; font-size: 0.3467rem; margin-top: 0.5333rem; text-decoration:underline">已有账号,立即登录</label>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {postAjax, getAjax} from "../../util/ajaxjson";
    import {OpenCustomer} from '../../util/sysconfig';

    export default {
        name: 'register',
        data() {
            return {
                title: '注册',
                codeImg: '',//验证码图片
                userData: {
                    LoginName: '',
                    PassWord: '',
                    SafetyPassWord: '',
                    VCode: '',
                    VCGuid: '',
                    PhoneNumber: '',        // 电话号码
                    Domain: this.getDomain(),
                    Term: 0,
                },
                isShowLoginPwd: false,
                isShowMoneyPwd: false,
            }
        },
        created() {
            // 判断终端
            const that = this;
            this.getCode()
        },
        methods: {
            /**
             * 获取验证码
             */
            getCode() {
                let that = this;
                let url = "Api/Common/GetVerifyCode";
                this.codeImg='';
                getAjax(url).then(data => {
                    if (data.IsSucess) {
                        that.userData.VCGuid = data.Data.VcGuid
                        that.codeImg = data.Data.ImgBase64
                    }
                })
            },
            toService() {
                OpenCustomer()
            },

            /**
             * 获取domain
             */
            getDomain() {
                return document.domain;
            },

            regiestButton() {
                let that = this;
                if (that.userData.LoginName == "") {
                    that.$toast.fail("账号不能为空")
                } else if (that.userData.PassWord == "") {
                    that.$toast.fail("密码不能为空")
                } else if (that.userData.SafetyPassWord == "") {
                    that.$toast.fail("安全密码不能为空")
                } else if (that.userData.VCode == "") {
                    that.$toast.fail("验证码不能为空")
                } else if (that.userData.PhoneNumber.trim().length != 11) {
                    that.$toast.fail('请输入正确的手机号')
                } else {
                    that.$toast.loading({
                        mask: true,
                        message: '注册中...',
                        duration: 0
                    });

                    //验证提交数据
                    postAjax('api/User/DomainCreateUser', that.userData).then(function (data) {
                        that.$toast.clear()
                        if (data.IsSucess) {
                            that.$toast.loading({
                                mask: true,
                                message: '注册成功，跳转中...',
                                duration: 0
                            });
                            localStorage.setItem('token', "Basic" + " " + data.Data.Token);
                            that.$router.replace('/homeItem')
                        } else {
                            //获取错误提示显示到页面
                            that.$toast.fail(data.Message);
                            that.userData.VCode = '';
                            that.getCode();
                        }
                    })
                }
            },

            /**
             * 切换登录密码可见性
             */
            switchLoginPwdVisible() {
                let pwdIcon = this.$refs.loginPwdIcon;
                if (this.isShowLoginPwd) {
                    pwdIcon.classList.remove('icon-ai-eye')
                    pwdIcon.classList.add('icon--')
                } else {
                    pwdIcon.classList.remove('icon--')
                    pwdIcon.classList.add('icon-ai-eye')
                }

                this.isShowLoginPwd = !this.isShowLoginPwd;

                this.$refs.loginPwd.type = this.isShowLoginPwd ? 'text' : 'password';
            },

            /**
             * 切换资金密码可见性
             */
            switchMoneyPwdVisible() {
                let pwdIcon = this.$refs.moneyPwdIcon;
                if (this.isShowMoneyPwd) {
                    pwdIcon.classList.remove('icon-ai-eye')
                    pwdIcon.classList.add('icon--')
                } else {
                    pwdIcon.classList.remove('icon--')
                    pwdIcon.classList.add('icon-ai-eye')
                }

                this.isShowMoneyPwd = !this.isShowMoneyPwd;

                this.$refs.moneyPwd.type = this.isShowMoneyPwd ? 'text' : 'password';
            },

        }

    }
</script>

<style lang="less" scoped>
    .login {
        width: 100%;
        height: 100%;
        padding-top: 1.17777rem;
        background-color: #ffffff;
        overflow-y: auto;
        overflow-x: hidden;

        .login_div {
            width: 9.2rem;
            margin: 0 auto;

            .login_box {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;

                .input_item {
                    display: flex;
                    height: 1.32rem;
                    border-style: solid;
                    border-width: 0px 0px 0.01333rem 0px;
                    border-color: #eaeaea;
                    align-items: center;
                    width: 100%;

                    .lefticon {
                        color: rgba(204, 171, 114);
                        width: 0.6rem;
                        font-size: 0.3467rem;
                        margin-right: 0.2667rem;
                    }

                    .righticon {
                        color: gray;
                        font-size: 0.4733rem;
                        width: 0.52rem;
                        height: 0.3867rem;
                        position: absolute;
                        right: 0.7rem;
                    }

                    .desc {
                        width: 1.5rem !important;
                        font-size: 0.3733rem;
                        text-align: justify;
                        text-align-last: justify;
                        color: #333333;
                    }

                    input {
                        padding-left: 5%;
                        height: 0.51333rem;
                        font-size: 0.3733rem;
                        background: none;
                        border: none;
                    }

                    /*input:-webkit-autofill {*/
                        /*-webkit-box-shadow: 0 0 0px 1000px white inset; !**通过边框阴影遮挡住背景*!*/
                        /*-webkit-text-fill-color: #333;*/
                    /*}*/

                    ::placeholder {
                        font-size: 0.3733rem;
                        color: rgba(0, 0, 0, 0.3);
                        height: 0.51333rem;
                    }

                    img {
                        width: 2.56rem;
                        height: 1.01333rem;
                        border-radius: 0.1233rem;
                    }
                }
            }
        }

        .login_button {
            width: 100%;
            height: 1.2rem;
            display: flex;
            background-color: #008573;
            border-radius: .1rem;
            justify-content: center;
            align-items: center;

            label {
                color: white;
                font-size: 0.4267rem;

            }
        }

        * {
            box-sizing: border-box;
        }
    }
</style>

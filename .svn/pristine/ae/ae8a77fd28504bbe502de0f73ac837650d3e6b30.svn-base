<template>
    <div class="login">
        <my-title :title-val="title" :title-type=1 title-router="/homeItem" :customRight="true">
            <label @click="toService" slot="customRight" class="area_icon iconfont icon-kefu"
                   style="color: white; font-size: 0.6267rem; "/>
        </my-title>
        <div class="login_div">
            <div class="login_box">
                <div class="input_item">
                    <label class="iconfont icon-gerenziliao lefticon"/>
                    <label class="desc">账号</label>
                    <input class="input" type="text" v-model.trim="userData.LoginName" placeholder="请输入用户名">
                </div>
                <div class="input_item">
                    <label class="iconfont icon-password lefticon"/>
                    <label class="desc">密码</label>
                    <input ref="pwdInput" class="input" type="password" v-model.trim="userData.LoginPwd"
                           placeholder="请输入密码">
                    <label ref='pwdIcon' @click="switchPwdVisible" class="iconfont righticon" :class="{'icon-ai-eye':isShowPwd,'icon--':!isShowPwd}" />
                </div>
                <div class="input_item">
                    <label class="iconfont icon-yanzhengma lefticon"/>
                    <label class="desc">验证码</label>
                    <input class="input" type="number" v-model.trim="userData.VCode" placeholder="请输入验证码" maxlength="4"
                           style="width: 3.8667rem">
                    <img :src="codeImg" alt="验证码加载中" style="font-size: .32rem" @click.stop="getCode">

                </div>
                <van-picker :columns="getLineName" @change="_lineSelect" :item-height="ramHeight"
                            :default-index="defaultLineIndex" style="margin: .25rem 0" swipe-duration="500"
                            visible-item-count="5"/>
                <div @click="setChecked" style="width: 100%; display: flex; ">
                    <label v-if="checked" class="iconfont icon-xuanzhongcopyx "
                           style="color: #008573; font-size: 0.4rem"/>
                    <label v-if="!checked" class="iconfont icon-xuanzhongcopyx "
                           style="color: gray; font-size: 0.4rem"/>
                    <span style="font-size: 0.3467rem; color: #898989; margin-left: 0.1333rem">记住账号</span>
                </div>
                <div class="login_button" @click="loginButton">
                    <label for="">登录</label>
                </div>
                <div class="bottom_panel" >
                        <div class="bottom_link" @click="toReg">
                            <label class="iconfont icon-zhidu" style="font-size: .6rem;"></label>
                            <label >立即注册</label>
                        </div>


                    <div class="bottom_link" @click="tryPlay">
                        <label class="iconfont icon-iconfontyouxihudong" style="font-size: 0.45rem;margin-right: .1rem;"></label>
                        <label>免费试玩</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {selectHeight} from "../../mixins/height";
    import {postAjax, getAjax} from "../../util/ajaxjson";
    import {GetSysLines, OpenCustomer, GetTempUser, GetTerm, InWebView, encrypt, decrypt} from '../../util/sysconfig';

    export default {
        name: 'login',
        data() {
            return {
                title: '登录',
                checked: true,//是否记住密码状态
                codeImg: '',//验证码图片
                userData: {
                    LoginName: '',
                    LoginPwd: '',
                    Term: 0,
                    VCode: '',
                    VCGuid: ''
                },
                columns: [],            // 线路选择数据源
                isShowPwd: false,           //密码是否可见
            }
        },
        created() {
            // 判断终端
            const that = this;
            if (localStorage.getItem('user')) {
                Object.assign(this.userData, JSON.parse(decrypt(localStorage.getItem('user'))));
            }
            that.userData.Term = GetTerm();//终端类型
            this.getCode();
        },

        computed: {
            getLineName() {
                let data = GetSysLines();
                let result = [];
                data.forEach(item => result.push(item.Name));
                return result;
            },
            defaultLineIndex() {
                return this.$store.state.nowLineIndex;
            }
        },
        mixins: [selectHeight],
        methods: {
            toReg() {
                if (InWebView())
                    this.$toast.fail("App内不允许注册");
                else
                    this.$router.push({path:'/register'});
            },
            tryPlay() {
                GetTempUser('/homeItem');
            },
            getCode() {
                let that = this;
                let url = "Api/Common/GetVerifyCode";
                this.codeImg = '';
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
            loginButton() {
                let that = this;
                if (that.userData.LoginName == "") {
                    that.$toast.fail("账号不能为空")
                } else if (that.userData.LoginPwd == "") {
                    that.$toast.fail("密码不能为空")
                } else if (that.userData.VCode == "") {
                    that.$toast.fail("验证码不能为空")
                } else {
                    that.$toast.loading({mask: true, message: '登录中...', duration: 0});
                    //验证提交数据
                    postAjax('api/Login/In', that.userData).then(function (data) {
                        that.$toast.clear()
                        if (data.IsSucess) {
                            that.$toast.loading({
                                mask: true, message: '登录成功，跳转中...', duration: 0
                            });
                            localStorage.setItem('token', "Basic" + " " + data.Data.Token);
                            if (that.checked) {
                                localStorage.setItem('user', encrypt(JSON.stringify({
                                    LoginName: that.userData.LoginName,
                                    LoginPwd: that.userData.LoginPwd
                                })));
                            } else {
                                localStorage.removeItem('user')
                            }
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
            _lineSelect(picker1, value, index) {
                let src = GetSysLines();
                this.$axios.defaults.baseURL = src[index].Url;
                console.log("当前使用api地址=>" + this.$axios.defaults.baseURL);
                this.$store.commit('setNowLineIndex', index);
                localStorage.setItem('nowLineIndex', index);//本地保存
            },
            setChecked() {
                this.checked = !this.checked;
            },


            switchPwdVisible() {
                let pwdIcon = this.$refs.pwdIcon;
                if (this.isShowPwd) {
                    pwdIcon.classList.remove('icon-ai-eye')
                    pwdIcon.classList.add('icon--')
                } else {
                    pwdIcon.classList.remove('icon--')
                    pwdIcon.classList.add('icon-ai-eye')
                }

                this.isShowPwd = !this.isShowPwd;

                this.$refs.pwdInput.type = this.isShowPwd ? 'text' : 'password';
            }

        }

    }
</script>

<style lang="less" scoped>
    .login {
        width: 100%;
        height: 100%;
        padding-top: 1.17777rem;
        background-color: #ffffff;
        /*/deep/ .van-picker-column__item--selected {*/
            /*border-top: 0.01333rem solid #dbdbdb;*/
            /*border-bottom: 0.01333rem solid #dbdbdb;*/
        /*}*/

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
                    border-width: 0 0 0.01333rem 0;
                    border-color: #eaeaea;
                    align-items: center;
                    width: 100%;

                    .lefticon {
                        color: rgba(204, 171, 114);
                        width: 0.6rem;
                        font-size: 0.3467rem;
                        margin-right: 0.2667rem;
                    }

                    .desc {
                        width: 1.5rem !important;
                        font-size: 0.3733rem;
                        text-align: justify;
                        text-align-last: justify;
                    }

                    .righticon {
                        color: gray;
                        font-size: 0.4733rem;
                        width: 0.52rem;
                        height: 0.3867rem;
                        position: absolute;
                        right: 0.7rem;
                    }

                    input {
                        padding-left: 5%;
                        height: 0.51333rem;
                        font-size: 0.3733rem;
                        background: none;
                        border: none;

                    }

                    input:-webkit-autofill {
                        -webkit-box-shadow: 0 0 0px 1000px white inset; /**通过边框阴影遮挡住背景*/
                        -webkit-text-fill-color: #333;
                    }

                    ::placeholder {
                        font-size: 0.3733rem;
                        color: rgba(0, 0, 0, 0.3);
                        height: 0.51333rem;
                    }

                    img {
                        width: 2.56rem;
                        height: 1.01333rem;
                        border-radius: 0.1233rem;
                        margin-left: .5rem;
                    }
                }
            }
        }

        .login_button {
            width: 100%;
            height: 1.2rem;
            display: flex;
            background-color: #008573;
            border-radius: .2rem;
            justify-content: center;
            align-items: center;
            margin-top: .4rem;

            label {
                color: white;
                font-size: 0.4267rem;

            }
        }

        .bottom_panel{
            display: flex; position: absolute;bottom: 0.2rem; justify-content: space-between; flex: 1; width: 100%;
            padding-left: 0.2rem; padding-right: 0.2rem; height: .5rem;
            .bottom_link{
                display: flex;
                align-items: center;
                font-size: 0.4rem;
                color: #ccab72;
            }
            .bottom_btn {

            }
        }
    }


</style>

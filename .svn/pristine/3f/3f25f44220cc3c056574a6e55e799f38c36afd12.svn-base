<template>
    <div class="form_content_view">
        <div class="scroll">
            <my-title :title-val="title"></my-title>
            <div class="content_panel">
                <div class="row_item" v-if="!userInfo.FullName">
                    <div class="label_left">真实姓名</div>
                    <label>
                        <input type="text" placeholder="请输入真实姓名" v-model.trim="fromData.FullName" ref="nickInput">
                    </label>
                </div>
                <div class="row_item">
                    <div class="label_left">昵称</div>
                    <label>
                        <input type="text" placeholder="请输入昵称" v-model.trim="fromData.NickName" ref="inputNick">
                    </label>
                </div>
                <div class="row_item">
                    <div class="label_left">密保邮箱</div>
                    <label>
                        <input type="text" placeholder="请输入常用邮箱" v-model.trim="fromData.Email" ref="inputEmail">
                    </label>
                </div>
                <div class="row_item">
                    <div class="label_left">QQ号码</div>
                    <label>
                        <input type="number" @input="changeInputQq" placeholder="请输入QQ号码" v-model.trim="fromData.QqNumber"
                               ref="inputQQ">
                    </label>
                </div>
                <div class="row_item">
                    <div class="label_left">手机号码</div>
                    <label>
                        <input type="number" @input="changeInput" placeholder="请输入手机号码" v-model.trim="fromData.PhoneNumber"
                               ref="inputPhone">
                    </label>
                </div>
                <div class="row_item"   v-if="!userInfo.IsDataLock">
                    <div class="label_left">密保问题</div>
                    <label @click="showPicker = true">
                        <input type="text" disabled placeholder="请选择密保问题" v-model.trim="Question" >
                    </label>
                    <span class="iconfont icon-xia-" style="text-align: right;"  @click="showPicker = true"></span>
                    <van-popup v-model="showPicker" position="bottom">
                        <van-picker
                                show-toolbar
                                :columns="QuestionList"
                                @cancel="showPicker = false"
                                @confirm="onConfirm" :item-height="ramHeight"></van-picker>
                    </van-popup>
                </div>
                <div class="row_item" v-if="!userInfo.IsDataLock">
                    <div class="label_left">密保答案</div>
                    <label>
                        <input type="text" placeholder="请输入密保答案" v-model.trim="fromData.Answer">
                    </label>
                </div>
            </div>
            <div class="add_button" @click="submit">确定</div>
        </div>

    </div>
</template>

<script>
    import {amendUser, getSecurityQuestion} from "../../../util/user";
    import {getUserInfo} from "../../../util/game";
    import {selectHeight} from "../../../mixins/height";

    export default {
        name: "userData",
        data() {
            return {
                title: '安全资料',
                fromData: {
                    FullName: '',
                    QqNumber: '',
                    Email: '',
                    PhoneNumber: '',
                    NickName: '',
                    SqId: '',//密保问题id
                    Answer: '', //密保问题答案
                },
                Question: "",//密保问题
                showPicker: false,
                QuestionDatas: [],
                QuestionList: [],
                ramHeight: 80,//动态下拉框高度
            }
        },
        mixins: [selectHeight],
        watch: {
            'userInfo'(data) {
                this.fromData.FullName = data.FullName;
                this.fromData.QqNumber = data.QqNumber;
                this.fromData.Email = data.Email;
                this.fromData.PhoneNumber = data.PhoneNumber;
                this.fromData.NickName = data.NickName;
            }
        },
        created() {
            this.fromData.FullName = this.userInfo.FullName;
            this.fromData.QqNumber = this.userInfo.QqNumber;
            this.fromData.Email = this.userInfo.Email;
            this.fromData.PhoneNumber = this.userInfo.PhoneNumber;
            this.fromData.NickName = this.userInfo.NickName;
            if (!this.userInfo.IsDataLock) {
                this.GetSecurityQuestion();
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo
            }
        },
        methods: {
            onConfirm(value, index) {
                this.showPicker = false;
                let q = this.QuestionDatas[index];
                this.Question = q.Question;
                this.fromData.SqId = q.SqId;
            },
            showEye(name, refs) {
                this[name] = this[name] ? false : true
                let typeName = this[name] ? "text" : "password"
                refs.type = typeName
            },
            GetSecurityQuestion() {
                let that = this
                getSecurityQuestion(this.fromData).then(data => {
                    that.QuestionDatas = data;
                    that.QuestionDatas.forEach(item => {
                        that.QuestionList.push(item.Question);
                    })
                })
            },
            //提交修改后的资料
            submit() {
                let that = this;
                let mailReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
                if (!this.fromData.FullName)
                    this.$toast.fail('请输入真实姓名');
                else if (!mailReg.test(this.fromData.Email)) {
                    this.$toast.fail('邮箱格式不正确');
                } else if (!(/^1[345789]\d{9}$/.test(this.fromData.PhoneNumber))) {
                    this.$toast.fail('手机号码不正确');
                } else {
                    if (!this.userInfo.IsDataLock) {
                        if (!this.fromData.SqId)
                            return this.$toast.fail('请选择密保问题');
                        else if (!this.fromData.Answer)
                            return this.$toast.fail('请输入密保答案');
                    }
                    this.$toast.loading({
                        mask: true,
                        message: '提交中...',
                        duration: 0
                    });
                    amendUser(this.fromData).then(data => {
                        this.$toast.clear();
                        if (data.IsSucess) {
                            getUserInfo();
                            that.$toast.success('操作成功');
                            setTimeout(() => {
                                that.$router.go(-1);
                            }, 500)
                        } else {
                            that.$toast.fail(data.Message)
                        }
                    })

                }
            }
            ,
            changeInput() {
                this.fromData.PhoneNumber = this.fromData.PhoneNumber.replace(/\D/g, '');
                if (this.fromData.PhoneNumber.length > 11) {
                    this.fromData.PhoneNumber = this.fromData.PhoneNumber.substring(0, 11)
                }
            }
            ,

            changeInputQq() {
                this.fromData.QqNumber = this.fromData.QqNumber.replace(/\D/g, '');
                if (this.fromData.QqNumber.length > 10) {
                    this.fromData.QqNumber = this.fromData.QqNumber.substring(0, 10)
                }
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
</style>

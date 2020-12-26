<template>
    <div class="form_content_view">
        <my-title :title-val="headTitle" title-router="userInfo"></my-title>
        <div class="content_panel">
            <div class="row_item" >
                <div class="label_left">旧密码</div>
                <label >
                    <input  v-model.trim="form.oldPassword" type="password" placeholder="请输入旧密码" ref="oldPwd">
                </label>
                <span class="small_icon iconfont" :class="{'icon-ai-eye':old,'icon--':!old}" @click="showEye('old',$refs['oldPwd'])"></span>
            </div>
            <div class="row_item" >
                <div class="label_left">新密码</div>
                <label >
                    <input v-model.trim="form.newPassword" type="password" placeholder="请输入新密码" ref="newPwd">
                </label>
                <span class="small_icon iconfont" :class="{'icon-ai-eye':newP,'icon--':!newP}" @click="showEye('newP',$refs['newPwd'])"></span>
            </div>
            <div class="row_item" >
                <div class="label_left">确认密码</div>
                <label >
                    <input v-model.trim="form.confirmPassword" type="password" placeholder="请确认新密码" ref="confim">
                </label>
                <span class="small_icon iconfont" :class="{'icon-ai-eye':confPwd,'icon--':!confPwd}" @click="showEye('confPwd',$refs['confim'])"></span>
            </div>
        </div>
        <div class="add_button" @click="amendPass">确定</div>
    </div>
</template>

<script>
    import {amendPassWord} from "../../../util/user";

    export default {
        name: "amendPass",
        data() {
            return {
                form: {
                    PwdType: this.$route.query.id,
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                },
                old: false,
                newP: false,
                confPwd: false
            }
        },
        computed: {
            headTitle() {
                return this.$route.query.id == '0' ? "修改登录密码" : "修改资金密码"
            }
        },
        methods: {
            showEye(name, refs) {
                this[name] = this[name] ? false : true
                let typeName = this[name] ? "text" : "password"
                refs.type = typeName
            },
            amendPass() {
                let data = this.form;
                let that = this;
                if (!data.oldPassword)
                    that.$toast.fail('请输入旧密码')
                else if (data.newPassword.length < 6) {
                    that.$toast.fail('新密码长度不能小于6')
                } else if (data.newPassword !== data.confirmPassword) {
                    that.$toast.fail('新密码和确认密码不一致')
                } else if (data.oldPassword === data.newPassword) {
                    that.$toast.fail('新密码不能和旧密码一致')
                } else {
                    that.$toast.loading({
                        mask: true,
                        message: '提交中...',
                        duration: 0
                    });
                    amendPassWord(data).then(data => {
                        that.$toast.clear();
                        if (data.IsSucess) {
                            that.$toast.success("修改成功");
                            if (that.form.PwdType == '0') {
                                setTimeout(function () {
                                    that.$store.dispatch('logout', this);
                                    that.$router.replace('/Login')
                                }, 500)
                            }
                        } else {
                            that.$toast.fail(data.Message);
                        }
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
</style>

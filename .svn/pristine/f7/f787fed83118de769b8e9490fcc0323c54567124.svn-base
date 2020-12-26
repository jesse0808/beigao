<template>
    <div class="add_member">
        <div class="panel">
            <div class="panel_line">
                <label>用户类型：</label>
                <div class="btn_small btn_type_choose" ref="btn_type_member" @click="switchUserType('member')"
                     style=" margin-right: 0.25rem; margin-left: 0.42rem">
                    <label>玩家</label>
                </div>
                <div class="btn_small btn_type_unchoose" ref="btn_type_agency" @click="switchUserType('agency')">
                    <label>代理</label>
                </div>
            </div>
            <div class="panel_line">
                <label>登录账号：</label>
                <input ref="userName" type="text" placeholder="请输入登录账号"/>
            </div>
            <div class="panel_line">
                <label>登录密码：</label>
                <input ref="loginPwd" type="text" value="123456" placeholder="请输入登录密码"/>
            </div>
            <div class="panel_line">
                <label>资金密码：</label>
                <input ref="securityPwd" value="123456" type="text" placeholder="请输入资金密码"/>
            </div>
        </div>

        <div class="panel" @click="addNew"
             style="height: 1.1733rem; background-color: #008573; display: flex; justify-content: center; padding-left: 0; ">
            <label style="color: white; font-size: 0.3733rem">提交</label>
        </div>

        <div v-for="(item , index) in options" :key="index">
            <div class="panel"
                 style=" justify-content: space-between; padding: .2rem;flex-direction:inherit; align-items: center;">
                <div style="width: 1.5rem; text-align: left">{{item.LsText}}</div>
                <div style="width: 1.9067rem; border-style: solid; height: 0.72rem; border-width: 1px; border-radius: 5px;
                    border-color: #999999; display: flex; ">
                    <input type="number" :value="item.Value" :name="item.LsText"
                           style="width:100%; display: inline-block; text-align: center; margin: 0px"
                           @input="rateInput">
                </div>
                <div class="rate" style=" width: 3.5rem; text-align: center;  color: #999999">{{item.desc}}</div>

            </div>

        </div>
    </div>
</template>

<script>
    import {postAjax} from '../../../util/ajaxjson';

    export default {
        name: "addMember",
        data() {
            return {
                addUserType: 2,
                options: [
                    {
                        UserId: 0,
                        BmId: 0,
                        LsId: 0,
                        LsText: "",
                        Rebate: 0,
                        Value: 0,
                        BmName: "",
                        ReturnRate: 0,
                        AllMoney: 0,
                        desc: ''
                    }
                ]
            }
        },
        computed: {},
        created() {
            this.options=[];
            this.getRebate();
        },
        methods: {
            /**
             * 修改用户类型
             */
            switchUserType(type) {
                let btnMember = this.$refs.btn_type_member;
                let btnAgency = this.$refs.btn_type_agency;
                if (type == 'member') {
                    this.addUserType = 2;
                    btnMember.classList.add('btn_type_choose');
                    btnMember.classList.remove('btn_type_unchoose');

                    btnAgency.classList.add('btn_type_unchoose')
                    btnAgency.classList.add('btn_type_choose')
                }
                if (type == 'agency') {
                    this.addUserType = 1;
                    btnAgency.classList.add('btn_type_choose');
                    btnAgency.classList.remove('btn_type_unchoose');

                    btnMember.classList.add('btn_type_unchoose')
                    btnMember.classList.add('btn_type_choose')
                }
            },

            /**
             * 获取当前用户的返点信息
             */
            getRebate() {
                this.$toast.loading({message: '加载配置...', duration: 0})
                postAjax('api/Proxy/GetRebate').then((data) => {
                    this.$toast.clear()
                    if (data.IsSucess) {
                        data.Data.forEach(item => {
                            let jj = this.getMinMaxJj(item.AllMoney, item.ReturnRate, item.Rebate);
                            item['desc'] = `(0-${item.Rebate}) (${jj.min}-${jj.max})`;
                            item['Value'] = item.Rebate;
                        })
                        this.options = data.Data;
                    } else
                        this.$toast(data.Message);

                })
            },

            /**
             * 计算返回的最低最高奖金
             * allMoney 全选总额
             * returnRate 返奖率
             * rate 用户返点
             */
            getMinMaxJj(allMoney, returnRate, rate) {
                let min = allMoney * returnRate;
                let max = min + (allMoney * parseFloat(rate) / 100);
                return {min: min, max: max}
            },

            getOptionByName(name) {
                for (let i = 0; i < this.options.length; i++) {
                    if (this.options[i].LsText == name) {
                        return this.options[i]
                    }
                }
            },


            /**
             * 返点输入框输入方法
             */
            rateInput(event) {
                let name = event.target.name;
                let inputValue = event.target.value;
                if (inputValue) {
                    let option = this.getOptionByName(name);
                    let val = parseInt(inputValue);
                    if (val < 0) {
                        inputValue = 0;
                    } else if (val > option.Rebate)
                        inputValue = option.Rebate;
                    let maxData = this.getMinMaxJj(option.AllMoney, option.ReturnRate, inputValue);
                    let newDesc = `(0-${option.Rebate}) (${maxData.min}~${maxData.max})`;

                    option.desc = newDesc;
                    option.Value = inputValue;
                }
            },


            /**
             * 添加新用户
             */
            addNew() {
                if (!new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,13}$").test(this.$refs.userName.value)) {
                    return this.$toast.fail("登录账号必须6-13个字符组成,且不能为纯数字");
                }
                if (!/^[\S]{6,16}$/.test(this.$refs.loginPwd.value)) {
                    return this.$toast.fail("登录密码必须6到16位");
                }
                if (!/^[\S]{6,16}$/.test(this.$refs.securityPwd.value)) {
                    return this.$toast.fail("资金密码必须6到16位");
                }
                let data = {
                    LoginName: this.$refs.userName.value,
                    PassWord: this.$refs.loginPwd.value,
                    SafetyPassWord: this.$refs.securityPwd.value,
                    IsTest: false,
                    UtId: this.addUserType,          // 1-代理， 2-玩家
                    Rebates: this._getUpdateRebates()
                }
                this.$toast.loading({message: '正在请求...', duration: 0, overlay: true})
                postAjax('api/Proxy/ProxyCreateUser', data).then((data) => {
                    this.$toast.clear()
                    if (data.IsSucess) {
                        this.$toast.success('添加成功')
                        this.$refs.userName.value = '';
                    } else
                        this.$toast.fail(data.Message)
                })
            },
            /**
             * 获取添加用户时需要的返点数据
             */
            _getUpdateRebates() {
                let result = [];
                this.options.forEach(item => {
                    result.push({
                        LsId: item.LsId,
                        BmId: item.BmId,
                        Rebate: item.Value || item.Rebate
                    })
                })
                return result;
            }

        },

    }
</script>

<style lang="less" scoped>
    .add_member {
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
            padding-left: 0.4rem;

            .panel_line {
                height: 1.1733rem;
                display: flex;
                align-items: center;
                border-style: solid;
                border-width: 0px 0px 1px 0px;
                border-color: rgba(0, 0, 0, 0.14);
            }

        }

        label {
            font-size: 0.32rem;
        }

        .btn_small {
            width: 3.2667rem;
            height: 0.8267rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
        }

        .btn_type_choose {
            background-color: #008573;

            label {
                color: white;
            }
        }

        .btn_type_unchoose {
            background-color: #ebebeb;

            label {
                color: #999999;
            }
        }

        input {
            border: none;
            background: none;
            width: 6.5rem;
            font-size: 0.32rem;
            margin-left: 0.4rem;

            &::placeholder {
                font-size: 0.32rem;
                color: #c9c9c9
            }
        }
    }
</style>

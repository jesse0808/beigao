<template>
    <div class="form_content_view">
        <div class="scroll">
            <my-title title-val="提现" title-router="userCenter" :title-type=1 :customRight=true>
            <span slot="customRight" style="color: white;font-size:0.32rem"
                  @click="$router.push('/cashRecard')">提现记录</span>
            </my-title>
            <div class="content_panel">
                <div class="row_item">
                    <div class="label_left">账户余额</div>
                    <label style="color: #ff6200"> {{resetStatus?'加载中':userInfo.Balance}}</label>
                    <div>元</div>
                </div>
                <div class="row_item">
                    <div class="label_left">出款账号</div>
                    <label @click="showBankDiv = true"><input type="text" disabled v-model="bankCard" placeholder="请选择出款账号" ></label>
                    <span class="iconfont icon-xia-"></span>
                    <van-popup v-model="showBankDiv" position="bottom">
                        <van-picker show-toolbar :columns="showBankData" @confirm="onChange" @cancel="showBankDiv = false"
                                    :item-height="ramHeight"/>
                    </van-popup>
                </div>
                <div class="row_item">
                    <div class="label_left">提现金额</div>
                    <label><input type="number" v-model="form.DmMoney" placeholder="请输入提现金额"></label>
                </div>
                <div class="row_item">
                    <div class="label_left">资金密码</div>
                    <label>
                        <input type="password" v-model="form.PayPassword" placeholder="请输入资金密码" ref="passwd">
                    </label>
                    <span class="small_icon iconfont" :class="{'icon-ai-eye':!showPwd,'icon--':showPwd}"
                          @click="showEye('showPwd',$refs['passwd'])"></span>
                </div>
            </div>
            <div class="add_button" @click="onSubminApplyFor">确定申请</div>
            <div class="other_remark" style="text-align: left;">
                <p>提现时间：{{sysDicData["DwStart"].SysValue}}-{{sysDicData["DwEnd"].SysValue}}</p>
                <p>每日可提现：&ensp;{{sysDicData["DwCount"].SysValue==0?'无限制':sysDicData["DwCount"].SysValue + ' 次'}}</p>
                <p>每日最多提现：{{sysDicData["DwDayMax"].SysValue}}&ensp;元</p>
                <p>单次提现限制：{{sysDicData["DwMin"].SysValue}}-{{sysDicData["DwMax"].SysValue}} 元</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {selectHeight} from "../../../mixins/height";
    import {getUserDwBankList} from "../../../util/user";
    import {userDrawMoney} from "../../../util/money";
    import {getUserInfo} from "../../../util/game";

    export default {
        name: "withdraw",
        data() {
            return {
                resetStatus: false,
                bankCard: '',//选中后显示的值
                showBankDiv: false,//打开的下拉选择框状态
                showBankData: [],//下拉选择数据
                userBankDatas: [],//api返回的银行数据集合
                form: {
                    DmMoney: '',
                    UbcId: '',
                    PayPassword: '',
                    FullName: '',
                },
                showPwd: true
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            },
            sysDicData() {
                return this.$store.state.sysConfig;
            }
        },
        mixins: [selectHeight],
        created() {
            let that = this;
            that.$toast.loading({message: '正在加载', duration: 0});
            getUserDwBankList().then(data => {
                that.$toast.clear();
                if (data.IsSucess) {
                    if(data.Data.length<=0)
                    {
                        that.$dialog.alert({
                            message: '请先添加银行卡',
                        }).then(() => {
                           that.$router.replace('/bankCard');
                        });
                    }
                    else{
                        that.showBankData = []
                        that.userBankDatas = data.Data;
                        that.userBankDatas.forEach(item => {
                            that.showBankData.push(`${item.BankNumber}(${item.BankName})`)
                        })
                    }
                } else
                    that.$toast.fail("获取银行卡错误,请重试");
            })
            this.getUserBalance();
        },
        methods: {
            getUserBalance(){
                this.resetStatus = true;
                getUserInfo().then(data => {
                    this.resetStatus = false;
                });
            },
            showEye(name, refs) {
                this[name] = this[name] ? false : true
                let typeName = this[name] ? "text" : "password"
                refs.type = typeName
            },
            onSubminApplyFor() {
                let that = this;
                that.form.FullName = that.userInfo.FullName
                if (that.form.UbcId === "") {
                    that.$toast.fail('请选择出款账号')
                } else if (that.form.DmMoney === '') {
                    that.$toast.fail('请输入提现金额')
                } else if (that.form.PayPassword === '') {
                    that.$toast.fail('请输入资金密码')
                } else {
                    that.$toast.loading({mask: true, message: '提交中...', duration: 0});
                    userDrawMoney(that.form).then(data => {
                        that.$toast.clear();
                        that.form.DmMoney = '';
                        that.form.PayPassword = '';
                        if (data.IsSucess) {
                            this.getUserBalance();
                            that.$toast.success("申请成功,正在审核中");
                        } else
                            that.$toast.fail(data.Message);

                    })
                }
            },
            onChange(value, index) {
                this.bankCard = value
                this.form.UbcId = this.userBankDatas[index].UbcId || ""
                this.showBankDiv = false;
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>

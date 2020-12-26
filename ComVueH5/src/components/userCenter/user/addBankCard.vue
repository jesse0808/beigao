<template>
    <div class="form_content_view">
        <div class="scroll">
            <my-title :title-val="title" title-router="bankCard"></my-title>
            <div class="content_panel">
                <div class="row_item">
                    <div class="label_left">开户银行</div>
                    <label @click="showBank = true">
                        <input type="text" disabled v-model.trim="bankValue" placeholder="请选择开户银行">
                    </label>
                    <span class="iconfont icon-xia-"></span>
                    <van-popup v-model="showBank" position="bottom">
                        <van-picker
                                show-toolbar
                                :columns="bankData"
                                @cancel="showBank = false"
                                @confirm="onBank" :item-height="ramHeight"></van-picker>
                    </van-popup>
                </div>
                <div class="row_item">
                    <div class="label_left">银行账号</div>
                    <label>
                        <input type="number" @input="changeVa" v-model.trim="form.BankNumber" placeholder="请输入银行账号">
                    </label>

                </div>
                <div class="row_item">
                    <div class="label_left">银行地址</div>
                    <label @click="showPicker = true">
                        <input type="text" disabled v-model.trim="BankAddress" placeholder="请选择地址">
                    </label>
                    <span class="iconfont icon-xia-"></span>
                    <van-popup v-model="showPicker" position="bottom">
                        <van-area :area-list="areaList" :columns-num="2" @confirm="onConfirm"   @cancel="showPicker = false" title=""
                                  :item-height="ramHeight"/>
                        <!--<van-picker-->
                        <!--show-toolbar-->
                        <!--:columns="provinceData"-->
                        <!--@cancel="showPicker = false"-->
                        <!--@confirm="onConfirm" :item-height="ramHeight"></van-picker>-->
                    </van-popup>
                </div>
                <!--<div class="row_item">-->
                <!--<div class="label_left">银行城市</div>-->
                <!--<label @click="showCity = true">-->
                <!--<input type="text" disabled v-model.trim="form.BankCity" placeholder="请选择城市" >-->
                <!--</label>-->
                <!--<span class="iconfont icon-xia-"></span>-->
                <!--<van-popup v-model="showCity" position="bottom">-->
                <!--<van-picker-->
                <!--show-toolbar-->
                <!--:columns="cityData"-->
                <!--@cancel="showCity = false"-->
                <!--@confirm="onCity" :item-height="ramHeight"></van-picker>-->
                <!--</van-popup>-->
                <!--</div>-->
                <div class="row_item">
                    <div class="label_left">支行名称</div>
                    <label>
                        <input type="text" v-model.trim="form.BankBranch" placeholder="请输入支行名称">
                    </label>
                </div>
            </div>
            <div class="add_button" @click="addBankFun">添加</div>
            <div class="other_remark">
                <p>*请核实银行卡号的正确性，错误的卡号将无法进行提款</p>
            </div>
        </div>

    </div>
</template>

<script>
    import {getBankList, getProvinceInfo, getCityInfo, addBankCrad} from "../../../util/user";
    import {selectHeight} from "../../../mixins/height";
    import {areaData} from "../../../util/area";

    export default {
        name: "addBankCard",
        data() {
            return {
                title: '添加银行卡',
                bankList: [],//银行卡列表
                bankData: [],//银行卡下拉
                showPicker: false,//选择地址状态
                showBank: false,//开户银行
                bankValue: '',//开户银行选择的值
                BankAddress: '',//银行地址选择的省份城市

                form: {
                    Bid: '',//银行id
                    BankProvince: '',
                    BankCity: '',
                    BankNumber: '',
                    BankBranch: ''
                },
            }
        },
        mixins: [selectHeight, areaData],
        computed: {
            userData() {
                return this.$store.state.userInfo;
            },
        },
        created() {
            const that = this;
            that.$toast.loading({
                message: '正在加载',
                duration: 0
            });
            //银行列表
            getBankList().then(data => {
                this.$toast.clear()
                if (data) {
                    that.bankList = data;
                    that.bankData = data.map(item => {
                        return item.Name;
                    })
                } else
                    this.$toast.fail("加载银行错误,请重试")

            });
        },
        methods: {
            //开户银行
            onBank(value, index) {
                this.bankValue = value;
                this.showBank = false;
                this.form.Bid = this.bankList[index].Bid;
            },
            // 地址选择
            onConfirm(value) {
                let that = this;
                that.form.BankProvince = value[0].name;//省份
                that.form.BankCity = value[1].name;//城市
                that.BankAddress = that.form.BankProvince + " " + that.form.BankCity;
                that.showPicker = false;
            },
            //添加银行卡
            addBankFun() {
                const that = this;
                let bankno = this.form.BankNumber;
                let num = /^\d*$/; //全数字
                let strBin =
                    "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99"; //开头6位
                if (that.form.Bid === '') {
                    that.$toast.fail('请选择开户银行')
                } else if (bankno === "") {
                    that.$toast.fail('请输入银行卡号')
                } else if (bankno.length < 16 || bankno.length > 19) {
                    that.$toast.fail('银行卡号长度必须在16到19之间')
                } else if (!num.exec(bankno)) {
                    that.$toast.fail('银行卡号必须全为数字')
                } else if (strBin.indexOf(bankno.substring(0, 2)) == -1) {
                    that.$toast.fail('银行卡号开头6位不符合规范')
                } else if (that.form.BankProvince === '') {
                    that.$toast.fail('请选择省份')
                } else if (that.form.BankCity === '') {
                    that.$toast.fail('请选择城市')
                } else if (that.form.BankBranch == '') {
                    that.$toast.fail('请输入支行名称')
                } else {
                    that.$toast.loading({
                        mask: true,
                        message: '提交中...',
                        duration: 0
                    });
                    addBankCrad(this.form).then(data => {
                        that.$toast.clear();
                        if (data.IsSucess) {
                            that.$toast.success('添加成功');
                            setTimeout(() => {
                                that.$router.replace('/bankCard')
                            }, 500)
                        } else {
                            that.$toast.fail(data.Message)
                        }
                    });
                }
            },
            changeVa() {
                this.form.BankNumber = this.form.BankNumber.replace(/[^\d]/g, '');
                if (this.form.BankNumber.length > 19) {
                    this.form.BankNumber = this.form.BankNumber.substring(0, 19)
                }
            }
        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped>

</style>

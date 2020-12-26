<template>
    <div class="form_content_view recharge">
        <div class="scroll">
            <my-title :title-val="title" :title-type=1 :customRight=true title-router="userCenter">
            <span slot="customRight" style="color: white;font-family: 'Microsoft YaHei';font-size:0.32rem"
                  @click="$router.push('/rechargeRecord')">充值记录</span>
            </my-title>
            <div class="recharge-context">
                <!-- 绿色通道-->
                <div class="title-box" v-if="LTDatas.length > 0">
                    绿色通道
                </div>

                <div class="qudao-list" v-if="LTDatas.length > 0">
                    <div class="qudao-item" v-for="(item,index) in LTDatas" :key="index"
                         :class="{'selectedItem':selectPayIdx === item.RcKey}" @click="selectHandler(item)">
                        {{item.Alias}}
                    </div>
                </div>

                <!-- 支付扫码-->
                <div class="title-box" v-if="TScanDatas.length > 0">
                    扫码支付
                </div>
                <div class="qudao-list" v-if="TScanDatas.length > 0">
                    <div class="qudao-item" v-for="(item,index) in TScanDatas" :key="index"
                         :class="{'selectedItem':selectPayIdx === item.RcKey}" @click="selectHandler(item)">
                        {{item.Alias}}
                    </div>
                </div>

                <!-- h5-->
                <div class="title-box" v-if="H5Datas.length > 0">
                    H5支付
                </div>
                <div class="qudao-list" v-if="H5Datas.length > 0">
                    <div class="qudao-item" v-for="(item,index) in H5Datas" :key="index"
                         :class="{'selectedItem':selectPayIdx === item.RcKey}" @click="selectHandler(item)">
                        {{item.Alias}}
                    </div>
                </div>

                <!--转卡-->
                <div class="title-box" v-if="ZkDatas.length > 0">
                    转卡支付
                </div>
                <div class="qudao-list" v-if="ZkDatas.length > 0">
                    <div class="qudao-item" v-for="(item,index) in ZkDatas" :key="index"
                         :class="{'selectedItem':selectPayIdx === item.RcKey}" @click="selectHandler(item)">
                        {{item.Alias}}
                    </div>
                </div>

                <!-- 三方网银-->
                <div class="title-box" v-if="TBankDatas.length > 0">
                    三方网银
                </div>
                <div class="qudao-list" v-if="TBankDatas.length > 0">
                    <div class="qudao-item" v-for="(item,index) in TBankDatas" :key="index"
                         :class="{'selectedItem':selectPayIdx === item.RcKey}" @click="selectHandler(item)">
                        {{item.Alias}}
                    </div>
                </div>

                <div class="input-div">
                    <input type="number"  v-model="rechrgeAmount" :placeholder="placeholderTxt"/>
                </div>
            </div>
            <div style="width: 100%;height: auto;padding: 0.5rem;">
                <div class="ok-button" @click="onSubmin">确认充值</div>
            </div>
            <van-dialog
                    v-model="qrShow"
                    title="扫码充值"
                    showConfirmButton
                    confirmButtonText="完成"
            >
                <div slot="default" ref="qrcode" class="qrcode" style="display: flex;justify-content: center; margin: 0.25rem"></div>
            </van-dialog>
            <van-dialog
                    v-model="imgShow"
                    title="扫码充值"
                    showConfirmButton
                    confirmButtonText="完成"
            >
                <div slot="default" style="display: flex;justify-content: center; margin: 0.25rem">
                    <img :src="base64Img" style="width: 5rem;height: 5rem;">
                </div>
            </van-dialog>
        </div>
    </div>
</template>

<script>
    import {getPatData, moneyRecharge, getUnFillOrder} from "../../../util/money";
    import {selectHeight} from "../../../mixins/height";
    import {OpenWindow, OpenPostWindow} from "../../../util/sysconfig";
    import QRCode from 'qrcodejs2'

    export default {
        name: "recharge",
        data() {
            return {
                title: '充值',
                TScanDatas: [],//扫码渠道
                TBankDatas: [],//网银渠道
                LTDatas: [],//渠道显示数据
                H5Datas:[],//h5渠道
                ZkDatas:[],//转卡渠道
                payData: {
                    RcKey: null,
                    RcMoney: ''
                },
                selectPayData: null,
                selectPayIdx: '',
                rechrgeAmount: '',
                placeholderTxt: "请选择充值通道",
                qrShow: false,//生成二维码弹窗状态
                imgShow: false,//二维码图片弹窗状态
                base64Img: '',//二维码base64图片
            }
        },
        mixins: [selectHeight],
        methods: {
            getChannel() {
                let that = this;
                this.$toast.loading({message: '正在加载...', duration: 0})
                getPatData().then(data => {
                    this.$toast.clear();
                    if (data.IsSucess) {
                        that.topData = data.Data;
                        if (data.Data.LT.length > 0) {
                            that.LTDatas = data.Data.LT
                        }
                        if (data.Data.TBank.length > 0) {
                            that.TBankDatas = data.Data.TBank
                        }
                        if (data.Data.TScan.length > 0) {
                            that.TScanDatas = data.Data.TScan
                        }
                        if (data.Data.TH5.length > 0) {
                            that.H5Datas = data.Data.TH5
                        }
                        if (data.Data.TZk.length > 0) {
                            that.ZkDatas = data.Data.TZk
                        }
                    } else {
                        that.$toast.fail(data.Message)
                    }
                })
            },
            selectHandler(item) {
                this.selectPayData = item
                this.selectPayIdx = item.RcKey
                this.placeholderTxt = `金额：${item.MinMoney}-${item.MaxMoney}`
            },
            //提交支付
            onSubmin() {
                let that = this;
                if (that.selectPayData === null) {
                    that.$toast.fail('请选择支付通道')
                } else if (that.rechrgeAmount <= 0) {
                    that.$toast.fail('请输入充值金额')
                } else if (that.selectPayData.MinMoney > that.rechrgeAmount || that.selectPayData.MaxMoney < that.rechrgeAmount) {
                    that.$toast.fail(`金额范围 ${that.selectPayData.MinMoney}-${that.selectPayData.MaxMoney}`)
                } else {
                    if (that.selectPayData.ChannelType === 1) {
                        this.$toast.loading({message: '检测订单...', duration: 0})
                        getUnFillOrder().then(data => {
                            this.$toast.clear();
                            if (data.Data == null) {
                                this.createOrder()
                            } else {
                                that.$dialog.alert({
                                    message: '有未完成的订单,请先处理',
                                }).then(() => {
                                    sessionStorage.setItem("ltOrderInfo", JSON.stringify(data.Data));
                                    that.$router.push("/rechargeInfo")
                                });
                            }
                        })
                    } else {
                        this.createOrder()
                    }
                }
            },
            createOrder() {
                //   this.$store.commit('setQrcodeImg', '')
                this.$toast.loading({
                    mask: true,
                    message: '提交中...',
                    duration: 0
                });
                this.payData.RcKey = this.selectPayData.RcKey
                this.payData.RcMoney = this.rechrgeAmount
                moneyRecharge(this.payData).then(data => {
                    this.$toast.clear();
                    if (data.IsSucess) {
                        if (this.selectPayData.ChannelType == 1) {
                            sessionStorage.setItem("ltOrderInfo", JSON.stringify(data.Data));
                            this.$router.push("/rechargeInfo")
                        } else
                            this.showSwith(data.Data)
                    } else
                        this.$toast.fail(data.Message);
                })
            },
            showSwith(data) {
                if (!data.PayResult)
                    return this.$toast.fail("支付通道返回异常");
                if (data.PayResult.OpType == 1) {
                    this.qrShow = true
                    this.$nextTick(() => {
                        this.$refs["qrcode"].innerHTML = ""
                        new QRCode(this.$refs["qrcode"], {width: 400, height: 400, text: data.PayResult.QrCode});
                    })
                    //弹窗
                } else if (data.PayResult.OpType == 2) {  // 表单提交
                    this.$dialog.confirm({message: '打开新窗口完成支付?',})
                        .then(() => {
                            let payURL = this.$axios.defaults.baseURL + "post.html";
                            let newURL = payURL.replace("https", "http");
                            OpenPostWindow(newURL, {"url": data.PayResult.RequestUrl, "param": data.PayResult.Params});
                        }).catch(() => {
                    });

                } else if (data.PayResult.OpType == 3) {  // 打开新窗口
                    this.$dialog.confirm({message: '打开新窗口完成支付?',})
                        .then(() => {
                            OpenWindow(data.PayResult.Url)
                        }).catch(() => {
                    });
                } else if (data.PayResult.OpType == 4) {
                    //base64 位
                    this.base64Img = data.PayResult.QrCode;
                    this.imgShow = true;
                } else
                    this.$toast.fail("未知的处理方式");
            },

        },
        mounted() {
            sessionStorage.removeItem("ltOrderInfo")
            this.getChannel()
        }
    }
</script>

<style lang="less" >
    .recharge {
        .recharge-context {
            padding: 0 0.4rem 0.4rem 0.4rem;
            width: 100%;
            background-color: white;
            color: #333333;
        }

        .qudao-item {
            border: 0.01333rem solid #f0f0f0;
            background-color: #f7f7f7;
            border-radius: 0.15rem;
            height: 0.96rem;
            width: 2.6rem;
            text-align: center;
            line-height: 0.96rem;
            font-size: 0.32rem !important;
            margin-right: 0.66666rem;
            margin-bottom: .4rem;

            &:nth-child(3n) {
                margin-right: 0;
            }
        }

        .qudao-list {
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            justify-content: left;
            text-align: center;
            border-bottom: 0.013rem solid #f0f0f0;
        }

        .selectedItem {
            background-color: #008573;
            color: #ffffff;
        }

        .title-box {
            text-align: left;
            font-size: .32rem;
            height: 1rem;
            line-height: 1rem;
            font-weight: bold;
        }

        .input-div {
            height: 1.027rem;
            width: 100%;
            margin-top: 0.5rem;
            font-size: 0.32rem;
            border: 0.014rem solid #f0f0f0;
            border-radius: 0.2rem;
            padding:0 .2rem;
            display: flex;
            align-items: center;
            input{
              width:100%;
                border: none;
                outline: none;
                background: none;
                height: 0.51333rem;
                line-height: 0.51333rem;
                font-size: 0.32rem;
            }
        }

        .ok-button {
            width: 100%;
            color: white;
            background-color: #008573;
            border-radius: 0.25rem;
            font-size: 0.373rem;
            line-height: 1.173rem;
            height: 1.173rem;
        }
        .qrcode{
            img{
                width: 3.5rem !important;
                height: 3.5rem !important;
            }
        }
    }
</style>

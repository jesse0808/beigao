<template>
    <div id="zhcz"
         v-loading="eloading"
         element-loading-text="加载中"
         element-loading-spinner="el-icon-loading"
    >
        <div class="zhcz_main" v-show="!isNoPay">
            <div class="tips">
                <div style="font-size: 14px;">温馨提示：</div>
                <div class="tip-text">1、 充值请等待页面自动跳转否则不会自动到账</div>
                <div class="tip-text">2、 充值金额必须是创建订单后，系统自动分配给您的金额，如您输入充值金额 “100”，
                    系统可能自动分配给您100.23，您必须充值100.23系统才会自动到账，否则将不会自动入账。
                </div>
                <div class="tip-text">3、
                    在此友情提醒，为了保证各方资金安全，将会不定期跟换银行卡，请各位玩家存款前务必登陆存款页面核实最新银行卡信息后再行存款，本平台不对错误存入失效银行卡之资金承担任何责任！
                </div>
            </div>
            <!-- 之前UI样式 -->
            <!-- <div class="top-up-type">
              <div class="top-up-text">绿色通道：</div>
              <div class="top-up-btn-group">
                <div class="top-up-item" v-for="item in payStyle.LT">
                  <img src="">
                  {{item.Alias}}
                </div>
              </div>
            </div> -->
            <div class="redesign_all">
                <div class="redesign" v-if="payStyle.LT && payStyle.LT.length>0">
                    <div class="redesign_text">绿色通道：</div>
                    <div class="top-up-btn-group" v-for="(item,index) in payStyle.LT" :key="index"
                         @click="choosePayStyle('LT',index)">
                        <div class="top-up-item" :class="item.choosed?'isChecked':'top-up-item'">
                            {{item.Alias}}
                        </div>
                    </div>
                </div>
                <div class="redesign" v-if="payStyle.TBank && payStyle.TBank.length>0">
                    <div class="redesign_text">第三方网银：</div>
                    <div class="top-up-btn-group" v-for="(item,index) in payStyle.TBank" :key="index"
                         @click="choosePayStyle('TB',index)">
                        <div class="top-up-item" :class="item.choosed?'isChecked':''">
                            {{item.Alias}}
                        </div>
                    </div>
                </div>
                <div class="redesign" v-if="payStyle.TScan && payStyle.TScan.length>0">
                    <div class="redesign_text">扫码支付：</div>
                    <div class="top-up-btn-group" v-for="(item,index) in payStyle.TScan" :key="index"
                         @click="choosePayStyle('TS',index)">
                        <div class="top-up-item" :class="item.choosed?'isChecked':''">
                            {{item.Alias}}
                        </div>
                    </div>
                </div>
              <div class="redesign" v-if="payStyle.TH5 && payStyle.TH5.length>0">
                <div class="redesign_text">H5支付：</div>
                <div class="top-up-btn-group" v-for="(item,index) in payStyle.TH5" :key="index"
                     @click="choosePayStyle('TH5',index)">
                  <div class="top-up-item" :class="item.choosed?'isChecked':''">
                    {{item.Alias}}
                  </div>
                </div>
              </div>
              <div class="redesign" v-if="payStyle.TZk && payStyle.TZk.length>0">
                <div class="redesign_text">转卡支付：</div>
                <div class="top-up-btn-group" v-for="(item,index) in payStyle.TZk" :key="index"
                     @click="choosePayStyle('TZk',index)">
                  <div class="top-up-item" :class="item.choosed?'isChecked':''">
                    {{item.Alias}}
                  </div>
                </div>
              </div>
            </div>

            <div class="top-up-num">
                <div class="top-up-num-text">充值金额：</div>
                <div class="top-up-num-btn-group">
                    <div class="top-up-num-item" :class="item.choosed?'isChecked':''"
                         v-for="(item,index) in payMoneyArr"
                         :key="index" @click="chooseMoney(index)">
                        {{item.value}}元
                    </div>
                    <!-- <div class="top-up-num-item">
                      100元
                    </div>
                    <div class="top-up-num-item">
                      300元
                    </div>
                    <div class="top-up-num-item">
                      500元
                    </div> -->

                </div>
                <div class="top-up-num-input" v-if="showInputMoney">
                    <i class="remove_num" @click="removeNum"></i>
                    <el-input type="number" v-model="money" placeholder="请输入充值金额" @change="changeMoney"></el-input>
                    <i class="add_num" @click="addinputNum"></i>
                    <span>元</span>
                </div>
            </div>
            <div style="clear:both;padding-top:36px;">
                <div class="sub-btn" @click="putMoney">提交</div>
            </div>

        </div>
        <!-- 有未支付的绿色通道订单 -->
        <div class="no_pay" v-show="isNoPay">
            <div class="pay_head" v-if="this.minute!=-1">
                ***********************************订单有效时间剩余00:{{minute}}:{{second}}***********************************
            </div>
            <div class="pay_style">
                <div>订单号码：</div>
                <!-- <div class="pay_style_mid" id="OrderNumber">{{noPayInfo.OrderNumber}}</div> -->
                <el-input type="" name="" class="pay_style_mid" id="OrderNumber"
                          v-model="noPayInfo.OrderNumber"></el-input>
                <div @click="copyText('OrderNumber')" class="copy_text">[复制]</div>
            </div>
            <div class="pay_style">
                <div>充值银行：</div>
                <div class="pay_style_mid">{{noPayInfo.PayTypeText}}</div>
                <div style="opacity: 0;">[复制]</div>
            </div>
            <div class="pay_style">
                <div>银行户名：</div>
                <!-- <div class="pay_style_mid">{{noPayInfo.RcFullName}}</div> -->
                <el-input type="" name="" class="pay_style_mid" id="RcFullName"
                          v-model="noPayInfo.RcFullName"></el-input>
                <div @click="copyText('RcFullName')" class="copy_text">[复制]</div>
            </div>
            <div class="pay_style">
                <div>银行账号：</div>
                <!-- <div class="pay_style_mid">{{noPayInfo.RcBankNumber}}</div> -->
                <el-input type="" name="" class="pay_style_mid" id="RcBankNumber"
                          v-model="noPayInfo.RcBankNumber"></el-input>
                <div @click="copyText('RcBankNumber')" class="copy_text">[复制]</div>
            </div>
            <!-- <div class="pay_style">
              <div>开户网点：</div>
              <el-input type="" name="" class="pay_style_mid" id="RcBankName" v-model="noPayInfo.RcBankName"></el-input>
              <div @click="copyText('RcBankName')">[复制]</div>
            </div> -->
            <div class="pay_style">
                <div>充值金额：</div>
                <!-- <div class="pay_style_mid">{{noPayInfo.RandomMoney}}</div> -->
                <el-input type="" name="" class="pay_style_mid" id="RandomMoney"
                          v-model="noPayInfo.RandomMoney"></el-input>
                <div @click="copyText('RandomMoney')" class="copy_text">[复制]</div>
            </div>
            <!-- <div class="pay_style">
              <div>入款姓名：</div>
              <div class="pay_style_mid">{{userInfo.FullName}}</div>
              <div style="opacity: 0;">[复制]</div>
            </div> -->
            <div class="go_to_bank" @click="goToBank">前往银行</div>
            <div style="display: flex;justify-content: center;">您还可以 <span class="cancel"
                                                                           @click="cancelOrder">[撤销订单]</span>
                如已完成付款，请勿撤销，我们会尽快为您处理。
            </div>
        </div>
        <!-- <div id="qrCode" ref="qrCodeDiv"></div> -->

        <!-- 二维码支付弹窗 -->
        <el-dialog
                title="扫码完成付款"
                :visible.sync="dialogVisible"
                width="30%"
        >
            <div v-if="!showQRcodeImg" id="qrcode" ref="qrcode"></div>
            <div v-else style=" display: flex; justify-content: center; align-items: center; margin-top: 36px;">
                <img :src="qrcodeImg" style=" width: 130px; height: 130px; "/>
            </div>
            <span slot="footer" class="dialog-footer">
		    <el-button class="pop_sure_btn" type="primary" @click="qrcodeOkClose">确 定</el-button>
		  </span>
        </el-dialog>
    </div>
</template>
<script>
  // 引用axios封装文件
  import {postAjax, getAjax} from "../../util/ajax.js"
  import QRCode from 'qrcodejs2'

  export default {
    components: {
      QRCode
    },
    data() {
      return {
        fromData: [],//表单数据
        fromUrl: '',//表单提交链接
        qrcodeImg: '',
        showQRcodeImg: false,
        showInputMoney: true,
        eloading: false,
        dialogVisible: false,
        money: '',
        //支付渠道
        payStyle: {},
        //选中的渠道
        payTypeChoosed: {},
        //充值金额数组
        payMoneyArr: [
          {value: 100, choosed: false},
          {value: 500, choosed: false},
          {value: 2000, choosed: false},
          {value: 5000, choosed: false},
        ],
        //未支付的信息
        noPayInfo: {},
        //用户信息
        userInfo: {},
        //是否有未支付的订单
        isNoPay: false,
        //接口定时器
        timer: '',
        //算时间定时器
        calcTimerL: '',
        //分钟
        minute: -1,
        //秒
        second: -1,
        newWindow: false,//聚会银浪扫码
        txwinow: ''
      }
    },
    methods: {
      removeNum() {
        if (this.money > 0) {
          this.money = Number(this.money) - 1;
        }
      },
      addinputNum() {
        this.money = Number(this.money) + 1;
      },
      qrcodeOkClose() {
        this.dialogVisible = false
        this.getUserInfo();
      },
      //得到充值通道
      getPutStyle() {
        let that = this;
        let url = "api/Cash/GetUserChargeChanelList?Term=2";
        postAjax(url, null).then(function (data) {
          if (data.IsSucess) {
            // that.payStyle=data.Data;
            // //给每个选项加上选中或未选中状态
            // if(that.payStyle.LT.length>0){
            // 	that.putChoosed(that.payStyle.LT);
            // }
            // if(that.payStyle.TBank.length>0){
            // 	that.putChoosed(that.payStyle.TBank);
            // }
            // if(that.payStyle.TScan.length>0){
            // 	that.putChoosed(that.payStyle.TScan);
            // }

            //给每个选项加上选中或未选中状态
            if (data.Data.LT.length > 0) {
              data.Data.LT = that.newputChoosed(data.Data.LT);
            }
            if (data.Data.TBank.length > 0) {
              data.Data.TBank = that.newputChoosed(data.Data.TBank);
            }
            if (data.Data.TScan.length > 0) {
              data.Data.TScan = that.newputChoosed(data.Data.TScan);
            }
            if (data.Data.TH5.length > 0) {
              data.Data.TH5 = that.newputChoosed(data.Data.TH5);
            }
            if (data.Data.TZk.length > 0) {
              data.Data.TZk = that.newputChoosed(data.Data.TZk);
            }
            that.payStyle = data.Data;
          }
        });
      },
      //新的给数组加choosed字段
      newputChoosed(arr) {
        for (var i = 0, length = arr.length; i < length; i++) {
          arr[i].choosed = false;
        }
        return arr;
      },
      //给数组加choosed字段
      putChoosed(arr) {
        for (var i = 0, length = arr.length; i < length; i++) {
          arr[i].choosed = false;
        }
      },
      //选择付款方式
      choosePayStyle(style, index) {
        if (style === 'LT' && this.payStyle.LT[index].choosed) {
          return;
        }
        if (style === 'TB' && this.payStyle.TBank[index].choosed) {
          return;
        }
        if (style === 'TS' && this.payStyle.TScan[index].choosed) {
          return;
        }
        if (style === 'TH5' && this.payStyle.TH5[index].choosed) {
          return;
        }
        if (style === 'TZk' && this.payStyle.TZk[index].choosed) {
          return;
        }
        if (this.payStyle.LT.length > 0) {
          this.putChoosed(this.payStyle.LT);
        }
        if (this.payStyle.TBank.length > 0) {
          this.putChoosed(this.payStyle.TBank);
        }
        if (this.payStyle.TScan.length > 0) {
          this.putChoosed(this.payStyle.TScan);
        }
        if (this.payStyle.TH5.length > 0) {
          this.putChoosed(this.payStyle.TH5);
        }
        if (this.payStyle.TZk.length > 0) {
          this.putChoosed(this.payStyle.TZk);
        }
        switch (style) {
          case 'LT':
            this.$nextTick(() => {
              this.payStyle.LT[index].choosed = true;
              this.payTypeChoosed = this.payStyle.LT[index];
            })
            break;
          case 'TB':
            this.$nextTick(() => {
              this.payStyle.TBank[index].choosed = true;
              this.payTypeChoosed = this.payStyle.TBank[index];
            })
            break;
          case 'TS':
            this.$nextTick(() => {
              this.payStyle.TScan[index].choosed = true;
              this.payTypeChoosed = this.payStyle.TScan[index];
            })
            break;
          case 'TH5':
            this.$nextTick(() => {
              this.payStyle.TH5[index].choosed = true;
              this.payTypeChoosed = this.payStyle.TH5[index];
            })
            break;
          case 'TZk':
            this.$nextTick(() => {
              this.payStyle.TZk[index].choosed = true;
              this.payTypeChoosed = this.payStyle.TZk[index];
            })
            break;
        }

        // 亿达微信扫码 特殊处理
        if ('TS' == style && this.payStyle.TScan[index].ChannelType == 14) {
          // 100 300 500 800 1800 2800 3800 4800
          this.payMoneyArr = [
            {value: 100, choosed: false},
            {value: 300, choosed: false},
            {value: 500, choosed: false},
            {value: 800, choosed: false},
            {value: 1800, choosed: false},
            {value: 2800, choosed: false},
            {value: 3800, choosed: false},
            {value: 4800, choosed: false},
          ]
          this.showInputMoney = false
        } else {
          this.payMoneyArr = [
            {value: 100, choosed: false},
            {value: 500, choosed: false},
            {value: 2000, choosed: false},
            {value: 5000, choosed: false},
          ]
          this.showInputMoney = true
        }
      },
      setTimeoutFun() {
        let that = this;
        that.txwinow = window.open('');
        let img = `<div style="width:200px;height:32px;position: absolute;top: 200px; left:50%;margin-left: -100px; text-align: center;"><img src="//image.beike188.com/AMH/images/game_loading.gif"/></div><p style="font-size: 12px;text-align: center;margin-top: 280px;width: 200px;position: absolute;left: 50%;margin-left: -100px;">正在加载..</p>`;
        that.txwinow.document.body.innerHTML = '';
        that.txwinow.document.write(img)
        if (that.fromData.length > 0) {
          let str = `<form style="display: none;" action="${that.fromUrl}" method="post" ref="formSu">`;
          let forstr = '';
          that.fromData.forEach(item => {
            forstr += '<input type="text" name="' + item[0] + '" value="' + item[1] + '">';
          });
          let htmlaa = str + forstr + `</form>`;
          that.txwinow.document.body.innerHTML = '';
          that.txwinow.document.write(htmlaa);
          let frameDiv = document.createElement("script");
          frameDiv.type = 'text/javascript';
          frameDiv.innerHTML = 'document.querySelector(\'form\').submit()';
          that.txwinow.document.body.appendChild(frameDiv)
        } else {
          that.setTimeout(that.setTimeoutFun, 1000)
        }
      },
      //充值
      putMoney() {
        let that = this;

        if (JSON.stringify(this.payTypeChoosed) != "{}") {
          if (this.money) {
            if (this.money <= this.payTypeChoosed.MaxMoney && this.money >= this.payTypeChoosed.MinMoney) {
              let url = "api/Cash/RechargeOrderInfo";
              let data = {
                RcKey: this.payTypeChoosed.RcKey,
                RcMoney: this.money
              };
              that.eloading = true

              postAjax(url, data).then(function (data) {
                that.eloading = false
                if (data.IsSucess) {
                  that.dataProcessing(data.Data);
                } else {
                  that.$message.error(data.Message);
                }
              }).catch(() => {
                this.eloading = false
              })
            } else {
              that.$message.error("请输入或选择" + this.payTypeChoosed.MinMoney + "-" + this.payTypeChoosed.MaxMoney + "的金额");
            }
          } else {
            that.$message.error("请输入或选择金额");
          }
        } else {
          that.$message.error("请输入支付方式");
        }
      },
      dataProcessing(data){
        let that = this;
        //如果为绿色通道
        if (data.ChanelType == 1) {
          //请求未支付的订单
          that.getUnFillOrder();
        } else {
          if (data.PayResult == null) {
            that.$message.error("支付渠道维护中,请联系客服!");
            return
          }
          //新开地址跳转
          if (data.PayResult.OpType == 3) {
            that.$confirm('将在新窗口完成支付', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success',
              center: true
            }).then(() => {
              window.open(data.PayResult.Url);
            }).catch(() => {
              this.$message({
                type: 'warning ',
                message: '已取消支付'
              });
            });
          } else if (data.PayResult.OpType == 2) {
            that.fromUrl = data.PayResult.RequestUrl;
            that.fromData = Object.entries(data.PayResult.Params);
            that.$confirm('将在新窗口完成支付', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success',
              center: true
            }).then(() => {
              that.setTimeoutFun();
            }).catch(() => {
              that.$message({
                type: 'warning ',
                message: '已取消支付'
              });
            });
            //表单提交
            // window.open(data.Data.PayResult.RequestUrl + "?" + that.objToUrl(data.Data.PayResult.Params));
          } else if (data.PayResult.OpType == 1 || data.PayResult.OpType == 4) {
            //二维码
            that.dialogVisible = true;
            if (data.PayResult.OpType == 4) {
              that.showQRcodeImg = true
              that.qrcodeImg = data.PayResult.QrCode
            } else {
              //先传参
              that.showQRcodeImg = false
              that.qrcodeImg = ''
              that.$nextTick(() => {
                that.qrcode(data.PayResult.QrCode);
              })
            }
          }
        }
      },
      //选择金额
      chooseMoney(index) {
        if (this.payMoneyArr[index].choosed) {
          return
        } else {
          this.putChoosed(this.payMoneyArr);
          this.payMoneyArr[index].choosed = true;
          this.money = this.payMoneyArr[index].value;
        }
      },
      //改变金额
      changeMoney(val) {
        this.putChoosed(this.payMoneyArr);
        for (var i = 0, length = this.payMoneyArr.length; i < length; i++) {
          if (val == this.payMoneyArr[i].value) {
            this.payMoneyArr[i].choosed = true;
          }
        }
      },
      //获取10分钟内未完成的订单
      getUnFillOrder() {
        let url = "api/Cash/GetUnFillRechargeOrder";
        postAjax(url, null).then((data) => {
          if (data.IsSucess) {
            if (data.Data) {
              //有订单未支付
              this.noPayInfo = data.Data;
              this.noPayInfo.OrderExtendTime = parseInt(this.noPayInfo.OrderExtendTime)
              // OrderExtendTime
              // this.isNoPay=true;
              // that.getResidue();

              this.getResidue(this.noPayInfo.OrderExtendTime)
              this.calcTimerL = setInterval(() => {
                this.getResidue(this.noPayInfo.OrderExtendTime)
                this.noPayInfo.OrderExtendTime--
              }, 1000)
              this.timer = setInterval(this.setTimoutCheck, 10000)
            }
          }
        })
      },
      // 得到用户信息方法
      getUserInfo() {
        let that = this;
        let url = "Api/User/GetUserInfo";
        postAjax(url, null)
          .then(function (data) {
            // console.log(data);
            if (data.IsSucess) {
              that.userInfo = data.Data;
              that.$store.commit('setUserInfo', data.Data);
            }
          })
      },
      //确定按钮
      goToBank() {
        window.open(this.noPayInfo.BankUrl);
      },
      //撤销订单
      cancelOrder() {
        let that = this;
        let url = "api/Cash/CancleRechargeOrder?OrderNumber=" + this.noPayInfo.OrderNumber;
        postAjax(url, null).then(function (data) {
          if (data.IsSucess) {
            that.$message.success('撤单成功')
            that.isNoPay = false;
            that.minute = -1
            that.second = -1
            clearInterval(that.timer);
            clearInterval(that.calcTimerL);
            that.timer = null;
            that.calcTimerL = null;
          } else {
            that.$message.error("撤单失敗,请联系客服!");
          }
        })
      },
      //定时请求看状态是否变化
      setTimoutCheck() {
        let that = this;
        if (this.calcTimerL) {
          let url = "api/Cash/CheckRechargeOrderStatus?OrderNumber=" + this.noPayInfo.OrderNumber;
          postAjax(url, 1).then(function (data) {
            that.getUserInfo();
            if (data.IsSucess) {
              //等于2停止定时器
              if (data.Data == 1 || data.Data == 2) {
                clearInterval(that.timer);
                that.timer = null;
                that.isNoPay = false;
              }
            }
          })
        } else {
          clearInterval(this.timer);
          this.timer = null;
          that.isNoPay = false;
        }

      },
      //算剩余时间
      getResidue(time) {
        if (time >= 0) {
          this.minute = `0${parseInt(time / 60)}`.slice(-2)
          this.second = `0${parseInt(time % 60)}`.slice(-2)
          this.isNoPay = true;
        } else {
          this.minute = -1
          this.second = -1
          clearInterval(this.calcTimerL);
          this.calcTimerL = null;
          this.isNoPay = false;
        }
      },
      //实现复制功能
      copyText(id) {
        let url = null;
        switch (id) {
          case 'OrderNumber':
            url = document.querySelector('#OrderNumber');
            break;
          case 'RcFullName':
            url = document.querySelector('#RcFullName');
            break;
          case 'RcBankNumber':
            url = document.querySelector('#RcBankNumber');
            break;
          case 'RcBankName':
            url = document.querySelector('#RcBankName');
            break;
          case 'RandomMoney':
            url = document.querySelector('#RandomMoney');
            break;
        }
        console.log(url);
        url.select();
        document.execCommand("Copy");
        this.$message({
          message: '已复制',
          type: 'success'
        });
      },
      //将对象序列化
      objToUrl(obj) {
        let arr = [];
        for (let key in obj) {
          arr.push(key + '=' + obj[key])
        }
        return arr.join("&")
      },
      //生成二维码的方法
      qrcode(content) {
        //先清空
        document.getElementById("qrcode").innerHTML = "";
        let qrcode = new QRCode('qrcode', {
          width: 200, // 设置宽度，单位像素
          height: 200, // 设置高度，单位像素
          text: content   // 设置二维码内容或跳转地址
        })
      },
    },
    mounted() {
      //获取10分钟内未完成的订单
      this.getUnFillOrder();
      //得到支付方式
      this.getPutStyle();
      this.getUserInfo();
    },
    beforeDestroy() {
      clearInterval(this.timer);
      clearInterval(this.calcTimerL);
      this.calcTimerL = null;
      this.timer = null;
    },
  }
</script>
<style type="scss">
    #zhcz {
        height: 759px;
        background-color: white;
    }

    .zhcz_main {
        padding: 20px 20px 0 20px;
    }

    /*提示*/
    .redesign_all {
        padding-top: 25px;
    }

    .redesign {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-left: 100px;
        margin-bottom: 20px;
    }

    .redesign_text {
        font-size: 14px;
        width: 100px;
        text-align: right;
        margin-left: -100px;
    }

    #zhcz .tips {
        background-color: #f7f7f7;
        padding: 18px 18px 20px 18px;
    }

    #zhcz .tip-text {
        font-size: 12px;
        color: #008573;
        margin-top: 8px;
        text-indent: -2em;
        margin-left: 2em;
    }

    .top-up-type, .top-up-num {
        padding-left: 100px;
        padding-top: 25px;
        position: relative;
        clear: both;
    }

    .top-up-text, .top-up-num-text {
        position: absolute;
        left: 4px;
        top: 31px;
        font-size: 14px;
    }

    .top-up-num-text {
        left: 0;
        width: 100px;
        text-align: right;
    }

    /*支付方式按钮*/
    .top-up-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 141px;
        height: 38px;
        float: left;
        margin: 4px 12px 4px 0;
        border-radius: 5px;
        background-image: linear-gradient(0deg,
                #edeced 0%,
                #ffffff 100%);
        border-radius: 5px;
        border: solid 1px #dddddd;
        font-size: 14px;
        color: #707070;
    }

    .top-up-num-item {
        width: 141px;
        height: 38px;
        float: left;
        margin: 4px 12px 4px 0;
        background-image: linear-gradient(0deg,
                #edeced 0%,
                #ffffff 100%);
        border: solid 1px #dddddd;
        text-align: center;
        line-height: 36px;
        border-radius: 5px;
        font-size: 14px;
        color: #707070;
    }

    .top-up-num-input {
        position: relative;
        width: 236px;
        margin-top: 60px;
    }

    .remove_num {
        display: inline-block;
    }

    i.add_num {
        background: url(../../static/img/icon/add_block.png);
    }

    .top-up-num-input .remove_num {
        position: absolute;
        top: 0;
        left: 0;
        width: 34px;
        height: 40px;
        background: url(../../static/img/icon/reduce.png) no-repeat center center/30px 30px #e7e7e7;
        z-index: 1;
        cursor: pointer;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .top-up-num-input .add_num {
        position: absolute;
        top: 0;
        right: 20px;
        width: 34px;
        height: 40px;
        background: url(../../static/img/icon/add_block.png) no-repeat center center/30px 30px #e7e7e7;
        z-index: 1;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .top-up-num-input input:focus {
        border-color: #DCDFE6;
    }

    .top-up-num-input input:hover {
        border-color: #DCDFE6;
    }

    .top-up-num-input .el-input {
        width: 215px;
        height: 38px;
        background-color: #ffffff;
        border-radius: 5px;
    }

    .top-up-num-input .el-input .el-input__inner {
        text-align: center;
    }

    .sub-btn {
        clear: both;
        width: 112px;
        height: 31px;
        background-color: #008573;
        border-radius: 5px;
        text-align: center;
        line-height: 31px;
        font-size: 14px;
        color: #fff;
        margin-left: 100px;
        cursor: pointer;
    }

    .isChecked {
        background-color: #008573;
        border: 0;
        color: #fff;
        background-image: none;
    }

    .data-no-choose {
        color: #fff
    }

    /*未完成支付订单的样式*/
    .no_pay {
    }

    .pay_head {
        text-align: center;
        padding-top: 40px;
        color: red;
        margin-bottom: 20px;
    }

    .pay_style {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        align-items: center;
        height: 20px;
    }

    .pay_style_mid {
        width: 250px !important;
        padding-left: 50px;
    }

    .go_to_bank {
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background: #1f7878;
        color: #fff;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    .cancel {
        color: #1f7878;
    }

    .cancel:hover {
        cursor: pointer;
    }

    .top-up-item:hover {
        cursor: pointer;
    }

    .top-up-num-item:hover {
        cursor: pointer;
    }

    .no_pay .el-input__inner {
        font-size: 16px !important;
        padding: 0;
        line-height: 20px;
        height: 20px;
        border: 0;
        color: #333;
    }

    .copy_text {
        color: #2ba498
    }

    /*提示弹窗样式*/
    #zhcz .el-dialog__header {
        border-top: 4px solid #2ba498;
        height: 42px;
        background: #f3f3f3;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }

    #zhcz .el-dialog__body {
        padding: 0;
    }

    .warning_img {
        margin: 34px 0 28px;
        text-align: center;
    }

    #zhcz .el-dialog__footer {
        padding: 25px 0 60px;
        text-align: center;
    }

    #zhcz .pop_sure_btn {
        color: #fff;
        background-color: #2ba498;
        border-color: #2ba498;
        width: 120px;
    }

    #qrcode {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .pay_window{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 1200px;
        height: 80vh;
        margin: auto;
        z-index: 10;
    }
    .pay_window iframe{
        border: none;
    }
</style>

<style lang="scss">
    #zhcz {
        .el-loading-spinner {
            color: #1d7272 !important;

            .el-icon-loading {
                color: #1d7272 !important;
            }

            .el-loading-text {
                color: #1d7272 !important;
            }

            .el-loading-mask {
                background: rgba(255, 255, 255, 0.8);
            }
        }
    }
</style>

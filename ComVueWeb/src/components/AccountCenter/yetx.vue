<template>
  <div id="yetx">
    <div class="yetx_main">
      <div class="tips">
        <div style="font-size: 14px;">温馨提示：</div>
        <!-- <div class="tip-text">1、 为了创造更好的购彩环境，防止洗黑钱，充值必须消费20%，才能取款！取款时间开放为{{configInfo.DwStart.SysValue}}到{{configInfo.DwEnd.SysValue}}结束，每日可取款{{configInfo.DwCount.SysValue==0?'无限':configInfo.DwCount.SysValue}}次</div> -->
        <div class="tip-text">1、 最小提现：￥{{configInfo.DwMin.SysValue}} &nbsp;&nbsp;&nbsp;&nbsp;
          最大提现：￥{{configInfo.DwMax.SysValue}} &nbsp;&nbsp;&nbsp;&nbsp;
          每日提现次数：{{configInfo.DwCount.SysValue==0?'无限制':configInfo.DwCount.SysValue}}次
          &nbsp;&nbsp;&nbsp;&nbsp; 每日最高提现：￥{{configInfo.DwDayMax.SysValue}}
        </div>
        <div class="tip-text">2、 每日提现时间：{{configInfo.DwStart.SysValue}}-{{configInfo.DwEnd.SysValue}}</div>
        <!-- <div class="tip-text">4、 提现手续费：提现金额x0%(单笔最高提现49999)</div>
        <div class="tip-text">5、 账号总金额：￥0&nbsp;&nbsp;&nbsp;&nbsp;可用金额：￥0&nbsp;&nbsp;&nbsp;&nbsp;冻结金额：￥0</div> -->
      </div>
      <div style="padding-top:26px;">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="选择银行">
            <el-select v-model="form.UbcId" placeholder="请选择银行" @change="changeMoney">
              <el-option
                v-for="item in choosedBank"
                :key="item.UbcId"
                :label="item.NameNum"
                :value="item.UbcId">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="提现金额">
            <el-input type="number" v-model="form.DmMoney" placeholder="请输入提现金额"></el-input>
          </el-form-item>
          <el-form-item label="提现密码">
            <el-input type="password" v-model="form.PayPassword" maxlength="20" placeholder="请输入提现密码"></el-input>
          </el-form-item>
          <!-- <el-form-item label="备注">
            <el-input type="textarea" v-model="form.Remark" placeholder="请输入备注信息，不超过100字"></el-input>
          </el-form-item> -->
          <el-form-item>
            <el-button class="submit" @click="onSubmit">确认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div class="warning_img">
        <img src="../../assets/zjzh/warning.png" style="width: 54px;height: 52px;">
      </div>
      <div style="text-align: center;">请先绑定银行卡</div>
      <span slot="footer" class="dialog-footer">
		    <el-button class="pop_sure_btn" type="primary" @click="goBindCart">确 定</el-button>
		  </span>
    </el-dialog>
  </div>
</template>
<script>
    // 引用axios封装文件
    import {postAjax, getAjax} from "../../util/ajax.js"

    export default {
        data() {
            return {
                dialogVisible: false,
                form: {
                    DmMoney: '',
                    UbcId: '',
                    PayPassword: '',
                    Remark: '',
                    loading: false
                },
                //配置信息
                configInfo: window.systemData,
                //可选银行列表
                choosedBank: [],
            }
        },
        methods: {
            _initOpenLoading(isFlag = true) {
                this.loading = this.$loading({
                    lock: true,
                    text: `${isFlag ? '投注中' : '加载中'}...`,
                    spinner: 'el-icon-loading',
                    background: 'rgba(255, 255, 255, 0.2)'
                })
            },
            _initCloseLoading() {
                this.loading.close()
            },
            onSubmit() {
                let that = this;
                if (!this.form.DmMoney || !this.form.UbcId || !this.form.PayPassword) {
                    this.$message.error('必填资料未填写');
                } else {
                    var intMoney = parseInt(this.form.DmMoney);
                    if (intMoney < parseInt(this.configInfo.DwMin.SysValue) || intMoney > parseInt(this.configInfo.DwMax.SysValue)) {
                        that.$message.error("单笔提现最低 " + this.configInfo.DwMin.SysValue + " 元,最高 " + this.configInfo.DwMax.SysValue + " 元");
                        return;
                    }
                    let url = "api/Cash/DrawMoneyApplyInfo";
                    this._initOpenLoading(false)
                    postAjax(url, this.form).then(function (data) {
                        that._initCloseLoading()
                        that.form.DmMoney = ''
                        that.form.PayPassword = ''
                        that.loading = false
                        if (data.IsSucess) {
                            window.eventBus.$emit('refreshHeader');
                            that.$message({
                                message: '提现成功',
                                type: 'success'
                            });
                        } else {
                            that.$message.error(data.Message);
                        }
                    })
                        .catch(() => {
                            that.$message.error("网络异常，请刷新后在试");
                            that._initCloseLoading()
                        })
                }

            },
            //去绑卡跳转路由
            goBindCart() {
                this.$emit('gobindyhk', 'yinhangka')
                this.dialogVisible = false;
            },
            //请求银行卡List接口
            getBankList() {
                var that = this;
                var url = "api/Bank/GetUserBankList";
                getAjax(url).then(function (data) {
                    if (data.IsSucess) {
                        if (data.Data.length <= 0) {
                            //没卡先绑卡
                            that.dialogVisible = true;
                        } else {
                            //将银行和卡号整合在一起
                            for (var i = 0, length = data.Data.length; i < length; i++) {
                                data.Data[i].NameNum = data.Data[i].BankName + '---' + data.Data[i].BankNumber
                            }
                            that.choosedBank = data.Data;
                        }
                    }
                })
            },
            //配置信息
            getConfigInfo() {
                this.configInfo = window.systemData
            },
            //当选择银行之后金额变为100
            changeMoney() {
                this.form.DmMoney = 100;
            },
        },
        mounted() {

            this.getBankList();
            this.getConfigInfo();
        }
    }
</script>
<style type="scss">
  #yetx {
    height: 100%;
    background-color: white;
  }

  .yetx_main {
    padding: 20px 20px 0 20px
  }

  /*提示*/
  #yetx .tips {
    background-color: #f7f7f7;
    padding: 18px 0 20px 18px;
  }

  #yetx .tip-text {
    font-size: 14px;
    color: #008573;
    margin-top: 8px;
  }
  #yetx .el-form input{
    width: 405px;
    height: 37px;
    background-image: linear-gradient(0deg,
      #edeced 0%,
      #ffffff 100%);
    border-radius: 5px;
    border: solid 1px #dddddd;
  }
  #yetx .el-form .submit{
    width: 112px;
    height: 31px;
    background-color: #008573;
    border-radius: 5px;
    color: #fff !important;
    font-size: 14px;
    line-height: 31px;
    padding: 0;
  }
  .yetx_main .el-input__inner {
    width: 340px;
    height: 35px;
  }

  .yetx_main .el-textarea__inner {
    width: 400px;
    height: 160px;
    font-family: '微软雅黑'
  }

  /*提交按钮的样式*/

  /*提示弹窗样式*/
  #yetx .el-dialog__header {
    border-top: 4px solid #2ba498;
    height: 42px;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  #yetx .el-dialog__body {
    padding: 0;
  }

  .warning_img {
    margin: 34px 0 28px;
    text-align: center;
  }

  #yetx .el-dialog__footer {
    padding: 25px 0 60px;
    text-align: center;
  }

  #yetx .pop_sure_btn {
    color: #fff;
    background-color: #2ba498;
    border-color: #2ba498;
    width: 120px;
  }
  #yetx .el-input{
    width: 405px;
  }
</style>

<template>
  <div id="yhkgl">
    <div class="yhkgl_main" v-show="!showBind">
      <div class="yhkgl_top">
        <div class="add_title">
          <img src="../../assets/grsy/addbankcard.png" @click="addBankCart" alt="">
          <a @click="addBankCart">添加银行卡</a>
        </div>
        <div class="wxts_text">
          <p class="wxts">温馨提示：</p>
          <p class="list">1、银行卡的开户名必须和实名认证的一致。</p>
          <p class="list">2、最多只能添加10张银行卡。</p>
          <p class="list">3、如需修改或删除银行卡账号请联系客服人员。</p>
        </div>
      </div>

      <div class="czTable">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="BankName"
            label="开户银行"
            width="120">
          </el-table-column>
          <el-table-column
            prop="NickName"
            label="姓名"
            width="60">
          </el-table-column>
          <el-table-column
            prop="BankNumber"
            label="银行卡号"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="BankBranch"
            label="支行名称"
            width="130">
          </el-table-column>
          <el-table-column
            prop="CreateTime"
            label="日期"
            width="144">
          </el-table-column>


        </el-table>
      </div>

      <!-- 判断有没有银行卡的时候 显示 -->
      <div class="none_card" v-show="!isBind">
        <span style="color:#acacac">您暂未绑定银行卡，点击</span>
        <span class="blue" @click="addBankCart">添加银行卡</span>
      </div>
      <div class="bottom" v-if="isBind" v-show="bindTipsShow">
        <div class="bottom_top">
          <div class="tips_bind"></div>
          <p class="bottom_ts_text">{{bindTips}}</p>
          <span class="blue" v-if="tableData.length<10" @click="addBankCart">添加银行卡</span>
        </div>
        <i class="el-icon-close oranges" @click="bindTipsShow = false"></i>
      </div>

      <!-- <div class="bottom" v-show="isBind">
        <el-row>
          <el-col :span="3" style="padding-left: 10px;">
            <i class="el-icon-warning oranges"></i>
          </el-col>
          <el-col :span="18">
            <p class="bottom_ts boranges">您已经绑定1张银行卡，一共可锁定1张银行卡</p>
          </el-col>
          <el-col :span="3" style="padding-right: 10px;text-align: right;">
            <i class="el-icon-close oranges"></i>
          </el-col>
        </el-row>
      </div> -->
    </div>
    <!-- 绑定银行卡 -->
    <div class="bindCart" v-show="showBind">
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="开户银行">
          <el-select v-model="form.Bid" placeholder="请选择">
            <el-option
              v-for="item in bankInfo"
              :key="item.Bid"
              :label="item.Name"
              :value="item.Bid">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开户人">
          <el-input v-model="userInfo.FullName" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="开户地址">
          <el-select v-model="form.BankProvince" placeholder="请选择" @change="chooseProvince">
            <el-option
              v-for="item in provinceInfo"
              :key="item.Value"
              :label="item.Name"
              :value="item.Value">
            </el-option>
          </el-select>
          <!-- 市 -->
          <el-select v-model="form.BankCity" placeholder="请选择" style="margin-top: 10px;">
            <el-option
              v-for="item in cityInfo"
              :key="item.Value"
              :label="item.Name"
              :value="item.Value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="银行卡号">
          <el-input v-model="form.BankNumber"></el-input>
        </el-form-item>
        <el-form-item label="支行名称">
          <el-input v-model="form.BankBranch"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary btn_color" @click="onSubmit">立即创建</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>

    </div>
    <!-- 完善姓名 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div class="warning_img">
        <img src="../../assets/zjzh/warning.png" style="width: 54px;height: 52px;">
      </div>
      <div style="text-align: center;">您尚未设置真实姓名，请设置</div>
      <span slot="footer" class="dialog-footer">
		    <el-button class="pop_sure_btn" type="primary" @click="goBindCart">确 定</el-button>
		  </span>
    </el-dialog>
  </div>
</template>

<script>
    // 引用axios封装文件
    import {postAjax, getAjax} from "../../util/ajax.js";
    import {Message} from 'element-ui';

    export default {
        name: 'yhkgl',
        data() {
            return {
                bindTipsShow: true,
                dialogVisible: false,
                input: '',
                tableData: [],
                //隐藏或显示绑定一张卡还是为绑定卡
                isBind: false,
                //银行列表信息
                bankInfo: [],
                //省份信息
                provinceInfo: [],
                //市信息
                cityInfo: [],
                //显示隐藏绑定银行卡
                showBind: false,
                form: {
                    Bid: '',
                    BankProvince: '',
                    BankCity: '',
                    BankNumber: '',
                    BankBranch: ''
                },
                userInfo: '',
            }
        },
        computed: {
            bindTips() {
                return `您已经绑定${this.tableData.length}张银行卡`
            },
        },
        methods: {
            changesBtnGRSY(type) {
                console.log(type)
                let changemima = null;
            },
            //时间格式化
            formatDate(row, column) {
                return row[column.property]
                if (row[column.property]) {
                    var arr = row[column.property].split("T");
                    var arr1 = arr[1].split(".")
                    return arr[0] + ' ' + arr1[0]
                } else {
                    return '-'
                }
            },
            //获取绑定银行卡接口
            getBankList() {
                var that = this;
                var url = "api/Bank/GetUserBankList";
                getAjax(url).then(function (data) {
                    if (data.IsSucess) {
                        that.tableData = data.Data;
                        //如果有数据就给他增加一个字段为地址address
                        if (that.tableData.length > 0) {
                            that.isBind = true;
                            for (var i = 0, length = that.tableData.length; i < length; i++) {
                                that.tableData[i].address = that.tableData[i].BankProvince + '--' + that.tableData[i].BankCity;
                            }
                        } else {
                            that.isBind = false;
                        }
                    }
                })
            },
            //获取银行列表
            getBankInfo() {
                var that = this;
                var url = "api/Bank/GetBankListInfo";
                getAjax(url).then(function (data) {
                    if (data.IsSucess) {
                        that.bankInfo = data.Data;
                    }
                })
            },
            //获取省份信息
            getProvinceInfo() {
                var that = this;
                var url = "api/Sys/GetProvince";
                postAjax(url, null).then(function (data) {
                    if (data.IsSucess) {
                        that.provinceInfo = data.Data;
                    }
                })
            },
            //添加银行卡
            addBankCart() {
                if (this.tableData.length > 9) {
                    this.$message.error('最多只能添加10张银行卡')
                    return
                }
                if (!this.userInfo.FullName) {
                    this.dialogVisible = true;
                } else {
                    this.showBind = true;
                }
            },
            // 得到用户信息方法
            getUserInfo() {
                let that = this;
                let url = "Api/User/GetUserInfo";
                postAjax(url, null)
                    .then(function (data) {
                        console.log(data);
                        if (data.IsSucess) {
                            that.userInfo = data.Data;
                            if (!that.userInfo.FullName) {
                                that.dialogVisible = true;
                            }
                        }
                    })
            },
            //选择省份显示市级信息
            chooseProvince(val) {
                this.form.BankCity = '';
                let that = this;
                let url = "/api/Sys/GetCitys?Province=" + val;
                postAjax(url, null).then(function (data) {
                    if (data.IsSucess) {
                        that.cityInfo = data.Data;
                    }
                })
            },
            //立即创建
            onSubmit() {
                let res = this.checkCardNum()
                if (res != true) {
                    Message.error(res)
                    return
                }

                let that = this;
                let url = '/api/Bank/AddUserBankInfo';
                postAjax(url, this.form).then(function (data) {
                    if (data.IsSucess) {
                        that.getBankList();
                        that.onCancel()
                    } else {
                        that.$message.error(data.Message)
                    }
                })
            },
            onCancel() {
                this.showBind = false;
                this.form = {
                    Bid: '',
                    BankProvince: '',
                    BankCity: '',
                    BankNumber: '',
                    BankBranch: ''
                };
            },
            checkCardNum() {
                let bankno = this.form.BankNumber
                let num = /^\d*$/; //全数字
                let strBin =
                    "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99"; //开头6位
                if (bankno == "") {
                    return '请输入银行卡号'
                } else if (bankno.length < 16 || bankno.length > 19) {
                    return '银行卡号长度必须在16到19之间'
                } else if (!num.exec(bankno)) {
                    return '银行卡号必须全为数字'
                } else if (strBin.indexOf(bankno.substring(0, 2)) == -1) {
                    return '银行卡号开头6位不符合规范'
                } else {
                    return true
                }
            },
            //时间格式化
            formatDate(row, column) {
                if (row[column.property]) {
                    var arr = row[column.property].split("T");
                    var arr1 = arr[1].split(".")
                    return arr[0] + ' ' + arr1[0]
                } else {
                    return '-'
                }
            },
            goBindCart() {
                this.$emit('gobingrzl', '1')
                this.dialogVisible = false;
            }
        },
        mounted() {
            this.getBankList();
            this.getBankInfo();
            this.getProvinceInfo();
            this.getUserInfo();
        }
    }
</script>
<style lang="scss">
  #yhkgl {
    height: 100%;
    padding: 13px 22px 0;
    background-color: white;
  }
  #yhkgl .el-dialog{
    background-color: #ffffff;
  }
  #yhkgl input{
    background-image: linear-gradient(0deg, #e4e4e4 0%, #ffffff 100%);
  }
  #yhkgl input::placeholder{
    color: #606266;
  }
  /*公*/
  #yhkgl .el-form-item__content {
    width: 100%;
  }

  #yhkgl .one-col {
    line-height: 160px;
    background-color: white;
  }

  #yhkgl .name {
    font-size: 16px;
    font-weight: bold;
    color: black;
    line-height: 24px;
    margin-top: 20px;
  }

  #yhkgl .yue {
    font-size: 16px;
    font-weight: normal;
    color: #00772e;
    line-height: 24px;
  }

  /*右边*/
  /*第二排*/
  .two_box {
    width: calc(100%);
    padding: 0 20px;
    background-color: white;
  }

  /*.two_box .el-table{top:-50px;}*/
  .left_two_box {
    padding: 40px 20px;
    max-height: 240px;
  }

  .left_two_box el-col {
    padding: 40px 0;
    max-height: 160px;
  }

  /*表格抬头*/
  .ykhgl_top_left .name, .ykhgl_top_left .list {
    text-align: left;
    margin-left: 20px;
  }

  .ykhgl_top_left .name {
    color: #000000;
    font-size: 16px;
    line-height: 24px;
  }

  .ykhgl_top_left .list {
    color: #e9a400;
    font-size: 14px;
    line-height: 28px;
  }

  .ykhgl_top_left {
    background-color: #fff94e75;
    min-height: 160px;
  }

  /*底部*/
  #yhkgl .bottom {
    height: 50px;
    background: #fefbed;
    border: 1px solid #f1a104;
    margin: 20px 35px 0 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .oranges {
    color: #f1a104;
    font-size: 22px;
    margin-right: 20px;
  }

  .boranges {
    color: #c29328
  }

  .bottom_ts {
    text-align: left;
  }

  /*没有银行卡的*/
  .none_card {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-top: 20px;
  }

  .none_card .blue {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }

  .el-form-item__content {
    width: 50%
  }

  .bindCart .el-select {
    width: 100%
  }

  // .bindCart .el-input{width:52% !important;}
  .bindCart {
    margin-top: 20px;
    width: 50%
  }

  .bindCart .btn_color {
    background-color: #2ba498;
    border: 0;
  }

  /*表格样式*/
  #yhkgl .czTable {
    margin: 20px 0 0;
  }

  .czTable .el-table td, .czTable .el-table th {
    padding: 0;
    height: 35px;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
  }

  .czTable .el-table thead th {
    font-size: 14px;
  }

  .czTable .el-table th {
    background-color: #2ba396;
    color: #fff;
  }

  #yhkgl .el-table td, #zhjl .el-table th {
    padding: 0;
    height: 35px;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
  }

  #yhkgl .el-table thead th {
    font-size: 14px;
    text-align: center;
  }

  #yhkgl .el-table th {
    background-image: linear-gradient(0deg,
      #e7e6e7 0%,
      #ffffff 100%);
    color: #fff;
    text-align: center;
    color: #171717;
  }

  #yhkgl .el-dialog__header {
    border-top: 4px solid #2ba498;
    height: 42px;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  #yhkgl .el-dialog__body {
    padding: 0;
  }

  .warning_img {
    margin: 34px 0 28px;
    text-align: center;
  }

  #yhkgl .el-dialog__footer {
    padding: 25px 0 60px;
    text-align: center;
  }

  #yhkgl .pop_sure_btn {
    color: #fff;
    background-color: #2ba498;
    border-color: #2ba498;
    width: 120px;
  }

  .yhkgl_top {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
    background-color: #f7f7f7;
    position: relative;
  }
  #yhkgl .add_title{
    width: 204px;
    height: 130px;
    margin-top: 10px;
    border-right: solid 1px #dddddd;
  }

  #yhkgl .add_title > img {
    display: block;
    width: 72px;
    height: 70px;
    margin: 10px auto 0;
    cursor: pointer;
  }
  #yhkgl .add_title > a{
    display: block;
    width: 106px;
    height: 28px;
    margin: 13px auto 0;
    background-color: #008573;
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    line-height: 28px;
    border-radius: 14px;
    cursor: pointer;
  }
  .wxts {
    font-size: 14px;
    font-weight: bold;
  }
  #yhkgl .czTable table *{
    border: none;
  }
  #yhkgl .czTable table thead tr th {
    border-right: 1px solid #dddddd !important;
  }
  .yhkgl_top .list {
    font-size: 14px;
    color: #9c9c9c;
    line-height: 16px;
  }

  .wxts_text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 116px;
    width: 100%;
    padding-top: 10px;
    padding-left: 20px;
  }

  #yhkgl .tips_bind {
    width: 22px;
    height: 22px;
    margin-left: 20px;
    background-image: url("../../assets/grsy/tips.png");
    background-size: 100% 100%;
  }

  .bottom_ts_text {
    color: #d5a54a;
    font-size: 14px;
    font-weight: bold;
    margin-left: 28px;
  }

  .bottom_top {
    display: flex;
    align-items: center;

    .blue {
      margin-left: 10px;
      font-size: 14px;
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>

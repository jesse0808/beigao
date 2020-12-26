<template>
  <div class="zh_details_box" v-if="zhdata.length>0">
    <el-dialog
      title="追号详情"
      :visible.sync="dialogVisible"
      width="985px"
      :lock-scroll="false"
    >
<!--      <span class="iconfont icon-guanbi close_but" @click="closeThisDiv"></span>-->
      <div class="show_number">
        {{zhdata[0].BetContent}}
      </div>
      <div class="bet_detail">
        <div class="pet_detail_left">
          <div class="detail_item">追号编号：{{zhdata[0].ZhNumber}}</div>
          <div class="detail_item">追号彩种：{{zhdata[0].LgName}}</div>
          <div class="detail_item">追号模式：{{zhdata[0].AmName}}</div>
          <div class="detail_item">追号金额：{{zhdata[0].allMoney.toFixed(3)}}元</div>
          <div class="detail_item">追号时间：{{zhdata[0].BetTime}}</div>
        </div>
        <div class="pet_detail_right">
          <div class="detail_item">追号用户：{{zhdata[0].UserName}}</div>
          <div class="detail_item">追号玩法：{{zhdata[0].LpName}}<span v-if="zhdata[0].RxDsFormart != null">({{zhdata[0].RxDsFormart}})</span>
          </div>
          <div class="detail_item">奖金返点：{{zhdata[0].BetBonus.toFixed(3)}}元 | {{zhdata[0].BetRebate.toFixed(1)}}%</div>
          <div class="detail_item">每单注数：{{zhdata[0].BetCount}}</div>
          <div class="detail_item">中奖停止：{{zhdata[0].IsZhWinStop?'是':'否'}}</div>
        </div>
      </div>
      <div class="after_no_tab">
        <!-- 追号详情表格 -->
        <el-table
          :data="zhdata"
          border
          stripe
          style="width: 100%;" height='244'>
          <el-table-column
            type="index"
            :index="indexMethod"
            label="序号" width="50">
          </el-table-column>
          <el-table-column
            prop="Lssue"
            label="投注期号" width="160">
          </el-table-column>
          <el-table-column
            prop="CompleteTime"
            label="结束时间" width="160">
          </el-table-column>
          <el-table-column
            prop="OpenNumber"
            label="开奖号码" width="78">
          </el-table-column>
          <el-table-column
            prop="BetMultiple"
            label="倍数" width="50">
          </el-table-column>
          <el-table-column
            prop="BetMoney"
            label="投注金额" width="80">
          </el-table-column>
          <el-table-column
            prop="WinBonus"
            label="中奖金额" width="80">
          </el-table-column>
          <el-table-column
            prop="WinCount"
            label="中奖注数" width="80">
          </el-table-column>
          <el-table-column
            prop="KuiYing"
            label="亏盈" width="62">
            <template slot-scope="scope">
              <div v-if="scope.row.Status==4 || scope.row.Status==3">{{scope.row.KuiYing}}</div>
              <div v-else>0</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="StatusText"
            label="状态" width="70">
          </el-table-column>
          <el-table-column label="操作" width="70" align="center">
            <template slot-scope="scope">
              <div class="cancellations" v-if="scope.row.CanCancle&&scope.row.Status==1"
                   @click="cancelOrder(scope.$index,zhdata)">撤单
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="after_no_footer">
        <div class="termination" v-if="calcSelf.canCancelAll" @click="stopOrder">终止全部追号</div>
        <div>此次追号亏盈：{{calcSelf.totalKuiYing.toFixed(3)}}元</div>
      </div>
    </el-dialog>
    <el-button :plain="true" @click="openSucc"></el-button>
    <el-button :plain="true" @click="openFail"></el-button>
    <OrderCancel ref="zhOrderCancel" :confirm="cancelOrderConfirm">
      <template slot="content">
        <span>您将撤销</span>
        <span>{{cancelOrderTips}}</span>
        <span>追号订单</span>
      </template>
    </OrderCancel>
  </div>
</template>
<script>
    import {postAjax, getAjax} from "../../util/ajax.js";
    import OrderCancel from '@/components/Elasticframe/OrderCancel';

    export default {
        components: {OrderCancel},
        props: {
            zhdata: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                //自己计算的详情的总的金额和总的亏盈
                calcSelf: {
                    canCancelAll: false,
                    totalMoney: 0,
                    totalKuiYing: 0,
                },
                cancelOrderType: 0,
                cancelOrderTips: '',
                curCancelOrder: null,
                dialogVisible: false
            }
        },
        watch: {
            zhdata() {
                //计算总金额和总亏盈加序号字段
                let tempMoney = 0;
                let tempKuiYing = 0;
                // 订单状态
                // 0 未知  1 未开奖  2 已撤单  3 已中奖  4 未中奖
                this.calcSelf.canCancelAll = false;
                for (var i = 0, length = this.zhdata.length; i < length; i++) {
                    tempMoney += this.zhdata[i].BetMoney;
                    tempKuiYing += this.zhdata[i].KuiYing;
                    this.zhdata[i].serialNum = (i + 1);
                    if (this.zhdata[i].Status === 1) {
                        this.calcSelf.canCancelAll = true;
                    }
                }
                this.calcSelf.totalMoney = tempMoney;
                this.calcSelf.totalKuiYing = tempKuiYing;
            }
        },
        methods: {
          closeThisDiv(){
            this.dialogVisible = false
          },
            cancelOrderConfirm() {
                if (this.cancelOrderType === 1) {
                    let url = "api/Bet/CancleOrder?number=" + this.curCancelOrder.OrderNumber + "&type=1"
                    postAjax(url)
                        .then((data) => {
                            if (data.Data == false) {
                                this.openFail()
                            } else if (data.Data == true) {
                                let message = "已成功取消订单"
                                this.openSucc(message)
                            }
                            this.$emit("list")
                            this.$emit("getinfo")
                        })
                        .then(() => {
                            this.dialogVisible = false
                        })
                } else if (this.cancelOrderType === 2) {
                    let url = "api/Bet/CancleOrder?number=" + this.zhdata[0].ZhNumber + "&type=2"
                    postAjax(url)
                        .then((data) => {
                            if (data.Data == false) {
                                this.openFail()
                            } else if (data.Data == true) {
                                let text = "成功取消所有追号"
                                this.openSucc(text)
                            }

                        })
                        .then(() => {
                            this.$emit("list")
                            this.$emit("getinfo")
                            this.dialogVisible = false
                        })
                }
            },
            // 提示弹框
            openSucc(data) {
                this.$message({message: data, type: 'success'});
            },
            openFail() {
                this.$message.error('取消订单失败');
            },
            // 设置表头
            indexMethod(index) {
                return index + 1;
            },
            // 取消追号
            cancelOrder(index, data) {
                this.cancelOrderType = 1,
                    this.curCancelOrder = data[index]
                this.cancelOrderTips = `${this.curCancelOrder.LgName} ${this.curCancelOrder.Lssue}期`
                this.$refs.zhOrderCancel.show()
            },
            //取消全部追号
            stopOrder() {
                this.cancelOrderType = 2,
                    this.cancelOrderTips = `全部`
                this.$refs.zhOrderCancel.show()
            }
        },
        created() {

        }
    }
</script>
<style>
  .zh_details_box .show_number {
    border: 1px solid #d7d7d7;
    height: 100px;
    padding: 10px 14px;
    overflow-y: auto;
    background-color: #ffffff;
  }

  .zh_details_box .bet_detail {
    padding-top: 4px;
    display: flex;
  }

  .zh_details_box .pet_detail_left, .zh_details_box .pet_detail_right {
    width: 50%;
  }

  .zh_details_box .detail_item {
    line-height: 14px;
    margin-top: 16px;
  }

  .zh_details_box .detail_item > span {
    color: red;
  }

  .zh_details_box .after_no_tab {
    height: 244px;
    margin-top: 30px;
  }

  .zh_details_box .after_no_footer {
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .zh_details_box .termination {
    width: 120px;
    height: 38px;
    line-height: 38px;
    background: #207877;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }

  .zh_details_box .cancellations {
    cursor: pointer;
    color: #0e51a8;
  }

  .zh_details_box > .el-button {
    display: none
  }

  .zh_details_box .el-dialog__header {
    background: #008573 !important;
    border: 0 !important;
    text-align: center;
    padding: 9px !important;
  }
  .zh_details_box .el-dialog__title {
    color: #fff
  }
  .zh_details_box .el-dialog__headerbtn{
    top: 10px !important;
    right: 10px !important;
  }
  .zh_details_box .el-dialog__headerbtn > i {
    color: #fff;
    font-size: 26px;
  }

  .zh_details_box .el-dialog__headerbtn > i:hover {
    color: #fff;
  }

  .zh_details_box .el-table thead th {
    background-color: #2ba396;
    color: #fff;
  }

  .zh_details_box ::-webkit-scrollbar {
    display: none;
  }
  .zh_details_box .el-dialog{
    background-color: #ffffff;
  }
</style>



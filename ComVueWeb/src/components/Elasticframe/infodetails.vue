<template>
    <div class="info_Details" v-if="Object.keys(getinfo).length>0">
        <el-dialog title="订单详情" width="800px" :visible.sync="dialogTableVisible" :lock-scroll="false">
            <span class="iconfont icon-guanbi close_but" @click="closeThisDiv"></span>
            <div class="show_number">
                {{getinfo.BetContent}}
            </div>
            <div class="bet_detail">
                <div class="pet_detail_left">
                    <div class="detail_item">订单编号：{{getinfo.OrderNumber}}</div>
                    <div class="detail_item">彩种名称：{{getinfo.LgName}}</div>
                    <div class="detail_item">玩法名称：{{getinfo.LpName}}<span v-if="getinfo.RxDsFormart != null">({{getinfo.RxDsFormart}})</span>
                    </div>
                    <div class="detail_item">投注期号：{{getinfo.Lssue}}</div>
                    <div class="detail_item">投注时间：{{getinfo.BetTime}}</div>
                    <div class="detail_item">完成时间：{{getinfo.CompleteTime}}</div>
                    <div class="detail_item">奖金模式：{{getinfo.AmName}}</div>
                    <div class="detail_item">订单状态：<span v-if="getinfo.Status == 1" style="color:#8b8b8b">{{getinfo.StatusText}}</span>
                        <span v-if="getinfo.Status == 2" style="color:#b0b0b0">{{getinfo.StatusText}}</span>
                        <span v-if="getinfo.Status == 3" style="color:#f21d32">{{getinfo.StatusText}}</span>
                        <span v-if="getinfo.Status == 4" style="color:#008573">{{getinfo.StatusText}}</span>
                    </div>
                    <div class="detail_item">开奖号码：{{getinfo.OpenNumber}}</div>
                </div>
                <div class="pet_detail_right">
                    <div class="detail_item">订单用户：{{getinfo.UserName}}</div>
                    <div class="detail_item">投注注数：{{getinfo.BetCount}}</div>
                    <div class="detail_item">投注倍数：{{getinfo.BetMultiple}}倍</div>
                    <div class="detail_item">投注金额：{{getinfo.BetMoney.toFixed(3)}}元</div>
                    <div class="detail_item">奖金返点：{{getinfo.BetBonus.toFixed(3)}}元 | {{getinfo.BetRebate.toFixed(1)}}%
                    </div>
                    <div class="detail_item">中奖金额：{{getinfo.WinBonus.toFixed(3)}}元</div>
                    <div class="detail_item">中奖注数：{{getinfo.WinCount}}注</div>
                    <div class="detail_item" v-if="getinfo.Status==4 || getinfo.Status==3">盈亏金额：￥
                        {{getinfo.KuiYing.toFixed(3)}}元
                    </div>
                    <div class="detail_item" v-else>盈亏金额：￥ 0.000 元</div>
                    <div class="cancellations_item">订单操作：
                        <el-button class="cancellations" v-if="getinfo.Status==1" @click="cancel">撤单</el-button>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-button :plain="true" @click="openSucc"></el-button>
        <el-button :plain="true" @click="openFail"></el-button>
        <OrderCancel ref="orderCancel" :confirm="cancelOrderConfirm">
            <template slot="content">
                <span>您将撤销</span>
                <span>{{cancelOrderTips}}</span>
                <span>订单</span>
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
      getinfo: {
        type: Object,
        require: true
      }
    },
    data() {
      return {
        cancelOrderTips: '',
        dialogTableVisible: false, //表格状态
        detailData: this.getinfo,
      }
    },
    methods: {
      cancelOrderConfirm() {
        let that = this
        let url = "api/Bet/CancleOrder?number=" + this.getinfo.OrderNumber + "&type=1"
        postAjax(url)
          .then(function (data) {
            if (data.Data == false) {
              that.openFail()
            } else if (data.Data == true) {
              that.openSucc()
            }
            that.$emit("list")
            that.$emit("getinfo")
            that.dialogTableVisible = false
          })
      },
      // 撤销订单
      cancel() {
        this.cancelOrderTips = `${this.getinfo.LgName} ${this.getinfo.Lssue}期`
        this.$refs.orderCancel.show()
      },
      openSucc() {
        this.$message({message: '已成功取消订单', type: 'success'});
      },
      openFail() {
        this.$message.error('取消订单失败');
      },
      closeThisDiv() {
        this.dialogTableVisible = false
      }
    },
    created() {
    }
  }
</script>
<style>
    .info_Details .el-dialog {
        background-color: #ffffff;
    }
    .close_but {
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        cursor: pointer;
        color: #ffffff;
    }

    .info_Details .el-icon-close {
        display: none;
    }

    .info_Details .show_number {
        border: 1px solid #d7d7d7;
        height: 100px;
        padding: 10px 14px;
        color: #1d1d1d;
        overflow-y: auto;
    }

    .info_Details .bet_detail {
        padding-top: 24px;
        display: flex;
    }

    .info_Details .pet_detail_left, .info_Details .pet_detail_right {
        width: 50%;
    }

    .info_Details .detail_item {
        line-height: 14px;
        margin-top: 16px;
    }

    .info_Details .cancellations_item {
        display: flex;
        align-items: center;
        margin-top: 8px;
    }

    .info_Details .cancellations {
        width: 60px;
        line-height: 28px;
        height: 28px;
        background: #008573;
        border-radius: 2px;
        border: 0;
        padding: 0;
        color: #fff;
    }

    .info_Details .el-dialog__header {
        border-top: 4px solid #2ba498;
        height: 42px;
        background: #f3f3f3;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 0;
    }

    .info_Details > .el-button {
        display: none
    }

    .info_Details .detail_item > span {
        color: red;
    }

    .info_Details .el-dialog__header {
        background: #008573 !important;
        border: 0 !important;
        text-align: center;
    }

    .info_Details .el-dialog__title {
        color: #fff
    }

    .info_Details .el-dialog__headerbtn > i {
        color: #fff
    }

    .info_Details .el-dialog__headerbtn > i:hover {
        color: #fff
    }

    .info_Details ::-webkit-scrollbar {
        display: none;
    }
</style>

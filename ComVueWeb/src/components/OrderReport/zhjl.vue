<template>
  <div id="zhjl"
       v-loading="loading"
       element-loading-text="加载中"
       element-loading-spinner="el-icon-loading"
  >
    <div class="zhjl_main">
      <!-- 彩票类型 -->
      <!-- <div class="lottery_type">
                <div class="lottery_type_item" :class="currLotteryType==1?'lottery_type_item_active':''" @click="changeType(1)">彩票</div>
                <div class="lottery_type_item" :class="currLotteryType==2?'lottery_type_item_active':''" @click="changeType(2)">VR彩票</div>
                <div class="lottery_type_item" :class="currLotteryType==3?'lottery_type_item_active':''" @click="changeType(3)">AG娱乐</div>
                <div class="lottery_type_item" :class="currLotteryType==4?'lottery_type_item_active':''" @click="changeType(4)">AG体育</div>
                <div class="lottery_type_item" :class="currLotteryType==5?'lottery_type_item_active':''" @click="changeType(5)">YOPLAY</div>
                <div class="lottery_type_item" :class="currLotteryType==6?'lottery_type_item_active':''" @click="changeType(6)">捕鱼王</div>
                <div class="lottery_type_item" :class="currLotteryType==7?'lottery_type_item_active':''" @click="changeType(7)">PT艺游</div>
            </div> -->

      <div class="query_info">
        <!-- 选择游戏 -->
        <el-select v-model="currChooseGame" placeholder="请选择游戏">
          <el-option
            v-for="item in game"
            :key="item.LgId"
            :label="item.Name"
            :value="item.LgId">
          </el-option>
        </el-select>

        <!-- 投注期号 -->
        <!-- <el-input v-model="betIssue" placeholder="请输入投注期号"></el-input> -->
        <!-- 方案编号 -->
        <el-input v-model="orderNum" placeholder="请输入追号编号"></el-input>
        <!-- 订单状态 -->
        <el-select v-model="currOrderType" placeholder="请选择订单状态">
          <el-option
            v-for="item in orderType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <div style="margin-top:10px;">
          <el-date-picker
            v-model="beginDate"
            type="datetime"
            placeholder="开始日期" class="czdateStyle">
          </el-date-picker>
          <el-date-picker
            v-model="endDate"
            type="datetime"
            placeholder="结束日期" class="czdateStyle">
          </el-date-picker>
          <div class="czCxBtn" @click="zhCxBtn">搜索</div>
        </div>
      </div>
      <!-- 彩票的表格 -->
      <div class="czTable">
        <!-- 彩票表格 -->
        <el-table
          :data="czTableData"
          border
          stripe
          max-height="386"
          style="width: 100%;">
          <el-table-column
            prop="ZhNumber"
            width="150"
            label="追号编号">
          </el-table-column>
          <el-table-column
            prop="LgName"
            label="彩种">
          </el-table-column>
          <el-table-column
            prop="LpName"
            label="玩法" width="100">
          </el-table-column>
          <el-table-column
            prop="BetTime"
            label="下注时间" width="144">
          </el-table-column>
          <el-table-column
            prop="BetMoney"
            label="投注总金额" width="100">
          </el-table-column>
          <el-table-column
            prop="OpenD"
            label="开奖进度" width="80">
          </el-table-column>
          <!-- :class="StatusText=='支付成功'?'pay_succ':'pay_fail'" -->
          <el-table-column
            prop="StatusText"
            label="状态" width="60">
            <template slot-scope="scope">
              <span class="unpaidState" v-if="scope.row.StatusText === '未开始'">{{scope.row.StatusText}}</span>
              <span class="payState" v-if="scope.row.StatusText === '进行中'">{{scope.row.StatusText}}</span>
              <span class="cancelState" v-if="scope.row.StatusText === '已撤销'">{{scope.row.StatusText}}</span>
              <span v-if="scope.row.StatusText === '已完成'">{{scope.row.StatusText}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作项" align="center" width="70">
            <template slot-scope="scope">
              <div @click="seeDetail(scope.$index, scope.row)" class="detail_style">详情</div>
            </template>
          </el-table-column>
          <div slot="empty"></div>
        </el-table>
      </div>
      <div class="my-paging" v-show="czTableData.length!=0">
        <div class="everyPageShow">每页显示 10 条</div>
        <!--	<el-select v-model="paginationArray.currpageSize" :placeholder='paginationArray.currpageSize+"条"' @change="pageChange" class="choosePage">
                      <el-option
                        v-for="item in pageSize"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled">
                      </el-option>
                  </el-select>-->
        <div class="totalNum">共{{paginationArray.total}}条</div>
        <div class="jumpPage">跳转</div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="paginationArray.currpageSize"
          layout="prev, pager, next, jumper"
          :total="paginationArray.total">
        </el-pagination>
      </div>
      <!-- 表格为空的样式 -->
      <div class="table-empty" v-show="czTableData.length==0">
        <img src="../../assets/zjzh/empty.png" style="width: 102px;height: 78px;">
        <div class="table-empty-text">暂无记录</div>
      </div>
    </div>
    <!-- 弹窗 -->

    <el-dialog
      v-if="false"
      title="追号详情"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <div class="show_number">
        {{detailOut.BetContent|splitNum}}
      </div>
      <div class="bet_detail">
        <div class="pet_detail_left">
          <div class="detail_item">追号编号：{{detailOut.ZhNumber}}</div>
          <div class="detail_item">追号彩种：{{detailOut.LgName}}</div>
          <div class="detail_item">追号模式：{{detailOut.AmName}}</div>
          <div class="detail_item">追号金额：{{calcSelf.totalMoney}}</div>
          <div class="detail_item">追号时间：{{detailOut.BetTime}}</div>
        </div>
        <div class="pet_detail_right">
          <div class="detail_item">追号用户：{{detailOut.UserName}}</div>
          <div class="detail_item">追号玩法：{{detailOut.LpName}}</div>
          <div class="detail_item">奖金返点：{{detailOut.BetRebate}}</div>
          <div class="detail_item">每单注数：{{detailOut.BetCount}}</div>
          <div class="detail_item">中奖停止：{{detailOut.IsZhWinStop?'是':'否'}}</div>
        </div>
      </div>
      <div class="after_no_tab">
        <!-- 追号详情表格 -->
        <el-table
          :data="detailData"
          border
          stripe
          style="width: 100%;" height='244'>
          <el-table-column
            prop="serialNum"
            label="序号" width="50">
          </el-table-column>
          <el-table-column
            prop="Lssue"
            label="投注期号" width="160">
          </el-table-column>
          <el-table-column
            prop="CompleteTime" width="160"
            label="结束时间">
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
            label="亏盈" width="50">
          </el-table-column>
          <el-table-column
            prop="StatusText"
            label="状态" width="62">
          </el-table-column>
          <el-table-column label="操作" width="62" align="center">
            <template slot-scope="scope">
              <div v-if="scope.row.CanCancle&&scope.row.Status==1" @click="cancelOrder(scope.$index, scope.row)"
                   class="detail_style">撤单
              </div>
            </template>
          </el-table-column>
          <div slot="empty"></div>
        </el-table>
      </div>
      <div class="after_no_footer">
        <div class="termination" v-if="calcSelf.canCancelAll" @click="stopNum">终止全部追号</div>
        <div>此次追号亏盈：{{calcSelf.totalKuiYing|toFiexd}}</div>
      </div>
    </el-dialog>


    <OrderCancel ref="OrderCancel" :confirm="cancelOrderConfirm">
      <template slot="content">
        <span>您将撤销</span>
        <span>{{cancelOrderTips}}</span>
        <span>追号订单</span>
      </template>
    </OrderCancel>

    <DialogDetail :zhdata="detailData" ref="DialogDetail" @list="zhCxBtn"></DialogDetail>
  </div>
</template>
<script>
    // 引用axios封装文件
    import {postAjax, getAjax} from "../../util/ajax.js";
    import OrderCancel from '@/components/Elasticframe/OrderCancel';
    import DialogDetail from '@/components/Elasticframe/zhdetails'

    export default {
        components: {OrderCancel, DialogDetail},
        data() {
            return {
                loading: false,
                cancelOrderType: 0,
                cancelOrderTips: '',
                curCancelOrder: null,
                //显示弹框
                dialogVisible: false,
                //当前彩票类型
                currLotteryType: 1,
                // 订单状态
                orderType: [{
                    value: '',
                    label: '请选择'
                }, {
                    value: '1',
                    label: '进行中'
                }, {
                    value: '2',
                    label: '已撤销'
                }, {
                    value: '3',
                    label: '已完成'
                }],
                currOrderType: '',
                //游戏类型
                game: [],
                currChooseGame: '',
                //投注期号
                betIssue: '',
                //订单编号
                orderNum: '',
                //日期
                beginDate: '',
                endDate: '',
                //表格数据
                czTableData: [],
                // czTableData:[],
                paginationArray: {
                    total: 0,
                    currpageSize: 10,
                    currPage: 1,//当前页数
                },
                //每页展示多少条
                pageSize: [
                    {value: 10, label: '10条'},
                    {value: 20, label: '20条'},
                    {value: 30, label: '30条'},
                ],
                //追号详情
                detailData: [],
                //追号详情表格外的数据
                detailOut: {},
                //自己计算的详情的总的金额和总的亏盈
                calcSelf: {
                    canCancelAll: false,
                    totalMoney: 0,
                    totalKuiYing: 0,
                },
            }
        },
        mounted() {
            let etad = new Date()
            let y = etad.getFullYear()
            let m = ('00' + (etad.getMonth() + 1)).slice(-2)
            let d = etad.getDate()
            let h = etad.getHours()
            d = h > 3 ? d : d - 1
            this.beginDate = `${y}-${m}-${('00' + d).slice(-2)} 03:00:00`
            this.endDate = `${y}-${m}-${('00' + (d + 1)).slice(-2)} 03:00:00`
            this.getGameType();
            this.zhCxBtn()
        },
        methods: {
            cancelOrderConfirm() {
                if (this.cancelOrderType == 1) {
                    let url = "api/Bet/CancleOrder?number=" + this.curCancelOrder.OrderNumber + "&type=1"
                    postAjax(url)
                        .then((data) => {
                            console.log(data)
                            this.$message.success('已成功取消订单')
                            this.dialogVisible = false
                        })
                } else if (this.cancelOrderType == 2) {
                    let that = this
                    let url = "api/Bet/CancleOrder?number=" + this.detailData[0].ZhNumber + "&type=2"
                    postAjax(url)
                        .then(function (data) {
                            if (data.Data == false) {
                                // that.openFail()
                                that.$message.error('终止全部追号失败');
                            } else if (data.Data == true) {
                                // that.openSucc()
                                that.$message({
                                    message: '终止全部追号成功',
                                    type: 'success'
                                });
                                that.zhCxBtn();
                            }
                            that.dialogVisible = false
                        })
                }
            },
            //停止全部追号
            stopNum() {
                this.cancelOrderType = 2
                this.cancelOrderTips = `全部`
                this.$refs.OrderCancel.show()
            },
            //改变分页条数
            pageChange(val) {
                this.paginationArray.currpageSize = val;
                this.zhCxBtn();
            },
            //改变当前选中的彩票类型
            changeType(num) {
                this.currLotteryType = num;
            },
            //得到所有游戏类型
            getGameType() {
                let that = this;
                let url = 'api/lnc/get';

                getAjax(url, null).then((data) => {
                    let tempArry = [{Name: '全部', LgId: ''}];
                    if (data.IsSucess) {
                        for (let i = 0, length = data.Data.length; i < length; i++) {
                            tempArry.push(...data.Data[i].LotteryList);
                        }
                        that.game = tempArry;
                    }
                }).catch(() => {

                })
            },
            //查询
            zhCxBtn() {
                let that = this;
                if (this.currLotteryType == 1) {
                    let url = "api/Order/PZhHistoryinfo";
                    let data = {
                        OrderNumber: this.orderNum,
                        LgId: this.currChooseGame,
                        Lssue: this.betIssue,
                        StartTime: this.beginDate,
                        EndTime: this.endDate,
                        Status: this.currOrderType,
                        PIndex: this.paginationArray.currPage,
                        PSize: this.paginationArray.currpageSize,
                    };
                    this.loading = true
                    postAjax(url, data).then((data) => {
                        this.loading = false
                        if (data.IsSucess) {
                            that.czTableData = data.Data.rows;
                            that.paginationArray.total = data.Data.total;
                        }
                    }).catch(() => {
                        this.loading = false
                    })
                }
            },
            //撤单
            cancelOrder(index, row) {
                this.cancelOrderType = 1
                this.curCancelOrder = row
                this.cancelOrderTips = `${row.LgName} ${row.Lssue}期`
                this.$refs.OrderCancel.show()
            },
            //点击详情按钮
            seeDetail(index, row) {

                let that = this;
                // console.log(index,row);
                // this.detailData=row;
                // this.dialogVisible = true;
                //请求详情数据接口
                let url = "api/Order/GetDetailByOrderNumber?number=" + row.ZhNumber + "&type=" + 2;
                postAjax(url, null).then(function (data) {
                    if (data.IsSucess) {
                        let allmoney = 0 //总金额
                        let ykmoney = 0  //盈亏金额
                        //计算总金额
                        data.Data.forEach(item => {
                            allmoney += item.BetMoney
                            ykmoney += item.WinBonus - item.BetMoney
                        })
                        //添加到第一个数组
                        data.Data[0]["allMoney"] = allmoney
                        data.Data[0]["ykMoney"] = ykmoney
                        that.detailData = data.Data;
                        that.$refs.DialogDetail.dialogVisible = true
                    }
                })
            },
            handleSizeChange(e) {
                // console.log(1);
            },
            handleCurrentChange(e) {
                //回调为当前跳转的第几页
                this.paginationArray.currPage = e;
                this.zhCxBtn();
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
        },
        //过滤器
        filters: {
            splitNum(val) {
                if (val) {
                    return val.split(",").join(" ");
                }
            },
            formatDate(val) {
                if (val) {
                    var arr = val.split("T");
                    var arr1 = arr[1].split(".")
                    return arr[0] + ' ' + arr1[0]
                }
            },
            toFiexd(val) {
                if (val && val != undefined) {
                    console.log(val)
                    return val.toFixed(3)
                }
            },
        }
    }
</script>
<style lang="scss">
  #zhjl {
    .el-loading-spinner {
      margin-top: -100px;

      .el-icon-loading {
        color: #1d7272;
      }

      .el-loading-text {
        color: #1d7272;
      }
    }

    .el-loading-mask {
      background: rgba(255, 255, 255, 0.8);
    }
  }
</style>

<style type="scss">
  #zhjl {

  }

  .zhjl_main {
    padding: 20px 23px 0 20px
  }

  #zhjl .el-select, #zhjl .el-input, #zhjl input {
    width: 226px;
    margin-right: 10px;
  }

  #zhjl table tbody th {
    border: none;
  }

  /*彩票类型*/
  .lottery_type {
    border-bottom: 4px solid #e5e6eb;
    height: 48px;
    margin-bottom: 16px;
  }

  .lottery_type_item {
    height: 48px;
    width: 102px;
    float: left;
    font-size: 18px;
    text-align: center;
    line-height: 48px;
    font-weight: 500;
  }

  .lottery_type_item_active {
    border-bottom: 4px solid #13aca8
  }

  #zhjl .detail_style {
    color: #008573;
  }

  .detail_style:hover {
    cursor: pointer;
  }

  #zhjl .czdateStyle .el-input__prefix {
    left: 196px;
  }

  .czdateStyle .el-input__icon {
    line-height: 28px;
    color: #000;
  }

  .czCxBtn {
    width: 75px;
    height: 37px;
    background-color: #008573;
    border-radius: 5px;
    text-align: center;
    line-height: 37px;
    font-size: 14px;
    color: #fff;
    display: inline-block;
  }

  .czCxBtn:hover {
    cursor: pointer;
  }

  .czTable {
    margin-top: 20px;
  }

  #zhjl .el-table td, #zhjl .el-table th {
    padding: 0;
    height: 35px;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
  }

  #zhjl .el-table thead th {
    font-size: 14px;
  }

  /*去掉表格为空的样式*/
  #zhjl .el-table__empty-block {
    display: none;
  }

  /*自定义样式*/
  .table-empty {
    padding-top: 80px;
    text-align: center;
  }

  .table-empty-text {
    font-size: 14px;
    margin-top: 20px;
    color: #8b918b;
  }

  .my-paging {
    padding-top: 12px;
  }

  .everyPageShow {
    width: 84px;
    height: 27px;
    font-size: 12px;
    color: #67707c;
    line-height: 27px;
    text-align: center;
    float: left;
  }

  .my-paging .el-pagination {
    float: right;
    padding: 0;
  }

  .choosePage .el-input__inner {
    height: 27px;
    border-radius: 0;
    margin-left: 5px;
    width: 65px;
    padding: 0;
    padding-left: 8px;
    font-size: 12px;
  }

  #zhjl .el-pagination__editor.el-input {
    width: 50px;
  }

  .choosePage .el-input__icon {
    line-height: 27px;
  }

  #zhjl .choosePage input::-webkit-input-placeholder {
    color: #67707c !important;
  }

  .el-pager li.active {
    color: #008573;
  }

  .el-pager {
    font-weight: normal;
  }

  /*总共多少条的样式*/
  .totalNum {
    display: inline-block;
    font-size: 12px;
    margin-left: 15px;
  }

  .jumpPage {
    float: right;
    width: 54px;
    height: 27px;
    line-height: 27px;
    font-size: 14px;
    text-align: center;
    color: #008573;
    margin-left: 8px;
    cursor: pointer;
  }

  /*弹窗样式*/
  #zhjl .el-dialog{
    background-color: #ffffff;
  }
  #zhjl .el-dialog__header {
    border-top: 4px solid #2ba498;
    height: 42px;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  #zhjl .el-dialog__body {
    padding: 19px 17px 0 17px;
  }

  .show_number {
    border: 1px solid #d7d7d7;
    height: 100px;
    padding: 10px 14px;
    overflow-y: auto;
  }

  .bet_detail {
    padding-top: 4px;
    display: flex;
  }

  .pet_detail_left, .pet_detail_right {
    width: 50%;
  }

  .pet_detail_left {
    padding-left: 16px;
  }

  .detail_item {
    line-height: 14px;
    margin-top: 16px;
  }

  .after_no_tab {
    height: 244px;
    margin-top: 30px;
  }

  .after_no_footer {
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #zhjl .termination {
    width: 120px;
    height: 38px;
    line-height: 38px;
    background: #008573;
    text-align: center;
    color: #fff;
  }
  #zhjl .czTable .el-table th {
    color: #171717;
    height: 35px;
    background-image: linear-gradient(0deg,
      #e7e6e7 0%,
      #ffffff 100%);
  }
  #zhjl table thead tr th {
    border-right: 1px solid #dddddd !important;
  }
  #zhjl .el-input__inner{
    width: 226px;
    height: 38px;
    background-image: -webkit-gradient(linear, left bottom, left top, from(#e6e4e4), to(#ffffff));
    background-image: linear-gradient(0deg, #e6e4e4 0%, #ffffff 100%);
    border-radius: 5px;
    border: solid 1px #dddddd;
  }
  #zhjl .is-in-pagination input,#zhjl .is-in-pagination{
    width: auto;
    height: auto;
  }
</style>

<template>
  <div id="tzjl"
       v-loading="loading"
       element-loading-text="加载中"
       element-loading-spinner="el-icon-loading"
  >
    <div class="tzjl_main">
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
        <!-- 订单状态 -->
        <el-select v-model="currOrderType" placeholder="请选择订单状态">
          <el-option
            v-for="item in orderType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <!-- 投注期号 -->
        <el-input v-model="betIssue" placeholder="请输入投注期号"></el-input>
        <!-- 订单编号 -->
        <el-input v-model="orderNum" placeholder="请输入订单编号"></el-input>
        <div style="margin-top:10px;">
          <el-date-picker
            v-model="beginDate"
            type="datetime"
            placeholder="开始日期" class="czdateStyle" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
          <el-date-picker
            v-model="endDate"
            type="datetime"
            placeholder="结束日期" class="czdateStyle" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
          <div class="czCxBtn" @click="tzCxBtn">查询</div>
        </div>
      </div>
      <!-- 彩票的表格 -->
      <div class="czTable" v-show="currLotteryType==1">
        <!-- 彩票表格 -->
        <el-table
          :data="czTableData"
          border
          stripe
          max-height="386"
          style="width: 100%;">
          <el-table-column
            width="180"
            prop="OrderNumber"
            label="订单号">
          </el-table-column>
          <el-table-column
            prop="LgName"
            label="彩种">
          </el-table-column>
          <el-table-column
            width="120"
            prop="Lssue"
            label="期号" >
          </el-table-column>
          <el-table-column
            prop="BetMoney"
            width="80"
            label="投注金额" >
          </el-table-column>
          <el-table-column
            prop="StatusText"
            label="状态" width="60">
            <template slot-scope="scope">
              <span class="unpaidState" v-if="scope.row.StatusText === '未开奖'">{{scope.row.StatusText}}</span>
              <span class="chedan" v-if="scope.row.StatusText === '已撤单'">{{scope.row.StatusText}}</span>
              <span class="payState" v-if="scope.row.StatusText === '已中奖'">{{scope.row.StatusText}}</span>
              <span class="cancelState" v-if="scope.row.StatusText === '未中奖'">{{scope.row.StatusText}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="WinBonus"
            width="80"
            label="中奖金额">
          </el-table-column>
          <el-table-column
            prop="BetTime"
            width="140"
            label="投注时间" >
          </el-table-column>
          <el-table-column label="操作" width="50" align="center">
            <template slot-scope="scope">
              <div @click="seeDetail(scope.$index, scope.row)" class="detail_style">详情</div>
            </template>
          </el-table-column>
          <div slot="empty"></div>
        </el-table>
      </div>
      <!-- VR彩票表格 -->
      <div class="czTable" v-show="currLotteryType==2">
        <!-- 彩票表格 -->
        <el-table
          :data="czTableData"
          border
          stripe
          max-height="386"
          style="width: 100%;">
          <el-table-column
            prop="serialNum"
            label="编号">
          </el-table-column>
          <el-table-column
            prop="channelName"
            label="频道名称">
          </el-table-column>
          <el-table-column
            prop="issue"
            label="期号" width="150">
          </el-table-column>
          <el-table-column
            prop="putInMoney"
            label="投注金额">
          </el-table-column>
          <el-table-column
            prop="winMoney"
            label="中奖金额">
          </el-table-column>
          <el-table-column
            prop="players"
            label="玩家赔率">
          </el-table-column>
          <el-table-column
            prop="state"
            label="投注状态">
          </el-table-column>
          <el-table-column
            prop="betTime"
            label="下注时间" width="144">
          </el-table-column>
          <el-table-column label="查看详情" width="100" align="center">
            <div>详情</div>
          </el-table-column>
          <div slot="empty"></div>
        </el-table>
      </div>
      <!-- AG娱乐表格 -->
      <div class="czTable" v-show="currLotteryType!=2 && currLotteryType!=1">
        <!-- 彩票表格 -->
        <el-table
          :data="czTableData"
          border
          stripe
          max-height="386"
          style="width: 100%;">
          <el-table-column
            prop="serialNum"
            label="编号">
          </el-table-column>
          <el-table-column
            prop="gameType"
            label="游戏类型">
          </el-table-column>
          <el-table-column
            prop="putInMoney"
            label="投注金额">
          </el-table-column>
          <el-table-column
            prop="effectiveMoney"
            label="有效投注金额" width="120">
          </el-table-column>
          <el-table-column
            prop="sendPrize"
            label="派奖">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="betTime"
            label="投注时间" width="144">
          </el-table-column>
          <div slot="empty"></div>
        </el-table>
      </div>
      <div class="my-paging" v-show="czTableData.length!=0">
        <div class="everyPageShow">每页显示 10 条</div>
        <!--<el-select v-model="paginationArray.currpageSize" :placeholder='paginationArray.currpageSize+"条"' @change="pageChange" class="choosePage">
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
      title="订单详情"
      v-if="dialogVisible"
      :visible.sync="dialogVisible"
      :lock-scroll="false"
      width="800px">
      <div class="show_number">
        {{detailData.BetContent|splitNum}}
      </div>
      <div class="bet_detail">
        <div class="pet_detail_left">
          <div class="detail_item">订单编号：{{detailData.OrderNumber}}</div>
          <div class="detail_item">彩种名称：{{detailData.LgName}}</div>
          <div class="detail_item">玩法名称：{{detailData.LpName}}<span v-if="detailData.RxDsFormart != null" style="color:red">({{detailData.RxDsFormart}})</span></div>
          <div class="detail_item">投注期号：{{detailData.Lssue}}</div>
          <div class="detail_item">投注时间：{{detailData.BetTime}}</div>
          <div class="detail_item">完成时间：{{detailData.CompleteTime}}</div>
          <div class="detail_item">奖金模式：{{detailData.AmName}}</div>
          <div class="detail_item">订单状态：<span style="color:red">{{detailData.StatusText}}</span></div>
          <div class="detail_item">开奖号码：{{detailData.OpenNumber}}</div>
        </div>
        <div class="pet_detail_right">
          <div class="detail_item">订单用户：{{detailData.UserName}}</div>
          <div class="detail_item">投注注数：{{detailData.BetCount}}</div>
          <div class="detail_item">投注倍数：{{detailData.BetMultiple}}倍</div>
          <div class="detail_item">投注金额：{{detailData.BetMoney|toFiexd}}</div>
          <div class="detail_item">奖金返点：{{detailData.BetBonus.toFixed(3)}}元 | {{detailData.BetRebate.toFixed(1)}}%</div>
          <div class="detail_item">中奖金额：{{detailData.WinBonus.toFixed(3)}}元</div>
          <div class="detail_item">中奖注数：{{detailData.WinCount}}注</div>
          <div class="detail_item" v-if="detailData.Status==4 || detailData.Status==3">盈亏金额：￥
            {{detailData.KuiYing.toFixed(3)}}元
          </div>
          <div class="detail_item" v-else>盈亏金额：￥ 0.000 元</div>
          <div class="cancellations_item">订单操作：
            <el-button class="cancellations" v-if="detailData.Status==1" @click="cancel">撤单</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
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
  // 引用axios封装文件
  import {postAjax, getAjax} from "../../util/ajax.js"
  import OrderCancel from '@/components/Elasticframe/OrderCancel';
  import tzDetail from '@/components/Elasticframe/zhdetails'
  export default {
    components: {OrderCancel,tzDetail},
    data() {
      return {
        loading: false,
        cancelOrderTips: '',
        //显示弹框
        dialogVisible: false,
        //当前是哪个彩种 1彩票 2VR彩票 3AG娱乐 4AG体育 5YOPLAY 6捕鱼王 7PT艺游
        currLotteryType: 1,
        // 订单状态
        orderType: [{
          value: '',
          label: '请选择'
        }, {
          value: '1',
          label: '未开奖'
        }, {
          value: '2',
          label: '已撤单'
        }, {
          value: '3',
          label: '已中奖'
        }, {
          value: '4',
          label: '未中奖'
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
        //详情数据
        detailData: null,
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
        ]
      }
    },
    mounted() {
      this.initDate()
      this.getGameType();
      this.tzCxBtn()
    },
    methods: {
      openSucc() {
        this.$message({message: '已成功取消订单', type: 'success'});
      },
      openFail() {
        this.$message.error('取消订单失败');
      },
      cancelOrderConfirm() {
        let that = this
        let url = "api/Bet/CancleOrder?number=" + this.detailData.OrderNumber + "&type=1"
        postAjax(url)
          .then(function (data) {
            if (data.Data == false) {
              that.openFail()
            } else if (data.Data == true) {
              that.tzCxBtn();
              that.openSucc()
            }
            that.dialogVisible = false
          })
      },
      // 撤销订单
      cancel() {
        this.cancelOrderTips = `${this.detailData.LgName} ${this.detailData.Lssue}期`
        this.tzCxBtn()
        this.$refs.orderCancel.show()
      },
      initDate() {
        let etad = new Date()
        let y = etad.getFullYear()
        let m = ('00' + (etad.getMonth() + 1)).slice(-2)
        let d = etad.getDate()
        let h = etad.getHours()
        d = h > 3 ? d : d - 1
        this.beginDate = `${y}-${m}-${('00' + d).slice(-2)} 03:00:00`
        this.endDate = `${y}-${m}-${('00' + (d + 1)).slice(-2)} 03:00:00`
      },
      //改变分页条数
      pageChange(val) {
        this.paginationArray.currpageSize = val;
        this.tzCxBtn();
      },
      //改变当前选中的彩票类型
      changeType(num) {
        this.currLotteryType = num;
        this.czTableData = [];
      },
      //查询按钮
      tzCxBtn() {
        let that = this;
        if (this.currLotteryType == 1) {
          let url = "api/Order/PBetHistoryinfo";
          let tzData = {
            StartTime: this.beginDate,
            EndTime: this.endDate,
            LgId: this.currChooseGame,
            Lssue: this.betIssue,
            OrderNumber: this.orderNum,
            PIndex: this.paginationArray.currPage,
            PSize: this.paginationArray.currpageSize,
            Status: this.currOrderType
          };
          this.loading = true
          postAjax(url, tzData).then((data) => {
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
      //得到所有游戏类型
      getGameType() {
        let that = this;
        let url = 'api/lnc/get';
        getAjax(url, null).then(function (data) {
          let tempArry = [{Name: '全部', LgId: ''}];
          if (data.IsSucess) {
            for (let i = 0, length = data.Data.length; i < length; i++) {
              tempArry.push(...data.Data[i].LotteryList);
            }
            that.game = tempArry;
          }
        })
      },
      //点击详情按钮
      seeDetail(index, row) {
        let that = this;
        //请求详情数据接口
        let url = "api/Order/GetDetailByOrderNumber?number=" + row.OrderNumber + "&type=" + 1;
        postAjax(url, null).then(function (data) {
          if (data.IsSucess) {
            that.detailData = data.Data[0];
            that.dialogVisible = true;
          }
        })
      },
      handleSizeChange(e) {
        // console.log(1);
      },
      handleCurrentChange(e) {
        //回调为当前跳转的第几页
        this.paginationArray.currPage = e;
        this.tzCxBtn();
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
        if (val) {
          return val.toFixed(3)
        }
      },
    }
  }
</script>
<style lang="scss">
  #tzjl {
    .el-loading-spinner {
      margin-top: -140px;

      .el-icon-loading {
        color: #1d7272;
      }

      .el-loading-text {
        color: #1d7272;
      }
    }
    ::-webkit-scrollbar{
        display: none;
    }
    .el-loading-mask {
      background: rgba(255, 255, 255, 0.8);
    }
  }
</style>
<style type="scss">
  #tzjl {

  }
  #tzjl .tzjl_main {
    padding: 20px 23px 0 20px
  }
  #tzjl .el-select,#tzjl .el-input{
    width: 226px;
    margin-right: 8px;
  }
  #tzjl table tbody th{
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

  .lottery_type_item:hover {
    cursor: pointer;
  }

  .lottery_type_item_active {
    border-bottom: 4px solid #13aca8
  }

  .query_info .el-select .el-input .el-select__caret {
    line-height: 28px;
  }

  .czdateStyle {
    width: 180px;
  }

  #tzjl .czdateStyle .el-input__prefix {
    left: 196px;
  }

  #tzjl .el-pagination__editor.el-input {
    width: 50px;
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

  #tzjl .detail_style {
    color: #008573;
  }

  .detail_style:hover {
    cursor: pointer;
  }

  /*去掉表格为空的样式*/
  .czTable .el-table__empty-block {
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

  .choosePage .el-input__icon {
    line-height: 27px;
  }

  #dljl .choosePage input::-webkit-input-placeholder {
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
    margin-top: 3px;
  }

  #tzjl .jumpPage {
    float: right;
    font-size: 14px;
    text-align: center;
    color: #008573;
    margin-left: 8px;
    cursor: pointer;
    margin-top: 3px;
  }

  /*弹窗样式*/
  #tzjl .el-dialog{
    background-color: #fff;
  }
  #tzjl .el-dialog__header {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  #tzjl .el-dialog__body {
    padding: 19px 17px 30px 17px;
  }

  .show_number {
    border: 1px solid #d7d7d7;
    height: 100px;
    padding: 10px 14px;
    overflow-y: auto;
  }

  .bet_detail {
    padding-top: 24px;
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

  .cancellations_item {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }

  .cancellations {
    width: 60px;
    line-height: 28px;
    height: 28px;
    background: #008573 !important;
    border-radius: 2px;
    border: 0;
    padding: 0;
    color: #fff !important;
  }
  #tzjl .czTable .el-table th {
    color: #171717;
    height: 35px;
    background-image: linear-gradient(0deg,
      #e7e6e7 0%,
      #ffffff 100%);
  }
  #tzjl table thead tr th {
    border-right: 1px solid #dddddd !important;
  }
  #tzjl .el-input__inner{
    width: 226px;
    height: 38px;
    background-image: -webkit-gradient(linear, left bottom, left top, from(#e6e4e4), to(#ffffff));
    background-image: linear-gradient(0deg, #e6e4e4 0%, #ffffff 100%);
    border-radius: 5px;
    border: solid 1px #dddddd;
  }
  #tzjl .is-in-pagination .el-input__inner{
    width: auto;
    height: auto;
    color: #008573;
  }
</style>

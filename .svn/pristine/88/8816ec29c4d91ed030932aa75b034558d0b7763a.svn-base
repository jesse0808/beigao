<template>
  <div id="txjl"
       v-loading="loading"
       element-loading-text="加载中"
       element-loading-spinner="el-icon-loading"
  >
    <div class="txjl_main">
      <div class="query_info">
        <!-- 订单状态 -->
        <el-select v-model="currOrderType" placeholder="请选择订单状态">
          <el-option
            v-for="item in orderType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
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
          <div class="czCxBtn" @click="txCxBtn">查询</div>
        </div>
      </div>
      <div class="czTable">
        <el-table

          :data="czTableData"
          border
          stripe
          max-height="386"
          style="width: 100%;">
          <el-table-column
            prop="ApplyTime"
            label="申请时间" width="144">
          </el-table-column>
          <el-table-column
            prop="DmMoney"
            label="提现金额">
          </el-table-column>
          <el-table-column
            prop="StatusText"
            label="状态">
            <template slot-scope="scope">
              <span v-if="scope.row.StatusText === '待审核'">{{scope.row.StatusText}}</span>
              <span class="unpaidState" v-if="scope.row.StatusText === '未过审'">{{scope.row.StatusText}}</span>
              <span class="unpaidState" v-if="scope.row.StatusText === '待出款'">{{scope.row.StatusText}}</span>
              <span class="payState" v-if="scope.row.StatusText === '已出款'">{{scope.row.StatusText}}</span>
              <span class="cancelState" v-if="scope.row.StatusText === '已撤销'">{{scope.row.StatusText}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="Remark"
            label="备注/说明">
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
  </div>
</template>
<script>
    // 引用axios封装文件
    import {postAjax, getAjax} from "../../util/ajax.js"

    export default {
        data() {
            return {
                loading: false,
                // 订单状态
                orderType: [{
                    value: '',
                    label: '请选择'
                }, {
                    value: '1',
                    label: '待审核'
                }, {
                    value: '2',
                    label: '未过审'
                }, {
                    value: '3',
                    label: '待出款'
                },
                    {
                        value: '4',
                        label: '已出款'
                    },
                    {
                        value: '5',
                        label: '已撤销'
                    },
                ],
                currOrderType: '',
                //订单编号
                orderNum: '',
                //日期
                beginDate: '',
                endDate: '',
                //表格数据
                czTableData: [],
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
            this.txCxBtn()
        },
        methods: {
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
                this.txCxBtn();
            },
            //查询
            txCxBtn() {
                let that = this;
                let url = "api/Cash/DrawMoneyApplyList";
                let cxData = {
                    EndTime: this.endDate,
                    OrderNumber: this.orderNum,
                    PIndex: this.paginationArray.currPage,
                    PSize: this.paginationArray.currpageSize,
                    StartTime: this.beginDate,
                    Status: this.currOrderType
                };
                this.loading = true
                postAjax(url, cxData).then((data) => {
                    this.loading = false
                    if (data.IsSucess) {
                        that.czTableData = data.Data.rows;
                        that.paginationArray.total = data.Data.total;
                    }
                }).catch(() => {
                    this.loading = false
                })
            },
            handleSizeChange(e) {
                // console.log(1);
            },
            handleCurrentChange(e) {
                //回调为当前跳转的第几页
                this.paginationArray.currPage = e;
                this.txCxBtn();
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
        }
    }
</script>

<style lang="scss" scoped>
  #txjl {
    height: 100%;
    .txjl_main {
      padding: 20px 23px 0 20px
    }
    .el-loading-spinner {
      margin-top: -140px;

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
  #txjl .el-input,#txjl .el-select{
    display: inline-block;
    width: 226px;
    margin-right: 12px;
  }

  #txjl .el-input__inner {
    width: 226px;
    height: 38px;
    background-image: linear-gradient(0deg,
      #e6e4e4 0%,
      #ffffff 100%);
    border-radius: 5px;
    border: solid 1px #dddddd;
  }
  #txjl .is-in-pagination{
    width: 50px !important;
  }
  #txjl .is-in-pagination > input{
    width: 50px !important;
    height: 28px !important;
    background: transparent !important;
  }
  .czdateStyle {
    width: 180px;
  }

  #txjl .czdateStyle .el-input__prefix {
    left: 196px;
  }

  .czdateStyle .el-input__icon {
    line-height: 28px;
    color: #000;
  }
  #txjl table thead tr th {
    border-right: 1px solid #dddddd !important;
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

  #txjl .czTable .el-table th {
    color: #171717;
    height: 35px;
    background-image: linear-gradient(0deg,
      #e7e6e7 0%,
      #ffffff 100%);
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
  }

  .jumpPage {
    float: right;
    line-height: 27px;
    font-size: 14px;
    text-align: center;
    color: #008573;
    margin-left: 8px;
    cursor: pointer;
  }
</style>

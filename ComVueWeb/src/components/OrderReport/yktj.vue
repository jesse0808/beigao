<template>
  <div id="yktj"
       v-loading="loading"
       element-loading-text="加载中"
       element-loading-spinner="el-icon-loading"
  >
    <div class="yktj_main">
      <div class="query_info">
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
        <div class="czCxBtn" @click="ykCxBtn">搜索</div>
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
            prop="yxtz"
            label="有效投注" width='144' :formatter="addSymbol">
          </el-table-column>
          <el-table-column
            prop="WinBonus"
            label="中奖金额" :formatter="addSymbol">
          </el-table-column>
          <el-table-column
            prop="Rebate"
            label="返点金额" :formatter="addSymbol">
          </el-table-column>
          <el-table-column
            prop="Activity"
            label="活动金额" :formatter="addSymbol">
          </el-table-column>
          <el-table-column
            prop="CashIn"
            label="充值总额" :formatter="addSymbol">
          </el-table-column>
          <el-table-column
            prop="CashOut"
            label="取款总额" :formatter="addSymbol">
          </el-table-column>
          <!-- <el-table-column
                    prop="Cancel"
                    label="撤单总额" :formatter="addSymbol">
                  </el-table-column> -->
          <el-table-column
            prop="sum"
            label="盈亏总额" :formatter="addSymbol">
          </el-table-column>
          <div slot="empty"></div>
        </el-table>
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
        //日期
        beginDate: '',
        endDate: '',
        //表格数据
        czTableData: [],
        // czTableData:[],
      }
    },
    mounted() {
      this.initDate()
      this.ykCxBtn()
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
      ykCxBtn() {
        this.czTableData = [];
        let that = this;
        let url = "api/OrderReport/GetAccReport";
        let data = {
          EndTime: this.endDate,
          StartTime: this.beginDate,
        };
        this.loading = true
        postAjax(url, data).then((data) => {
          this.loading = false
          if (data.IsSucess) {
            that.czTableData.push(data.Data);
            that.czTableData.map(item => {
              item.yxtz = item.TZCount
              item.sum = item.WinBonus + item.Rebate + item.Activity - item.TZCount
              console.log('czTableData', item)
            })
          }
        }).catch(() => {
          this.loading = false
        })
      },
      //加上钱的符号
      addSymbol(row, column) {
        if (row[column.property]) {
          return "￥" + row[column.property].toFixed(2)
        } else {
          return '￥0'
        }
      }
    }
  }
</script>

<style lang="scss">
  #yktj {
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
  #yktj {

  }

  .yktj_main {
    padding: 20px 23px 0 20px
  }

  #yktj .el-select, #yktj .el-input, #yktj input {
    width: 226px;
    margin-right: 10px;
  }

  #yktj table tbody th {
    border: none;
  }
  .czdateStyle {
    width: 180px;
  }

  .czdateStyle .el-input__prefix {
    left: 196px;
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

  .czTable .el-table th {
    background-color: #2ba396;
    color: #fff;
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
  .my_dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2003;
    background-color: rgba(149, 150, 153, 0.3);
  }

  .my_dialog_main {
    position: absolute;
    width: 30%;
    background: #fff;
    z-index: 2004;
    top: 20%;
    left: 35%;
  }
  #yktj .czTable .el-table th {
    color: #171717;
    height: 47px;
    background-image: linear-gradient(0deg,
      #e7e6e7 0%,
      #ffffff 100%);
  }
  #yktj table thead tr th {
    border-right: 1px solid #dddddd !important;
  }
  #yktj .el-input__inner{
    width: 226px;
    height: 38px;
    background-image: -webkit-gradient(linear, left bottom, left top, from(#e6e4e4), to(#ffffff));
    background-image: linear-gradient(0deg, #e6e4e4 0%, #ffffff 100%);
    border-radius: 5px;
    border: solid 1px #dddddd;
  }
  #yktj .is-in-pagination .el-input__inner,#yktj .is-in-pagination{
    width: auto;
    height: auto;
    color: #008573;
  }
</style>

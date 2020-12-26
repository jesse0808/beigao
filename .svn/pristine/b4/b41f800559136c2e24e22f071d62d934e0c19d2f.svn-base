<template>
  <div id="dljl"
       v-loading="loading"
       element-loading-text="加载中"
       element-loading-spinner="el-icon-loading"
  >
    <div class="selectDate">
      <el-date-picker
        v-model="beginDate"
        type="datetime"
        placeholder="开始日期" class="dateStyle" value-format="yyyy-MM-dd HH:mm">
      </el-date-picker>
      <el-date-picker
        v-model="endDate"
        type="datetime"
        placeholder="结束日期" class="dateStyle" value-format="yyyy-MM-dd HH:mm">
      </el-date-picker>
      <div class="cxBtn" @click="cxBtn">查询</div>
    </div>
    <div class="tableData">
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%;">
          <el-table-column
            prop="LoginTermText"
            label="类型" width="100">
          </el-table-column>
          <el-table-column
            prop="LoginIp"
            label="IP" width="160">
          </el-table-column>
          <el-table-column
            prop="LoginAddress"
            label="IP地址" width="160">
          </el-table-column>
          <el-table-column
            prop="LoginTermText"
            :formatter="formatDetail"
            label="详细" >
          </el-table-column>
          <el-table-column
            prop="LoginTime"
            label="登录时间" width="160">
          </el-table-column>
        <div slot="empty"></div>
      </el-table>
    </div>
    <div class="my-paging" v-show="tableData.length!=0">
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
    <div class="table-empty" v-show="tableData.length==0">
      <img src="../../assets/zjzh/empty.png" style="width: 102px;height: 78px;">
      <div class="table-empty-text">暂无记录</div>
    </div>
  </div>
</template>
<script>
  // 引用axios封装文件
  import {postAjax, getAjax} from "../../util/ajax.js"

  export default {
    data() {
      return {
        loading:false,
        Maxheight: null,
        beginDate: '',
        endDate: '',
        //表格数据
        tableData: [],
        paginationArray: {
          total: 0,
          currpageSize: 10,//当页条数
          currPage: 1,//当前页数
        },
        //每页展示多少条
        pageSize: [
          {value: 10, label: '10条'},
          {value: 20, label: '20条'},
          {value: 30, label: '30条'},
        ],
      }
    },
    computed: {
      tableHeight() {
        /*
        * max-height="386"
        :height="tableData && tableData.length>=10 ? 386 : ' '"
        * */
      }
    },
    mounted() {
      this.initDate()
      this.cxBtn()
    },
    methods: {
      _initHeight() {
        if (this.tableData.length === 0) {
          this.Maxheight = null
        }
        if (this.tableData.length >= 10) {
          this.Maxheight = 350
        }
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
        this.cxBtn();
      },
      //查询
      cxBtn() {
        let that = this;
        let url = "Api/User/UserLoginLogInfo";
        let cxData = {
          StartTime: this.beginDate,
          EndTime: this.endDate,
          PIndex: this.paginationArray.currPage,
          PSize: this.paginationArray.currpageSize
        };
        this.loading = true
        postAjax(url, cxData).then((data) => {
          setTimeout(() => {
            this.loading = false
          },100)
          if (data.IsSucess) {
            that.paginationArray.total = data.Data.total;
            that.tableData = data.Data.rows;
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
        this.cxBtn();
      },
      //格式化表格的时间数据
      //  formatDate(row,column){
      // var arr=row.LoginTime.split("T");
      // var arr1=arr[1].split(".")
      // return arr[0]+' '+arr1[0]
      //  },
      formatDate(row, column) {
        var arr = row[column.property].split("T");
        var arr1 = arr[1].split(".")
        return arr[0] + ' ' + arr1[0]
      },
      //格式化详情数据
      formatDetail(row) {
        return "用户" + row.LoginName + "登录,平台：" + row.LoginTermText
      }
    },
  }
</script>
<style lang="scss">
  #dljl {
    .el-loading-spinner {
       margin-top: -160px;
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
  #dljl {
    height: 100%;
    background-color: white;
  }
  #dljl .selectDate .el-input__inner{
    width: 226px;
    height: 38px;
    background-image: linear-gradient(0deg,
      #e4e4e4 0%,
      #ffffff 100%);
    border-radius: 5px;
    border: solid 1px #dddddd
  }
  #dljl .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 226px;
  }
  #dljl .selectDate > div{
    margin-right: 10px;
  }
  /*日期选择*/
  .selectDate {
    padding: 22px 20px 0;
  }

  /*日期的样式*/

  .dateStyle .el-input__prefix {
    left: 190px;
  }

  .dateStyle .el-input__icon {
    line-height: 27px;
    color: #000;
  }

  .dateStyle .el-input__inner {
    padding-left: 11px !important;
    height: 27px;
    font-size: 12px;
    line-height: 27px;
    border-radius: 0;
  }

  .my_icon {
    position: absolute;
    z-index: 100;
  }

  #dljl input::-webkit-input-placeholder {
    color: #000 !important;
  }

  .cxBtn {
    display: inline-block;
    width: 75px;
    height: 37px;
    background-color: #008573;
    border-radius: 5px;
    text-align: center;
    line-height: 37px;
    font-size: 14px;
    color: #fff;
  }

  .cxBtn:hover {
    cursor: pointer;
  }

  .tableData {
    margin-top: 21px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .tableData > div{
    border: none !important;
  }
  .tableData .el-table thead th {
    font-size: 14px;
  }
  #dljl > div.tableData table thead tr th{
    border-right: 1px solid #dddddd !important;
  }
  .el-table--striped .el-table__body tr.el-table__row--striped td{
    background-color: #f7f7f7;
  }
  .tableData .el-table td, .tableData .el-table th {
    padding: 0;
    height: 35px;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
  }

  #dljl .tableData .el-table th {
    height: 35px;
    background-image: linear-gradient(0deg,
      #e7e6e7 0%,
      #ffffff 100%);
    color: #171717;
    font-size: 14px;
  }
  .tableData .el-table th:last-of-type {
    border-right: 1px !important;
  }

  #dljl .my-paging {
    padding: 12px 23px 0 20px;
  }
  #dljl table *{
    border: none;
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
    margin-top: 5px;
  }
  #dljl .jumpPage {
    float: right;
    line-height: 28px;
    font-size: 14px;
    text-align: center;
    color: #008573;
    margin-left: 8px;
    cursor: pointer;
  }
  .el-table--border::after, .el-table--group::after, .el-table::before .jumpPage {
    float: right;
    width: 54px;
    height: 27px;
    line-height: 27px;
    font-size: 14px;
    text-align: center;
    color: #707070;
    margin-left: 8px;
    cursor: pointer;
  }
  #dljl .el-table__body-wrapper{
    /*height: auto;*/
  }
  #dljl .el-table__body-wrapper table *{
    border: none;
  }
  #dljl .el-table--border::after, .el-table--group::after, .el-table::before{
    content: '';
    background-color: rgba(0,0,0,0);
  }
  /*去掉表格为空的样式*/
  .tableData .el-table__empty-block {
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
  .el-pagination__editor.el-input .el-input__inner{
    color: #008573;
  }
</style>

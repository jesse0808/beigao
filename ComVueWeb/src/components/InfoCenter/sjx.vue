<template>
  <div id="sjx">
    <div class="sjx_main">
      <div class="query_info">
        <!-- 报表类型 -->
        <div class="options_group">
          <div class="options_group_item" @click="tagRead">标记已读</div>
          <div class="options_group_item" @click="someDel(-1)">批量删除</div>
          <div class="options_group_item" @click="getSjxInfo(true)">{{msgType==1?'全部消息':'新消息'}}</div>
        </div>
      </div>
      <!-- 彩票的表格 -->
      <div class="czTable">
        <el-table
          :data="czTableData"
          border
          stripe
          style="width: 100%;">
          <el-table-column label="选择" width="100" align="center">
            <template slot-scope="scope">
              <div :class="scope.row.choosed?'choosed':'nochoose'"
                   @click="changeChoosed(scope.$index, scope.row)"></div>
            </template>
          </el-table-column>
          <el-table-column
            prop="SendUName"
            label="发件人">
          </el-table-column>
          <el-table-column
            prop="Title"
            label="主题">
            <template slot-scope="scope">
              <div class="UmContent">{{scope.row.Title}}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="UmContent"
            label="内容">
            <template slot-scope="scope">
              <div class="UmContent">{{scope.row.UmContent}}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="CreateTime"
            width="144"
            label="时间">
          </el-table-column>
          <el-table-column
            prop="Flg"
            label="状态">
            <template slot-scope="scope">
              <span class="cancelState" v-if="scope.row.property === '已读'">已读</span>
              <span v-if="scope.row.property === '未读'">未读</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100" align="center">
            <template slot-scope="scope">
              <span class="to_view" @click="lookDetails(scope.row)">查看</span>
              <span class="to_del" @click="someDel(scope.row.UmId)">删除</span>
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
    <!-- 详细信息 -->
    <el-dialog
      title="消息详情"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div class="details_dialog"><span class="details_left">发件人：</span>{{detailsInfo.SendUName}}</div>
      <div class="details_dialog"><span class="details_left">主题：</span>
        <div class="details_content">{{detailsInfo.Title}}</div>
      </div>
      <div class="details_dialog"><span class="details_left">消息内容：</span>
        <div class="details_content">{{detailsInfo.UmContent}}</div>
      </div>
      <span slot="footer" class="dialog-footer">
		    <el-button class="pop_sure_btn" type="primary" @click="delDeatils">删除</el-button>
		    <el-button class="pop_sure_btn pop_exit" type="primary" @click="dialogVisible = false">关闭</el-button>
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
        msgType: 0,
        dialogVisible: false,
        //平台账号
        platformAccount: '',
        //日期
        beginDate: '',
        endDate: '',
        //表格数据
        czTableData: [
          {
            UmId: 2,
            Flg: false,
            choosed: false,
            platformAccount: '123',
            intoMoney: '￥500',
            outMoney: '￥300',
            betMoney: '￥300',
            winning: 0,
            rebates: 0,
            profitLoss: 0,
            SendUName: '111'
          },
        ],
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
        //详情信息
        detailsInfo: '',
      }
    },
    methods: {
      //改变分页条数
      pageChange(val) {
        this.paginationArray.currpageSize = val;
        this.getSjxInfo();
      },
      //得到收件箱的信息
      getSjxInfo(opt) {
        if (opt) {
          if (this.msgType == 1) {
            this.msgType = 0
          } else {
            this.msgType = 1
          }
        }
        console.log('msgType', this.msgType)
        let that = this;
        let url = "api/User/GetUserMessageInfo";
        let data = {
          Type: 1,
          PIndex: this.paginationArray.currPage,
          PSize: this.paginationArray.currpageSize,
        };
        that.czTableData = []
        postAjax(url, data).then(function (data) {
          if (data.IsSucess) {

            //给数据加一个选中或未选中的字段
            for (var i = 0, length = data.Data.rows.length; i < length; i++) {
              data.Data.rows[i].choosed = false;
            }

            that.czTableData = data.Data.rows
            if (that.msgType == 1) {
              that.czTableData = that.czTableData.filter(item => {
                return !item.Flg
              })
            }

            that.paginationArray.total = data.Data.total;
          }
        })
      },
      //改变选中或未选中状态
      changeChoosed(index, row) {
        this.czTableData[index].choosed = !this.czTableData[index].choosed;
      },
      //标记已读
      tagRead() {
        if (this.getChoosedIds()) {
          let that = this;
          let url = "api/User/SetMessageRead?ids=" + this.getChoosedIds();
          postAjax(url, null).then(function (data) {
            if (data.IsSucess) {
              that.getSjxInfo();
            } else {
              that.$message.error('标记已读失败');
            }
          })
        } else {
          this.$message.error('请选择需要标记已读的数据');
        }
      },
      //查看详细信息
      lookDetails(info) {
        this.dialogVisible = true;
        console.log(info);
        this.detailsInfo = info;
        if (!info.Flg) {
          let url = "api/User/SetMessageRead?ids=" + info.UmId;
          postAjax(url, null).then((data) => {
            if (data.IsSucess) {
              this.getSjxInfo();
            }
          })
        }
      },
      //查看详细信息的删除
      delDeatils() {
        this.del(this.detailsInfo.UmId);
        this.dialogVisible = false;
      },
      //删除
      someDel(umid) {
        //umid为-1表示批量删除，否则为单个删除
        if (umid == -1) {
          if (this.getChoosedIds().length > 0) {
            this.del(this.getChoosedIds());
          } else {
            this.$message.error('请选择需要批量删除的数据');
          }
        } else {
          this.del(umid);
        }
      },
      //删除请求的接口
      del(ids) {
        let url = "/api/User/DelMessages?ids=" + ids;
        postAjax(url, null).then((data) => {
          if (data.IsSucess) {
            this.getSjxInfo();
          } else {
            this.$message.error('批量删除失败');
          }
        })
      },
      //得到已被选中的id
      getChoosedIds() {
        let ids = [];
        for (var i = 0, length = this.czTableData.length; i < length; i++) {
          if (this.czTableData[i].choosed) {
            ids.push(this.czTableData[i].UmId);
          }
        }
        return ids.join(",");
      },

      handleSizeChange(e) {
        // console.log(1);
      },
      handleCurrentChange(e) {
        //回调为当前跳转的第几页
        this.paginationArray.currPage = e;
        this.getSjxInfo();
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
      //格式化已读未读
      formatFlg(row, column) {
        return row[column.property] ? '已读' : '未读'
      }
    },
    mounted() {
      this.getSjxInfo();
    },
  }
</script>
<style lang="scss">
  #sjx {

  }
  .sjx_main {
    padding: 15px 23px 0 20px
  }

  .options_group {
    padding-bottom: 15px;
    width: 100%
  }

  #sjx .options_group_item {
    display: inline-block;
    width: 106px;
    height: 37px;
    margin-bottom: 16px;
    background-image: linear-gradient(0deg,
      #e2e2e2 0%,
      #ffffff 100%);
    border-radius: 5px;
    border: solid 1px #dddddd;
    color: #707070;
    font-size: 14px;
    float: left;
    margin-right: 10px;
    text-align: center;
    line-height: 35px;
  }

  .options_group_item:hover {
    cursor: pointer;
  }

  #sjx .query_info .el-select {
    width: 180px;
  }

  .query_info .el-input__inner {
    height: 28px;
    border-radius: 0;
    padding-left: 11px !important;
    font-size: 12px;
  }

  .query_info .el-select .el-input .el-select__caret {
    line-height: 28px;
  }

  .query_info .el-input {
    width: 180px
  }

  .czdateStyle {
    width: 180px;
  }

  .to_view {
    margin-right: 10px;
    color: #0e51a8;
  }

  .to_view:hover {
    cursor: pointer;
  }

  .to_del:hover {
    cursor: pointer;
  }

  /*未选择的*/
  .nochoose {
    width: 18px;
    height: 18px;
    border: 1px solid #b3b3b3;
    border-radius: 9px;
    display: inline-block;
  }

  .choosed {
    width: 18px;
    height: 18px;
    background-image: url("../../assets/zjzh/choosed.png");
    border-radius: 50%;
  }

  .el-table .cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .czdateStyle .el-input__prefix {
    left: 150px;
  }

  .czdateStyle .el-input__icon {
    line-height: 28px;
    color: #000;
  }

  .czdateStyle .el-input__inner {
    padding-left: 11px !important;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    border-radius: 0;
  }

  .czCxBtn {
    width: 75px;
    height: 37px;
    background-color: #008573;
    text-align: center;
    line-height: 37px;
    font-size: 12px;
    color: #fff;
    display: inline-block;
    border-radius: 2px;
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

  .czTable {
    .el-table .cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
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
  #sjx .el-dialog__header {
    border-top: 4px solid #2ba498;
    height: 42px;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  #sjx .el-dialog__body {
    padding: 0;
  }

  .warning_img {
    margin: 34px 0 28px;
    text-align: center;
  }

  #sjx .el-dialog__footer {
    padding: 25px 0 60px;
    text-align: center;
  }

  #sjx .pop_sure_btn {
    color: #fff;
    background-color: #2ba498;
    border-color: #2ba498;
    width: 120px;
  }

  #sjx .pop_exit {
    background: #fafafa;
    color: #333;
    border: 0;
  }

  #sjx .details_dialog {
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    padding-left: 20px;
  }

  #sjx .details_left {
    width: 100px;
    text-align: right;
  }

  #sjx .details_content {
    width: 70%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
  }

  #sjx .UmContent {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #sjx .czTable .el-table th {
    color: #171717;
    height: 35px;
    background-image: linear-gradient(0deg,
      #e7e6e7 0%,
      #ffffff 100%);
  }
  #sjx table thead tr th {
    border-right: 1px solid #dddddd !important;
  }
  #sjx .is-in-pagination .el-input__inner,#sjx .is-in-pagination{
    width: auto;
    height: auto;
    color: #008573;
  }
</style>

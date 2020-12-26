<template>
    <!-- 页面表格组件 -->
    <div class="gametype_table_mainbox">
        <div class="gametype_table_bg">
            <!-- 顶部导航栏 -->
            <ul class="gametype_table_nav cf">
                <li>
                    <a :class='typeSwitch == true?"gametype_table_select":""' @click="SwitchTrue">我的投注</a>
                </li>
                <li v-if="indexs == 5 || indexs == 7">
                </li>
                <li v-else>
                    <a :class='typeSwitch == false?"gametype_table_select":""' @click="SwitchFalse">我的追号</a>
                </li>
                <li class="gametype_getmore_box">
                    <a class="gametype_getmore" @click="SwitchOther">查询更多记录>></a>
                </li>
            </ul>
            <!-- 表格 -->
            <div class="recordtable_bg_box">
                <div class="gametype_table_main" v-if="typeSwitch == true" :key="1">
                    <el-table height="331" empty-text="暂无投注记录" :data="tablist" header-row-class-name="el_table_head">
                        <el-table-column label="彩种" prop="LgName" width="120"></el-table-column>
                        <el-table-column label="期号" prop="Lssue" width="120"></el-table-column>
                        <el-table-column label="玩法" prop="LpName" width="106"></el-table-column>
                        <el-table-column label="下注时间" prop="BetTime" width="166"></el-table-column>
                        <el-table-column label="投注金额" prop="BetMoney"></el-table-column>
                        <el-table-column label="中奖金额" prop="WinBonus"></el-table-column>
                        <el-table-column label="状态" width="86" prop="StatusText">
                            <template slot-scope="scope">
                                <span class="unpaidState"
                                      v-if="scope.row.StatusText === '未开奖'">{{scope.row.StatusText}}</span>
                                <span class="chedan"
                                      v-if="scope.row.StatusText === '已撤单'">{{scope.row.StatusText}}</span>
                                <span style="color: #f21d32;" v-if="scope.row.StatusText === '已中奖'">{{scope.row.StatusText}}</span>
                                <span class="cancelState"
                                      v-if="scope.row.StatusText === '未中奖'">{{scope.row.StatusText}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="亏盈" prop="KuiYing">
                            <template slot-scope="scope">
                                <div v-if="scope.row.Status==4 || scope.row.Status==3">{{scope.row.KuiYing}}</div>
                                <div v-else>0</div>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="86">
                            <template slot-scope="scope">
                                <el-button @click.native.prevent="Viewdetails(scope.$index, tablist)" type="text"
                                           size="small">查看详情
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="gametype_table_main" v-else :key="2">
                    <el-table height="331" empty-text="暂无追号记录" :data="tracklist" header-row-class-name="el_table_head">
                        <el-table-column label="起始期号" prop="BetTime"></el-table-column>
                        <el-table-column label="已追/总（期数）" prop="OpenD"></el-table-column>
                        <el-table-column label="总金额" prop="BetMoney"></el-table-column>
                        <el-table-column label="状态" prop="StatusText">
                            <template slot-scope="scope">
                                <span class="cancelState"
                                      v-if="scope.row.StatusText === '已撤销'">{{scope.row.StatusText}}</span>
                                <span class="payState"
                                      v-if="scope.row.StatusText === '进行中'">{{scope.row.StatusText}}</span>
                                <span v-if="scope.row.StatusText === '已完成'">{{scope.row.StatusText}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="tem">
                                <el-button type="text" size="small"
                                           @click.native.prevent="zhDetails(tem.$index,tracklist)">查看详情
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    props: {
      tablist: {
        type: Array,
        require: true
      },
      tracklist: {
        type: Array,
        require: true
      },
      indexs: {
        type: String,
        require: true
      }
    },
    data() {
      return {
        typeSwitch: true,  //切换显示卡
        tableData: [], //表单数据
      }
    },
    methods: {
      SwitchTrue() {
        this.typeSwitch = true
      },
      SwitchFalse() {
        this.typeSwitch = false
      },
      SwitchOther() {
        let name = ""
        let value = ""
        if (this.typeSwitch) {
          name = "tzjl"
          value = "tzjl"
        } else {
          name = "zhjl"
          value = "zhjl"
        }
        this.$router.push({
          name: "UserCenter",
          query: {
            name: name,
            value: value
          }
        })
      },
      //查看详情数据
      Viewdetails(index, rows) {
        this.$emit("setinfo", rows[index], 1)
      },
      // 追号
      zhDetails(index, rows) {
        this.$emit("setinfo", rows[index], 2)
      }
    },

  }
</script>

<style>
    .gametype_table_main .chedan {
        color: #b0b0b0;
    }

    .gametype_table_main .unpaidState {
        color: #8b8b8b;
    }

    .gametype_table_main .cancelState {
        color: #008573;
    }

    .payState {
        color: #2ba396;
    }
</style>

<style>
    .gametype_table_mainbox {
        overflow: hidden;
        height: 382px;
        background-color: #ffffff;
        box-shadow: 0 2px 4px 0 #a7a7a7;
    }

    .recordtable_bg_box {
        height: 341px;
    }

    .gametype_table_nav {
        height: 44px;
        padding: 4px 0 0 10px;
        overflow: hidden;
        background-color: #008573;
    }
    .gametype_getmore{
        font-size: 12px;
        color: #ffffff;
    }
    .gametype_table_nav li {
        width: 118px;
        line-height: 40px;
        float: left;
    }

    .gametype_table_nav .gametype_getmore_box {
        float: right;
        width: auto;
        margin-right: 24px;
    }

    .gametype_table_nav li a {
        display: block;
        text-align: center;
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;
    }

    .gametype_table_nav .gametype_table_select {
        width: 118px;
        height: 40px;
        line-height: 40px;
        color: #008673;
        background-color: #ffffff;
        vertical-align: middle;
    }

    .gametype_table_main {
        overflow: hidden;
        height: 331px
    }

    .el-table--border:after, .el-table--group:after, .el-table:before {
        content: '';
        background-color: transparent !important;
    }

    .el_table_head > th {
        height: 28px !important;
        padding: 0 !important;
        background-color: #eeeeee !important;
    }

    .el-table td {
        padding: 0 !important;
        font-size: 13px;
    }

    .el-table td, .el-table th.is-leaf {
        border-bottom: 1px solid #e3e3e4
    }

    .el-table::before {
        height: 0px;
    }

    .gametype_table_mainbox .el-table th > .cell {
        color: #232924;
        font-weight: normal;
        text-align: center;
    }

    .gametype_table_main .el-table__empty-block {
        background-position: center top 80px;
        background-repeat: no-repeat;
        background-image: url(../../static/img/no_record.png);
        background-size: 60px 60px;
    }

    .gametype_table_main .el-table__empty-block span {
        margin-top: 40px;
    }

    .user_no_record {
        width: 100%;
    }

    .cell {
        text-align: center;

    }

    .cell > .el-button--small {
        display: inline;
    }

    .el-button--text {
        color: #008573 !important;
        font-weight: bold;
    }
</style>

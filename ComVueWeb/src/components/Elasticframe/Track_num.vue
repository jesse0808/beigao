<template>
  <!-- 追号 -->
  <div class="betting_frame_box_track">
    <el-button :plain="true" @click="openMessAge"></el-button>
    <div class="bet_frame_mainbox_track">
      <!--            <div class="bet_top_color" ></div>-->
      <div class="bet_top_title">我要追号<span class="iconfont icon-guanbi" @click="hide"></span></div>
      <div class="track_num_main">
        <el-tabs type="border-card">
          <el-tab-pane label="同倍追号">
            <div class="track_num_inputbox box_h">
              <span>追号期数：</span>
              <input type="text" v-model="setNum"/>
              <div style="width:35px"></div>
              <span>起始倍数：</span>
              <input type="text" v-model="trackMultiple" @input="PSinput"/>
              <button @click="generateTrack(2)">生成计划</button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="翻倍追号">
            <div class="track_num_inputbox box_h">
              <span>追号期数：</span>
              <input type="text" v-model="setNum"/>
              <div style="width:35px"></div>
              <span>起始倍数：</span>
              <input type="text" v-model="trackMultiple" @input="PSinput"/>
              <div style="width:35px"></div>
              <span>隔</span>
              <input type="text" v-model="NumCH"/>
              <span>期</span>
              <div style="width:35px"></div>
              <span>倍x</span>
              <input type="text" v-model="MultCh"/>
              <button @click="generateTrack(3)">生成计划</button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="利润率追号">
            <div class="track_num_inputbox box_h">
              <span>追号期数：</span>
              <input type="text" v-model="setNum"/>
              <div style="width:35px"></div>
              <span>最低收益率：</span>
              <input type="text" v-model="minIncome" @input="SYinput"/>
              <span>%</span>
              <div style="width:35px"></div>
              <span>起始倍数：</span>
              <input type="text" v-model="trackMultiple" @input="PSinput"/>
              <button @click="generateTrack(1)">生成计划</button>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="track_tablebox">
          <table class="track_num_table">
            <thead>
            <tr>
              <th class="track_table_num">
                <el-checkbox v-model="AlltrackAry" @change="SelectAll"></el-checkbox>
                <span>序号</span>
              </th>
              <th>追号期次</th>
              <th>倍数</th>
              <th>金额</th>
              <th>开始时间</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in trackAry" :key="index">
              <td class="track_table_num">
                <el-checkbox v-model="item.choiceState" :data-index="index" @change="selectItem"></el-checkbox>
                <span>{{index+1}}</span>
              </td>
              <td>{{item.Lssue}}</td>
              <td>
                <input type="text" v-model="item.Mult" class="Multiple" @input="userInput" v-if="item.choiceState"
                       maxlength="6"/>
                <input type="text" v-model="item.Mult" class="Multiple" v-else disabled/>
              </td>
              <td>￥{{(item.Mult*item.money).toFixed(3)}}</td>
              <td>{{item.OpenTime* 1000 | formatDate}}</td>
            </tr>
            </tbody>
          </table>
          <div class="track_num_opreaboxs box_h">
            <el-checkbox v-model="checked" @change="stopTrack">中奖后停止追号</el-checkbox>
            <div class="Spacer_bar">|</div>
            <div class="track_num_textmain">共追号<span>{{trackNum}}</span>期，金额<span>{{Count.toFixed(3)}}</span>元</div>
            <div class="box_flex track_sibiling_table">
              <button class="track_num_surebtn" @click="subBet">确认投注</button>
              <button class="track_num_eliminate" @click="clearAll">清除追号</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-button :plain="true" @click="openSuccess"></el-button>
  </div>
</template>
<script>
    // 引入ajax文件
    import {computeByMargin} from "../../static/js/LotteryBase.js"
    import {postAjax, getAjax} from "../../util/ajax.js"
    import {formatDate} from '../../static/js/timeData.js';

    export default {
        props: {
            ary: {
                type: Array,
                require: true
            }
        },
        data() {
            return {
                AlltrackAry: false, //全选
                minIncome: 50, //最低收益
                Count: 0, //投注总金额
                checked: true, //中奖后是否停止追号
                trackstate: false,
                trackAry: [], //追号数组
                GameIds: this.ary[0].Gids,  //游戏ID
                Nowless: this.ary[0].data, //当前可投注日期
                setNum: 10, //设置追号期数
                trackNum: 0, //追号期数
                trackNotes: 0, //追号注数
                trackMoney: 0, //追号投注金额
                trackMultiple: 1, //输入起始倍数
                BetInfo: {}, //投注信息对象
                BetAry: [], //投注期数数组
                MultCh: 2, //增加倍数
                NumCH: 1, //间隔期数
                userBalace: this.$store.state.userInfo.Balance //用户余额
            }
        },
        methods: {
            // 加载条
            _initOpenLoading(isFlag = true) {
                this.loading = this.$loading({
                    lock: true,
                    text: `${isFlag ? '投注中' : '加载中'}...`,
                    spinner: 'el-icon-loading',
                    background: 'rgba(255, 255, 255, 0.2)'
                })
            },
            _initCloseLoading() {
                this.loading.close()
            },
            // 全选
            SelectAll() {
                let that = this
                that.trackAry.forEach(item => {
                    if (!that.AlltrackAry) {
                        item.choiceState = false
                        item.Mult = 0
                    } else {
                        item.choiceState = true
                        if (item.Mult == 0) {
                            item.Mult = 1
                        } else {
                            item.Mult = item.Mult
                        }
                    }
                })
                // 设置期数
                this.setTrackNum()
            },
            // 初始化数据
            clearData() {
                let that = this
                that.trackMultiple = 0
                that.BetAry = []
                that.trackAry.forEach(item => {
                    item.choiceState = false
                    item.Mult = 0
                })
            },
            // 计算总金额
            CountMoney() {
                let result = 0
                this.trackAry.forEach(item => {
                    if (item.choiceState == true) {
                        result += parseInt(item.money * item.Mult)
                    }
                })
                this.Count = result
            },
            // 隐藏追号
            hide() {
                this.$emit("hidetrack")
            },
            // 请求追号数组
            TrackAjax() {
                let that = this;
                let url = "Api/Lssue/GetNew120Lssue?" + "lssue=" + this.Nowless + "&" + "lgId=" + this.GameIds
                this._initOpenLoading(false)
                getAjax(url)
                    .then(function (data) {

                        that.setTrackAry(data.Data)
                        that._initCloseLoading()
                    })
                    .catch(() => {
                        this.openMessAge("网络出现异常，请刷新后重试")
                        that._initCloseLoading()
                    })
            },
            // 设置追号数组
            setTrackAry(data) {
                let that = this;
                let ary = data
                ary.forEach(item => {
                    item.choiceState = false
                    item.money = that.ary[0].mount
                    item.Mult = 0
                });

                that.trackAry = ary

            },
            //选择投注内容
            selectItem() {
                // 设置期数
                this.setTrackNum()
            },
            // 设置期数
            setTrackNum() {
                let that = this
                let ary = []
                that.trackAry.forEach(item => {
                    if (item.choiceState == true) {
                        let obj = {}
                        let num = 1
                        if (item.Mult == 0) {
                            num = 1
                        } else {
                            num = item.Mult
                        }
                        item.Mult = num
                        obj["Lssue"] = item.Lssue
                        obj["Multiple"] = item.Mult * parseInt(this.ary[0].GMult)
                        ary.push(obj)
                    } else {
                        item.Mult = 0
                    }
                })
                that.trackNum = parseInt(ary.length)
                that.BetAry = ary;
                this.CountMoney()
            },
            // 生成追号计划
            generateTrack(data) {
                let that = this;
                let indexs = 0
                let ary = []
                let num = that.setNum  //追号期数
                let mult = that.trackMultiple //倍数
                if (num > that.trackAry.length) {
                    that.openMessAge("投注期数数量不能超过可投注期数")
                    return false
                }
                // 同倍追号
                if (data == 2) {
                    if (mult < 1) {
                        that.openMessAge("投注倍数设置不正确")
                        return false
                    }
                    that.trackAry.forEach(item => {
                        indexs++  //自己设置个元素下标
                        item.choiceState = false
                        if (indexs <= num) {
                            item.choiceState = true
                            item.Mult = mult
                            that.trackNum = indexs
                            let obj = {}
                            obj["Lssue"] = item.Lssue
                            obj["Multiple"] = item.Mult * parseInt(this.ary[0].GMult)
                            ary.push(obj)
                        }
                    })
                }
                // 翻倍追号
                else if (data == 3) {
                    if (that.MultCh < 2) {
                        that.openMessAge("翻倍追号，倍数必须大于等于2")
                        return false
                    }
                    if (mult < 1) {
                        that.openMessAge("投注倍数设置不正确")
                        return false
                    }
                    let dataNum = that.NumCH //间隔期数
                    let multNum = that.MultCh //倍数增加率
                    let t = that.trackMultiple  // 起始倍数
                    for (var i = 0; i < num; i++) {
                        if (i != 0 && (i % dataNum) == 0) {
                            t *= multNum;
                        }
                        that.trackAry[i].Mult = t
                    }
                    that.trackAry.forEach(item => {
                        indexs++
                        item.choiceState = false
                        if (indexs <= num) {
                            item.choiceState = true
                            that.trackNum = indexs
                            let obj = {}
                            obj["Lssue"] = item.Lssue
                            obj["Multiple"] = item.Mult * parseInt(this.ary[0].GMult)
                            ary.push(obj)
                        }
                    })

                }
                // 利润率追号
                else if (data == 1) {
                    num = isNaN(num) ? 0 : num; //期数
                    let p = that.ary[0].gameOdd //投注时奖金
                    let m = that.ary[0].mount; //每期金额的初始值
                    let e = that.minIncome; //最低利润率
                    if (mult < 1) {
                        that.openMessAge("投注倍数设置不正确")
                        return false
                    }
                    if (num < 1) {
                        that.openMessAge("请选择追号列表")
                        return false
                    }

                    e = isNaN(e) ? 0 : e
                    if (e <= 0) {
                        that.openMessAge("利润率错误")
                    }

                    if (e >= ((p * 100 / m) - 100)) {
                        that.openMessAge("利润率错误");
                        return;
                    }
                    var tm = 0
                    that.trackAry.forEach(item => {
                        indexs++
                        if (indexs <= num) {
                            item.choiceState = true
                            item.Mult = computeByMargin(mult, e, m, tm, p)
                            that.trackNum = indexs
                            let obj = {}
                            obj["Lssue"] = item.Lssue
                            obj["Multiple"] = computeByMargin(mult, e, m, tm, p)
                            ary.push(obj)
                            tm += m * computeByMargin(mult, e, m, tm, p);
                        }
                    })
                }
                that.BetAry = ary
                this.CountMoney()
            },
            // 保存子组件传递内容
            saveData() {
                let that = this;
                let ary0 = this.ary[0]
                let zxState = true
                if (ary0.ids == 62 || ary0.ids == 178 || ary0.ids == 175 || ary0.ids == 173 ||
                    ary0.ids == 169 || ary0.ids == 50 || ary0.ids == 47 || ary0.ids == 2 || ary0.ids == 14 || ary0.ids == 20 ||
                    ary0.ids == 26 || ary0.ids == 31 || ary0.ids == 33 || ary0.ids == 38 || ary0.ids == 40 || ary0.ids == 45) {

                    zxState = false
                }
                let obj = {}
                obj["BetBonus"] = this.ary[0].gameOdd
                obj["BetContent"] = zxState ? this.ary[0].GAry.join(",") : this.ary[0].GAry.join(" ")
                obj["BetCount"] = this.ary[0].num
                obj["BetMoney"] = this.ary[0].mount
                obj["BetMultiple"] = parseInt(this.ary[0].GMult)
                obj["BetRebate"] = this.ary[0].reba
                obj["BonusMode"] = this.ary[0].bon
                obj["LpId"] = this.ary[0].ids
                obj["PlayName"] = this.ary[0].name
                obj["RxDsFormart"] = this.ary[0].RxD
                that.BetInfo = obj
            },
            // 用户输入
            userInput() {
                let that = this
                let ary = []
                that.trackAry.forEach(item => {
                    if (item.choiceState == true) {
                        let obj = {}
                        obj["Lssue"] = item.Lssue
                        obj["Multiple"] = item.Mult * parseInt(this.ary[0].GMult)
                        ary.push(obj)
                    }
                })
                that.trackNum = parseInt(ary.length)
                that.BetAry = ary;
                this.CountMoney()
            },
            // 输入倍数限制
            PSinput() {
                let that = this;
                let val = that.trackMultiple;
                let reg = /^[0-9]+$/;
                if (!reg.test(val)) {
                    that.trackMultiple = ""
                    return;
                }
                if (parseInt(that.trackMultiple) <= 0) {
                    that.trackMultiple = ""
                    return;
                }
            },
            // 输入收益率限制
            SYinput() {
                let val = this.minIncome;
                var reg = /^[0-9]+$/;
                if (!reg.test(val)) {
                    this.minIncome = ""
                    return;
                }
                if (parseInt(val) < 0 || parseInt(val) > 100) {
                    this.minIncome = ""
                    return;
                }
            },
            // 中奖号是否停止追号
            stopTrack(e) {
                this.checked = e
            },
            // 显示提示框
            openMessAge(data) {
                this.$message.error(data);
            },
            // 确定投注
            subBet() {
                let that = this
                let url = "api/Bet/AddClassicPatternZhOrder"
                let e = {}

                if (that.BetAry.length < 1) {
                    that.openMessAge("追号列表不能为空")
                } else if (that.userBalace < that.Count) {
                    that.openMessAge("余额不足，请重新选择追号内容")
                } else {
                    this._initOpenLoading(true)
                    let param = {
                        "IsZhWinStop": that.checked,
                        "LgId": parseInt(that.ary[0].Gids),
                        "Lssues": that.BetAry,
                        "Order": that.BetInfo
                    }
                    postAjax(url, param, 1)
                        .then(function (data) {
                            that._initCloseLoading()
                            console.log(data)
                            if (!data.IsSucess) {
                                that.openMessAge(data.Message)
                            } else {
                                if (data.Data.ErrorInfos.length > 0) {
                                    let ary = data.Data.ErrorInfos
                                    let str = "追号成功：" + data.Data.SuccessCount + "期" + " " + '失败：' + data.Data.ErrorInfos.length + "期"
                                    let errStr = ""
                                    ary.forEach(item => {
                                        errStr += "期号：" + item.Lssue + ' ' + item.ErrorMsg + "<br/>"
                                    })
                                    that.$notify({
                                        title: str,
                                        message: errStr,
                                        type: 'success',
                                        duration: 2000,
                                        customClass: "errorInfos_alter_box",
                                        dangerouslyUseHTMLString: true
                                    });
                                } else {
                                    that.openSuccess("成功投注:" + data.Data.SuccessCount + "期")
                                }

                                that.$emit("clearbet")
                                // 刷新列表信息
                                that.$emit("list")
                                // 刷新余额信息
                                that.$emit("getinfo")
                            }
                            that.hide()
                        })
                    // .catch(()=>{
                    //     this.openMessAge("网络出现异常，请刷新后重试")
                    //     that._initCloseLoading()
                    // })
                }
            },
            // 成功弹框
            openSuccess(data) {
                let that = this
                this.$message({
                    message: data,
                    type: 'success',
                    duration: 1500
                })
            },
            // 清除所有状态
            clearAll() {
                this.clearData()
                this.trackNum = 0
                this.Count = 0
                this.checked = false
                this.trackMultiple = 1
                this.minIncome = 50
                this.AlltrackAry = false
            }
        },
        created() {
            // 请求追号数组
            this.TrackAjax()
            // 保存投注信息
            this.saveData()
        },
        // 转化时间戳
        filters: {
            formatDate(time) {
                var date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd hh:mm');
            }
        },
        watch: {
            "ary": {
                handler(newName, oldName) {
                    this.TrackAjax()
                },
                deep: true
            }

        }
    }
</script>
<style>
  .el-notification__title {
    background: white;
  }

  .betting_frame_box_track {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 88;
  }

  .bet_frame_mainbox_track {
    position: absolute;
    width: 800px;
    height: 446px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: #ffffff;
    border-radius: 5px;
    text-align: center;
  }

  .bet_frame_mainbox_track > .bet_top_color {
    background: #008573;
    height: 3px;
  }

  .bet_frame_mainbox_track > .bet_top_title {
    position: relative;
    text-align: left;
    padding-left: 20px;
    color: #fff;
    background: #008573;
    line-height: 40px;
    font-size: 16px;
  }

  .bet_frame_mainbox_track > .bet_top_title > span {
    display: inline-block;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    right: 0;
    text-align: center;
    cursor: pointer;
  }
  .track_num_main {
    width: 100%;
    height: 716px;
    overflow: hidden;
  }

  /* 选项卡 */
  .el-tabs--border-card {
    box-shadow: none;
  }

  .track_num_inputbox {
    height: 66px;
    overflow: hidden;
    font-size: 14px;
    align-items: center;
    padding-left: 21px;
  }

  .track_num_inputbox > input {
    outline: none;
    width: 60px;
    height: 24px;
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    color: #5c5c5c;
    border-radius: 4px;
    border: solid 1px #e4e4e4;
  }

  .track_num_inputbox > button {
    outline: none;
    color: #666666;
    margin-left: 40px;
    font-size: 14px;
    cursor: pointer;
    width: 104px;
    height: 40px;
    border: none;
    background:url(../../static/img/0.png) no-repeat 0 0/cover;
  }

  .track_num_inputbox > * {
    vertical-align: middle;
  }

  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #008573;
  }

  .el-tabs--border-card > .el-tabs__header {
    background-color: #ffffff !important;
  }

  .track_num_opreaboxs {
    border-top: 1px solid #dcdfe6;
    height: 68px;
    padding-left: 21px;
    align-items: center;
    background-color: #efefef;
    overflow: hidden;
  }

  .track_num_opreaboxs > * {
    vertical-align: middle;
  }

  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #232924 !important;
  }

  .track_num_opreaboxs > button, .track_num_opreaboxs > div > button {
    width: 87px;
    height: 34px;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
    background: #ffffff;
    border-radius: 17px;
    outline: none;
    cursor: pointer;
  }

  .track_num_opreaboxs > .track_num_eliminate, .track_num_opreaboxs > div > .track_num_eliminate {
    border: solid 1px #c2c2c224;
    color: #666666;
    margin-right: 10px;
    background-color: #ffffff;
  }
  .track_num_opreaboxs > .track_num_eliminate, .track_num_opreaboxs > div > .track_num_eliminate:hover{
    background-color: rgba(228,228,228,.8);
  }
  .track_num_opreaboxs > .track_num_surebtn, .track_num_opreaboxs > div > .track_num_surebtn {
    border: 1px solid #008573;
    background-color: #008573;
    color: white;
  }
  .track_num_opreaboxs > .track_num_surebtn, .track_num_opreaboxs > div > .track_num_surebtn:hover{
    background-color: rgba(49,173,162,.8);
  }
  .track_num_textmain {
    text-align: right;
    font-size: 14px;
    padding-right: 15px;
  }

  .track_num_textmain > span {
    font-size: 18px;
    color: #f66d09;
    margin: 0 5px;
    font-weight: bold;
  }

  /* 表格 */
  .track_tablebox {
    width: 100%;
    height: 590px;
    overflow: hidden;
  }

  .track_num_table {
    width: 100%;
    padding: 0 12px;
    font-size: 14px;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
  }

  .track_num_table > thead {
    display: block;
    background-color: #e5e5e5;
  }

  .track_num_table > thead > tr {
    width: 776px;
    height: 36px !important;
  }

  .track_num_table > thead > tr > th {
    width: 160px;
    height: 36px;
    line-height: 36px;
    color: #848484;
  }

  .track_num_table tr {
    width: 160px;
    height: 40px;
    line-height: 40px;
  }

  .track_num_table tbody {
    display: block;
    height: 230px;
    overflow-y: scroll;
  }

  .track_num_table tbody > tr {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #dcdfe66b;
  }

  .track_num_table tbody > tr > td {
    flex: 1;
  }

  .track_tablebox > table td {
    table-layout: fixed;
  }

  .track_tablebox > table td:first-child, .track_tablebox > table th:first-child {
    border-left: none;
  }

  .track_tablebox > table .Multiple {
    width: 51px;
    height: 20px;
    background-color: #fefefe;
    border-radius: 5px;
    border: solid 1px #e4e4e4;
    outline: none;
    text-align: center;
  }

  input:disabled {
    opacity: 1;
    background-color: #fff;
    border: 1px solid #a1a1a1;
  }

  .track_tablebox > table tbody tr:hover {
    background: #f3f9fd;
  }

  .track_tablebox > table .track_table_num > * {
    vertical-align: middle;
  }

  .track_num_table .el-checkbox {
    margin-right: 2px;
  }

  .track_num_table .el-checkbox__inner {
    border-radius: 100%;
    width: 16px;
    height: 16px;
  }

  .track_num_table .el-checkbox__inner::after {
    height: 8px;
    left: 5px;
    width: 4px;
    top: 1px;
  }

  .track_num_table .el-checkbox__input.is-checked .el-checkbox__inner,
  .track_num_table .el-checkbox__input .is-indeterminate .el-checkbox__inner,.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input .is-indeterminate .el-checkbox__inner {
    background-color: #008573 !important;
    border-color: #008573 !important;
  }

  .track_sibiling_table {
    text-align: right;
    padding-right: 20px;
  }

  .track_tablebox .el-checkbox {
    margin-right: 0;
  }

  .Spacer_bar {
    margin: 0 11px;
    color: #a1a1a1;
    vertical-align: middle;
  }

  .betting_frame_box_track .el-button {
    display: none
  }

  .track_num_inputbox > span {
    margin: 0 5px;
    color: #707070;
  }

  .el-tabs--border-card {
    border: none;
  }

  .track_num_main .el-tabs--border-card > .el-tabs__header {
    height: 60px;
    padding-top: 14px;
    border: none;
  }

  .track_num_main .el-tabs__item {
    border: none;
    width: 115px;
    height: 41px;
    line-height: 41px;
    font-size: 14px;
    color: #171717 !important;
  }

  .betting_frame_box_track .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active,.betting_frame_box_track .el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    background-color: #008573;
    border-radius: 20px;
    color: white !important;
  }
  #app > div.allgame-mainbox.mian_box > div > div.gametype_center > div > div.betting_frame_box_track > div > div.track_num_main > div.track_tablebox > table > tbody > tr > td:not(:nth-child(4)){
    color: #848484;
  }#app > div.allgame-mainbox.mian_box > div > div.gametype_center > div > div.betting_frame_box_track > div > div.track_num_main > div.track_tablebox > table > tbody > tr > td:nth-child(4){
    color: #31ada2;
  }
  .betting_frame_box_track .el-tabs__nav-scroll{
    padding: 0 12px 15px;
    border-bottom: solid 1px #dcdcdc;
  }
  .betting_frame_box_track .el-tabs--border-card>.el-tabs__content {
    padding: 10px 15px 0;
  }
</style>

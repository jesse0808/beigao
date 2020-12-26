<template>
    <div class="lottery_periods">
        <h3><span>近期开奖号码</span>
            <router-link class="history" :to="{name:'historyLottery',query:{id:$route.query.id}}" target="_blank">
                <span class="historyImg"></span>更多
            </router-link>
        </h3>
        <div class="lottery_periods_content" v-if="id == 18 || id == 21">
            <el-row style="line-height:30px;background-color: #f1f1f1;box-shadow: 0 1px 1px 0 #ffffff;border-bottom: solid 1px #ddd8d4;">
                <el-col :span="8">期号</el-col>
                <el-col :span="16">开奖号码</el-col>
            </el-row>
            <el-row v-for="(item,index) in LastFiveLssue" :key="index" class="lottery_periods_item">
                <el-col :span="8">
                    <div class="grid-content">{{item.FormatLssue}}</div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content">
                        <span v-for="(value,num) in item.OpenNumber" :key="num">{{value}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="lottery_periods_content" v-else-if="id == 0">
            <el-row style="line-height:30px;background-color: #f1f1f1;box-shadow: 0 1px 1px 0 #ffffff;border-bottom: solid 1px #ddd8d4;">
                <el-col :span="10">期号</el-col>
                <el-col :span="14">开奖号码</el-col>
            </el-row>
            <el-row v-for="(item,index) in LastFiveLssue" :key="index" class="lottery_periods_item">
                <el-col :span="10">
                    <div class="grid-content">{{item.FormatLssue}}</div>
                </el-col>
                <el-col :span="14">
                    <div class="ks">
                        <span :class="[value == 1 ?'one':value == 2 ?'two':value == 3 ?'three':value == 4 ?'four':value == 5 ?'five':'six']"
                              v-for="(value,num) in item.OpenNumber.split(',')" :key="num"></span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="lottery_periods_content" v-else-if="id == 9">
            <el-row style="line-height:30px;background-color: #f1f1f1;box-shadow: 0 1px 1px 0 #ffffff;border-bottom: solid 1px #ddd8d4;">
                <el-col :span="4">期号</el-col>
                <el-col :span="20">开奖号码</el-col>
            </el-row>
            <el-row v-for="(item,index) in LastFiveLssue" :key="index" class="lottery_periods_item sc_periods_item">
                <el-col :span="4">
                    <div class="grid-content">{{item.FormatLssue}}</div>
                </el-col>
                <el-col :span="20" class="pkcalss">
                    <div class="grid-content sc_style">
                        <span v-for="(value,num) in item.neeArr" :key="num" :class="value.text"></span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="lottery_periods_content" v-else-if="id == 19">
            <el-row style="line-height:30px;background-color: #f1f1f1;box-shadow: 0 1px 1px 0 #ffffff;border-bottom: solid 1px #ddd8d4;">
                <el-col :span="8">期号</el-col>
                <el-col :span="16">开奖号码</el-col>
            </el-row>
            <el-row v-for="(item,index) in LastFiveLssue" :key="index" class="lottery_periods_item">
                <el-col :span="8">
                    <div class="grid-content">{{item.FormatLssue}}</div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content">
                        <span class="xinyun-item" v-for="(value,num) in item.OpenNumber" :key="num">{{value}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="lottery_periods_content" v-else-if="$route.query.index == 7">
            <el-row style="line-height:30px;background-color: #f1f1f1;box-shadow: 0 1px 1px 0 #ffffff;border-bottom: solid 1px #ddd8d4;">
                <el-col :span="10">期号</el-col>
                <el-col :span="14">开奖号码</el-col>
            </el-row>
            <el-row v-for="(item,index) in LastFiveLssue" :key="index" class="lottery_lhc_item">
                <el-col :span="24">
                    <div class="lhc_content" style="line-height: 24px;">{{item.FormatLssue}}</div>
                    <div class="lhc_content">
                        <div class="lhc_content_item">
                            <div :class="[returnClass(item.OpenNumber.split(',')[0])]">
                                {{item.OpenNumber.split(',')[0]}}
                            </div>
                            <div v-if="item.Explain != null">{{item.Explain.split('')[0]}}</div>
                        </div>
                        <span>+</span>
                        <div class="lhc_content_item">
                            <div :class="[returnClass(item.OpenNumber.split(',')[1])]">
                                {{item.OpenNumber.split(',')[1]}}
                            </div>
                            <div v-if="item.Explain != null">{{item.Explain.split('')[1]}}</div>
                        </div>
                        <span>+</span>
                        <div class="lhc_content_item">
                            <div :class="[returnClass(item.OpenNumber.split(',')[2])]">
                                {{item.OpenNumber.split(',')[2]}}
                            </div>
                            <div v-if="item.Explain != null">{{item.Explain.split('')[2]}}</div>
                        </div>
                        <span>+</span>
                        <div class="lhc_content_item">
                            <div :class="[returnClass(item.OpenNumber.split(',')[3])]">
                                {{item.OpenNumber.split(',')[3]}}
                            </div>
                            <div v-if="item.Explain != null">{{item.Explain.split('')[3]}}</div>
                        </div>
                        <span>+</span>
                        <div class="lhc_content_item">
                            <div :class="[returnClass(item.OpenNumber.split(',')[4])]">
                                {{item.OpenNumber.split(',')[4]}}
                            </div>
                            <div v-if="item.Explain != null">{{item.Explain.split('')[4]}}</div>
                        </div>
                        <span>+</span>
                        <div class="lhc_content_item">
                            <div :class="[returnClass(item.OpenNumber.split(',')[5])]">
                                {{item.OpenNumber.split(',')[5]}}
                            </div>
                            <div v-if="item.Explain != null">{{item.Explain.split('')[5]}}</div>
                        </div>
                        <span>+</span>
                        <div class="lhc_content_item">
                            <div :class="[returnClass(item.OpenNumber.split(',')[6])]">
                                {{item.OpenNumber.split(',')[6]}}
                            </div>
                            <div v-if="item.Explain != null">{{item.Explain.split('')[6]}}</div>
                        </div>
                        <span>=</span><strong>{{sumArray(item.OpenNumber.split(','))}}</strong>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="lottery_periods_content" v-else-if="$route.query.index == 1">
            <el-row style="line-height:30px;background-color: #f1f1f1;box-shadow: 0 1px 1px 0 #ffffff;border-bottom: solid 1px #ddd8d4;">
                <el-col :span="10">期号</el-col>
                <el-col :span="14">开奖号码</el-col>
            </el-row>
            <el-row v-for="(item,index) in LastFiveLssue" :key="index" class="lottery_periods_item" :class="[returnSscClass()]">
                <el-col :span="10">
                    <div class="grid-content">{{item.FormatLssue}}</div>
                </el-col>
                <el-col :span="14">
                    <div class="grid-content">
                        <span v-for="(value,num) in item.OpenNumber.split(',')" :key="num">{{value}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="lottery_periods_content" v-else>
            <el-row style="line-height:30px;background-color: #f1f1f1;box-shadow: 0 1px 1px 0 #ffffff;border-bottom: solid 1px #ddd8d4;">
                <el-col :span="10">期号</el-col>
                <el-col :span="14">开奖号码</el-col>
            </el-row>
            <el-row v-for="(item,index) in LastFiveLssue" :key="index" class="lottery_periods_item">
                <el-col :span="10">
                    <div class="grid-content">{{item.FormatLssue}}</div>
                </el-col>
                <el-col :span="14">
                    <div class="grid-content">
                        <span v-for="(value,num) in item.OpenNumber.split(',')" :key="num">{{value}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
  import {arraySum} from "../../util/common";

  export default {
    name: "history",
    props: {
      historyData: {
        type: Array,
        required: true
      },
      id: {
        type: Number,
        required: false
      },
      styleId: {//0五星1四星2前三3中三4后三5二星0定位胆0不定位0任四任三任二
        type: Number,
        required: false
      }
    },
    data() {
      return {
        LastFiveLssue: [], //近五期开奖数据
        allLotterydata: [],//全部开奖数据
        lotteryButton: '更多历史开奖',//更多历史开奖按钮
        pkgame: [],//pk10数据处理
      }
    },
    watch: {
      'historyData'(val) {
        if (this.id == 9) {
          this.allLotterydata = val.map((item, index) => {
            let newObj = Object.assign({}, item);
            let arr = {
              '01': 'one',
              '02': 'two',
              '03': 'three',
              '04': 'four',
              '05': 'five',
              '06': 'six',
              '07': 'seven',
              '08': 'eight',
              '09': 'nine',
              '10': 'ten'
            };
            let num = item.OpenNumber.split(',');
            let str = item.FormatLssue.split('-');
            if (item.FormatLssue.indexOf('-') > -1) {
              newObj.FormatLssue = str[1];
            } else {
              newObj.FormatLssue = str[0];
              if (str[0].length > 6) {
                newObj.FormatLssue = str[0].substring(5);
              } else {

                newObj.FormatLssue = str[0];
              }
            }
            newObj.neeArr = [];
            num.forEach((val) => {
              newObj.neeArr.push({
                name: val,
                text: arr[val]
              });
            })
            return newObj;
          });
          this.LastFiveLssue = this.allLotterydata.slice(0, 18);
          return false;
        }
        this.allLotterydata = val;
        // this.LastFiveLssue = val.slice(0, 18);
        if (this.$route.query.index == 7) {
          this.LastFiveLssue = val.slice(0, 9);
        } else {
          this.LastFiveLssue = val.slice(0, 18);
        }
      },
    },
    methods: {
      //筛选返回时时彩历史记录样式
      returnSscClass(){
        //0五星1后四星2前三3中三4后三5后二星0定位胆0不定位0任四任三任二6龙虎7前四8前二
        let styleArr = ['all_sty','four_str','front_three','center_three','after_three','two_sty','long_hu','before_four','before_two']
        return styleArr[this.styleId]
      },
      //返回球的颜色
      returnClass(str) {
        let num = Number(str)
        if (num === 1 || num === 2 || num === 7 || num === 8 || num === 12 || num === 13 || num === 18 || num === 19 || num === 23 || num === 24 || num === 29 || num === 30 || num === 34 || num === 35 || num === 40 || num === 45 || num === 46) {
          return 'red_qiu'
        }
        if (num === 3 || num === 4 || num === 9 || num === 10 || num === 14 || num === 15 || num === 20 || num === 25 || num === 26 || num === 31 || num === 36 || num === 37 || num === 41 || num === 42 || num === 47 || num === 48) {
          return 'blue_qiu'
        }
        if (num === 5 || num === 6 || num === 11 || num === 16 || num === 17 || num === 21 || num === 22 || num === 27 || num === 28 || num === 32 || num === 33 || num === 38 || num === 39 || num === 43 || num === 44 || num === 49) {
          return 'green_qiu'
        }
      },
      sumArray(arr) {
        return arraySum(arr)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .lottery_periods {
        width: 282px;
        text-align: center;

        h3 {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 35px;
            padding: 0 15px;
            text-align: center;
            line-height: 35px;
            font-size: 12px;
            color: #333333;
            background-color:#ffffff;
            /*box-shadow: 0 1px 1px -2px #ffffff;*/
            border-bottom: solid 1px #d8d8d8;

            a {
                position: relative;
                padding-right: 10px;
                line-height: 35px;
                font-size: 12px;
                color: #333333;

                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 0;
                    height: 0;
                    margin: auto;
                    border-left: 6px solid #171717;
                    border-top: 4px solid transparent;
                    border-bottom: 4px solid transparent;
                }
            }
        }

        .lottery_periods_title {
            height: 30px;
            line-height: 30px;
            margin-bottom: 1px;
            background-color: #ececec;
            text-align: center;
            color: #000;
            box-shadow: 0 1px 1px 0 #ffffff;
            border-bottom: solid 1px #ddd8d4;
        }

        .lottery_periods_content {
            width: 100%;
            height: 722px;
            padding-bottom: 38px;
            background-color: #ffffff;
            overflow-y: hidden;

            .lottery_periods_item {
                height: 37px;
                line-height: 37px;
                margin-bottom: 1px;
                text-align: center;
                box-shadow: 0 1px 1px 0 #ffffff;
                border-bottom: dotted 1px #d8d8d8;
                div:first-child {
                    font-size: 12px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #000;
                }

                div:last-child {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 36px;

                    span {
                        display: inline-block;
                        width: 21px;
                        height: 21px;
                        line-height: 21px;
                        margin: 0 2px;
                        background-color: #008573;
                        font-size: 12px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #ffffff;
                        border-radius: 100%;
                    }
                }

                .xinyun-item:nth-of-type(even) {
                    width: auto !important;
                    font-size: 18px !important;
                    color: #707070 !important;
                    background-color: rgba(0, 0, 0, 0) !important;
                }

                .ks {
                    span {
                        width: 24px !important;
                        height: 24px !important;
                        border-radius: 0 !important;
                        background-color: transparent !important;
                        background-position: center center;
                        background-size: cover;
                    }
                }
            }
            .all_sty:nth-child(2){
                div:first-child {
                    color: #ff6c00;
                    font-weight: bold;
                }

                div:last-child {
                    span {
                        background-color: #ff6c00;
                    }
                }
            }
            .four_str{
                &:nth-child(2){
                    div:first-child {
                        color: #ff6c00;
                        font-weight: bold;
                    }

                    div:last-child {
                        span {
                            &:first-child{
                                line-height: 19px;
                                color: #ff6c00;
                                border: solid 1px #ff6c00;
                                background-color: transparent;
                            }
                            background-color: #ff6c00;
                        }
                    }
                }
                div:last-child {
                    span {
                        &:first-child{
                            line-height: 19px;
                            color: #999999;
                            border: solid 1px #909090;
                            background-color: transparent;
                        }
                    }
                }
            }
            .before_four{
                &:nth-child(2){
                    div:first-child {
                        color: #ff6c00;
                        font-weight: bold;
                    }

                    div:last-child {
                        span {
                            &:last-child{
                                line-height: 19px;
                                color: #ff6c00;
                                border: solid 1px #ff6c00;
                                background-color: transparent;
                            }
                            background-color: #ff6c00;
                        }
                    }
                }
                div:last-child {
                    span {
                        &:last-child{
                            line-height: 19px;
                            color: #999999;
                            border: solid 1px #909090;
                            background-color: transparent;
                        }
                    }
                }
            }
            .front_three{
                &:nth-child(2){
                    div:first-child {
                        color: #ff6c00;
                        font-weight: bold;
                    }

                    div:last-child {
                        span {
                            &:nth-child(n + 4){
                                line-height: 19px;
                                color: #ff6c00;
                                border: solid 1px #ff6c00;
                                background-color: transparent;
                            }
                            background-color: #ff6c00;
                        }
                    }
                }
                div:last-child {
                    span {
                        &:nth-child(n + 4){
                            line-height: 19px;
                            color: #999999;
                            border: solid 1px #909090;
                            background-color: transparent;
                        }
                    }
                }
            }
            .long_hu{
                &:nth-child(2){
                    div:first-child {
                        color: #ff6c00;
                        font-weight: bold;
                    }

                    div:last-child {
                        span {
                            &:nth-child(n + 3){
                                line-height: 19px;
                                color: #ff6c00;
                                border: solid 1px #ff6c00;
                                background-color: transparent;
                            }
                            background-color: #ff6c00;
                        }
                    }
                }
                div:last-child {
                    span {
                        &:nth-child(n + 3){
                            line-height: 19px;
                            color: #999999;
                            border: solid 1px #909090;
                            background-color: transparent;
                        }
                    }
                }
            }
            .center_three{
                &:nth-child(2){
                    div:first-child {
                        color: #ff6c00;
                        font-weight: bold;
                    }

                    div:last-child {
                        span {
                            &:first-child,&:last-child{
                                line-height: 19px;
                                color: #ff6c00;
                                border: solid 1px #ff6c00;
                                background-color: transparent;
                            }
                            background-color: #ff6c00;
                        }
                    }
                }
                div:last-child {
                    span {
                        &:first-child,&:last-child{
                            line-height: 19px;
                            color: #999999;
                            border: solid 1px #909090;
                            background-color: transparent;
                        }
                    }
                }
            }
            .after_three{
                &:nth-child(2){
                    div:first-child {
                        color: #ff6c00;
                        font-weight: bold;
                    }

                    div:last-child {
                        span {
                            &:not(:nth-child(n + 3)){
                                line-height: 19px;
                                color: #ff6c00;
                                border: solid 1px #ff6c00;
                                background-color: transparent;
                            }
                            background-color: #ff6c00;
                        }
                    }
                }
                div:last-child {
                    span {
                        &:not(:nth-child(n + 3)){
                            line-height: 19px;
                            color: #999999;
                            border: solid 1px #909090;
                            background-color: transparent;
                        }
                    }
                }
            }
            .two_sty{
                &:nth-child(2){
                    div:first-child {
                        color: #ff6c00;
                        font-weight: bold;
                    }

                    div:last-child {
                        span {
                            &:not(:nth-child(n + 4)){
                                line-height: 19px;
                                color: #ff6c00;
                                border: solid 1px #ff6c00;
                                background-color: transparent;
                            }
                            background-color: #ff6c00;
                        }
                    }
                }
                div:last-child {
                    span {
                        &:not(:nth-child(n + 4)){
                            line-height: 19px;
                            color: #999999;
                            border: solid 1px #909090;
                            background-color: transparent;
                        }
                    }
                }
            }
            .before_two{
                &:nth-child(2){
                    div:first-child {
                        color: #ff6c00;
                        font-weight: bold;
                    }

                    div:last-child {
                        span {
                            &:nth-child(n + 3){
                                line-height: 19px;
                                color: #ff6c00;
                                border: solid 1px #ff6c00;
                                background-color: transparent;
                            }
                            background-color: #ff6c00;
                        }
                    }
                }
                div:last-child {
                    span {
                        &:nth-child(n + 3){
                            line-height: 19px;
                            color: #999999;
                            border: solid 1px #909090;
                            background-color: transparent;
                        }
                    }
                }
            }
            .lottery_lhc_item {
                text-align: left;
                padding-bottom: 10px;
                border-bottom: dotted 1px #d8d8d8;

                &:hover {
                    background-color: #f5f5f5;
                }

                .lhc_content {
                    display: flex;
                    justify-content: start;
                    padding-left: 7px;
                    font-size: 12px;
                    color: #666666;

                    span {
                        margin: 0 2px;
                        color: #333333;
                    }

                    strong {
                        color: #333333;
                    }

                    .lhc_content_item {
                        width: 21px;

                        div {
                            width: 21px;

                            &:first-child {
                                width: 21px;
                                height: 21px;
                                line-height: 21px;
                                text-align: center;
                                font-size: 12px;
                                color: #ffffff;
                            }

                            &:last-child {
                                margin-top: 2px;
                                font-size: 12px;
                                line-height: 16px;
                                text-align: center;
                                color: #333333;
                            }
                        }

                    }
                }
            }
        }

        .sc_periods_item {
            display: flex;
            align-items: center;
            /*height: 45px !important;*/
            /*line-height: 45px !important;*/
        }

        a {
            display: inline-block;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            line-height: 50px;
            color: #9b9b9b;
            cursor: pointer;
        }

        a:hover {
            color: #008573;

            &:after {
                content: '';
                border-left: 6px solid #008573;
                border-top: 4px solid transparent;
                border-bottom: 4px solid transparent;
            }
        }
    }

    .sc_periods_content {

    }

    .pkcalss {
        display: block !important;

        .sc_style {
            width: 100%;
            display: block;
            flex-wrap: wrap;

            span {
                display: inline-block;
                width: 21px !important;
                margin: 0 1px !important;
                height: 21px !important;
                line-height: 19px !important;
                font-size: 12px !important;
                border: none !important;
                color: #ffffff !important;
                border-radius: 0 !important;
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                background-color: rgba(0, 0, 0, 0) !important;
            }

            .one {
                background-image: url(../../static/img/gametype/1.png);
            }

            .two {
                background-image: url(../../static/img/gametype/2.png);
            }

            .three {
                background-image: url(../../static/img/gametype/3.png);
            }

            .four {
                background-image: url(../../static/img/gametype/4.png);
            }

            .five {
                background-image: url(../../static/img/gametype/5.png);
            }

            .six {
                background-image: url(../../static/img/gametype/6.png);
            }

            .seven {
                background-image: url(../../static/img/gametype/7.png);
            }

            .eight {
                background-image: url(../../static/img/gametype/8.png);
            }

            .nine {
                background-image: url(../../static/img/gametype/9.png);
            }

            .ten {
                background-image: url(../../static/img/gametype/10.png);
            }
        }
    }

    .lottery_periods_item:hover {
        background-color: #fffbe3;
    }

    .lottery_periods_content span.one {
        background-image: url(../../static/img/ks/ks1.png)
    }

    .lottery_periods_content span.two {
        background-image: url(../../static/img/ks/ks2.png)
    }

    .lottery_periods_content span.three {
        background-image: url(../../static/img/ks/ks3.png)
    }

    .lottery_periods_content span.four {
        background-image: url(../../static/img/ks/ks4.png)
    }

    .lottery_periods_content span.five {
        background-image: url(../../static/img/ks/ks5.png)
    }

    .lottery_periods_content span.six {
        background-image: url(../../static/img/ks/ks6.png)
    }
</style>

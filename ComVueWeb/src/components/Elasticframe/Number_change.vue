<template>
    <!-- 投注状态 -->
    <div class="betting_frame_change">
        <div class="bet_frame_mainbox_open">
            <div class="bet_top_title">开奖提示<span class="iconfont icon-guanbi" @click="hideThis"></span></div>
            <div class="bet_open_numberbox box_h">
                <p>开奖号码：</p>
                <div class="pk10 box_h" v-if="$route.query.index == 2">
                    <div v-for="(item,index) in redata.LastOpenNumber"
                         :class="[item == 1?'one':item == 2?'two':item == 3?'three':item == 4?'four':item == 5?'five':item == 6?'six':item == 7?'seven':item==8?'eight':item == 9?'nine':'ten']"
                         :key="index"></div>
                </div>
                <div v-else-if="$route.query.index == 7" class="lhc_style">
                    <div class="lhc_num_item">
                        <div :class="[returnClass(redata.LastOpenNumber[0])]">{{redata.LastOpenNumber[0]}}</div>
                        <span>{{redata.LastExplain[0]}}</span>
                    </div>
                    <!--                    <div class="lhc_num_f">+</div>-->
                    <div class="lhc_num_item">
                        <div :class="[returnClass(redata.LastOpenNumber[1])]">{{redata.LastOpenNumber[1]}}</div>
                        <span>{{redata.LastExplain[1]}}</span>
                    </div>
                    <!--                    <div class="lhc_num_f">+</div>-->
                    <div class="lhc_num_item">
                        <div :class="[returnClass(redata.LastOpenNumber[2])]">{{redata.LastOpenNumber[2]}}</div>
                        <span>{{redata.LastExplain[2]}}</span>
                    </div>
                    <!--                    <div class="lhc_num_f">+</div>-->
                    <div class="lhc_num_item">
                        <div :class="[returnClass(redata.LastOpenNumber[3])]">{{redata.LastOpenNumber[3]}}</div>
                        <span>{{redata.LastExplain[3]}}</span>
                    </div>
                    <!--                    <div class="lhc_num_f">+</div>-->
                    <div class="lhc_num_item">
                        <div :class="[returnClass(redata.LastOpenNumber[4])]">{{redata.LastOpenNumber[4]}}</div>
                        <span>{{redata.LastExplain[4]}}</span>
                    </div>
                    <!--                    <div class="lhc_num_f">+</div>-->
                    <div class="lhc_num_item">
                        <div :class="[returnClass(redata.LastOpenNumber[5])]">{{redata.LastOpenNumber[5]}}</div>
                        <span>{{redata.LastExplain[5]}}</span>
                    </div>
                    <!--                    <div class="lhc_num_f">+</div>-->
                    <div class="lhc_num_item">
                        <div :class="[returnClass(redata.LastOpenNumber[6])]">{{redata.LastOpenNumber[6]}}</div>
                        <span>{{redata.LastExplain[6]}}</span>
                    </div>
                    <!--                    <div class="lhc_num_f">=</div>-->
                    <!--                    <strong>{{returnSum(redata.LastOpenNumber)}}</strong>-->
                </div>
                <div class="bets_open_numbermain box_h" v-else>
                    <div :class="[/^[0-9]+.?[0-9]*/.test(value)?'is_number':'']"
                         v-for="(value,index) in redata.LastOpenNumber" :key="index">{{value}}
                    </div>
                </div>
            </div>
            <div class="bet_sure_textbox">
                <p><a>当前彩种：</a><span>{{redata.Name}}</span></p>
                <p><a>开奖期号：</a><span>{{redata.Time}}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
  import {arraySum} from "../../util/common";

  export default {
    props: {
      redata: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        success: false
      }
    },
    watch: {
      'redata'(val) {
      }
    },
    methods: {
      hideThis() {
        this.$emit("hidere")
      },
      setTimeHide() {
        let that = this
        setTimeout(function () {
          that.hideThis()
        }, 5000)
      },
      //返回球的颜色
      returnClass(str) {
        let num = Number(str)
        if (num === 1 || num === 2 || num === 7 || num === 8 || num === 12 || num === 13 || num === 18 || num === 19 || num === 23 || num === 24 || num === 29 || num === 30 || num === 34 || num === 35 || num === 40 || num === 45 || num === 46) {
          return 'red_bo'
        }
        if (num === 3 || num === 4 || num === 9 || num === 10 || num === 14 || num === 15 || num === 20 || num === 25 || num === 26 || num === 31 || num === 36 || num === 37 || num === 41 || num === 42 || num === 47 || num === 48) {
          return 'blue_bo'
        }
        if (num === 5 || num === 6 || num === 11 || num === 16 || num === 17 || num === 21 || num === 22 || num === 27 || num === 28 || num === 32 || num === 33 || num === 38 || num === 39 || num === 43 || num === 44 || num === 49) {
          return 'greed_bo'
        }
      },
      returnSum(arr) {
        return arraySum(arr)
      },
    },
    mounted() {
      this.setTimeHide()
    }
  }
</script>
<style>
    /* 开奖号码框 */
    .betting_frame_change .bet_open_numberbox {
        height: 54px;
        padding: 0 0 0 15px;
        overflow: hidden;
        line-height: 54px;
        margin-top: 12px;
    }

    .betting_frame_change .bet_open_numberbox > p {
        margin-right: 15px;
        font-size: 14px;
        color: #666666;
        font-weight: bold;
    }

    .betting_frame_change {
        position: fixed;
        right: 10px;
        bottom: 10px;
        width: auto;
        height: auto;
        z-index: 99999;

    }

    .betting_frame_change > .bet_frame_mainbox_open {
        position: absolute;
        right: 20px;
        bottom: 10px;
        background: #ffffff;
        border-radius: 5px;
        text-align: center;
        width: 400px;
        animation: shaky-slow 1s linear;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
    }

    .bet_frame_mainbox_open > .bet_top_title {
        position: relative;
        text-align: left;
        color: #fff;
        background: #008573;
        line-height: 40px;
        cursor: pointer;
        font-size: 16px;
        padding-left: 20px;
    }

    .bet_frame_mainbox_open > .bet_top_title > span {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
        text-align: center;
    }

    .betting_frame_change .bet_frame_mainbox_open > .bet_sure_textbox > p {
        text-align: left;
        line-height: 24px;
    }

    .betting_frame_change .bet_frame_mainbox_open p:last-child {
        margin-bottom: 0px;
    }

    .betting_frame_change .bet_sure_textbox {
        margin-top: 10px;
        padding: 17px 0 16px 15px;
        font-size: 14px;
        font-weight: bold;
        color: #171717;
    }

    .bet_sure_textbox.mg_remove {
        margin-top: 20px;
    }

    .betting_frame_change .bet_sure_textbox p > a {
        color: #666666;
    }

    .betting_frame_change .bet_sure_textbox p > span {
        color: #ff680a;
    }

    .bet_frame_sure {
        color: white;
        background: #207877;
        border-radius: 3px;
        width: 120px;
        height: 34px;
        margin: 30px auto 0;
        line-height: 34px;
        cursor: pointer;
    }

    /* 开奖号码框 */
    .bets_open_numbermain, .pk10 {
        justify-content: center;
        align-items: center;
    }

    .pk10 > div {
        width: 21px;
        height: 21px;
        margin-right: 4px;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .bets_open_numbermain > div {
        margin-right: 9px;
    }

    .is_number {
        width: 38px;
        height: 38px;
        background-color: #ff680a;
        text-align: center;
        font-size: 18px;
        color: #fff;
        line-height: 38px;
        border-radius: 100%;
    }

    /* 动画抖动 */
    @keyframes shaky-slow {
        0% {
            transform: translate(0px, 0px) rotate(0deg);
        }
        2% {
            transform: translate(-1px, 1.5px) rotate(1.5deg);
        }
        4% {
            transform: translate(1.3px, 0px) rotate(-0.5deg);
        }
        6% {
            transform: translate(1.4px, 1.4px) rotate(-2deg);
        }
        8% {
            transform: translate(-1.3px, -1px) rotate(-1.5deg);
        }
        10% {
            transform: translate(1.4px, 0px) rotate(-2deg);
        }
        12% {
            transform: translate(-1.3px, -1px) rotate(-2deg);
        }
        14% {
            transform: translate(1.5px, 1.3px) rotate(1.5deg);
        }
        16% {
            transform: translate(1.5px, -1.5px) rotate(-1.5deg);
        }
        18% {
            transform: translate(1.3px, -1.3px) rotate(-2deg);
        }
        20% {
            transform: translate(1px, 1px) rotate(-0.5deg);
        }
        22% {
            transform: translate(1.3px, 1.5px) rotate(-2deg);
        }
        24% {
            transform: translate(-1.4px, -1px) rotate(2deg);
        }
        26% {
            transform: translate(1.3px, -1.3px) rotate(0.5deg);
        }
        28% {
            transform: translate(1.6px, -1.6px) rotate(-1.5deg);
        }
        30% {
            transform: translate(-1.3px, -1.3px) rotate(-1.5deg);
        }
        32% {
            transform: translate(-1px, 0px) rotate(2deg);
        }
        34% {
            transform: translate(1.3px, 1.3px) rotate(-0.5deg);
        }
        36% {
            transform: translate(1.3px, 1.6px) rotate(1.5deg);
        }
        38% {
            transform: translate(1.3px, -1.6px) rotate(1.5deg);
        }
        40% {
            transform: translate(-1.4px, -1px) rotate(-0.5deg);
        }
        42% {
            transform: translate(-1.4px, 1.3px) rotate(-0.5deg);
        }
        44% {
            transform: translate(-1.6px, 1.4px) rotate(0.5deg);
        }
        46% {
            transform: translate(-2.1px, -1.3px) rotate(-0.5deg);
        }
        48% {
            transform: translate(1px, 1.6px) rotate(1.5deg);
        }
        50% {
            transform: translate(1.6px, 1.6px) rotate(1.5deg);
        }
        52% {
            transform: translate(-1.4px, 1.6px) rotate(0.5deg);
        }
        54% {
            transform: translate(1.6px, -1px) rotate(-2deg);
        }
        56% {
            transform: translate(1.3px, -1.6px) rotate(-2deg);
        }
        58% {
            transform: translate(-1.3px, -1.6px) rotate(0.5deg);
        }
        60% {
            transform: translate(1.3px, 1.6px) rotate(-0.5deg);
        }
        62% {
            transform: translate(0px, 0px) rotate(-1.5deg);
        }
        64% {
            transform: translate(-1.6px, -1.6px) rotate(-2deg);
        }
        66% {
            transform: translate(1.6px, -1.6px) rotate(0.5deg);
        }
        68% {
            transform: translate(0px, -1.6px) rotate(-2deg);
        }
        70% {
            transform: translate(-1.6px, 1px) rotate(1.5deg);
        }
        72% {
            transform: translate(-1.6px, 1.6px) rotate(2deg);
        }
        74% {
            transform: translate(1.3px, -1.6px) rotate(-0.5deg);
        }
        76% {
            transform: translate(1.4px, 1px) rotate(-0.5deg);
        }
        78% {
            transform: translate(-1px, 1.4px) rotate(2deg);
        }
        80% {
            transform: translate(1.4px, 1.6px) rotate(2deg);
        }
        82% {
            transform: translate(-1.6px, -1.6px) rotate(-0.5deg);
        }
        84% {
            transform: translate(-1.4px, 1.4px) rotate(-2deg);
        }
        86% {
            transform: translate(1px, 1.4px) rotate(-2deg);
        }
        88% {
            transform: translate(-1.4px, 1.4px) rotate(-1.5deg);
        }
        90% {
            transform: translate(-1.6px, -1.6px) rotate(-2deg);
        }
        92% {
            transform: translate(-1.4px, 1.6px) rotate(2deg);
        }
        94% {
            transform: translate(-1.6px, -1.6px) rotate(-2deg);
        }
        96% {
            transform: translate(-1.4px, 1.3px) rotate(-2deg);
        }
        98% {
            transform: translate(1.3px, 1px) rotate(-0.5deg);
        }
        100% {
            transform: translate(0px, 0px) rotate(0deg);
        }
    }

    .pk10 .one {
        background-image: url(../../static/img/gametype/1.png);
    }

    .pk10 .two {
        background-image: url(../../static/img/gametype/2.png);
    }

    .pk10 .three {
        background-image: url(../../static/img/gametype/3.png);
    }

    .pk10 .four {
        background-image: url(../../static/img/gametype/4.png);
    }

    .pk10 .five {
        background-image: url(../../static/img/gametype/5.png);
    }

    .pk10 .six {
        background-image: url(../../static/img/gametype/6.png);
    }

    .pk10 .seven {
        background-image: url(../../static/img/gametype/7.png);
    }

    .pk10 .eight {
        background-image: url(../../static/img/gametype/8.png);
    }

    .pk10 .nine {
        background-image: url(../../static/img/gametype/9.png);
    }

    .pk10 .ten {
        background-image: url(../../static/img/gametype/10.png);
    }

    .red_bo {
        background: url(../../static/img/lhc/Draw_btn_red.png) no-repeat 0 0/100% 100%;
    }

    .blue_bo {
        background: url(../../static/img/lhc/Draw_btn_blue.png) no-repeat 0 0/100% 100%;
    }

    .greed_bo {
        background: url(../../static/img/lhc/Draw_btn_green.png) no-repeat 0 0/100% 100%;
    }
</style>
<style lang="scss" scoped>
    .lhc_style {
        display: flex;
        justify-content: center;
        align-items: center;

        .lhc_num_f {
            width: 15px;
            font-size: 22px;
        }

        .lhc_num_item {
            width: 34px;
            height: auto;
            margin-right: 5px;
            line-height: normal;

            div {
                width: 34px;
                height: 34px;
                line-height: 34px;
                text-align: center;
                font-size: 16px;
                color: #ffffff;
            }

            span {
                font-size: 14px;
                color: #666666;
            }
        }

        strong {
            padding-left: 10px;
            padding-top: 4px;
            font-size: 18px;
        }
    }
</style>

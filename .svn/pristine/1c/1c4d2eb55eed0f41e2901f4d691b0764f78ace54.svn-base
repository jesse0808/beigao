<template>
    <div v-if="dataArray.state" class="lhc_num_style">
        <div class="lhc_num_item">
            <div :class="['red_bo',showData[0].state?returnClass(showData[0].num):'']">
                <ul :class="['commonam',showData[0].state?'pause':'']">
                    <li v-for="(item,index) in 49" :key="index">{{showData[0].state?showData[0].num:item}}</li>
                </ul>
            </div>
            <span>{{animalArr[0]}}</span>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div :class="['red_bo',showData[1].state?returnClass(showData[1].num):'']">
                <ul :class="['commonam',showData[1].state?'pause':'']">
                    <li v-for="(item,index) in 49" :key="index">{{showData[1].state?showData[1].num:item}}</li>
                </ul>
            </div>
            <span>{{animalArr[1]}}</span>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div :class="['red_bo',showData[2].state?returnClass(showData[2].num):'']">
                <ul :class="['commonam',showData[2].state?'pause':'']">
                    <li v-for="(item,index) in 49" :key="index">{{showData[2].state?showData[2].num:item}}</li>
                </ul>
            </div>
            <span>{{animalArr[2]}}</span>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div :class="['red_bo',showData[3].state?returnClass(showData[3].num):'']">
                <ul :class="['commonam',showData[3].state?'pause':'']">
                    <li v-for="(item,index) in 49" :key="index">{{showData[3].state?showData[3].num:item}}</li>
                </ul>
            </div>
            <span>{{animalArr[3]}}</span>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div :class="['red_bo',showData[4].state?returnClass(showData[4].num):'']">
                <ul :class="['commonam',showData[4].state?'pause':'']">
                    <li v-for="(item,index) in 49" :key="index">{{showData[4].state?showData[4].num:item}}</li>
                </ul>
            </div>
            <span>{{animalArr[4]}}</span>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div :class="['red_bo',showData[5].state?returnClass(showData[5].num):'']">
                <ul :class="['commonam',showData[5].state?'pause':'']">
                    <li v-for="(item,index) in 49" :key="index">{{showData[5].state?showData[5].num:item}}</li>
                </ul>
            </div>
            <span>{{animalArr[5]}}</span>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div :class="['red_bo',showData[6].state?returnClass(showData[6].num):'']">
                <ul :class="['commonam',showData[6].state?'pause':'']">
                    <li v-for="(item,index) in 49" :key="index">{{showData[6].state?showData[6].num:item}}</li>
                </ul>
            </div>
            <span>{{animalArr[6]}}</span>
        </div>
        <div class="lhc_num_f">=</div>
        <strong v-if="dataArray.state">{{returnSum(dataArray.numArr)}}</strong>
        <strong v-else>000</strong>
    </div>
    <div v-else class="lhc_num_style">
        <div class="lhc_num_item">
            <div class="red_bo">
                <ul class="commonam">
                    <li v-for="(item,index) in 49" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div class="red_bo">
                <ul class="commonam">
                    <li v-for="(item,index) in 49" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div class="red_bo">
                <ul class="commonam">
                    <li v-for="(item,index) in 49" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div class="red_bo">
                <ul class="commonam">
                    <li v-for="(item,index) in 49" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div class="red_bo">
                <ul class="commonam">
                    <li v-for="(item,index) in 49" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div class="red_bo">
                <ul class="commonam">
                    <li v-for="(item,index) in 49" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="lhc_num_f">+</div>
        <div class="lhc_num_item">
            <div class="red_bo">
                <ul class="commonam">
                    <li v-for="(item,index) in 49" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="lhc_num_f">=</div>
        <strong>000</strong>
    </div>
</template>

<script>
  import {arraySum} from "../../util/common";

  export default {
    name: "lhcopennum",
    props: {
      dataArray: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        showOpen: [
          {
            state: false,//0未选中，选中
          },
          {
            state: false,//0未选中，选中
          },
          {
            state: false,//0未选中，选中
          },
          {
            state: false,//0未选中，选中
          },
          {
            state: false,//0未选中，选中
          },
          {
            state: false,//0未选中，选中
          },
          {
            state: false,//0未选中，选中
          }
        ],
        showData: [],
        animalArr: []
      }
    },
    watch: {
      dataArray(val) {
        if (val.state) {
          this.showData = val.numArr.map(item => {
            return {
              num: item,
              state: false
            }
          })
          this.animalArr = val.animalArr
          this.animationProcessing()
        } else {
          this.initShowOpen()
        }
      }
    },
    methods: {
      animationProcessing() {
        this.showData.forEach((item, index) => {
          setTimeout(() => {
            item.state = true;
          }, 1000 * (Math.floor(Number(index + 1))))
        })
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
      initShowOpen() {
        this.showOpen.forEach((item) => {
          item.state = false;
        })
      },
      returnSum(arr) {
        return arraySum(arr)
      },
    }
  }
</script>

<style lang="scss" scoped>
    .lhc_num_style {
        display: flex;
        justify-content: center;
        width: 500px;

        .lhc_num_f {
            width: 15px;
            height: 50px;
            line-height: 50px;
            font-size: 22px;
        }

        .lhc_num_item {
            div {
                position: relative;
                width: 50px;
                height: 50px;
                padding: 3px;
                line-height: 44px;
                text-align: center;
                font-size: 20px;
                color: #ffffff;
                overflow: hidden;

                ul {
                    position: absolute;
                    list-style: none;
                    width: 100%;
                    padding: 0;
                    margin: 0;
                    top: 0;
                    left: 0;

                    li {
                        width: 50px;
                        height: 50px;
                        text-align: center;
                        padding: 3px;
                        line-height: 44px;
                        font-size: 20px;
                        color: #ffffff;
                    }
                }
            }

            span {
                font-size: 14px;
                color: #ffffff;
            }
        }

        strong {
            line-height: 47px;
            padding-left: 10px;
            padding-top: 4px;
            font-size: 18px;
            color: #ffffff;
        }
    }
</style>
<style scoped>
    .red_bo {
        background: url(../../static/img/lhc/Draw_btn_red.png) no-repeat 0 0/100% 100%;
    }

    .blue_bo {
        background: url(../../static/img/lhc/Draw_btn_blue.png) no-repeat 0 0/100% 100%;
    }

    .greed_bo {
        background: url(../../static/img/lhc/Draw_btn_green.png) no-repeat 0 0/100% 100%;
    }

    .pause {
        animation: none !important;
        animation-play-state: paused !important;
    }

    .commonam {
        animation: gundong 4s linear infinite reverse;
    }

    @keyframes gundong {
        0% {
            top: 0;
        }
        100% {
            top: -1632px;
        }
    }
</style>

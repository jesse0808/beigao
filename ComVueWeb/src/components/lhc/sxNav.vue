<template>
    <div class="sx_sx_nav">
        <div class="four_xiao">
            <a href="javascript:void(0)" @click="clickAnav(0)"><span
                    :class="[selectNum === 1?'select_a':'no_select_a']"><span></span></span>&thinsp;大肖</a>
            <a href="javascript:void(0)" @click="clickAnav(1)"><span :class="[selectNum === 2?'select_a':'no_select_a']"><span></span></span>&thinsp;小肖</a>
            <a v-if="indexId === 248 || indexId === 249" href="javascript:void(0)" @click="clickAnav(2)"><span :class="[selectNum === 3?'select_a':'no_select_a']"><span></span></span>&thinsp;男肖</a>
            <a v-if="indexId === 248 || indexId === 249" href="javascript:void(0)" @click="clickAnav(3)"><span :class="[selectNum === 4?'select_a':'no_select_a']"><span></span></span>&thinsp;女肖</a>
        </div>
        <div v-if="indexId === 248 || indexId === 249" class="five_wuxing">
            <a href="javascript:void(0)" @click="clickWuXing(0)" :class="[wuXing[0].selectStatus?'select_a':'no_select_a']">五行属金：猴&nbsp;鸡</a>
            <a href="javascript:void(0)" @click="clickWuXing(1)" :class="[wuXing[1].selectStatus?'select_a':'no_select_a']">五行属木：虎&nbsp;兔</a>
            <a href="javascript:void(0)" @click="clickWuXing(2)" :class="[wuXing[2].selectStatus?'select_a':'no_select_a']">五行属水：鼠&nbsp;猪</a>
            <a href="javascript:void(0)" @click="clickWuXing(3)" :class="[wuXing[3].selectStatus?'select_a':'no_select_a']">五行属火：射&nbsp;马</a>
            <a href="javascript:void(0)" @click="clickWuXing(4)" :class="[wuXing[4].selectStatus?'select_a':'no_select_a']">五行属土：牛&nbsp;龙&nbsp;羊&nbsp;狗</a>
        </div>
        <div class="six_home">
            <a href="javascript:void(0)" @click="clickAnav(4)" :class="[selectNum === 5?'select_a':'no_select_a']">吉美生肖</a>
            <a href="javascript:void(0)" @click="clickAnav(5)" :class="[selectNum === 6?'select_a':'no_select_a']">凶丑生肖</a>
            <a href="javascript:void(0)" @click="clickAnav(6)" :class="[selectNum === 7?'select_a':'no_select_a']">野外六兽</a>
            <a href="javascript:void(0)" @click="clickAnav(7)" :class="[selectNum === 8?'select_a':'no_select_a']">家内六畜</a>
            <a href="javascript:void(0)" @click="clickAnav(8)" :class="[selectNum === 9?'select_a':'no_select_a']">阳性生肖</a>
            <a href="javascript:void(0)" @click="clickAnav(9)" :class="[selectNum === 10?'select_a':'no_select_a']">阴性生肖</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "sxNav",
    props:{
      indexId:{
        type:Number,
        required:true
      }
    },
    data() {
      return {
        selectNum: 0,
        one:[
          {
            text:'大肖',
            arr:[0,1,2,3,4,5]
          },
          {
            text:'小肖',
            arr:[6,7,8,9,10,11]
          },
          {
            text:'男肖',
            arr:[0,1,2,4,6,8,10]
          },
          {
            text:'女肖',
            arr:[3,5,7,9,11]
          },
          {
            text:'吉美生肖',
            arr:[3,4,5,6,7,9]
          },
          {
            text:'凶丑生肖',
            arr:[0,1,2,8,10,11]
          },
          {
            text:'野外六兽',
            arr:[0,2,3,4,5,8]
          },
          {
            text:'家内六畜',
            arr:[1,6,7,9,10,11]
          },
          {
            text:'阳性生肖',
            arr:[1,2,3,7,8,9]
          },
          {
            text:'阴性生肖',
            arr:[0,4,5,6,10,11]
          }
        ],
        wuXing:[
          {
            text:'五行属金：猴&nbsp;鸡',
            selectStatus:false,
            arr:[8,9]
          },
          {
            text:'五行属木：虎&nbsp;兔',
            selectStatus:false,
            arr:[2,3]
          },
          {
            text:'五行属水：鼠&nbsp;猪',
            selectStatus:false,
            arr:[0,11]
          },
          {
            text:'五行属火：蛇&nbsp;马',
            selectStatus:false,
            arr:[5,6]
          },
          {
            text:'五行属土：牛&nbsp;龙&nbsp;羊&nbsp;狗',
            selectStatus:false,
            arr:[1,4,7,10]
          },
        ]
      }
    },
    created(){
    },
    methods: {
      clickWuXing(index){
        this.selectNum = 0
        this.wuXing[index].selectStatus = !this.wuXing[index].selectStatus
        let arr = []
        this.wuXing.forEach(item=>{
          if (item.selectStatus){
            arr.push(...item.arr)
          }
        })
        this.selectPlayData(arr)
      },
      clickAnav(index){
        this.wuXing.forEach(item=>{
          item.selectStatus = false
        })
        if (this.selectNum > 0){
          if (this.selectNum === index + 1){
            this.selectNum = 0
            this.selectPlayData([])
          }else{
            this.selectNum = index + 1
            this.selectPlayData(this.one[index].arr)
          }
        }else{
          this.selectNum = index + 1
          this.selectPlayData(this.one[index].arr)
        }
      },
      selectPlayData(arr){
        this.$emit('returnData',arr)
      },
      resetNav(){
        this.selectNum = 0
        this.wuXing.forEach(item=>{
          item.selectStatus = false
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .sx_sx_nav {
        div {
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: dotted 1px #d8d8d8;

            &:last-child {
                border-bottom: none;
            }
        }

        .four_xiao {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            text-align: center;

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50%;
                line-height: 26px;
                font-size: 14px;
                color: #333333;

                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 14px;
                    height: 14px;
                    border-radius: 7px;
                }

                .select_a {
                    border: solid 2px #008573;

                    span {
                        width: 6px;
                        height: 6px;
                        border-radius: 3px;
                        background-color: #008573;
                    }
                }

                .no_select_a {
                    border: solid 1px #b6b6b6;
                }
            }
        }

        .five_wuxing {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;

            a {
                display: block;
                width: 158px;
                height: 28px;
                margin-bottom: 9px;
                line-height: 26px;
                text-align: center;
                font-size: 14px;
                border-radius: 14px;
                border: solid 1px #d1d1d1;
            }

            .select_a {
                color: #ffffff;
                background-color: #008573;
            }

            .no_select_a {
                color: #333333;
                background-color: #e2e2e2;
            }
        }

        .six_home {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            a {
                display: block;
                width: 75px;
                height: 25px;
                line-height: 23px;
                text-align: center;
                margin: 0 3px 3px;
                border-radius: 3px;
            }

            .no_select_a {
                color: #333333;
                border: solid 1px #d0d0d0;
                background-color: #ffffff;
            }

            .select_a {
                color: #ffffff;
                background-color: #008573;
                box-shadow: inset 1px 2px 2px 0px rgba(0, 0, 0, 0.3);
            }
        }
    }
</style>

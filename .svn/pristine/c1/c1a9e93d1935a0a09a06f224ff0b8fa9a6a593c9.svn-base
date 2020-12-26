<template>
    <div class="fun_area">
        <div class="class_item">
            <div v-for="(item,index) in redData" :key="index"
                 @click="clickItem(item,1,index)">
                <span :class="['checked_nav',item.selectStatus?'select_status':'']"><span
                        class="div_center"></span></span>
                <span class="red">{{item.text}}</span>
            </div>
        </div>
        <div class="class_item">
            <div v-for="(item,index) in greenData" :key="index"
                 @click="clickItem(item,2,index)">
                <span :class="['checked_nav',item.selectStatus?'select_status':'']"><span
                        class="div_center"></span></span>
                <span class="green">{{item.text}}</span>
            </div>
        </div>
        <div class="class_item">
            <div v-for="(item,index) in blueData" :key="index"
                 @click="clickItem(item,3,index)">
                <span :class="['checked_nav',item.selectStatus?'select_status':'']"><span
                        class="div_center"></span></span>
                <span class="blue">{{item.text}}</span>
            </div>
        </div>
        <div class="class_sx">
            <div :class="[item.selectStatus?'select_sx':'no_select_sx']" v-for="(item,index) in fourData" @click="clickItem(item,4,index)" :key="index">{{item.text}}</div>
        </div>
        <div class="class_three">
            <div :class="[item.selectStatus?'select_sx':'no_select_sx']" v-for="(item,index) in fiveData" @click="clickItem(item,5,index)" :key="index">{{item.text}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "funArea",
    props: {
      shenXiaoNumber: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        redData: [
          {
            text: '红大',
            selectStatus: false,
            numArr: [28, 29, 33, 34, 39, 44, 45]
          },
          {
            text: '红小',
            selectStatus: false,
            numArr: [0, 1, 6, 7, 11, 12, 17, 18, 22, 23]
          },
          {
            text: '红单',
            selectStatus: false,
            numArr: [0, 6, 12, 18, 22, 28, 34, 44]
          },
          {
            text: '红双',
            selectStatus: false,
            numArr: [1, 7, 11, 17, 23, 29, 33, 39, 45]
          },
          {
            text: '红合单',
            selectStatus: false,
            numArr: [0, 6, 11, 17, 22, 28, 29, 33, 44]
          },
          {
            text: '红合双',
            selectStatus: false,
            numArr: [1, 7, 12, 18, 23, 34, 39, 45]
          }
        ],
        greenData: [
          {
            text: '绿大',
            selectStatus: false,
            numArr: [26, 27, 31, 32, 37, 38, 42, 43]
          },
          {
            text: '绿小',
            selectStatus: false,
            numArr: [4, 5, 10, 15, 16, 20, 21]
          },
          {
            text: '绿单',
            selectStatus: false,
            numArr: [4, 10, 16, 20, 26, 32, 38, 42]
          },
          {
            text: '绿双',
            selectStatus: false,
            numArr: [5, 15, 21, 27, 31, 37, 43]
          },
          {
            text: '绿合单',
            selectStatus: false,
            numArr: [4, 15, 20, 26, 31, 37, 42]
          },
          {
            text: '绿合双',
            selectStatus: false,
            numArr: [5, 10, 16, 21, 27, 32, 38, 43]
          }
        ],
        blueData: [
          {
            text: '蓝大',
            selectStatus: false,
            numArr: [24, 25, 30, 35, 36, 40, 41, 46, 47]
          },
          {
            text: '蓝小',
            selectStatus: false,
            numArr: [2, 3, 8, 9, 13, 14, 19]
          },
          {
            text: '蓝单',
            selectStatus: false,
            numArr: [2, 8, 14, 24, 30, 36, 40, 46]
          },
          {
            text: '蓝双',
            selectStatus: false,
            numArr: [3, 9, 13, 19, 25, 35, 41, 47]
          },
          {
            text: '蓝合单',
            selectStatus: false,
            numArr: [2, 8, 9, 13, 24, 35, 40, 46]
          },
          {
            text: '蓝合双',
            selectStatus: false,
            numArr: [3, 14, 19, 25, 30, 36, 41, 47]
          }
        ],
        fourData: [
          {
            text: '鼠',
            selectStatus: false,
            numArr: [11, 23, 35, 47]
          },
          {
            text: '牛',
            selectStatus: false,
            numArr: [10, 22, 34, 46]
          },
          {
            text: '虎',
            selectStatus: false,
            numArr: [9, 21, 33, 45]
          },
          {
            text: '兔',
            selectStatus: false,
            numArr: [8, 20, 32, 44]
          },
          {
            text: '龙',
            selectStatus: false,
            numArr: [7, 19, 31, 43]
          },
          {
            text: '蛇',
            selectStatus: false,
            numArr: [6, 18, 30, 42]
          },
          {
            text: '马',
            selectStatus: false,
            numArr: [5, 17, 29, 41]
          },
          {
            text: '羊',
            selectStatus: false,
            numArr: [4, 16, 28, 40]
          },
          {
            text: '猴',
            selectStatus: false,
            numArr: [3, 15, 27, 39]
          },
          {
            text: '鸡',
            selectStatus: false,
            numArr: [2, 14, 26, 38]
          },
          {
            text: '狗',
            selectStatus: false,
            numArr: [1, 13, 25, 37]
          },
          {
            text: '猪',
            selectStatus: false,
            numArr: [0, 12, 24, 36, 48]
          },
        ],
        fiveData: [
          {
            text: '大',
            selectStatus: false,
            numArr: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]
          },
          {
            text: '小',
            selectStatus: false,
            numArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
          },
          {
            text: '单',
            selectStatus: false,
            numArr: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48]
          },
          {
            text: '双',
            selectStatus: false,
            numArr: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47]
          }
        ],
      }
    },
    created(){
      this.fourData=[];
      console.log( this.fourData)
      //将本地写死的生肖对应数字修改成api返回的
      this.shenXiaoNumber.forEach(data=>{
        this.fourData.push(Object.assign(data, {selectStatus:false}))
      });
     // this.fourData=newFourData;
      console.log(this.fourData)
    },
    methods: {
      clickItem(data, num, index) {
        if (num === 1) {
          this.greenData.forEach(item => {
            item.selectStatus = false
          })
          this.blueData.forEach(item => {
            item.selectStatus = false
          })
          this.fourData.forEach(item => {
            item.selectStatus = false
          })
          this.fiveData.forEach(item => {
            item.selectStatus = false
          })
          this.redData.forEach((item, nums) => {
            if (nums === index) {
              item.selectStatus = !item.selectStatus
            } else {
              item.selectStatus = false
            }
          })
          this.returnData(data, this.redData[index].selectStatus)
        }
        if (num === 2) {
          this.redData.forEach(item => {
            item.selectStatus = false
          })
          this.blueData.forEach(item => {
            item.selectStatus = false
          })
          this.fourData.forEach(item => {
            item.selectStatus = false
          })
          this.fiveData.forEach(item => {
            item.selectStatus = false
          })
          this.greenData.forEach((item, nums) => {
            if (nums === index) {
              item.selectStatus = !item.selectStatus
            } else {
              item.selectStatus = false
            }
          })
          this.returnData(data, this.greenData[index].selectStatus)
        }
        if (num === 3) {
          this.redData.forEach(item => {
            item.selectStatus = false
          })
          this.greenData.forEach(item => {
            item.selectStatus = false
          })
          this.fourData.forEach(item => {
            item.selectStatus = false
          })
          this.fiveData.forEach(item => {
            item.selectStatus = false
          })
          this.blueData.forEach((item, nums) => {
            if (nums === index) {
              item.selectStatus = !item.selectStatus
            } else {
              item.selectStatus = false
            }
          })
          this.returnData(data, this.blueData[index].selectStatus)
        }
        if (num === 4) {
          this.redData.forEach(item => {
            item.selectStatus = false
          })
          this.greenData.forEach(item => {
            item.selectStatus = false
          })
          this.blueData.forEach(item => {
            item.selectStatus = false
          })
          this.fiveData.forEach(item => {
            item.selectStatus = false
          })
          this.fourData[index].selectStatus = !this.fourData[index].selectStatus
          let arr = []
          this.fourData.forEach((item,) => {
            if (item.selectStatus) {
              arr.push(...item.numArr)
            }
          })
          if (arr.length > 0){
            this.$emit('returnClickFun', {arr: arr, status: true,type:1})
          }else{
            this.$emit('returnClickFun', {arr: [], status: false,type:1})
          }
        }
        if (num === 5) {
          this.redData.forEach(item => {
            item.selectStatus = false
          })
          this.greenData.forEach(item => {
            item.selectStatus = false
          })
          this.fourData.forEach(item => {
            item.selectStatus = false
          })
          this.blueData.forEach(item => {
            item.selectStatus = false
          })
          this.fiveData.forEach((item, nums) => {
            if (nums === index) {
              item.selectStatus = !item.selectStatus
            } else {
              item.selectStatus = false
            }
          })
          this.returnData(data, this.fiveData[index].selectStatus)
        }
      },
      returnData(data, status) {
        this.$emit('returnClickFun', {arr: data.numArr, status: status,type:0})
      },
      resetData(){
        this.greenData.forEach(item => {
          item.selectStatus = false
        })
        this.blueData.forEach(item => {
          item.selectStatus = false
        })
        this.fourData.forEach(item => {
          item.selectStatus = false
        })
        this.fiveData.forEach(item => {
          item.selectStatus = false
        })
        this.redData.forEach((item) => {
          item.selectStatus = false
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .fun_area {
        width: 174px;
        height: 421px;
        padding: 10px 0;
        background-color: #f4f4f4;
        border-radius: 15px;
        border: solid 1px #d8d8d8;

        .class_item {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: dotted 1px #d8d8d8;

            div {
                display: flex;
                align-items: center;
                width: 50%;
                padding-left: 10px;
                cursor: pointer;

                span {
                    display: inline-block;

                    &:first-child {
                        width: 14px;
                        height: 14px;
                        margin-right: 5px;
                        padding-top: 2px;
                        border-radius: 100%;

                        .div_center {
                            display: block;
                            width: 6px;
                            height: 6px;
                            margin: 0 auto;
                            border-radius: 100%;
                            border: none;
                        }
                    }

                    &:last-child {
                        font-size: 14px;
                    }
                }

                .checked_nav {
                    border: solid 2px #d8d8d8;
                }

                .select_status {
                    border: solid 2px #008573;

                    .div_center {
                        display: block;
                        width: 6px;
                        height: 6px;
                        margin: 0 auto;
                        border-radius: 100%;
                        background-color: #008573;
                        border: none;
                    }
                }

                .red {
                    color: #ff0000;
                }

                .green {
                    color: #009d0b;
                }

                .blue {
                    color: #005bf1;
                }
            }
        }

        .class_sx {
            display: flex;
            justify-content: start;
            flex-wrap: wrap;
            padding: 10px 0;
            border-bottom: dotted 1px #d8d8d8;
            div {
                width: 38px;
                height: 24px;
                line-height: 24px;
                margin: 0 2px 2px;
                text-align: center;
                border-radius: 12px;
                cursor: pointer;
            }
            .select_sx{
                color: #ffffff;
                background-color: #008573;
            }
            .no_select_sx{
                color: #666666;
                border: solid 1px #d1d1d1;
                background-color: #e2e2e2;
            }
        }
        .class_three{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 10px 0;
            div {
                width: 30px;
                height: 25px;
                line-height: 24px;
                margin: 0 2px 2px;
                text-align: center;
                border-radius: 2px;
                cursor: pointer;
            }
            .select_sx{
                color: #ffffff;
                background-color: #008573;
            }
            .no_select_sx{
                color: #666666;
                border: solid 1px #d0d0d0;
                background-color: #ffffff;
            }
        }
    }
</style>

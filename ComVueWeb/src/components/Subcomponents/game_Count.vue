<template>
  <div>
    <div class="gamecount">
      <!-- 号码列表 -->
      <div class="twenty_list_div cf">
        <div class="twenty_item" v-for="(item,index) in gameList1" :key="index" :data-id="index">
          <div :class="['list_item_bg',item.state == 1?'checed_true big_icon':'']" :data-id="index" @click="SelectNum"
               :data-index="item.state">{{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {GetHeZhiValue} from "../../static/js/LotteryBase.js"

    export default {
        data() {
            return {
                gameList1: [
                    {name: 0, state: 0}, {name: 1, state: 0}, {name: 2, state: 0}, {name: 3, state: 0}, {
                        name: 4,
                        state: 0
                    }, {name: 5, state: 0}, {name: 6, state: 0},
                    {name: 7, state: 0}, {name: 8, state: 0}, {name: 9, state: 0}, {name: 10, state: 0}, {
                        name: 11,
                        state: 0
                    }, {name: 12, state: 0},
                    {name: 13, state: 0}, {name: 14, state: 0}, {name: 15, state: 0}, {name: 16, state: 0}, {
                        name: 17,
                        state: 0
                    }, {name: 18, state: 0},
                    {name: 19, state: 0}, {name: 20, state: 0}, {name: 21, state: 0}, {name: 22, state: 0}, {
                        name: 23,
                        state: 0
                    }, {name: 24, state: 0},
                    {name: 25, state: 0}, {name: 26, state: 0}, {name: 27, state: 0}
                ],
                selectAry: [],//选中的值
                state: false
            }
        },
        methods: {
            SelectNum(e) {
                let that = this;
                let state = e.target.dataset.index
                let index = e.target.dataset.id
                if (that.gameList1[index].state == 0) {
                    that.gameList1[index].state = 1
                    that.selectAry.push(that.gameList1[index].name)
                } else {
                    that.gameList1[index].state = 0
                    let ids = that.selectAry.indexOf(that.gameList1[index].name)
                    if (ids > -1) {
                        that.selectAry.splice(ids, 1)
                    }
                }
                // 向父组件传递
                this.setSelectdata()
                // 设置注数
                this.setBetNum()
            },
            setSelectdata() {
                this.$emit("setdata", this.selectAry)
            },
            // 计算注数
            setBetNum() {
                let ary = this.selectAry;
                let result = 0;
                for (let i = 0; i < ary.length; i++) {
                    result += GetHeZhiValue(ary[i])
                }
                this.$emit("setbet", result)
            }
        },
        created() {
            this.$watch("state", function (newValue, oldValue) {
                if (this.Withdrawals == true) {
                    this.gameList1.forEach(item => {
                        item.state = 0
                    })
                }
            })
        }
    }
</script>
<style scoped>
  .gamecount {
    width: 100%;
    overflow: hidden;
  }

  .gamecount .twenty_list_div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 10px 11px 22px;
    width: 100%;
    border: none;
  }

  .gamecount .twenty_list_div > * {
    cursor: pointer;
  }

  .gamecount .twenty_item {
    text-align: center;
    color: #8e8e8e;
    float: left;
    margin-top: 12px;
    font-size: 0px;
  }

  .gamecount .twenty_item p {
    font-size: 12px;
  }

  .gamecount .twenty_item .list_item_bg {
    display: inline-block;
    color: #171717;
    font-size: 18px;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 41px;
    cursor: pointer;
    border-radius: 100%;
    margin: 0 9px;
    background-image: linear-gradient(0deg, #f2f2f2 0%, #ffffff 100%), linear-gradient( #ececec, #ececec);
    background-blend-mode: normal, normal;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.04);
    border: solid 1px #c6d1d0;
  }
  .gamecount .twenty_item .list_item_bg:hover{
    color: #ffffff !important;
    background-color: #008573 !important;
    background-image: none !important;
  }
</style>

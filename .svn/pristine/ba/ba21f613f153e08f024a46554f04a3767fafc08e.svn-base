<template>
    <div class="pcd_div">
        <div class="pcd_item" v-for="(item,index) in showData" :key="index">
            <div class="title">{{item.title}}</div>
            <div class="content one" v-if="index === 0">
                <a href="javascript:void(0)" :class="val.state?'select_a':''" @click="checkWanFa(index,num)" v-for="(val,num) in item.arr" :key="num">
                    <span class="txt_title">{{val.Alias}}</span>
                    <span class="txt_num">&#935;&ensp;<span>{{val.Odds}}</span></span>
                </a>
            </div>
            <div class="content two" v-if="index === 1">
                <a href="javascript:void(0)" :class="val.state?'select_a':''" @click="checkWanFa(index,num)" v-for="(val,num) in item.arr" :key="num">
                    <span class="txt_title">{{val.Alias}}</span>
                    <span class="txt_num">&#935;&ensp;<span>{{val.Odds}}</span></span>
                </a>
            </div>
            <div class="content three" v-if="index === 2">
                <a href="javascript:void(0)" :class="val.state?'select_a':''" @click="checkWanFa(index,num)" v-for="(val,num) in item.arr" :key="num">
                    <span class="txt_title">{{val.Alias}}</span>
                    <span class="txt_num">&#935;&ensp;<span>{{val.Odds}}</span></span>
                </a>
            </div>
            <div class="content four" v-if="index === 3">
                <a href="javascript:void(0)" :class="val.state?'select_a':''" @click="checkWanFa(index,num)" v-for="(val,num) in item.arr" :key="num">
                    <span class="txt_title">{{val.Alias}}</span>
                    <span class="txt_num">&#935;&ensp;<span>{{val.Odds}}</span></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  import {getPlayList} from "../../../util/lottery";

  export default {
    name: "lotteryBox",
    props: {
      gameId: {
        type: [Number, String],
        required: true
      }
    },
    data() {
      return {
        showData: []
      }
    },
    created() {
      let that = this;
      getPlayList(this.gameId, 1).then(data => {
        if (data) {
          let arr = [];
          let gameData = data;
          arr.push({
            title: "标准玩法",
            arr: gameData.slice(28, 36)
          });
          arr.push({
            title: "极值玩法",
            arr: gameData.slice(36, 38)
          });
          arr.push({
            title: "单点玩法",
            arr: gameData.slice(0, 28)
          });
          arr.push({
            title: "特殊玩法",
            arr: gameData.slice(38)
          });
          arr.forEach(item => {
            item.arr.forEach(val => {
              val.state = false
            })
          });
          that.showData = arr
        }
      })
    },
    methods: {
      checkWanFa(x,y){
        this.showData.forEach((item,index)=>{
          if (index == x){
            item.arr.forEach((val,num)=>{
              if (num == y){
                val.state = !val.state
                if (val.state){
                  this.$emit('selectReturnData', val)
                }else{
                  this.$emit('selectReturnData', null)
                }
              }else{
                val.state = false
              }
            })
          }else{
            item.arr.forEach(val=>{
              val.state = false
            })
          }
        })
      },
      resetData(){
        this.showData.forEach(item=>{
          item.arr.forEach(val=>{
            val.state = false
          })
        })
          this.$emit('selectReturnData', null)
      },
      //清除全部
      clearAllCheck() {
        this.showData.forEach(item=>{
          item.arr.forEach(val=>{
            val.state = false
          })
        })
        this.$emit('selectReturnData', null);
      }
    }
  }
</script>

<style lang="less" scoped>
.pcd_div{
    width: 100%;
    padding-top: .26666rem;
    padding-bottom: .15rem;
    background-color: #eeeeee;
    .select_a{
        background-color: #008573 !important;
        span{
            color: white !important;
        }
    }
    .pcd_item{
        width: 9.46666rem;
        margin: 0 auto .26666rem;
        background-color: #ffffff;
        box-shadow: 0 0 .10666rem 0 rgba(0, 0, 0, 0.17);
        border-radius: .13333rem;
        .title{
            width: 8.93333rem;
            height: 1.05rem;
            line-height: 1.05rem;
            text-align: left;
            margin: 0 auto;
            border-bottom: solid .01333rem #ebebeb;
            font-size: .37333rem;
            color: #000000;
        }
        .content{
            padding: .33333rem 0;
        }
        .one{
            a{
                display: inline-block;
                width: 1.84rem;
                height: 1.30666rem;
                margin: 0 .2rem .33333rem;
                padding-top: .15rem;
                background-color: #fcfcfc;
                border-radius: .13333rem;
                border: solid .02666rem #dbdbdb;
                font-size: 0;
                .txt_title{
                    display: block;
                    font-size: .35rem;
                    color: #333333;
                }
                .txt_num{
                    font-size: .26666rem;
                    color: #333333;
                    span{
                        font-size: .32rem;
                    }
                }
            }
        }
        .two{
            a{
                display: inline-block;
                width: 3.44rem;
                height: 1.30666rem;
                margin: 0 .45333rem .33333rem;
                padding-top: .15rem;
                background-color: #fcfcfc;
                border-radius: .13333rem;
                border: solid .02666rem #dbdbdb;
                font-size: 0;
                .txt_title{
                    display: block;
                    font-size: .35rem;
                    color: #333333;
                }
                .txt_num{
                    font-size: .26666rem;
                    color: #333333;
                    span{
                        font-size: .32rem;
                    }
                }
            }
        }
        .three{
            text-align: left;
            padding-left: .15rem;
            a{
                display: inline-block;
                width: 1.44rem;
                height: 1.30666rem;
                margin: 0 .2rem .33333rem;
                padding-top: .15rem;
                background-color: #fcfcfc;
                border-radius: .13333rem;
                border: solid .02666rem #dbdbdb;
                text-align: center;
                font-size: 0;
                .txt_title{
                    display: block;
                    font-size: .35rem;
                    color: #333333;
                }
                .txt_num{
                    font-size: .26666rem;
                    color: #333333;
                    span{
                        font-size: .32rem;
                    }
                }
            }
        }
        .four{
            a{
                display: inline-block;
                width: 2.64rem;
                height: 1.30666rem;
                margin: 0 .2rem .33333rem;
                padding-top: .15rem;
                background-color: #fcfcfc;
                border-radius: .13333rem;
                border: solid .02666rem #dbdbdb;
                text-align: center;
                font-size: 0;
                .txt_title{
                    display: block;
                    font-size: .35rem;
                    color: #333333;
                }
                .txt_num{
                    font-size: .26666rem;
                    color: #333333;
                    span{
                        font-size: .32rem;
                    }
                }
            }
        }
    }
}
</style>

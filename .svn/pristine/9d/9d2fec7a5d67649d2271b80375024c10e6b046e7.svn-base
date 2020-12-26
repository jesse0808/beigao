<template>
  <div class="OrderConfirm_box" v-if="showDialog">
    <div class="bg_div">
      <div class="oc_mainbox">
        <div class="oc_top_title">
          {{title}}
          <span class="iconfont icon-guanbi closeIcon" @click="_Cancel"></span>
        </div>
        <div class="oc_sure_textbox">
          <div class="head">您确定下注&ensp;{{qh}}？</div>
          <div class="data_item">彩种：&emsp;{{cz}}</div>
          <div class="data_item">期号：&emsp;{{qh}}</div>
          <!--        <div class="data_item list_item_title">-->
          <!--          <span>玩法</span><span>投注号码</span>-->
          <!--        </div>-->
          <!--        <div class="data_item list_item_title" v-for="(item, index) in shTextArr" :key="index">-->
          <!--          <span>{{item.name}}</span>-->
          <!--          <span>{{item.num}}</span>-->
          <!--        </div>-->
          <div class="">
            <div class="detBox">
              <div class="detItem" v-for="(item, index) in shTextArr" :key="index">
                {{item}}
              </div>
            </div>
          </div>
          <div class="data_item">总计<b style="color: #ff680a;">{{allNum}}</b>注，总共<b style="color: #ff680a;">{{money}}</b> 元
          </div>
        </div>
        <div class="oc_sure_btnbox">
          <div class="oc_sure" @click="_Confirm">确定</div>
          <div class="oc_exit" @click="_Cancel">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        props: {
            cz: {
                type: String
            },
            qh: {
                type: String | Number
            },
            money: {
                type: String | Number
            },
            shTextArr: {
                type: Array,
                default: []
            },
            confirm: {
                type: Function,
                default: null,
            },
            cancel: {
                type: Function,
                default: null,
            },
            allNum: {
              type: Number,
              required:true
            }
        },
        watch:{
            'shTextArr'(val){
            }
        },
        data() {
            return {
                title: '提示',
                showDialog: false,
            }
        },

        methods: {
            show() {
                this.showDialog = true
            },
            hide() {
                this.showDialog = false
            },
            _Confirm() {
                if (this.money > this.$store.state.userInfo.Balance) {
                    this.$message.error('您的可用余额不足，请重新选择');
                } else if (this.confirm) this.confirm()
                this.hide()
            },
            _Cancel() {
                if (this.cancel) this.cancel()
                this.hide()
            }

        },

    }
</script>
<style lang="scss">
  .OrderConfirm_box {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 3333;
    .bg_div{
      position: relative;
      width: 545px;
      height: 428px;
      padding: 56px 0 0 43px;
      background: url(../../static/img/betpour.png) no-repeat 0 0/100% 100%;
    }
    .oc_mainbox {
      width: 457px;
      background: #ffffff;
      border-radius: 5px;
      text-align: center;

      .oc_top_color {
        background: #2ba498;
        height: 3px;
      }

      .oc_top_title {
        text-align: left;
        color: #ffffff;
        background: #008573;
        line-height: 40px;
        position: relative;
        font-size: 16px;
        padding: 0 20px;

        .closeIcon {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 18px;
          cursor: pointer;
          width: 30px;
          height: 50px;
          transition: all .1s linear;
        }
      }
    }

    .oc_mainbox p {
      text-align: center;
      color: #232924;
      line-height: 24px;
      font-weight: bold;
    }

    .oc_sure, .oc_exit {
      width: 140px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;
      border-radius: 20px;
    }

    .oc_sure {
      color: white;
      background: #008573;
      margin-right: 10px;
    }

    .oc_exit {
      color: #9b9b9b;
      background-color: #efefef;
      border: solid 1px #d5d5d5;
    }

    .oc_sure_textbox {
      font-size: 14px;
      .head{
        line-height: 70px;
        font-size: 16px;
        color: #ff6c00;
        text-align: center;
        img{
          vertical-align: middle;
        }
      }
      .data_item{
        padding-left: 14px;
        line-height: 26px;
        text-align: left;
        font-size: 14px;
        text-indent: 10px;
      }
      .list_item_title{
        display: flex;
        justify-content: center;
        padding-left: 0;
        span{
          display: inline-block;
        }
        span:first-child{
          width: 40%;
          padding-left: 14px;
          /*text-align: center;*/
        }
        span:last-child{
          display: inline-block;
          width: 60%;
          /*text-align: center;*/
          overflow: hidden;
          word-break:break-all;
        }
      }
      .detBox {
        width: 402px;
        height: 80px;
        margin: 10px 0 10px 14px;
        border: 1px solid #ccc;
        overflow-y: auto;
        padding: 8px 5px;
        border-radius: 5px;
        background-color: #f7f7f7;
        .detItem {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: left;
        }
      }
    }

    .oc_sure_btnbox {
      border-top: 1px solid #ccc;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      width: 100%;
      overflow: hidden;
      padding: 10px 0;
    }
    .oc_sure_btnbox > div:hover{
      opacity: .9;
    }
  }

</style>


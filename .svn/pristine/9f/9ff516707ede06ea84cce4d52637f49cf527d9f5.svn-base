<template>
  <div class="order_cancel_box" v-if="showDialog">
    <div class="oc_mainbox">
      <div class="oc_top_title">
        {{title}}
        <span class="iconfont icon-guanbi closeIcon" @click="_Cancel"></span>
      </div>
      <div class="oc_sure_textbox">
        <slot name="content"></slot>
      </div>
      <div class="oc_sure_btnbox">
        <div class="oc_sure" @click="_Confirm">确认</div>
        <div class="oc_exit" @click="_Cancel">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        props: {
            confirm: {
                type: Function,
                default: null,
            },
            cancel: {
                type: Function,
                default: null,
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
                if (this.confirm) this.confirm()
                this.hide()
            },
            _Cancel() {
                if (this.cancel) this.cancel()
                this.hide()
            }
        }

    }
</script>
<style lang="scss">
  .order_cancel_box {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 3333;

    .oc_mainbox {
      height: 200px;
      width: 375px;
      position: absolute;
      left: 0;
      top: 0;
      margin: auto;
      bottom: 0;
      right: 0;
      background: #ffffff;
      border-radius: 5px;
      /*overflow: hidden;*/
      text-align: center;

      .oc_top_color {
        background: #008573;
        height: 3px;
      }

      .oc_top_title {
        color: #ffffff;
        background: #008573;
        line-height: 45px;
        position: relative;
        font-size: 16px;
        text-indent: 20px;
        text-align: left;

        .closeIcon {
          position: absolute;
          top: 0;
          right: 0;
          width: 40px;
          height: 45px;
          text-align: center;
          text-indent: 0;
          cursor: pointer;
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
      border-radius: 5px;
      width: 92px;
      height: 34px;
      line-height: 34px;
      cursor: pointer;
      font-size: 14px;
    }

    .oc_sure {
      color: white;
      background: #008573;
      margin-right: 10px;
    }
    .oc_sure_btnbox > div:hover{
      opacity: .9;
    }
    .oc_exit {
      border: 1px solid #008573;
      color: #008573;
    }

    .oc_sure_textbox {
      margin-top: 40px;
      font-size: 15px;
    }

    .oc_sure_btnbox {
      position: absolute;
      bottom: 0;
      border-top: 1px solid #ccc;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      width: 100%;
      overflow: hidden;
      padding: 10px 0;
    }
  }

</style>


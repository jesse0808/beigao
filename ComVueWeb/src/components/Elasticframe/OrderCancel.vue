<template>
  <div class="order_cancel_box" v-if="showDialog">
    <div class="oc_mainbox">
      <div class="oc_top_title window_title">
        {{title}}
        <span class="iconfont closeIcon" @click="_Cancel"><img src="../../assets/img/icon/window/close.png"></span>
      </div>
      <div class="warring_inco"><img src="../../assets/img/icon/window/warring.png"></div>
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
<style lang="scss" scoped>
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
      border-radius: 5px;
      /*overflow: hidden;*/
      text-align: center;

      .oc_top_color {
        background: #008573;
        height: 3px;
      }

      .oc_top_title {
        position: relative;
        width:100%;
        height: 45px;
        color: #ffffff;
        line-height: 45px;
        font-size: 16px;
        text-indent: 20px;
        text-align: left;
        border-radius: 10px 10px 0px 0px;

        .closeIcon {
          position: absolute;
          top: -18px;
          right: -18px;
          width: 40px;
          height: 40px;
          text-align: center;
          text-indent: 0;
          cursor: pointer;
          border-radius: 50%;
          box-shadow:-3px 5px 5px 0 rgba(0, 0, 0, 0.5);

          img{
            width:100%;
            height: 100%;
            transition: all .3s;
          }

          &:hover{

            img{
              transform:rotate(180deg);
            }
          }
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
      margin-right: 10px;
    }

    .oc_sure_btnbox > div:hover{
      opacity: .9;
    }
    
    .warring_inco{
      display: flex;
      justify-content: center;
      align-items: center;
      width:100%;
      height: 100px;
    }

    .oc_sure_textbox {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
    }

    .oc_sure_btnbox {
      display: flex;
      justify-content: center;
      width: 100%;
      overflow: hidden;
      padding: 20px 0;
      border-radius:0px 0px 10px 10px ;
    }
  }

</style>


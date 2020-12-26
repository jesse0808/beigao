<template>
    <!-- 投注状态 -->
    <div class="betting_frame_box success">
        <div class="bet_frame_mainbox">
            <div class="bet_top_title">提示<span class="iconfont icon-guanbi" @click="hide"></span></div>
            <div v-if="success">
                <img src="../../static/img/frame_success.png" alt=""/>
                <p>投注成功</p>
                <div class="bet_frame_sure" @click="hide">确定</div>
                <span class="bet_frame_text">{{time}}秒后自动关闭</span>
            </div>
            <div v-else class="bet_frame_fail">
                <span class="iconfont icon-fail"></span>
                <span>账户余额不足</span>
                <div class="bet_frame_sure" @click="hide">关闭</div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        success: true,
        time: 3
      }
    },
    methods: {
      hide() {
        this.$emit("bethide")
      }
    },
    watch: {
      success() {
        console.log('aaa')
      }
    },
    mounted() {
      let that = this
      setTimeout(()=>{
        that.hide()
      },3000)
    }
  }
</script>
<style>
    .betting_frame_box {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 88;
    }

    .success .bet_frame_mainbox {
        height: 270px;
        width: 376px;
        position: absolute;
        left: 0;
        top: 0;
        margin: auto;
        bottom: 0;
        right: 0;
        background: #ffffff;
        border-radius: 5px;
        text-align: center;
        z-index: 10;
    }

    .success .bet_frame_mainbox > .bet_top_title {
        text-align: left;
        color: #fff;
        padding-left: 20px;
        font-size: 16px;
        background: #008573;
        line-height: 45px;
        cursor: pointer;
    }

    .success .bet_frame_mainbox > .bet_top_title > span {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 45px;
        color: #ffffff;
        text-align: center;
    }

    .bet_frame_mainbox > div > img {
        width: 52px;
        height: 52px;
        margin-top: 34px;
    }

    .bet_frame_mainbox .bet_frame_fail img {
        margin-top: 28px;
    }

    .bet_frame_mainbox > div > p {
        text-align: center;
        color: #232924;
        font-size: 16px;
        font-weight: bold;
    }

    .bet_frame_mainbox .bet_frame_fail p {
        margin-top: 18px;
        font-weight: bold;
    }

    .betting_frame_box .bet_frame_sure {
        width: 140px;
        height: 40px;
        line-height: 38px;
        margin: 24px auto 0;
        color: #666666;
        font-size: 14px;
        background-color: #efefef;
        border: solid 1px #d5d5d5;
        border-radius: 20px;
        cursor: pointer;
    }

    .bet_frame_mainbox > div > span {
        color: #4a4f4b;
        font-size: 14px;
    }
    .icon-fail{
        display: block;
        color: #fc0018 !important;
        font-size: 70px !important;
    }
    .bet_frame_text{
        display: block;
        padding-top: 11px;
        font-size: 12px !important;
        color: #999999 !important;
    }
</style>


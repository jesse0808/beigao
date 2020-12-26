<template>
  <!-- 投注提示 -->
  <div class="betting_frame_box hint">
    <div class="bet_frame_mainbox">
      <div class="bet_top_title">提示<span @click="hide" class="iconfont icon-guanbi close_icon"></span></div>
      <img src="../../static/img/frame_warning.png"/>
      <p>请至少选择一组投注号码</p>
      <div class="bet_frame_sure" @click="hide">确定</div>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            hide() {
                this.$emit("bethide")
            }
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

  .hint .bet_frame_mainbox {
    height: 270px;
    width: 400px;
    position: absolute;
    left: 0;
    top: 0;
    margin: auto;
    bottom: 0;
    right: 0;
    background: #ffffff;
    border-radius: 5px;
    text-align: center;
  }

  .hint .bet_frame_mainbox > .bet_top_title {
    position: relative;
    width: 100%;
    height: 45px;
    text-align: left;
    color: #fff;
    background: #008573;
    line-height: 45px;
    padding: 0 20px;
    font-size: 14px;
    cursor: pointer;
  }
  .hint .bet_frame_mainbox > .bet_top_title > span{
    display: inline-block;
    position: absolute;
    top:0;
    right:0;
    width: 30px;
    height: 45px;
    font-size: 18px;
    color: #ffffff;
  }
  /*.hint .bet_frame_mainbox > .bet_top_title > span:hover{*/
  /*  top: -28px;*/
  /*  right: -28px;*/
  /*  width: 56px;*/
  /*  height: 56px;*/
  /*}*/
  .hint .bet_frame_mainbox > img {
    width: 52px;
    height: 52px;
    margin-top: 34px;
  }

  .hint .bet_frame_mainbox > p {
    text-align: center;
    color: #232924;
    margin-top: 20px;
    font-weight: bold;
  }

  .hint .bet_frame_sure {
    color: #666666;
    border-radius: 20px;
    width: 140px;
    height: 40px;
    background-color: #efefef;
    border: solid 1px #d5d5d5;
    margin: 24px auto 0;
    line-height: 38px;
    font-size: 14px;
    cursor: pointer;
  }
</style>


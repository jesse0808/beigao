<template>
    <div class="qipai-container" ref="minHeight">
        <div class="box_center">
            <img class="football_title" src="../../static/img/sport/football_title.png" alt="">
        </div>
        <div class="box_center game_box">
            <div class="hg_ty">
                <div class="div_img" @click="startGame(hg)">
                    <div class="div_logo">
                        <img src="../../static/img/sport/football_logo01.png" alt="">
                        <div>立即进入</div>
                    </div>
                </div>
                <div class="div_text">
                    <p>皇冠体育</p>
                    <p>巅峰赛事&ensp;王者归来</p>
                </div>
            </div>
            <div class="ss_ty">
                <div class="div_img" @click="startGame(ss)">
                    <div class="div_logo">
                        <img src="../../static/img/sport/football_logo02.png" alt="">
                        <div>立即进入</div>
                    </div>
                </div>
                <div class="div_text">
                    <p>三昇体育</p>
                    <p>各大赛事&ensp;一应俱全</p>
                </div>
            </div>
            <div class="sb_ty">
                <div class="div_img" @click="startGame(sb)">
                    <div class="div_logo">
                        <img src="../../static/img/sport/football_logo03.png" alt="">
                        <div>立即进入</div>
                    </div>
                </div>
                <div class="div_text">
                    <p>沙巴体育</p>
                    <p>最佳在线&ensp;体育博彩</p>
                </div>
            </div>
            <div class="qd_ty" style="display: flex;align-items: center;justify-content: center">
                <div style="color: #ffffff;text-align: center">
                    <p style="font-size: 20px;font-weight: bold;">敬请期待</p>
<!--                    <p style="font-size: 14px;">更多精彩&ensp;尽在贝捷</p>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {postAjax, getAjax} from "../../util/ajax.js"

  export default {
    data() {
      return {
        sb: {
          GameCode: '0',
          game: 5,
          plat: 1001
        },
        ss: {
          GameCode: 'SC',
          game: 15,
          plat: 1001
        },
        hg: {
          game: 16,
          plat: 1003
        }
      }
    },
    mounted() {
    },
    methods: {
      _initOpenLoading(isFlag = true) {
        this.loading = this.$loading({
          lock: true,
          text: `${isFlag ? '投注中' : '加载中'}...`,
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)'
        })
      },
      _initCloseLoading() {
        this.loading.close()
      },
      startGame(data) {
        let that = this;
        if (!localStorage.getItem('Authorization')) {
          this.$store.commit('setLoginAfter', true)
          return false;
        }
        let url = "/api/ThirdGame/StartGame";
        postAjax(url, data, 1).then(function (data) {
          if (data.IsSucess) {
            that.$confirm('将在新窗口打开游戏！', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success',
              center: true
            }).then(() => {
              window.open(data.Data);
            }).catch(() => {
              that.$message({
                type: 'warning ',
                message: '已取消游戏'
              });
            });
          } else {
            that.$message.error(data.Message);
          }
        })
      }
    },
  }
</script>

<style scoped>
    .qipai-container {
        position: relative;
        width: 100%;
        min-width: 1200px;
        height: 61.77vw;
        min-height: 860px;
        padding-top: 75px;
        background: url(../../static/img/sport/football_bg.jpg) no-repeat 0 0/100% 100%;
    }

    .football_title{
        display: block;
        width: 683px;
        height: 149px;
        margin: 0 auto 45px;
    }
    .game_box{
        display: flex;
        justify-content: space-between;
    }
    .game_box > div{
        position: relative;
        width: 292px;
        height: 562px;
        background-position: 0 0;
        background-size: 100% auto;
        background-repeat: no-repeat;
        z-index: 0;
    }
    .hg_ty{
        background-image: url(../../static/img/sport/hg.png);
    }
    .ss_ty{
        background-image: url(../../static/img/sport/ss.png);
    }
    .sb_ty{
        background-image: url(../../static/img/sport/sbty.png);
    }
    .qd_ty{
        background-image: url(../../static/img/sport/qd.png);
    }
    .game_box > div:hover .div_img{
        display: flex;
    }
    .div_img{
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 518px;
        background-color: rgba(4,123,109,.8);
        cursor: pointer;
        z-index: 2;
    }
    .div_logo > img{
        display: block;
        margin: 0 auto;
    }
    .div_logo > div{
        width: 142px;
        height: 46px;
        margin-top: 48px;
        line-height: 46px;
        background-color: #ffffff;
        border-radius: 23px;
        text-align: center;
        font-size: 18px;
        letter-spacing: 2px;
        color: #008573;
    }
    .div_text{
        position: absolute;
        top: 441px;
        left: 0;
        width: 100%;
        height: 77px;
        color: #ffffff;
        text-align: center;
        padding-top: 10px;
        background-color: rgba(0,0,0,.5);
        z-index: 1;
    }
    .div_text > p:first-child{
        font-size: 20px;
        font-weight: bold;
    }
    .div_text > p:last-child{
        font-size: 14px;
    }
</style>

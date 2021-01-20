<template>
    <div class="qipai-container" ref="minHeight">
        <ul class="box_center game_box">
            <li class="hg_ty">
                <div class="div_img" @click="startGame(hg)">
                    <div class="div_logo">
                        <img src="../../assets/img/sport/football_logo01.png" alt="">
                    </div>
                    <div class="sports_go">立即进入</div>
                </div>
            </li>
            <li class="ss_ty">
                <div class="div_img" @click="startGame(ss)">
                    <div class="div_logo">
                        <img src="../../assets/img/sport/football_logo02.png" alt="">
                    </div>
                    <div class="sports_go">立即进入</div>
                </div>
            </li>
            <li class="sb_ty">
                <div class="div_img" @click="startGame(sb)">
                    <div class="div_logo">
                        <img src="../../assets/img/sport/football_logo03.png" alt="">
                    </div>
                    <div class="sports_go">立即进入</div>
                </div>
            </li>
            <li class="qd_ty"></li>
        </ul>
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

<style lang="scss" scoped>
    .qipai-container {
        position: relative;
        width: 100%;
        min-width: 1200px;
        height: 48.65vw;
        min-height: 860px;
        padding-top: 75px;
        background: url(../../assets/img/sport/sports_bg.jpg) no-repeat 0 0/100% 100%;
    }

    .game_box{
        display: flex;
        justify-content:flex-start;

        li{
            position: relative;
            background-position: 0 0;
            background-size: 100% auto;
            background-repeat: no-repeat;
            z-index: 0;
            margin-left: 25px;

            &.hg_ty{
                width:250px;
                height: 299px;
                margin-left: -30px;
                background-image: url(../../assets/img/sport/hg.png);

                  .div_img{
                      top: 19px;
                      left:34px;
                  }
            }

            &.ss_ty{
                width:180px;
                height: 297px;
                margin-left: 0;
                background-image: url(../../assets/img/sport/ss.png);

                .div_img{
                    top: 17px;
                }
            }

            &.sb_ty{
                width:180px;
                height: 301px;
                background-image: url(../../assets/img/sport/sbty.png);

                .div_img{
                    top: 21px;
                }
            }

            &.qd_ty{
                width:192px;
                height: 280px;
                margin-top: 20px;
                background-image: url(../../assets/img/sport/qd.png);
            }

            &:hover{

                .div_img{
                    display: flex;
                }
            }

            .div_img{
                display: none;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                position: absolute;
                width: 180px;
                height: 280px;
                background: url(../../assets/img/sport/sports_cover.png) no-repeat 0 0/100% 100%;
                cursor: pointer;

                .sports_go{
                    width: 81px;
                    height: 20px;
                    margin-right: 0;
                    margin-top: 20px;
                    line-height: 20px;
                    background-color: #f2f2f2;
                    border-radius: 10px;
                    text-align: center;
                    font-size: 14px;
                    color: #008573;
                }
                
            }
        }
    }  
</style>

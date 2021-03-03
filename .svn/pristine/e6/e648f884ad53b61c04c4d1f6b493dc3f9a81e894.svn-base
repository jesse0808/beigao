<template>
    <div class="people_div" ref="minHeight">
        <!--操作区域-->
        <div class="box_center people-black-bg">
            <div class="pos_img">
                <img src="../../assets/img/video/classicmetal(bigsize).png" alt="">
            </div>
            <div class="people-handle">
                <div class="people_play_box">
                    <div class="people-handle-item" @click="startGame2(2)">
                        <img src="../../assets/img/video/ag.png" alt="AG"/>
                        <p>AG真人娱乐</p>
                    </div>
                    <div class="people-handle-item" @click="startGame2(3)">
                        <img src="../../assets/img/video/bbin.png" alt="BBIN"/>
                        <p>BBIN真人娱乐</p>
                    </div>
                    <div class="people-handle-item" @click="startGame2(4)">
                        <img src="../../assets/img/video/og.png" alt="OG"/>
                        <p>OG真人娱乐</p>
                    </div>
                </div>
                <div class="people_play_box">
                    <div class="people-handle-item" @click="startGame2(5)">
                        <img src="../../assets/img/video/shenbo.png" alt="申博"/>
                        <p>申博真人娱乐</p>
                    </div>
                    <div class="people-handle-item" @click="startGame2(6)">
                        <img src="../../assets/img/video/oubo.png" alt="欧博"/>
                        <p>欧博真人娱乐</p>
                    </div>
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
        pg: {
          2: {GameCode: "0", GameId: 2},
          3: {GameCode: "lobby", GameId: 3},
          4: {GameCode: "1", GameId: 4},
          5: {GameCode: "Sunbet_Lobby", GameId: 8},
          6: {GameCode: "101", GameId: 9},
        }
      }
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
      startGame2(pt) {
        let that = this
        if (!localStorage.getItem('Authorization')) {
          that.$store.commit('setLoginAfter', true)
          return false;
        }
        let url = "/api/ThirdGame/StartGame";
        let data = {
          GameCode: that.pg[pt].GameCode,
          game: that.pg[pt].GameId,
          plat: 1001
        };
        that._initOpenLoading(false)
        postAjax(url, data, 1).then((data) => {
          that._initCloseLoading()
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
        }).catch(() => {
          that._initCloseLoading()
        })
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
    .people_div{
        width: 100%;
        min-width: 1200px;
        height: 51.82vw;
        min-height: 860px;
        background: url(../../assets/img/video/pokerBG.jpg) no-repeat 0 0/100% 100%;
        padding-top:80px;

        .people-black-bg{
            display:table;

            .pos_img{
                float: left;
                display: flex;
                justify-content: center;
                width:942px;

                img {
                  width: 327px;
                  height: 80px;
                }
              
            }

            .people-handle {
                float: left;
                width:942px;
                margin-top: 50px;

                .people_play_box{
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;

                    .people-handle-item {
                        position: relative;
                        margin: 0 20px;
                        cursor: pointer;
                        transition: all .3s linear;

                        img {
                            width: 300px;
                            height: 215px;
                        }

                        p{
                            color: #ffffff;
                            text-align: center;
                        }

                        &:hover{
                            animation: gelatine 0.5s 1;

                            @keyframes gelatine {
                                from, to {
                                    -webkit-transform: scale(1, 1);
                                    transform: scale(1, 1);
                                }
                                25% {
                                    -webkit-transform: scale(0.9, 1.1);
                                    transform: scale(0.9, 1.1);
                                }
                                50% {
                                    -webkit-transform: scale(1.1, 0.9);
                                    transform: scale(1.1, 0.9);
                                }
                                75% {
                                    -webkit-transform: scale(0.95, 1.05);
                                    transform: scale(0.95, 1.05);
                                }
                            }
                        }  
                    }
                }
            }
        } 
    }  
</style>

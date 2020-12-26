<template>
    <div class="people_div" ref="minHeight">
        <!--操作区域-->
        <div class="people-black-bg">
            <div class="box_center pos_img">
                <img src="../../static/img/video/classicmetal(bigsize).png" alt="">
            </div>
            <div class="box_center people-handle">
                <div class="people_play_box">
                    <div class="people-handle-item" @click="startGame2(2)">
                        <img src="../../static/img/video/poker_AG.png" alt="AG"/>
                        <p>AG真人娱乐</p>
                    </div>
                    <div class="people-handle-item" @click="startGame2(3)">
                        <img src="../../static/img/video/poker_BBIN.png" alt="BBIN"/>
                        <p>BBIN真人娱乐</p>
                    </div>
                </div>
                <div class="people_play_box">
                    <div class="people-handle-item" @click="startGame2(4)">
                        <img src="../../static/img/video/poker_OG.png" alt="OG"/>
                        <p>OG真人娱乐</p>
                    </div>
                    <div class="people-handle-item" @click="startGame2(5)">
                        <img src="../../static/img/video/poker_SB.png" alt="申博"/>
                        <p>申博真人娱乐</p>
                    </div>
                    <div class="people-handle-item" @click="startGame2(6)">
                        <img src="../../static/img/video/poker_OB.png" alt="欧博"/>
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

<style>
    .people_div{
        width: 100%;
        min-width: 1200px;
        height: 56.4vw;
        min-height: 860px;
        background: url(../../static/img/video/pokerBG.jpg) no-repeat 0 0/100% 100%;
    }
    .people-handle {
        padding: 70px;
    }

    .pos_img > img {
        position: absolute;
        top: 42px;
        left: 0;
    }
    .people_play_box{
        display: flex;
        justify-content: center;
    }
    .people-handle-item {
        /*display: flex;*/
        /*justify-content: end;*/
        position: relative;
        /*width: 225px;*/
        margin: 0 55px;
        /*font-size: 0;*/
        cursor: pointer;
        transition: all .3s linear;
    }
    .people-handle-item:hover{
        animation: gelatine 0.5s 1;
    }
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
    .people-handle-item > img {
        width: 266px;
        height: 370px;
    }
    .people-handle-item > p{
        color: #ffffff;
        text-align: center;
    }
</style>

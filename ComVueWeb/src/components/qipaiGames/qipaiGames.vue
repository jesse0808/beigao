<template>
    <div class="qipai-container" ref="minHeight">
        <div class="box_center">
            <img class="qp_img1" src="../../static/img/qipai/chess01.png" alt="">
            <img class="qp_img2" src="../../static/img/qipai/kylogo.png" alt="">
            <img @click="startGame" class="qp_img3" src="../../static/img/qipai/kylogobth.png" alt="">
        </div>
    </div>
</template>

<script>
  import {postAjax} from "../../util/ajax.js"

  export default {
    data() {
      return {
        gameData: {}
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
      startGame() {
        if (!localStorage.getItem('Authorization')) {
          this.$store.commit('setLoginAfter', true)
          return false;
        }
        let that = this
        let url = "/api/ThirdGame/StartGame";
        let data = {
          GameCode: '0',
          game: 6,
          plat: 1001
        };
        postAjax(url, data, 1).then((data) => {
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
    mounted() {
    },
  }
</script>

<style scoped>
    .qipai-container {
        position: relative;
        width: 100%;
        min-width: 1200px;
        height: 44.84vw;
        min-height: 742px;
        background: url(../../static/img/qipai/chessBG.jpg) no-repeat 0 0/100% 100%;
    }
    .box_center {
        height: 100%;
    }
    .qp_img1{
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2px;
        margin: auto;
        width: 869px;
        height: 742px;
    }
    .qp_img2{
        position: absolute;
        bottom: 560px;
        left: 750px;
    }
    .qp_img3{
        position: absolute;
        bottom: 430px;
        left: 806px;
        cursor: pointer;
    }
</style>

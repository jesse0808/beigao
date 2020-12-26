<template>
  <div class="ds" ref="minHeight">
    <div class="box_center">
      <img class="ds_logo" src="../../static/img/dz/GameAthletics.png" alt="">
      <img class="ds_game2" src="../../static/img/dz/GameAthletics_2.png" alt="">
      <img class="ds_game1" src="../../static/img/dz/GameAthletics_1.png" alt="">
      <img class="ds_game3" src="../../static/img/dz/GameAthletics_3.png" alt="">
      <img class="ds_game4" src="../../static/img/dz/GameAthletics_title.png" alt="">
      <div class="ds_game5">
        <img src="../../static/img/dz/GameiconG.png" alt="">
        <img hidden src="../../static/img/dz/GameiconC.png" alt="">
      </div>
      <div class="ds_box">
        <div @click="toGame(gameData)" class="fy_div">
          <img src="../../static/img/dz/GameAthletics_btn1.png" alt="">
          <b>泛亚竞技</b>
          <p>各大赛事&ensp;一应俱全</p>
          <span>立即进入&ensp;></span>
        </div>
        <div class="qd_div">
          <b>更多精彩</b>
          <p>敬请期待</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {postAjax} from "../../util/ajax";
    import {SysKey} from "../../util/sysconfig";
    import {game} from "../../mixins/game";

    export default {
        name: "electron",
        mixins:[game],
        data() {
            return {
                gamesArr: [],
                name: '',
                PIndex: 1,
                PSize: 20,
                url: SysKey("ImgServerUrl").SysValue,
                gameData:{
                  GameCode: 'lobby',
                  GameId: '14',
                }
            }
        },
        created() {
            this.getGamesArr()
        },
        methods: {
            getGamesArr() {
                let that = this;
                let url = `api/ThirdGame/GetGameList?g=14&d=1`;
                let data = {
                    name: this.name,
                    PIndex: this.PIndex,
                    PSize: this.PSize,
                    Category:103
                };
                postAjax(url,data).then(function (data) {
                    if (data.IsSucess) {
                        that.gamesArr = data.Data.rows;
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
  .ds {
    width: 100%;
    min-width: 1200px;
    height: 51.71vw;
    min-height: 800px;
    background: url(../../static/img/dz/GameAthletics_bg.jpg) no-repeat 0 0/100% 100%;

    .box_center{
      .ds_logo{
        position: absolute;
        top: 21px;
        left: 0;
      }
      .ds_game1{
        position: absolute;
        top: 160px;
        left: 176px;
        z-index: 1;
      }
      .ds_game2{
        position: absolute;
        top: 71px;
        left: 397px;
        z-index: 3;
      }
      .ds_game3{
        position: absolute;
        top: 206px;
        left: 704px;
        z-index: 1;
      }
      .ds_game4{
        position: absolute;
        top: 425px;
        left: 146px;
        z-index: 3;
      }
      .ds_game5{
        position: absolute;
        top: 712px;
        left: 0;
        right: 0;
        margin: auto;
        width: 466px;
      }
      .ds_game5:hover img:first-child{
        display: none;
      }
      .ds_game5:hover img:last-child{
        display: block;
      }
      .ds_box{
        position: absolute;
        top: 520px;
        left: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        z-index: 4;
      }
      .ds_box > div{
        position: relative;
        width: 435px;
        height: 172px;
        margin: 0 10px;
        padding: 27px 0 0 24px;
        color: #ffffff;
      }
      .ds_box > div > b{
        font-size: 41px;
      }
      .ds_box > div > p {
        font-size: 25px;
      }
      .qd_div{
        background: url(../../static/img/dz/GameAthletics_btn2.png) no-repeat 0 0/100% 100%;
      }
      .fy_div{
        background-color: #008573;
        cursor: pointer;
      }
      .fy_div > img{
        position: absolute;
        right: 0;
        bottom: 0;
      }
      a{
        display: block;
        width: 1200px;
        margin: 0 0 30px;
        position: relative;
        cursor: pointer;
        transition: transform .2s ease-in-out;
        font-size: 0;
        &:hover{
          transform: scale(1.05);
          & img:first-child{
            display: none;
          }
          & img:last-child{
            display: block;
          }
        }
      }
    }
  }
</style>

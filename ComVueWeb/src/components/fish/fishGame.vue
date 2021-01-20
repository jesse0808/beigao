<template>
  <div class="fish_box" ref="minHeight" @touchmove="touchmove">
    <div class="box_center">
      <div class="lists-game">
        <ul>
          <li>
            <a @click="toGame(gameArr[0])">
              <div class="hotlink">
                <div class="cq90_logo"></div>
              </div>
              <div class="click_buttom">皇金渔场</div>
            </a>
          </li>
          <li>
            <a @click="toGame(gameArr[1])">
              <div class="hotlink">
                <div class="cq91_logo"></div>
              </div>
              <div class="click_buttom">皇金渔场2</div>
            </a>
          </li>
          <li>
            <a>
              <div class="hotlink">
                <div class="cq92_logo" @click="toGame(gameArr[2])"></div>
              </div>
              <div class="click_buttom">捕鱼王</div>
            </a>
          </li>
          <li>
            <a>
              <div class="hotlink">
                <div class="cq93_logo" @click="toGame(gameArr[3])"></div>
              </div>
              <div class="click_buttom">一炮捕鱼</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import {game} from "../../mixins/game";

    export default {
        mixins: [game],
        data() {
            return {
                gameArr: {
                    '0':{
                        name:'皇金渔场',
                        GameCode: "AB3",
                        GameId: 12
                    },
                    '1':{
                        name:'皇金渔场2',
                        GameCode: "AB1",
                        GameId: 12
                    },
                    '2':{
                        name:'捕鱼王',
                        GameCode: "6",
                        GameId: 2
                    },
                    '3':{
                        name:'一炮捕鱼',
                        GameCode: "AT01",
                        GameId: 12
                    }
                }
            }
        },
        methods: {
            touchmove(e) {

            }
        },
        mounted() {
            window.addEventListener('mousemove', this.touchmove);
        },
        beforeDestroy() {
            window.removeEventListener('mousemove', this.touchmove)
        }
    }
</script>

<style lang="scss" scoped>
  .fish_box {
    width: 100%;
    min-width: 1200px;
    height: 51.77vw;
    min-height: 675px;
    padding-top: 10vw;
    overflow-x: hidden;
    background: url(../../assets/img/fish/FishingGamebg.png) no-repeat 0 0/100% 100%;

    .box_center {
     
      .lists-game {
        margin: 0 auto;
        display: table;

        ul {
          display: inline-flex;
          list-style-type: none;
          padding: 0px;

          li {
            margin: 0 5px;
            width: 275px;
            position: relative;

            &:hover {
              animation: gelatine 0.5s 1;
            }

            a {
              width: 275px;

              .hotlink {
                width: 275px;
                height: 275px;
                cursor: pointer;

                .cq90_logo {
                  width: 275px;
                  height: 267px;
                  background: url(../../assets/img/fish/FishingGame_Yellow.png) no-repeat top center;
                  background-size: 100% 100%;
                  z-index: 2;
                }

                .cq91_logo {
                  width: 275x;
                  height: 261px;
                  background: url(../../assets/img/fish/FishingGame_Blue.png) no-repeat top center;
                  background-size: 100% 100%;
                  z-index: 2;
                }

                .cq92_logo{
                  width: 275px;
                  height: 276px;
                  background: url(../../assets/img/fish/FishingGame_Purple.png) no-repeat top center;
                  background-size: 100% 100%;
                  z-index: 2;
                }
                .cq93_logo{
                  width: 278px;
                  height: 274px;
                  background: url(../../assets/img/fish/FishingGame_Orange.png) no-repeat top center;
                  background-size: 100% 100%;
                  z-index: 2;
                }
              }
              .click_buttom{
                width: 128px;
                height: 41px;
                line-height: 35px;
                text-align: center;
                margin: 20px auto 0;
                font-size: 16px;
                color: #25746A;
                font-weight: bold;
                background: url(../../assets/img/fish/FishingGame_btn01.png) no-repeat 0 0/100% 100%;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
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
</style>

<template>
  <div class="fish_box" ref="minHeight" @touchmove="touchmove">
    <div class="box_center">
      <div class="two_fish"></div>
      <div class="three_fish"></div>
      <div class="four_fish"></div>
      <div class="one_fish"></div>
      <div class="five_fish"></div>
      <div class="six_fish"></div>
      <div class="seven_fish"></div>
      <div class="eight_fish"></div>
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
    height: 56.25vw;
    min-height: 675px;
    padding-top: 15vw;
    overflow-x: hidden;
    background: url(../../static/img/fish/FishingGamebg.jpg) no-repeat 0 0/100% 100%;

    .box_center {
      .two_fish {
        position: absolute;
        top: 171px;
        left: -142px;
        width: 142px;
        height: 78px;
        background: url(../../static/img/fish/FishingGame001.png) no-repeat top center;
        background-size: 100% 100%;
        z-index: 2;
        transform: translateY(0px);
        animation: float 4s ease-in-out infinite;
      }

      .three_fish {
        position: absolute;
        top: 24.84vw;
        left: -8%;
        width: 168px;
        height: 82px;
        background: url(../../static/img/fish/FishingGame006.png) no-repeat top center;
        background-size: 100% 100%;
        z-index: 2;
        transform: translateY(0px);
        animation: float 6s ease-in-out infinite;
      }

      .four_fish {
        position: absolute;
        top: 20vw;
        left: 6.25vw;
        width: 164px;
        height: 71px;
        background: url(../../static/img/fish/FishingGame002.png) no-repeat top center;
        background-size: 100% 100%;
        z-index: 2;
        transform: translateY(0px);
        animation: float 5s ease-in-out infinite;
      }
      .one_fish{
        position: absolute;
        top: 21vw;
        left: 23vw;
        width: 164px;
        height: 71px;
        background: url(../../static/img/fish/FishingGame004.png) no-repeat top center;
        background-size: 100% 100%;
        z-index: 2;
        transform: translateY(0px);
        animation: float 5s ease-in-out infinite;
      }
      .five_fish{
        position: absolute;
        top: 26vw;
        left: 45vw;
        width: 147px;
        height: 74px;
        background: url(../../static/img/fish/FishingGame003.png) no-repeat top center;
        background-size: 100% 100%;
        z-index: 2;
        transform: translateY(0px);
        animation: float 5s ease-in-out infinite;
      }
      .six_fish{
        position: absolute;
        top: 6vw;
        right: -10vw;
        width: 100px;
        height: 72px;
        background: url(../../static/img/fish/FishingGame005.png) no-repeat top center;
        background-size: 100% 100%;
        z-index: 2;
        transform: translateY(0px);
        animation: float 5s ease-in-out infinite;
      }
      .seven_fish{
        position: absolute;
        top: 15vw;
        right: -14.41vw;
        width: 126px;
        height: 57px;
        background: url(../../static/img/fish/FishingGame007.png) no-repeat top center;
        background-size: 100% 100%;
        z-index: 2;
        transform: translateY(0px);
        animation: float 5s ease-in-out infinite;
      }
      .eight_fish{
        position: absolute;
        top: 22.4vw;
        right: -17.7vw;
        width: 252px;
        height: 105px;
        background: url(../../static/img/fish/FishingGame008.png) no-repeat top center;
        background-size: 100% 100%;
        z-index: 2;
        transform: translateY(0px);
        animation: float 5s ease-in-out infinite;
      }
      .lists-game {
        margin: 0 auto;
        display: table;

        ul {
          display: inline-flex;
          list-style-type: none;
          padding: 0px;

          li {
            margin: 0 25px;
            width: 250px;
            position: relative;

            &:hover {
              animation: gelatine 0.5s 1;
            }

            a {
              width: 250px;
              .hotlink {
                width: 250px;
                height: 250px;
                cursor: pointer;
                .cq90_logo {
                  width: 250px;
                  height: 250px;
                  background: url(../../static/img/fish/FishingGame_Yellow.png) no-repeat top center;
                  background-size: 100% 100%;
                  z-index: 2;
                }
                .cq91_logo {
                  width: 250px;
                  height: 250px;
                  background: url(../../static/img/fish/FishingGame_Blue.png) no-repeat top center;
                  background-size: 100% 100%;
                  z-index: 2;
                }
                .cq92_logo{
                  width: 250px;
                  height: 250px;
                  background: url(../../static/img/fish/FishingGame_Purple.png) no-repeat top center;
                  background-size: 100% 100%;
                  z-index: 2;
                }
                .cq93_logo{
                  width: 250px;
                  height: 250px;
                  background: url(../../static/img/fish/FishingGame_Orange.png) no-repeat top center;
                  background-size: 100% 100%;
                  z-index: 2;
                }
              }
              .click_buttom{
                width: 122px;
                height: 46px;
                line-height: 46px;
                text-align: center;
                margin: 15px auto 0;
                font-size: 16px;
                color: #07141f;
                background: url(../../static/img/fish/FishingGame_btn01.png) no-repeat 0 0/100% 100%;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
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

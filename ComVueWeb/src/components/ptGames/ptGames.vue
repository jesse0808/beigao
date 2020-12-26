<template>
    <div class="change_style_ptgame" ref="minHeight">
        <!--艺游顶部海报-->
        <div class="pt-games-adPic">
            <img src="../../static/img/ptgames/jackpotBannerBG.png" alt=""/>
        </div>
        <!--艺游操作部分-->
        <div class="pt-black-bg">
            <div class="box_center ptGames-handel">

                <!--左侧按钮-->
                <div>
          <span :class="['ptGames-button',gameId == 7?'select_ptGames_nav':'']" @click="getGameList"
                data-id="7">PT</span>
                    <span :class="['ptGames-button',gameId == 10?'select_ptGames_nav':'']" @click="getGameList"
                          data-id="10">BetSoft</span>
                    <span :class="['ptGames-button',gameId == 11?'select_ptGames_nav':'']" @click="getGameList"
                          data-id="11">MG</span>
                    <span :class="['ptGames-button',gameId == 12?'select_ptGames_nav':'']" @click="getGameList"
                          data-id="12">CQ9</span>
                    <span :class="['ptGames-button',gameId == 13?'select_ptGames_nav':'']" @click="getGameList"
                          data-id="13">HAB</span>
                    <span :class="['ptGames-button',gameId == 2?'select_ptGames_nav':'']" @click="getGameList"
                          data-id="2">AG</span>
                </div>

                <!--右侧搜索-->
                <div class="search-ptgames-container">
                    <input type="text" v-model="name" @keydown.enter="searchGame" placeholder="查询游戏"/>
                    <span class="search-ptgames-pic" @click="searchGame"></span>
                </div>
            </div>
        </div>

        <!--艺游游戏部分-->
        <div class="pt-gray-bg">
            <div class="pt-games-container">
                <div class="pt-games-items-container" v-for="(item,index) in gamesArr" :key="index"  @click="noStatus(item)">
                    <div class="pt-games-items">
                        <div class="pt-games-item-pic">
                            <img :src="url+item.imgurl"/>
                        </div>
                        <div class="pt-games-item-title">
                            <span class="PGIT-name">{{item.cn_name}}</span>
                            <!--               <span class="PGIT-heart"></span>-->
                        </div>
                        <div class="pt-games-item-button">
                            <span v-if="!isLogin && (gameId==7 || gameId==10 || gameId==13)"
                                  @click="shiwanGame(item)">试玩</span>
                            <span v-else @click="startGame(item)">开始游戏</span>
                        </div>
                    </div>
                </div>
                <!--未找到游戏-->
                <div class="pt-games-noFind" v-if="!gamesArr || gamesArr.length==0">
                    <img src="../../static/img/ptgames/nofind.png"/>
                    <span class="pt-games-noFind-text">暂无收录游戏</span>
                </div>

            </div>
            <div style="text-align: center" v-if="gamesArr.length>0">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        background
                        prev-text="上一页"
                        next-text="下一页"
                        :current-page="PIndex"
                        :page-sizes="[20, 50, 100]"
                        :page-size="PSize"
                        layout="total, prev, pager, next, jumper"
                        :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
  import {postAjax, getAjax} from "../../util/ajax.js";
  import {SysKey} from "../../util/sysconfig";

  export default {
    data() {
      return {
        loadGame: false,
        ary: [1, 2, 3, 4, 5, 7, 6, 7, 3, 453, 2, 435, 2, 3, 4, 5, 7, 6, 7, 3, 453, 2, 435, 2, 3, 4, 5, 7, 6, 7, 3, 453, 2, 435],
        name: '',//游戏名
        PIndex: 1,//页数
        PSize: 15,//每页条数
        gameId: 7,//默认加载的游戏id
        gamesArr: [],//游戏数组
        total: 1,//总页数
        url: SysKey("ImgServerUrl").SysValue,
        userinfo: {}, //用户信息
        errorMassge: '',
      }
    },
    created() {
      this.gameId = this.$route.query.id || 7;
    },
    computed: {
      isLogin() {
        return this.$store.state.loginStatus
      }
    },
    watch: {
      'gameId'() {
        this.getGamesArr();
      },
      '$route'() {
        this.gameId = this.$route.query.id || 7;
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
      searchGame() {
        this.getGamesArr()
      },
      paddingClass(index) {//计算clas
        if (index % 5 == 0 || index == 0) {
          return "pt-buding-left"
        } else if ((index - 4) % 5 == 0 || (index - 4) == 0) {
          return "pt-buding-right"
        } else {
          return ""
        }
      },
      //得到游戏
      getGamesArr() {
        let that = this;
        let url = `api/ThirdGame/GetGameList?g=${this.gameId}&d=1`;
        let data = {
          name: this.name,
          PIndex: this.PIndex,
          PSize: this.PSize,
          Category: 102
        };
        postAjax(url, data).then(function (data) {
          if (data.IsSucess) {
            if (data.Data == null) {
              that.gamesArr = [];
              that.total = 0;
            } else {
              that.gamesArr = data.Data.rows;
              that.total = data.Data.total;
            }
          }
        })
      },
      handleSizeChange(e) {
        // console.log(1);
      },
      handleCurrentChange(e) {
        //回调为当前跳转的第几页
        this.PIndex = e;
        this.getGamesArr();
      },
      //按需拉取游戏数据
      getGameList(e) {
        this.name = '';
        this.gameId = e.target.dataset.id;
        this.PIndex = 1;
      },
      // 获取游戏账号
      // getGameInfo() {
      //     let that = this
      //     let url = "api/ThirdGame/GetGameAcc?game=7&plat=1002"
      //     postAjax(url)
      //         .then(function (data) {
      //             if (data.IsSucess) {
      //                 that.userinfo = data.Data
      //             } else {
      //                 that.errorMassge = data.Message
      //             }
      //         })
      // },
      noStatus(data){
        if (!localStorage.getItem('Authorization')) {
          this.shiwanGame(data)
        }else{
          this.startGame(data)
        }
      },
      shiwanGame(arr) {
        let that = this
        let url = "/api/ThirdGame/StartGame";
        let data = {
          GameCode: arr.GameCode,
          game: arr.GameId,
          plat: 1001,
          IsTest: true
        };
        this._initOpenLoading(false);
        postAjax(url, data, 1).then((data) => {
          if (data.IsSucess) {
            this._initCloseLoading();
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
            this._initCloseLoading();
            this.$message.error(data.Message);
          }
        })
      },
      toGame(arr) {
        let that = this
        if (!localStorage.getItem('Authorization')) {
          this.$store.commit('setLoginAfter', true);
          return;
        }
        let url = "/api/ThirdGame/StartGame";
        let data = {
          GameCode: arr.GameCode,
          game: arr.GameId,
          plat: 1001
        };
        this._initOpenLoading(false);
        postAjax(url, data, 1).then((data) => {
          if (data.IsSucess) {
            this._initCloseLoading();
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
            this._initCloseLoading();
            this.$message.error(data.Message);
          }
        })
      },
      // 开始游戏
      startGame(data) {
        if (!localStorage.getItem('Authorization')) {
          this.$store.commit('setLoginAfter', true)
          return false;
        }
        this.toGame(data);
      },
    },
    mounted() {
      // 获取游戏列表
      this.getGamesArr();
    },

  }
</script>
<style>
    .el-pagination button:disabled {
        background-color: rgba(0, 0, 0, 0) !important;
    }

    .el-pagination .btn-next, .el-pagination .btn-prev {
        background-color: rgba(0, 0, 0, 0) !important;
    }

    .change_style_ptgame .el-pager li:hover {
        color: #707070 !important;
        background-color: rgba(0,0,0,.1) !important;
    }

    .change_style_ptgame li.active {
        background: #008573 !important;
    }
    .change_style_ptgame button > span{
        width: 71px !important;
        height: 28px !important;
        background-color: #008573 !important;
        border-radius: 3px !important;
        color: #ffffff;
    }
    .el-pagination__editor.el-input .el-input__inner {
        color: #03a190;
    }

    .el-pagination__editor.el-input .el-input__inner:focus {
        outline: none;
    }

    .el-pagination__total, .el-pagination__jump {
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #707070;
    }
</style>
<style lang="scss" scoped>
    .change_style_ptgame {
        width: 100%;
        min-width: 1200px;
        padding-top: 17px;
        padding-bottom: 71px;
        background: url(../../static/img/ptgames/jackpotBG.jpg) no-repeat 0 0/100% 100%;
        .pt-games-adPic {
            width: 1200px;
            margin:  0 auto;
            font-size: 0;
            img {
                margin: 0 auto;
            }
        }

        .pt-black-bg {
            width: 1200px;
            height: 72px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);

            .ptGames-handel {
                padding: 17px 0 0 19px;

                div {
                    float: left;

                    .ptGames-button {
                        display: inline-block;
                        width: 112px;
                        height: 40px;
                        /*background-color: #008573;*/
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 39px;
                        letter-spacing: 0px;
                        color: #171717;
                        text-align: center;
                        border-radius: 20px;
                        cursor: pointer;

                        &:hover {
                            color: #ffffff;
                            background-color: #008573;
                        }
                    }

                    .select_ptGames_nav {
                        color: #ffffff;
                        background-color: #008573;
                    }
                }

                .search-ptgames-container {
                    float: right;
                    position: relative;
                    width: 306px;
                    height: 40px;
                    margin-right: 24px;

                    input {
                        width: 100%;
                        height: 100%;
                        padding: 0 40px 0 24px;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #707070;
                        border: solid 1px #ffffff;
                        border-radius: 20px;
                        background-color: #eeeeee;

                        &:focus {
                            outline: none;
                        }

                        &::placeholder {
                            font-weight: bold;
                        }
                    }

                    .search-ptgames-pic {
                        position: absolute;
                        top: 12px;
                        right: 5px;
                        padding: 10px 20px;
                        background-image: url(../../static/img/ptgames/ptsearch.png);
                        background-repeat: no-repeat;
                        background-size: 16px 16px;
                        background-position: 50%;
                        cursor: pointer;
                    }
                }

                &:after {
                    content: '';
                    clear: both;
                }
            }
        }

        .pt-gray-bg {
            width: 1200px;
            margin: 0 auto;
            padding: 0 5px 36px;
            background-color: #ececec;

            .pt-games-container {
                display: flex;
                width: 1224px;
                margin: 0 auto;
                justify-content: flex-start;
                flex-wrap: wrap;
                padding: 4px 0 27px;

                .pt-games-items-container {
                    width: 230px;
                    height: 206px;
                    margin: 20px 4px 0;
                    padding: 17px 15px 0;
                    background-color: #ffffff;
                    cursor: pointer;

                    .pt-games-items {
                        width: 100%;
                        height: 100%;
                        .pt-games-item-title {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 12px;
                            font-stretch: normal;
                            letter-spacing: 0;
                            color: #666666;
                            padding-top: 13px;
                            font-weight: bold;
                        }

                        .pt-games-item-pic {
                            width: 100%;
                            font-size: 0;

                            img {
                                width: 200px;
                                height: 132px;
                            }
                        }

                        .pt-games-item-button {
                            width: 100%;

                            span {
                                display: block;
                                width: 80px;
                                margin: 0 auto;
                                font-size: 12px;
                                font-weight: normal;
                                font-stretch: normal;
                                color: #707070;
                                text-align: center;
                            }
                        }
                    }

                    &:hover {
                        background-color: #008573;
                        box-shadow: 0px 0px 5px 0px rgba(132, 132, 132, 0.5);
                        .PGIT-name{
                            color: #ffffff;
                        }
                        .pt-games-item-button{
                            span{
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }
    }

    .pt-games-noFind {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 100px;
    }

    .pt-games-noFind img {
        width: 100px;
    }

    .pt-games-noFind-text {
        font-size: 13px;
        color: rgb(122, 122, 122);
        padding: 20px;
    }


</style>


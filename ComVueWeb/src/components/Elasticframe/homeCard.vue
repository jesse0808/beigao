<template>
  <!-- 首页公告组件 -->
  <div class="mask">
    <div class="card_mainbox" v-if="ary.length > 0">
      <!-- 标题 -->
      <div class="window_title top_title">
        <div class="title"><span><img src="../../assets/img/icon/head/notice_win.png"></span>最新公告</div>
        <div class="close" @click="hideCard"><img src="../../assets/img/icon/window/close.png"></div>
      </div>
      <!-- 内容 -->
      <div class="card_content">
        <el-tabs type="border-card" tab-position="left" class="card_main" v-model="selectTabs">
          <el-tab-pane v-for="(item, index) in ary" :key="index" :label="item.Title" :name="item.name">
            <div class="card_infobox">
              <div class="titlebox">
                <p class="title1 diandian" v-html="item.Title"></p>
                <p class="title2 diandian">{{ item.ModifyTime }}</p>
              </div>
              <div class="content_main" v-html="item.SnContent"></div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      panelShow: {
        type: Boolean,
      },
      ary: {
        type: Array,
      },
      selectNav: {
        type: String,
      },
    },
    watch: {
      selectNav(val) {
        this.selectTabs = this.selectNav;
      },
    },
    data() {
      return {
        selectTabs: "",
      };
    },
    methods: {
      hideCard() {
        this.$emit("hiddenDiv");
      },
    },
    created() {
      this.selectTabs = this.selectNav;
    },
  };
</script>

<style lang="scss" scoped>
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    overflow: hidden;

    .card_mainbox {
      width: 940px;
      height: 625px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      box-shadow: 0px 10px 26px 6px rgba(78, 97, 122, 0.5);

      .top_title {
        height: 50px;
        line-height: 50px;
        position: relative;
        border-radius: 10px 10px 0 0;
        

        .title{
          display: flex;
          justify-content:left;
          align-items: center;
          height: 100%;
          font-size: 18px;

          span{
            display: flex;
            align-items: center;
            margin-right: 7px;
            margin-top: 2px;

            img{
              width:20px;
            }
          }
        }

        .close{
          position: absolute;
          top: -15px;
          right: -15px;
          width: 40px;
          height: 40px;
          text-align: center;
          z-index: 1;
          cursor: pointer;
          border-radius: 50%;
          box-shadow:-1px 5px 5px 0 rgba(0, 0, 0, 0.5);

          img{
            width:100%;
            height: 100%;
            transition: all .3s;
          }

          &:hover{

            img{
              transform: rotate(180deg);
            }
            
          }
        }
      }

      /deep/ .card_content {
        background: #ffff;
        width: 100%;
        border-radius:0 0 10px 10px;
        overflow: hidden;

        

        .card_main {
          height: 583px;

          &.el-tabs--border-card{
            border: 0;
            
            .el-tabs__header{
              width: 250px;
              line-height: 25px;
              border-bottom: 0;

              &.is-left {
                border-right:0;
              }

              .el-tabs__item{

                .is-active{
                  background-color: #ffffff;
                  border-radius: 0;
                  color: #008573 !important;
                }

                &:not(.is-disabled){

                  &:hover {
                    background-color: #ffffff;
                    border-radius: 0;
                    color: #008573 !important;
                  }
                }

                .is-left {
                  border: 1px dashed #c4c4c5;
                  width: 224px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  height: 50px;
                  border: 1px solid #dcdcdc;

                  .is-active {
                    background-color: rgba(0, 0, 0, 0);
                  }
                }
              }

              .el-tabs__nav-scroll{
                overflow-y: auto !important;

                .el-tabs__nav {
                  height: 100%;

                  .el-tabs__item {
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    text-align: center !important;
                    font-weight: 400;
                    padding: 0 10px;
                    margin: 0;
                    transition: all .1s;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    border-top: 0;

                    &.is_left{
                      border: 0;
                    }
                  }
                }

                &::-webkit-scrollbar {
                    width: 2px;
                }

                &::-webkit-scrollbar-track {
                    border-radius: 0;
                }

                &::-webkit-scrollbar-thumb {
                    width:2px;
                    height: 50px !important;
                    border-radius: 5px;
                    transition: all .3s;
                }
              }
            }
          }

          .el-tabs__content {
            padding: 0px;

            .titlebox {
              text-align: center;
              padding: 22px 0 5px;

              .title1 {
                font-size: 24px;
              }

              .title2 {
                margin-top: 5px;
                font-size: 14px;
              }
            }

            .content_main {
              padding: 25px;
              font-size: 14px;
              text-indent: 33px;
              line-height: 24px;
              height: 460px;
              overflow-y: auto;
            }
          }
        }
      }
    }

    .is-left{
      .is-active {
        color: #008573;
      }
    }
  }
</style>


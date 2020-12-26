<template>
  <!-- 首页公告组件 -->
  <div class="mask">
    <div class="card_mainbox" v-if="ary.length>0">
      <!-- 标题 -->
      <div class="top_title">
        <p><span class="iconfont icon-lingdang"></span>最新公告</p>
        <span class="iconfont icon-guanbi" @click="hideCard"></span>
      </div>
      <!-- 内容 -->
      <div class="card_content">
        <el-tabs type="border-card" tab-position="left" class="card_main" v-model="selectTabs">
          <el-tab-pane v-for="(item,index) in ary" :key="index" :label="item.Title" :name="item.name">
            <div class="card_infobox">
              <div class="titlebox">
                <p class="title1 diandian" v-html="item.Title"></p>
                <p class="title2 diandian">{{item.ModifyTime}}</p>
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
                type: Boolean
            },
            ary: {
                type: Array
            },
            selectNav:{
                type: String
            }
        },
        watch:{
          selectNav(val){
            this.selectTabs = this.selectNav
          }
        },
        data() {
            return {
                selectTabs:''
            }
        },
        methods: {
            hideCard() {
                this.$emit('hiddenDiv')
            }
        },
        created() {
          this.selectTabs = this.selectNav
        }
    }
</script>
<style>
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .card_mainbox {
    width: 940px;
    height: 632px;
    position: absolute;
    border-radius: 8px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .top_title {
    background-color: #008573;
    height: 50px;
    line-height: 50px;
    color: white;
    padding-left: 20px;
    font-size: 16px;
    position: relative;
  }

  .top_title > span {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    text-align: center;
    z-index: 1;
    cursor: pointer;
  }
  .card_content {
    background: #ffff;
    width: 100%;
  }
  .card_content .el-tabs__nav-scroll{
    overflow-y: auto !important;
  }

  .card_main {
    height: 594px;
  }

  /* element-ui 内置样式修改*/
  .el-tabs__header {
    line-height: 25px;
  }

  .card_content .card_main .el-tabs__item {
    line-height: 50px;
    text-align: center !important;
    width: 224px;
    height: 50px;
    color: #232924;
    border-bottom: 1px dashed #c4c4c5;
  }

  .card_content .card_main .el-tabs__item:hover {
    color: #008573 !important;
    background-color: #fff !important;
  }

  .el-tabs--left .el-tabs__header.is-left {
    margin-right: 0px;
    background-color: #f3f3f3 !important;
  }

  .mask .el-tabs__nav .is-active {
    color: #008573 !important;
    background: #ffffff !important;
  }
  .mask .el-tabs__nav .is-active:hover{
    color: #008573 !important;
  }
  .el-tabs--left.el-tabs--border-card .el-tabs__item.is-left {
    border: 1px dashed #c4c4c5;
    width: 224px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mask .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active,.mask .el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    background-color: #ffffff;
    border-radius: 0;
    color: #008573 !important;
  }
  .el-tabs__nav {
    height: 100%;
  }

  .mask .el-tabs--border-card > .el-tabs__content {
    padding: 0px;
    width: 700px;
    height: 592px;
    box-shadow: -3px 0 6px -1px #dcdcdc;
  }

  .titlebox {
    /*border-bottom:1px dashed #c4c4c5;*/
    text-align: center;
    padding: 22px 0 5px;
    line-height: 22px;
  }

  .titlebox .title1 {
    font-size: 22px;
    color: #000000;
  }

  .titlebox .title2 {
    margin-top: 10px;
    font-size: 14px;
    color: #868686;
  }

  .content_main {
    padding: 25px;
    font-size: 14px;
    color: #707070;
    text-indent: 33px;
    line-height: 24px;
    height: 435px;
    overflow-y: scroll;
  }

  .user_btn_box {
    text-align: right;
    font-size: 0;
    white-space: nowrap;
  }

  .user_btn_box a:first-child {
    margin-right: 15px;
  }

  .el-tabs--left.el-tabs--border-card .el-tabs__item.is-left {
    height: 50px;
    border: 1px solid #dcdcdc;
  }
  .mask .el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active{
    background-color: rgba(0,0,0,0);
  }
  .el-tabs--left.el-tabs--border-card .el-tabs__header.is-left{
    border-right: 1px solid #dcdcdc;
  }
  .is-left .is-active{
    color: #008573;
  }
  .mask .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active, .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
    background-color: #fff;
    color: #008573 !important;
  }
</style>


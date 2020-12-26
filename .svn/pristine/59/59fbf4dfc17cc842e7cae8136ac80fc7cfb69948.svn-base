<template>
  <!-- 龙虎斗游戏组件 -->
  <div class="Dragon_Tiger_box cf" v-if="gameid == 93">
    <!--  dragon_select -->
    <a class="dragon_itembox_big" v-for="(item,index) in gameary" :key="index"
       :data-state="item.state" @click="selectGame" :data-index="index">
      <h3 :class="[item.state=='true'?'dragon_select big_icon':'']">{{item.name}}</h3>
    </a>
  </div>
  <div class="Dragon_Tiger_box cf" v-else>
    <!--  dragon_select -->
    <a class="dragon_itembox" v-for="(item,index) in gameary" :key="index"
       :data-state="item.state" @click="selectGame" :data-index="index">
      <h3 :class="[item.state=='true'?item.selectNav:item.unselectNav]"></h3>
      <p>￥{{item.odds}}</p>
    </a>
  </div>
</template>
<script>
    export default {
        props: {
            gameary: {
                type: Array,
                required: true
            },
            gameid: {
                type: Number,
                required: true
            }
        },
        watch:{
            'gameary'(val){
                console.log(this.gameary)
            }
        },
        data() {
            return {
                selectAry: [] //选择玩法后返回父组件数组
            }
        },
        methods: {
            // 选中龙虎斗数组
            selectGame(e) {
                let that = this;
                let indexs = e.currentTarget.dataset.index
                let sta = e.currentTarget.dataset.state
                if (sta == "false") {
                    that.gameary[indexs].state = "true"
                    that.selectAry.push(that.gameary[indexs].name)

                } else if (sta == "true") {
                    that.gameary[indexs].state = "false"
                    let ids = that.selectAry.indexOf(that.gameary[indexs].name)
                    if (ids > -1) {
                        that.selectAry.splice(ids, 1)
                    }
                }
                this.$emit("setdata", that.selectAry)
                this.setNum()
            },
            //设置注数
            setNum() {
                this.$emit("setbet", this.selectAry.length)
            }
        }
    }
</script>
<style>
  .Dragon_Tiger_box {
    width: 100%;
    padding: 15px 20px 0 13px;
  }

  .dragon_itembox_big > h3 {
    width: 146px;
    height: 48px;
    /*background-color: #ececec;*/
    border-radius: 5px;
    /*border: solid 1px #ddd8d4;*/
    margin: 0 auto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 48px;
    text-align: center;
    letter-spacing: 1px;
    color: #000000;
    background: url(../../static/img/gametype/lhdbg_icon.png) no-repeat 0 0/cover;
  }

  .dragon_itembox,.dragon_itembox_big {
    float: left;
    margin: 0 7px 15px;
    text-align: center;
    line-height: 24px;
    padding: 7px 0;
    color: #18191a;
    cursor: pointer;
  }

  .dragon_itembox > h3 {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border-radius: 100%;
    /*font-size: 22px;*/
    /*font-weight: normal;*/
    /*font-stretch: normal;*/
    /*line-height: 58px;*/
    /*text-align: center;*/
    /*letter-spacing: 2px;*/
    /*color: #707070;*/
    /*background-color: #ececec;*/
    /*border: solid 1px #d0d0d0;*/
  }

  .dragon_itembox > p {
    margin-top: 8px;
    font-size: 12px;
    color: #9b9b9b;
  }
  /*.dragon_itembox_big > h3:hover{*/
  /*  color: white;*/
  /*  background: #008573;*/
  /*}*/
  .Dragon_Tiger_box .dragon_select {
    background: #008573;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
    color: white;
  }

  .Dragon_Tiger_box .dragon_select p {
    color: white;
  }
  .Dragon_Tiger_box .loong_icon{
    background: url(../../static/img/gametype/loong.png) no-repeat 0 0/cover;
  }
  .Dragon_Tiger_box .unlong_icon{
    background: url(../../static/img/gametype/unloong.png) no-repeat 0 0/cover;
  }
  .Dragon_Tiger_box .tiger_icon{
    background: url(../../static/img/gametype/tiger.png) no-repeat 0 0/cover;
  }
  .Dragon_Tiger_box .untiger_icon{
    background: url(../../static/img/gametype/untiger.png) no-repeat 0 0/cover;
  }
  .Dragon_Tiger_box .and_icon{
    background: url(../../static/img/gametype/and.png) no-repeat 0 0/cover;
  }
  .Dragon_Tiger_box .unand_icon{
    background: url(../../static/img/gametype/unand.png) no-repeat 0 0/cover;
  }
</style>



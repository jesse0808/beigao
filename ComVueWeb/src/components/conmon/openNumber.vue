<template>
  <div v-if="$route.query.index == 5" class="lottery_box">
    <div class="open_numver" v-if="dataArray.state">
      <div>
        <ul :class="['commonam',showData[0].state?'pause':'',showData[0].class]">
          <li v-for="(val) in qiuarr">{{val.name}}</li>
        </ul>
      </div>
      <div class="symbol_font">+</div>
      <div>
        <ul :class="['commonam',showData[1].state?'pause':'',showData[1].class]">
          <li v-for="(val) in qiuarr">{{val.name}}</li>
        </ul>
      </div>
      <div class="symbol_font">+</div>
      <div>
        <ul :class="['commonam',showData[2].state?'pause':'',showData[2].class]">
          <li v-for="(val) in qiuarr">{{val.name}}</li>
        </ul>
      </div>
      <div class="symbol_font">=</div>
      <div>
        <ul :class="['commonam',showData[3].state?'pause':'']">
          <li v-for="(val) in qiuarr">{{showData[3].state ? showData[3].name :val.name}}</li>
        </ul>
      </div>
    </div>
    <div class="open_numver" v-else>
      <div>
        <ul class="commonam">
          <li v-for="(val) in qiuarr">{{val.name}}</li>
        </ul>
      </div>
      <div class="symbol_font">+</div>
      <div>
        <ul class="commonam">
          <li v-for="(val) in qiuarr">{{val.name}}</li>
        </ul>
      </div>
      <div class="symbol_font">+</div>
      <div>
        <ul class="commonam">
          <li v-for="(val) in qiuarr">{{val.name}}</li>
        </ul>
      </div>
      <div class="symbol_font">=</div>
      <div>
        <ul class="commonam">
          <li v-for="(val) in qiuarr">{{val.name}}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="lottery_box" v-else>
    <div class="open_numver" v-if="dataArray.state">
      <div class="numver_item" v-for="(item,index) in showData" :key="index">
        <ul :class="[$route.query.index == 3?'eleven_am':'commonam',item.state?'pause':'',item.class]">
          <li v-for="(val) in qiuarr">{{val.name}}</li>
        </ul>
      </div>
    </div>
    <div class="open_numver" v-else>
      <div class="numver_item" v-for="(item,index) in showData" :key="index">
        <ul :class="$route.query.index == 3 ?'eleven_am':'commonam'">
          <li v-for="(val) in qiuarr">{{val.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "openNumber",
        props: {
            dataArray: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                showData:[],
                eleven:[
                    {
                        name:'00',
                        class:'one'
                    },{
                        name:'01',
                        class:'two'
                    },{
                        name:'02',
                        class:'three'
                    },{
                        name:'03',
                        class:'four'
                    },{
                        name:'04',
                        class:'five'
                    },{
                        name:'05',
                        class:'six'
                    },{
                        name:'06',
                        class:'seven'
                    },{
                        name:'07',
                        class:'eight'
                    },{
                        name:'08',
                        class:'nine'
                    },{
                        name:'09',
                        class:'ten'
                    },{
                        name:'10',
                        class:'eleven'
                    },{
                        name:'11',
                        class:'twelve'
                    },
                ],
                timearr:[
                    {
                        name:0,
                        class:'one'
                    },{
                        name:1,
                        class:'two'
                    },{
                        name:2,
                        class:'three'
                    },{
                        name:3,
                        class:'four'
                    },{
                        name:4,
                        class:'five'
                    },{
                        name:5,
                        class:'six'
                    },{
                        name:6,
                        class:'seven'
                    },{
                        name:7,
                        class:'eight'
                    },{
                        name:8,
                        class:'nine'
                    },{
                        name:9,
                        class:'ten'
                    }
                ],
                qiuarr:[
                    {
                        name:0,
                        class:'one'
                    },{
                        name:1,
                        class:'two'
                    },{
                        name:2,
                        class:'three'
                    },{
                        name:3,
                        class:'four'
                    },{
                        name:4,
                        class:'five'
                    },{
                        name:5,
                        class:'six'
                    },{
                        name:6,
                        class:'seven'
                    },{
                        name:7,
                        class:'eight'
                    },{
                        name:8,
                        class:'nine'
                    },{
                        name:9,
                        class:'ten'
                    }
                ]
            }
        },
        created(){
            if (this.$route.query.index == 3){
                this.qiuarr = this.eleven;
            }else{
                this.qiuarr = this.timearr;
            }
        },
        watch: {
            'dataArray'(val) {
                let that = this;
                if (val.state){
                    if (that.$route.query.index == 5){
                        that.showData = val.arr.map((item,index)=>{
                            if (index < 3){
                                return {
                                    name:item,
                                    class:that.qiuarr[Number(item)].class,
                                    state:false
                                }
                            } else {
                                return {
                                    name:item,
                                    state:false
                                }
                            }
                        })
                    }else{
                        that.showData = val.arr.map((item)=>{
                            return {
                                name:item,
                                class:that.qiuarr[Number(item)].class,
                                state:false
                            }
                        })
                    }
                    that.animationProcessing();
                }else{
                    that.showData = val.arr;
                }

            }
        },
        methods:{
            animationProcessing(){
                this.showData.forEach((item,index)=>{
                    setTimeout(()=>{
                        item.state = true;
                    },1000 * (index + 1))
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
  .lottery_box{
    width: auto;
  }
  .open_numver {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    width: auto;

    div {
      position: relative;
      width: 56px;
      height: 56px;
      text-align: center;
      line-height: 56px;
      cursor: pointer;
      background: url(../../static/img/count/btn_04.png) no-repeat 0 0/100% 100%;
      border-radius: 100%;
      margin: 0 6px;
      /*box-shadow: 0 0 10px 0 #ffffff;*/
      overflow: hidden;

      ul {
        position: absolute;
        list-style: none;
        width: 100%;
        /*height: 560px;*/
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        li {
          width: 56px;
          height: 56px;
          text-align: center;
          line-height: 56px;
          font-size: 30px;
          color: #008573;
        }
      }
    }
  }
  .commonam{
    animation: gundong 1s linear infinite reverse;
  }
  @keyframes gundong {
    0% {
      top: 0;
    }
    100% {
      top: -504px;
    }
  }
  @keyframes elevenam {
    0% {
      top: 0;
    }
    100% {
      top: -616px;
    }
  }

  .one {
    top: 0;
  }

  .two {
    top: -56px !important;
  }

  .three {
    top: -112px !important;
  }

  .four {
    top: -168px !important;
  }

  .five {
    top: -224px !important;
  }

  .six {
    top: -280px !important;
  }

  .seven {
    top: -336px !important;
  }

  .eight {
    top: -392px !important;
  }

  .nine {
    top: -448px !important;
  }
  .ten{
    top: -504px !important;
  }
  .eleven{
    top: -560px !important;
  }
  .twelve{
    top: -616px !important;
  }
  .pause {
    animation: none !important;
    animation-play-state: paused !important;
  }
  .eleven_am{
    animation: elevenam 1.2s linear infinite reverse;
  }
  .symbol_font{
    width: auto !important;
    margin: 0 4px;
    font-size: 36px;
    color: #ffffff;
    background: rgba(0,0,0,0) !important;
    box-shadow:none !important;
  }
</style>

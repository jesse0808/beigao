<template>
    <div class="count__time__box box_h">
        <span>{{hh}}</span>
        <span>{{h}}</span>
        <b :class="showb?'':'font_color'">:</b>
        <span>{{mm}}</span>
        <span>{{m}}</span>
        <b :class="showb?'':'font_color'">:</b>
        <span>{{ss}}</span>
        <span>{{s}}</span>
    </div>
</template>

<script>
  export default {
    props: {
      time: {
        type: Object,
        required: true
      },
    },
    name: "countDown",
    data() {
      return {
        hh: 0,//开奖倒计时小时十位
        h: 0,//
        mm: 0,
        m: 0,
        ss: 0,
        s: 0,
        countTime: 0,
        showb: true,//显示时间点
      }
    },
    watch: {
      'time'(val) {
        clearInterval(this.setTimeFun);
        if ( val.state){
          this.countTime = val.time;
          this.setInervalue();
          this.sscopenTimeDispose();
        }
      },
      'countTime'(val) {
        if (val === 0) {
          this.upTime()
        }
      }
    },
    methods: {
      upTime(){
        let that = this
        this.$emit('upTimeData');
        // if (this.countTime < 1){
        //   setTimeout(()=>{
        //     that.upTime()
        //   },5000)
        // }
      },
      //生成时间执行
      sscopenTimeDispose() {
        let that = this;
        that.setTimeFun = setInterval(() => {
          let num = Number(that.countTime);
          if (num > 0) {
            that.countTime -= 1;
            that.setInervalue();
          } else {

          }
        }, 1000)
      },
      //时间处理
      setInervalue() {
        let that = this;
        let num = Number(that.countTime);
        let timeh = Math.floor(num / 3600);//小时
        let minute = Math.floor(num / 60) - timeh * 60;//分钟
        let timem = Number(num % 60);//秒
        that.hh = Math.floor(Number(timeh) / 10);
        that.h = Number(timeh) % 10;
        that.mm = Math.floor(Number(minute) / 10);
        that.m = Number(minute) % 10;
        that.ss = Math.floor(Number(timem) / 10);
        that.s = Number(timem) % 10;
      },
      showHideb() {
        let that = this;
        that.showSetIner = setInterval(() => {
          that.showb = !this.showb;
        }, 500)
      }
    },
    beforeDestroy() {
      clearInterval(this.setTimeFun);
      clearInterval(this.showSetIner);
    },
    mounted() {
      this.showHideb();
    }
  }
</script>

<style lang="scss" scoped>
    .count__time__box {
        span:first-child {
            margin-left: 0;
        }

        span {
            display: inline-block;
            width: 40px;
            height: 56px;
            margin-left: 6px;
            background: url(../../static/img/count/btn_03.png) no-repeat 0 0/100% 100%;
            border-radius: 4px;
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 56px;
            text-align: center;
            color: #ffffff;
        }

        b {
            margin-left: 6px;
            font-size: 40px;
            font-stretch: normal;
            color: #ffffff;
            line-height: 56px;
            font-weight: bold;
            text-align: center;
            margin-top: -12px;
        }
    }
</style>

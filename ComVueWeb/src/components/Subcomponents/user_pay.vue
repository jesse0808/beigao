<template>
    <div class="user_pay">
        <div class="quick_content_box3 box_h">
            <div class="quick_user_opration">
                <div class="quick_user_inputbox box_h">
                    <!-- 投注倍数 -->
                    <div class='quick_user_input1 box_h' style="margin-right: 0;">
                        <span>共&nbsp;<strong v-text="betnum" style="color: #ff680a"/>&nbsp;注</span>
                        <div class="comput_flod">
                            <button class="quick_reduce" @click="quickReduce"/>
                            <div @mouseleave="hideMagni" style="z-index: 1">
                                <input type="text" v-model="Magnification" @click="showArrow" @input="userInput"/>
                                <div class="arrow_bottom_box" v-if="arrowBot">
                                  <span :data-value="item" v-for="(item,index) in MagniAry" :key="index"
                                        @click="selectMagni">{{item}}</span>
                                </div>
                            </div>
                            <button class="quick_add" @click="quickAdd"/>
                        </div>
                        <span>&ensp;倍</span>
                    </div>
                    <!-- 模式 -->
                    <div class="quick_user_input2 box_h">
                        <!--                        <select v-model="mountName" @change="SelectMount">-->
                        <!--                            <option v-for="(item,index) in mounttype" :key="index" :data-id="index"-->
                        <!--                                    :data-num="item.Rate">-->
                        <!--                                {{item.Name}}-->
                        <!--                            </option>-->
                        <!--                        </select>-->
                        <div :class="[selectId == item.Id?'selected':'']" v-for="(item,index) in mounttype" @click="SelectMount(item)" :key="index">
                            {{item.Name}}
                        </div>
                        <span>&emsp;共&ensp;<strong style="color:#ff6c00;" v-text="betmoney.toFixed(3)"/>&ensp;元,</span>
                        <span>账户余额：<strong style="color:#ff6c00;">{{parseFloat(balance).toFixed(3)}}</strong>元</span>
                    </div>
                    <!-- 奖金调节 -->
                    <!--          <div class="quick_user_input3 box_h">-->
                    <!--            <span>奖金调节：</span>-->
                    <!--            <select @change="adjustMent">-->
                    <!--              <option v-for="(item,index) in userselect" :key="index" :value="index">{{item}}%</option>-->
                    <!--            </select>-->
                    <!--          </div>-->
                </div>
            </div>
            <div class="user_btn_box box_flex">
                <a class="add_num" href="javascript:void(0)" @click="changeNum">添加号码</a>
                <a href="javascript:void(0)" class="direct_bet" @click="Dirbet">一键投注</a>
            </div>
        </div>

<!--        <div class="quick_payfor_box">-->
<!--            <span>您选择了&nbsp;<strong v-text="betnum"/>&nbsp;注，</span>-->
<!--            <span>共<strong v-text="betmoney.toFixed(3)"/>元，</span>-->
<!--            <span>平台余额：<strong>{{parseFloat(balance).toFixed(3)}}</strong>元</span>-->
<!--        </div>-->
    </div>
</template>
<script>
  export default {
    props: {
      betnum: {
        type: Number,
        required: true
      },
      betmoney: {
        type: Number,
        required: true
      },
      userselect: {
        type: Array,
        required: true
      },
      mounttype: {
        type: Array,
        required: true
      },
      balance: {
        type: Number,
        required: true
      },
      mult: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        mountName: '2元',//选择的下注金额单位
        arrowBot: false, //下拉框状态
        Magnification: this.mult, //倍率
        MagniAry: ["1", "5", "10", "15", "20"], //选择倍数
        selectId:0,//默认选中模式
      }
    },
    created() {
      window.eventBus.$on('addNum2Allin', () => {
        this.allBet()
      })
      this.$nextTick(()=>{
        this.selectId = this.mounttype[0].Id
        this.$emit("typeset", this.mounttype[0].Name)//默认选中两元
      })
    },
    methods: {
      resetData(){
        let that = this;
        // that.$nextTick(()=>{
        //   that.selectId = that.mounttype[0].Id
        //   that.$emit("typeset", this.mounttype[0].Name)//默认选中两元
        // })
      },
      // 显示下拉框
      showArrow() {
        this.arrowBot = true
      },
      hideMagni() {
        this.arrowBot = false
      },
      //选择倍率
      selectMagni(e) {
        this.Magnification = parseInt(e.target.dataset.value)
        this.arrowBot = false
        this.$emit("gamemultiply", this.Magnification)
      },
      //奖金调节
      adjustMent(e) {
        let that = this
        let value = e.target.value
        this.$emit("bonus", value)
      },
      //选择模式
      SelectMount(val) {
        // this.$emit("typeset", this.mountName)
        this.$emit("typeset", val.Name)
        this.selectId = val.Id
        window.sessionStorage.setItem('userPaySelectId',this.selectId)
        window.sessionStorage.setItem('thisId',this.$route.query.id)
      },
      // 增加倍率
      quickAdd() {
        let that = this
        let num = that.mult
        num = parseInt(num) + 1
        that.Magnification = num
        this.$emit("gamemultiply", that.Magnification)
      },
      //减少倍率
      quickReduce() {
        let that = this
        let num = that.mult
        // if (num > 1){
        //     num  = num - 1
        //     that.Magnification = num
        //     this.$emit("gamemultiply",that.Magnification)
        // }
        // else{
        //     this.$emit("openmess","已经是最小倍数了")
        //     that.Magnification = 1
        //     this.$emit("gamemultiply",that.Magnification)
        // }
        if (num > 1) {
          num = num - 1
          that.Magnification = num
          this.$emit("gamemultiply", that.Magnification)
        } else if (num == 0) {
          that.Magnification = ""
          this.$emit("gamemultiply", that.Magnification)
        }
      },
      // 一键投注
      Dirbet() {
        this.$emit("dirbet")
      },
      // 一键梭哈
      allBet() {
        this.$emit("allin")
      },
      // 添加号码
      changeNum() {
        window.eventBus.$emit('newVersionAddNum');
      },
      // 用户输入倍数
      userInput() {
        // this.arrowBot = false
        // let num = 0
        // // if(this.Magnification == "" || this.Magnification == 0 || this.Magnification =="NaN"){
        // if (this.Magnification == '' || this.Magnification == 'NaN') {
        //   this.Magnification = ''
        //   num = 0
        // } else {
        //   num = parseInt(this.Magnification)
        // }
        // this.$emit("gamemultiply", num)
      }
    },
    watch: {
      mult: function () {
        this.Magnification = this.mult
      },
      Magnification(val){
        this.arrowBot = false
        let num = 0
        // if(this.Magnification == "" || this.Magnification == 0 || this.Magnification =="NaN"){
        if (val == '' || val == 'NaN') {
          this.Magnification = ''
          num = 0
        } else {
          this.Magnification = parseInt(val)
          num = parseInt(this.Magnification)
        }
        this.$emit("gamemultiply", num)
      },
      mounttype(){
        this.$emit("typeset", this.mounttype[0].Name)//默认选中两元
        this.selectId = this.mounttype[0].Id
        let sessSelectId = window.sessionStorage.getItem('userPaySelectId')
        let id = window.sessionStorage.getItem('thisId')
        if(this.$route.query.id == id){
          this.selectId = sessSelectId
          let name = this.mounttype.filter(item=>{
            if (item.Id == sessSelectId){
              return item
            }
          })
          this.$emit("typeset", name[0].Name)//默认选中两元
        }
      }
    }
  }
</script>
<style>
    /* 用户投注 */
    .user_pay {
        padding: 0 0 18px;
    }

    .quick_content_box3 {
        width: 100%;
        padding: 18px 20px 0;
        border-top: 1px solid #d8d8d8;
    }

    .quick_user_opration {
        padding-top: 7px;
        font-size: 14px;
    }

    .quick_user_inputbox {
        color: #575757;
    }

    .quick_payfor_box {
        overflow: hidden;
        font-size: 12px;
        padding: 0 20px;
    }

    .quick_payfor_box strong {
        font-size: 16px;
        color: #fc6a06;
        margin: 0 2px;
    }

    .quick_user_input1 {
        font-size: 0px;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }

    .quick_user_input2, .quick_user_input3 {
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .quick_user_input1 > span, .quick_user_input2 > span, .quick_user_input3 > span {
        color: #000;
        font-size: 12px;
        vertical-align: middle;
        margin-right: 10px;
    }

    .comput_flod > button {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        outline: none;
        font-size: 30px;
        vertical-align: middle;
        background-color: #dddee3;
        cursor: pointer;
        border-style: none;
    }

    .comput_flod > div {
        position: relative;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 0px;
        text-align: center;
        box-sizing: border-box;
        border: solid 1px #bcbcbc;
    }

    .comput_flod > div > input {
        font-size: 12px;
        border: none;
        outline: none;
        width: 30px;
        height: 28px;
        line-height: 30px;
        text-align: center;
        color: #000;
    }

    .quick_user_input1 .arrow_bottom_box {
        width: 50px;
        position: absolute;
        background: #fff;
        top: 30px;
        left: -7px;
        z-index: 666;
        border: 1px solid #eaeaea;
        height: 112px;
    }

    .quick_user_input1 .arrow_bottom_box > span {
        display: block;
        text-align: center;
        line-height: 22px;
        color: #000;
        font-size: 14px;
        cursor: pointer;
    }

    .quick_user_input1 .arrow_bottom_box > span:hover {
        background: #1f7877;
        color: white;
    }

    .quick_add {
        background-image: url(../../static/img/icon/icon_ssc_btn_jh02.jpg);
        background-position: 2px 0;
        background-repeat: no-repeat;
        background-size: 28px 30px;
    }

    .comput_flod {
        display: flex;
        justify-content: center;
        white-space: nowrap;
        width: 90px;
        height: 30px;
        font-size: 0;
    }

    .quick_reduce {
        background-image: url(../../static/img/icon/icon_ssc_btn_jh01.jpg);
        background-position: 0 0;
        background-repeat: no-repeat;
    }

    /*.quick_user_input2 select {*/
    /*    width: 70px;*/
    /*    height: 30px;*/
    /*    border: 1px solid #bcbcbc;*/
    /*    border-right: none;*/
    /*    -moz-appearance: none;*/
    /*    appearance: none;*/
    /*    text-align: center;*/
    /*    text-align-last: center;*/
    /*    padding: 0 38px 0px 8px;*/
    /*    background-image: url(../../static/img/icon/pattern.jpg);*/
    /*    background-position: center right;*/
    /*    background-repeat: no-repeat;*/
    /*    background-size: 30px 30px;*/
    /*    border-radius: 5px;*/
    /*    cursor: pointer;*/
    /*}*/

    /*.quick_user_input2 option {*/
    /*    font-size: 12px;*/
    /*    color: #707070;*/
    /*}*/
    .quick_user_input2 {
        display: flex;
        justify-content: center;
    }

    .quick_user_input2 > div {
        width: 30px;
        height: 30px;
        line-height: 28px;
        text-align: center;
        margin: 0 4px;
        color: #707070;
        font-size: 12px;
        background-color: #ffffff;
        border-radius: 3px;
        border: solid 1px #c3c3c3;
        cursor: pointer;
    }

    .quick_user_input2 > div.selected {
        color: #ffffff !important;
        background-color: #fe8309 !important;
        border:none;
    }

    .quick_user_input3 select {
        background-image: url(../../static/img/icon/pattern.jpg);
        background-position: center right;
        background-repeat: no-repeat;
        background-size: 30px 30px;
        height: 30px;
        width: 170px;
        background-color: #fefefe;
        border-radius: 5px;
        border: solid 1px #bcbcbc;
        border-right: none;
        -moz-appearance: none;
        appearance: none;
        text-align: center;
        text-align-last: center;
        padding: 0 46px 0 16px;
        cursor: pointer;
    }

    .quick_user_input2 select:focus, .quick_user_input3 select:focus {
        outline: none;
    }
</style>

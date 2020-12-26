<template>
    <!-- 不同类型玩法选号  -->
    <div class="quick_gametype_box">
        <div>
            <div class="box_h" v-for="(item,index) in gametype.GameAry" :key="index" :data-id="item.Id">
                <!-- 标题 -->
                <div v-if="navid != 121 && navid != 122 && navid != 124 && navid != 126" class="qu_gametype_title box_s">
                    <p>{{item.Title}}</p>
                </div>
                <!-- 号码列表 -->
                <div v-if="navid == 121" class="dice_itm">
                    <div :class="['box_s',value.code==1?'select_dice_img big_icon':'',value.text == '111'?'dice_img111':value.text == '222'?'dice_img222':value.text == '333'?'dice_img333':value.text == '444'?'dice_img444':value.text == '555'?'dice_img555':'dice_img666']"
                         v-for="(value,index) in item.List" :key="index"
                         :data-code="value.code" :data-id="item.Id" :data-index="index" @click="choiceNum">
                    </div>
                </div>
                <div v-else-if="navid == 122 || navid == 126" class="dice_itm1">
                    <div :class="['box_s',value.code==1?'select_dice_img big_icon':'',value.text == '1'?'dice_img1':value.text == '2'?'dice_img2':value.text == '3'?'dice_img3':value.text == '4'?'dice_img4':value.text == '5'?'dice_img5':'dice_img6']"
                         v-for="(value,index) in item.List" :key="index"
                         :data-code="value.code" :data-id="item.Id" :data-index="index" @click="choiceNum">
                    </div>
                </div>
                <div v-else-if="navid == 124" class="dice_itm2">
                    <div :class="['box_s',value.code==1?'select_dice_img big_icon':'',value.text == '11'?'dice_img11':value.text == '22'?'dice_img22':value.text == '33'?'dice_img33':value.text == '44'?'dice_img44':value.text == '55'?'dice_img55':'dice_img66']"
                         v-for="(value,index) in item.List" :key="index"
                         :data-code="value.code" :data-id="item.Id" :data-index="index" @click="choiceNum">
                    </div>
                </div>
                <div v-else class="qu_gametype_numbox box_h box_flex">
                    <div :class="['box_s',value.code==1?'change_this_style big_icon':'']"
                         v-for="(value,index) in item.List" :key="index"
                         :data-code="value.code" :data-id="item.Id" :data-index="index" @click="choiceNum">
                        {{value.text}}
                    </div>
                </div>
                <!-- 功能按钮 -->
                <div class="box_h qu_gamebtn_box">
                    <div :data-id="item.Id" @click="btnCilck">全</div>
                    <div :data-id="item.Id" @click="btnCilck">大</div>
                    <div :data-id="item.Id" @click="btnCilck">小</div>
                    <div :data-id="item.Id" @click="btnCilck">奇</div>
                    <div :data-id="item.Id" @click="btnCilck">偶</div>
                    <div :data-id="item.Id" @click="btnCilck">清</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    props: {
      gametype: {
        type: Object,
        required: true
      },
      navid: {
        type: Number,
        required: true
      }
    },
    created() {
    },
    data() {
      return {
        num: 0, //游戏id（121为三同号单选，122为三不同号，124二同号复选，125为二同号单选，126为2同号单选）
        obj: this.gametype,
        selectAry: [], //返回子组件的值
      }
    },
    methods: {

      // 选择号码
      choiceNum(e) {
        let that = this
        let code = e.currentTarget.dataset.code
        let indexs = e.currentTarget.dataset.index
        let num = e.currentTarget.dataset.id
        // 单个数组
        that.gametype.GameAry.forEach(item => {
          if (item.Id == num) {
            if (code == 0) {
              item.List[indexs].code = 1
              that.selectAry.push(item.List[indexs].value)
              this.$emit("setary", that.selectAry)
            } else {
              item.List[indexs].code = 0
              let ids = that.selectAry.indexOf(item.List[indexs].value)
              if (ids > -1) {
                that.selectAry.splice(ids, 1)
              }
              this.$emit("setary", that.selectAry)
            }

          }
        });
        that.algorithm()

      },
      // 注数算法
      algorithm() {
        let that = this
        let num = that.gametype.GameIds
        // 三不同号单选
        if (num == 122) {
          let num = parseInt(that.selectAry.length);
          if (num >= 3) {
            let result = (num - 2) * (num - 1) * num / 6
            that.$emit("setbet", result)
          } else {
            that.$emit("setbet", 0)
          }
        }
        //二同号单选
        if (num == 126) {
          let num = parseInt(that.selectAry.length);
          if (num >= 2) {
            let result = ((num - 1) * (num - 1) + num - 1) / 2
            that.$emit("setbet", result)
          } else {
            that.$emit("setbet", 0)
          }
        }
      },
      //功能按钮
      btnCilck(e) {
        let that = this
        let name = e.currentTarget.innerText;
        let id = e.currentTarget.dataset.id;
        that.selectAry = []
        if (that.gametype.GameAry.length < 2) {
          that.gametype.GameAry.forEach(item => {
            for (let i = 0; i < item.List.length; i++) {
              item.List[i].code = 0
              if (name == "全") {
                item.List[i].code = 1
                that.selectAry.push(item.List[i].value)
                this.$emit("setary", that.selectAry)
              } else if (name == "大") {
                if (i > 2) {
                  item.List[i].code = 1
                  that.selectAry.push(item.List[i].value)
                  this.$emit("setary", that.selectAry)
                }
              } else if (name == "小") {
                if (i < 3) {
                  item.List[i].code = 1
                  that.selectAry.push(item.List[i].value)
                  this.$emit("setary", that.selectAry)
                }
              } else if (name == "清") {
                item.List[i].code = 0
                this.$emit("setary", that.selectAry)
              } else if (name == "奇") {
                if (i % 2 == 0) {
                  item.List[i].code = 1
                  that.selectAry.push(item.List[i].value)
                  this.$emit("setary", that.selectAry)
                }
              } else if (name == "偶") {
                if (i % 2 != 0) {
                  item.List[i].code = 1
                  that.selectAry.push(item.List[i].value)
                  this.$emit("setary", that.selectAry)
                }
              }
            }
            that.algorithm()
          })
        }
      }
    }
  }
</script>

<style>
    .quick_gametype_box {
        width: 100%;
        overflow: hidden;
        padding: 8px 0;
    }

    .quick_gametype_box > div {
        align-items: center;
        overflow: hidden;
    }

    .qu_gametype_title {
        /*width: 70px;*/
        height: 50px;
        text-align: center;
        font-size: 12px;
        color: #8e8e8e;
        line-height: 22px;
        justify-content: center;
    }

    .qu_gametype_title > p {
        padding: 0 10px;
        color: #666666;
        font-size: 14px;
        font-weight: bold;
        line-height: 40px;
        border-radius: 5px;
    }

    /* 号码列表 */
    .qu_gametype_numbox {
        overflow: hidden;
        text-align: center;
        margin-left: 13px;
        padding: 5px 0;
    }

    /*.qu_gametype_numbox > div:hover {*/
    /*  color: white;*/
    /*  background: #008573;*/
    /*  border: 1px solid #008573;*/
    /*}*/

    .qu_gametype_numbox > .change_this_style {
        background-color: #008573;
    }
    .select_dice_img{
      background: #008573;
    }
    .qu_gametype_numbox > div {
        align-items: center;
        justify-content: center;
        width: 80px;
        cursor: pointer;
        margin: 0 5px;
        font-size: 18px;
        border-radius: 5px;
    }

    /* 功能按钮 */
    .qu_gamebtn_box {
        width: 218px;
        height: 40px;
        margin-top: 5px;
        padding: 0 5px;
        justify-content: space-around;
        justify-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .qu_gamebtn_box > div {
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border: solid 1px #c9c9c9;
        font-size: 14px;
        color: #000;
        background-color: rgba(0,0,0,.05);
        border-radius: 5px;
        cursor: pointer;
    }

    .qu_gamebtn_box > div:hover {
        border: none;
        color: #ffffff;
        background-color: #008573;
    }
    .dice_itm,.dice_itm1,.dice_itm2 {
        width: 648px;
    }
    .dice_itm2 > div{
        display: inline-block;
        width: 80px;
        height: 59px;
        margin: 0 10px;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
    }
    .dice_itm1 > div{
        display: inline-block;
        width: 59px;
        height: 59px;
        margin: 0 10px;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
    }
    .dice_itm > div {
        display: inline-block;
        width: 166px;
        height: 59px;
        margin: 0 10px;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
    }
    .dice_img111 {
        background-image: url(../../static/img/ks/111.png);
    }

    .dice_img222 {
        background-image: url(../../static/img/ks/222.png);
    }

    .dice_img333 {
        background-image: url(../../static/img/ks/333.png);
    }

    .dice_img444 {
        background-image: url(../../static/img/ks/444.png);
    }

    .dice_img555 {
        background-image: url(../../static/img/ks/555.png);
    }

    .dice_img666 {
        background-image: url(../../static/img/ks/666.png);
    }
    .dice_img1 {
        background-image: url(../../static/img/ks/ks1.png);
    }

    .dice_img2 {
        background-image: url(../../static/img/ks/ks2.png);
    }

    .dice_img3 {
        background-image: url(../../static/img/ks/ks3.png);
    }

    .dice_img4 {
        background-image: url(../../static/img/ks/ks4.png);
    }

    .dice_img5 {
        background-image: url(../../static/img/ks/ks5.png);
    }

    .dice_img6 {
        background-image: url(../../static/img/ks/ks6.png);
    }
    .dice_img11 {
        background-image: url(../../static/img/icon/touzi_2_1.png);
    }

    .dice_img22 {
        background-image: url(../../static/img/icon/touzi_2_2.png);
    }

    .dice_img33 {
        background-image: url(../../static/img/icon/touzi_2_3.png);
    }

    .dice_img44 {
        background-image: url(../../static/img/icon/touzi_2_4.png);
    }

    .dice_img55 {
        background-image: url(../../static/img/icon/touzi_2_5.png);
    }

    .dice_img66 {
        background-image: url(../../static/img/icon/touzi_2_6.png);
    }
</style>


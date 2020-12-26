<template>
    <!-- 不同类型玩法选号  -->
    <div class="quick_gametype_box">
        <div v-if="navid == 125">
            <div class="box_h">
                <!-- 标题 -->
                <div class="qu_gametype_title box_s">
                    <p>{{listObj1.digit}}</p>
                </div>
                <!-- 号码列表 -->
                <div class="qu_gametype_numbox box_h box_flex">
                    <div :class="['box_s',item.state?'change_this_style big_icon':'',item.value == '11'?'two_img11':item.value == '22'?'two_img22':item.value == '33'?'two_img33':item.value == '44'?'two_img44':item.value == '55'?'two_img55':'two_img66']"
                         v-for="(item,index) in listObj1.num" :key="index"
                         @click='ListOne' :data-index="index">
                    </div>
                </div>
                <!-- 功能按钮 -->
                <div class="box_h qu_gamebtn_box">
                    <div :class="[index == btnCurrent ? '':'' ]" v-for="(items,index) in gameBtn" :key="index"
                         @click="ListAllOne"
                         :data-name="items">{{items}}
                    </div>
                </div>
            </div>
            <div class="box_h">
                <!-- 标题 -->
                <div class="qu_gametype_title box_s">
                    <p>{{listObj2.digit}}</p>
                </div>
                <!-- 号码列表 -->
                <div class="qu_gametype_numbox box_h box_flex">
                    <div :class="['box_s',item.state?'change_this_style big_icon':'',item.value == '1'?'two_img1':item.value == '2'?'two_img2':item.value == '3'?'two_img3':item.value == '4'?'two_img4':item.value == '5'?'two_img5':'two_img6']"
                         v-for="(item,index) in listObj2.num" :key="index"
                         @click='ListTwo' :data-index="index">
                    </div>
                </div>
                <!-- 功能按钮 -->
                <div class="box_h qu_gamebtn_box">
                    <a :class="[index == btnCurrent ? '':'' ]" v-for="(items,index) in gameBtn" :key="index"
                       @click="ListAllTwo"
                       :data-name="items">{{items}}</a>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="box_h">
                <!-- 标题 -->
                <div class="qu_gametype_title box_s">
                    <p>{{listObj1.digit}}</p>
                </div>
                <!-- 号码列表 -->
                <div class="qu_gametype_numbox box_h box_flex">
                    <div :class="['box_s',item.state?'change_this_style big_icon':'']"
                         v-for="(item,index) in listObj1.num" :key="index"
                         @click='ListOne' :data-index="index">{{item.value}}
                    </div>
                </div>
                <!-- 功能按钮 -->
                <div class="box_h qu_gamebtn_box">
                    <div :class="[index == btnCurrent ? '':'' ]" v-for="(items,index) in gameBtn" :key="index"
                         @click="ListAllOne"
                         :data-name="items">{{items}}
                    </div>
                </div>
            </div>
            <div class="box_h">
                <!-- 标题 -->
                <div class="qu_gametype_title box_s">
                    <p>{{listObj2.digit}}</p>
                </div>
                <!-- 号码列表 -->
                <div class="qu_gametype_numbox box_h box_flex">
                    <div :class="['box_s',item.state?'change_this_style big_icon':'']"
                         v-for="(item,index) in listObj2.num" :key="index"
                         @click='ListTwo' :data-index="index">{{item.value}}
                    </div>
                </div>
                <!-- 功能按钮 -->
                <div class="box_h qu_gamebtn_box">
                    <a :class="[index == btnCurrent ? '':'' ]" v-for="(items,index) in gameBtn" :key="index"
                       @click="ListAllTwo"
                       :data-name="items">{{items}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    props: {
      gameAry: {
        type: Array,
        required: true
      },
      navid: {
        type: Number,
        required: false
      }
    },
    data() {
      return {
        gameBtn: ["全", "大", "小", "奇", "偶", "清"], //按钮选项
        btnCurrent: -1, //点击状态
        selectAry: [],//选中的值
        state: true,
        listObj1: {}, //渲染的对象
        listObj2: {}, //渲染的对象
        listAry1: [], //选择内容
        listAry2: [], //选择内容
      }
    },
    methods: {
      // 选择单个号码
      ListOne(e) {
        let index = e.target.dataset.index
        let id = 0
        if (this.listObj1.num[index].state) {
          this.listObj1.num[index].state = false
        } else {
          this.listObj1.num[index].state = true

        }
        this.ListOneLimit(index)
      },
      ListTwo(e) {
        let index = e.target.dataset.index
        let id = 0
        if (this.listObj2.num[index].state) {
          this.listObj2.num[index].state = false
        } else {
          this.listObj2.num[index].state = true

        }
        this.ListTwoLimit(index)
      },
      // 判断
      ListOneLimit(index) {
        if (this.listObj2.num[index].state) {
          this.listObj2.num[index].state = false
        }
        this.putAry()
      },
      ListTwoLimit(index) {
        if (this.listObj1.num[index].state) {
          this.listObj1.num[index].state = false
        }
        this.putAry()
      },

      // 点击按钮
      ListAllOne(e) {
        let that = this
        let name = e.target.dataset.name
        that.listObj1.num.forEach(function (item, index) {
          item.state = false
          if (name == "全") {
            item.state = true
          } else if (name == "清") {
            item.state = false
          } else if (name == "大") {
            if (index > 2) {
              item.state = true
            }
          } else if (name == "小") {
            if (index < 3) {
              item.state = true
            }
          } else if (name == "奇") {
            if (index % 2 == 0) {
              item.state = true
            }
          } else if (name == "偶") {
            if (index % 2 != 0) {
              item.state = true
            }
          }
        });
        this.ListAllOneLimit()
      },
      ListAllTwo(e) {
        let that = this
        let name = e.target.dataset.name
        that.listObj2.num.forEach(function (item, index) {
          item.state = false
          if (name == "全") {
            item.state = true
          } else if (name == "清") {
            item.state = false
          } else if (name == "大") {
            if (index > 2) {
              item.state = true
            }
          } else if (name == "小") {
            if (index < 3) {
              item.state = true
            }
          } else if (name == "奇") {
            if (index % 2 == 0) {
              item.state = true
            }
          } else if (name == "偶") {
            if (index % 2 != 0) {
              item.state = true
            }
          }
        });
        this.ListAllTwoLimit()

      },
      // 数组判断
      ListAllOneLimit() {
        let indexAry = []
        this.listObj1.num.forEach(function (item, index) {
          if (item.state == true) {
            indexAry.push(index)
          }
        })
        for (let i = 0; i < indexAry.length; i++) {
          let num = indexAry[i]
          this.listObj2.num[num].state = false
        }
        this.putAry()
      },
      ListAllTwoLimit() {
        let indexAry = []
        this.listObj2.num.forEach(function (item, index) {
          if (item.state == true) {
            indexAry.push(index)
          }
        })
        for (let i = 0; i < indexAry.length; i++) {
          let num = indexAry[i]
          this.listObj1.num[num].state = false
        }
        this.putAry()
      },
      // 加入数组
      putAry() {
        let ary = []
        let listAry1 = []
        this.listObj1.num.forEach(function (item, index) {
          if (item.state == true) {
            listAry1.push(item.name)
          }
        })
        this.listAry1 = listAry1
        let listAry2 = []
        this.listObj2.num.forEach(function (item, index) {
          if (item.state == true) {
            listAry2.push(item.name)
          }
        })
        this.listAry2 = listAry2
        let num = parseInt(listAry1.length) * parseInt(listAry2.length)
        this.$emit("setbet", num)
        ary.push(listAry1.join(""))
        ary.push(listAry2.join(""))
        this.selectAry = ary
        this.$emit("getdata", this.selectAry)
      }
    },
    created() {
      this.listObj1 = this.gameAry[0]
      this.listObj2 = this.gameAry[1]
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
        height: 59px;
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
    .quick_gametype_box > div > div > .qu_gametype_numbox {
        overflow: hidden;
        text-align: center;
        margin-left: 0;
        padding: 5px 0;
    }

    .qu_gametype_numbox > .change_this_style {
        background-color: #008573;
    }

    .quick_gametype_box .qu_gametype_numbox > div {
        align-items: center;
        justify-content: center;
        font-weight: normal;
        font-style: normal;
        border-radius: 5px;
        width: 90px;
        height: 59px;
        cursor: pointer;
        font-size: 14px;
        margin: 0 6px;
        padding: 0 10px;
        background-repeat: no-repeat;
        background-position: center center;
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

    .qu_gamebtn_box > div, .qu_gamebtn_box > a {
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border: solid 1px #c9c9c9;
        font-size: 14px;
        color: #000;
        background-color: rgba(0, 0, 0, .05);
        border-radius: 5px;
        cursor: pointer;
    }

    .qu_gamebtn_box > div:hover, .qu_gamebtn_box > a:hover {
        border: none;
        color: #ffffff;
        background-color: #008573;
    }

    .two_img1 {
        background-image: url(../../static/img/ks/ks1.png);
    }

    .two_img2 {
        background-image: url(../../static/img/ks/ks2.png);
    }

    .two_img3 {
        background-image: url(../../static/img/ks/ks3.png);
    }

    .two_img4 {
        background-image: url(../../static/img/ks/ks4.png);
    }

    .two_img5 {
        background-image: url(../../static/img/ks/ks5.png);
    }

    .two_img6 {
        background-image: url(../../static/img/ks/ks6.png);
    }

    .two_img11 {
        background-image: url(../../static/img/icon/touzi_2_1.png);
    }

    .two_img22 {
        background-image: url(../../static/img/icon/touzi_2_2.png);
    }

    .two_img33 {
        background-image: url(../../static/img/icon/touzi_2_3.png);
    }

    .two_img44 {
        background-image: url(../../static/img/icon/touzi_2_4.png);
    }

    .two_img55 {
        background-image: url(../../static/img/icon/touzi_2_5.png);
    }

    .two_img66 {
        background-image: url(../../static/img/icon/touzi_2_6.png);
    }
</style>


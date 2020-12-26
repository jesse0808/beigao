<template>
    <div class="lhc_bb">
        <div class="lhc_bb_left">
            <div :class="['bb_item',item.selectStatus?'select_bb_item':'no_select_bb_item']" @click="selectBb(index)" v-for="(item,index) in playData" :key="index">
                <div class="bb_name">
                    <div>{{item.text}}</div>
                    <div>x{{item.pText}}</div>
                </div>
                <div class="show_data">
                    <span :class="item.class" v-for="(val,num) in item.showData" :key="num">{{val}}</span>
                </div>
                <div class="bb_input">
                    <label>
                        <input type="text" @click.stop="" @input="inputChange(index)" v-model="item.num"></input>
                    </label>
                </div>
            </div>
        </div>
        <div class="lhc_bb_right">
            <div class="lhc_bb_nav">
                <a href="javascript:void(0)" @click="clickAnav(0)"><span :class="[selectNum === 1?'select_a':'no_select_a']"><span></span></span>&thinsp;红波</a>
                <a href="javascript:void(0)" @click="clickAnav(1)"><span :class="[selectNum === 2?'select_a':'no_select_a']"><span></span></span>&thinsp;绿波</a>
                <a href="javascript:void(0)" @click="clickAnav(2)"><span :class="[selectNum === 3?'select_a':'no_select_a']"><span></span></span>&thinsp;蓝波</a>
            </div>
            <div class="lhc_bb_even">
                <a href="javascript:void(0)" @click="clickOdd(index)" v-for="(item,index) in oddEvenNav" :key="index" :class="[item.selectStatus?'select_a':'no_select_a']">{{item.text}}</a>
            </div>
            <div class="lhc_bb_odd">
                <a href="javascript:void(0)" @click="clickAnav(3)" :class="[selectNum === 4?'select_a':'no_select_a']">大</a>
                <a href="javascript:void(0)" @click="clickAnav(4)" :class="[selectNum === 5?'select_a':'no_select_a']">小</a>
                <a href="javascript:void(0)" @click="clickAnav(5)" :class="[selectNum === 6?'select_a':'no_select_a']">单</a>
                <a href="javascript:void(0)" @click="clickAnav(6)" :class="[selectNum === 7?'select_a':'no_select_a']">双</a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "bb",
    props:{
      noteMoney:{
        type:Number,
        required:true
      },
      resetFun:{
        type: Boolean,
        required: true
      },
      playList:{
        type:Object,
        required: true
      }
    },
    data() {
      return {
        playData: [
          {
            text: '红大',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_red',
            pText: 6.70,
            showData:['29','30','34','35','40','45','46']
          },
          {
            text: '绿双',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_green',
            pText: 6.70,
            showData:['06','16','22','28','32','38','44']
          },
          {
            text: '红小',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_red',
            pText: 4.69,
            showData:['01','02','07','08','12','13','18','19','23','24']
          },
          {
            text: '绿合单',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_green',
            pText: 6.70,
            showData:['05','16','21','27','32','38','43']
          },
          {
            text: '红单',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_red',
            pText: 5.86,
            showData:['01','07','13','19','23','29','35','45']
          },
          {
            text: '绿合双',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_green',
            pText: 5.86,
            showData:['06','11','17','22','28','33','39','44']
          },
          {
            text: '红双',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_red',
            pText: 5.21,
            showData:['02','08','12','18','24','30','34','40','46']
          },
          {
            text: '蓝大',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_blue',
            pText: 5.21,
            showData:['25','26','31','36','37','41','42','47','48']
          },
          {
            text: '红合单',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_red',
            pText: 5.21,
            showData:['01','07','12','18','23','29','30','34','45']
          },
          {
            text: '蓝小',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_blue',
            pText: 6.70,
            showData:['03','04','09','10','14','15','20']
          },
          {
            text: '红合双',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_red',
            pText: 5.86,
            showData:['02','08','13','19','24','35','40','46']
          },
          {
            text: '蓝单',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_blue',
            pText: 5.86,
            showData:['03','09','15','25','31','37','41','47']//抄到这里了
          },
          {
            text: '绿大',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_green',
            pText: 5.86,
            showData:['27','28','32','33','38','39','43','44']
          },
          {
            text: '蓝双',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_blue',
            pText: 5.86,
            showData:['04','10','14','20','26','36','42','48']
          },
          {
            text: '绿小',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_green',
            pText: 6.70,
            showData:['05','06','11','16','17','21','22']
          },
          {
            text: '蓝合单',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_blue',
            pText: 5.86,
            showData:['03','09','10','14','25','36','41','47']
          },
          {
            text: '绿单',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_green',
            pText: 5.86,
            showData:['05','11','17','21','27','33','39','43']
          },
          {
            text: '蓝合双',
            selectStatus: false,//false未选中，选中true
            num: '',
            class: 'bb_blue',
            pText: 5.86,
            showData:['04','15','20','26','31','37','42']
          }
        ],
        selectNum:0,
        selectData:[
          {
            checked:false,
            selectArr:[0,2]
          },
          {
            checked:false,
            selectArr:[12,14]
          },
          {
            checked:false,
            selectArr:[7,9]
          },
          {
            checked:false,
            selectArr:[0,7,12]
          },
          {
            checked:false,
            selectArr:[2,9,14]
          },
          {
            checked:false,
            selectArr:[4,11,16]
          },
          {
            checked:false,
            selectArr:[1,6,13]
          }
        ],
        oddEvenNav:[
          {
            text:'合单',
            selectStatus:false,
            arr:[3,8,15]
          },
          {
            text:'合双',
            selectStatus:false,
            arr:[5,10,17]
          }
        ]
      }
    },
    watch:{
      resetFun(){
        if (this.resetFun){
          this.$emit('returnResetStatus')
          this.playData.forEach(item => {
            item.selectStatus = false
            item.num = ''
          })
          this.dataChange()
        }
      },
      noteMoney(){
        if (this.noteMoney > 0){
          this.playData.forEach(item => {
            if (item.selectStatus){
              item.num = this.noteMoney
            }
          })
        }else{
          this.playData.forEach(item => {
            if (item.selectStatus){
              item.num = ''
            }
          })
        }
        this.dataChange()
      }
    },
    created(){
      let that = this
      this.playData.forEach((item,index)=>{
        that.playList.PlayContentList.forEach((val,num)=>{
          if (item.text === val.Content){
            // item.text = val.Content
            item.pText = val.Odds
          }
        })
      })
      this.$emit('returnResetStatus')
    },
    methods:{
      clickOdd(index){
        let that = this
        if (this.selectNum > 0){
          this.resetPlayData()
        }
        this.selectNum = 0
        this.oddEvenNav[index].selectStatus = !this.oddEvenNav[index].selectStatus
        this.oddEvenNav[index].arr.forEach((item) => {
          that.playData[item].selectStatus = !that.playData[item].selectStatus
          if (that.playData[item].selectStatus && that.noteMoney > 0){
            that.playData[item].num = that.noteMoney
          }else{
            that.playData[item].num = ''
          }
        })
        this.dataChange()
      },
      clickAnav(index){
        this.oddEvenNav.forEach(item=>{
          item.selectStatus = false
        })
        if (this.selectNum > 0){
          if (this.selectNum === index + 1){
            this.selectNum = 0
            this.resetPlayData()
          }else{
            this.selectNum = index + 1
            this.selectPlayData(this.selectData[index].selectArr)
          }
        }else{
          this.selectNum = index + 1
          this.selectPlayData(this.selectData[index].selectArr)
        }
      },
      resetPlayData(){
        this.playData.forEach(item=>{
          item.selectStatus = false
          item.num = ''
        })
        this.dataChange()
      },
      selectPlayData(arr){
        if (arr.length > 0){
          let that = this
          this.playData.forEach(item => {
            item.selectStatus = false
            item.num = ''
          })
          arr.forEach((item) => {
            that.playData[item].selectStatus = !that.playData[item].selectStatus
            if (that.playData[item].selectStatus && that.noteMoney > 0){
              that.playData[item].num = that.noteMoney
            }
          })
          this.dataChange()
        }
      },
      selectBb(index){
        this.playData[index].selectStatus = !this.playData[index].selectStatus
        if (this.playData[index].selectStatus && this.noteMoney > 0){
          this.playData[index].num = this.noteMoney
        }else{
          this.playData[index].num = ''
        }
        this.dataChange()
      },
      //数据变化是操作
      dataChange(){
        let sum = []
        this.playData.forEach(item => {
          if (Number(item.num) > 0){
            sum.push(item)
          }
        })
        this.$emit('returnSelectNum',sum)
      },
      //input输入处理
      inputChange(index){
        this.playData[index].num = parseInt(this.playData[index].num.toString().replace(/[^\d]/g, ''))
        if (this.playData[index].num > 0){
          this.playData[index].selectStatus = true
        }else{
          this.playData[index].num = ''
        }
        this.dataChange()
      },
    }
  }
</script>

<style lang="scss" scoped>
    .lhc_bb {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 16px 10px 0;

        .lhc_bb_left {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 709px;

            .bb_item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 354px;
                height: 53px;
                margin-bottom: 1px;
                padding: 0 5px;
                cursor: pointer;
                .bb_name{
                    width: 44px;
                    div{
                        &:first-child{
                            line-height: 14px;
                            font-size: 14px;
                            color: #333333;
                        }
                        &:last-child{
                            line-height: 12px;
                            font-size: 12px;
                            letter-spacing: 1px;
                            color: #666666;
                        }
                    }
                }
                .show_data{
                    width: 247px;
                    span{
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        margin: 0 1px;
                        line-height: 22px;
                        color: #ffffff;
                        font-size: 12px;
                        text-align: center;
                    }
                    .bb_red{
                        background: url(../../static/img/lhc/banbo_bg_red.png) no-repeat 0 0/100% 100%;
                    }
                    .bb_green{
                        background: url(../../static/img/lhc/banbo_bg_green.png) no-repeat 0 0/100% 100%;
                    }
                    .bb_blue{
                        background: url(../../static/img/lhc/banbo_bg_blue.png) no-repeat 0 0/100% 100%;
                    }
                }
                .bb_input{
                    width: 47px;
                    height: 24px;
                    label{
                        width: 100%;
                        height: 100%;
                        input{
                            width: 100%;
                            height: 100%;
                            padding: 0 2px;
                            text-align: center;
                            background-color: #ffffff;
                            border-radius: 3px;
                            border: solid 1px #d8d8d8;
                            outline: none;
                        }
                    }
                }
            }
            .select_bb_item{
                background: url(../../static/img/lhc/banbo_btn_selecte.png) no-repeat 0 0/100% 100%;
                .bb_name{
                    div{
                        color: #ffffff !important;
                    }
                }
            }
            .no_select_bb_item{
                background: url(../../static/img/lhc/banbo_btn__default.png) no-repeat 0 0/100% 100%;
                &:hover{
                    background: url(../../static/img/lhc/banbo_btn_hover.png) no-repeat 0 0/100% 100%;
                }
            }
        }

        .lhc_bb_right {
            width: 174px;
            height: 195px;
            background-color: #f4f4f4;
            border-radius: 15px;
            border: solid 1px #d8d8d8;
            div{
                padding-top: 10px;
                padding-bottom: 10px;
                border-bottom: dotted 1px #d8d8d8;
                &:last-child{
                    border-bottom:none;
                }
            }
            .lhc_bb_nav{
                text-align: center;
                a{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 26px;
                    font-size: 14px;
                    &:first-child{
                        color: #ff0000;
                    }
                    &:nth-child(2){
                        color: #009d0b;
                    }
                    &:last-child{
                        color: #005bf1;
                    }
                    span{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 14px;
                        height: 14px;
                        border-radius: 7px;
                    }
                    .select_a{
                        border: solid 2px #008573;
                        span{
                            width: 6px;
                            height: 6px;
                            border-radius: 3px;
                            background-color: #008573;
                        }
                    }
                    .no_select_a{
                        border: solid 1px #b6b6b6;
                    }
                }
            }
            .lhc_bb_even{
                text-align: center;
                a{
                    display: inline-block;
                    width: 58px;
                    height: 24px;
                    margin: 0 7px;
                    font-size: 14px;
                    line-height: 22px;
                    border-radius: 12px;
                }
                .select_a{
                    color: #ffffff;
                    background-color: #008573;
                    border: solid 1px #008573;
                }
                .no_select_a{
                    color: #333333;
                    border: solid 1px #d0d0d0;
                }
            }
            .lhc_bb_odd{
                display: flex;
                justify-content: space-around;
                a{
                    display: inline-block;
                    width: 30px;
                    height: 25px;
                    line-height: 23px;
                    border-radius: 3px;
                    font-size: 14px;
                    text-align: center;
                }
                .select_a{
                    color: #ffffff;
                    background-color: #008573;
                }
                .no_select_a{
                    color: #333333;
                    background-color: #ffffff;
                    border: solid 1px #d0d0d0;
                }
            }
        }
    }
</style>

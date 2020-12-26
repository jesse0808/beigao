<template>
    <div class="lhc_ws">
        <div class="lhc_ws_left">
            <div @click="checkedItem(index)" :class="['ws_item',item.selectStatus ? 'select_item':'no_select_item']" v-for="(item,index) in playData" :key="index">
                <div class="ws_item_title">
                    <p>{{item.text}}</p>
                    <span>x{{item.Odds}}</span>
                </div>
                <div class="ws_item_content">
                    <span :class="[returnClass(val)]" v-for="(val,num) in item.arr" :key="num">{{val}}</span>
                </div>
                <label>
                    <input @click.stop="" v-model="item.num" @input="inputChange(index)" type="text">
                </label>
            </div>
        </div>
        <div class="lhc_ws_right">
            <div :class="[checkedNum === (index + 1) ? 'select_div':'no_select_div']" @click="checkRadio(index)" v-for="(item,index) in checkArr" :key="index"><span></span>{{item.text}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ws",
    props:{
      noteMoney: {
        type: Number,
        required: true
      },
      playList: {
        type: Object,
        required: true
      },
      resetFun:{
        type: Boolean,
        required: true
      },
    },
    data(){
      return{
        playData:[
          {
            text:'0尾',
            num:'',
            selectStatus:false,
            arr:['10','20','30','40']
          },
          {
            text:'1尾',
            num:'',
            selectStatus:false,
            arr:['01','11','21','31','41']
          },
          {
            text:'2尾',
            num:'',
            selectStatus:false,
            arr:['02','12','22','32','42']
          },
          {
            text:'3尾',
            num:'',
            selectStatus:false,
            arr:['03','13','23','33','43']
          },
          {
            text:'4尾',
            num:'',
            selectStatus:false,
            arr:['04','14','24','34','44']
          },
          {
            text:'5尾',
            num:'',
            selectStatus:false,
            arr:['05','15','25','35','45']
          },
          {
            text:'6尾',
            num:'',
            selectStatus:false,
            arr:['06','16','26','36','46']
          },
          {
            text:'7尾',
            num:'',
            selectStatus:false,
            arr:['07','17','27','37','47']
          },
          {
            text:'8尾',
            num:'',
            selectStatus:false,
            arr:['08','18','28','38','48']
          },
          {
            text:'9尾',
            num:'',
            selectStatus:false,
            arr:['09','19','29','39','49']
          }
        ],
        checkArr:[
          {
            text:'大',
            arr:[5,6,7,8,9]
          },
          {
            text:'小',
            arr:[0,1,2,3,4]
          },
          {
            text:'单',
            arr:[1,3,5,7,9]
          },
          {
            text:'双',
            arr:[0,2,4,6,8]
          },
        ],
        checkedNum:0
      }
    },
    created() {
      this.$emit('returnResetStatus')
      this.playData.forEach((item,index)=>{
        this.playList.PlayContentList.forEach((val,num)=>{
          if (index === num){
            item.Odds = val.Odds
          }
        })
      })
    },
    watch:{
      resetFun(){
        if (this.resetFun){
          this.$emit('returnResetStatus')
          this.playData.forEach(item => {
            item.selectStatus = false
            item.num = ''
          })
          this.checkedNum = 0
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
    methods:{
      checkRadio(index){
        if (this.checkedNum > 0){
          if (this.checkedNum === index + 1){
            this.checkedNum = 0
            this.resetPlayData()
          }else{
            this.checkedNum = index + 1
            this.selectPlayData(this.checkArr[index].arr)
          }
        }else{
          this.checkedNum = index + 1
          this.selectPlayData(this.checkArr[index].arr)
        }
      },
      resetPlayData(){
        this.playData.forEach(item=>{
          item.selectStatus = false
          item.num = ''
        })
        this.dataChange()
      },
      //选中玩法
      checkedItem(index){
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
      //返回球的颜色
      returnClass(str) {
        let num = Number(str)
        if (num === 1 || num === 2 || num === 7 || num === 8 || num === 12 || num === 13 || num === 18 || num === 19 || num === 23 || num === 24 || num === 29 || num === 30 || num === 34 || num === 35 || num === 40 || num === 45 || num === 46) {
          return 'red_qiu'
        }
        if (num === 3 || num === 4 || num === 9 || num === 10 || num === 14 || num === 15 || num === 20 || num === 25 || num === 26 || num === 31 || num === 36 || num === 37 || num === 41 || num === 42 || num === 47 || num === 48) {
          return 'blue_qiu'
        }
        if (num === 5 || num === 6 || num === 11 || num === 16 || num === 17 || num === 21 || num === 22 || num === 27 || num === 28 || num === 32 || num === 33 || num === 38 || num === 39 || num === 43 || num === 44 || num === 49) {
          return 'green_qiu'
        }
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
    }
  }
</script>

<style lang="scss" scoped>
.lhc_ws{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px 10px 0 15px;
    .lhc_ws_left{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 709px;
        height: 410px;
        .ws_item{
            display: flex;
            align-items: center;
            width: 354px;
            height: 81px;
            margin-bottom: 1px;
            cursor: pointer;
            .ws_item_title{
                width: 72px;
                padding-left: 20px;
                p{
                    font-size: 14px;
                    color: #333333;
                }
                span{
                    font-size: 12px;
                    letter-spacing: 1px;
                    color: #666666;
                }
            }
            .ws_item_content{
                width: 210px;
                span{
                    display: inline-block;
                    width: 35px;
                    height: 35px;
                    margin-right: 4px;
                    line-height: 35px;
                    text-align: center;
                    font-size: 20px;
                    color: #ffffff;
                }
            }
            label{
                input{
                    width: 51px;
                    height: 23px;
                    text-align: center;
                    background-color: #ffffff;
                    box-shadow: inset 1px 2px 4px 0px
                    rgba(0, 0, 0, 0.11);
                    border-radius: 3px;
                    border: solid 1px #d8d8d8;
                    outline: none;
                }
            }
        }
        .no_select_item{
            background: url(../../static/img/lhc/zongfen_btn_default.jpg) no-repeat 0 0/100% 100%;
            &:hover{
                background: url(../../static/img/lhc/zongfen_btn_hover.jpg) no-repeat 0 0/100% 100%;
            }
        }
        .select_item{
            background: url(../../static/img/lhc/zongfen_btn_selected.jpg) no-repeat 0 0/100% 100%;
            .ws_item_title{
                p{
                    color: #ffffff;
                }
                span{
                    color: #ffffff;
                }
            }
        }
    }
    .lhc_ws_right{
        display: flex;
        justify-content: space-between;
        width: 170px;
        height: 67px;
        padding: 21px 7px 21px 9px;
        background-color: #f4f4f4;
        border-radius: 15px;
        border: solid 1px #d8d8d8;
        div{
            width: 30px;
            height: 25px;
            border-radius: 3px;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
        }
        .no_select_div{
            line-height: 23px;
            color: #666666;
            background-color: #ffffff;
            border: solid 1px #d0d0d0;
        }
        .select_div{
            line-height: 25px;
            color: #ffffff;
            background-color: #008573;
        }
    }
}
</style>

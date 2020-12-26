<template>
    <div class="lhc_zf">
        <div :class="['zf_item',item.selectStatus ? 'select_item':'no_select_item']" @click="checkedItem(index)" v-for="(item,index) in playData" :key="index">
            <b>{{item.text}}</b>
            <div>x{{item.Odds}}</div>
            <label>
                <input type="text" @click.stop="" v-model="item.num" @input="inputChange(index)"></input>
            </label>
            <p>{{item.str}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "zf",
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
            text:'大',
            num:'',
            selectStatus:false,
            str:'总分大于等于175的，即视为中奖。'
          },
          {
            text:'小',
            num:'',
            selectStatus:false,
            str:'总分小于等于174的，即视为中奖。'
          },
          {
            text:'单',
            num:'',
            selectStatus:false,
            str:'总分是单数的，即视为中奖。'
          },
          {
            text:'双',
            num:'',
            selectStatus:false,
            str:'总分是双数的，即视为中奖。'
          },
          {
            text:'大单',
            num:'',
            selectStatus:false,
            str:'总分大于等于175且为单数的，即视为中奖。'
          },
          {
            text:'大双',
            num:'',
            selectStatus:false,
            str:'总分大于等于175且为双数的，即视为中奖。'
          },
          {
            text:'小单',
            num:'',
            selectStatus:false,
            str:'总分小于等于174且为单数的，即视为中奖。'
          },
          {
            text:'小双',
            num:'',
            selectStatus:false,
            str:'总分小于等于174且为双数的，即视为中奖。'
          }
        ],
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
      //input输入处理
      inputChange(index){
        this.playData[index].num = parseInt(this.playData[index].num.toString().replace(/[^\d]/g, ''))
        if (this.playData[index].num > 0){
          this.playData[index].selectStatus = true
        }else{
          this.playData[index].num = ''
        }
        this.dataChange()
      }
    }
  }
</script>

<style lang="scss" scoped>
.lhc_zf{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 16px 14px 0;
    .zf_item{
        width: 437px;
        height: 115px;
        padding-top: 17px;
        margin-bottom: 4px;
        text-align: center;
        cursor: pointer;
        b{
            line-height: 16px;
            font-size: 20px;
            letter-spacing: 2px;
            color: #333333;
        }
        div{
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 16px;
            letter-spacing: 1px;
            color: #666666;
        }
        label{
            input{
                width: 91px;
                height: 29px;
                text-align: center;
                background-color: #ffffff;
                box-shadow: inset 1px 2px 4px 0px
                rgba(0, 0, 0, 0.11);
                border-radius: 3px;
                border: solid 1px #d8d8d8;
            }
        }
        p{
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 1px;
            color: #666666;
        }
    }
    .select_item{
        background: url(../../static/img/lhc/zongfen_btn_selected.jpg) no-repeat 0 0/100% 100%;
        b{
            color: #ffffff;
        }
        div{
            color: #ffffff;
        }
        p{
            color: #ffffff;
        }
    }
    .no_select_item{
        background: url(../../static/img/lhc/zongfen_btn_default.jpg) no-repeat 0 0/100% 100%;
        &:hover{
            background: url(../../static/img/lhc/zongfen_btn_hover.jpg) no-repeat 0 0/100% 100%;
        }
    }
}
</style>

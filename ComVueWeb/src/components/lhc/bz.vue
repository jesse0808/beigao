<template>
    <div class="lhc_bz">
        <div :class="['bz_item',item.selectStatus?'check_item':'no_check_item']" @click="checkedItem(index)" v-for="(item,index) in playData" :key="index">
            <div :class="item.class">{{item.text}}</div>
            <p>x{{item.Odds}}</p>
            <span :class="['iconfont','icon-gouxuanxuan']"></span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "bz",
    props: {
      noteMoney: {
        type: Number,
        required: true
      },
      playList: {
        type: Object,
        required: true
      },
      resetFun: {
        type: Boolean,
        required: true
      },
    },
    data() {
      return {
        playData: [
          {
            text: '01',
            selectStatus: false,//0未选中，选中
            num: '',
            class: ''
          },
          {
            text: '02',
            selectStatus: false,//0未选中，选中
            num: '',
            class: ''
          },
          {
            text: '03',
            selectStatus: false,//0未选中，选中
            num: '',
            class: ''
          },
          {
            text: '04',
            selectStatus: false,//0未选中，选中
            num: '',
            class: ''
          },
          {
            text: '05',
            selectStatus: false,//0未选中，选中
            num: '',
            class: ''
          },
          {
            text: '06',
            selectStatus: false,//0未选中，选中
            num: '',
            class: ''
          },
          {
            text: '07',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '08',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '09',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '10',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '11',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '12',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '13',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '14',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '15',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '16',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '17',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '18',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '19',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '20',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '21',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '22',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '23',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '24',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '25',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '26',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '27',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '28',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '29',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '30',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '31',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '32',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '33',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '34',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '35',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '36',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '37',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '38',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '39',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '40',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '41',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '42',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '43',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '44',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '45',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '46',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '47',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '48',
            selectStatus: false,
            num: '',
            class: ''
          },
          {
            text: '49',
            selectStatus: false,
            num: '',
            class: ''
          }
        ]
      }
    },
    created() {
      this.$emit('returnResetStatus')
      let that = this
      this.playData.forEach((item, index) => {
        that.playList.PlayContentList.forEach((val, num) => {
          if (index === num) {
            item.Odds = val.Odds
            item.class = that.returnClass(item.text)
          }
        })
      })
    },
    watch: {
      resetFun() {
        if (this.resetFun) {
          this.$emit('returnResetStatus')
          this.playData.forEach(item => {
            item.selectStatus = false
            item.num = ''
          })
          this.dataChange()
        }
      },
      noteMoney() {
        if (this.noteMoney > 0) {
          this.playData.forEach(item => {
            if (item.selectStatus) {
              item.num = this.noteMoney
            }
          })
        } else {
          this.playData.forEach(item => {
            if (item.selectStatus) {
              item.num = ''
            }
          })
        }
        this.dataChange()
      }
    },
    methods: {
      //选中玩法
      checkedItem(index) {
        this.playData[index].selectStatus = !this.playData[index].selectStatus
        if (this.playData[index].selectStatus && this.noteMoney > 0) {
          this.playData[index].num = this.noteMoney
        } else {
          this.playData[index].num = ''
        }
        this.dataChange()
      },
      //数据变化是操作
      dataChange() {
        let sum = []
        this.playData.forEach(item => {
          if (Number(item.num) > 0) {
            sum.push(item)
          }
        })
        this.$emit('returnSelectNum', sum)
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
      inputChange(index) {
        this.playData[index].num = parseInt(this.playData[index].num.toString().replace(/[^\d]/g, ''))
        if (this.playData[index].num > 0) {
          this.playData[index].selectStatus = true
        } else {
          this.playData[index].num = ''
        }
        this.dataChange()
      }
    }
  }
</script>

<style lang="scss" scoped>
    .lhc_bz {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        width: 100%;
        padding: 16px 20px 0;
        .bz_item{
            width: 86px;
            height: 95px;
            padding-top: 11px;
            margin-bottom: 1px;
            margin-right: 1px;
            text-align: center;
            cursor: pointer;
            &:nth-child(10n){
                margin-right: 0;
            }
            div{
                width: 40px;
                height: 40px;
                margin: 0 auto;
                font-size: 22px;
                line-height: 40px;
                text-align: center;
                color: #ffffff;
            }
            p{
                margin-bottom: -5px;
                line-height: 14px;
                text-align: center;
                font-size: 12px;
                letter-spacing: 1px;
                color: #666666;
            }
            span{
                color: #c6c6c6;
                font-size: 24px;
            }
        }
        .check_item{
            background: url(../../static/img/lhc/tema_btn_selected.jpg) no-repeat 0 0/100% 100%;
            p{
                color: #ffffff;
            }
            span{
                color: #ffffff;
            }
        }
        .no_check_item{
            background: url(../../static/img/lhc/tema_btn_default.jpg) no-repeat 0 0/100% 100%;

            &:hover {
                background: url(../../static/img/lhc/tema_btn_hover.jpg) no-repeat 0 0/100% 100%;
            }
        }
    }
</style>

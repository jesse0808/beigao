<template>
    <div class="sum_item">
        <div class="sum_box">
            <div class="sum_money">投注金额<label>
                <input type="text" v-model="value"></input>
            </label></div>
            <div class="select_money">
                <a href="javascript:void(0)" v-for="(item,index) in moneyData" :key="index" @click="onclickMoney(item,index)">
                    <img :src="item.bgUrl" alt="">
                </a>
            </div>
            <div class="user_btn_box">
                <a href="javascript:void(0)" class="delete_num" @click="clearFun">清空</a>
                <a href="javascript:void(0)" class="direct_bet" @click="betFun">一键投注</a>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
    import img1 from '../../static/img/bottom/icon_lhc_chips10.png'
    import img2 from '../../static/img/bottom/icon_lhc_chips50.png'
    import img3 from '../../static/img/bottom/icon_lhc_chips100.png'
    import img4 from '../../static/img/bottom/icon_lhc_chips500.png'
    import img5 from '../../static/img/bottom/icon_lhc_chips1000.png'
  export default {
    name: "sumItem",
    data() {
      return {
        value: '',
        moneyData: [
          {
            text: 10,
            checked: false,
            bgUrl: img1
          },
          {
            text: 50,
            checked: false,
            bgUrl: img2
          },
          {
            text: 100,
            checked: false,
            bgUrl: img3
          },
          {
            text: 500,
            checked: false,
            bgUrl: img4
          },
          {
            text: 1000,
            checked: false,
            bgUrl: img5
          },
        ]
      }
    },
    watch: {
      value() {
        this.value = parseInt(this.value.toString().replace(/[^\d]/g, ''))
        if (this.value > 0) {
          this.$emit('returnSelectNum', this.value)
        } else {
          this.value = ''
          this.$emit('returnSelectNum', 0)
        }
      }
    },
    methods: {
      //快捷输入
      onclickMoney(data, index) {
        this.value = data.text
      },
      //清除功能
      clearFun() {
        this.$emit('returnClearFun')
        this.value = ''
        this.moneyData.forEach((item) => {
          item.checked = false
        })
      },
      //投注功能
      betFun() {
        this.$emit('returnBetFun')
      }
    }
  }
</script>

<style lang="scss" scoped>
    .sum_item {
        width: 100%;
        padding: 16px 20px 13px;

        .sum_box {
            display: flex;
            justify-content: space-between;

            .sum_money {
                height: 30px;
                padding-top: 7px;
                line-height: 30px;
                font-size: 12px;
                color: #626262;

                label {
                    margin-left: 10px;

                    input {
                        width: 123px;
                        height: 30px;
                        padding: 0 10px;
                        background-color: #ffffff;
                        border-radius: 3px;
                        border: solid 1px #d8d8d8;
                        outline: none;
                    }
                }
            }

            .select_money {
                a {
                    display: inline-block;
                    width: 49px;
                    height: 48px;
                    margin: 0 9px;
                    &:hover{
                        img{
                            animation:myRotate .5s linear reverse;
                        }
                    }
                    @-webkit-keyframes myRotate{
                        0%{ -webkit-transform: rotateX(0deg);}
                        50%{ -webkit-transform: rotateX(180deg);}
                        100%{ -webkit-transform: rotateX(360deg);}
                    }
                    @keyframes myRotate{
                        0%{ -webkit-transform: rotateX(0deg);}
                        50%{ -webkit-transform: rotateX(180deg);}
                        100%{ -webkit-transform: rotateX(360deg);}
                    }
                }
            }

            .sum_fun {
                display: flex;
                justify-content: center;

                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 119px;
                    height: 40px;
                    margin: 0 5px;
                    font-size: 14px;
                    border-radius: 20px;
                    cursor: pointer;

                    span {
                        font-size: 20px;
                        margin-right: 5px;
                    }
                }

                .delete_bth {
                    color: #999999;
                    background-color: #e6e6e6;
                }

                .add_bth {
                    color: #ffffff;
                    background-color: #ff680a;
                }
            }
        }

    }
</style>

<template>
    <div class="tjbb">
        <div class="tjbb_box">
            <div>
                <div></div>
                <div>存款总额/单数</div>
                <div>取款总额/单数</div>
                <div>充值差额</div>
                <div></div>
                <div>彩票有效投注额/单数</div>
                <div>彩票中奖金额/单数</div>
                <div>彩票返点</div>
                <div>三方投注额/单数</div>
                <div>三方中奖额/单数</div>
                <div>三方返水</div>
                <div>活动奖励</div>
                <div>盈利</div>
            </div>
            <div v-for="(item,index) in pageData" :key="index">
                <div>{{item.Time}}</div>
                <div>{{item.AllCzMoney}}/{{item.AllCzCount }}</div>
                <div>{{item.AllTkMoney }}/{{item.AllTkCount }}</div>
                <div>{{item.CtChaEr}}</div>
                <div></div>
                <div>{{item.AllCpYxTzMoney}}/{{item.AllCpYxTzCount}}</div>
                <div>{{item.AllCpZjMoney}}/{{item.AllCpZjCount}}</div>
                <div>{{item.AllCpFdMoney}}</div>
                <div>{{item.DsfTzMoney}}/{{item.DsfTzCount}}</div>
                <div>{{item.DsfZjMoney}}/{{item.DsfZjCount }}</div>
                <div>{{item.AllSfFsMoney}}</div>
                <div>{{item.AllJlMoney}}</div>
                <div>{{item.KuiYing}}</div>
            </div>
        </div>
    </div>
</template>

<script>
  import {getAjax,postAjax} from "../../util/ajax";

  export default {
    name: "tjbb",
    data() {
      return {
        pageData:[]
      }
    },
    created(){
      this.getPageInfo()
    },
    methods: {
      getPageInfo() {
        let that = this
        let url = `/api/OrderReport/GetUserReport`
        postAjax(url).then(data => {
          if (data.IsSucess){
            that.pageData = data.Data
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
    .tjbb{
        width: 100%;
        height: 920px;
        padding: 19px 20px 0;
        overflow-x: scroll;
        .tjbb_box{
            display: flex;
            width: max-content;
            /*height: 920px;*/
            border-radius: 5px;
            border: solid 1px #dddddd;
            div{
                width: 193px;

                &:last-child{
                    div{
                        border-right:none;
                    }
                }
                div{
                    width: 100%;
                    height: 49px;
                    line-height: 49px;
                    text-align: center;
                    font-size: 14px;
                    color: #707070;
                    border-right: solid 1px #dddddd;
                    &:first-child{
                        height: 47px;
                        line-height: 47px;
                        color: #171717;
                        font-weight: bold;
                        background-image: linear-gradient(0deg,
                        #e7e6e7 0%,
                        #ffffff 100%);
                    }
                    &:nth-child(odd){
                        background-color: #f7f7f7;
                    }
                    &:last-child{
                        color: #171717;
                        font-weight: bold;
                        background-color: rgba(255,186,0,.2);
                    }
                }
            }
        }
    }
</style>

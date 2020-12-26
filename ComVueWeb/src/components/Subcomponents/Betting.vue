<template>
  <!-- 投注组件 -->
  <div class="twenty_record_box">
    <div class="twenty_record_bg">
      <!-- PC蛋蛋投注卡 -->
      <div v-if="gameindex==5" class="twenty_recode_main box_h">
        <div class="twenty_recode_listbox">
          <div class="twenty_recode_border xinyun">
            <span>玩法</span>
            <span>赔率</span>
            <span>投注金额</span>
            <span>预期奖金</span>
          </div>
          <div class="twenty_recode_list xinyun_padding" style="padding-right: 20px">
            <template v-if="betary.length>0">
              <div class="twenty_recode_item border_none" v-for=" (item,index) in betary" :key="index">
                <div class="box_flex xinyun">
                  <div class="recode_name">[{{item.name}}]</div>
                  <div class="recode_name">赔率：{{item.odds}}</div>
                  <!--                  <div class="recode_name recode-last-mount"><input type="text" v-model="item.mount"-->
                  <!--                                                                    @input="UserInput(this)" maxlength="7"/>元-->
                  <!--                  </div>-->
                  <div>{{item.mount}}</div>
                  <div>{{item.mount * item.odds}}元</div>
                </div>
                <!--                <div class="recode_deleted" :data-id="index" @click="deleteOne"></div>-->
              </div>
            </template>
          </div>
        </div>
        <div class="twenty_recode_btnbox">
          <p class="comput_m">共&ensp;<strong>{{allNum}}</strong>&ensp;注</p>
          <p class="comput_m">总金额&ensp;￥<strong>{{money}}</strong>&ensp;元</p>
          <!--                    <button class="recode_add record_opreation" @click="allBet">一键梭哈</button>-->
          <!--                    <button class="recode_set record_opreation" @click="setNum">设置号码</button>-->
          <a href="javascript:void(0)" class="recode_sure_submit" @click="listBtnClick"><div>确定投注</div><p>剩余时间：{{timeh}}:{{timem}}:{{times}}</p>
          </a>
          <button class="recode_remove record_opreation" @click="deletNum">清空</button>
        </div>
      </div>
      <!-- 其他玩法投注卡 -->
      <div class="twenty_recode_main box_h" v-else>
        <div class="twenty_recode_listbox box_flex">
          <div class="twenty_recode_border">
            <span class="item_name">玩法</span>
            <span class="item_content">投注内容</span>
            <span class="item_class">模式</span>
            <span class="item_p">奖金调节</span>
            <span class="item_num">注数</span>
            <span class="item_num">倍数</span>
            <span class="item_mount">投注金额</span>
          </div>
          <div class="twenty_recode_list">
            <template v-if="betary.length>0">
              <div class="twenty_recode_item" v-for=" (item,index) in betary" :key="index">
                <div class="box_flex box_h">
                  <div class="item_name">[{{item.name}}]</div>
                  <div class="item_content" :title="TextJoin==true?item.GAry.join(','):item.GAry.join(' ')">{{TextJoin==true?item.GAry.join(","):item.GAry.join(" ")}}</div>
                  <div class="item_class">{{item.type}}模式</div>
                  <div class="item_p">{{item.Odds}}%</div>
                  <div class="item_num">{{item.num}}注</div>
                  <div class="item_num">{{item.GMult}}倍</div>
                  <div class="item_mount">{{item.mount}}元</div>
                </div>
                <div class="recode_deleted" :data-id="index" @click="deleteOne"></div>
              </div>
            </template>
            <template v-else>
              <div class="twenty_recode_none"><span class="iconfont icon-biaodan"></span>暂未添加选号</div>
            </template>
          </div>
        </div>
        <div class="twenty_recode_btnbox">
          <p class="comput_m">共&ensp;<strong>{{allNum}}</strong>&ensp;注</p>
          <p class="comput_m">总金额&ensp;￥<strong>{{money}}</strong>&ensp;元</p>
          <!--          <button class="recode_add record_opreation" @click="allBet">一键梭哈</button>-->
          <a href="javascript:void(0)" class="recode_sure_submit" @click="listBtnClick"><div>确定投注</div><p>剩余时间：{{timeh}}:{{timem}}:{{times}}</p>
          </a>
          <div class="record_opreation" @click="setNum"><span class="iconfont icon-shezhi" style="font-size: 18px"></span>设置追号</div>
          <div class="record_opreation" @click="deletNum"><span class="iconfont icon-delete"></span>清空</div>
        </div>
      </div>
    </div>
    <OrderConfirm ref="OrderConfirm" :cz="cz" :qh="qh" :money="money" :shTextArr="shText" :all-num="allNum"
                  :confirm="confirmOrder"></OrderConfirm>
  </div>
</template>
<script>
    import OrderConfirm from '@/components/Elasticframe/OrderConfirm.vue';

    export default {
        components: {OrderConfirm},
        props: {
            betary: {
                type: Array,
                required: true
            },
            gameindex: {
                type: String,
                required: true
            },
            ids: {
                type: Number,
                required: true
            },
            time: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                cz: '',
                qh: '',
                money: 0,
                shText: [],
                TextJoin: true,
                allNum: 0,//总注数
                countTime: 0,
                timeh: '00',
                timem: '00',
                times: '00',
                setDateFun: null
            }
        },
        watch: {
            'betary': function (val) {
                this.shText = [];
                let money = 0;
                let num = 0;
                this.betary.forEach(item => {
                    num += Number(item.num == undefined ? 1 : item.num);
                    money += Number(item.mount)
                    if (this.gameindex == 5) {
                        this.shText.push(`[${item.name}]`);
                        // this.shText.push({
                        //     name:item.name,
                        // })
                    } else {
                        this.shText.push(`[${item.name}] ${this.TextJoin == true ? item.GAry.join(",") : item.GAry.join(" ")}`)
                        // this.shText.push({
                        //     name:item.name,
                        //     num:this.TextJoin == true ? item.GAry.join(",") : item.GAry.join(" ")
                        // })
                    }
                })
                this.money = money.toFixed(3);
                this.allNum = num;
            },
            'time'(val) {
                clearInterval(this.setDateFun);
                this.countTime = val.time || 0;
                this.setInervalue();
                this.sscopenTimeDispose();
            }
        },
        created() {
            window.eventBus.$on('newVersionAddNum', () => {
                this.changeNum()
            })
        },
        computed:{
            navAry(){
                return this.$store.state.navAry;
            }
        },
        methods: {
            //生成时间执行
            sscopenTimeDispose() {
                let that = this;
                that.setDateFun = setInterval(() => {
                    let num = Number(that.countTime);
                    if (num > 0) {
                        that.countTime -= 1;
                        that.setInervalue();
                    } else {
                        clearInterval(this.setDateFun);
                        that.setDateFun = null
                    }
                }, 1000)
            },
            //时间处理
            setInervalue() {
                let that = this;
                let num = Number(that.countTime);
                let h = Math.floor(num / 3600)
                that.timeh = h < 10 ? '0' + h : h;//小时
                let m = Math.floor(num / 60) - h * 60;//分钟
                that.timem = m < 10 ? '0' + m : m;
                that.times = Number(num % 60) < 10 ? '0' + Number(num % 60) : Number(num % 60);//秒
            },
            confirmOrder() {
                this.$emit('direct')
            },
            // 列表投注
            listBtnClick() {
                if (this.betary.length == 0) {
                    this.$emit('direct')
                    return
                }
                this.cz = window.lgText
                this.navAry.map(item => {
                    item.LotteryList.map(v => {
                        if (v.LsId == this.$router.currentRoute.query.index && v.LgId == this.$router.currentRoute.query.id) {
                            this.cz = v.Name
                        }
                    })
                })
                this.qh = `${window.NowLssue} 期`

                this.$refs.OrderConfirm.show()
            },
            // 一键梭哈
            allBet() {
                window.eventBus.$emit('addNum2Allin')
                // this.$emit("allin")
            },
            // 运行父组件添加到投注卡的方法
            changeNum() {
                if (this.ids == 67 || this.ids == 64 || this.ids == 62 || this.ids == 173 || this.ids == 169 || this.ids == 2 || this.ids == 14 ||
                    this.ids == 20 || this.ids == 26 || this.ids == 31 || this.ids == 33 || this.ids == 38 || this.ids == 40 || this.ids == 45 || this.ids == 47 || this.ids == 50) {
                    this.TextJoin = false
                }
                if (!this.getChildData || this.getChildData.length == 0) {
                    this.$emit('addnum')//   this.$message.error('号码未选完！');
                    return false
                }
                let printData = [];
                this.getChildData.forEach(function (element, index) {
                    let oneData = [];
                    element.value.forEach(function (el, inx) {
                        oneData.push(el.value)
                    });
                    printData[element.key - 1] = oneData.join('')
                });
                this.$message.error(printData.join(','));
            },
            //清空投注卡列表
            deletNum() {
                this.$emit('emptynum', [])
            },
            //删除投注卡某一列
            deleteOne(e) {
                let index = e.currentTarget.dataset.id;
                this.$emit("deletenum", index)
            },
            //设置追号
            setNum() {
                let that = this
                if (that.gameindex == 5) {
                    this.$emit("openmess", "该玩法暂不支持追号")
                } else {
                    this.$emit("settrack")
                }
            },
            // 输入修改投注金额
            UserInput(e) {
                this.$emit("chinput")
            }
        }
    }
</script>
<style>
  /* 投注记录 */
  .twenty_record_box {
    width: 100%;
    padding: 0 20px 23px;
    /*overflow: hidden;*/
  }

  .twenty_record_bg {
    border-radius: 2px;
    -webkit-border-radius: 2px;
    width: 100%;
  }

  .twenty_recode_main {
    position: relative;
  }

  .twenty_recode_listbox {
    position: relative;
    width: 667px;
    margin-right: 12px;
    height: 169px;
    padding-top: 30px;
    border: solid 1px #ddd8d4;
  }
  .twenty_recode_border {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 30px;
    padding-right: 20px;
    background-color: #e8e8e8;
  }

  .xinyun {
    justify-content: space-around !important;
  }

  .xinyun > div, .xinyun > span {
    width: 25%;
    text-align: center;
  }

  .twenty_recode_border > span {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #000;
  }

  .twenty_recode_list {
    background: #fff;
    padding: 6px 0;
    height: 137px;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .twenty_recode_item {
    display: flex;
    justify-content: space-around;
    white-space: nowrap;
    border-bottom: 1px dashed #ceced0;
    line-height: 38px;
    height: 38px;
    /*padding: 0 14px;*/
    overflow: hidden;
    color: #707070;
    font-size: 12px;
  }

  .twenty_recode_none {
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    padding-top: 20px;
    letter-spacing: 1px;
    color: #a0a0a0;
    text-align: center;
  }
  .twenty_recode_none > span{
    display: block;
    font-size: 40px;
    color: #d2d2d2;
  }
  .recode_name {
    overflow: hidden;
  }

  .recode_name:first-child {
    /*width: 220px;*/
    /*margin-right: 20px;*/
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .item_name {
    width: 112px;
    text-align: center;
  }

  .item_content {
    width: 164px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item_class {
    width: 70px;
    text-align: center;
  }

  .item_p {
    width: 104px;
    text-align: center;
  }

  .item_num {
    width: 60px;
    text-align: center;
  }

  .item_mount {
    width: 73px;
    text-align: center;
  }

  .twenty_recode_item > div:first-child {
    display: flex;
    justify-content: space-between;
    width: 607px;
  }

  .gameinfo4 {
    min-width: 90px;
    text-align: center;
  }

  .recode-last-mount {
    padding: 0 20px;
    /*min-width: 120px;*/
    text-align: right;
  }

  .recode-last-mount > input {
    width: 80px;
    border: none;
    outline: none;
    text-align: center;
    border-bottom: 1px solid #dedfe5;
    margin: 0 5px;
  }

  .recode_otherinfo {
    margin-right: 30px;
  }

  .recode_deleted {
    height: 38px;
    background-position: center center;
    width: 20px;
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-image: url(../../static/img/icon/deleted.png);
    cursor: pointer;
  }

  .twenty_recode_btnbox {
    width: 180px;
    overflow: hidden;
  }

  .comput_m {
    width: 100%;
    padding: 0 4px;
    font-size: 12px;
    letter-spacing: 0;
    text-align: center;
    color: #000;
  }

  .comput_m strong {
    color: #ff680a;
  }

  .twenty_recode_btnbox button {
    width: 100%;
    border-radius: 2px;
    border: none;
    outline: none;
    text-align: center;
    margin-top: 5px;
    cursor: pointer;
  }

  .record_opreation + .record_opreation {
    margin-left: 5px;
  }

  .twenty_recode_btnbox .record_opreation {
    display: inline-block;
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
    border: solid 1px #dfdfdf;
    font-size: 14px;
    letter-spacing: 1px;
    color: #000;
    text-align: center;
    margin-top: 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  .twenty_recode_btnbox .record_opreation:hover{
    background-color: #f2f2f2;
  }
  .twenty_recode_btnbox .record_opreation > span{
    vertical-align: middle;
  }
  .twenty_recode_btnbox .recode_add {
    background-image: url(../../static/img/icon/record_add.png);
    margin-top: 7px;
  }

  .twenty_recode_btnbox .recode_set {
    background-image: url(../../static/img/icon/record_set.png);
  }

  .twenty_recode_btnbox .recode_remove {
    width: 180px;
    height: 36px;
    border-radius: 5px;
    border: solid 1px #c2c2c2;
    font-size: 16px;
    font-weight: normal;
    color: #000;
    margin-top: 10px;
    background: url(../../static/img/icon/record_reomve.png) no-repeat 18px center / 30px 30px #ececec;
  }

  a.recode_sure_submit {
    display: block;
    width: 180px;
    height: 77px;
    margin-top: 10px;
    padding-top: 19px;
    background-color:#008573;
    letter-spacing: 1px;
    border-radius: 5px;
  }
  a.recode_sure_submit:hover{
    background-color:#007768;
  }
  a.recode_sure_submit:active{
  }
  a.recode_sure_submit > div{
    font-size: 22px;
    line-height: 22px;
    color: #ffffff;
    text-align: center;
  }
  a.recode_sure_submit > p {
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
    line-height: 12px;
    letter-spacing: 1px;
    color: #91e3d8;
  }

  .xinyun_padding {
    padding: 0;
  }

  .border_none {
    border: none;
  }
</style>



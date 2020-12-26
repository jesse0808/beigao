  <template>
    <div class="betContent">
        <!-- 选号 -->
        <div class="racing_content_box">
            <div v-for="(item,index) in sites" class="recing_content_main" :key="index">
              <div class="numberW setFontTitle">{{item.Alias}}</div>
              <div class="hpj">
                <span class="numberText setFontTitle">号码</span>
                <span class="oddText setFontTitle">赔率</span>
                <span class="betMoneyText setFontTitle">金额</span>
              </div>
              <div v-for="(item,index) in bets" class="dtj" :key="index">
                <span class="betPlay setFontText">{{item.Content}}</span>
                <span class="odds setFontOdds">{{item.Odds}}</span>
                <span><input class="betMoney setFontText"></span>
              </div>
            </div>
<!--          <div class="otherPlayText setFontTitle">-->
<!--            <div v-for="a in others"class="weizhi weizhiText" :label="a">-->
<!--              <span class="setFontTitle">号码</span>-->
<!--              <span class="setFontTitle">赔率</span>-->
<!--              <span class="betMoneyText setFontTitle">金额</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div v-for="a in otherplays" class="otherPlay" :label="a">-->
<!--            <div class="playTitle setFontTitle">前三</div>-->
<!--            <div v-for="a in plays" class="wpj" :label="a">-->
<!--              <span class="setFontText">大</span>-->
<!--              <span class="setFontOdds">1.800</span>-->
<!--              <span><input class="betMoney"></span>-->
<!--            </div>-->
<!--          </div>-->
        </div>
    </div>
</template>
<script>
// 重庆五星时时彩算法

import {Get11X5_ZuXuanCount,GetArrayAllCount,GetFormula_Zx_One_More,GetFormula_Multiply_Divide,GetSscKuaDuValue,GetSSCZuSanCount,GetSSCZuLiuCount,GetSSCErXiZxCount,GetSSCErMaBdwdCount} from "../../static/js/LotteryBase.js"
// 引用axios封装文件
import {postAjax, getAjax} from "../../util/ajax.js"

export default {
    // 父组件传递的值
    props:{
        gameary:{
            type:Array,
            required:true
        },
        gameid:{
            type:Number,
            required:true
        }
    },
    data(){
        return{
             betNum:0, //组数
             waysNum:1, //方案数量
             gameBtn:["全","大","小","奇","偶","清"], //按钮选项
             btnCurrent:-1, //点击状态
             selectAry:[].fill(0)   ,//选中的值
             selectDis:[],
             digit: [{check:false,name:"万位",dig:"万"},{check:false,name:"千位",dig:"千"},{check:true,name:"百位",dig:"百"},{check:true,name:"十位",dig:"十"},{check:true,name:"个位",dig:"个"}],
          sites:[],
          bets:[],
          others:['','','','','',''],
          plays:['循环1','循环2','循环3','循环3','循环3'],
          otherplays:['循环3','循环3','循环3'],
        }
    },
    methods:{
      // 请求玩法数据
      gameAjax() {
        let that = this
        let url = "Api/Lp/GetPlayList?lpId=" + 34 + "&pattern=2"
        getAjax(url)
          .then(function (data) {
            if (data.IsSucess) {
              let navID = sessionStorage.getItem('navID')
              data.Data.forEach(item => {
                if (navID == 0){
                  if (item.LpId == 186 || item.LpId == 187 || item.LpId == 188 || item.LpId == 189 || item.LpId == 190)
                    if (item.IsOpen == true)
                      that.sites.push(item)
                } else if (navID == 1){
                  if (item.LpId == 191 || item.LpId == 192 || item.LpId == 193 || item.LpId == 194 || item.LpId == 195 || item.LpId == 196 || item.LpId == 197 || item.LpId == 198 || item.LpId == 199)
                    if (item.IsOpen == true)
                      that.sites.push(item)
                } else if (navID == 2){
                  if (item.LpId == 200 || item.LpId == 201 || item.LpId == 202 || item.LpId == 203 || item.LpId == 204 || item.LpId == 205 || item.LpId == 206 || item.LpId == 207 || item.LpId == 208 || item.LpId == 209)
                    if (item.IsOpen == true)
                      that.sites.push(item)
                } else if (navID == 2){
                  if (item.LpId == 201)
                    if (item.IsOpen == true)
                      that.sites.push(item)
                }
              })
              that.sites.forEach(item =>{
                that.bets = item.PlayContentList;
              })
            }
          })
          .then(function () {
          })
          .catch(()=>{
            // this.openMessAge("网络出现异常，请刷新后重试")
      })
      },
        //初始设置位数
        digitStar(){
            let that = this
            let ids = that.ids
            for(let i = 0;i<that.digit.length;i++){
                if(i >1){
                    that.digit[i].check = true
                }
            }
            that.digit.forEach(item=>{
                if(item.check){
                    that.selectDis.push(item.dig)
                }
            })
        },
        // 位数设置
        digitSelect(){
            let ary = []
            this.digit.forEach(item=>{
                if(item.check){
                   ary.push(item.dig)
                }
            })
            this.selectDis = ary
            this.setOthNum()
            this.$emit("getdis",this.selectDis)

        },
       //设置选择数组位数
       setDis(){
           let that = this
           let ary = this.gameary
           let dis = []
           ary.forEach(item=>{
               item.num.forEach(e=>{
                   if(e.state == true){
                      dis.push(item.digit)
                    }
               })
           })
           // 改变数组的值
           for(let i=0;i<dis.length;i++){
               if(dis[i]=="万位"){
                   dis[i] = "万"
               }
               else if(dis[i]=="千位")
               {
                   dis[i] = "千"
               }
               else if(dis[i]=="百位")
               {
                   dis[i] = "百"
               }
               else if(dis[i]=="十位")
               {
                   dis[i] = "十"
               }
               else if(dis[i]=="个位")
               {
                   dis[i] = "个"
               }
           }
           //数组去重
           that.selectDis = [...new Set(dis)]

       },
       // 选择投注号码
       chose(item,items){
        let newarrayall={key:null,value:null};
        const me=this;
        function changedata(data,row,col){
                newarrayall.key=row;
                data.forEach( function(element, index) {
                   if(element.ids==row){
                        let newarray =[];
                        element.num.forEach( function(el, i) {
                            if(col=='全'){
                                el.state = true;
                            }else if(col=='大'){
                                if(i>=parseInt((element.num.length+1)/2)){
                                    el.state = true
                                }else{
                                    el.state = false;
                                }
                            }else if(col=='小'){
                                if(i<parseInt((element.num.length+1)/2)){
                                    el.state = true
                                }else{
                                    el.state = false;
                                }
                            }else if(col=='奇'){
                                if(el.value%2!=0){
                                    el.state = true
                                }else{
                                    el.state = false;
                                }
                            }else if(col=='偶'){
                                if(el.value%2==0){
                                    el.state = true
                                }else{
                                    el.state = false;
                                }
                            }else if(col=='清'){
                                el.state = false;
                            }
                            // newarray =[];
                            if(el.state){
                                newarray.push(el)
                            }
                            newarrayall.value=newarray;
                            newarrayall.key=index+1;
                        });
                   }
                });
            me.selectAry[row]=(newarrayall)
            //设置选择数组位数
            if(me.gameid == 65 || me.gameid == 66){
            }
            else{
                me.setDis()
            }
        }
        //选择合法性
        changedata(this.gameary,item.ids,items);
           if(this.gameary.length==me.selectAry.length-1){
                if(me.gameid == 61 || me.gameid ==103 || me.gameid == 52 || this.gameid == 180 || this.gameid == 91 || this.gameid == 92 || this.gameid==68 || this.gameid ==63){
                    this.setDadaType()
                }
                else{
                  this.getData()
                }
            }else{
                if(me.gameid == 61  || me.gameid ==103 || me.gameid == 52 || this.gameid == 180 || this.gameid == 91 || this.gameid == 92 || this.gameid ==63 || this.gameid==68){
                    this.setDadaType()
                }
            }
        this.setBetnum()
        // // 限制号码数量
        // if(this.gameid==52 || this.gameid ==102 || this.gameid == 180 || this.gameid == 91){
        //     this.setSelectNum()
        // }
        },
        //选择单个投注球
       choseone(item,num,index){
            this.gameary[num].num[index].state = !this.gameary[num].num[index].state ;
            let newarrayall={key:null,value:null};
            const me=this;
            function changedata(data,row,col){
                    newarrayall.key=row;
                    data.forEach( function(element, index) {
                       if(element.ids==row){
                            let newarray =[];
                            element.num.forEach( function(el, i) {
                                if(el.state){
                                    newarray.push(el)
                                }
                                newarrayall.value=newarray;
                            });
                       }
                    });
                me.selectAry[row]=(newarrayall);//每行便利出来的已选中的 数字
            }
            //设置选择数组位数
            if(me.gameid == 65 || me.gameid == 66){

            }
            else{
                me.setDis()
            }
            changedata(this.gameary,item.ids,index);
            // 选择合法性
            if(this.gameary.length==me.selectAry.length-1){
                  if(me.gameid == 61 || me.gameid == 52 || me.gameid == 180 || this.gameid == 91 || this.gameid == 92 || this.gameid ==63 || this.gameid ==68 || this.gameid ==103){
                        this.setDadaType()
                    }
                  else{
                      this.getData()
                  }
            }else{
                if(me.gameid == 61 || me.gameid == 52 || me.gameid == 180 || this.gameid == 91 || this.gameid == 92 || this.gameid ==63 || this.gameid ==68 || this.gameid ==103){
                    this.setDadaType()
                }
            }
            // 动态设置投注数量
            this.setBetnum()
            // 限制号码数量
            // if(this.gameid==52 || this.gameid == 102 || this.gameid == 180 || this.gameid == 91){
            //     this.setSelectNum()
            // }
       },
       //设置返回数据
        getData(){
            let printData=[];
            let that = this;
            this.selectAry.forEach( function(element, index) {
                let oneData=[];
                element.value.forEach( function(el, inx) {
                    oneData.push(el.value)
                });
                printData[element.key-1]=oneData.join('')
            });
            for(let i = 0;i<printData.length;i++){
                if(printData[i] == "" || printData[i] == null){
                    printData.splice(i,1)
                }
            }
            // 数字中间加入，特殊处理
            if(this.gameid == 102||this.gameid == 104 || this.gameid == 106 || this.gameid == 107 || this.gameid == 109 || this.gameid == 111 || this.gameid == 113 || this.gameid == 115 || this.gameid == 117 || this.gameid == 96 || this.gameid == 100){
                for(let i = 0;i<printData.length;i++){
                    printData[i] = printData[i].replace(/[^\d]/g,'').replace(/(\d{2})(?=\d)/g,'$1,')
                }
            }
            // 数字中间加入，特殊处理
            if(this.gameid == 35 || this.gameid == 28 || this.gameid == 42 ){
                for(let i = 0;i<printData.length;i++){
                    printData[i] = printData[i].replace(/[^\d]/g,'').replace(/(\d{1})(?=\d)/g,'$1,')
                }
            }
            // 数组中间加入空格
            if(this.gameid==94 || this.gameid == 98  || this.gameid  == 83 || this.gameid  == 85 ||this.gameid  ==87 || this.gameid  == 89 || this.gameid == 81){
                for(let i = 0;i<printData.length;i++){
                    printData[i] = printData[i].replace(/[^\d]/g,'').replace(/(\d{2})(?=\d)/g,'$1 ')
                }
            }
            that.$emit("setdata",printData)
        },
        // 设置数组格式
        setDadaType(){
            let that = this
            let printData=[];
            this.selectAry.forEach( function(element, index) {
                let oneData=[];
                element.value.forEach( function(el, inx) {
                    oneData.push(el.value)
                });
                printData[element.key-1]=oneData.join('')
            });
            for(let i = 0;i<printData.length;i++){
                if(printData[i]==null){
                    printData[i] = "-"
                }
                else if(printData[i] == "" || printData[i] == " " ){
                    printData[i] = "-"
                }
                if(that.gameid == 180 || that.gameid == 103){
                    if(printData.length<3){
                        printData.push("-")
                    }
                }
                else if(that.gameid == 91 || that.gameid == 92){
                    if(printData.length<10){
                        printData.push("-")
                    }
                }
                else{
                    if(printData.length<5){
                        printData.push("-")
                    }
                }
                if( that.gameid == 103 || that.gameid == 91){
                    if(printData[i].length>2){
                        // 投注号码中间加空格
                        printData[i] = printData[i].replace(/[^\d]/g,'').replace(/(\d{2})(?=\d)/g,'$1 ')
                    }
                }
            }
            that.$emit("setdata",printData)
        },
       //设置注数
       setBetnum(){
            let that = this;
            let id = that.gameid;
            let ary = that.selectAry
            let result = 0
            // 重庆时时彩五星直选复式
            if(id == 1){
                try{
                    result = parseInt(ary[1].value.length)*parseInt(ary[2].value.length)*
                    parseInt(ary[3].value.length)*parseInt(ary[4].value.length)*parseInt(ary[5].value.length);
                    that.$emit("setbet",result)
                }
                catch(e){}
            }
            // 组选120
            else if(id == 3){
                if(that.selectAry.length-1>0){
                    let num = parseInt(ary[1].value.length)
                    result = parseInt(num)*parseInt(num-1)*parseInt(num-2)*parseInt(num-3)*parseInt(num-4) / 120
                    that.$emit("setbet",result)
                }
            }
            //组选60
            else if(id == 4){
                let data = that.selectAry
                try{
                    // 修改返回数组样式
                    let ary = that.setAryData(data)
                    for(let i=0;i<ary.length;i++){
                        ary[i] = ary[i].split(",")
                    }
                    let tzArr = ary
                    let num = GetFormula_Zx_One_More(tzArr,0,1,3)
                    that.$emit("setbet",num)
                }catch(e){

                }
            }
            // 组选30
            else if(id==5){
                let data = that.selectAry
                // 修改返回数组样式
                try{
                    let ary = that.setAryData(data)
                    for(let i=0;i<ary.length;i++){
                        ary[i] = ary[i].split(",")
                    }
                    let tzArr = ary
                    let num = GetFormula_Zx_One_More(tzArr, 1, 0, 2)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            // 组选20
            else if(id==6){
                let data = that.selectAry
                // 修改返回数组样式
                let ary = that.setAryData(data)
                try{
                    for(let i=0;i<ary.length;i++){
                        ary[i] = ary[i].split(",")
                    }
                    let tzArr = ary
                    let num = GetFormula_Zx_One_More(tzArr, 0, 1, 2)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            // 组选10
            else if(id==7){
                let data = that.selectAry
                // 修改返回数组样式
                let ary = that.setAryData(data)
                try{
                    for(let i=0;i<ary.length;i++){
                        ary[i] = ary[i].split(",")
                    }
                    let tzArr = ary
                    let num = GetFormula_Zx_One_More(tzArr, 0, 1, 1)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            // 组选5
            else if(id==8){
                let data = that.selectAry
                // 修改返回数组样式
                let ary = that.setAryData(data)
                try{
                    for(let i=0;i<ary.length;i++){
                        ary[i] = ary[i].split(",")
                    }
                    let tzArr = ary
                    let num = GetFormula_Zx_One_More(tzArr, 0, 1, 1)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            // 趣味玩法
            else if(id==9||id==10||id==11||id==12 || id==81){
                if(that.selectAry.length-1>0){
                    let num = parseInt(ary[1].value.length)
                    that.$emit("setbet",num)
                }
            }
            // 四星直选
            else if(id==13 || id==19){
                try{
                    result = parseInt(ary[1].value.length)*parseInt(ary[2].value.length)*
                    parseInt(ary[3].value.length)*parseInt(ary[4].value.length)
                    that.$emit("setbet",result)
                }
                catch(e){}
            }
            //四星组选24
            else if(id == 15 || id==21){
                let data = that.selectAry
                let len = data[1].value.length
                try{
                    let num = GetFormula_Multiply_Divide(len,4)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            // 四星组选12
            else if(id == 16 || id==22){
                let data = that.selectAry
                // 修改返回数组样式
                try{
                    let ary = that.setAryData(data)
                    for(let i=0;i<ary.length;i++){
                        ary[i] = ary[i].split(",")
                    }
                    let tzArr = ary
                    let num = GetFormula_Zx_One_More(tzArr,  0, 1, 2)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            //四星组选6
            else if(id==17 || id==23){
                let data = that.selectAry
                let len = data[1].value.length
                try{
                    let num = GetFormula_Multiply_Divide(len,2)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            // 四星组选4
            else if(id == 18 || id==24){
                let data = that.selectAry
                try{
                    let ary = that.setAryData(data)
                    for(let i=0;i<ary.length;i++){
                        ary[i] = ary[i].split(",")
                    }
                    let tzArr = ary
                    let num = GetFormula_Zx_One_More(tzArr,  0, 1, 1)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            // 前三直选
            else if(id == 25 || id== 32 || id == 39 || id==168){
                try{
                    result = parseInt(ary[1].value.length)*parseInt(ary[2].value.length)*
                    parseInt(ary[3].value.length)
                    that.$emit("setbet",result)
                }
                catch(e){
                }
            }
            // 前三跨度
            else if(id == 28 || id==35 || id == 42){
                let data = that.selectAry
                let ary = data[1].value
                let allCount = 0
                ary.forEach(item=>{
                    let num = item.value
                    let result = GetSscKuaDuValue(num)
                    allCount += result
                })
                 that.$emit("setbet",allCount)
            }
            // 组三复式
            else if(id==29 || id==36  || id == 43  || id == 171){
                let data = that.selectAry
                let len = data[1].value.length
                try{
                    let num = GetSSCZuSanCount(len,2)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            else if(id == 65){
                let data = that.selectAry
                let len = data[1].value.length
                try{
                    that.betNum = GetSSCZuSanCount(len,2)
                    that.setOthNum()
                }
                catch(e){
                }
            }
            // 组六复式
            else if( id==30 || id==37 || id == 44  || id == 172){
                let data = that.selectAry
                let len = data[1].value.length
                try{
                    let num = GetSSCZuLiuCount(len,3)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            // 任选组六复式
            else if(id == 66){
                try{
                    let data = that.selectAry
                    let len = data[1].value.length
                    that.betNum  = GetSSCZuLiuCount(len,3)
                    that.setOthNum()
                }
                catch(e){
                }
            }
            // 二星直选复式
            else if(id == 46 || id==49 || id == 174 || id == 177){
                try{
                    result = parseInt(ary[1].value.length)*parseInt(ary[2].value.length)
                    that.$emit("setbet",result)
                }
                catch(e){
                }
            }
            else if(id==48 || id==51 || id == 176 || id == 179){
                let data = that.selectAry
                let len = data[1].value.length
                try{
                    let num = GetSSCErXiZxCount(len,2)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            // 定位胆
            else if(id == 52 || id ==180 || id ==103 || id == 91 || id ==92){
                let data = that.selectAry
                let num = 0
                for(let i = 1;i<data.length;i++){
                    if(data[i] == null){
                    }
                    else{
                        num += data[i].value.length
                    }
                }
                that.$emit("setbet",num)
            }
            // 不定位
            // 前三一码
            else if(id == 53 || id == 55 || id==57 || id == 181){
                let num = ary[1].value.length
                that.$emit("setbet",num)
            }
            // 前三二码
            else if(id == 54 || id == 56 || id == 58 || id==59){
                let data = that.selectAry
                let result = data[1].value.length
                let num = GetSSCErMaBdwdCount(result)
                that.$emit("setbet",num)
            }
            //五星三码不定位
            else if(id == 60){
                let data = that.selectAry
                let len = data[1].value.length
                try{
                    let num = GetFormula_Multiply_Divide(len,3)
                    that.$emit("setbet",num)
                }catch(e){
                }
            }
            //任选直选注数
            else if(id == 61 || id ==63 || id == 68){
                let data = that.selectAry
                let ary = that.setAryData(data)
                let num = parseInt(ary.length)
                let W = 0;let Q = 0;let B = 0;let S = 0;let G = 0
                let allCount = 0
                try{
                     W =ary[0]=="" || ary[0]==null?0:GetArrayAllCount(ary[0].split(","))
                     Q =ary[1]=="" || ary[1]==null?0:GetArrayAllCount(ary[1].split(","))
                     B =ary[2]=="" || ary[2]==null?0:GetArrayAllCount(ary[2].split(","))
                     S =ary[3]=="" || ary[3]==null?0:GetArrayAllCount(ary[3].split(","))
                     G = ary[4]=="" || ary[4]==null?0:GetArrayAllCount(ary[4].split(","))
                }
                catch(e){
                }
                if(id == 61){
                    if (num > 3) { //四星任选复式
                        allCount = W * Q * B * S + W * Q * B * G + W * B * S * G + W * Q * S * G + Q * B * S * G;
                    }
                }
                else if(id == 63){
                    if (num > 2) { //三星任选复式
                        allCount = W * Q * B + W * Q * S + W * Q * G + W * B * S + W * B * G + W * S * G + Q * B * S + Q * B * G + Q * S * G + B * S * G;
                    }
                }
                else if(id ==68){
                    if (num > 1) { //二星任选复式
                         allCount = W * Q + W * B + W * S + W * G + Q * B + Q * S + Q * G + B * S + B * G + S * G
                    }
                }
                that.$emit("setbet",allCount)
            }
            // 快三
            // 三码组选复式
            else if(id == 96){
                let data = that.selectAry
                let len = data[1].value.length
                let num = Get11X5_ZuXuanCount(len,3)
                that.$emit("setbet",num)
            }
            // 二码组选复式
            else if(id == 100){
                let data = that.selectAry
                let len = data[1].value.length
                let num = Get11X5_ZuXuanCount(len,2)
                that.$emit("setbet",num)
            }
            //不定位胆
            else if(id == 102){
                let data = that.selectAry
                let len = data[1].value.length
                that.$emit("setbet",len)
            }
            // 一中一
            else if(id == 104){
                let data = that.selectAry
                let len = data[1].value.length
                that.$emit("setbet",len)
            }
            // 二中二
            else if(id == 106){
                let data = that.selectAry
                let selectCount = data[1].value.length
                let num = 0
                if (selectCount < 2) {
                    num =  0
                }
                num =  (selectCount * (selectCount - 1))/2;
                that.$emit("setbet",num)
            }
            // 三中三
            else if(id == 107){
                let data = that.selectAry
                let selectCount = data[1].value.length
                let num = 0
                if (selectCount < 3) {
                    num =  0
                }
                num =  (selectCount * (selectCount - 1) * (selectCount - 2)) / 6
                that.$emit("setbet",num)
            }
            // 四中四
            else if(id == 109){
                let data = that.selectAry
                let selectCount = data[1].value.length
                let num = 0
                if (selectCount < 4) {
                    num =  0
                }
                num =  (selectCount * (selectCount - 1) * (selectCount - 2) * (selectCount - 3)) / 24
                that.$emit("setbet",num)
            }
            // 五中五
            else if(id == 111){
                let data = that.selectAry
                let selectCount = data[1].value.length
                let num = 0
                if (selectCount < 5) {
                    num =  0
                }
                num =  (selectCount * (selectCount - 1) * (selectCount - 2) * (selectCount - 3) * (selectCount - 4)) / 120
                that.$emit("setbet",num)
            }
            // 六中五
            else if(id == 113){
                let data = that.selectAry
                let selectCount = data[1].value.length
                let num = 0
                if (selectCount < 6) {
                    num =  0
                }
                num =  (selectCount * (selectCount - 1) * (selectCount - 2) * (selectCount - 3) * (selectCount - 4) * (selectCount - 5)) / 720
                that.$emit("setbet",num)
            }
            // 七中五
            else if(id == 115){
                let data = that.selectAry
                let selectCount = data[1].value.length
                let num = 0
                if (selectCount < 7) {
                    num =  0
                }
                num =  (selectCount * (selectCount - 1) * (selectCount - 2) * (selectCount - 3) * (selectCount - 4) * (selectCount - 5) * (selectCount - 6)) / 5040
                that.$emit("setbet",num)
            }
            // 八中五
            else if(id == 117){
                let data = that.selectAry
                let selectCount = data[1].value.length
                let num = 0
                if (selectCount < 8) {
                    num =  0
                }
                num =  (selectCount * (selectCount - 1) * (selectCount - 2) * (selectCount - 3) * (selectCount - 4) * (selectCount - 5) * (selectCount - 6) * (selectCount - 7)) / 40320;
                that.$emit("setbet",num)
            }
            // 快三直选复式
            else if(id == 94 || id == 98){
                let data = that.setAryData(that.selectAry)
                let allCount = 0
                let len = id == 94?3:2
                if(data.length   == len){
                    let w = data[0].split(",")
                    let q = data[1].split(",")
                    let b = id== 98 ? []:data[2].split(",")
                      for (var i = 0; i < w.length; i++) {
                        for (var j = 0; j < q.length; j++) {
                            if (b.length != 0) {
                                for (var k = 0; k < b.length; k++) {
                                    if (w[i] != q[j] && w[i] != b[k] && q[j] != b[k]) {
                                        allCount++;
                                    }
                                }
                            }else
                                if (w[i] != q[j]) {
                                    allCount++;
                                }
                        }
                    }
                }
                that.$emit("setbet",allCount)
            }
            // 赛车
            else if(id == 83 || id == 85 ||id ==87 || id == 89){
                let data = that.setAryData(that.selectAry)
                let allCount = 0
                let len = 0
                if(id == 83){len = 2}
                else if(id == 85){len = 3}
                else if(id == 87){len = 4}
                else if(id == 89){len = 5}
                if(data.length ==  len){
                    let a = data[0].split(",")
                    let b = data[1].split(",")
                    let c = len > 2 ? data[2].split(","):[]
                    let d = len > 3 ? data[3].split(","):[]
                    let e = len > 4 ? data[4].split(","):[]
                    for (var i = 0; i < a.length; i++) {
                        if (b.length != 0) {
                            for (var j = 0; j < b.length; j++) {
                                if (c.length != 0) {
                                    if (d.length != 0) {
                                        if (e.length != 0) {
                                            for (var k = 0; k < c.length; k++) {
                                                for (var l = 0; l < d.length; l++) {
                                                    for (var m = 0; m < e.length; m++) {
                                                        if (a[i] != b[j] && a[i] != c[k] && a[i] != d[l] && a[i] != e[m] &&
                                                            b[j] != c[k] && b[j] != d[l] && b[j] != e[m] &&
                                                            c[k] != d[l] && c[k] != e[m] &&
                                                            d[l] != e[m]) {
                                                            allCount++;
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            for (var k = 0; k < c.length; k++) {
                                                for (var l = 0; l < d.length; l++) {
                                                    if (a[i] != b[j] && a[i] != c[k] && a[i] != d[l] && b[j] != c[k] && b[j] != d[l] && c[k] != d[l]) {
                                                        allCount++;
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        for (var k = 0; k < c.length; k++) {
                                            if (a[i] != b[j] && a[i] != c[k] && b[j] != c[k]) {
                                                allCount++;
                                            }
                                        }
                                    }
                                } else
                                    if (a[i] != b[j]) {
                                        allCount++;
                                    }
                            }
                        }
                        else
                            allCount++;
                    }
                }
                that.$emit("setbet",allCount)
            }
       },
       //限制选择号码数量
       setSelectNum(){
           let ary = this.selectAry
           ary.forEach(item=>{
               if(item.value.length>8){
                   this.$message.error("每位最多选择8个号码")
               }
           })
       },
       // 修改数组格式
       setAryData(data){
            let printData=[];
            data.forEach( function(element, index) {
                let oneData=[];
                element.value.forEach( function(el, inx) {
                    oneData.push(el.value)
                });
                printData[element.key-1]=oneData.join(',')
            });

            for(let i = 0;i<printData.length;i++){
                if(printData[i] == ""){
                    printData.splice(i,1)
                }
            }
            return printData
        },
        // 带位置的注数计算
        setOthNum(){
            let that = this
            let num = 0
            // 任三组三复式 组六复式
            if(that.gameid == 65 || that.gameid == 66){
                let len= that.selectDis.length
                if(len>=3){
                    if (len == 3){
                        that.waysNum = 1
                        num = parseInt(that.betNum) * parseInt(that.waysNum)
                    }
                    else if(len == 4){
                        that.waysNum = 4
                        num = parseInt(that.betNum) * parseInt(that.waysNum)
                    }
                    else if(len == 5){
                        that.waysNum = 10
                        num = parseInt(that.betNum) * parseInt(that.waysNum)
                    }
                }
            }
            that.$emit("setbet",num)
            this.$emit("getdis",this.selectDis)
        }
    },
    created(){
       this.digitStar()
       // 请求数据
      this.gameAjax()
    },
    mounted(){
    },
    watch:{
    }
}
</script>
<style>
  .betContent{
    width: 100%-20px;
    overflow: hidden;
    margin-bottom: 30px;
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    border-left: 0.3px solid #D4D4D4;
    border-bottom: 0.3px solid #D4D4D4;
    border-right: 0.3px solid #D4D4D4;
  }
  .numberW{
    width: 100%;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    text-align: center;
    border-top: 1px solid #D4D4D4;
    border-right: 0.3px dashed #D4D4D4;
    border-bottom: 0.3px solid #D4D4D4;
  }
  .hpj{
    width: 100%;
    height: 40px;
    line-height: 40px;
    float: left;
    border-bottom: 0.3px solid #D4D4D4;
    border-right: 0.3px dashed #D4D4D4;
  }
  .hpj span{
    width: 33.33%;
    float: left;
    text-align: center;
  }
  .dtj{
    width: 100%;
    height: 40px;
    line-height: 40px;
    float: left;
    overflow: hidden;
    border-right: 1px dashed #D4D4D4;
  }
  .dtj span{
    width: 33.33%;
    float: left;
    text-align: center;
  }
  .betMoney{
    width: 48px;
    height: 20px;
    border-radius:5px;
    border:1px solid gray;
    overflow: hidden;
  }
  .otherPlayText{
    width: 100%;
    float: left;
  }
  .weizhi{
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #D4D4D4;
    border-right: 0.3px dashed #D4D4D4;
    border-bottom: 1px solid #D4D4D4;
  }
  .weizhiText{
    width: 16.66%;
    float: left;
    text-align: center;
  }
  .weizhiText span{
    width: 33.33%;
    float: left;
    text-align: center;
  }
  .otherPlay{
    width:100%;
    float: left;
    overflow: hidden;
  }
  .playTitle{
    width: 16.66%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-right: 1px dashed #D4D4D4;
    float: left;
  }
  .wpj{
    width: 16.66%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-right: 1px dashed #D4D4D4;
    float: left;
  }
  .wpj span{
    width: 33.33%;
    float: left;
    text-align: center;
  }
  .setFontTitle{
    font-size: 14px;
  }
  .setFontText{
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
  }
  .setFontOdds{
    font-size: 14px;
    color: #ed4941;
  }


    .racing_game_navbox{
        padding: 10px 0;
        overflow: hidden;
    }
    .racing_game_navbox .game_navbox_top{
        float: left;
        align-items: center;
        font-size: 0px;
    }
    .racing_game_navbox .game_navbox_top>a{
        display: inline-block;
        height: 24px;
        line-height: 24px;
        border:1px solid #f6f6f6;
        color:#575757;
        padding: 0 7px;
        font-size: 13px;
    }
    .racing_game_navbox .game_navbox_top>a.parent_nav{
        margin-right: 15px;
    }
    .racing_game_navbox .game_navbox_top>a.chid_nav{
        margin-left: 10px;
    }
    .racing_game_navbox .game_navbox_top>a:hover{
        color:#1f7877;
        border:1px solid #1f7877;
    }
    .racing_game_navbox .game_navbox_top>a.parent_nav_select{
        background: #1f7877;
        color:#fff;
    }
    .recing_content_main{
      width:16.66%;
      /*background-color: #0e51a8;*/
      float: left;
        /*align-items: center;*/
        overflow: hidden;
    }
    .recing_content_left{
        width: 80px;
        height: 60px;
        text-align: center;

        font-size: 12px;
        color:#8e8e8e;
        line-height: 22px;
        justify-content: center;
    }
    .recing_content_center{
        overflow: hidden;
        text-align: center;
        margin-left: 13px;

    }
    .recing_content_center>.recing_con_cenitem{
        justify-content: center;
    }
    .checed_false{
        display: inline-block;
        /*background-image: url(../../static/img/gametype/num_bg.png);*/
        /*background-size: 45px 45px;*/
        /*background-position: center center;*/
        /*background-repeat: no-repeat;*/
        color: #000;
        font-size: 20px;
        width: 45px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        cursor: pointer;
        margin:  0 6px;
         border: 1px solid #c5c5c5;
      border-radius: 45px;
    }
    .checed_true{
        display: inline-block;
        /*background-image: url(../../static/img/gametype/winning_bg.png);*/
        /*background-size: 45px 45px;*/
        /*background-position: center center;*/
        /*background-repeat: no-repeat;*/
        color: white;
        font-size: 20px;
        width: 45px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        cursor: pointer;
        margin:  0 6px;
      background-color: #299b8f;
      border-radius: 45px;
    }
    .recing_content_center>.recing_con_cenitem>a.checed_true{
        /*background-image: url(../../static/img/gametype/winning_bg.png);*/
        /*color: white;*/
    }
    .recing_content_center>.recing_con_cenitem>a.checed_false{
        /*background-image: url(../../static/img/gametype/num_bg.png);*/
        /*color:#3c4243;*/
    }
    .recing_content_center>.recing_con_cenitem>p{
        color:#8e8e8e;
        font-size: 12px;
    }
    .recing_content_center>.recing_con_cenitem>p.no_raci_chioce{
        color:#f83f3f;
    }
    .recing_content_right{
        justify-items: center;
        align-items: center;
        font-size: 0px;
    }
    .recing_content_right>.recing_con_rightitem{
        display: inline-block;
        width: 27px;
        height: 27px;
        border:1px solid #cdcdcd;
        text-align: center;
        font-size: 13px;
        line-height: 27px;
        color:#000;
        margin-left: 11px;
        background-color: #fff;
        cursor: pointer;
    }
    .recing_content_right>.recing_con_rightitem:hover{
        background:#1f7877;
        color:#fff;
    }
    .recing_content_right>.con_rightitem_select{
        border:1px solid #1f7877;
        background-color: #1f7877;
        color:white;
    }
</style>


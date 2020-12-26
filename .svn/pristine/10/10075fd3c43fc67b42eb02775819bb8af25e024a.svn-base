<template>
    <!-- 历史开奖 -->
    <div class="historyLottery">
        <!-- 导航 -->
        <div class="history_lottery_navbox">
            <ul class="cf">
                <li class="history_select_tab" @mouseover="navlotteryShow" @mouseleave="navlotteryHide" >
                    <div>{{navText}}</div>
                    <ul class="history_drop_down" v-show="hoverState">
                        <li class="box_h history_drop_item" v-for="(item,index) in navAry" :key="index">
                            <img :src="url+item.WebIco" :alt="item.NvgName"/>
                            <div class="box_flex cf">
                                <a class="navlotter_game_btn" v-for="value in item.LotteryList" :key="value.LgId" :data-id="value.LgId"  :data-index="value.LsId" :data-name="value.Name" @click="setID">{{value.Name}}</a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- 选项卡 -->
        <div class="history_lottery_tabbar cf">

            <a :class="['history_tabbar_item',type==0?'choice_this':'']" data-id="0" @click="selectType">最近30期开奖数据</a>
            <a :class="['history_tabbar_item',type==1?'choice_this':'']" data-id="1" @click="selectType">最近50期开奖数据</a>
            <a :class="['history_tabbar_item',type==2?'choice_this':'']" data-id="2" @click="selectType">最近100期开奖数据</a>
            <a :class="['history_tabbar_item',type==3?'choice_this':'']" data-id="3" @click="selectType">今日数据</a>
        </div>
        <!-- 表格 -->
        <div class="history_lottery_tablebox">
            <table  cellspacing="0" cellpadding="0">
                <thead>
                    <tr class="table_th_text">
                        <th>期号</th>
                        <th>开奖时间</th>
                        <th>开奖号码</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in ary" :key="index">
                        <td>{{item.FormatLssue}}</td>
                        <td>{{item.OpenTime}}</td>
                        <td class="history_lottery_gift">
                            <div class="box_h table_gift_mainbox">

                                <div :class="isNaN(value)?'':'table_gift_item'" v-for="(value,num) in item.OpenNumber" :key="num">{{value}}</div>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 表格为空的样式 -->
        <div class="table-empty" v-show="ary.length==0">
            <img src="@/assets/zjzh/empty.png" style="width: 102px;height: 78px;">
            <div class="table-empty-text">暂无记录</div>
        </div>
        <div style="height:20px;"></div>
    </div>
</template>
<script>
// 引用axios封装文件
import {postAjax,getAjax} from "../../util/ajax.js";
import {SysKey} from "../../util/sysconfig";
export default {
    data(){
        return{
           hoverState:false,
           url:SysKey("ImgServerUrl").SysValue, //图片地址
           GameIds:this.$route.query.id, //游戏ID
           ary:[], //历史记录,
           navAry:[], //导航栏数据,
           type:0, //当前请求数据,
           navText:"" //导航栏显示标题
        }
    },
    methods:{
        // 显示下拉
        navlotteryShow(){
            this.hoverState = true
        },
        // 隐藏下拉
        navlotteryHide(){
            this.hoverState = false
        },
        // 获取数据
        getList(){
            let that = this
            let url = "api/Lssue/GetLssueOpenHistory?lgId="+that.GameIds+"&type="+that.type
            let load = this.$loading({
                lock: true,
                text: '加载中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0,0,0,0)',
                customClass:'all_vue_loading'
            })
            postAjax(url)
            .then(function(data){
                if(data.IsSucess){
                    that.ary = data.Data
                    load.close() //关闭加载层
                }
                else{
                  load.close() //关闭加载层
                }
            })
            .then(function(){
                that.ary.forEach(item=>{
                    if(that.GameIds == 20 || that.GameIds == 19 || that.GameIds == 18){
                         item.OpenNumber = item.OpenNumber.split("=")[0].split("").concat(["="].concat(item.OpenNumber.split("=")[1]))
                    }
                    else{
                        item.OpenNumber = item.OpenNumber.split(",")
                    }

                })
            })

        },
        // 获取导航数据
        navList(){
            let that = this;
            let url = "Api/Lnc/Get";
            getAjax(url)
            .then(function(data){
                that.navAry = data.Data;

            })
            .then(function(){
                that.navAry.forEach(item=>{
                    item.LotteryList.forEach(e=>{
                        if(e.LgId == that.GameIds){
                            that.navText = e.Name

                        }
                    })
                })
            })
            .then(function(){
                let str = that.navText+"历史开奖"
                $('title').html(str)
            })
        },
        setID(e){
            this.navlotteryHide()
            this.GameIds =e.target.dataset.id
            this.navText = e.target.dataset.name
        },
        // 选择导航
        selectType(e){
            let index = e.target.dataset.id
            this.type = index
            this.getList()
        }
    },
    mounted(){
        //隐藏顶部
      this.$store.commit('setHead', false)
      this.$store.commit('setFoot', false)
    },
    destroyed(){
        // 页面被销毁时恢复
      this.$store.commit('setHead', true)
      this.$store.commit('setFoot', true)
    },
    created(){

        this.getList()
        this.navList()
    },
    watch:{
        "GameIds":function(){
            this.getList()
        },
        "navText":function(){
            $('title').html(this.navText+"历史开奖")
        }
    }
}
</script>
<style>

    .historyLottery{
        width:100%;
        background-color: #fff;
    }
    .history_lottery_navbox{
        width: 100%;
        height: 80px;
        background-color: #303134;
    }
    .history_lottery_navbox>ul>li{
        float: left;
        text-align: center;
        font-size: 18px;
        color:#fff;
        cursor: pointer;
        position: relative;

    }

    .history_lottery_navbox>ul>li>div{
        width:240px;
        line-height: 80px;
        display: block;
        background-image: url(../../static/img/arrow_down.png);
        background-position: center right 46px;
        background-repeat: no-repeat;
        background-size: 18px 15px;
        height: 80px;
    }
    .history_select_tab{
        background-color: #1d7272;
    }
    /* 下拉框 */
    .history_select_tab:hover .history_drop_down{
        display: block;
    }
    .history_drop_down{
        position:absolute;
        width:512px;
        background-image: url(../../static/img/lottry_bg2.png);
        z-index:66;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        left: 20px;
        top:70px;
        padding: 35px 30px 15px;
        font-size: 0px;
        overflow: hidden;
    }
    .history_drop_item{
        align-items: center;
        font-size: 0px;
        overflow: hidden;
        margin-bottom: 15px;
    }
    .history_drop_item img{
        margin-right: 30px;
        width: 55px;
    }
    .history_drop_item .navlotter_game_btn{
        width: 118px;
        height: 24px;
        border:1px solid #559798;
        text-align: center;
        display: block;
        color:#cfe3ff;
        cursor: pointer;
        font-size: 12px;
        line-height: 22px;
        margin: 0 1px;
        float: left;
        margin-bottom: 2px;
    }
    .history_drop_item .navlotter_game_btn:hover{
        background-color: #1f7877;
    }
    /* 选项卡 */
    .history_lottery_tabbar{
        padding: 20px 38px;
        overflow: hidden;

    }
    .history_tabbar_item{
        border-radius: 3px;
        border:1px solid #1d7272;
        float: left;
        margin: 0 5px;
        line-height: 38px;
        color:#1d7272;
        padding:0 26px;
        cursor: pointer;
    }
    .history_lottery_tabbar>.choice_this{
        background-color: #1d7272;
        color:white;
    }
    /* 表格 */
    .history_lottery_tablebox{
        padding: 0 20px;
        overflow: hidden;
        text-align: center;
    }
    .history_lottery_tablebox table{
        width: 100%;
        border-right:1px solid #cdd5dc;
        border-bottom:1px solid #cdd5dc;
    }
    .history_lottery_tablebox>table td,.history_lottery_tablebox>table th{
        border-top:1px solid #cdd5dc;
        border-left:1px solid #cdd5dc;
    }
    .table_th_text>th{
        font-size: 18px;
        font-weight: normal;
        color:#111311;
        padding: 17px 0;
    }
    .table_th_text{
        background-color: #f4fafd;
        overflow: hidden;
    }
    tbody>tr>td{
        line-height: 50px;
        color:#424242;
        font-style: normal;
        font-size: 14px;
    }
    .historyLottery tbody>tr:hover{
        background-color: #f4fafd;
    }
    .table_gift_mainbox{
        align-items: center;
        justify-content: center;
    }
    .history_lottery_gift{
        padding-top: 6px;
    }
    .table_gift_item{
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 38px;
        background-image: url(../../static/img/gametype/winning_bg.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 40px 40px;
        font-size: 16px;
        font-weight: bold;
        color:white;
        margin: 0 2px;
    }
    .table-empty{padding-top:80px;text-align:center;}
	.table-empty-text{font-size:14px;margin-top:20px;color:#8b918b;}
</style>



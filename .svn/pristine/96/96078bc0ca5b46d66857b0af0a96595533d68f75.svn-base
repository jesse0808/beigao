<template>
    <div class="">
        <!-- 部分选号导航栏 -->
        <ul class="twenty_nav_box box_h">
            <li :class="nav_num1 == index?'twenty_select':''" v-for="(value,index) in navlist" :key="index">
                <div>{{value.navname}}</div>
            </li>
        </ul>
        <!-- 次级选项卡 -->
        <ul class="twent_secondary_nav box_h">
            <li v-for="(value,index) in navlist[nav_num1].secondNav" :key="index">
                <a href="javascrpit::" :class="nav_num2== index?'secondary_select':''">{{value.name}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        navAry:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
            nav_num1:0,
            nav_num2:0,
            navlist:this.navAry
        }
    },

}
</script>
<style>
     .gametype_topnav .twenty_nav_box{
        border-bottom:2px solid #2ba498;
        line-height: 40px;
        padding: 0 18px;
        overflow: hidden;
    }
    .gametype_topnav .twenty_nav_box>li>div{
        width: 80px;
        text-align: center;
        letter-spacing: 1px;
        cursor: pointer;
    }
    .gametype_topnav .twenty_nav_box>li{
        width: 80px;
        color:#232924;
        font-size: 14px;
    }
    .gametype_topnav .twenty_nav_box>.twenty_select{
        background-color: #2ba498;
        color:white;
    }
    .twent_secondary_nav{
        height: 58px;
        border-bottom: 1px dashed #c7c7c7;
        overflow: hidden;
        align-items: center;
        padding: 0 15px;
    }
    .twent_secondary_nav>li{
        cursor: pointer;
        width: 96px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin: 0 3px;
        font-size:14px;
    }
    .twent_secondary_nav>li>a{
        display: block;
        color:#232924;
        border:1px solid #f6f6f6;
        background: #ffffff;
    }
    .twent_secondary_nav>li>a:hover{
        border:1px solid #1f7877;
        background: #fff;
    }
    .twent_secondary_nav .secondary_select{
        background: #1f7877;
        color:#fff;
    }
    .twent_secondary_nav .secondary_select:hover{
        background: #1f7877;
        color:#fff;
    }
</style>



<template>
    <!-- 500-->
    <div class="allgame-mainbox">
        <div class="box_center">
            <div class="four_error_box box_s">
                <img src="../../static/img/500.png" />
                <p class="four_title">额...服务器出错了...</p>
                <router-link class="fourto_home" to="/home">返回首页</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style>
     .four_error_box{
        height: 854px;
        width: 100%;
        background-color: #fff;
        margin-top: 23px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .four_title{
        font-size: 14px;
        color:#26958d;
        margin:31px 0;
    }
    .fourto_home{
        display: inline-block;
        background: #2ba498;
        text-align: center;
        color:white;
        height: 34px;
        line-height: 34px;
        border-radius: 2px;
        width: 120px;
        font-size: 13px;
    }
</style>



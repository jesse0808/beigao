<template>
    <div class="collect">
        <div class="collect_btn" v-if="collected" @click="cancleCollect()">
            <div class="trendCollect_img">
                <img  src="../../assets/img/gametype/collect_a.png">
            </div>
            <div class="trendCollect_title">{{collected?"取消收藏":"立即收藏"}}</div>
        </div>
        <div class="collect_btn" v-else @click="setCollect()">
            <div class="trendCollect_img">
                <img src="../../assets/img/gametype/collect.png">
            </div>
            <div class="trendCollect_title">{{collected?"取消收藏":"立即收藏"}}</div>
        </div>
    </div>
</template>

<script>
import {getAjax} from "../../util/ajax.js"

export default {
    name:"collect",
    props:["lgId"],
    data(){
        return{
            collected:false,//该游戏是否被收藏  true为已收藏，false为未收藏
        }
    },
    created(){
        this.checkCollect();
    },
    methods:{
        //检查该游戏是否被收藏
        checkCollect(){
            getAjax("/api/User/GetUserFavoritesLotteryList").then(data=>{
                if(data.IsSucess){
                    data.Data.forEach(item => {
                        if(item.LgId===this.lgId-0){
                            this.collected=true;
                        }
                    });
                }
            })
        },

        //设置收藏
        setCollect(){
            let url="/api/User/AddUserFavoritesLottery?lgId="+this.lgId;
            getAjax(url).then(data=>{
                if(data.IsSucess){
                    this.$message.success('恭喜您，收藏成功！');
                    this.collected=true;
                    const isSet=this.$store.state.isCollectList+1;
                    this.$store.commit("setIsCollectList",isSet);
                }else{
                    this.$message.error(data.Message);
                }
            })
        },
        
        //取消收藏
        cancleCollect(){
            let url="/api/User/DeleteUserFavoritesLottery?lgId="+this.lgId;
            getAjax(url).then(data=>{
                if(data.IsSucess){
                    this.$message.success("恭喜您，取消收藏成功");
                    this.collected=false;
                    const isSet=this.$store.state.isCollectList+1;
                    this.$store.commit("setIsCollectList",isSet);
                }else{
                    this.$message.error(data.Message);
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .collect{
        cursor: pointer;
        
        .collect_btn{
            width:100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            fl
            .trendCollect_img{
                width:38px;
            }
        }
        
    }
</style>
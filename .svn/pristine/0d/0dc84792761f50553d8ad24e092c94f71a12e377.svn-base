<template>
    <div class="collect box_center">
        <div class="collect_title"></div>
        <div class="collect_con">
            <ul>
                <collectGame v-for="(item,index) in collectList" :key="index" :id="item.LgId"></collectGame>
            </ul>
        </div>
    </div>
</template>

<script>
    import collectGame from '../conmon/collectGame'
    import {getAjax} from "../../util/ajax.js"

    export default {
        name:"collectList",
        components: {collectGame},
        data(){
            return{
                collectList:[],//收藏数据
            }
        },
        mounted(){
            this.getCollect();
        },
        watch:{
            "$store.state.isCollectList"(){
                this.getCollect();
            }
        },
        methods:{
            //获取收藏数据
            getCollect(){
                getAjax("/api/User/GetUserFavoritesLotteryList").then(data=>{
                    if(data.IsSucess){
                        this.collectList=data.Data.slice(0,6);
                    }
                })
            },
            
        }
    }
</script>

<style lang="scss" scoped>
    .collect{
        display: flex;
        justify-content: flex-start;
        margin-top: 22px;
        height: 50px;

        .collect_title{
            width:36px;
            height: 50px;
            background: url("../../assets/img/gametype/collect_inco.png") center no-repeat;
        }

        .collect_con{
            width:1150px;
            height: 100%;
            margin-left: 14px;

            ul{
                display: flex;
                justify-content: flex-start;
            }
        }
    }
</style>
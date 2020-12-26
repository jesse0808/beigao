<template>
    <div class="thrid_lobby_game">
        <a href="javascript:void(0)" @click="clickHotGame(item)" v-for="(item,index) in fishingGames" :key="index">
            <!--<img  alt="" v-lazy="url + item.Icon">-->
            <div><van-image lazy-load :src="url+item.Icon"/></div>
            <p>{{item.CN_Name}}</p>
        </a>
        <a href="javascript:void(0)" v-if="fishingGames.length%2 !== 0">
            <div class="un_game">
                <p>更多精彩</p>
                <p>敬请期待</p>
            </div>
        </a>
    </div>
</template>

<script>
  import {SysKey} from "../../../util/sysconfig";
  import {getGameRouter} from "../../../util/game";
  import {selfConfig} from "../../../util/lottery";

  export default {
    name: "index",
    data(){
      return {
        fishingGames:[]
      }
    },
    computed: {
      url() {
        return SysKey("ImgServerUrl").SysValue
      },
    },
    created() {
      let that = this;
        that.fishingGames = [];//获取的接口中没有捕鱼的数据 本地写死 图片在服务器
        that.fishingGames.push({GameId:2,CN_Name:"AG捕鱼王",HallCode:"6",Icon:"/game/third/logov1/agby.png"})
        that.fishingGames.push({GameId:12,CN_Name:"CQ9黄金渔场",HallCode:"AB3",Icon:"/game/third/logov1/cq9by1.png"})
        that.fishingGames.push({GameId:12,CN_Name:"CQ9黄金渔场2",HallCode:"AB1",Icon:"/game/third/logov1/cq9by2.png"})
        that.fishingGames.push({GameId:12,CN_Name:"CQ9一炮捕鱼",HallCode:"AT01",Icon:"/game/third/logov1/cq9ypby.png"})
    },
    methods:{
      clickHotGame(data){
        getGameRouter(data)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>

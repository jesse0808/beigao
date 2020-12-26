<template>
    <div class="thrid_lobby_game">
        <a href="javascript:void(0)" @click="clickHotGame(item)" v-for="(item,index) in dzGames" :key="index">
            <div><van-image lazy-load :src="url+item.Icon"/></div>
            <p>{{item.CN_Name}}</p>
        </a>
        <a href="javascript:void(0)" v-if="dzGames.length%2 !== 0">
            <div class="un_game">
                <p>更多精彩</p>
                <p>敬请期待</p>
            </div>
        </a>
    </div>
</template>

<script>
  import {SysKey} from "../../../util/sysconfig";


  export default {
    name: "index",
    data(){
      return {
        dzGames:[]
      }
    },
    computed: {
      url() {
        return SysKey("ImgServerUrl").SysValue
      },
    },
    created() {
      let that = this;

        let hotGame = that.$store.state.thirdGames
        that.dzGames = hotGame.filter((item,index)=>{
          if (item.Category == 102){
            return item
          }
        })
        //加一个特殊的ag电子
        that.dzGames.push({GameId:2,CN_Name:"AG电子",Icon:"/game/third/logov1/agdz.png"})
    },
    methods:{
      clickHotGame(data){
        this.$router.push({path:'/gameBox',query:{id:data.GameId,name:data.CN_Name}})
      }
    }
  }
</script>

<style lang="less" scoped>

</style>

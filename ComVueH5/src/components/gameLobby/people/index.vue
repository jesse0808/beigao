<template>
    <div class="thrid_lobby_game">
        <a href="javascript:void(0)" @click="clickHotGame(item)" v-for="(item,index) in peopleGames" :key="index">
            <!--<img  alt="" v-lazy="url + item.Icon">-->
            <div><van-image lazy-load :src="url+item.Icon"/></div>
            <p>{{item.CN_Name}}</p>
        </a>
        <a href="javascript:void(0)" v-if="peopleGames.length%2 !== 0">
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
        peopleGames:[]
      }
    },
    computed: {
      url() {
        return SysKey("ImgServerUrl").SysValue
      },
    },
    created() {
      let that = this;
        let hotGame =that.$store.state.thirdGames
        that.peopleGames = hotGame.filter((item,index)=>{
          if (item.Category == 101){
            return item
          }
        })
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

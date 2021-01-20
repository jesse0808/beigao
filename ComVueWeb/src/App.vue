<template>
    <div id="app" v-if="isLoadSysData" :class="changeTheme(this.theme)">
        <!-- 头部组件 -->
        <header-dom v-if="$store.state.header"/>
        <!-- 中间内容组件 -->
        <router-view class="mian_box" v-if="isRouterAlive"/>
        <!-- 底部组件 -->
        <footer-dom v-if="$store.state.footer"/>
    </div>
</template>

<script>
  import {SysKey, loadSystemConfig, exLoadSystemConfig} from "./util/sysconfig";

  export default {
    name: 'App',
    provide() {
      return {
        reload: this.reload,
      }
    },

    data() {
      return {
        isLoadSysData: false,
        isRouterAlive: true,
      }
    },

    computed:{
      theme(){
        let lsTheme=localStorage.getItem("theme")-0;
        if(!lsTheme){
          return this.$store.state.theme;
        }else{
          if(lsTheme==this.$store.state.theme){
            return this.$store.state.theme;
          }else{
            return lsTheme;
          }
        }
        
      }
    },
    
    created() {
      let that = this;
      exLoadSystemConfig().then((data) => {
        if (!data) {
          return;
        }
        if (data.IsSucess) {
          window.systemData = data.Data
        }
        this.isLoadSysData = true

        function goPAGE() {
          if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            let path = that.$route.path;
            if (path !== '/userLogin' || path !== '/userRegister') {
              window.location.href = window.location.origin + '/wap'
            }
          } else {
          }
        }

        goPAGE();
        // 修改网站标题
      //  document.title = SysKey("SysName").SysValue;
      })

    },
    
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      },
      changeTheme(val){
        switch (val) {
          case 0: //明亮
            return "light";
            break;

          case 1: //暗夜
            return "black";
            break;
        };
      }
    }
  }
</script>

<style>
    .main_box {
        background: #fff;
        position: relative;
        overflow: hidden;
    }


</style>
// 覆盖浏览器默认滚动条 chrome
<style lang="scss">
    ::-webkit-scrollbar {
        width: .5rem;
        height: .5rem;
        background: hsla(0, 0%, 100%, 0.6);
    }

    ::-webkit-scrollbar-track {
        border-radius: 0;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        background-color: rgba(95, 95, 95, .4);
        transition: all .2s;
        border-radius: .5rem;

        &:hover {
            background-color: rgba(95, 95, 95, .7);
        }
    }

    html {
        overflow-y: auto;
        scrollbar-color: rgba(0, 0, 0, 0.397) transparent;
        scrollbar-track-color: rgba(0, 0, 0, 0.397);
        -ms-scrollbar-track-color: rgba(0, 0, 0, 0.397);
        scrollbar-width: thin;
    }
</style>

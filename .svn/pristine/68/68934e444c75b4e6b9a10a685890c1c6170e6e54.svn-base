import Vue from 'vue'
import Router from 'vue-router'
import {Message} from 'element-ui'
import store from "../store";
// 首页
import Home from "../components/mainPage/Home.vue"
// 28系列
import Twenty from "../components/mainPage/Twentyeight.vue"
// 快三
import Quickthree from "../components/mainPage/Quickthree.vue"
// 赛车
import Racing from "../components/mainPage/Racing_game.vue"
// 重庆时时彩
import Timehonor from "../components/mainPage/Timehonored.vue"
// 404
import fourError from "../components/404/error_page.vue"
// 500
import fiveError from "../components/500/error_page.vue"
// 帮助中心
import helpCenter from "../components/helpcenter/helpcenter.vue"
// 帮助中心子组件
import aboutlottery from "../components/helpcenter/aboutlottery.vue"
import gameintro from "../components/helpcenter/gameIntro.vue"
import userRuler from "../components/helpcenter/userRulers.vue"
import cash from "../components/helpcenter/Cash.vue"
import requestion from "../components/helpcenter/requestion.vue"
import respon from "../components/helpcenter/respon.vue"
import playintro from "../components/helpcenter/palyIntro.vue"
// 历史开奖
import historyLottery from "../components/mainPage/historyLottery.vue"
// 用户登录或注册
import userlogin from "../components/login/login.vue"
import login from "../components/login/login_item.vue"
import register from "../components/login/register_item.vue"
// 线路检测
import linedetection from "../components/mainPage/Line _detection.vue"
// 客户端下载
import Client from "../components/Client/ClientDownload.vue"
// 号码走势
import Trendmap from "../components/Trendmap/Trendmap.vue"
// 切换盘口模式
import gamePanel from "../components/Subcomponents/game_Panel.vue"
// 个人中心
import UserCenter from "../components/mainPage/UserCenter.vue"
//体育游戏
import sportsGame from "../components/sport/sport.vue"
// 开元棋牌
import qpGame from "../components/qipaiGames/qipaiGames.vue"
// pt艺游
import ptGame from "../components/ptGames/ptGames.vue"
// 真人视讯
import peopleGame from "../components/peopleGame/peopleGame.vue"
// 优惠活动主要页面
import preMain from "../components/prefectActive/preMain"
import prefectSign from "../components/prefectActive/prefectSign"
import prefectBet from "../components/prefectActive/prefectBet"
import prefectRegister from "../components/prefectActive/prefectRegister"
import prefectReturn from "../components/prefectActive/prefectReturn"
import prefectRecharge from "../components/prefectActive/prefectRecharge"
import {exLoadSystemConfig} from "../util/sysconfig";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',//设置默认指向的路径
      name: '主页'
    },
    // 首页
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    //开元棋牌
    {
      path: '/qpGame',
      name: 'qpGame',
      component: qpGame
    },
    //pt艺游
    {
      path: '/ptGame',
      name: 'ptGame',
      component: ptGame
    },
    //真人视讯
    {
      path: '/peopleGame',
      name: 'peopleGame',
      component: peopleGame
    },
    //捕鱼
    {
      path:'/fishGame',
      name:'fishGame',
      component: ()=> import('../components/fish/fishGame.vue')
    },
    //电子
    {
      path: '/electron',
      name: 'electron',
      component: ()=> import('../components/electron/electron.vue')
    },
    //六合彩
    {
      path: '/markSix',
      name: 'markSix',
      component: ()=> import('../components/mainPage/markSix.vue')
    },
    // 28系列页面
    {
      path: '/twent',
      name: 'twenteight',
      component: Twenty
    },
    // 快三页面
    {
      path: '/quick',
      name: 'Quickthree',
      component: Quickthree
    },
    // 赛车游戏页面
    {
      path: "/Racing",
      name: "Racing",
      component: Racing
    },
    // 重庆时时彩页面
    {
      path: "/Time",
      name: "Timehonor",
      component: Timehonor
    },
    // 404页面
    {
      path: "/fourError",
      name: "fourError",
      component: fourError
    },
    // 500
    {
      path: "/fiveError",
      name: "fiveError",
      component: fiveError
    },
    //优惠活动
    {
      path: '/preMain',
      name: "preMain",
      component: preMain,
      // redirect: '/sign',
      // children:[
      //   // 每日签到
      //    {
      //     path:"/sign",
      //     component:prefectSign
      //    },
      //   //  投注彩金
      //   {
      //     path:"/bet",
      //     component:prefectBet
      //    },
      //   //  首充金额
      //   {
      //     path:"/regis",
      //     component:prefectRegister
      //    },
      //   //  三方反水
      //   {
      //     path:"/retu",
      //     component:prefectReturn
      //    },
      //   //  充值大放送
      //   {
      //     path:"/recharge",
      //     component:prefectRecharge
      //   },
      // ]
    },
    //帮助中心
    {
      path: "/help",
      name: "helpCenter",
      component: helpCenter,
      redirect: '/first',
      children: [
        // 关于258彩票
        {
          path: '/first',
          component: aboutlottery
        },
        // 彩种介绍
        {
          path: "/second",
          component: gameintro
        },
        // 玩法介绍
        {
          path: "/three",
          component: playintro
        },
        //责任博彩
        {
          path: "/four",
          component: respon
        },
        //如何充值
        {
          path: "/five",
          component: requestion
        },
        //提现须知
        {
          path: "/six",
          component: cash
        },
        //使用条款
        {
          path: "/sven",
          component: userRuler
        },
      ]
    },
    // 用户登录或注册
    {
      path: "/login",
      name: "login",
      component: userlogin,
      redirect: "/userLogin",
      children: [
        {
          path: "/userLogin",
          component: login,
          beforeEnter: (to, form, next) => {
            router.push('home');
            store.commit('setLoginAfter', true)
          }
        },
        {
          path: "/userRegister",
          component: register
        }
      ]
    },
    // 切换盘口玩法
    {
      path: "/gamePanel",
      name: "gamePanel",
      component: gamePanel
    },
    // 历史开奖
    {
      path: "/history",
      name: "historyLottery",
      component: historyLottery
    },
    // 线路检测
    {
      path: "/line",
      name: "linedetection",
      component: linedetection
    },
    // 客服端下载
    {
      path: "/Client",
      name: "Client",
      component: Client
    },
    //号码走势图
    {
      path: "/Trend",
      name: "Trendmap",
      component: Trendmap
    },
    //个人中心
    {
      path: "/UserCenter",
      name: "UserCenter",
      component: UserCenter,
      beforeEnter: (to, form, next) => {
        let xxx = store.state.userInfo;
        if (xxx.UtId === 3) {
          Message.error('请登录正式账号')
        } else {
          next()
        }
      }
    },
    // 体育游戏
    {
      path: "/sportGame",
      name: "sportsGame",
      component: sportsGame
    },
    //注册页面
    {
      path: "/register",
      name: "register",
      component: () => import('../components/login/register.vue')
    }
  ]
})

// 引入提示框
let v = new Vue();
const alt = v.$alert
//使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  store.commit('setLoginAfter', false)
  if (to.path === '/Time' || to.path === "/Racing" || to.path === "/quick" || to.path === "/twent" || to.path === "/gamePanel" || to.path === "/markSix") {
    let token = localStorage.getItem('Authorization');
    // 判断有无token
    if (token === null || token === "" || token === undefined) {
      store.commit('setLoginAfter', true)
      // Message({
      //   showClose: true,
      //   message: '请先登录账户',
      //   type: 'warning'
      // })
      return false;
    } else {
      store.commit('rightDom',true)
      next();
    }
  } else {
    store.commit('rightDom',false)
    document.getElementById('app').style.backgroundImage = `url(../../static/img/bg_B01.jpg)`
    document.getElementById('app').style.backgroundColor = `#e3e1e6`
    next();
  }
});
export default router

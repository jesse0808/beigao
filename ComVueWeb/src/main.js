// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {SysKey,loadSystemConfig} from "./util/sysconfig";

// 引入element-ui
import element_ul from "element-ui"
// 引入公共的CSS文件
import common_css from "../src/static/css/common.css"
import icon from "../src/static/css/iconfont.css"
// 手动引入element样式
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './App'

import $ from 'jquery'

import VueWorker from 'vue-worker'
Vue.use(VueWorker)
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
// 引入头部和底部组件
import header from './components/header/header.vue'
import footer from './components/footer/footer.vue'

// 引入swipecss文件
import swiper_css from "../src/static/css/swiper.css"
//引入element样式
import 'element-ui/lib/theme-chalk/base.css';
if (process.env.NODE_ENV == "development") {
  console.log("=== u are development ===");
} else {
  console.log = () => {};
}

Vue.use(swiper_css)
Vue.use(element_ul)
Vue.use(icon)
Vue.use(common_css)
Vue.config.productionTip = false
// 引入倒计时js文件
// import timer from "../src/static/js/jquery.countdown.js"

// Vue.use(timer)
// 引入vuex状态控制文件
import store from "../src/store/index.js"

// Vue.use(QRCode)
import router from './router'

window.eventBus = new Vue();

// 注册头部和底部组件
Vue.component('header-dom', header);
Vue.component('footer-dom', footer);



export  default  new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
})

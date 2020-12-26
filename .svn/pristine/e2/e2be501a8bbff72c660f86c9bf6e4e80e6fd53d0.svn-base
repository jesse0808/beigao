import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/common.less'
import 'vant/lib/index.css'
//import './util/rem.js'
import 'lib-flexible'
import VueClipboard from "vue-clipboard2";

import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'
import 'babel-polyfill'

Vue.use(VXEUtils, XEUtils)

import {
    Swipe,
    SwipeItem,
    Lazyload,
    Button,
    Tabbar,
    TabbarItem,
    Search,
    Sidebar,
    SidebarItem,
    NoticeBar,
    Toast,
    NavBar,
    Icon,
    Switch,
    Picker,
    Field,
    Popup,
    Dialog,
    CountDown,
    PullRefresh,
    DatetimePicker,
    Tab,
    Tabs,
    Stepper,
    Loading,
    NumberKeyboard,
    List,
    Cell,
    Overlay,
    Image,
    Area,
    Progress
} from 'vant'
import titleJs from './components/customcomponents/index.js'
import iconfont from './assets/css/iconfont.css'

Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Button).use(Tabbar).use(TabbarItem).use(Search).use(NoticeBar);
Vue.use(Sidebar).use(SidebarItem).use(Toast).use(NavBar).use(Icon).use(Switch).use(Picker).use(Field).use(Popup);
Vue.use(Dialog).use(CountDown).use(PullRefresh).use(DatetimePicker).use(Tabs).use(Tab).use(Stepper).use(Loading);
Vue.use(NumberKeyboard).use(Image).use(Area).use(Progress)
Vue.config.productionTip = false
Vue.use(titleJs)
Vue.use(VueClipboard)
Vue.use(iconfont)
Vue.use(List)
Vue.use(Cell)
Vue.use(Overlay)

//注册 安卓webview 调用js  回退路由
window['AppBack'] = function () {
    // Dialog.alert({message: window.location.href});
    if (window.location.href.indexOf("#/homeItem") == -1)
        router.go(-1);
    else
        Toast("亲,在首页哦");
}


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

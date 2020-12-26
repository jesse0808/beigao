import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from "./store";
import {Toast,Dialog} from "vant";

Vue.use(Router).use(Toast)

let routerArr = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/homeItem',
        children: [
            {
                path: '/homeItem',
                meta: {index: 0},
                component: () => import('./components/homeItem/homeItem.vue')
            },
            {
                path: '/gameLobby',
                meta: {index: 1},
                component: () => import('./components/gameLobby/index.vue'),
            },
            {
                path: '/activity',
                meta: {index: 2},
                component: () => import('./components/activity/activity.vue')
            },
            {
                path: '/userCenter',
                meta: {index: 3},
                component: () => import('./components/userCenter/userCenter.vue'),
                beforeEnter: (to, from, next) => {
                    next()
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {index: 4},
        component: () => import( './views/login/login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        meta: {index: 4},
        component: () => import('./views/register/register.vue'),
    },
    {
        path: '/refresh',
        name: 'refresh',
        meta: {index: 4},
        component: () => import('./views/refresh.vue'),
    },
    {
        path: '/gameBox',
        name: 'gameBox',
        meta: {index: 4},
        component: () => import('./components/gameLobby/electronics/gameBox.vue'),
    },
    {
        path: '/activityBox',
        name: 'activityBox',
        meta: {index: 4},
        component: () => import('./components/activity/activityBox.vue'),
    },
    {
        path: '/bettingPage',
        name: 'bettingPage',
        meta: {index: 4},
        component: () => import('./components/lottery/bettingPage/index.vue'),
    },
    {
        path: '/lhc',
        name: 'lhc',
        meta: {index: 4},
        component: () => import('./components/lottery/lhc/index.vue'),
    },
    {
        path: '/pcDan',
        name: 'pcDan',
        meta: {index: 4},
        component: () => import('./components/lottery/pcDd/index.vue'),
    },
    {
        path: '/gfPlay',
        name: 'gfPlay',
        meta: {index: 4},
        component: () => import('./components/lottery/gfPlay/index.vue'),
    },
    {
        path: '/cpNav',
        name: 'cpNav',
        meta: {index: 4},
        component: () => import('./components/lottery/nav/index.vue'),
    },
    // {
    //     path: '/topUp',
    //     name: 'topUp',
    //     meta: {index: 4},
    //     component: () => import('./components/userCenter/polo/recharge.vue')
    // },
    {
        path: '/recharge',
        name: 'recharge',
        meta: {index: 4},
        component: () => import('./components/userCenter/polo/recharge.vue')
    },
    {
        path: '/rechargeInfo',
        name: 'rechargeInfo',
        meta: {index: 4},
        component: () => import('./components/userCenter/polo/rechargeInfo.vue')
    },
    {
        path: '/notices',
        name: 'notices',
        meta: {index: 4},
        component: () => import('./components/userCenter/polo/noticeList.vue')
    },
    {
        path: '/noticeinfo',
        name: 'noticeinfo',
        meta: {index: 4},
        component: () => import('./components/userCenter/polo/noticeinfo.vue')
    },
    {
        path: '/email',
        name: 'email',
        meta: {index: 4},
        component: () => import('./components/userCenter/polo/email.vue')
    },
    {
        path: '/withdraw',
        name: 'withdraw',
        meta: {index: 5},
        component: () => import('./components/userCenter/polo/cash.vue'),
    },
    {
        path: '/transfer',
        name: 'transfer',
        meta: {index: 6},
        component: () => import('./components/userCenter/polo/zhuanzhang.vue')
    },
    {
        path: '/zhuanzhangRecard',
        name: 'zhuanzhangRecard',
        meta: {index: 6},
        component: () => import('./components/userCenter/polo/zhuanzhangRecard.vue')
    },

    {
        path: '/userInfo',
        name: 'userInfo',
        meta: {index: 8},
        component: () => import('./components/userCenter/userInfo.vue')
    },
    {
        path: '/moneyFrom',
        name: 'moneyFrom',
        meta: {index: 9},
        component: () => import('./components/userCenter/polo/yingkui.vue')
    },
    {
        path: '/bettingRecord',
        name: 'bettingRecord',
        meta: {index: 9},
        component: () => import('./components/userCenter/polo/betinfo/betRecard.vue')
    },
    {
        path: '/afterRecord',
        name: 'afterRecord',
        meta: {index: 9},
        component: () => import('./components/userCenter/polo/zhinfo/zhuihaoRecard.vue')
    },
    {
        path: '/billRecard',
        name: 'billRecard',
        meta: {index: 9},
        component: () => import('./components/userCenter/polo/billRecard.vue')
    },
    {
        path: '/cashRecard',
        name: 'cashRecard',
        meta: {index: 9},
        component: () => import('./components/userCenter/polo/cashRecard.vue')
    },
    {
        path: '/rechargeRecord',
        name: 'rechargeRecord',
        meta: {index: 9},
        component: () => import('./components/userCenter/polo/rechargeRecard.vue')
    },
    {
        path: '/userData',
        name: 'userData',
        meta: {index: 9},
        component: () => import('./components/userCenter/user/userData.vue')
    },
    {
        path: '/bankCard',
        name: 'bankCard',
        meta: {index: 9},
        component: () => import('./components/userCenter/user/bankCard.vue'),
        beforeEnter: (to, from, next) => {
            const userinfo = store.state.userInfo;
            if (!userinfo.FullName) {
                Dialog.alert({
                    message: '还未绑定安全资料,现在去绑定',
                }).then(() => {
                    router.push('userData')
                });
            } else {
                next();
            }
        }
    },
    {
        path: '/addBankCard',
        name: 'addBankCard',
        meta: {index: 10},
        component: () => import('./components/userCenter/user/addBankCard.vue')
    },
    {
        path: '/amendPass',
        name: 'amendPass',
        meta: {index: 9},
        component: () => import('./components/userCenter/user/amendPass.vue')
    }
]

let agencyCenterRouter = [
    {
        path: '/agencyPolicy',
        name: 'agencyPolicy',
        meta: {index: 4},
        component: () => import('./components/agencyCenter/AgencyPolicy.vue')
    },
    {
        path: '/countReport',
        name: 'countReport',
        meta: {index: 4},
        component: () => import('./components/agencyCenter/CountReport.vue')
    },
    {
        path: '/followAccountRecord',
        name: 'followAccountRecord',
        meta: {index: 4},
        component: () => import('./components/userCenter/polo/zhinfo/zhuihaoRecard.vue')
    },
    {
        path: '/zhuihaoinfo',
        name: 'zhuihaoinfo',
        meta: {index: 4},
        component: () => import('./components/userCenter/polo/zhinfo/infoIndex.vue')
    },
    {
        path: '/thrdRecard',
        name: 'thrdRecard',
        meta: {index: 4},
        component: () => import('./components/userCenter/polo/thrdRecard.vue')
    },
    {
        path: '/openAccountCenter',
        name: 'openAccountCenter',
        meta: {index: 4},
        redirect: '/openAccountCenter/addMember',
        children: [
            {
                path: 'addMember',
                meta: {index: 0},
                component: () => import('./components/agencyCenter/newAccountCenter/addMember.vue')
            },
            {
                path: 'registerSetting',
                meta: {index: 0},
                component: () => import('./components/agencyCenter/newAccountCenter/registerSetting.vue')
            },
        ],
        component: () => import('./components/agencyCenter/OpenAccountCenter.vue')
    },
    {
        path: '/selfProfitAndLoss',
        name: 'selfProfitAndLoss',
        meta: {index: 4},
        component: () => import('./components/agencyCenter/SelfProfitAndLoss.vue')
    },
    {
        path: '/teamProfitAndLoss',
        name: 'teamProfitAndLoss',
        meta: {index: 4},
        component: () => import('./components/agencyCenter/TeamProfitAndLoss.vue')
    },
    {
        path: '/userList',
        name: 'userList',
        meta: {index: 4},
        component: () => import('./components/agencyCenter/UserList.vue')
    },
    {
        path: '/newRegisterLink',
        name: 'newRegisterLink',
        meta: {index: 4},
        component: () => import('./components/agencyCenter/newAccountCenter/newRegisterLink.vue')
    },
]

routerArr = routerArr.concat(agencyCenterRouter);

const router = new Router({
    routes: routerArr,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
router.beforeEach((to, from, next) => {
    // new Vue().$toast.clear();
    Toast.clear();
    let path = to.path;
    if (!localStorage.getItem('token')) //没登录
    {
        if (path == '/homeItem' || path == '/login' || path == '/register' || path == '/gameLobby' || path == '/activity' || path == '/refresh' || path=='/notices' || path=='/noticeinfo')
            next();
        else
            router.push('/login')
    } else {
        const userinfo = store.state.userInfo;
        if (userinfo.UtId==3 && (path == '/userCenter' || path == '/recharge' || path == '/bettingRecord' || path == '/afterRecord')) {
            Toast.fail('请登录正式账号');
        } else {
            next();
        }
    }
})
export default router

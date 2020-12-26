import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {checkUserOut} from "./util/user";
export default new Vuex.Store({
    state: {
        sysConfig: {},//配置文件
        userInfo: {},//用户信息
        noticeInfo: [],//网站公告信息
        lotteryData: [],//彩票游戏数组 包含导航
        thirdGames: [],//三方游戏数组
        thirdCategory: [],//三方游戏分类数组
        loginStatus: false,//登陆状态
        nowLineIndex: -1,//当前系统使用的线路
        keepAliveComponents: ['homeItem', 'gameLobby', 'activity'] // 缓存数组
    },
    mutations: {
        setNowLineIndex(state, data) {
            state.nowLineIndex = data
        },
        setSysConfig(state, data) {
            state.sysConfig = data
        },
        userOut(state) {
            state.userInfo = {};
        },
        setUserInfo(state, data) {
            state.userInfo = data
        },
        setNoticeInfo(state, data) {
            state.noticeInfo = data
        },
        setLotteryData(state, data) {
            state.lotteryData = data
        },
        setThirdGames(state, data) {
            state.thirdGames = data
        },
        setThirdCategory(state, data) {
            state.thirdCategory = data
        },
        setLoginStatus(state, boll) {
            state.loginStatus = boll
        },
        keepAlive(state, component) {
            // 注：防止重复添加（当然也可以使用Set）
            !state.keepAliveComponents.includes(component) && state.keepAliveComponents.push(component)
        },
        noKeepAlive(state, component) {
            const index = state.keepAliveComponents.indexOf(component)
            index !== -1 && state.keepAliveComponents.splice(index, 1)
        }
    },
    actions: {
        logout(context, vue) {
            checkUserOut(context.state.userInfo.Uid).then(data => {});//发送退出指令
            context.commit("userOut")
            context.commit("setLoginStatus", false);
            sessionStorage.clear();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('acctype');
        }
    }
})

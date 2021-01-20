import Vuex from "vuex"

import Vue from "vue";

import {postAjax} from '../util/ajax'

Vue.use(Vuex)
const store = new Vuex.Store({

  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    baseUrl:"http://202.133.242.100:81/",
    theme:0,//主题样式  0：明亮，1：暗夜  默认：0
    header: true, //头部状态
    footer: true, //底部状态
    header_top: true, //顶部状态栏
    suspension: false, //右侧悬浮状态
    userInfo: {}, //用户信息,
    navAry: [],//导航栏数据
    alertState: true,//弹窗状态
    loginStatus: false,//登陆状态
    loginAfter:false,//登录弹窗状态
    tempStatus:false,//试玩状态
    lastLoginInfo:''//上一次登录时间
  },

  mutations: {
    setLastLogin(state,str){
      state.lastLoginInfo = str
    },
    setTempStatus(state,boll){
      state.tempStatus = boll
    },
    setLoginAfter(state, boll){
      state.loginAfter = boll
    },
    setLoginStatus(state, boll) {
      state.loginStatus = boll
    },
    CHANGEALERTSTATE(state) {
      state.alertState = false;
    },
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
    uesrOut(state) {
      state.Authorization = null;
      state.loginStatus = false;
      state.userInfo = {};
      state.tempStatus = false;
      localStorage.removeItem('Authorization')
    },
    // 顶部导航状态
    setHead(state, header) {
      state.header = header
    },
    // 底部栏状态
    setFoot(state, foot) {
      state.footer = foot
    },
    // 用户个人信息栏
    setTop(state, heTop) {
      state.header_top = heTop
    },
    // 右侧悬浮框
    rightDom(state, suspen) {
      state.suspension = suspen
    },
    // 用户账户信息
    setUserInfo(state, data) {
      state.userInfo = data
    },
    // 导航栏数据
    setNavAry(state, data) {
      state.navAry = data
    },
    //皮肤数据
    setTheme(state,data){
      state.theme=data;
    }
  },
  actions: {
    getUserInfo({commit},data) {

    }
  }
});

export default store

import {postAjax, getAjax} from "./ajax";
import store from "../store";
import router from "../router";

export function getUserInfo() {
  getHeadNav();
  let url = "Api/User/GetUserInfo";
  postAjax(url).then(function (data) {
    store.commit('setUserInfo', data.Data);
    store.commit('setLoginStatus', true)
  }).catch(() => {
    // that.$message.error("网络异常，请刷新后在试");
  })
}
/*
*
* */
export function userOut() {
  postAjax('/api/Sys/Out', 1).then((data) => {
    store.commit('uesrOut');
    router.push('/home')
    localStorage.clear()
    sessionStorage.clear()
  }).then(() => {
  })
}

export function getHeadNav() {
  let url = "Api/Lnc/Get";
  getAjax(url, 1).then((data) => {
    store.commit('setNavAry', data.Data)
  }).catch(() => {
    // that.$message.error("网络异常，请刷新后在试");
  })
}

export default {
  getUserInfo,
  userOut,
  getHeadNav
}

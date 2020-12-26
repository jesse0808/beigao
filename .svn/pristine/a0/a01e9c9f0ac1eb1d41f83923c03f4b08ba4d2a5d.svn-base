import Vue from 'vue'
import {Toast,Dialog} from "vant";
import store from "../store";
import qs from 'qs'
import route from "../router";

Vue.use(Toast)

export function postAjax(url, data) {
    if (data) {
        return axios.post(url, data).then(res => {
            return httpStatus(res)
        }).catch(error => {
            return errorProcess(error)
        }).finally(() => {
            // always executed
        });
    } else {
        return axios.post(url).then(res => {
            return httpStatus(res)
        }).catch(error => {
            return errorProcess(error)
        }).finally(() => {
            // always executed
        });
    }
}

export function getAjax(url) {
    return axios.get(url).then(res => {
        return httpStatus(res)
    }).catch(error => {
        return errorProcess(error)
    }).finally(() => {
        // always executed
    });
}

function httpStatus(res) {
    let {data: Datas, status: status, statusText: statusText} = res;
    if (status === 200) {//返回状态200 成功
        return Datas
    } else if (status === 403) {
        Dialog.alert({message:Datas.Message}).then(() => {
            store.commit("userOut");
            store.commit('setLoginStatus', false);
            localStorage.removeItem('token');
            sessionStorage.clear();
             route.replace('/login');
        });
    } else
        return {IsSucess: false, Message: "连接服务器失败,请重试", Data: null};

}

function errorProcess(error) {
    if (error.response && error.response.status === 403) {
        let msg="token失效请重新登录"
        if (error.response.data)
            msg=error.response.data.Message;
        Dialog.alert({message:msg}).then(() => {
            store.commit("userOut");
            store.commit('setLoginStatus', false);
            localStorage.removeItem('token');
            sessionStorage.clear();
            route.replace('/login');
        });
    } else if (error.response && error.response.status === 301) {
        store.commit("userOut");
        store.commit('setLoginStatus', false);
        localStorage.clear();
        sessionStorage.clear();
        let responseJson = error.response.data;
        if (responseJson)
            window.location.href = responseJson.Data;
        else {
            window.location.href = "http://www.baidu.com";
        }
    } else
        return {IsSucess: false, Message: "连接服务器失败,请重试", Data: null};
}

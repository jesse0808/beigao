import {postAjax, getAjax} from "./ajaxjson";
import router from "../router";
import store from "../store"

/*获取用户绑定银行卡信息*/
export function getUserBankList() {
    let url = 'api/Bank/GetUserBankList';
    return getAjax(url).then(data => {
            return data;
    })
}

/*获取用户可以提款的银行卡信息*/
export function getUserDwBankList() {
    let url = 'api/Bank/GetUserDrawBankList';
    return postAjax(url,{}).then(data => {
            return data;
    })
}

/*用户信息设置修改*/
export function amendUser(data) {
    let url = "Api/User/UserUpdateInfo";
    return postAjax(url, data).then(data => {
        return data
    })
}


/*获取密保信息列表*/
export function getSecurityQuestion() {
    let url = 'Api/User/GetSecurityQuestion';
    return postAjax(url).then(data => {
        if (data.IsSucess){
            return data.Data;
        }
    })
}

/*获取用户信息列表*/
export function getUserMessageInfo(data) {
    let url = 'Api/User/GetUserMessageInfo';
    return postAjax(url,data).then(data => {
            return data;
    })
}

/*设置已读消息*/
export function setUserMsgFlg(ids) {
    let url = `Api/User/SetMessageRead?ids=${ids}`;
     postAjax(url,{}).then(data => {
    })
}

/*获取银行卡列表*/
export function getBankList() {
    let url = "api/Bank/GetBankListInfo";
    return getAjax(url).then(function (data) {
        if (data.IsSucess) {
            return data.Data
        }
    })
}
/*获取省份信息*/
export function getProvinceInfo() {
    const url = "api/Sys/GetProvince";
    return postAjax(url).then(function (data) {
        if (data.IsSucess) {
            return data.Data
        }
    })
}
/*选取省份后，动态获取城市信息*/
export function getCityInfo(val) {
    let url = "/api/Sys/GetCitys?Province=" + val;
    return postAjax(url, null).then(function (data) {
        if (data.IsSucess) {
            return data.Data
        }
    })
}
/*添加银行卡*/
export function addBankCrad(form) {
    let url = '/api/Bank/AddUserBankInfo';
    return postAjax(url, form).then(function (data) {
        return data
    })
}
/*修改用户登录密码*/
export function amendPassWord(data) {
    let url = "api/User/UserUpdatePwdInfo";
    return postAjax(url,data).then(res=>{
        return res
    })
}
/*修改用户提现密码*/
/*
*  用户退出
* */
export function checkUserOut(uid) {
    let url = `/api/Sys/Out?uid=${uid}`;
    return postAjax(url).then(res=>{
        return res
    })
}

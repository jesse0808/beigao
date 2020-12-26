import axios from 'axios';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8008';


/**
 * 批量设置cookie
 * @param arr [[name, value],[name, value]]
 */
export const setCookie = (arr) => {
    let hours = 2;
    var exp = new Date();
    exp.setTime(exp.getTime() + hours*60*60*1000);
    arr.map((item) => {
        document.cookie = item[0]+'='+escape(item[1])+';expires='+exp.toGMTString();
    })
};

/**
 * 获取某个cookie值
 * @param {*string} name
 */
export const getCookie = (name) => {
    var cookies = document.cookie.split(';');
    for ( let i = 0; i < cookies.length; i++ ) {
        var temp = cookies[i].split("=");
        if ( temp[0].trim() == name ) {
            return unescape(temp[1])
        }
    }
}

/**
 * 删除全部cookie
 */
export const delCookieAll = () => {
    var cookies = document.cookie.split(';');
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    for ( let i = 0; i < cookies.length; i++ ) {
        document.cookie = cookies[i]+';expires='+exp.toGMTString();
    }
}
/*
* moth 0 当月 date 当天
* @param {Number} moth
* */
export function timeFormatProcessing (moth = 0, date = 0) {
    if (date > 0){
        let oldday = new Date()
        let newDay = Math.floor(oldday.getTime() + Number(24 * 60 * 60 * 1000 * date))
        let today = new Date(newDay)
        let year = today.getFullYear()
        let month = today.getMonth() + 1
        let day = today.getDate()
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
    }else{
        let today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth() + 1 + moth
        let day = today.getDate()
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
    }
}
/*
* @param {Array} arr
* */
export function arraySum (arr) {
    return arr.reduce((old, add) => {
        return Number(old) + Number(add)
    }, 0)
}

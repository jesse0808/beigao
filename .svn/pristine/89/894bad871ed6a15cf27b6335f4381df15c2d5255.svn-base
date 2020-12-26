import axios from 'axios';
import qs from 'qs';
import {Message} from 'element-ui'
import router from "../router";
import vue from '../main'
// 引入vuex状态控制文件
import store from "../store/index.js"

let host = document.location.host

let postUrl = null
if (host.indexOf(host.indexOf('localhost') < 0) || host.indexOf(host.indexOf('127.0.0.1') < 0)) {
  postUrl = document.location.protocol + "//api." + document.location.host.split('.').slice(-2).join('.') + "/";
}
// if (host.indexOf())
// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.baseURL ='http://202.133.242.100:81/';
//axios.defaults.baseURL ='http://localhost:56104/';
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://202.133.242.100:81/' : postUrl;
axios.defaults.headers['Content-Type'] = "application/x-www-form-urlencoded"
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });
// http response 拦截器
// axios.interceptors.response.use(
//   response => {
//       if (response.config.url.indexOf('10001101') != -1) {
//           return response
//       }
//       return response.data
//   },
//   error => {
//       // return Promise.reject(error.response)
//       Message.warning("请求超时，请刷新网络后再次尝试");
//   }
// )
/**
 * AJAX get请求
 * @param {String} url
 * @param {Object} data
 */
export const getAjax = (url, data) => {
  var params = data;
  return axios.get(url, {
    params: params
  }).then(res => {
    if (typeof res.data === 'string') {
      return res.data;
    }
    return httpStatus(res);
  }, err => {
    errorProcess(err)
  })
}

/**
 * AJAX post请求
 * @param {String} url
 * @param {Object} data
 */
export const postAjax = (url, data, sta) => {
  if (sta == undefined || sta == null || sta == "") {
    return axios.post(url, qs.stringify(data))
      .then(res => {
        if (res.IsSucess == false) {
          return false;
        }
        return httpStatus(res);
      }, err => {
        errorProcess(err)
      })
  } else {
    return axios.post(url, data, {headers: {"Content-Type": "application/json;charset=utf-8"}})
      .then(res => {
        if (res.IsSucess == false) {
          console.log("res:", res.Message);
          return false;
        }
        return httpStatus(res);
      }, err => {
        errorProcess(err)
      })
  }

}

/**
 * 带设置超时时间的请求
 * @param {*} url 请求地址
 * @param {*} timeout 定义请求超时时间
 */
export const postAjax4time = (url, data, timeout) => {
  return axios.post(url, qs.stringify(data), {timeout: timeout})
    .then(res => {
      if (res.IsSucess == false) {
        return false;
        console.log(res)
      }
      return httpStatus(res);
    }, err => {
      errorProcess(err)
    })
}

/**
 * 处理AJAX请求返回值状态
 * @param {Object} res
 */
function httpStatus(res) {
  let {data: Datas, status: status, statusText: statusText} = res
  if (status == 200) {//返回状态200 成功
    return Datas;
  } else if (status == 403) {
    Message.error(data.Message)
    alert('接口出错')
  }
}

function errorProcess(error) {
  if (error.response && error.response.status == 403) {
    if (error.response.data) {
      if (error.response.data.IsSucess != null && error.response.data.IsSucess == false) {
        Message.warning(error.response.data.Message);
        store.commit("uesrOut");
        store.commit('setLoginAfter', true);
        router.push("/home");
        return false;
      }
    }
  } else if (error.response && error.response.status == 301) {
    var responseJson = error.response.data;
    if (responseJson)
      window.location.href = responseJson.Data;
    else {
      window.location.href = "http://www.baidu.com";
    }
  }
}

//token加密算法
function secretToken(data) {
  const secret_key = 'ca72a0b32dd624014e49805c9f51fa4e';
  var obj = {};
  var arr = [];
  var token = '';
  for (let i in data) {
    arr.push(i)
  }
  arr.sort();
  for (let x = 0; x < arr.length; x++) {
    obj[arr[x]] = data[arr[x]]
  }
  ;
  for (let y in obj) {
    if (token === '') {
      token = token + y + '=' + obj[y];
    } else {
      token = token + '&' + y + '=' + obj[y];
    }
  }
  ;
  token += secret_key;
  obj['token'] = hex_md5(token);

  return obj;
}

import {postAjax, getAjax} from './ajaxjson'
import store from "../store";
import {Toast, Dialog} from "vant";
import router from "../router";
import {OpenWindow} from "./sysconfig";
//进入彩票游戏界面
export function GoLotteryGame(data) {
    if (data.IsOpen) {
        if (data.LsId == 5) {
            router.push({
                path: '/pcDan', query: {
                    LgId: data.LgId, LsId: data.LsId, name: data.Name
                }
            })
        } else if (data.LsId == 7) {
            router.push({
                path: '/lhc', query: {
                    LgId: data.LgId, LsId: data.LsId, name: data.Name
                }
            })
        } else {
            router.push({
                path: '/bettingPage', query: {
                    LgId: data.LgId, LsId: data.LsId, name: data.Name
                }
            })
        }
    } else
        Toast.fail({message: '维护中', duration: 2000});
}

//获取电子游戏信息
export function getPtGame({id, data}) {
    let url = `api/ThirdGame/GetGameList?g=${id}&d=2`;
    return postAjax(url, data).then(data => {
            return data
    })
}



//获取活动信息
export function getActivity() {
    if (window.ActListInfo) {//内存中存在直接返回
        return new Promise((resolve, reject) => {
            resolve(window.ActListInfo);
        });
    }
    let url = "api/Activity/GetActList";
    return postAjax(url).then(data => {
        if (data.IsSucess) {
            window.ActListInfo=data.Data;
            return data.Data;
        }
    })
}
//获取活动详情
export function getActivityInfo(actid) {

    let url = "api/Activity/GetAct?Type="+actid;
    return postAjax(url).then(data => {
       return data;
    })
}

//获取用户信息
export function getUserInfo() {
    let url = "Api/User/GetUserInfo";
    return postAjax(url).then(data => {
        if (data.IsSucess) {
            store.commit('setUserInfo', data.Data)
            store.commit('setLoginStatus', true)
        }
        return data;
    })
}

//获取用户未读消息数量
export function getUserMsgCount() {
    let url = "Api/User/GetUserNoReadMsgCount";
    return postAjax(url).then(data => {
        if (data.IsSucess) {
            return data.Data;
        }
        return 0;
    })
}


//获取轮播图
export function carouselImg() {
    if (window.AdData) {//内存中存在直接返回
        return new Promise((resolve, reject) => {
            resolve(window.AdData);
        });
    }
    let url = 'api/Sys/GetSysTurns?Divice=2';
    return postAjax(url, 1).then(data => {
        if (data.IsSucess) {
            window.AdData = data.Data;//轮番图数据存放在内存中
            return data.Data
        }
    })
}

//获取公告信息
export function noticeInfo() {
    let noticeInfo = store.state.noticeInfo;
    if (noticeInfo.length > 0) {
        return new Promise((resolve, reject) => {
            resolve(noticeInfo);
        });
    }
    let url = "api/Sys/GetSysNotice";
    return postAjax(url).then(data => {
        if (data.IsSucess)
            store.commit('setNoticeInfo', data.Data)
        return data.Data
    })
}

/*
*  请求电子游戏进入游戏数据
* */
export function toDzGame(data) {
    let param = data;
    param.HallCode = data.GameCode;
    getGameRouter(data)
}

/*
*  请求第三方游戏接口
* */
export function getGameRouter(data) {
    if (!window.localStorage.getItem('token')) {
        router.replace('/login');
        return false
    }
    const userinfo = store.state.userInfo;
    if (userinfo.UtId == 3) {
        Toast.fail('请登录正式账号');
        return false
    }
    Toast.loading({
        message: '游戏加载中...',
        overlay: true,
        duration: 0
    });
    let url = '/api/ThirdGame/StartGame';
    let prams = {
        GameCode: data.HallCode,
        game: data.GameId,
        plat: data.PlatID || "1001",
        IsMobile: true
    }
    postAjax(url, prams).then(res => {
        Toast.clear();
        if (res.IsSucess) {
            Dialog.confirm({
                // title: '标题',
                message: '打开游戏窗口?'
            }).then(() => {
                OpenWindow(res.Data);
            }).catch(() => {
                // on cancel
            });
        } else {
            Toast.fail(res.Message)
        }
    })
}

import {postAjax, getAjax} from "./ajaxjson";
import {Toast} from "vant";

/*
* 获取当前彩种开奖记录
* */
export function getIssueHistoryInfo(id) {
    let url = `Api/Lssue/GetLssueHistoryInfo?lgId=${id}`
    return getAjax(url).then(data => {
        return data
    })
}

/*
*  获取最新期号开奖信息
* */
export function GetBetIssueInfo(id) {
    let url = `Api/Lssue/GetBetLssueInfo?lgId=${id}`
    return getAjax(url).then(data => {
        return data
    })
}

/*
*  获取期号开奖号码信息
*  lgid 游戏id
*  lssue 期号
* */
export function GetLssueOpenInfo(lgid, lssue) {
    let url = `Api/Lssue/GetLssueOpenInfo?lgId=${lgid}&lssue=${lssue}`
    return getAjax(url).then(data => {
        return data
    })
}

/*
*  获取当前彩种玩法相关配置
*  num 0 经典 1盘口(pcdd) 2官方
* */
export function getPlayList(id, num = 0) {
    let n = 'LPlay_' + id + '_' + num;// 存储名称 LPlay_彩种id_模式id
    let jsonStr=sessionStorage.getItem(n);
    if (jsonStr) {//存在直接返回
        return new Promise((resolve, reject) => {
            resolve(JSON.parse(jsonStr));
        });
    }
    Toast.loading({
        message: '加载中...',
        duration: 0
    });
    let url = `Api/Lp/GetPlayList?lpId=${id}&pattern=${num}`;
    return getAjax(url).then(data => {
        Toast.clear();
        if (data.IsSucess) {
            sessionStorage.setItem(n, JSON.stringify(data.Data));
            return data.Data;
        }
    })
}

/*
*  获取指定期号相关信息
* */
export function getIssueOpenInfo(id = 0, issue = 0) {
    let url = `Api/Lssue/GetLssueOpenInfo?lgId=${id}&lssue=${issue}`
    return getAjax(url).then(data => {
        return data
    })
}

/*
*  投注
* */
export function lotteryBet(ls, lg, param) {
    let url = `Api/Bet/AddClassicPatternOrder?lssue=${ls}&LgId=${lg}`;
    return postAjax(url, param).then(data => {
        return data
    })
}

/*
*  六合彩和经典玩法投注
* */
export function lhcBet(ls, lg, param) {
    let url = `Api/Bet/AddEttmOrder?lssue=${ls}&LgId=${lg}`;
    return postAjax(url, param).then(data => {
        return data
    })
}

/*
*  pc蛋蛋投注
* */
export function pcdBet(ls, lg, param) {
    let url = `Api/Bet/AddHandiCapOrder?lssue=${ls}&lgId=${lg}`;
    return postAjax(url, param).then(data => {
        return data
    })
}

/*
*  获取近期开奖数据
* */
export function getOpenRecord(params) {
    let url = `Api/Lssue/GetLssueOpenHistory?lgId=${params}&type=1`;
    return postAjax(url, {}).then(res => {
        return res
    })
}

/*
*  获取追号数据
* */
export function getAddToData({issue, lgId}) {
    let url = `Api/Lssue/GetNew120Lssue?lssue=${issue}&lgId=${lgId}`;
    return getAjax(url).then(res => {
        return res
    })
}

/*
*  追号
* */
export function betAddTo(param) {
    let url = 'Api/Bet/AddClassicPatternZhOrder';
    return postAjax(url, param).then(res => {
        return res
    })
}

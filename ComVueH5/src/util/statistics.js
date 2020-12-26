import {postAjax, getAjax} from "./ajaxjson";

//个人盈亏查询
export function profitAndLossQuery() {
    let url = "api/OrderReport/GetUserReport";
    return postAjax(url, {}).then(data => {
        return data
    })
}

//获取彩票所有游戏类型
export function gameType() {
    let url = 'api/lnc/get';
    return getAjax(url).then(data => {
        return data
    })
}

//查询投注记录
export function bettingRecord(data) {
    let url = "api/Order/PBetHistoryinfo";
    return postAjax(url, data).then(data => {
        return data
    })
}

//获取投注订单详情
/*
*  @type:1普通订单type:2追号
* */
export function orderDetails(number, type = 1) {
    let url = `api/Order/GetDetailByOrderNumber?number=${number}&type=${type}`
    return postAjax(url).then(data => {
        return data
    })
}

//获取追号记录
export function getAfterRecord(data) {
    let url = "api/Order/PZhHistoryinfo";
    return postAjax(url, data).then(data => {
        return data
    })
}

//获取追号详情
export function afterRecordDetails(num, type = 2) {
    let url = `api/Order/GetDetailByOrderNumber?number=${num}&type=${type}`;
    return postAjax(url).then(data => {
        return data
    })
}

/*
* 资金记录获取账单类型
* */
export function billType() {
    let url = "api/Sys/GetUserAccTypeList";
    return postAjax(url).then(data => {
        if (data.IsSucess) {
            return data.Data
        }
    })
}

/*
*  资金记录
* */
export function billDetails(data) {
    let url = "api/Order/PUserAccInfo";
    return postAjax(url, data).then(data => {
        return data
    })
}

/*
*  查询充值记录
* */
export function getInquireRecord(data) {
    let url = "api/Cash/RechargeHistoryList";
    return postAjax(url, data).then(res => {
        return res
    })
}

/*
*  查询提现记录
* */
export function drawMoneyApplyList(data) {
    let url = "api/Cash/DrawMoneyApplyList";
    return postAjax(url, data).then(res => {
        return res
    })
}

/*
*  查询追号记录
* */
export function getPZhHistoryinfo(data, isCameFromAgentCenter) {
    let url = "Api/Order/PZhHistoryinfo";
    if (isCameFromAgentCenter) {
        url = 'api/Proxy/GetProxyZHList'
    }
    return postAjax(url, data).then(res => {
        return res
    })
}

/*
*  查询彩种列表
* */
export function getLotteryList() {
    let url = "Api/Sys/GetLotteryList";
    return postAjax(url).then(res => {
        if (res.IsSucess) {
            return res.Data
        }
    })
}

/*
*  查询追号详情
* */
export function getDetailByOrderNumber(data) {
    let url = "Api/Order/GetDetailByOrderNumber?number=" + data.number + "&type=" + data.type;
    return postAjax(url).then(res => {
        return res
    })
}


/*
*  撤单
* */
export function cancleOrder(data) {
    let url = "Api/Bet/CancleOrder?number=" + data.number + "&type=" + data.type;
    return postAjax(url).then(res => {
        return res
    })
}

/*
*  查询投注记录
* */
export function getPBetHistoryinfo(data, isCameFromAgentCenter) {
    let url = "Api/Order/PBetHistoryinfo";
    if (isCameFromAgentCenter) {
        url = 'api/Proxy/GetProxyBetList'
    }
    return postAjax(url,data).then(res => {
        return res
    })
}


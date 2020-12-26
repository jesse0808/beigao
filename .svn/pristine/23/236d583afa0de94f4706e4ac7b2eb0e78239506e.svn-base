import {postAjax} from "./ajaxjson";

//获取支付相关信息
export function getPatData() {
    let url = "api/Cash/GetUserChargeChanelList?Term=3";
    return postAjax(url).then(data => {
        return data
    })
}

//充值
export function moneyRecharge(data) {
    let url = "api/Cash/RechargeOrderInfo";
    return postAjax(url, data).then(data => {
        return data
    })
}

//充值记录
export function rechargeHistoryList(data) {
    let url = "api/Cash/RechargeHistoryList";
    return postAjax(url, data).then(data => {
        return data
    })
}

//充值状态
export function checkRechargeOrderStatus(data) {
    let url = "api/Cash/CheckRechargeOrderStatus?OrderNumber="+data.OrderNumber;
    return postAjax(url).then(data => {
        return data
    })
}

//转账记录
export function getTransferList(data) {
    let url = "api/Transfer/GetTransferList";
    return postAjax(url, data).then(data => {
        return data
    })
}

//获取10分钟内未完成的订单
export function getUnFillOrder() {
    let url = "api/Cash/GetUnFillRechargeOrder";
    return postAjax(url).then((data) => {
        return data
    })
}

//撤销订单
export function revocationOrder(parameter) {
    let url = "api/Cash/CancleRechargeOrder?OrderNumber=" + parameter;
    return postAjax(url).then(data => {
        return data
    })
}

//提现
export function userDrawMoney(data) {
    let url = "api/Cash/DrawMoneyApplyInfo";
    return postAjax(url, data).then(data => {
        return data
    })
}

//获取第三方游戏平台数据
export function getGameThird() {
    let url = "api/ThirdGame/GetGames";
    return postAjax(url).then(data => {
        if (data.IsSucess) {
            return data.Data
        }
    })
}

//获取账户变更类型数据
export function getUserAccTypeList() {
    let str=localStorage.getItem("acctype");
    if(str){//直接返回
        return new Promise((resolve, reject) => {
            resolve(JSON.parse(str));
        });
    }
    let url = "api/Sys/GetUserAccTypeList";
    return postAjax(url).then(data => {
        if (data.IsSucess) {
            localStorage.setItem("acctype",JSON.stringify(data.Data));
            return data.Data
        }
    })
}

//获取资金流水数据
export function pUserAccInfo(data) {
    let url = "api/Order/PUserAccInfo";
    return postAjax(url, data).then(data => {
        return data
    })
}


//获取第三方游戏平台余额
export function getGameThirdMoney() {
    let url = "api/ThirdGame/GetGameAccAll";
    return postAjax(url).then(data => {
        return data
    })
}

//获取第三方单个游戏平台数据
export function getGameThirdMoneySelf(id) {
    let url = "api/ThirdGame/GetGameBlance?game=" + id;
    return postAjax(url).then(data => {
        return data
    })
}

//游戏与主账号之间金额互转提交
export function transferSccounts(data) {
    let url = "api/ThirdGame/Transfer";
    return postAjax(url, data).then(data => {
        return data
    })
}


//获取第三方游戏记录
export function getUserThirdGameRecord(data, isCameFromAgentCenter) {
    let url = "api/OrderReport/GetUserThirdGameRecord";
    if (isCameFromAgentCenter) {
        url = 'api/Proxy/GetGameHistoryList'
    }
    return postAjax(url, data).then(data => {
        return data
    })
}

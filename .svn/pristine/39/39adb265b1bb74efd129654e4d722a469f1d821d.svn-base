import { postAjax } from "./ajaxjson";
import { Toast } from "vant";

class MeClass {
    _isInited = false;
    _info = {
        Uid: 1123,
        LoginName: "----",
        Balance: 800000,
        UtId: 1,
        FullName: null,
        NickName: "----",
        QqNumber: null,
        Email: null,
        PhoneNumber: null,
        LastLoginTime: "2020-04-09 11:25:44",
        SupQqNumber: null,
        SupPhoneNumber: null,
        IsDataLock: false,
        UserRebate: 3,
        UtName: "代理",
        CreateTime: "2020-04-03 19:03:31",
        IsOnline: false,
        SupName: "ay888",
        LoginCount: 2,
        SupUid: 1000,
        IsLottery: true,
        IsDrawMoney: true,
        IsTest: false,
        BonusName: "1900",
        MaxJJ: 1960,
        VipLevel: 1,
    }

    /**
     * 获取所有信息
     */
    getAllInfo() {
        if (!this._isInited) {
            this.refresh()
        }
        return this._info;
    }

    /**
     * 更新自我信息
     */
    refresh() {
        return new Promise((res, rej) => {
            postAjax('api/Proxy/GetUserInfo').then((info) => {
                if (!info.IsSucess) {
                    Toast('获取个人信息失败');
                    return ;
                }
                // console.log('个人信息： ', info)
                this._info = info.Data;
                this._isInited = true;
                res(this._info);
                return this._info;
              })
        })
    }
}

export let Me = new MeClass();
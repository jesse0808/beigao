

String.prototype.replaceAll = function (FindText, RepText) {
    var regExp = new RegExp(FindText, "gm");
    return this.replace(regExp, RepText);
}

//彩种定义 会跟api接口返回的定义进行 $.extend() 操作
var $LotteryConfig = {
    lottery_1: { LgId: 1, Name: "重庆时时彩", ViewUrl: "/lottery/SscCp" },
    lottery_2: { LgId: 2, Name: "腾讯分分彩", ViewUrl: "/lottery/SscCp" },
    lottery_3: { LgId: 3, Name: "天津时时彩", ViewUrl: "/lottery/SscCp" },
    lottery_4: { LgId: 4, Name: "新疆时时彩", ViewUrl: "/lottery/SscCp" },
    lottery_5: { LgId: 5, Name: "分分彩", ViewUrl: "/lottery/SscCp" },
    lottery_6: { LgId: 5, Name: "二分彩", ViewUrl: "/lottery/SscCp" },
    lottery_7: { LgId: 7, Name: "三分彩", ViewUrl: "/lottery/SscCp" },
    lottery_8: { LgId: 7, Name: "五分彩", ViewUrl: "/lottery/SscCp" },
    lottery_9: { LgId: 9, Name: "北京赛车", ViewUrl: "/lottery/SscCp" },
    lottery_10: { LgId: 10, Name: "山东11选5", ViewUrl: "/lottery/SscCp" },
    lottery_11: { LgId: 11, Name: "广东11选5", ViewUrl: "/lottery/SscCp" },
    lottery_12: { LgId: 12, Name: "江西11选5", ViewUrl: "/lottery/SscCp" },
    lottery_13: { LgId: 13, Name: "上海11选5", ViewUrl: "/lottery/SscCp" },
    lottery_14: { LgId: 14, Name: "北京五分彩", ViewUrl: "/lottery/SscCp" },
    lottery_15: { LgId: 15, Name: "台湾五分彩", ViewUrl: "/lottery/SscCp" },
    lottery_16: { LgId: 16, Name: "加拿大3.5分彩", ViewUrl: "/lottery/SscCp" },
    lottery_17: { LgId: 17, Name: "新加坡二分彩", ViewUrl: "/lottery/SscCp" },
    lottery_18: { LgId: 18, Name: "幸运28", ViewUrl: "/lottery/Pcdd" },
    lottery_19: { LgId: 19, Name: "加拿大28", ViewUrl: "/lottery/Pcdd" },
    lottery_20: { LgId: 20, Name: "新加坡28", ViewUrl: "/lottery/Pcdd" },
    lottery_21: { LgId: 21, Name: "江苏快3", ViewUrl: "/lottery/SscCp" },
    lottery_22: { LgId: 22, Name: "安徽快3", ViewUrl: "/lottery/SscCp" },
    lottery_23: { LgId: 23, Name: "湖北快3", ViewUrl: "/lottery/SscCp" },
    lottery_24: { LgId: 24, Name: "北京快3", ViewUrl: "/lottery/SscCp" },
    lottery_25: { LgId: 25, Name: "上海快3", ViewUrl: "/lottery/SscCp" },
    lottery_26: { LgId: 26, Name: "广西快3", ViewUrl: "/lottery/SscCp" },
    lottery_27: { LgId: 27, Name: "福彩3D", ViewUrl: "/lottery/SscCp" },
    lottery_28: { LgId: 28, Name: "排列三", ViewUrl: "/lottery/SscCp" },
    lottery_29: { LgId: 29, Name: "上海时时乐", ViewUrl: "/lottery/SscCp" },
    lottery_30: { LgId: 30, Name: "幸运飞艇", ViewUrl: "/lottery/SscCp" },
    lottery_31: { LgId: 31, Name: "平台赛车", ViewUrl: "/lottery/SscCp" }
};

//共有帮助
var $LotteryHelper = function () {
    return {
        /*
 删除投注数字指定数组中,值等于value的项
 */
        DeleteArrarByValue: function (array, value) {
            if (array) {
                $.each(array, function (index, obj) {
                    if (obj == value) {
                        array.splice(index, 1);
                        return false;
                    }
                });
            }
        },
        /*
       删除数组中所有元素
       */
        DeleteArrarAll: function (array) {
            if (array) {
                array.splice(0, array.length);
            }
        },
        /*
      验证数组中是指定的值是否包含
      */
        VerificationArrayContainCode: function (array) {
            if (!array) {
                return false;
            }
            if (array.length > 0) {
                return true;
            } else {
                return false;
            }
        },
        ContentValue: function (array, code) {
            for (var i in array)
            {
                if (array[i] == code)
                    return true;
            }
            return false;
        },
        //获取数组的元素个数
        GetArrayAllCount: function (array) {
            if (!array) {
                return 0;
            }
            return array.length;
        },
        //删除购物车中的订单根据订单id
        DeleteOrderCarById: function (array, id) {
            if (array) {
                $.each(array, function (index, obj) {
                    if (obj.Id == id) {
                        array.splice(index, 1);
                        return false;
                    }
                });
            }
        },
        //下面是计算注数帮助方法
        /*
    时时彩组三计算注数
    selectCount 当期选择的数字按钮个数
    verifCount 最少需要选择的数字按钮个数
    */
        GetSSCZuSanCount: function (selectCount, verifCount) {
            if (selectCount >= verifCount) {
                return ((selectCount - 1) * (selectCount - 1) + selectCount - 1);
            } else {
                return 0;
            }
        },
        /*
      时时彩组六计算注数
      selectCount 当期选择的数字按钮个数
      verifCount 最少需要选择的数字按钮个数
      */
        GetSSCZuLiuCount: function (selectCount, verifCount) {
            if (selectCount >= verifCount) {
                return ((selectCount - 2) * (selectCount - 1) * selectCount / 6);
            } else {
                return 0;
            }
        },
        /*
        时时彩二星组选复式计算注数
        selectCount 当期选择的数字按钮个数
        verifCount 最少需要选择的数字按钮个数
       */
        GetSSCErXiZxCount: function (selectCount, verifCount) {
            //  if (selectCount >= verifCount && selectCount <= 7) {
            if (selectCount >= verifCount) {
                return selectCount * (selectCount - 1) / 2;
            } else {
                return 0;
            }
        },
        /*
        时时彩二码不定位胆计算注数
        selectCount 当期选择的数字按钮个数
       */
        GetSSCErMaBdwdCount: function (selectCount) {
            return selectCount * (selectCount - 1) / 2;
        },
        /*
         五星组选 四星组选最后计算注数
         numLen 当前投注的个数
         baseLen 至少需要几个数
        */
        GetFormula_Multiply_Divide: function (numLen, baseLen) {
            var count = 1;
            for (var i = 0; i < baseLen; i++) {
                count *= (numLen--);
            }
            for (; baseLen > 1; baseLen--) {
                count /= baseLen;
            }
            return count;
        },
        /*
    五星组选 四星组选计算注数
    num_arr 当前投注内容的数组
    one_row 只需要选择一个数字的  num_arr 中的索引
    more_row 需要选择多个数字的 num_arr 中的索引
    base_len 需要选择多个数字的实际值
    */
        GetFormula_Zx_One_More: function (num_arr, one_row, more_row, base_len) {
            if (num_arr[one_row].length < 1 || num_arr[more_row].length < base_len) {
                return 0;
            }
            var count = 0;
            var one_arr = num_arr[one_row];
            var more_arr = num_arr[more_row];
            for (var i = 0; i < one_arr.length; i++) {
                var one_val = one_arr[i];
                var more_len = more_arr.length;
                for (var j = 0; j < more_arr.length; j++) {
                    if (one_val == more_arr[j]) {
                        more_len--;
                    }
                }
                if (more_len < base_len) continue;
                count += this.GetFormula_Multiply_Divide(more_len, base_len);
            }
            return count;
        },
        /*
    获取和值的注数
    param:text【显示的值】
    return:【实际的值】
    */
        
        /*
        11选5 组选复式 实际投注注数计算
        c: 选择的球的个数
        b:此次计算至少需要的球的个数
        */
        Get11X5_ZuXuanCount: function (c, b) {
            b = parseInt(b);
            c = parseInt(c);
            if (b < 0 || c < 0) {
                return 0;
            };
            if (b == 0 || c == 0) {
                return 1;
            };
            if (b > c) {
                return 0;
            };
            if (b > c / 2) {
                b = c - b;
            };
            var a = 0;
            for (i = c; i >= (c - b + 1) ; i--) {
                a += Math.log(i);
            };
            for (i = b; i >= 1; i--) {
                a -= Math.log(i);
            };
            a = Math.exp(a);
            return Math.round(a);
        },
        /*
        获取跨度的注数
        param:text【显示的值】
        return:【实际的值】
       */
       
    };
}();

/*
所有彩种的基类
lgid 当前彩种id
pattern 玩法模式 0经典模式 1盘口模式
*/
var LotteryBase = function (lgid, pattern) {
    var me = this;
    //当前彩种对象
    this.Lottery = $LotteryConfig["lottery_" + lgid];
    if (!this.Lottery) {
        throw "参数彩种lgid=" + lgid + " 不存在";
    }
    if (pattern != 0 && pattern != 1)
        throw "参数玩法模式pattern=" + pattern + " 错误";
    //玩法模式
    this.Pattern = pattern;
    //当前期号信息
    this.Lssue = null;
    //开奖倒计时time
    this.DaoJiShiTime = null;
    //获取开奖数据time
    this.GetKjNumberTime = null;
    //当前正在开奖中的期号
    this.NowOpenLssue = null;
    //开奖动画是否已停止
    this.AnimationStop = true;
    //开奖结果出来时动画time
    this.AnimationTime = null;
    //创建开奖球html
    this.CreateFlashHtml();

    /*
    购物车订单数组 元素对象示例
    经典玩法 {Id:本地订单标识,LpId:玩法编号,LpName:玩法名称,BetContent:投注内容,BetCount:投注注数,BetMoney:投注金额,BetMultiple:投注倍数,BetRebate:投注返点,BetBonus:投注奖金,BonusMode:圆角分厘模式,RxDsFormart:任选单式玩法位}
    盘口玩法 {Id:本地订单标识,LpId:玩法编号,LpName:玩法名称,BetMoney:投注金额}
    */
    this.OrderCar = [];

    var $nvapalen = $("#lottery-nva-panel");
    $nvapalen.empty();
    //加载导航 并合并彩种配置
    foodOrder.dataSource.push({
        url: "/lnc/get", data: {}, ready: false, type: "get", successFun: function (sdata) {
            if (sdata.IsSucess) {
                if (sdata.Data.length < 10) {//为了界面美观不足10个分类则添加定义
                    var sleng = 10 - sdata.length;
                    for (var i = 0; i < sleng; i++) {
                        sdata.push({ NvgName: "敬请期待", LotteryList: [] });
                    }
                }
                var htmlArr = [];
                $.each(sdata.Data, function (index, nva) {
                    htmlArr.push("<div class='nva-group'>");
                    htmlArr.push("<div class='ng-title'>" + nva.NvgName + "</div>");
                    htmlArr.push("<div class='ng-list'>");
                    $.each(nva.LotteryList, function (index, lottery) {
                        //将本地彩种配置与服务器彩种配置合并
                        $.extend($LotteryConfig["lottery_" + lottery.LgId], lottery);
                        htmlArr.push("<a href='javascript:void(0)' data-lgid='" + lottery.LgId + "'>" + lottery.Name + "</a>");
                    });
                    htmlArr.push("</div></div>");
                });
                $nvapalen.append(htmlArr.join(""));
                htmlArr = null;
                sdata = null;
                $("#nva-lottery-name").text(me.Lottery.Name);
            }
        }
    });
    //获取玩法列表 并合并本地玩法配置
    foodOrder.dataSource.push({
        url: "/Lp/GetPlayList", data: { lpId: me.Lottery.LgId, pattern: me.Pattern }, ready: false, type: "get", successFun: function (sdata) {
            if (sdata.IsSucess) {
                $.each(sdata.Data, function (index, play) {
                    //将本地玩法配置与服务器玩法配置合并
                    $.extend(me.PlayList["Lp_" + play.LpId], play);
                });
                console.log(me.PlayList);
                sdata = null;
            }
        }
    });
    //开始请求数据源
    $Layer.showload();
    foodOrder.start(function () {
        $Layer.hideload();
        _initEventBind();
        me.CreateView();
        me.BindEvent();
        //加载期号数据
        me.LoadLssueInfo();
        me.LoadLssueHistoryInfo();//加载历史开奖记录
        $(".myscroll").niceScroll({ cursorcolor: "#cfcfcf", zindex: 999999, cursorwidth: "5px", cursorborder: "0px;" });
    });
    //所有时间展示div
    var allTimeBlock = $("#flash-time div");
    //开始倒计时
    this.DaoJiShiTime = setInterval(function () {
        if (!me.Lssue) {
            return;
        }
        me.Lssue.NowLssueRemainTime--;
        if (me.Lssue.NowLssueRemainTime < 0) {
            return;
        }
        if (me.Lssue.NowLssueRemainTime == 0) {//时间到了,开奖中
            me.LoadLssueInfo();
        }
        var shengyuTimes = $SysHelper.SecondToHHSSMM(me.Lssue.NowLssueRemainTime);
        if (!shengyuTimes) {
            shengyuTimes = "00:00:00";
        }
        var textArr = shengyuTimes.split(":").join("");
        $.each(allTimeBlock, function (index, obj) {
            $(obj).text(textArr[index]);
        });
        $("#other-fjstime").text(shengyuTimes);
    }, 1000);

    //初始化事件绑定 在所有数据源加载完成后调用
    function _initEventBind() {
        //彩种导航点击事件
        $("#lottery-nva-panel a").on("click", function () {
            var $this = $(this);
            var lgid = $this.data("lgid");
            var lottery = $LotteryConfig["lottery_" + lgid];
            if (!lottery)
                return $Layer.alert("彩种不存在");
            window.location.href = lottery.ViewUrl + "?lgid=" + lgid;
        });
        //一键投注
        $("#lottery-fast-buy").on("click", function () {
            me.FastBuy();
        });
        $("#lottery-max-buy").on("click", function () {
            me.MaxBuy();
        });
        //添加到购物车
        $("#lottery-add-order-car").on("click", function () {
            me.AddOrderCar();
            me.GetOrderCarInfo(true);
        });
        //购物车中删除一项订单
        $("#lottery-order-car").on("click", "span.lottery-cp-delete-order", function () {
            var oid = $(this).data("oid");
            $LotteryHelper.DeleteOrderCarById(me.OrderCar, oid);//删除购物车中的订单
            me.GetOrderCarInfo(true);//重新计算显示
            $("#" + oid).remove();//界面中删除元素
        });
        //清空购物车
        $("#lottery-clare-order-car").on("click", function () {
            me.ClearOrder();
        });

        var url = me.Pattern == 0 ? "/Bet/AddClassicPatternOrder" : "/Bet/AddHandiCapOrder";
        $("#lottery-submit-order").on("click", function () {
            if (me.OrderCar.length > 0) {
                $SysHelper.AjaxRequest(url+"?lssue=" + me.Lssue.NowLssue + "&LgId=" + me.Lottery.LgId, "post", me.OrderCar, function (sdata) {
                    if (sdata) {
                        if (sdata.IsSucess) {
                            var str = "投注成功";
                            if (sdata.Data != null) {
                                if (sdata.Data.SuccessCount == 0)
                                    str = "投注异常";
                                else
                                    str += ",成功" + sdata.Data.SuccessCount + "个";
                                if (sdata.Data.ErrorInfos.length > 0) {
                                    str+=",失败" + sdata.Data.ErrorInfos.length + "个。失败订单如下:";
                                    for (var info in sdata.Data.ErrorInfos) {
                                        str += "[期号:" + info.Lssue + ",玩法:" + info.PlayName + ",投注注数:" + info.BetCount + ",错误消息:" + info.ErrorMsg + "]";
                                    }
                                }
                            } else
                                str = sdata.Message;
                            me.ClearOrder();
                            $Layer.showmsg(str);
                        } else {
                            $Layer.showmsg(sdata.Message);
                        }
                        $SysHelper.AjaxRequest("/Order/PBetHistoryinfo", "post", { PIndex: 1, PSize: 5, LgId: me.Lottery.LgId }, function (data) {
                            if (data.IsSucess) {
                                $('#LSTZOrder').bootstrapTable('load', data.Data);
                            }
                        });//, Lssue: me.Lssue.NowLssue
                        window.LoadUserInfo();
                    }
                });
            } else
                $Layer.alert("无任何号码");
        });
        $(".lottery-history-order .ho-nva a").on("click", function () {
            $(".lottery-history-order .ho-nva a").removeClass("active");
            $(this).addClass("active");
            if ($(this)[0].innerText == "投注记录") {
                $('.LSTZOrder').show();
                $('.ZHJLOrder').hide();
                $SysHelper.AjaxRequest("/Order/PBetHistoryinfo", "post", { PIndex: 1, PSize: 5, LgId: me.Lottery.LgId}, function (data) {
                    if (data.IsSucess) {
                        $('#LSTZOrder').bootstrapTable('load', data.Data);
                    }
                });//, Lssue: me.Lssue.NowLssue
            } else {
                $('.LSTZOrder').hide();
                $('.ZHJLOrder').show();
                $SysHelper.AjaxRequest("/Order/PZhHistoryinfo", "post", { PIndex: 1, PSize: 5, LgId: me.Lottery.LgId }, function (data) {
                    if (data.IsSucess) {
                        $('#ZHJLOrder').bootstrapTable('load', data.Data);
                    }
                });//, Lssue: me.Lssue.NowLssue
            }
        });
        
        $("#lottery-zh-order-car").on("click", function () {
            if (me.OrderCar.length == 0) $Layer.showmsg("投注项为空");
            else if (me.OrderCar.length > 1) $Layer.showmsg("追号投注，订单列表不能大于1注");
            else {
                if (me.Pattern == 1) { $Layer.showmsg("此玩法占不支持追号"); return; }
                window.ssc = me;
                $Layer.openDlgIframe({ title: "追号投注", area: ['800px', '600px'], content: '/Lottery/SscZh' });
            }
        });
    }
}
LotteryBase.prototype = {
    //创建视图
    CreateView: function () {
        throw "子类没有实现此方法";
    },
    //绑定事件
    BindEvent: function () {
        throw "子类没有实现此方法";
    },
    //玩法列表 会跟api接口返回的定义进行 $.extend() 操作
    PlayList: null,
    //创建开奖flash中的开奖球
    CreateFlashHtml: function () {
        throw "子类没有实现此方法";
    },
    //一键投注
    FastBuy: function () {
        throw "子类没有实现此方法";
    },
    //梭哈
    MaxBuy: function () {
        throw "子类没有实现此方法";
    },
    //添加到购物车
    AddOrderCar: function () {
        throw "子类没有实现此方法";
    }
};
//加载期号数据
LotteryBase.prototype.LoadLssueInfo = function () {
    var me = this;
    $SysHelper.AjaxRequest("/Lssue/GetBetLssueInfo", "get", { lgId: me.Lottery.LgId }, function (sdata) {
        if (sdata.IsSucess) {
            me.Lssue = sdata.Data;
            $("#now-bet-lssue").text(me.Lssue.NowLssueFormat);
            $("#last-open-lssue").text(me.Lssue.LastLssueFormat);
            if (!me.Lssue.LastOpenNumber) {
                //设置当前正在开奖的期号
                me.NowOpenLssue = me.Lssue.LastLssue;
                //显示开奖中
                me.ShowOpenAnimation();
                //定时获取开奖号码
                me.GetOpenInfo();
            } else {
                //显示开奖号码到界面
                me.CloseOpenAnimation(me.Lssue.LastOpenNumber);
            }
        }
    }, { isShowLoad: false });
}
//加载开奖号码
LotteryBase.prototype.GetOpenInfo = function () {
    var me = this;
    clearInterval(me.GetKjNumberTime);
    me.GetKjNumberTime = setInterval(function () {
        $SysHelper.AjaxRequest("/Lssue/GetLssueOpenInfo", "get", { lgId: me.Lottery.LgId, lssue: me.NowOpenLssue }, function (sdata) {
            if (sdata.IsSucess) {
                if (sdata.Data.OpenNumber && sdata.Data.Lssue == me.NowOpenLssue) {
                    me.NowOpenLssue = null;
                    clearInterval(me.GetKjNumberTime);
                    me.CloseOpenAnimation(sdata.Data.OpenNumber);
                }
            }
        }, { isShowLoad: false })
    }, 1000 * 3);
}
//显示开奖动画
LotteryBase.prototype.ShowOpenAnimation = function () {
    var me = this;
    clearInterval(me.AnimationTime);
    me.AnimationStop = false;
    //设置当前的开奖球为可以执行动画状态
    $("#flash-number-panel").find("div.qiu").attr("key", "0");
    var kjanimate = function () {
        $("#flash-number-panel").find("div.qiu[key='-1']").css("marginTop", 0);
        if (!me.AnimationStop) {
            var allKjz = $("#flash-number-panel").find("div.qiu[key='0']");
            for (var i = 0; i < allKjz.length; i++) {
                $(allKjz[i]).stop().css("marginTop", 15).text(parseInt(10 * Math.random())).animate({ "marginTop": "-15px" }, 100, function () {
                    kjanimate();
                });
            }
        }
    }
    kjanimate(); //执行动画

    var kjanimate1 = function () {
        $("#flash-number-panel").find(".k3panel .dice").css("backgroundPosition", 0);
        if (!me.AnimationStop) {
            var allKjz = $("#flash-number-panel").find(".k3panel .dice");
            $(allKjz).stop().animate({ "backgroundPosition": "-540px" }, 1000, function () { kjanimate1(); });
        }
    }
    kjanimate1();
}
//关闭开奖动画 kjnumber开奖号码
LotteryBase.prototype.CloseOpenAnimation = function (kjnumber) {
    var me = this;
    var kjNumberArr = kjnumber.split(",");
    var nowIndex = 0; //当前开奖的位置
    var gifNumber = kjNumberArr.length; //所有开奖球的数量
    clearInterval(me.AnimationTime);
    var allKjQiu = $("#flash-number-panel").find("div.qiu");
    me.AnimationTime = setInterval(function () {
        $(allKjQiu[nowIndex]).attr("key", "-1").text(kjNumberArr[nowIndex]); //设置当前球的动画不执行了 并且设置开奖结果号码
        if (nowIndex == gifNumber - 1) {
            me.AnimationStop = true;
            clearInterval(me.AnimationTime);
        }
        nowIndex++;
    }, 700);
}
//获取购物车信息并且修改界面中显示的值如果需要 返回对象 {Count:订单总数,AllMoney:订单总金额}
LotteryBase.prototype.GetOrderCarInfo = function (isUpdate) {
    var me = this;
    ///无论哪种玩法模式 购物车订单元素对象都有个 BetMoney 属性 计算这个属性
    var money = 0;
    $.each(me.OrderCar, function (index, order) {
        money += order.BetMoney;
    });
    var order = { Count: me.OrderCar.length, AllMoney: money };
    if (isUpdate) {
        $("#orderCarCount").text(order.Count);
        $("#orderCarMoney").text($SysHelper.FormatCurrency(order.AllMoney));
    }
    return order;

}

LotteryBase.prototype.LoadLssueHistoryInfo = function () {
    var me = this;
    $SysHelper.AjaxRequest("/Lssue/GetLssueHistoryInfo", "get", { lgId: me.Lottery.LgId }, function (sdata) {
        if (sdata.IsSucess) {
            var str = "";
            for (var a=0;a<sdata.Data.length;a++) {
                str+="<div class='history-data-row'>";
                str+="<div>"+sdata.Data[a].FormatLssue+"</div>";
                str += "<div>";
                if (sdata.Data[a].OpenNumber != null) {
                    var arr = sdata.Data[a].OpenNumber.split(',');
                    for (var i = 0; i < arr.length; i++) {
                        str += "<i class='number-g1'>" + arr[i] + "</i>";
                    }
                }
                str+="</div>";
                str+="</div>";
            }
            $("#flash-history-data").append(str);
        }
    }, { isShowLoad: false });
}

LotteryBase.prototype.ClearOrder = function () {
    var me = this;
    if (me.OrderCar.length > 0) {
        me.OrderCar.splice(0, me.OrderCar.length); //移除购物车中所有元素
        me.GetOrderCarInfo(true);//计算显示
        $("#lottery-order-car").empty();//删除界面中元素
    }
}





// 多个数值计算组数
export function GetFormula_Zx_One_More(num_arr, one_row, more_row, base_len) {
    if (num_arr[one_row].length < 1 || num_arr[more_row].length < base_len) {
        return 0;
    }
    var count = 0;
    var one_arr = num_arr[one_row];
    var more_arr = num_arr[more_row];
    for (var i = 0; i < one_arr.length; i++) {
        var one_val = one_arr[i];
        var more_len = more_arr.length;
        for (var j = 0; j < more_arr.length; j++) {
            if (one_val == more_arr[j]) {
                more_len--;
            }
        }
        if (more_len < base_len) continue;
        count += GetFormula_Multiply_Divide(more_len, base_len);
    }
    return count;
}
//  单个数值计算注数
export function GetFormula_Multiply_Divide(numLen, baseLen) {
    var count = 1;
    for (var i = 0; i < baseLen; i++) {
        count *= (numLen--);
    }
    for (; baseLen > 1; baseLen--) {
        count /= baseLen;
    }
    return count;
}
// 跨度组数计算
export function GetSscKuaDuValue(text){
    var intText = parseInt(text);
    var result = null;
    switch (intText) {
        case 0:
            result = 10;
            break;
        case 1:
        case 9:
            result = 54;
            break;
        case 2:
        case 8:
            result = 96;
            break;
        case 3:
        case 7:
            result = 126;
            break;
        case 4:
        case 6:
            result = 144;
            break;
        case 5:
            result = 150;
            break;
        default:
            result = null;
            break;
    }
    return result;
}
// 组三
export function GetSSCZuSanCount(selectCount, verifCount) {
    if (selectCount >= verifCount) {
        return ((selectCount - 1) * (selectCount - 1) + selectCount - 1);
    } else {
        return 0;
    }
}

// 时时彩组六计算注数
// selectCount 当期选择的数字按钮个数
// verifCount 最少需要选择的数字按钮个数
export function GetSSCZuLiuCount(selectCount, verifCount) {
    if (selectCount >= verifCount) {
        return ((selectCount - 2) * (selectCount - 1) * selectCount / 6);
    } else {
        return 0;
    }
}
/* 时时彩二星组选复式计算注数
    selectCount 当期选择的数字按钮个数
    verifCount 最少需要选择的数字按钮个数
    */
export function GetSSCErXiZxCount(selectCount, verifCount) {
    //  if (selectCount >= verifCount && selectCount <= 7) {
    if (selectCount >= verifCount) {
        return selectCount * (selectCount - 1) / 2;
    } else {
        return 0;
    }
}
/*
时时彩二码不定位胆计算注数
selectCount 当期选择的数字按钮个数
*/
export function GetSSCErMaBdwdCount(selectCount){
    return selectCount * (selectCount - 1) / 2;
}
// 任选注数方法
export  function GetArrayAllCount(array) {
    if (!array) {
        return 0;
    }
    return array.length;
}
// 快三组选
export function Get11X5_ZuXuanCount(c, b) {
   var b = parseInt(b);
   var c = parseInt(c);
    if (b < 0 || c < 0) {
        return 0;
    };
    if (b == 0 || c == 0) {
        return 1;
    };
    if (b > c) {
        return 0;
    };
    if (b > c / 2) {
        b = c - b;
    };
    var a = 0;
    for (let i = c; i >= (c - b + 1) ; i--) {
        a += Math.log(i);
    };
    for (let i = b; i >= 1; i--) {
        a -= Math.log(i);
    };
    a = Math.exp(a);
    return Math.round(a);
}
// 和值计算
export function GetHeZhiValue(text){
    var intText = parseInt(text);
    var result = null;
    switch (intText) {
        case 0:
        case 27:
            result = 1;
            break;
        case 1:
        case 26:
            result = 3;
            break;
        case 2:
        case 25:
            result = 6;
            break;
        case 3:
        case 24:
            result = 10;
            break;
        case 4:
        case 23:
            result = 15;
            break;
        case 5:
        case 22:
            result = 21;
            break;
        case 6:
        case 21:
            result = 28;
            break;
        case 7:
        case 20:
            result = 36;
            break;
        case 8:
        case 19:
            result = 45;
            break;
        case 9:
        case 18:
            result = 55;
            break;
        case 10:
        case 17:
            result = 63;
            break;
        case 11:
        case 16:
            result = 69;
            break;
        case 12:
        case 15:
            result = 73;
            break;
        case 13:
        case 14:
            result = 75;
            break;
        default:
            result = null;
            break;
    }
    return result;
}
// 利润率计算 //s倍数 //m最低利润率//b每期金额的初始值//o上一个的注数//p投注时奖金
export function computeByMargin(s, m, b, o, p) {
    s = s ? parseInt(s, 10) : 0;
    m = m ? parseInt(m, 10) : 0;
    b = b ? Number(b) : 0;
    o = o ? Number(o) : 0;
    p = p ? Number(p) : 0;
    var t = 0;
    if (b > 0) {
        if (m > 0) {
            t = Math.ceil(((m / 100 + 1) *o) / (p - (b *(m / 100 + 1))));
        } else {//无利润率
            t = 1;
        }
        if (t < s) {//如果最小倍数小于起始倍数，则使用起始倍数
            t = s;
        }
    }
    return t;
};

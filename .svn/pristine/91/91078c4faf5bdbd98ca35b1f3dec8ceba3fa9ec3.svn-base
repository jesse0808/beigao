<template>
    <div class="top_mainbox">
        <div class="header_topbox" v-if="$store.state.header_top">
            <!-- 上方公共与用户信息 -->
            <div class="box_center box_h">
                <div class="top_messagebox diandian">
                    <!--                    <span class="iconfont icon-gonggao"></span>-->
                    <!-- 显示弹框 -->
                    <p class="iconfont icon-gonggao">
                        <marquee behavior="scroll" scrolldelay="150" direction="up" scrollamount="2" onMouseOut="this.start()"
                                 onMouseOver="this.stop()">
                            <!--                            {{title}}-->
                            <div v-for="(item,index) in ary" @click="onclickGonggao(item.name)" :key="index">
                                {{item.Title}}
                            </div>
                        </marquee>
                    </p>
                </div>
                <div class="box_flex box_h top_otherinfo" v-if="loginStatus">
                    <div class="box_flex"></div>
                    <router-link to="/line" class="icon_a"><span
                            class="iconfont icon-luxiantu"></span>切换线路
                    </router-link>
                    <!--                    <router-link to="/Client" class="icon_a"><span class="iconfont icon-shouji"></span>手机客户端</router-link>-->
                    <div class="user_center user_center_listshow">
                        <p @click="toCenter" data-name="tjbb" data-value="tjbb">管理中心</p>
                        <!-- 账号中心下拉框 -->
                        <div class="user_center_listbox">
                            <div class="admin_center">
                                <div class="user_center_listitembox">
                                    <div class="user_center_bottom_box">
                                        <p class="user_center_listtitle">订单报表</p>
                                        <div class="user_center_listmain cf">
                                            <a @click="toCenter" data-name="tjbb" data-value="tjbb">统计报表</a>
                                            <a @click="toCenter" data-name="tzjl" data-value="tzjl">投注记录</a>
                                            <a @click="toCenter" data-name="zhjl" data-value="zhjl">追号记录</a>
                                            <a @click="toCenter" data-name="zbmx" data-value="zbmx">账变明细</a>
                                            <a @click="toCenter" data-name="jfmx" data-value="jfmx">积分明细</a>
                                            <a @click="toCenter" data-name="hdbb" data-value="hdbb">活动报表</a>
                                            <!--                                    <a class="user_center_listtext" @click="toCenter" data-name="yktj"-->
                                            <!--                                       data-value="yktj">盈亏统计</a>-->
                                            <!--                                            <a :href="DlCenterUrl" data-name="yktj" data-value="yktj" target="_blank"-->
                                            <!--                                               v-if="userInfo.UtId === 1">代理中心</a>-->
                                            <a @click="toCenter" data-name="sfjl" data-value="sfjl">三方记录</a>
                                        </div>
                                    </div>
                                    <div class="user_center_bottom_box">
                                        <p class="user_center_listtitle">财务中心</p>
                                        <div class="user_center_listmain cf">
                                            <a @click="toCenter" data-name="zhcz" data-value="zhcz">账户充值</a>
                                            <a @click="toCenter" data-name="yetx" data-value="yetx">余额提现</a>
                                            <a @click="toCenter" data-name="zjzh" data-value="zjzh">资金转换</a>
                                            <a @click="toCenter" data-name="czjl" data-value="czjl">充值记录</a>
                                            <a @click="toCenter" data-name="txjl" data-value="txjl">提现记录</a>
                                            <a @click="toCenter" data-name="zzjl" data-value="zzjl">转账记录</a>
                                        </div>
                                    </div>
                                    <div class="user_center_bottom_box">
                                        <p class="user_center_listtitle">个人中心</p>
                                        <div class="user_center_listmain cf">
                                            <a class="user_center_listtext" @click="toCenter" data-name="grsy"
                                               data-value="grsy">个人首页</a>
                                            <a class="user_center_listtext" @click="toCenter" data-name="yhkgl"
                                               data-value="yhkgl">银行卡管理</a>
                                            <a class="user_center_listtext" @click="toCenter" data-name="grzl"
                                               data-value="grzl">个人资料</a>
                                            <a class="user_center_listtext" @click="toCenter" data-name="dljl"
                                               data-value="dljl">登录记录</a>
                                        </div>
                                    </div>
                                    <div class="user_center_bottom_box">
                                        <p class="user_center_listtitle">消息中心</p>
                                        <div class="user_center_listmain cf">
                                            <a @click="toCenter" data-name="sjx" data-value="sjx">收件箱</a>
                                            <a @click="toCenter" data-name="fjx" data-value="fjx">发件箱</a>
                                            <a @click="toCenter" data-name="fxx" data-value="fxx">发消息</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="agency_center" v-if="userInfo.UtId === 1">
                                    <a class="agency_center_a" :href="DlCenterUrl" data-name="yktj"
                                       data-value="yktj" target="_blank">代理中心&ensp;></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--                    <p class="user_name" @click="toCenter" data-name="grsy" data-value="grsy">{{userInfo.LoginName}}</p>-->
                    <div class="user_balance">
                        <p><span class="iconfont icon-yonghu"></span>余额：<span style="color: #faac1f;">{{parseFloat(userInfo.Balance).toFixed(3)}}</span>元
                            <img src="../../static/img/icon/reset.png" v-bind:class="Refresh==true?'refresh_anima':''"
                                 @click="refresh" alt=""/>
                        </p>
                        <div class="user_head_div">
                            <div class="user_head_box">
                                <p>您好,{{userInfo.LoginName}}</p>
                                <a class="head_cz" @click="toCenter" data-name="zhcz" data-value="zhcz">充值</a>
                                <a class="head_cash" @click="toCenter" data-name="yetx" data-value="yetx">提款</a>
                                <div class="user_exit" @click="exit()">
                                    <a><span class="iconfont icon-tuichu4"></span>退出游戏</a>
                                </div>
                                <div class="login_record">
                                    <p>上次登录</p>
                                    <p>{{lastLoginTime}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 操作 -->
                    <div class="user_operation cf">
                        <a class="recharge" @click="toCenter" data-name="zhcz" data-value="zhcz">充值</a>
                        <a class="cash" @click="toCenter" data-name="yetx" data-value="yetx">提现</a>
                        <a class="transfer" @click="toCenter" data-name="zjzh" data-value="zjzh">转账</a>
                        <router-link to="/Client" class="phone_head"><span class="iconfont icon-shouji"></span>手机客户端
                        </router-link>
                        <a class="phone_head" target="_blank" :href="kfUrl"><span
                                class="iconfont icon-htmal5icon31"></span>客服</a>
                    </div>
                    <!-- 退出 -->
                    <!--                    <div class="user_exit" @click="exit()">-->
                    <!--                        <a>退出</a>-->
                    <!--                    </div>-->
                </div>
                <div class="box_flex box_h login_status" v-else>
                    <a class="icon_a" target="_blank" :href="kfUrl"><span class="iconfont icon-htmal5icon31"></span>咨询客服</a>
                    <!--                    <router-link class="icon_a" to="/line"><span class="iconfont icon-luxiantu"></span>切换线路</router-link>-->
                    <router-link to="/Client" class="icon_a"><span class="iconfont icon-shouji"></span>手机客户端
                    </router-link>
                    <a class="login_button" @click="loginButtom">登录</a>
                    <router-link class="login_button" to="register">注册</router-link>
                    <a @click="shiwan" class="login_button play_demo">试玩</a>
                </div>
            </div>
        </div>
        <!-- 导航栏 -->
        <div class="nav_box">
            <div class="box_center cf">
                <a class="logo box_h">
                    <img src='../../assets/logo_g.png' alt="贝高"/>
                </a>
                <ul class="nav_content cf">
                    <li class="nav_item">
                        <router-link to="/home">首页</router-link>
                    </li>
                    <li class="nav_item navlottery_gamebox_show" @mouseenter="navlotteryShow(1)"
                        @mouseleave="navlotteryHide">
                        <router-link class="nav_arrow_icon" data-id="1" data-index="1"
                                     :to="{name:'Timehonor',query: {id:1,index:1}}">彩票游戏<span
                                class="iconfont icon-huo1"></span>
                        </router-link>
                    </li>
                    <li class="nav_item navlive_gamebox_show" @mouseenter="navlotteryShow(2)"
                        @mouseleave="navlotteryHide">
                        <router-link to="/peopleGame" class="nav_arrow_icon">真人视讯</router-link>
                    </li>
                    <li class="nav_item" @mouseenter="navlotteryShow(3)" @mouseleave="navlotteryHide">
                        <router-link to="/fishGame" class="nav_arrow_icon">捕鱼游戏<span class="iconfont icon-huo1"></span>
                        </router-link>
                    </li>
                    <li class="nav_item navptgame_gamebox_show" @mouseenter="navlotteryShow(4)"
                        @mouseleave="navlotteryHide">
                        <router-link to="/ptGame" class="nav_arrow_icon">电子游艺</router-link>
                    </li>
                    <li class="nav_item navsports_gamebox_show" @mouseenter="navlotteryShow(5)"
                        @mouseleave="navlotteryHide">
                        <router-link to="/sportGame" class="nav_arrow_icon">体育投注</router-link>
                    </li>
                    <li class="nav_item">
                        <router-link to="/electron" class="nav_arrow_icon">电竞游戏<span class="iconfont icon-huo1"></span>
                        </router-link>
                    </li>
                    <li class="nav_item navcardgame_gamebox_show">
                        <router-link to="/qpGame" class="nav_arrow_icon">棋牌游戏</router-link>
                    </li>
                    <li class="nav_item">
                        <router-link to="/preMain">优惠活动</router-link>
                    </li>
                </ul>
            </div>
            <div class="nav_select_div" @mouseleave="navlotteryHide">
                <el-collapse-transition>
                    <div class="nav_select_show div_trianglea" v-show="pulldownState === 1">
                        <!-- 彩票游戏下拉框 -->
                        <ul class="navlottery_gamebox" @mouseenter="navlotteryShow(1)">
                            <li class="navlottery_game_item box_flex" v-for="(item,index) in navAry" :key="index">
                                <div class="nav_name">{{item.NvgName}}</div>
                                <div class="box_flex cf">
                                    <a class="navlotter_game_btn" v-for="value in item.LotteryList"
                                       :key="value.LgId"
                                       :data-id="value.LgId" :data-index="value.LsId"
                                       @click="getDescribe">{{value.Name}}<span v-if="value.IsHot"></span></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-collapse-transition>

                <el-collapse-transition>
                    <!-- 真人视讯下拉框 -->
                    <div class="div_triangle" v-show="pulldownState === 2">
                        <ul class="Live_video_gamebox box_h" @mouseenter="navlotteryShow(2)">
                            <li @click="startGame(pg[2])">
                                <div class="head_img_div">
                                    <img src="../../static/img/head/AG.png" alt="">
                                </div>
                                <p>AG真人娱乐</p>
                            </li>
                            <li @click="startGame(pg[3])">
                                <div class="head_img_div">
                                    <img src="../../static/img/head/BBIN.png" alt="">
                                </div>
                                <p>BBIN真人娱乐</p>
                            </li>
                            <li @click="startGame(pg[4])">
                                <div class="head_img_div">
                                    <img src="../../static/img/head/OG.png" alt="">
                                </div>
                                <p>OG真人娱乐</p>
                            </li>
                            <li @click="startGame(pg[5])">
                                <div class="head_img_div">
                                    <img src="../../static/img/head/sb.png" alt="">
                                </div>
                                <p>申博真人娱乐</p>
                            </li>
                            <li @click="startGame(pg[6])">
                                <div class="head_img_div">
                                    <img src="../../static/img/head/ob.png" alt="">
                                </div>
                                <p>欧博真人娱乐</p>
                            </li>
                        </ul>
                    </div>
                </el-collapse-transition>
                <el-collapse-transition><!--捕鱼-->
                    <div class="div_triangle" v-show="pulldownState === 3">
                        <ul class="Live_video_gamebox box_h" style="height: 175px" @mouseenter="navlotteryShow(3)">
                            <li class="box_flex head_fish_box">
                                <img src="../../static/img/head/FishingAG.png"
                                     @click="startGame({GameId:2,GameCode:'6'})"
                                     alt="捕鱼王">
                            </li>
                            <li class="box_flex head_fish_box">
                                <img src="../../static/img/head/FishingCQ9.png"
                                     @click="startGame({GameId:12,GameCode:'AB3'})"
                                     alt="黄金渔场">
                            </li>
                            <li class="box_flex head_fish_box">
                                <img src="../../static/img/head/FishingCQ92.png"
                                     @click="startGame({GameId:12,GameCode:'AB1'})"
                                     alt="黄金渔场2">
                            </li>
                            <li class="box_flex head_fish_box">
                                <img src="../../static/img/head/FishingCQ93.png"
                                     @click="startGame({GameId:12,GameCode:'AT01'})"
                                     alt="一炮捕鱼">
                            </li>
                        </ul>
                    </div>
                </el-collapse-transition>
                <el-collapse-transition><!--电子-->
                    <div class="div_triangle" v-show="pulldownState === 4">
                        <ul class="Live_video_gamebox box_h" @mouseenter="navlotteryShow(4)">
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../static/img/head/PTgame.png" @click="toDzGame('7')" alt="pt">
                                </div>
                                <p>PT电子</p>
                            </li>
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../static/img/head/BETSOFT.png" @click="toDzGame('10')" alt="bet">
                                </div>
                                <p>BETSOFT</p>
                            </li>
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../static/img/head/MGgame.png" @click="toDzGame('11')" alt="mg">
                                </div>
                                <p>MG</p>
                            </li>
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../static/img/head/CQ9game.png" @click="toDzGame('12')" alt="cq9">
                                </div>
                                <p>CQ9</p>
                            </li>
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../static/img/head/Hgame.png" @click="toDzGame('13')" alt="hab">
                                </div>
                                <p>HAB</p>
                            </li>
                            <li class="box_flex box_s">
                                <div class="head_img_dz">
                                    <img src="../../static/img/head/AGgame.png" @click="toDzGame('2')" alt="ag">
                                </div>
                                <p>AG</p>
                            </li>
                        </ul>
                    </div>
                </el-collapse-transition>
                <el-collapse-transition><!--体育-->
                    <div class="div_triangle" v-show="pulldownState === 5">
                        <ul class="Live_video_gamebox box_h" @mouseenter="navlotteryShow(5)">
                            <li class="box_flex box_s head_ty">
                                <img src="../../static/img/head/hg_ty.png" @click="startGame(hg)" alt="bet">
                            </li>
                            <li class="box_flex box_s head_ty">
                                <img src="../../static/img/head/sb_ty.png" @click="startGame(sb)" alt="pt">
                            </li>
                            <li class="box_flex box_s head_ty">
                                <img src="../../static/img/head/ss_ty.png" @click="startGame(ss)" alt="bet">
                            </li>
                        </ul>
                    </div>
                </el-collapse-transition>
            </div>
        </div>
        <!-- 弹框 -->
        <cardDom @hiddenDiv="hideCardDiv" v-show="isShow" :ary="ary" :selectNav="selectTabs"></cardDom>
        <!-- 右侧悬浮 -->
        <div ref="rightNav" class="suspension_box" v-show="$store.state.suspension && rightNavStatus">
            <a class="sus_item custer_box" :href="kfUrl" target="_blank">
                <span class='iconfont icon-htmal5icon31' style="font-size: 32px;"></span>
                <div class="hover_box">在线客服</div>
            </a>
            <router-link to="/Client" class="sus_item app_box">
                <span class='iconfont icon-app1' style="font-size: 32px"></span>
                <div class="hover_box">APP下载</div>
                <div class="code_box">
                    <div>
                        <p style="line-height: 16px;font-size: 16px">掌上乐趣</p>
                        <p style="line-height: 16px;font-size: 16px">随心所欲</p>
                        <p style="line-height: 30px;font-size: 12px">扫描二维码进行下载</p>
                    </div>
                    <!-- ios -->
                    <div class="ios_box">
                        <img :src="iosQRURL" height="100px" alt=""/>
                        <div class="text">ios下载</div>
                    </div>
                    <!-- 安卓 -->
                    <div class="ios_box">
                        <img :src="androidQRURL" height="100px"/>
                        <div class="text">安卓下载</div>
                    </div>
                    <!-- Wap H5版本 -->
                    <div class="ios_box">
                        <img :src="WapQrCodeUrl" height="100px" alt=""/>
                        <div class="text">H5版本</div>
                    </div>
                </div>
            </router-link>
            <router-link class="sus_item line_box" to="/line">
                <span class='iconfont icon-luxiantu' style="font-size: 32px"></span>
                <div class="hover_box">线路检测</div>
            </router-link>
            <a href="javascript:void(0)" class="sus_item app_bg">
                <span class="iconfont icon-huanfu" style="font-size: 32px"></span>
                <div>换肤</div>
                <div class="app_bg_box">
                    <p>背景切换</p>
                    <div class="app_bg_content">
                        <div @click="changeBgImg(0)">
                            <img src="../../static/img/bg_A01.jpg" alt="">
                        </div>
                        <div @click="changeBgImg(1)">
                            <img src="../../static/img/bg_A02.jpg" alt="">
                        </div>
                        <div @click="changeBgImg(2)">
                            <img src="../../static/img/bg_A03.jpg" alt="">
                        </div>
                        <div @click="changeBgImg(3)">
                            <img src="../../static/img/bg_A04.jpg" alt="">
                        </div>
                        <div @click="changeBgImg(4)">
                            <img src="../../static/img/bg_A05.jpg" alt="">
                        </div>
                        <div @click="changeBgImg(5)">
                            <img src="../../static/img/bg_A06.jpg" alt="">
                        </div>
                        <div @click="changeBgImg(6)">
                            <img src="../../static/img/bg_A07.jpg" alt="">
                        </div>
                        <div @click="changeBgImg(7)">
                            <img src="../../static/img/bg_A08.jpg" alt="">
                        </div>
                        <div @click="changeBgImg(8)">
                            <img src="../../static/img/bg_A09.jpg" alt="">
                        </div>
                        <div @click="changeBgImg(9)">
                            <img src="../../static/img/bg_A10.jpg" alt="">
                        </div>
                    </div>
                </div>
            </a>
            <a href="javascript:void(0)" class="sus_item switch_right_nav" @click="closeRightNav">
                <span class="iconfont icon-jiantou_xiayiye"></span>
                <div>收起</div>
            </a>
        </div>
        <!--        显示导航栏-->
        <div v-if="$store.state.suspension && !rightNavStatus" class="show_right_nav">
            <div @click="showRightNav">
                <span class="iconfont icon-jiantou_shangyiye"></span>
                <div>展开</div>
            </div>
        </div>
        <hintCom ref="exitHintCom" :confirm="exitConfirm">
            <template slot="content">
                <span>是否退出登录?</span>
            </template>
        </hintCom>
        <!-- 登录弹窗 -->
        <div class="login_div" v-if="loginAfter">
            <div>
                <div class="close_login" @click="closeLogin"></div>
                <loginItem ref="loginFun"/>
            </div>
        </div>
    </div>
</template>
<style>
    .top_mainbox {
        width: 100%;
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.3);
    }

    .box_center {
        align-items: center;
    }

    .box_center:after {
        content: '';
        clear: both;
    }

    .header_topbox {
        position: relative;
        display: flex;
        align-items: center;
        height: 40px;
        background-color: #008573;
        color: #fff;
        font-size: 12px;
        z-index: 5;
    }

    .top_messagebox {
        width: 376px;
        white-space: nowrap;
        overflow: hidden;
    }

    .top_messagebox > p {
        margin-top: -1px;
        color: #fff;
        overflow: hidden;
        cursor: pointer;
        margin-left: 5px;
        vertical-align: sub;
    }

    .top_messagebox > p > * {
        height: 40px;
        margin-left: 6px;
        font-size: 12px;
        vertical-align: middle;
    }

    .top_messagebox > p div {
        line-height: 30px;
    }

    .top_otherinfo {
        align-items: center;
        height: 26px;
        line-height: 26px;
    }

    .user_center {
        display: flex;
        height: 40px;
        padding: 0 10px;
        cursor: pointer;
        position: relative;
        border-right: solid 1px rgba(0, 0, 0, .1);
    }

    .icon-yonghu {
        display: inline-block;
    }

    .user_center > p {
        display: inline-block;
        height: 100%;
        line-height: 40px;
        background-image: url(../../static/img/icon/arrow_bottom.png);
        background-repeat: no-repeat;
        background-position: center right;
        background-size: 14px 8px;
        padding-right: 15px;
        font-size: 12px;
    }

    .user_name {
        margin-right: 15px;
        cursor: pointer;
    }

    .user_balance {
        position: relative;
        height: 40px;
        padding: 0 15px;
        cursor: pointer;
        border-right: solid 1px rgba(0, 0, 0, .1);
    }

    .user_balance > p {
        display: flex;
        align-items: center;
        height: 100%;
        line-height: 26px;
    }

    .user_balance > p > span {
        color: #ffffff;
        padding-right: 5px;
    }

    .user_balance > p > img {
        display: inline-block;
        width: 13px;
        height: 13px;
        margin-left: 10px;
    }

    /* 刷新旋转动画 */
    .refresh_anima {
        animation: refresh 1.5s ease-in-out 0s 1 alternate forwards;
    }

    @keyframes refresh {
        from {
            transform: rotateZ(0deg)
        }
        to {
            transform: rotateZ(360deg)
        }

    }

    .user_operation a {
        float: left;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
        border-right: solid 1px rgba(0, 0, 0, .1);
    }

    .phone_head {
        display: flex;
        align-items: center;
    }

    .phone_head:last-child {
        border-right: none;
    }

    .user_operation a:last-child {
        margin-right: 0px;
    }

    /* 导航栏 */
    .nav_box {
        position: relative;
        /*background-image: url(../../static/img/top_bg.png);*/
        height: 70px;
        background-color: white;
        z-index: 4;
        /*background-repeat: no-repeat;*/
        /*background-position: center center;*/
        /*background-size: 100% 64px;*/
    }

    .logo {
        float: left;
        height: 64px;
        justify-content: center;
        align-items: center;
    }

    .logo img {
        width: auto;
        height: 50px;
      margin-top: 7px;
    }

    .nav_content {
        float: right;
    }

    .nav_content .nav_item {
        float: left;
        position: relative;
        margin-left: 50px;
    }

    .nav_content .nav_item > a {
        display: block;
        line-height: 70px;
        color: #171717;
        text-align: right;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    }

    .nav_content .nav_item > a.nav_arrow_icon {
        position: relative;
        background-position: center right 15px;
        background-repeat: no-repeat;
        background-size: 13px 11px;
        background-image: url(../../static/img/icon/nav_text_arrow.png);
    }

    .icon-huo1 {
        display: block;
        position: absolute;
        top: 20px;
        right: -24px;
        color: red;
        line-height: 0;
        padding-top: 4px;
        font-size: 24px;
        animation: ntop .3s infinite;
        animation-direction: alternate;
    }

    @keyframes ntop {
        from {
            top: 16px;
        }
        to {
            top: 18px;
        }
    }

    @-webkit-keyframes ntop {
        from {
            top: 16px;
        }
        to {
            top: 18px;
        }
    }

    .nav_content .nav_item > a.router-link-active {
        color: #008573;
    }

    .nav_content .nav_item > .nav_arrow_icon.router-link-active {
        background-image: url(../../static/img/icon/nav_textse_arrow.png);
    }

    .nav_content .nav_item > a:hover {
        color: #008573;
    }

    /* 右侧悬浮 */
    .suspension_box {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 3;
        font-size: 14px;
        width: 67px;
        height: 100%;
        margin: auto;
        padding-top: 8.5vw;
        background-color: #292929;
        transition: all .3s;
    }

    .show_right_nav {
        position: fixed;
        right: 0;
        top: 40vw;
        width: 67px;
        height: 80px;
        z-index: 3;
    }

    .show_right_nav > div {
        width: 67px;
        height: 80px;
        padding: 0 0 20px;
        color: #b2b2b2;
        text-align: center;
        background-color: #383838;
        cursor: pointer;
    }

    .show_right_nav > div > span {
        font-size: 34px;
    }

    .suspension_box .sus_item {
        text-align: center;
        width: 67px;
        height: 80px;
        position: relative;
        display: block;
        padding: 0 0 20px;
        color: #b2b2b2;
    }

    .suspension_box .sus_item:hover, .show_right_nav > div:hover {
        color: #ffffff;
        background-color: #008573;
    }

    .app_box:hover .code_box {
        display: block;
    }

    .hover_box {
        width: 100%;
        font-size: 12px;
        line-height: 12px;
        text-align: center;
        overflow: hidden;
    }

    .code_box {
        position: absolute;
        width: 134px;
        /*height: 400px;*/
        background-color: #008573;
        overflow: hidden;
        left: -134px;
        top: 0;
        padding: 13px;
        line-height: 30px;
        font-size: 0;
        transition: all .4s linear 10ms;
        -webkit-transition: all .4s linear 10ms;
        display: none
    }

    .app_bg:hover .app_bg_box {
        display: block;
    }

    .app_bg_box {
        display: none;
        position: absolute;
        top: 0;
        left: -276px;
        width: 276px;
        padding: 15px 15px 19px 15px;
        background-color: #008573;
        color: #ffffff;
    }

    .app_bg_box > p {
        text-align: left;
        font-size: 12px;
    }

    .app_bg_content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    .app_bg_content > div {
        margin-top: 10px;
    }

    .switch_right_nav {
        margin-top: 15vw;
        background-color: #383838;
    }

    .switch_right_nav > span {
        font-size: 32px;
    }

    .code_box img {
        width: 100%;
        display: block;
    }

    .code_box .text {
        font-size: 14px;
        color: white;
    }

    .ios_box {
        margin-bottom: 11px;
        height: 120px;
        color: white;
    }

    .ios_box .text {
        border-bottom: 1px solid #46b3a7;
    }

    .nav_select_div {
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        height: auto;
        background-color: #f9f9f9;
        box-shadow: 0 -5px 5px -5px #e4e4e4; /*顶部阴影*/
        z-index: 50;
    }


    .nav_select_show {
        position: relative;
        display: block;
        width: 100%;
        background-color: #f9f9f9;
    }

    .navlottery_gamebox {
        display: flex;
        justify-content: center;
        position: relative;
        width: 1200px;
        margin: 0 auto;
        z-index: 66;
        padding: 25px 0;
        background-color: #f9f9f9;
        /*box-shadow: 0 -5px 5px -5px #e4e4e4; !*顶部阴影*!*/
    }

    .div_triangle {
        position: relative;
        width: 1200px;
        margin: 0 auto;
    }

    .div_trianglea {
        position: relative;
        width: 1200px;
        margin: 0 auto;
    }

    .navlottery_game_item {
        /*width: 12%;*/
    }

    .navlottery_game_item:not(:last-child) {
        border-right: dotted 1px #9b9b9b;
    }

    .navlottery_game_item > div {
        /*display: inline-block;*/
        /*vertical-align: top;*/
    }

    .navlottery_game_item .navlotter_game_btn {
        position: relative;
        width: 100%;
        text-align: left;
        display: block;
        color: #666666;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        line-height: 35px;
        margin: 0 1px 2px;
        text-indent: 22px;
    }

    .navlottery_game_item .navlotter_game_btn > span {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 13px;
        padding: 1px;
        margin-left: 3px;
        margin-top: -4px;
        background: url(../../static/img/icon/hot.png) no-repeat 0 0/cover;
        vertical-align: text-top;
        animation: navtop .3s infinite;
        animation-direction: alternate;
    }

    @-webkit-keyframes navtop {
        from {
            top: -4px;
        }
        to {
            top: -2px;
        }
    }

    @keyframes navtop {
        from {
            top: -4px;
        }
        to {
            top: -2px;
        }
    }

    .nav_name {
        font-size: 14px;
        font-weight: bold;
        text-indent: 22px;
        color: #222222;
        margin-bottom: 7px;
        /*word-break: break-word;*/
    }

    .navlottery_game_item .navlotter_game_btn:hover {
        color: #008573;
    }

    .navlottery_game_item .navlotter_game_btn:hover:before {
        border-left: 6px solid #008573;
    }

    /* 真人视讯下拉 */
    .Live_video_gamebox {
        position: relative;
        width: 1200px;
        height: 265px;
        margin: 0 auto;
        z-index: 66;
    }

    .head_img_div {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 215px;
    }

    .head_img_dz {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 200px;
    }

    .head_img_dz > img {
        width: 177px;
    }

    .head_img_div > img {
        width: 200px;
        height: auto;
    }

    .head_fish_box {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .head_fish_box > img {
        height: 100%;
    }

    .live_video-enter-active, .live_video-leave-active {
        transition: navhover .3s inherit;
    }

    .live_video-enter, .live_video-leave-to {
        height: 0;
    }

    @-webkit-keyframes navhover {
        from {
            height: 0;
        }
        to {
            height: auto;
        }
    }

    @keyframes navhover {
        from {
            height: 0;
        }
        to {
            height: auto;
        }
    }

    .Live_video_gamebox > li {
        width: 20%;
        /*justify-content: center;*/
        /*align-items: center;*/
        /*white-space: nowrap;*/
        /*flex-direction: row;*/
        border-left: solid 1px #d8d8d8;
        cursor: pointer;
    }

    .head_ty {
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        flex-direction: row;
    }

    .Live_video_gamebox > li:hover {
        background-color: rgba(0, 0, 0, .1);
    }

    .Live_video_gamebox > li:last-child {
        border-right: solid 1px #d8d8d8;
    }

    /*.Live_video_gamebox > li > img {*/
    /*    display: block;*/
    /*    width: 70%;*/
    /*    height: auto;*/
    /*    margin: 0 auto;*/
    /*    cursor: pointer;*/
    /*}*/

    .Live_video_gamebox > li > p {
        text-align: center;
    }

    /* 个人账户下拉框 */
    .user_center_listshow:hover .user_center_listbox, .user_balance:hover .user_head_div {
        display: block;
    }

    .user_center_listbox {
        display: none;
        width: 532px;
        height: auto;
        position: absolute;
        z-index: 66;
        left: -226px;
        top: 27px;
        padding-top: 13px;
    }

    .user_head_div {
        display: none;
        position: absolute;
        top: 27px;
        left: -15px;
        width: 220px;
        height: auto;
        z-index: 66;
        padding-top: 13px;
    }

    .admin_center {
        width: 100%;
        background-color: rgba(255, 255, 255, .96);
        border-radius: 5px;
        box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.35);
    }

    .user_head_box {
        position: relative;
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 5px;
        box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.35);
        color: #555555;
        padding: 15px;
    }

    .user_head_box > a {
        display: block;
        width: 190px;
        height: 40px;
        margin: 5px 0 15px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        border-radius: 5px;
    }

    .head_cz {
        background-color: #ff680a;
        color: #ffffff;
    }

    .head_cash {
        border: solid 1px #9b9b9b;
        background-color: #ffffff;
    }

    .user_exit {
        width: 190px;
        height: 45px;
        line-height: 43px;
        border-top: solid 1px #9b9b9b;
        border-bottom: solid 1px #9b9b9b;
        text-align: center;
    }

    .user_exit > a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }

    .user_exit > a > span {
        font-size: 20px;
        margin-right: 5px;
    }

    .login_record {
        padding: 20px 0 10px;
        text-align: center;
        color: #9b9b9b;
    }

    .login_record > p {
        line-height: 16px;
    }

    .user_center_listitembox {
        display: flex;
        justify-content: start;
        position: relative;
    }

    .user_center_bottom_box {
        width: 25%;
    }

    .user_center_listitembox:after, .user_head_box:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #008573;
    }

    .agency_center {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 16px 0;
        text-align: center;
    }

    .agency_center_a {
        display: block;
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #008573;
        box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.18);
        border-radius: 3px;
        font-size: 14px;
        color: #ffffff;
    }

    .user_center_listmain {
        overflow: hidden;
        width: 100%;
    }

    .user_center_listmain > a {
        display: block;
        position: relative;
        text-align: left;
        text-indent: 40px;
        color: #666666;
        line-height: 35px;
        font-size: 13px;
    }

    .user_center_listmain > a:before {
        content: '';
        position: absolute;
        top: 13px;
        left: 30px;
        width: 0;
        height: 0;
        border-left: 4px solid #707070;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
    }

    .user_center_listmain > a:hover {
        color: #2aaca2;
    }

    .user_center_listmain > a:hover:before {
        border-left: 4px solid #2aaca2;
    }

    .user_center_listbox .user_center_listtitle {
        color: #555555;
        font-weight: bold;
        font-size: 14px;
        padding: 10px 14px;
        letter-spacing: 2px;
        text-align: center;
    }

    .register__login {
        padding-right: 12px;
        font-size: 0px;
    }

    .register__login a {
        color: #fff;
        width: 57px;
        height: 20px;
        background: #088e84;
        display: inline-block;
        text-align: center;
        border-radius: 2px;
        line-height: 20px;
        font-size: 13px;
    }

    .register__login a:last-child {
        margin-left: 5px;
    }

    .navcardgame_gamebox_show img {
        margin: 5px 0 !important;
    }


    .nav_content a {
        cursor: pointer;
    }

    .login_status {
        justify-content: flex-end;
        align-items: center;
    }

    .login_button {
        width: 92px;
        height: 31px;
        line-height: 31px;
        font-size: 14px;
        color: #333333;
        text-align: center;
        margin-left: 9px;
        cursor: pointer;
        background-color: #fff;
        border-radius: 2px;
    }

    .icon_a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 92px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        color: #ffffff;
        border-right: solid 1px rgba(0, 0, 0, .1);
    }

    .icon_a:hover, .user_center:hover, .user_balance:hover, .user_operation > a:hover {
        background-color: rgba(0, 0, 0, .1);
    }

    .icon_a > span {
        padding-right: 5px;
    }

    .icon-htmal5icon31 {
        font-size: 20px;
    }

    .play_demo {
        background-color: #fdac1e !important;
    }

    .login_div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
        z-index: 100;
    }

    .login_div > div {
        position: relative;
        padding: 2px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 0 20px rgb(0, 0, 0);
    }

    .close_login {
        position: absolute;
        top: -22px;
        right: -22px;
        width: 45px;
        height: 45px;
        z-index: 1;
        cursor: pointer;
        background-image: url(../../static/img/icon/close.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all .1s linear;
    }

    .close_login:hover {
        animation: rotatebtn 1s linear infinite;
    }

    @keyframes rotatebtn {
        0% {
            transform: scale(1.1) rotate(0deg);
        }
        50% {
            transform: scale(1.1) rotate(180deg);
        }
        100% {
            transform: scale(1.1) rotate(360deg);
        }
    }
</style>
<script>
  import cardDom from "../Elasticframe/homeCard.vue"
  import hintCom from '@/components/Elasticframe/OrderCancel.vue'
  // 引用axios封装文件
  import {postAjax, getAjax} from "../../util/ajax.js"
  import {SysKey} from "../../util/sysconfig";
  import {getUserInfo, userOut, getHeadNav} from "../../util/getdata";
  import {timeFormatProcessing} from "../../util/common";
  import loginItem from "../login/login_item";
  import {Message} from "element-ui"
  import img1 from "../../static/img/bg_B01.jpg"
  import img2 from "../../static/img/bg_B02.jpg"
  import img3 from "../../static/img/bg_B03.jpg"
  import img4 from "../../static/img/bg_B04.jpg"
  import img5 from "../../static/img/bg_B05.jpg"
  import img6 from "../../static/img/bg_B06.jpg"
  import img7 from "../../static/img/bg_B07.jpg"
  import img8 from "../../static/img/bg_B08.jpg"
  import img9 from "../../static/img/bg_B09.jpg"
  import img10 from "../../static/img/bg_B00.jpg"

  export default {
    components: {cardDom, hintCom, loginItem},
    // 刷新页面
    inject: ["reload"],
    data() {
      return {
        DlCenterUrl: '#',
        ImgServerUrl: SysKey("ImgServerUrl").SysValue,
        iosQRURL: SysKey("ImgServerUrl").SysValue + SysKey("IosQrCodeUrl").SysValue,
        androidQRURL: SysKey("ImgServerUrl").SysValue + SysKey("AndroidQrCodeUrl").SysValue,
        WapQrCodeUrl: SysKey("ImgServerUrl").SysValue + SysKey("WapQrCodeUrl").SysValue,
        SysLogo: SysKey("ImgServerUrl").SysValue + SysKey("SysLogo").SysValue,
        kfUrl: SysKey("KfCenterUrl").SysValue,
        title: "", //滚动公告
        isShow: false, //弹框状态
        Refresh: false, //是否刷新余额
        userToken: localStorage.getItem('Authorization'), //用户token
        // navAry: [], //下拉框数据
        url: SysKey("ImgServerUrl").SysValue, //图片地址
        routerName: '/', //路由地址,
        ary: [], //传入公告栏的值
        hoverState: false, //下拉框是否显示
        pulldownState: 0,//显示相对应得导航下拉
        selectTabs: '',//默认选中的公告
        pg: {
          2: {GameCode: "0", GameId: 2},
          3: {GameCode: "lobby", GameId: 3},
          4: {GameCode: "1", GameId: 4},
          5: {GameCode: "Sunbet_Lobby", GameId: 8},
          6: {GameCode: "101", GameId: 9},
        },
        sb: {
          GameCode: '0',
          GameId: 5,
        },
        ss: {
          GameCode: 'SC',
          GameId: 15,
        },
        hg: {
          GameId: 16,
          plat: 1003
        },
        imgData: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],//背景图片切换
        imgCorlor: ['e3e1e6', '045acb', '150819', '63d4e6', '000906', '137159', '02060f', '252525', '1c2953', '673720'],
        rightNavStatus: true,
      }
    },
    computed: {
      lastLoginTime(){
        return this.$store.state.lastLoginInfo
      },
      tempStatus() {
        return this.$store.state.tempStatus
      },
      userInfo() {
        return this.$store.state.userInfo//用户信息
      },
      loginStatus() {
        return this.$store.state.loginStatus
      },
      loginAfter() {
        return this.$store.state.loginAfter
      },
      navArr() {
        return this.$store.state.navAry
      },
      navAry() {
        if (this.navArr.length === 0) return false;
        return this.navArr;
      }
    },
    methods: {
      //最后一次登陆信息
      lastLoginInfo() {
        let that = this;
        let url = "Api/User/UserLoginLogInfo";
        let cxData = {
          StartTime: timeFormatProcessing(),
          EndTime: timeFormatProcessing(0, 1),
          PIndex: 1,
          PSize: 2
        };
        postAjax(url, cxData).then((data) => {
          if (data.IsSucess) {
            this.$store.commit('setLastLogin',data.Data.rows[1].LoginTime)
          }
        }).catch(() => {
          this.loading = false
        })
      },
      //关闭右侧导航栏
      closeRightNav() {
        this.$refs.rightNav.style.right = '-67px'
        setTimeout(() => {
          this.rightNavStatus = false
        }, 300)
      },
      //显示右侧导航栏
      showRightNav() {
        this.$refs.rightNav.style.right = '0'
        this.rightNavStatus = true
      },
      changeBgImg(str) {
        //替换背景图片
        document.getElementById('app').style.backgroundImage = `url(${this.imgData[Number(str)]})`
        document.getElementById('app').style.backgroundColor = `#${this.imgCorlor[Number(str)]}`
        localStorage.setItem('bgNum', str)
      },
      //去电子游艺
      toDzGame(arr) {
        this.$router.push({
          path: '/ptGame',
          query: {
            id: arr
          }
        })
      },
      loginButtom() {
        this.$store.commit('setLoginAfter', true)
      },
      closeLogin() {
        this.$store.commit('setLoginAfter', false)
      },
      exitConfirm() {
        userOut()
      },
      // 退出
      exit() {
        this.$refs.exitHintCom.show();
      },
      // 刷新
      refresh() {
        let that = this;
        if (this.Refresh === false) {
          that.Refresh = true
          getUserInfo()
          setTimeout(function () {
            that.Refresh = false
          }, 1500)
        }
      },
      // 显示弹框
      onclickGonggao(num) {
        this.selectTabs = num
        this.isShow = true
      },
      // 隐藏弹框
      hideCardDiv() {
        this.isShow = false;
      },
      // 请求用户数据
      userinfoAjax() {
        if (this.userInfo.UtId == 1 && location.hostname != 'localhost') {
          // console.log(SysKey("DlCenterUrl").SysValue)
          // this.DlCenterUrl = SysKey("DlCenterUrl").SysValue + "?token=" + localStorage.getItem("Authorization").replace("Basic ", "");
          this.DlCenterUrl = document.location.protocol + "//daili." + document.location.host.split('.').slice(-2).join('.') + "/" + "?token=" + localStorage.getItem("Authorization").replace("Basic ", "");
        }
      },
      //导航栏路由跳转
      getDescribe(e) {
        let indexs = e.target.dataset.index
        let ids = e.target.dataset.id
        let that = this
        if (indexs == 1) {
          that.routerName = "Timehonor"
        } else if (indexs == 2) {
          that.routerName = "Racing"
        } else if (indexs == 3) {
          that.routerName = "Timehonor"
        } else if (indexs == 4) {
          that.routerName = "Quickthree"
        } else if (indexs == 5) {
          that.routerName = "twenteight"
        } else if (indexs == 6) {
          that.routerName = "Timehonor"
        } else if (indexs == 7){
          that.routerName = "markSix"
        }
        this.$router.push({
          name: that.routerName,
          query: {
            id: ids,
            index: indexs
          }
        })
        this.pulldownState = 0
        this.hoverState = false
        this.reload()
      },
      //个人中心页面
      toCenter(e) {
        let name = e.target.dataset.name
        let value = e.target.dataset.value
        this.$router.push({
          name: "UserCenter",
          query: {
            name: name,
            value: value
          }
        })

      },
      // 公告
      getNotice() {
        let that = this
        let url = "api/Sys/GetSysNotice"
        getAjax(url, 1)
          .then(function (data) {
            that.title = data.Data[0].Title;
            if (data.IsSucess) {
              that.ary = data.Data.map((item, index) => {
                return Object.assign({
                  name: 'a' + index
                }, item);
              });
              that.ary.forEach((item, index) => {
                if (item.IsUrgent && localStorage.getItem('alertState') === 'true') {
                  that.isShow = true;
                  that.selectTabs = item.name;
                  that.$store.commit('CHANGEALERTSTATE');
                  localStorage.setItem('alertState', 'false');
                  return false;
                }
              })
            }
          })
          .catch(() => {
            // that.$message.error("网络异常，请刷新后在试");
          })
      },
      // 三方页面
      getGame(id) {
        if (!localStorage.getItem('Authorization')) {
          this.$store.commit('setLoginAfter', true)
          return false;
        }
        let that = this;
        let name = '';
        // let compalte=false;
        let obj = '';
        let url = "/api/ThirdGame/GetGameList?g=" + id + "&d=1";
        if (id == 2) {
          name = ""
        } else if (id == 3) {
          name = ""
        } else if (id == 4) {
          name = ""
        }
        let data = {
          name: name,
          PIndex: 1,
          PSize: 1
        };
        this.loading = this.$loading({
          lock: true,
          text: '加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)'
        });
        postAjax(url, data).then(function (data) {
          if (data.IsSucess) {
            that.startGame(data.Data.rows[0]);
          }
        }).catch(() => {
          this.loading.close();
          // that.$message.error("网络异常，请刷新后在试");
        })
      },
      startGame(arr) {
        let that = this
        if (!localStorage.getItem('Authorization')) {
          this.$store.commit('setLoginAfter', true)
          return false;
        }
        this.loading = this.$loading({
          lock: true,
          text: '加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)'
        });
        let url = "/api/ThirdGame/StartGame";
        let data = {
          GameCode: arr.GameCode || '',
          game: arr.GameId,
          plat: arr.plat || 1001
        };
        postAjax(url, data, 1).then((data) => {
          that.loading.close();
          if (data.IsSucess) {
            that.$confirm('将在新窗口打开游戏！', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success',
              center: true
            }).then(() => {
              window.open(data.Data);
            }).catch(() => {
              that.$message({
                type: 'warning ',
                message: '已取消游戏'
              });
            });
          } else {
            that.$message.error(data.Message);
          }
        }).catch(() => {
          that.loading.close();
        })
      },
      notQequestData() {
        return this.$router.currentRoute.path != '/userRegister' && this.$router.currentRoute.path != '/userLogin'
      },
      // 显示下拉
      navlotteryShow(num) {
        // this.hoverState = true;
        this.pulldownState = num;
      },
      // 隐藏下拉
      navlotteryHide() {
        this.hoverState = false;
        this.pulldownState = 0;
      },
      //
      shiwan() {
        let that = this;
        postAjax('/api/User/GetTmepUser').then(data => {
          if (data.IsSucess) {
            localStorage.setItem('Authorization', "Basic" + " " + data.Data.Token);
            localStorage.setItem('shiwan', true);
            getUserInfo();
            that.$message.success('登录成功，跳转首页中...');
            setTimeout(() => {
              that.$router.push('/home')
            }, 1000)

          } else {
            Message.error(data.Message)
          }
        })
      },
      bgChange() {
        let path = this.$route.path
        if (path === '/Time' || path === "/Racing" || path === "/quick" || path === "/twent" || path === "/gamePanel" || path === "/markSix" && localStorage.getItem('bgNum')) {
          this.changeBgImg(localStorage.getItem('bgNum'))
        } else {
          document.getElementById('app').style.backgroundImage = `url(../../static/img/bg_B01.jpg)`
          document.getElementById('app').style.backgroundColor = `#e3e1e6`
        }
      }
    },
    created() {
      getHeadNav()
      window.eventBus.$on('refreshHeader', () => {
        this.refresh()
      });
      if (this.notQequestData()) {
        this.userinfoAjax()
        // this.headNavAjax()
        this.getNotice()
      }
      if (localStorage.getItem('Authorization')) {
        this.lastLoginInfo()
        getUserInfo()
      }
    },
    watch: {
      'userInfo': function () {
        this.userinfoAjax()
      },
      'loginAfter'() {
        if (this.loginAfter) {
          this.$refs.loginFun.indentyajax()
        }
      },
      '$route'() {
        this.bgChange()
      }
    },
    mounted() {
      this.bgChange()
    }
  }
</script>

<template>
    <!-- 重庆时时彩 -->
    <div class="allgame-mainbox lottery">
        <div class="box_center">
            <!-- 中奖信息 -->
            <div class="title_box box_h">
                <div class="title_logo">
                    <img :src="logoImgUrl" alt=""/>
                </div>
                <!--投注时间-->
                <div class="title_countdown_box">
                    <h3 class="racing_titles_box">投注倒计时&ensp;&ensp;<strong>{{NowLssue}}</strong>&ensp;期</h3>
                    <div>
                        <countDown :time="countDown" @upTimeData="upTimeData"/>
                    </div>
                </div>
                <!-- 往期中奖号码 -->
                <div class="title_countdown_box" style="margin-top: -3px">
                    <h3>开奖号码&emsp;<strong>{{LastLssue}}</strong>&ensp;期
                        <router-link class="to_zst"
                                     :to="{name:'Trendmap',query:{id:$route.query.id,index:$route.query.index}}"
                                     target="_blank">
                            <span class="iconfont icon-zoushitu"/>&ensp;走势
                        </router-link>
                    </h3>
                    <!-- 中奖号码盒子 -->
                    <div style="margin-top: 12px">
                        <open-number :data-array="LastNum"/>
                    </div>
                </div>
            </div>
            <!-- 玩法内容 -->
            <div class="gametype_center">
                <!-- 主要内容 -->
                <div class="Timhonor_content_box">
                    <!-- 中间内容板块-->
                    <div class="content_info">
                        <!-- 左边选号内容 -->
                        <div class="content_box_left">
                            <!-- 最顶部导航栏 -->
                            <!-- 时时彩 -->
                            <div class="content_nav" v-if="GameIndex == 1">
                                <template v-if="GameIds == 2 || GameIds == 44">
                                    <ul class="content_nav_top box_h">
                                        <li><a :class="NavSwich == 0?'select_a':''" :data-id="0" @click="topNavSwitch">前三</a>
                                        </li>
                                        <li><a :class="NavSwich == 1?'select_a':''" :data-id="1" @click="topNavSwitch">中三</a>
                                        </li>
                                        <li><a :class="NavSwich == 2?'select_a':''" :data-id="2" @click="topNavSwitch">后三</a>
                                        </li>
                                        <li><a :class="NavSwich == 3?'select_a':''" :data-id="3" @click="topNavSwitch">二星</a>
                                        </li>
                                        <li><a :class="NavSwich == 4?'select_a':''" :data-id="4" @click="topNavSwitch">定位胆</a>
                                        </li>
                                        <li><a :class="NavSwich == 5?'select_a':''" :data-id="5" @click="topNavSwitch">不定位</a>
                                        </li>
                                        <li><a :class="NavSwich == 6?'select_a':''" :data-id="6" @click="topNavSwitch">龙虎</a>
                                        </li>
                                    </ul>
                                    <ul class="content_nav_secondary" v-if="NavSwich=='0'">
                                        <li class="second_navitembox box_h">
                                            <label>直选</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>组选</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="content_nav_secondary" v-if="NavSwich=='1'">
                                        <li class="second_navitembox box_h">
                                            <label>直选</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>组选</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="content_nav_secondary" v-if="NavSwich=='2'">
                                        <li class="second_navitembox box_h">
                                            <label>直选</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>组选</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="content_nav_secondary" v-if="NavSwich=='3'">
                                        <li class="second_navitembox box_h" @click="hisStyle(12)">
                                            <label>前二</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 3)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h" @click="hisStyle(13)">
                                            <label>后二</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(3)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="content_nav_secondary" v-if="NavSwich=='4'">
                                        <li class="second_navitembox box_h">
                                            <label>定位胆</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                     @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="content_nav_secondary" v-if="NavSwich=='5'">
                                        <li class="second_navitembox box_h">
                                            <label>三星</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>四星</label>
                                            <div class="box_flex second_item_mainbox box_h">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(4, 6)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="content_nav_secondary Dragon_Tiger" v-if="NavSwich=='6'">
                                        <li class="second_navitembox box_h">
                                            <label>龙虎和</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                     @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </template>
                                <template v-else>
                                    <ul class="content_nav_top box_h">
                                        <li><a :class="NavSwich == 0?'select_a':''" :data-id="0" @click="topNavSwitch">五星</a>
                                        </li>
                                        <li><a :class="NavSwich == 1?'select_a':''" :data-id="1" @click="topNavSwitch">四星</a>
                                        </li>
                                        <li><a :class="NavSwich == 2?'select_a':''" :data-id="2" @click="topNavSwitch">前三</a>
                                        </li>
                                        <li><a :class="NavSwich == 3?'select_a':''" :data-id="3" @click="topNavSwitch">中三</a>
                                        </li>
                                        <li><a :class="NavSwich == 4?'select_a':''" :data-id="4" @click="topNavSwitch">后三</a>
                                        </li>
                                        <li><a :class="NavSwich == 5?'select_a':''" :data-id="5" @click="topNavSwitch">二星</a>
                                        </li>
                                        <li><a :class="NavSwich == 6?'select_a':''" :data-id="6" @click="topNavSwitch">定位胆</a>
                                        </li>
                                        <li><a :class="NavSwich == 7?'select_a':''" :data-id="7" @click="topNavSwitch">不定位</a>
                                        </li>
                                        <li><a :class="NavSwich == 8?'select_a':''" :data-id="8" @click="topNavSwitch">龙虎</a>
                                        </li>
                                        <li><a :class="NavSwich == 9?'select_a':''" :data-id="9" @click="topNavSwitch">任四</a>
                                        </li>
                                        <li><a :class="NavSwich == 10?'select_a':''" :data-id="10"
                                               @click="topNavSwitch">任三</a></li>
                                        <li><a :class="NavSwich == 11?'select_a':''" :data-id="11"
                                               @click="topNavSwitch">任二</a></li>
                                      <li style="margin-left: 20px;"><router-link :to="{name:'gamePanel',query: {id:$route.query.id,index:$route.query.index}}" class="change_bth">官方玩法<div></div></router-link></li>
                                    </ul>
                                    <!-- 次级导航 -->
                                    <!-- 选中加类名 select_three_div -->
                                    <!-- 五星 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='0'">
                                        <li class="second_navitembox box_h">
                                            <label>直选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 2)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>组选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(2,8)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>趣味</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(8)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 四星 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='1'">
                                        <li class="second_navitembox box_h" @click="hisStyle(14)">
                                            <label>前四</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 6)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>

                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h" @click="hisStyle(15)">
                                            <label>后四</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(6)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 前三 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='2'">
                                        <li class="second_navitembox box_h">
                                            <label>直选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>

                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>组选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 中三 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='3'">
                                        <li class="second_navitembox box_h">
                                            <label>直选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>

                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>组选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 后三 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='4'">
                                        <li class="second_navitembox box_h">
                                            <label>直选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>

                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>组选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 二星 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='5'">
                                        <li class="second_navitembox box_h" @click="hisStyle(12)">
                                            <label>前二</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 3)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h" @click="hisStyle(13)">
                                            <label>后二</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(3)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 定位胆 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='6'">
                                        <li class="second_navitembox box_h">
                                            <label>定位胆</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                     @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 不定位 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='7'">
                                        <li class="second_navitembox box_h">
                                            <label>三星</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0, 4)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>四星</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(4, 6)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>五星</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(6, 8)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 龙虎斗 -->
                                    <ul class="content_nav_secondary Dragon_Tiger" v-if="NavSwich=='8'">
                                        <li class="second_navitembox box_h">
                                            <label>龙虎和</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList" :key="item.select_two_a" :data-id="item.LpId"
                                                     @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 任四 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='9'">
                                        <li class="second_navitembox box_h">
                                            <label>直选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                     @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 任三 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='10'">
                                        <li class="second_navitembox box_h">
                                            <label>直选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(0,2)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="second_navitembox box_h">
                                            <label>复选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList.slice(2)" :key="item.LpId"
                                                     :data-id="item.LpId" @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- 任二 -->
                                    <ul class="content_nav_secondary" v-if="NavSwich=='11'">
                                        <li class="second_navitembox box_h">
                                            <label>直选</label>
                                            <div class="box_flex second_item_mainbox cf">
                                                <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                     v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                     @click="smallSwitch"
                                                     :data-name="item.Name">{{item.Alias}}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </template>
                            </div>
                            <!-- 11选5 -->
                            <div class="content_nav" v-if="GameIndex == 3">
                                <ul class="content_nav_top box_h">
                                    <li><a :class="NavSwich == 0?'select_a':''" :data-id="0"
                                           @click="topNavSwitch">三码</a></li>
                                    <li><a :class="NavSwich == 1?'select_a':''" :data-id="1"
                                           @click="topNavSwitch">二码</a></li>
                                    <li><a :class="NavSwich == 2?'select_a':''" :data-id="2"
                                           @click="topNavSwitch">不定位胆</a></li>
                                    <li><a :class="NavSwich == 3?'select_a':''" :data-id="3"
                                           @click="topNavSwitch">定位胆</a></li>
                                    <li><a :class="NavSwich == 4?'select_a':''" :data-id="4"
                                           @click="topNavSwitch">任选复式</a></li>
                                    <li><a :class="NavSwich == 5?'select_a':''" :data-id="5"
                                           @click="topNavSwitch">任选单式</a></li>
                                </ul>
                                <!-- 前三 -->
                                <ul class="content_nav_secondary" v-if="NavSwich=='0'">
                                    <li class="second_navitembox box_h">
                                        <label>前三直选</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList.slice(0, 2)" :key="item.LpId"
                                                 :data-id="item.LpId" @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="second_navitembox box_h">
                                        <label>前三组选</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList.slice(2,4)" :key="item.LpId"
                                                 :data-id="item.LpId" @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <!-- 前二 -->
                                <ul class="content_nav_secondary" v-if="NavSwich=='1'">
                                    <li class="second_navitembox box_h">
                                        <label>前二直选</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList.slice(0, 2)" :key="item.LpId"
                                                 :data-id="item.LpId" @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>

                                        </div>
                                    </li>
                                    <li class="second_navitembox box_h">
                                        <label>前二组选</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList.slice(2,4)" :key="item.LpId"
                                                 :data-id="item.LpId" @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <!-- 不定位胆 -->
                                <ul class="content_nav_secondary" v-if="NavSwich=='2'">
                                    <li class="second_navitembox box_h">
                                        <label>前三不定位</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                 @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <!-- 定位胆 -->
                                <ul class="content_nav_secondary" v-if="NavSwich=='3'">
                                    <li class="second_navitembox box_h">
                                        <label>前三定位胆</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                 @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <!-- 任选复式 -->
                                <ul class="content_nav_secondary" v-if="NavSwich=='4'">
                                    <li class="second_navitembox box_h">
                                        <label>任选复式</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                 @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <!-- 任选单式-->
                                <ul class="content_nav_secondary" v-if="NavSwich=='5'">
                                    <li class="second_navitembox box_h">
                                        <label>任选单式</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                 @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- 低频彩 -->
                            <div class="content_nav" v-if="GameIndex == 6">
                                <ul class="content_nav_top box_h">
                                    <li><a :class="NavSwich == 0?'select_a':''" :data-id="0"
                                           @click="topNavSwitch">三星</a></li>
                                    <li><a :class="NavSwich == 1?'select_a':''" :data-id="1"
                                           @click="topNavSwitch">二星</a></li>
                                    <li><a :class="NavSwich == 2?'select_a':''" :data-id="2"
                                           @click="topNavSwitch">定位胆</a></li>
                                    <li><a :class="NavSwich == 3?'select_a':''" :data-id="3"
                                           @click="topNavSwitch">不定位胆</a></li>
                                </ul>
                                <!-- 三星 -->
                                <ul class="content_nav_secondary" v-if="NavSwich=='0'">
                                    <li class="second_navitembox box_h">
                                        <label>直选</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList.slice(0, 3)" :key="item.LpId"
                                                 :data-id="item.LpId" @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="second_navitembox box_h">
                                        <label>组选</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList.slice(3)" :key="item.LpId" :data-id="item.LpId"
                                                 @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <!-- 二星 -->
                                <ul class="content_nav_secondary" v-if="NavSwich=='1'">
                                    <li class="second_navitembox box_h">
                                        <label>前二</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList.slice(0, 3)" :key="item.LpId"
                                                 :data-id="item.LpId" @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="second_navitembox box_h">
                                        <label>后二</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList.slice(3)" :key="item.LpId" :data-id="item.LpId"
                                                 @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <!--定位胆 -->
                                <ul class="content_nav_secondary" v-if="NavSwich=='2'">
                                    <li class="second_navitembox box_h">
                                        <label>定位胆</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                 @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <!-- 不定位胆 -->
                                <ul class="content_nav_secondary" v-if="NavSwich=='3'">
                                    <li class="second_navitembox box_h">
                                        <label>不定位</label>
                                        <div class="box_flex second_item_mainbox cf">
                                            <div :class="[navsw==item.LpId?'select_two_a':'']"
                                                 v-for="item in navList" :key="item.LpId" :data-id="item.LpId"
                                                 @click="smallSwitch"
                                                 :data-name="item.Name">{{item.Alias}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- 示例内容 -->
                            <div class="demo_case">
                                <div class="demo_left">{{exampleObj[navsw].showTest || ''}}
                                    <div>
                                        <span class="iconfont icon-dengpao"/>选号示例
                                        <div>
                                            <p v-for="(item,index) in exampleObj[navsw].arr" :key="index">投注：{{item.title || ''}} <br/> 开奖：{{item.content || ''}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bonus_select">
                                    <span>奖金调节：</span>
                                    <label>
                                        <select @change="adjustMent">
                                            <option :selected="index === 0" v-for="(item,index) in userSelect" :value="index" :key="index">{{item}}%</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <!-- 选号内容 -->
                            <template>
                                <template v-if="navsw==2">
<!--                                    <div class="demo_case">-->
<!--                                        <div class="demo_left">每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖-->
<!--                                            <div>-->
<!--                                                <span class="iconfont icon-dengpao"/>选号示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：12345 <br/> 开奖：12345 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==1">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"></span>每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：12345 <br/> 开奖：12345 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==3">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"></span>至少选择五个号码投注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:220px;left:-225px">-->
<!--                                                    <p>投注：02568 开奖：02568（不限顺序）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==4">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"></span>至少选择1个二重号码和3个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-285px">-->
<!--                                                    <p>投注：02588（88为二重号，0/2/5为单号） 开奖：02588（顺序不限）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==5">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"></span>至少选择2个二重号码和1个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-285px">-->
<!--                                                    <p>投注：00588（0/8为二重号，5为单号） 开奖：00588（顺序不限） 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==6">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"></span>至少选择1个三重号码和2个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-285px">-->
<!--                                                    <p>投注：02888（8为三重号，0/2为单号） 开奖：02888（顺序不限） 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==7">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"></span>至少选择1个三重号码和1个二重号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-285px">-->
<!--                                                    <p>投注：22888（2为二重号，8为三重号） 开奖：22888（顺序不限）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==8">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"></span>至少选择1个四重号码和1个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-285px">-->
<!--                                                    <p>投注：08888（8为四重号，0为单号） 开 奖：08888（顺序不限）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==9">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码，包含即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：1 开奖：xx1xx（顺序不限）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==10">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码且出现2次，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：8 开奖：xxx88（顺序不限）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==11">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码且出现3次，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：8 开奖：xx888（顺序不限） 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==12">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码且出现4次，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:245px;left:-250px">-->
<!--                                                    <p>投注：8<br> 开奖：x8888（顺序不限） 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==14">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前四位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：3456*<br/>开奖：3456* 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==13">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前四位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：3456*<br/>开奖：3456* 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==15">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择4个号码投注，竞猜开奖号码的前4位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：2568*<br/>开奖：2568* 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==16">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择1个二重号码和2个单号号码，竞猜开奖号码的前四位，号码一致顺序不限即中奖，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-285px">-->
<!--                                                    <p>投注：2588*（8为二重号，2/5为单号） 开奖：2588*（顺序不限） 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==17">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择2个二重号码，竞猜开奖号码的前四位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:230px;left:-222px">-->
<!--                                                    <p>投注：0088*（0/8为二重号）<br/>开奖：0088*（不限顺序） </p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==18">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择1个三重号码和1个单号号码，竞猜开奖号码的前四位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:270px;left:-275px">-->
<!--                                                    <p>投注：2888*（8为三重号，2为单号）<br/>开奖：2888*（顺序不限） 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==19">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的后四位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：*3456<br/>开奖：*3456 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==20">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的后四位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：*3456<br/>开奖：*3456 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==21">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择4个号码投注，竞猜开奖号码的后4位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：*2568<br/>开奖：*2568 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==22">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择1个二重号码和2个单号号码，竞猜开奖号码的后四位，号码一致顺序不限即中奖，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:290px;left:-290px">-->
<!--                                                    <p>投注：*2588（8为二重号，2/5为单号）<br>开奖：*2588（顺序不限） 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==23">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择2个二重号码，竞猜开奖号码的后四位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-285px">-->
<!--                                                    <p>投注：*0088（0/8为二重号）<br/>开奖：*0088（不限顺序） 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==24">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择1个三重号码和1个单号号码，竞猜开奖号码的后四位，号码一致顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-285px">-->
<!--                                                    <p>投注：*2888（8为三重号，2为单号）<br/>开奖：*2888（顺序不限） 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==25">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：456**<br/>开奖：456** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==26">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：456**<br/>开奖：456** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==27">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择一个和值，竞猜开奖号码前三位数字之和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:230px;left:-235px;">-->
<!--                                                    <p>投注：和值1 开奖：001**，010**，100** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCount @setdata="setGdata" @setbet="setBetNum" ref="drag" v-if="GameState"/>
                                </template>
                                <template v-if="navsw==28">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注：跨度8 开奖：(1)前三数字08x（不限顺序）,x≠9;(2)前三数字19x（不限顺序），x≠0。即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==29">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中选择2个数字组成两注，所选号码与开奖号码的前三位相同，顺序不限，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：112** 开奖：112**（顺序不限）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==30">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中任意选择3个号码组成一注，所选号码与开奖号码的前三位相同，顺序不限，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：123** 开奖：123**（不限顺序）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==31">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>手动输入号码，3个数字为一注，所选号码与开奖号码的前三位相同，顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:335px;left:-340px">-->
<!--                                                    <p>投注：456** 开奖：456** 即中组六(不限顺序)<br>投注：445** 开奖：454/445/544** 即中组三-->
<!--                                                    </p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==32">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的中三位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注456**<br>开奖：456** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==33">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的中三位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注456**<br>开奖：456** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==34">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择一个和值，竞猜开奖号码前三位数字之和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注和值1 开奖：001**，010**，100** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCount @setdata="setGdata" @setbet="setBetNum" ref="drag"
                                               v-if="GameState"/>
                                </template>
                                <template v-if="navsw==35">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>所选数值等于开奖号码的中间3位最大与最小数字相减之差，即为中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:370px;left:-375px;">-->
<!--                                                    <p>投注：跨度8 开奖： 开奖：(1)后三数字08x（不限顺序）,x≠9;(2)后三数字19x（不限顺序），x≠0 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==36">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中选择2个数字组成两注，所选号码与开奖号码的中三位相同，顺序不限，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：*112* 开奖：*112*（顺序不限）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==37">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中任意选择3个号码组成一注，所选号码与开奖号码的中三位相同，顺序不限，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：*123* 开奖：*123*（不限顺序）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==38">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>手动输入号码，3个数字为一注，所选号码与开奖号码的中三位相同，顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:338px;left:-343px;">-->
<!--                                                    <p>投注：*456* 开奖：*456* 即中组六(不限顺序)<br/>投注：*445* 开奖：*454/445/544* 即中组三-->
<!--                                                    </p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==39">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的后三位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注**456<br>开奖：**456 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==40">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的后三位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注**456<br>开奖：**456 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==41">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>至少选择一个和值，竞猜开奖号码后三位数字之和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注和值1 开奖：001**，010**，100** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCount @setdata="setGdata" @setbet="setBetNum" ref="drag"
                                               v-if="GameState"/>
                                </template>
                                <template v-if="navsw==42">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:370px;left:-375px;">-->
<!--                                                    <p>投注：跨度8 开奖：(1)后三数字08x（不限顺序）,x≠9;(2)后三数字19x（不限顺序），x≠0 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==43">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中选择2个数字组成两注，所选号码与开奖号码的后三位相同，顺序不限，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：**112 开奖：**112（顺序不限）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==44">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中任意选择3个号码组成一注，所选号码与开奖号码的后三位相同，顺序不限，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：**123 开奖：**123（不限顺序）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==45">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>手动输入号码，3个数字为一注，所选号码与开奖号码的后三位相同，顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:338px;left:-343px;">-->
<!--                                                    <p>投注：456** 开奖：456** 即中组六(不限顺序)<br/>投注：445** 开奖：454/445/544** 即中组三-->
<!--                                                    </p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==46">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：45***<br/>开奖：45*** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==47">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：45***<br/>开奖：45*** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==48">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中选择2个数字组成一注，所选号码与开奖号码的前二位相同，顺序不限，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：58***<br/>开奖：58*** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==49">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：***45 <br/>开奖：***45 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==50">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：***45 <br/>开奖：***45 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==51">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中选择2个数字组成一注，所选号码与开奖号码的后二位相同，顺序不限，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：***58<br/>开奖：***58 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==52">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从任意位选择1个或多个号码，选号与对应位置的开奖号码一致即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：1 <br/>开奖：00123 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==53">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择1个号码投注，竞猜开奖号码前三位中包含这个号码，包含即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：1 开奖：1xx**(不限顺序) 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==54">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择2个号码投注，竞猜开奖号码前三位中包含这2个号码，包含即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：1，2 开奖：12x**（不限顺序）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==55">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择1个号码投注，竞猜开奖号码后三位中包含这个号码，包含即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：1 开奖：**1xx(不限顺序) 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==56">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择2个号码投注，竞猜开奖号码后三位中包含这2个号码，包含即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：1，2 开奖：**12x（不限顺序）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==57">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择1个号码投注，竞猜开奖号码后四位中包含这个号码，包含即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：*1xxx 开奖：*1xxx（不限顺序）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==58">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择2个号码投注，竞猜开奖号码后四位中包含这2个号码，包含即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：1，2 开奖：*12xx（不限顺序）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==59">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择2个号码投注，竞猜开奖号码中包含这2个号码，包含即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：1，2 开奖：1x2xx（不限顺序）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==60">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中至少选择3个号码投注，竞猜开奖号码中包含这3个号码，包含即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:205px;left:-205px">-->
<!--                                                    <p>投注：1,2,3 开奖：1x2x3（顺序不限）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==61">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前四位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：3456*<br/>开奖：3456* 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 62">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前四位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：3456*<br/>开奖：3456* 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"
                                                 @getdis="getDisData"/>
                                </template>
                                <template v-if="navsw == 63">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：456**<br/>开奖：456** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==64">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：456**<br/>开奖：456** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue v-if="navsw==64" ref="drag" :gameid="navsw" @getdata="OptionGdata"
                                                 @getdis="getDisData"/>
                                </template>
                                <template v-if="navsw == 65">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中选择3个数字组成三注，所选号码与开奖号码的前三位相同，顺序不限，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：112** 开奖：112**（顺序不限）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             @getdis="getDisData"/>
                                </template>
                                <template v-if="navsw == 66">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中任意选择3个号码组成六注，所选号码与开奖号码的前三位相同，顺序不限，即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div>-->
<!--                                                    <p>投注：123** 开奖：123**（不限顺序）即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             @getdis="getDisData"/>
                                </template>
                                <template v-if="navsw == 67">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>手动输入号码，3个数字为一注，所选号码与开奖号码的前三位相同，顺序不限即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:330px;left:-335px">-->
<!--                                                    <p>投注：456** 开奖：456** 即中组六(不限顺序)<br/>投注：445** 开奖：454/445/544** 即中组三-->
<!--                                                    </p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"
                                                 @getdis="getDisData"/>
                                </template>
                                <template v-if="navsw == 68">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:330px;left:-335px">-->
<!--                                                    <p>投注：45*** <br/>开奖：45*** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 69">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:330px;left:-335px">-->
<!--                                                    <p>投注：45*** <br/>开奖：45*** 即中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue v-if="navsw==69" ref="drag" :gameid="navsw" @getdata="OptionGdata"
                                                 @getdis="getDisData"/>
                                </template>
                                <!-- 龙虎斗 -->
                                <template v-if="navsw==70">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从龙、虎、和中任意选择1个号码形态组成一注，只要开奖号码的万位大于千位，则为龙；万位小于千位，则为虎；相同号码则为和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注方案：龙<br/>开奖号码：61051，开奖号码的万位大于千位，即中龙</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <dragon :gameary="DorSomeAry" @setdata="setGdata" ref="drag" @setbet="setBetNum"
                                            :gameid="navsw"/>
                                </template>
                                <template v-if="navsw==71">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从龙、虎、和中任意选择1个号码形态组成一注，只要开奖号码的万位大于百位，则为龙；万位小于百位，则为虎；相同号码则为和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注方案：龙<br/>开奖号码：61051，开奖号码的万位大于百位，即中龙</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <dragon :gameary="DorSomeAry" @setdata="setGdata" ref="drag" @setbet="setBetNum"
                                            :gameid="navsw"/>
                                </template>
                                <template v-if="navsw==72">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从龙、虎、和中任意选择1个号码形态组成一注，只要开奖号码的万位大于十位，则为龙；万位小于十位，则为虎；相同号码则为和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注方案：龙<br/>开奖号码：61051，开奖号码的万位大于十位，即中龙</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <dragon :gameary="DorSomeAry" @setdata="setGdata" ref="drag" @setbet="setBetNum"
                                            :gameid="navsw"/>
                                </template>
                                <template v-if="navsw==73">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从龙、虎、和中任意选择1个号码形态组成一注，只要开奖号码的万位大于个位，则为龙；万位小于个位，则为虎；相同号码则为和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注方案：龙<br/>开奖号码：61051，开奖号码的万位大于个位，即中龙</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <dragon :gameary="DorSomeAry" @setdata="setGdata" ref="drag" @setbet="setBetNum"
                                            :gameid="navsw"/>
                                </template>
                                <template v-if="navsw==74">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从龙、虎、和中任意选择1个号码形态组成一注，只要开奖号码的千位大于百位，则为龙；千位小于百位，则为虎；相同号码则为和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注方案：龙<br/>开奖号码：61051，开奖号码的千位大于百位，即中龙</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <dragon :gameary="DorSomeAry" @setdata="setGdata" ref="drag" @setbet="setBetNum"
                                            :gameid="navsw"/>
                                </template>
                                <template v-if="navsw==75">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从龙、虎、和中任意选择1个号码形态组成一注，只要开奖号码的千位大于十位，则为龙；千位小于十位，则为虎；相同号码则为和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注方案：龙<br/>开奖号码：68051，开奖号码的千位大于十位，即中龙</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <dragon :gameary="DorSomeAry" @setdata="setGdata" ref="drag" @setbet="setBetNum"
                                            :gameid="navsw"/>
                                </template>
                                <template v-if="navsw==77">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从龙、虎、和中任意选择1个号码形态组成一注，只要开奖号码的千位大于个位，则为龙；千位小于个位，则为虎；相同号码则为和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注方案：龙<br/>开奖号码：61051，开奖号码的千位大于个位，即中龙</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <dragon :gameary="DorSomeAry" @setdata="setGdata" ref="drag" @setbet="setBetNum"
                                            :gameid="navsw"/>
                                </template>
                                <template v-if="navsw==78">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从龙、虎、和中任意选择1个号码形态组成一注，只要开奖号码的百位大于十位，则为龙；百位小于十位，则为虎；相同号码则为和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注方案：龙<br/>开奖号码：61851，开奖号码的百位大于十位，即中龙</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <dragon :gameary="DorSomeAry" @setdata="setGdata" ref="drag" @setbet="setBetNum"
                                            :gameid="navsw"/>
                                </template>
                                <template v-if="navsw==79">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从龙、虎、和中任意选择1个号码形态组成一注，只要开奖号码的百位大于个位，则为龙；百位小于个位，则为虎；相同号码则为和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注方案：龙<br/>开奖号码：61851，开奖号码的百位大于个位，即中龙</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <dragon :gameary="DorSomeAry" @setdata="setGdata" ref="drag" @setbet="setBetNum"
                                            :gameid="navsw"/>
                                </template>
                                <template v-if="navsw==80">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从龙、虎、和中任意选择1个号码形态组成一注，只要开奖号码的十位大于个位，则为龙；十位小于个位，则为虎；相同号码则为和</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:380px;left:-385px;">-->
<!--                                                    <p>投注方案：龙<br/>开奖号码：61051，开奖号码的十位大于个位，即中龙</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <dragon :gameary="DorSomeAry" @setdata="setGdata" ref="drag" @setbet="setBetNum"
                                            :gameid="navsw"/>
                                </template>
                                <!-- 11选5 -->
                                <!-- 三码 -->
                                <template v-if="navsw==94">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:310px;left:-315px;">-->
<!--                                                    <p>如：选择01，02，03，<br/>开奖号码顺序为01，02，03 * *，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==95">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:310px;left:-315px;">-->
<!--                                                    <p>如：选择01，02，03，<br/>开奖号码顺序为01，02，03 * *，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue v-if="navsw==95" ref="drag" :gameid="navsw"
                                                 @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==96">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:770px;left:-770px;">-->
<!--                                                    <p>如：选择01 02 03（展开为01 02 03 * *，01 03 02 * *，02 01 03 * *，02 03 01 *-->
<!--                                                        *，03 01 02 * *，03 02 01 *-->
<!--                                                        *）<br/>开奖号码为03 01 02，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==97">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:770px;left:-770px;">-->
<!--                                                    <p>如：选择01 02 03（展开为01 02 03 * *，01 03 02 * *，02 01 03 * *，02 03 01 *-->
<!--                                                        *，03 01 02 * *，03 02 01 *-->
<!--                                                        *）<br/>开奖号码为03 01 02，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue v-if="navsw==97" ref="drag" :gameid="navsw"
                                                 @getdata="OptionGdata"/>
                                </template>
                                <!-- 二码 -->
                                <template v-if="navsw==98">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:240px;left:-245px;">-->
<!--                                                    <p>如：选择01 02，<br/>开奖号码 01 02 * * *，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==99">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:240px;left:-245px;">-->
<!--                                                    <p>如：选择01 02，<br/>开奖号码 01 02 * * *，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue v-if="navsw==99" ref="drag" :gameid="navsw"
                                                 @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==100">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:340px;left:-340px;">-->
<!--                                                    <p>如：选择01 02（展开为01 02 * * *，02 01 * * *）<br/>开奖号码为02 01 * * * 或 01-->
<!--                                                        02 * * *，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==101">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:340px;left:-340px;">-->
<!--                                                    <p>如：选择01 02（展开为01 02 * * *，02 01 * * *）<br/>开奖号码为02 01 * * * 或 01-->
<!--                                                        02 * * *，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue v-if="navsw==101" ref="drag" :gameid="navsw"
                                                 @getdata="OptionGdata"/>
                                </template>
                                <!-- 不定位胆 -->
                                <template v-if="navsw==102">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中共11个号码中选择1个号码，每注由1个号码组成，只要当期顺序摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:240px;left:-240px;">-->
<!--                                                    <p>投注号码：01<br/>开奖号码：01xxxx，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <!-- 定位胆 -->
                                <template v-if="navsw==103">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从第一位，第二位，第三位，任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:250px;left:-250px;">-->
<!--                                                    <p>如：第一位上选择01，<br/>开奖号码为01 * * * *，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <!-- 任选复式 -->
                                <template v-if="navsw==104">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05<br/>开奖号码为08 04 11 05 03，即为中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==106">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 04<br/>开奖号码为08 04 11 05 03，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==107">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 04 11，<br/>开奖号码为08 04 11 05 03，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==109">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 04 08 03，<br/>开奖号码为08 04 11 05 03，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==111">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 04 08 03 11，<br/>开奖号码为08 04 11 05 03，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==113">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 10 04 11 03 08，<br/>开奖号码为08 04 11 05 03，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==115">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 04 10 11 03 08 09，<br/>开奖号码为08 04 11 05 03，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw==117">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 04 11 03 08 10 09 01，<br/>开奖号码为08 04 11 05 03，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <!-- 任选单式 -->
                                <template v-if="navsw==105">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中手动输入1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05，<br/>开奖号码为08 04 11 05 03，即为中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==108">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中手动输入3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 08 04，<br/>开奖号码为08 04 11 05 03，即为中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==110">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中手动输入4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 08 04 11，<br/>开奖号码为08 04 11 05 03，即为中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==112">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中手动输入5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 08 04 11 03，<br/>开奖号码为08 04 11 05 03，即为中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==114">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中手动输入6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 08 04 11 03 02，<br/>开奖号码为08 04 11 05 03，即为中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==116">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中手动输入7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 08 04 11 03 02 07，<br/>开奖号码为08 04 11 05 03，即为中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==118">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中手动输入8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 04 11 03 08 10 09 01，<br/>开奖号码为08 04 11 05 03，即为中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw==182">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从01-11中手动输入8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>如：选择05 04 11 03 08 10 09 01，<br/>开奖号码为08 04 11 05 03，即为中奖</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <!-- 福彩3D -->
                                <template v-if="navsw == 168">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从百位、十位、个位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:240px;left:-240px;">-->
<!--                                                    <p>如：选择123，<br/>开奖号码为是123，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 169">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>手动输入一个3位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:240px;left:-240px;">-->
<!--                                                    <p>手动输入123，<br/>开奖号码为是123，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw == 170">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>所选数值等于开奖号码的三个数字相加之和，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:540px;left:-540px;">-->
<!--                                                    <p>如：选择6，<br/>开奖号码为123、141、114、006、060等任意一个和值为6的结果，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCount @setdata="setGdata" @setbet="setBetNum" ref="drag"
                                               v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 171">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中任意选择2个数字组成两注，所选号码与开奖号码相同，顺序不限，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:440px;left:-440px;">-->
<!--                                                    <p>如：选择12（展开为122，212，221 和 112、121、211），<br/>开奖号码为212 或 121，即为中奖。-->
<!--                                                    </p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 172">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中任意选择3个号码组成一注，所选号码与开奖号码相同，顺序不限，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:440px;left:-440px;">-->
<!--                                                    <p>如：选择123（展开为123，132，231，213，312，321），<br/>开奖号码为321，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 173">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>手动输入购买号码，3个数字为一注，开奖号码符合组三或组六均为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:410px;left:-410px;">-->
<!--                                                    <p>如：选择123、455，<br/>开奖号码为321即中组六奖，开奖号码为545即中组三奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw == 174">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从万位、千位中选择一个2位数号码组成一注，所选号码与开奖号码的前2位相同，且顺序一致，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:340px;left:-340px;">-->
<!--                                                    <p>投注：456** 开奖：456** 即中组六(不限顺序)<br/>投注：445** 开奖：454/445/544** 即中组三-->
<!--                                                    </p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 175">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:320px;left:-320px;">-->
<!--                                                    <p>投注方案：58；<br/>开奖号码前二位：58，即中前二直选单式。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw == 176">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限（不含对子号），即中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:480px;left:-480px;">-->
<!--                                                    <p>投注方案：5,8；<br/>开奖号码前二位：85 或58(顺序不限，不含对子号)，即中前二组选复式</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 177">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的后2位相同，且顺序一致，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:280px;left:-280px;">-->
<!--                                                    <p>投注方案：5；<br/>开奖号码后二位：58，即中后二直选。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 178">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:350px;left:-350px;">-->
<!--                                                    <p>投注方案：58；<br/>开奖号码后二位：58，即中后二直选单式。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <optionvalue ref="drag" :gameid="navsw" @getdata="OptionGdata"/>
                                </template>
                                <template v-if="navsw == 179">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:490px;left:-490px;">-->
<!--                                                    <p>投注方案：5,8；<br/>开奖号码后二位：85 或58(顺序不限，不含对子号)，即中后二组选复式</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 180">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从百位、十位、个位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:240px;left:-240px;">-->
<!--                                                    <p>如：定百位为3，<br/>开奖号码为3**，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                                <template v-if="navsw == 181">
<!--                                    <div class="demo_case">-->
<!--                                        <p><span class="iconfont icon-dengpao"/>从0-9中选择1个号码，每注由1个号码组成，只要开奖结果中包含所选号码，即为中奖。</p>-->
<!--                                        <div>-->
<!--                                            <div>-->
<!--                                                示例-->
<!--                                                <div style="width:240px;left:-240px;">-->
<!--                                                    <p>如：选择一码不定位4，<br/>开出4**、*4*、**4，即为中奖。</p>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <gameCom class="select_num_div" ref="drag" @setdata="setGdata" :gameary="gameAry"
                                             :gameid="navsw"
                                             @setbet="setBetNum"
                                             v-if="GameState"/>
                                </template>
                            </template>
                            <!-- 用户投注 -->
                            <userpay ref="userPay" :mult="gameMultiplying" @bonus="Bonusadjust" :betnum="BetNum" :betmoney="BetMoney"
                                     @typeset="TypeSet"
                                     @gamemultiply="selectGameMultiply" :userselect="userSelect" @openmess="openMessAge"
                                     :mounttype="mountType" @dirbet="DisAjax" :balance="userBalace"
                                     @allin="AllIN"/>
                            <betting :time="countDown" @settrack="setTrack" :betary="betAry" :gameindex="GameIndex"
                                     @addnum="addNum" @emptynum="EmptyNum"
                                     @deletenum="deleteNum" @direct="aryDisAjax" :ids="navsw"/>
                        </div>
                        <div class="content_box_right">
                            <history :style-id="styleNum" :historyData="allLotterydata"/>
                        </div>
                    </div>


                    <!-- 表格 -->
                    <tablelist :tablist="tableList" @setinfo="infoData" :tracklist="trackList"
                               :indexs="GameIndex"/>
                    <!-- 倒计时结束后显示 -->
                    <openResult v-if="openFrame" :redata="openDataRe" @hidere="hideOpenRe"/>
                    <!-- 提示框 -->
                    <div class="game_message_box">
                        <el-button :plain="true" @click="openMessAge"/>
                    </div>
                    <!-- 未选择投注号码提示弹框 -->
                    <betElast v-if="betMinA" @bethide=" betMinAHide"/>
                    <!-- 追号详情 -->
                    <zhDetali :zhdata="zhList" ref="dragZhDetali" @list="ListAjax" @getinfo="getUserInfo"/>
                    <!-- 投注成功 -->
                    <betSuccess v-if="betSuccess" @bethide="hideBetSuc"/>
                    <!-- 详情弹框 -->
                    <detali :getinfo="infoList" ref="dragDetali" @list="ListAjax" @getinfo="getUserInfo"/>
                    <!-- 追号投注弹框 -->
                    <trackNum v-if="trackState" @hidetrack="hideTrack" :ary="betAry" @clearbet="clearBetAry"
                              @list="ListAjax(true)"
                              @getinfo="getUserInfo"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  //系统设置
  import {SysKey} from "../../util/sysconfig"
  // 倒计时结束后显示
  import openResult from "../Elasticframe/Number_change"
  // 追号投注
  import trackNum from "../Elasticframe/Track_num"
  // 引用axios封装文件
  import {postAjax, getAjax} from "../../util/ajax.js"
  // 投注记录组件
  import betting from "../Subcomponents/Betting"
  // 表格组件
  import tablelist from "../Subcomponents/Tablelist"
  // 用户投注组件
  import userpay from "../Subcomponents/user_pay"
  // 选号组件
  import gameCom from "../Subcomponents/game_content"
  // 和值
  import gameCount from "../Subcomponents/game_Count"
  // 用户自选号
  import optionvalue from "../Subcomponents/Optionalvalue"
  // 龙虎斗
  import dragon from "../Subcomponents/Dragon_Tiger"
  // 悬浮组件
  import flextab from "../Subcomponents/flex_tab"
  // 投注提示弹框
  import betElast from "../Elasticframe/Betting_minone"
  // 投注成功
  import betSuccess from "../Elasticframe/Betting_success"
  // 详情弹框
  import detali from "../Elasticframe/infodetails"
  // 秒数转化
  import {SecondToHHSSMM} from "../../static/js/changeTime.js"
  // 追号详情
  import zhDetali from "../Elasticframe/zhdetails"
  //开奖历史
  import history from "../conmon/history";
  //倒计时组件
  import countDown from "../conmon/countDown";
  //开奖号码
  import openNumber from "../conmon/openNumber";
  //提示信息
  import sscJson from "../../json/ssc"
  var selectNavSwich = 0
  export default {
    // 刷新页面
    inject: ["reload"],
    data() {
      var gameId = parseInt(this.$route.query.id)
      if (gameId == 2 || gameId == 44) {
        selectNavSwich = 2
      } else if (gameId == 27 || gameId == 28 || gameId == 29) {//福彩3D 排列三 上海时时乐
        selectNavSwich = 0
      } else {
        selectNavSwich = 4
      }
      return {
        timeNum: 0, //请求次数
        GameState: true, //组件状态
        openDataRe: {}, //开奖弹框数据
        openFrame: false, //倒计时结束弹框
        trackState: false, //追号投注页面
        userBalace: 0, //用户余额
        imgUrl: SysKey("ImgServerUrl").SysValue, //图片地址
        logoImgUrl: '',//彩票图标
        tableList: [], //传入表单子组件
        trackList: [], //出入表单子组件
        betSuccess: false, // 是否投注成功
        betMinA: false, //弹框是否显示
        choicenum: true, //五期一期切换显示
        NavSwich: selectNavSwich,  //导航栏选中
        GameIds: parseInt(this.$route.query.id), //游戏ID
        GameIndex: this.$route.query.index.toString(),  //游戏种类
        NowLssue: "", //当前期号
        dirNowLssue: "",//当前期号格式
        LastLssue: "", //近一期
        openTime: "",//开奖期数
        LastNum: {}, //近一期开奖号码
        animationState: true,//动画状态
        openGifClass: "icon",//开奖动画样式 默认是正常没有动画
        NowTime: 0, //投注倒计时
        countDown: {}, //投注倒计时
        navAllList: [], //返回所有玩法数组
        navList: [], //导航栏渲染内容
        allLotterydata: [],//全部开奖数据
        navsw: 25, //次级导航
        selectGName: "",//龙虎和选中的内容
        gameName: "", //玩法名称
        gameMultiplying: 1, //游戏倍率
        mountType: [], //模式
        mountTypeName: "2元", //模式名称
        mountTypeId: 1, //模式ID
        mountNum: 2, //初始金额
        Bonusrate: "",
        gameOdds: "", //玩法赔率
        gamePoint: "", //游戏返点
        CurrentPoint: 0, //当前返点
        BetNum: 0, //投注数量
        BetMoney: 0, //投注金额
        betary: [], //传入投注卡组件的内容
        betDis: [],// 投注位数
        styleNum:4,//历史记录样式//0五星1四星2前三3中三4后三5二星0定位胆0不定位0任四任三任二
        DorSomeAry: [
          {name: "龙", odds: "", state: "false", selectNav: 'loong_icon', unselectNav: 'unlong_icon'},
          {name: "虎", odds: "", state: "false", selectNav: 'tiger_icon', unselectNav: 'untiger_icon'},
          {name: "和", odds: "", state: "false", selectNav: 'and_icon', unselectNav: 'unand_icon'}], //传入龙虎斗组件内容
        // 传入子组件玩法赔率数组
        userSelect: ["1920.000-0.00%", "1900.000-1.00%"],
        // 传入玩法子组件的数据
        gameAry: [
          {
            ids: 1,
            digit: '万位',
            num: [{value: "1", state: false}, {value: "2", state: false}, {value: "3", state: false}, {
              value: "4",
              state: false
            }, {value: "5", state: false}, {value: "6", state: false}, {value: "7", state: false}, {
              value: "8",
              state: false
            }, {value: "9", state: false}, {value: "0", state: false}]
          },
          {
            ids: 2,
            digit: '千位',
            num: [{value: "1", state: false}, {value: "2", state: false}, {value: "3", state: false}, {
              value: "4",
              state: false
            }, {value: "5", state: false}, {value: "6", state: false}, {value: "7", state: false}, {
              value: "8",
              state: false
            }, {value: "9", state: false}, {value: "0", state: false}]
          },
          {
            ids: 3,
            digit: '百位',
            num: [{value: "1", state: false}, {value: "2", state: false}, {value: "3", state: false}, {
              value: "4",
              state: false
            }, {value: "5", state: false}, {value: "6", state: false}, {value: "7", state: false}, {
              value: "8",
              state: false
            }, {value: "9", state: false}, {value: "0", state: false}]
          },
          {
            ids: 4,
            digit: '十位',
            num: [{value: "1", state: false}, {value: "2", state: false}, {value: "3", state: false}, {
              value: "4",
              state: false
            }, {value: "5", state: false}, {value: "6", state: false}, {value: "7", state: false}, {
              value: "8",
              state: false
            }, {value: "9", state: false}, {value: "0", state: false}]
          },
          {
            ids: 5,
            digit: '个位',
            num: [{value: "1", state: false}, {value: "2", state: false}, {value: "3", state: false}, {
              value: "4",
              state: false
            }, {value: "5", state: false}, {value: "6", state: false}, {value: "7", state: false}, {
              value: "8",
              state: false
            }, {value: "9", state: false}, {value: "0", state: false}]
          },

        ],
        //  子组件选择投注数组完成后，结果传入父组件
        userSelectAry: [],
        // 传入投注卡子组件数据
        betAry: [],
        infoList: {}, //接受子组件的值
        zhList: [], //追号详情信息
        timer: null, //设置定时器
        selectTwoNav: 0,//当前选中的二级导航栏
        exampleObj:sscJson
      }
    },
    methods: {
      //当前选中的二级导航栏
      selectTwoNavFun(e) {
        this.selectTwoNav = e.target.dataset.id;
      },
      getGameIcon() {
        this.navAry.forEach(item => {
          item.LotteryList.forEach(e => {
            if (e.LgId == this.GameIds) {
              this.logoImgUrl = ''
              this.logoImgUrl = this.imgUrl + e.WebIco
            }
          })
        })
      },
      //显示追号弹框
      setTrack() {
        let that = this
        if (that.betAry.length < 1) {
          that.betMinAShow()
        } else {
          if (that.betAry.length > 1) {
            that.openMessAge("追号投注,订单列表不能大于1项")
          } else {
            that.trackState = true
          }
        }
      },
      // 关闭追号弹框
      hideTrack() {
        this.trackState = false
      },
      // 追号投注后清除数组
      clearBetAry() {
        this.betAry = []
      },
      // 接受投注位数的值
      getDisData(data) {
        this.betDis = data
      },
      //计算投注数量
      setBetNum(data, value) {
        let that = this
        this.BetNum = 0
        if (value == undefined || value == null || value == "") {
        } else {
          this.betDis = value
        }
        this.BetNum = data
        this.CalcMount(data)
      },
      // 接受子组件的值
      infoData(data, num) {
        let that = this
        let index = num  //1为普通订单，2位追号订单
        let obj = data
        let ptid = data.OrderNumber  //普通订单号
        let zhid = data.ZhNumber     //追号订单号
        //获取普通投注数据
        if (index == 1) {
          let url = "Api/Order/GetDetailByOrderNumber?" + "number=" + ptid + "&type=" + index
          postAjax(url)
            .then(function (data) {
              if (data.IsSucess) {
                that.infoList = data.Data[0]
              } else {
                that.openMessAge("获取信息错误，请重试")
                return false
              }
            })
            .then(function () {
              that.$refs.dragDetali.dialogTableVisible = true
            })
            .catch(() => {
              that.openMessAge("网路异常，请刷新后重试")
            })
        }
        //追号记录 详情
        else if (index == 2) {
          let url = "Api/Order/GetDetailByOrderNumber?" + "number=" + zhid + "&type=" + index
          postAjax(url)
            .then(function (data) {
              if (data.IsSucess) {
                that.zhList = data.Data
                let allmoney = 0 //总金额
                let ykmoney = 0  //盈亏金额
                //计算总金额
                data.Data.forEach(item => {
                  allmoney += item.BetMoney
                  ykmoney += item.WinBonus - item.BetMoney
                })
                //添加到第一个数组
                data.Data[0]["allMoney"] = allmoney
                data.Data[0]["ykMoney"] = ykmoney
              } else {
                that.openMessAge("获取信息错误，请重试")
                return false
              }
            })
            .then(function () {
              that.$refs.dragZhDetali.dialogVisible = true
            })
            .catch(() => {
              that.openMessAge("网路异常，请刷新后重试")
            })
        }
      },
      // 输入返回数组
      OptionGdata(data) {
        let that = this
        this.selectGName = data
        let len = that.betDis.length
        if (that.navsw == 62) {
          if (len == 4) {
            that.BetNum = parseInt(this.selectGName.length) * 1
          } else if (len == 5) {
            that.BetNum = parseInt(this.selectGName.length) * 5
          } else {
            that.BetNum = parseInt(this.selectGName.length) * 0
          }
        } else if (that.navsw == 64 || that.navsw == 67) {
          if (len == 3) {
            that.BetNum = parseInt(this.selectGName.length) * 1
          } else if (len == 4) {
            that.BetNum = parseInt(this.selectGName.length) * 4
          } else if (len == 5) {
            that.BetNum = parseInt(this.selectGName.length) * 10
          } else {
            that.BetNum = parseInt(this.selectGName.length) * 0
          }
        } else if (that.navsw == 69) {
          if (len == 2) {
            that.BetNum = parseInt(this.selectGName.length) * 1
          } else if (len == 3) {
            that.BetNum = parseInt(this.selectGName.length) * 3
          } else if (len == 4) {
            that.BetNum = parseInt(this.selectGName.length) * 6
          } else if (len == 5) {
            that.BetNum = parseInt(this.selectGName.length) * 10
          } else {
            that.BetNum = parseInt(this.selectGName.length) * 0
          }
        } else {
          this.BetNum = data.length;
        }
        this.CalcMount()
      },
      // 投注后返回的数据
      setGdata(data) {
        this.selectGName = data
      },
      // 设置获取赔率数据
      setDorOdds() {
        let that = this;
        let ids = that.navsw;
        let list = that.navList;
        list.forEach(item => {
          if (ids == item.LpId) {
            that.gameOdds = item.JjList[that.CurrentPoint].Jj
            that.gamePoint = item.JjList[that.CurrentPoint].Rebate
          }
        })
        that.DorSomeAry.forEach(item => {
          if (item.name == "龙" || item.name == "虎") {
            item.odds = parseFloat(that.gameOdds / 4.5).toFixed(3)
          } else {
            item.odds = parseFloat(that.gameOdds).toFixed(1)
          }
        })
      },
      // 显示提示框
      openMessAge(data) {
        this.$message.error(data);
      },
      // 选择游戏倍率
      selectGameMultiply(data) {
        this.gameMultiplying = data
        this.CalcMount()
      },
      //设置玩法赔率数组
      setUserSelect() {
        let that = this;
        let ids = that.navsw;
        that.navList.forEach(item => {
          if (ids == item.LpId) {
            let ary = item.JjList
            let setAry = []
            for (let i = 0; i < ary.length; i++) {
              let str = [ary[i].Jj.toFixed(3), ary[i].Rebate.toFixed(2)].join("-")
              setAry.push(str)
            }
            that.userSelect = setAry
          }
        })
      },
      //计算投注金额
      CalcMount(data) {
        let that = this
        if (data == undefined || data == null || data == "") {
          that.BetNum = that.BetNum //当前投注数量
        } else {
          that.BetNum = data
        }
        let type = that.mountType; //模式
        let name = that.mountTypeName;
        let num = that.gameMultiplying

        type.forEach(item => {
          if (item.Name == name) {
            that.BetMoney = parseInt(that.BetNum) * parseInt(num) * parseFloat(item.Rate)
          }
        })
      },
      // 设置玩法模式
      TypeSet(data) {
        let that = this
        that.mountTypeName = data
        that.mountType.forEach(item => {
          if (item.Name == that.mountTypeName) {
            that.mountTypeId = item.Id
            that.mountNum = item.Rate
          }
        })
        that.CalcMount()

      },
      //设置选号玩法数组
      setGameAry() {
        let that = this
        that.gameAry = []
        // 五星直选
        if (that.navsw == 1 || that.navsw == 52 || that.navsw == 61 || that.navsw == 63 || that.navsw == 68) {
          that.gameAry = [
            {
              ids: 1,
              digit: '万位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '千位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 3,
              digit: '百位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 4,
              digit: '十位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 5,
              digit: '个位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
          ]
        }
        //五星组选120
        else if (that.navsw == 3) {
          that.gameAry = [{
            ids: 1,
            digit: '组选120',
            num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
              value: "3",
              state: false
            }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
              value: "7",
              state: false
            }, {value: "8", state: false}, {value: "9", state: false}]
          }]
        }
        //五星组选60 30
        else if (that.navsw == 4 || that.navsw == 5 || that.navsw == 16 || that.navsw == 22) {
          that.gameAry = [
            {
              ids: 1,
              digit: '二重号',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '单号',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        //五星组选20
        else if (that.navsw == 6 || that.navsw == 18 || that.navsw == 24) {
          that.gameAry = [
            {
              ids: 1,
              digit: '三重号',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '单号',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        //五星组选10
        else if (that.navsw == 7) {
          that.gameAry = [
            {
              ids: 1,
              digit: '三重号',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '二重号',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        //五星组选5
        else if (that.navsw == 8) {
          that.gameAry = [
            {
              ids: 1,
              digit: '四重号',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '单号',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        //趣味玩法
        else if (that.navsw == 9) {
          that.gameAry = [
            {
              ids: 1,
              digit: '一帆风顺',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        } else if (that.navsw == 10) {
          that.gameAry = [
            {
              ids: 1,
              digit: '好事成双',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        } else if (that.navsw == 11) {
          that.gameAry = [
            {
              ids: 1,
              digit: '三星报喜',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        } else if (that.navsw == 12) {
          that.gameAry = [
            {
              ids: 1,
              digit: '四季发财',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        // 四星前四直选
        else if (that.navsw == 13) {
          that.gameAry = [
            {
              ids: 1,
              digit: '万位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '千位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 3,
              digit: '百位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 4,
              digit: '十位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },

          ]
        }
        // 四星组选24
        else if (that.navsw == 15 || that.navsw == 21) {
          that.gameAry = [
            {
              ids: 1,
              digit: '组选24',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        // 四星组选6
        else if (that.navsw == 17 || that.navsw == 23) {
          that.gameAry = [
            {
              ids: 1,
              digit: '组选6',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        // 四星后四直选
        else if (that.navsw == 19) {
          that.gameAry = [
            {
              ids: 1,
              digit: '千位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '百位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 3,
              digit: '十位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 4,
              digit: '个位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
          ]
        }
        // 前三直选
        else if (that.navsw == 25) {
          that.gameAry = [
            {
              ids: 1,
              digit: '万位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '千位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 3,
              digit: '百位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
          ]
        }
        // 直选和值
        else if (that.navsw == 27) {
        }
        // 直选跨度
        else if (that.navsw == 28 || that.navsw == 35 || that.navsw == 42) {
          that.gameAry = [
            {
              ids: 1,
              digit: '跨度',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        // 前三组三复式
        else if (that.navsw == 29 || that.navsw == 36 || that.navsw == 43 || that.navsw == 65 || that.navsw == 171) {
          that.gameAry = [
            {
              ids: 1,
              digit: '组三',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        // 前三组六复式
        else if (that.navsw == 30 || that.navsw == 37 || that.navsw == 44 || that.navsw == 66 || that.navsw == 172) {
          that.gameAry = [
            {
              ids: 1,
              digit: '组六',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        // 中三直选
        else if (that.navsw == 32) {
          that.gameAry = [
            {
              ids: 1,
              digit: '千位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '百位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 3,
              digit: '十位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
          ]
        }
        //后三直选
        else if (that.navsw == 39 || that.navsw == 168 || that.navsw == 180) {
          that.gameAry = [
            {
              ids: 1,
              digit: '百位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '十位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 3,
              digit: '个位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
          ]
        }
        //二星前二
        else if (that.navsw == 46 || that.navsw == 174) {
          that.gameAry = [
            {
              ids: 1,
              digit: '万位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '千位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
          ]
        }
        // 二星组选
        else if (that.navsw == 48 || that.navsw == 51) {
          that.gameAry = [
            {
              ids: 1,
              digit: '组选',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        // 二星后二
        else if (that.navsw == 49 || that.navsw == 177) {
          that.gameAry = [
            {
              ids: 1,
              digit: '十位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
            {
              ids: 2,
              digit: '个位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            },
          ]
        }
        // 不定位
        else if (that.navsw == 53 || that.navsw == 54 || that.navsw == 55 || that.navsw == 56 || that.navsw == 57 || that.navsw == 58 || that.navsw == 59 || that.navsw == 60 || that.navsw == 181) {
          that.gameAry = [
            {
              ids: 1,
              digit: '不定位',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
        // 11选5
        //三码直选复式
        else if (that.navsw == 94 || that.navsw == 103) {
          that.gameAry = [
            {
              ids: 1,
              digit: '第一位',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            },
            {
              ids: 2,
              digit: '第二位',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            },
            {
              ids: 3,
              digit: '第三位',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            },
          ]
        }
        // 三码组选
        else if (that.navsw == 96 || that.navsw == 100) {
          that.gameAry = [
            {
              ids: 1,
              digit: '组选',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            }
          ]
        }
        //二码直选
        else if (that.navsw == 98) {
          that.gameAry = [
            {
              ids: 1,
              digit: '第一位',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            },
            {
              ids: 2,
              digit: '第二位',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            },
          ]
        }
        // 不定位胆
        else if (that.navsw == 102) {
          that.gameAry = [
            {
              ids: 1,
              digit: '不定位',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            }
          ]
        }
        // 任选复式
        else if (that.navsw == 104) {
          that.gameAry = [
            {
              ids: 1,
              digit: '一中一',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            }
          ]
        } else if (that.navsw == 106) {
          that.gameAry = [
            {
              ids: 1,
              digit: '二中二',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            }
          ]
        } else if (that.navsw == 107) {
          that.gameAry = [
            {
              ids: 1,
              digit: '三中三',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            }
          ]
        } else if (that.navsw == 109) {
          that.gameAry = [
            {
              ids: 1,
              digit: '四中四',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            }
          ]
        } else if (that.navsw == 111) {
          that.gameAry = [
            {
              ids: 1,
              digit: '五中五',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            }
          ]
        } else if (that.navsw == 113) {
          that.gameAry = [
            {
              ids: 1,
              digit: '六中五',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            }
          ]
        } else if (that.navsw == 115) {
          that.gameAry = [
            {
              ids: 1,
              digit: '七中五',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            }
          ]
        } else if (that.navsw == 117) {
          that.gameAry = [
            {
              ids: 1,
              digit: '八中五',
              num: [{value: "01", state: false}, {value: "02", state: false}, {
                value: "03",
                state: false
              }, {
                value: "04",
                state: false
              }, {value: "05", state: false}, {value: "06", state: false}, {value: "07", state: false}, {
                value: "08",
                state: false
              }, {value: "09", state: false}, {value: "10", state: false}, {value: "11", state: false}]
            }
          ]
        }
        // 福彩3D
        else if (that.navsw == 176 || that.navsw == 179) {
          that.gameAry = [
            {
              ids: 1,
              digit: '组二',
              num: [{value: "0", state: false}, {value: "1", state: false}, {value: "2", state: false}, {
                value: "3",
                state: false
              }, {value: "4", state: false}, {value: "5", state: false}, {value: "6", state: false}, {
                value: "7",
                state: false
              }, {value: "8", state: false}, {value: "9", state: false}]
            }
          ]
        }
      },
      // 选择玩法返点
      Bonusadjust(data) {
        let that = this
        if (data == "" || data == undefined) {
          that.CurrentPoint = 0
        } else {
          that.CurrentPoint = data
        }
        // 设置龙虎斗玩法
        this.setDorOdds()
      },
      // 切换显示期号数量
      choice_data() {
        this.choicenum = true
      },
      choice_data_other() {
        this.choicenum = false
      },
      //导航栏点击切换
      topNavSwitch(e) {
        let that = this
        that.selectTwoNav = 0;//重置默认选中二级菜单
        that.NavSwich = e.target.dataset.id
        this.hisStyle(e.target.dataset.id)
        that.setGameNav()
        // 清空子组件的值
        this.clearDrag()
        try {
          this.$refs.drag.selectAry = [];
          this.$refs.drag.val = ""
        } catch (e) {

        }
      },
      //历史记录样式调整
      hisStyle(num) {
        //0五星1四星2前三3中三4后三5二星0定位胆0不定位0任四任三任二
        //11前四12前二13后二14前四15后四
        let id = this.$route.query.id
        let that = this
        if (id == 2 || id == 44) {
          switch (Number(num)) {
            case 0:
              that.styleNum = 2
              break;
            case 1:
              that.styleNum = 3
              break;
            case 2:
              that.styleNum = 4
              break;
            case 3:
              that.styleNum = 8
              break;
            case 6:
              that.styleNum = 0
              break;
            case 12:
              that.styleNum = 8
              break;
            case 13:
              that.styleNum = 5
              break;
            default: that.styleNum = 0
          }
        } else {
          switch (Number(num)) {
            case 0:
              that.styleNum = 0
              break;
            case 1:
              that.styleNum = 7
              break;
            case 2:
              that.styleNum = 2
              break;
            case 3:
              that.styleNum = 3
              break;
            case 4:
              that.styleNum = 4
              break;
            case 5:
              that.styleNum =8
              break;
            case 8:
              that.styleNum = 0
              break;
            case 12:
              that.styleNum = 8
              break;
            case 13:
              that.styleNum = 5
              break;
            case 14:
              that.styleNum = 7
              break;
            case 15:
              that.styleNum = 1
              break;
            default: that.styleNum = 0
          }
        }
      },
      // 次级导航栏点击切换
      smallSwitch(e) {
        this.navsw = parseInt(e.target.dataset.id)
        this.gameName = e.target.dataset.name
        // 初始化内容
        this.clearDrag()
        try {
          this.$refs.drag.selectAry = [];
          this.$refs.drag.val = ""
        } catch (e) {

        }
      },
      // 请求玩法数据
      gameAjax() {
        let that = this
        let getPlayList = JSON.parse(window.sessionStorage.getItem("0playList" + that.GameIds))
        if (getPlayList) {
          that.navAllList = getPlayList
          that.setGameNav()
          return false
        }
        let url = "Api/Lp/GetPlayList?lpId=" + that.GameIds + "&pattern=0"
        this._initOpenLoading(false)
        getAjax(url)
          .then(function (data) {
            if (data.IsSucess) {
              that.navAllList = data.Data
              window.sessionStorage.setItem("0playList" + that.GameIds, JSON.stringify(data.Data))
              that.loading.close()
            }
          })
          .then(function () {
            that.setGameNav()
          })
          .catch(() => {
            this.loading.close()
            this.openMessAge("网络出现异常，请刷新后重试")
          })
      },
      // 设置玩法导航
      setGameNav() {
        let that = this
        that.navList = that.navAllList
        if (that.GameIndex == 1) {
          if (that.GameIds == 2 || that.GameIds == 44) {
            if (that.NavSwich == 0) {
              that.navList = that.navList.slice(24, 31)
            } else if (that.NavSwich == 1) {
              that.navList = that.navList.slice(31, 38)
            } else if (that.NavSwich == 2) {
              that.navList = that.navList.slice(38, 45)
            } else if (that.NavSwich == 3) {
              that.navList = that.navList.slice(45, 51)
            } else if (that.NavSwich == 4) {
              that.navList = that.navList.slice(51, 52)
            } else if (that.NavSwich == 5) {
              that.navList = that.navList.slice(52, 60)
            } else if (that.NavSwich == 6) {
              that.navList = that.navList.slice(69)
            }
          } else {
            if (that.NavSwich == 0) {
              // 截取数组
              that.navList = that.navList.slice(0, 12)
            } else if (that.NavSwich == 1) {
              that.navList = that.navList.slice(12, 24)
            } else if (that.NavSwich == 2) {
              that.navList = that.navList.slice(24, 31)
            } else if (that.NavSwich == 3) {
              that.navList = that.navList.slice(31, 38)
            } else if (that.NavSwich == 4) {
              that.navList = that.navList.slice(38, 45)
            } else if (that.NavSwich == 5) {
              that.navList = that.navList.slice(45, 51)
            } else if (that.NavSwich == 6) {
              that.navList = that.navList.slice(51, 52)
            } else if (that.NavSwich == 7) {
              that.navList = that.navList.slice(52, 60)
            } else if (that.NavSwich == 8) {
              that.navList = that.navList.slice(69)
            } else if (that.NavSwich == 9) {
              that.navList = that.navList.slice(60, 62)
            } else if (that.NavSwich == 10) {
              that.navList = that.navList.slice(62, 67)
            } else if (that.NavSwich == 11) {
              that.navList = that.navList.slice(67, 69)
            }
          }
        }
        // 山东11选五
        if (that.GameIndex == 3) {
          if (that.NavSwich == 0) {
            that.navList = that.navList.slice(0, 4)
          } else if (that.NavSwich == 1) {
            that.navList = that.navList.slice(4, 8)
          } else if (that.NavSwich == 2) {
            that.navList = that.navList.slice(8, 9)
          } else if (that.NavSwich == 3) {
            that.navList = that.navList.slice(9, 10)
          } else if (that.NavSwich == 4 || that.NavSwich == 5) {
            let ary = that.navList.slice(10);
            let newAry = []
            ary.forEach(item => {
              if (that.NavSwich == 4) {
                if (item.Name.indexOf("复式") != -1) {
                  newAry.push(item)
                }
              }
              if (that.NavSwich == 5) {
                if (item.Name.indexOf("单式") != -1) {
                  newAry.push(item)
                }
              }
            })
            that.navList = newAry
          }
        }
        // 基诺彩
        else if (that.GameIndex == 6) {
          if (that.NavSwich == 0) {
            // 截取数组
            that.navList = that.navList.slice(0, 6)
          } else if (that.NavSwich == 1) {
            that.navList = that.navList.slice(6, 12)
          } else if (that.NavSwich == 2) {
            that.navList = that.navList.slice(12, 13)
          } else if (that.NavSwich == 3) {
            that.navList = that.navList.slice(13)
          }
        }
        // 设置次级导航栏状态
        that.navsw = that.navList[0].LpId
        //获取玩法名称
        that.gameName = that.navList[0].Name
        //获取模式数组
        that.navList.forEach(item => {
          if (that.navsw == item.LpId) {
            that.mountType = item.AmList
          }
        })
        // 设置玩法数组
        that.setGameAry()
        // 获取赔率
        that.setDorOdds()
        // 设置玩法倍率
        that.setUserSelect()
      },
      upTimeData(){
        if(this.NowLssue){
          this.$notify({
            title: '温馨提示',
            type: 'warning',
            showClose: false,
            message: this.NowLssue+ ' 已停止销售,请注意当前期号',
            position: 'bottom-right'
          });
        }
        this.timeAjax();
      },
      //请求投注期号
      timeAjax() {
        let that = this
        that.countDown = {
          state: false
        }
        let url = "Api/Lssue/GetBetLssueInfo"
        let data = {
          lgId: that.GameIds
        }
        let openState = true   //是否需要请求开奖
        getAjax(url, data)
        // 请求成功后赋值
          .then(function (data) {
            window.NowLssue = data.Data.NowLssueFormat
            that.NowLssue = data.Data.NowLssueFormat
            that.LastLssue = data.Data.LastLssueFormat
            that.dirNowLssue = data.Data.NowLssue
            that.openTime = data.Data.LastLssue  //开奖期号
            that.countDown = {
              time: data.Data.NowLssueRemainTime,
              state: true
            }
            that.NowTime = SecondToHHSSMM(data.Data.NowLssueRemainTime)
            if (data.Data.LastOpenNumber == null || data.Data.LastOpenNumber == "") {
              that.LastNum = {state: false, arr: ["?", "?", "?", "?", "?"]}
              openState = true //无开奖号码
              that.animationState = false;
            } else {
              that.LastNum = {state: true, arr: data.Data.LastOpenNumber.split(',')}
              openState = false //有开奖号码
            }
          })
          .then(function () {
            // 如果没有开奖号，开始执行倒计时请求开奖号码
            if (openState) {
              that.setTimer()
            }
          })
          .then(function () {
            if (that.NowTime != 0) {

            }
          })
          .catch(() => {
            that.openMessAge("网络请求出现错误，请刷新页面后重试")
          })
      },
      // 设置倒计时请求开奖号码
      setTimer() {
        let that = this
        if (this.timer == null) {
          this.timer = setInterval(() => {
            that.getResultNum()
          }, 5000)
        }
      },
      // 获取近5期投注期号
      PhaseAjax() {
        let that = this;
        let url = "Api/Lssue/GetLssueHistoryInfo"
        let data = {
          lgId: that.GameIds
        }
        getAjax(url, data)
          .then(function (data) {
            if (data.IsSucess) {
              if (data.Data != null) {
                that.allLotterydata = [...data.Data];
              }
            }
          })
      },
      //计算投注金额
      CompentMount() {
        let that = this
        that.NumBet = that.betAry.length;
        let num = 0
        that.betAry.forEach(item => {
          if (item.mount == "") {
            item.mount = 0
          }
          num += parseInt(item.mount)
        })
        that.MoneyBets = parseInt(num)
      },
      // 初始化内容
      clearDrag() {
        let that = this
        try {
          that.GameState = false
          that.GameState = true
          this.gameMultiplying = 1
          // 获取赔率
          this.setDorOdds()
          // 设置玩法下拉内容
          this.setUserSelect()
          // 初始化游戏数组
          this.stateAry()
          this.setGameAry()

          this.selectGName = ""
          // 初始化投注金额
          this.BetNum = 0
          this.BetMoney = 0
          this.betDis = []
          this.$refs.drag.selectAry = [];
          this.$refs.drag.val = ""
        } catch (e) {
        }
      },
      // 清空投注卡列表
      EmptyNum(Data) {
        let that = this
        that.betAry = Data
        // 计算投注金额
        that.CompentMount()
      },
      // 删除投注卡某一列
      deleteNum(Data) {
        let that = this
        that.betAry.splice(Data, 1)
        // 计算投注金额
        that.CompentMount()
      },
      // 显示提示框
      openMessAge(data) {
        this.$message.error(data);
      },
      // 显示弹框 隐藏弹框
      betMinAShow() {
        this.betMinA = true
      },
      betMinAHide() {
        this.betMinA = false
      },
      // 显示投注成功框
      showBetSuc() {
        this.betSuccess = true
        this.autoHideBetSuc = setTimeout(this.hideBetSuc, 2000);
      },
      hideBetSuc() {
        this.betSuccess = false
        this.autoHideBetSuc = null
      },
      //初始化话传入数组状态
      stateAry() {
        this.DorSomeAry.forEach(item => {
          item.state = "false"
        })
        this.gameAry.forEach(item => {
          item.num.forEach(e => {
            e.state = false
          })
        })
      },
      _initOpenLoading(isFlag = true) {
        this.loading = this.$loading({
          lock: true,
          text: `${isFlag ? '投注中' : '加载中'}...`,
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.4)'
        })
      },
      _initCloseLoading() {
        this.loading.close()
      },
      // 投注数据
      // 扩展一个字段，isFlag为true显示投注中,false为默认加载中
      ListAjax() {
        let that = this
        let url = "api/OrderReport/BetHistory" + "?lgid=" + that.GameIds
        postAjax(url)
          .then(function (data) {
            if (data.IsSucess) {
              that.tableList = data.Data;
            }
          })
        // 追号数据
        let url2 = "api/OrderReport/ZHHistory?lgid=" + that.GameIds
        postAjax(url2)
          .then(function (data) {
            if (data.IsSucess) {
              that.trackList = data.Data
            }
          })
      },
      //设置传入投注卡的数组
      addNum() {
        let that = this
        let obj = {};
        obj["name"] = that.gameName  //名称
        obj["GAry"] = that.selectGName //投注内容
        obj["num"] = that.BetNum   //注数
        obj["mount"] = that.BetMoney  //投注金额
        obj["type"] = that.mountTypeName //投注模式
        obj["Odds"] = that.gameOdds + "-" + that.gamePoint //奖金返点
        obj["GMult"] = that.gameMultiplying //倍率
        obj["ids"] = that.navsw  //玩法id
        obj["Gids"] = that.GameIds //玩法种类
        obj["data"] = that.dirNowLssue //当前期号
        obj["gameOdd"] = that.gameOdds //投注奖金
        obj["reba"] = that.gamePoint //返点
        obj["RxD"] = that.betDis.length > 0 ? that.betDis.join("") : null //位数
        obj["bon"] = that.mountTypeId //投注模式ID
        if (that.BetNum < 1) {
          that.betMinAShow()
        } else {
          if (that.navsw == 62) {
            if (that.betDis.length < 4) {
              that.openMessAge("位数最少选择4个")
              return false
            }
          }
          if (that.navsw == 64 || that.navsw == 67 || that.navsw == 65 || that.navsw == 66) {
            if (that.betDis.length < 3) {
              that.openMessAge("位数最少选择3个")
              return false
            }
          }
          if (that.navsw == 69) {
            if (that.betDis.length < 2) {
              that.openMessAge("位数最少选择2个")
              return false
            }
          }
          that.betAry.push(obj)
          //添加成功后初始化数据
          that.clearDrag()
          that.selectGName = []
          try {
            this.$refs.drag.selectAry = [];
            this.$refs.drag.val = ""
          } catch (e) {
          }
        }
      },
      // 数组投注
      aryDisAjax() {
        let that = this
        let zxState = true
        if (that.betAry.length < 1) {
          that.betMinAShow()
        } else {
          let url = "Api/Bet/AddClassicPatternOrder?" + "lssue=" + that.dirNowLssue + "&LgId=" + that.GameIds
          let order = []
          let ListAllMoney = 0
          that.betAry.forEach(item => {
            // 传入后端格式
            if (item.ids == 62 || item.ids == 178 || item.ids == 175 || item.ids == 173 ||
              item.ids == 169 || item.ids == 50 || item.ids == 47 || item.ids == 2 || item.ids == 14 || item.ids == 20 ||
              item.ids == 26 || item.ids == 31 || item.ids == 33 || item.ids == 38 || item.ids == 40 || item.ids == 45) {
              zxState = false
            }
            let obj = {}
            obj["BetMoney"] = item.mount
            obj["BetMultiple"] = item.GMult
            obj["LpId"] = item.ids
            obj["PlayName"] = item.name
            obj["BetContent"] = zxState ? item.GAry.join(",") : item.GAry.join(" ")
            obj["BetCount"] = item.num
            obj["BetRebate"] = item.reba
            obj["BetBonus"] = item.gameOdd
            obj["BonusMode"] = item.bon
            obj["RxDsFormart"] = item.RxD
            order.push(obj)
            ListAllMoney += item.BetMoney
          })
          // 已选择了号码，则进行loadong提示
          this.loading = this.$loading({
            lock: true,
            text: '投注中...',
            spinner: 'el-icon-loading',
            background: 'rgba(255, 255, 255, 0.4)'
          });
          postAjax(url, order, 1)
            .then((data) => {
              this.loading.close()
              if (data.IsSucess == true) {
                if (data.Data.ErrorInfos.length > 0) {
                  that.openMessAge("成功投注：" + data.Data.SuccessCount + "注，投注失敗：" + data.Data.ErrorInfos.length + "注")
                } else {
                  that.showBetSuc()
                }
                that.getUserInfo()
                // 刷新表单数据
                that.ListAjax()
              } else if (data.IsSucess == false) {
                that.openMessAge(data.Message)
              }
            })
            .then(function () {
              that.betAry = []
              that.loading.close()
              // 初始化子组件状态
              that.clearDrag()
            })
            .catch(() => {
              that.loading.close()
              that.openMessAge("网络请求出现错误，请刷新页面后重试")
            })
        }
      },
      //直接投注
      DisAjax() {
        let that = this
        let url = "Api/Bet/AddClassicPatternOrder?" + "lssue=" + that.dirNowLssue + "&LgId=" + that.GameIds
        let zxState = true
        if (that.BetNum < 1) {
          that.betMinAShow()
        } else if (that.BetMoney > that.userBalace) {
          that.openMessAge("您的可用余额不足，请重新选择")
          return
        } else {
          if (that.navsw == 67 || that.navsw == 64 || that.navsw == 62 || that.navsw == 175 || that.navsw == 178 || that.navsw == 173 || that.navsw == 169 || that.navsw == 50 || that.navsw == 47 || that.navsw == 2 || that.navsw == 14 || that.navsw == 20 || that.navsw == 26 || that.navsw == 31 || that.navsw == 33 || that.navsw == 38 || that.navsw == 40 || that.navsw == 45) {
            zxState = false
          }
          if (that.navsw == 62) {
            if (that.betDis.length < 4) {
              that.openMessAge("位数最少选择4个")
              return false
            }
          }
          if (that.navsw == 64 || that.navsw == 67 || that.navsw == 65 || that.navsw == 66) {
            if (that.betDis.length < 3) {
              that.openMessAge("位数最少选择3个")
              return false
            }
          }
          if (that.navsw == 69) {
            if (that.betDis.length < 2) {
              that.openMessAge("位数最少选择2个")
              return false
            }
          }
          let order = [{
            BetMoney: that.BetMoney,
            BetMultiple: that.gameMultiplying,
            LpId: that.navsw,
            PlayName: that.gameName,
            BetContent: zxState ? that.selectGName.join(",") : that.selectGName.join(" "),
            BetCount: that.BetNum,
            BetRebate: that.gamePoint,
            BetBonus: that.gameOdds,
            BonusMode: that.mountTypeId,
            RxDsFormart: that.betDis.length > 0 ? that.betDis.join("") : null
          }]
          this._initOpenLoading()
          postAjax(url, order, 1)
            .then((data) => {
              that._initCloseLoading()
              if (data.IsSucess == true) {
                that.showBetSuc()
                that.getUserInfo()
                // 刷新表单数据
                that.ListAjax()
              } else if (data.IsSucess === false) {
                that.openMessAge(data.Message)
              }
            })
            .then(() => {
              that._initCloseLoading()
              //  初始化数组状态
              that.stateAry()
              // 初始化子组件状态
              that.clearDrag()
            })
            .catch(() => {
              that.openMessAge("网络出现异常，请刷新后重试")
              this._initCloseLoading()
            })
        }
      },
      // 一键梭哈
      AllIN() {
        let that = this
        let userMoney = parseFloat(that.userBalace) //用户余额
        let betnum = parseInt(that.BetNum)  //投注数量
        let money = that.mountNum   //基数金钱

        if (that.BetNum < 1) {
          that.betMinAShow()
        } else if (userMoney < betnum * money) {
          that.openMessAge("您的余额不足，请充值")
        } else {
          // 当前梭哈倍数
          let num = Math.floor(userMoney / parseFloat(betnum * money)) //获取倍数
          let intMoney = parseFloat(num * money * betnum) //获取金额
          that.gameMultiplying = num
          that.BetMoney = intMoney
        }
      },
      // 请求游戏图片
      getGImg() {
        let that = this;
        let url = "Api/Lnc/Get";
        getAjax(url)
          .then(function (data) {
            data.Data.forEach(item => {
              item.LotteryList.forEach(e => {
                if (e.LgId == that.GameIds) {
                  that.imgUrl = that.imgUrl + e.WebIco
                }
              })
            });
          })
          .catch(() => {
            that.openMessAge("网络出现异常，请刷新后重试")
          })
      },
      //请求用户数据
      getUserInfo() {
        let that = this;
        let url = "Api/User/GetUserInfo";
        postAjax(url)
          .then(function (data) {
            // 提交用户信息到vuex
            that.userBalace = data.Data.Balance
            // 提交用户信息到vuex
            that.$store.commit('setUserInfo', data.Data);
          })
          .catch(() => {

          })
      },
      // 获取开奖号码
      getResultNum() {
        let that = this
        let url = "Api/Lssue/GetLssueOpenInfo?lgId=" + that.GameIds + "&lssue=" + that.openTime
        getAjax(url).then(function (data) {
          window.lgText = data.Data.lgText
          if (data.Data.OpenNumber == null || data.Data.OpenNumber == "") {

          } else {
            // 显示弹框
            that.openGifClass = "icon"
            that.LastNum = {state: true, arr: data.Data.OpenNumber.split(',')}
            that.openDataRe["LastOpenNumber"] = data.Data.OpenNumber.split(',')
            that.openDataRe["Time"] = that.LastLssue
            that.openDataRe["Name"] = data.Data.lgText
            that.openFrame = true
            // 清除倒计时
            clearInterval(that.timer)
            that.timer = null
            // 请求近5期期号数据
            that.PhaseAjax()
            // 请求表单数据
            that.ListAjax()
            // 请求用户数据
            that.getUserInfo()
          }
        }).catch(() => {
          that.openMessAge("网络请求出现错误，请刷新页面后重试")
        })
      },
      // 关闭开奖弹框
      hideOpenRe() {
        this.openFrame = false
        this.timeNum = 0
      },
      handleWinFocus() {
        this.timeAjax();
      },
      //奖金调节
      adjustMent(e) {
        let value = e.target.value
        this.Bonusadjust(value)
      },
    },
    components: {
      openResult,
      zhDetali,
      trackNum,
      betting,
      tablelist,
      userpay,
      gameCom,
      optionvalue,
      dragon,
      flextab,
      betElast,
      betSuccess,
      detali,
      gameCount,
      history,
      countDown,
      openNumber
    },
    computed: {
      navAry() {
        return this.$store.state.navAry //导航栏数据
      }
    },
    // 监听刷新页面
    watch: {
      $route() {
        this.reload();
      },
      navAry(val) {
        this.getGameIcon()
      }
    },
    beforeCreate() {
      // 进入页面时清除定时器
      clearInterval(this.timer)
      this.timer = null
    },
    destroyed() {
      // 每次离开当前界面时，清除定时器
      clearInterval(this.timer)
      // this.timer = null;
    },
    created() {
      // 请求数据
      this.gameAjax()
      // 请求期号数据
      this.timeAjax()
      // 请求数据
      this.ListAjax()
      // 请求用户数据
      this.getUserInfo()
      // 请求近5期期号数据
      this.PhaseAjax()
      // 请求游戏图片
      this.getGameIcon()
    },
    beforeDestroy() {
      // 每次离开当前界面时，清除监听
      clearInterval(this.timer);
      // this.timer = null;
      window.removeEventListener('focus', this.handleWinFocus);
    },
    mounted() {
      window.addEventListener('focus', this.handleWinFocus);
    }
  }
</script>
<style>
    /* 主要内容开始 */
    .Timhonor_content_box {
        position: relative;
        width: 100%;
    }
    .game_message_box .el-button {
        display: none
    }
</style>
